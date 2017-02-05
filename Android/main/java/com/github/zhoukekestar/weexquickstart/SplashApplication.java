package com.github.zhoukekestar.weexquickstart;

import android.app.Application;

import com.avos.avoscloud.AVOSCloud;
import com.github.zhoukekestar.weexquickstart.extend.MyInput;
import com.github.zhoukekestar.weexquickstart.extend.WXEventModule;
import com.taobao.weex.InitConfig;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.common.WXException;

/**
 * Created by chenlei on 16/12/29.
 */
public class SplashApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();

        AVOSCloud.initialize(this,"zksrg6fpR18GjAsv0eHPs4Kz-gzGzoHsz","XfkYkvCvsJ1FkhEqzdTsMnNC");

        InitConfig config = new InitConfig.Builder().setImgAdapter(new ImageAdapter()).build();
        WXSDKEngine.initialize(this,config);
        try{
            WXSDKEngine.registerModule("myModule", WXEventModule.class);
            WXSDKEngine.registerComponent("myinput", MyInput.class);
        }catch (WXException e){
            e.printStackTrace();
        }
    }

}
