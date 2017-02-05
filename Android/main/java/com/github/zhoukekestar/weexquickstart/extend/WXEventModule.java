package com.github.zhoukekestar.weexquickstart.extend;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Build;
import android.provider.MediaStore;
import android.util.Log;
import android.widget.Toast;
import android.os.Bundle;

import com.github.zhoukekestar.weexquickstart.AboutActivity;
import com.github.zhoukekestar.weexquickstart.HomeActivity;
import com.github.zhoukekestar.weexquickstart.LoginActivity;
import com.github.zhoukekestar.weexquickstart.WeexActivity;
import com.github.zhoukekestar.weexquickstart.CommentActivity;
import com.taobao.weex.common.WXModule;
import com.taobao.weex.common.WXModuleAnno;
import static android.widget.Toast.LENGTH_SHORT;


/**
 * Created by chenlei on 16/12/25.
 */
public class WXEventModule extends WXModule {

    @WXModuleAnno(runOnUIThread = true)
    public void gotoedit(String msg) {
        if(mWXSDKInstance.getContext() instanceof Activity) {
            Intent intent = new Intent(mWXSDKInstance.getContext(), WeexActivity.class);
            intent.putExtra("url","weex/modules/send.js");
            mWXSDKInstance.getContext().startActivity(intent);
       }
    }

    @WXModuleAnno(runOnUIThread = true)
    public void gotoabout(){
        if (mWXSDKInstance.getContext() instanceof Activity){
            Intent intent = new Intent(mWXSDKInstance.getContext(), AboutActivity.class);
            mWXSDKInstance.getContext().startActivity(intent);
        }
    }

    @WXModuleAnno(runOnUIThread = true)
    public void backtohome(String msg){
        if(mWXSDKInstance.getContext() instanceof Activity){
           ((Activity) mWXSDKInstance.getContext()).finish();
        }
    }

    @WXModuleAnno(runOnUIThread = true)
    public void comment(String obj,String content){
        if(mWXSDKInstance.getContext() instanceof Activity){

            Intent intent = new Intent(mWXSDKInstance.getContext(), CommentActivity.class);
            intent.putExtra("objectid",obj);
            intent.putExtra("content",content);
            mWXSDKInstance.getContext().startActivity(intent);
        }
    }

    @WXModuleAnno(runOnUIThread = true)
    public  void share(String msg){

        if(mWXSDKInstance.getContext() instanceof  Activity) {
            Intent shareIntent = new Intent();
            shareIntent.setAction(Intent.ACTION_SEND);
            shareIntent.putExtra(Intent.EXTRA_TEXT, msg);
            shareIntent.setType("text/plain");
            shareIntent.putExtra(Intent.EXTRA_SUBJECT,"好友分享");
            shareIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            mWXSDKInstance.getContext().startActivity(Intent.createChooser(shareIntent,"分享到"));
        }
    }


    @WXModuleAnno(runOnUIThread = true)
    public void sp(String name,String pass) {
        if (mWXSDKInstance.getContext() instanceof Activity) {
            SharedPreferences sp = mWXSDKInstance.getContext().getSharedPreferences("userinfo", Context.MODE_WORLD_WRITEABLE);
            SharedPreferences.Editor edit = sp.edit();
            edit.putString("username",name);
            edit.putString("password",pass);
            edit.commit();
            Intent intent = new Intent(mWXSDKInstance.getContext(), HomeActivity.class);
            mWXSDKInstance.getContext().startActivity(intent);
        }
    }

    @WXModuleAnno(runOnUIThread = true)
    public void showsp(){

        if(mWXSDKInstance.getContext() instanceof Activity){
            SharedPreferences sp = mWXSDKInstance.getContext().getSharedPreferences("userinfo", Context.MODE_WORLD_WRITEABLE);
            String a = sp.getString("username","default");
            Toast.makeText(mWXSDKInstance.getContext(),a, LENGTH_SHORT).show();
        }

    }

    @WXModuleAnno(runOnUIThread = true)
    public void quit(){
        if(mWXSDKInstance.getContext() instanceof Activity){
            SharedPreferences sp = mWXSDKInstance.getContext().getSharedPreferences("userinfo",Context.MODE_WORLD_WRITEABLE);
            SharedPreferences.Editor edit = sp.edit();
            edit.putString("username","");
            edit.putString("password","");
            edit.commit();
            Intent intent = new Intent(mWXSDKInstance.getContext(), LoginActivity.class);
            mWXSDKInstance.getContext().startActivity(intent);
            ((Activity) mWXSDKInstance.getContext()).finish();
        }
    }

    @WXModuleAnno(runOnUIThread = true)
    public void uploadimage(){
        int REQUESTCODE_PICK = 0;
        Intent intent;
        if(Build.VERSION.SDK_INT < 19){
            Log.d("chenlei api level","Your api is lower than 19");
            intent = new Intent(Intent.ACTION_GET_CONTENT);
            intent.setType("image/*");
        }else{
            Log.d("chenlei api level","Your api is higher than 19");
            intent = new Intent(Intent.ACTION_PICK, MediaStore.Images.Media.EXTERNAL_CONTENT_URI);
        }
        ((Activity)mWXSDKInstance.getContext()).startActivityForResult(intent,REQUESTCODE_PICK);
    }

}
