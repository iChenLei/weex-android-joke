package com.github.zhoukekestar.weexquickstart;

import android.content.Intent;
import android.database.Cursor;
import android.net.Uri;
import android.os.Bundle;
import android.provider.MediaStore;
import android.util.Log;
import android.view.View;
import android.app.Activity;
import android.widget.Toast;

import com.alibaba.fastjson.JSON;
import com.avos.avoscloud.AVException;
import com.avos.avoscloud.AVFile;
import com.avos.avoscloud.ProgressCallback;
import com.avos.avoscloud.SaveCallback;
import com.github.zhoukekestar.weexquickstart.R;
import com.taobao.weex.IWXRenderListener;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.bridge.WXBridgeManager;
import com.taobao.weex.common.WXRefreshData;
import com.taobao.weex.common.WXRenderStrategy;
import com.taobao.weex.utils.WXFileUtils;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by chenlei on 17/1/3.
 */
public class WeexActivity extends Activity implements IWXRenderListener {

    private static final String TAG = "WebActivity";
    private static WXSDKInstance mInstance;
    private String URL;
    private String Path;
    private static final int REQUESTCODE_PICK = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);


        URL = getIntent().getStringExtra("url");

        mInstance = new WXSDKInstance(this);
        mInstance.registerRenderListener(this);
        mInstance.render("WeexQuickStart", WXFileUtils.loadAsset(URL, this), null, null, -1, -1, WXRenderStrategy.APPEND_ASYNC);
    }

    public void show(){
        Toast.makeText(getApplicationContext(),"show....",Toast.LENGTH_SHORT).show();
    }

    @Override
    public void onViewCreated(WXSDKInstance wxsdkInstance, View view) {
        Log.v(TAG, "onViewCreated");
        setContentView(view);
    }

    @Override
    public void onRenderSuccess(WXSDKInstance instance, int width, int height) {
        Log.v(TAG, "onRenderSuccess");
    }

    @Override
    public void onRefreshSuccess(WXSDKInstance wxsdkInstance, int i, int i1) {
        Log.v(TAG, "onRefreshSuccess");
    }

    @Override
    public void onException(WXSDKInstance instance, String errCode, String msg) {
        Log.v(TAG, "onException errCode:" + errCode + " msg:" + msg);
    }


    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        Toast.makeText(getApplicationContext(),"这个函数有效吗？",Toast.LENGTH_SHORT);
        super.onActivityResult(requestCode, resultCode, data);
        String s = String.valueOf(resultCode);
        if(resultCode == Activity.RESULT_OK && requestCode ==  REQUESTCODE_PICK){
            Uri uri = data.getData();
            Cursor cursor = getContentResolver().query(uri, null, null, null,null);
            if (cursor != null && cursor.moveToFirst()) {
                Path = cursor.getString(cursor.getColumnIndexOrThrow(MediaStore.Images.Media.DATA));
                Log.d("Path", Path);
            }
            try {
                final AVFile file = AVFile.withAbsoluteLocalPath("test.png",Path);
                file.saveInBackground(new SaveCallback() {
                    @Override
                    public void done(AVException e) {
                        Log.d(TAG, file.getUrl());
                        WXBridgeManager manager = WXBridgeManager.getInstance();
                        Map<String,String> urlData = new HashMap<String, String>();
                        urlData.put("url",file.getUrl());
                        urlData.put("showimage","true");
                        urlData.put("uploadhint","改变图片");
                        urlData.put("showdelete","true");
                        String jsonStr = JSON.toJSONString(urlData);
                        WXRefreshData refreshData = new WXRefreshData(jsonStr,false);
                        manager.refreshInstance(mInstance.getInstanceId(),refreshData);
                    }
                }, new ProgressCallback() {
                    @Override
                    public void done(Integer integer) {
                        Toast.makeText(getApplicationContext(),"已经上传"+String.valueOf(integer)+"%",Toast.LENGTH_SHORT).show();
                    }
                });
            }catch(Exception e){
                Toast.makeText(getApplicationContext(),"上传图片失败",Toast.LENGTH_SHORT).show();
            }
        }else {
            Toast.makeText(getApplicationContext(),"请选择图片",Toast.LENGTH_SHORT).show();
        }
    }

}
