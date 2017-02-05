package com.github.zhoukekestar.weexquickstart;

import android.app.Activity;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.os.Handler;


/**
 * Created by chenlei on 16/12/29.
 */
public class SplashActivity extends Activity{

    private static  final long SPLASH_DELAY_MILSS = 2000;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);

        SharedPreferences sp = getSharedPreferences("userinfo",MODE_WORLD_WRITEABLE);

        String username = sp.getString("username","");
        String un = "暴走漫画";
        if(username.equals(un)){
                new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                goMain();
            }
        },SPLASH_DELAY_MILSS);}
        else {
           new Handler().postDelayed(new Runnable() {
                @Override
                public void run() {
                    goLogin();
                }
            },SPLASH_DELAY_MILSS);
        }
    }

    private  void goMain(){
        Intent intent = new Intent(SplashActivity.this,HomeActivity.class);
        startActivity(intent);
        SplashActivity.this.finish();
    }

    private void goLogin(){
        Intent intent = new Intent(SplashActivity.this,LoginActivity.class);
        startActivity(intent);
        SplashActivity.this.finish();
    }
}
