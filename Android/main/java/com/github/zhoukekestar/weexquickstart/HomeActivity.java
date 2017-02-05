package com.github.zhoukekestar.weexquickstart;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.View;
import android.widget.ImageView;

/**
 * Created by chenlei on 16/12/29.
 */
public class HomeActivity extends Activity implements View.OnClickListener {

    private ImageView qiubai;
    private ImageView baozou;
    private ImageView neihan;
    private ImageView pengfu;
    private ImageView mahua;
    private ImageView baisi;
    private ImageView laifu;
    private ImageView xiaohua;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);
        qiubai = (ImageView)findViewById(R.id.qiubai);
        qiubai.setOnClickListener(this);

        baozou = (ImageView)findViewById(R.id.baozou);
        baozou.setOnClickListener(this);

        neihan = (ImageView)findViewById(R.id.neihan);
        neihan.setOnClickListener(this);

        pengfu = (ImageView)findViewById(R.id.pengfu);
        pengfu.setOnClickListener(this);

        mahua = (ImageView)findViewById(R.id.kuailemahua);
        mahua.setOnClickListener(this);

        baisi = (ImageView)findViewById(R.id.baisijie);
        baisi.setOnClickListener(this);

        laifu = (ImageView)findViewById(R.id.laifudao);
        laifu.setOnClickListener(this);

        xiaohua = (ImageView)findViewById(R.id.xiaohua);
        xiaohua.setOnClickListener(this);
    }


    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if(keyCode == KeyEvent.KEYCODE_BACK){
            moveTaskToBack(false);
            return true;
        }
        return super.onKeyDown(keyCode, event);
    }


    @Override
    public void onClick(View v) {
            switch (v.getId()){
                case R.id.baozou:
                    Intent intent = new Intent(HomeActivity.this, WeexActivity.class);
                    intent.putExtra("url","weex/joke/baozou.js");
                    startActivity(intent);
                    break;
                case R.id.laifudao:
                    Intent intent2 = new Intent(HomeActivity.this, WeexActivity.class);
                    intent2.putExtra("url","weex/joke/laifu.js");
                    startActivity(intent2);
                    break;
                case R.id.baisijie:
                    Intent intent3 = new Intent(HomeActivity.this, WeexActivity.class);
                    intent3.putExtra("url","weex/joke/baisi.js");
                    startActivity(intent3);
                    break;
                case R.id.neihan:
                    Intent intent4 = new Intent(HomeActivity.this, WeexActivity.class);
                    intent4.putExtra("url","weex/joke/neihan.js");
                    startActivity(intent4);
                    break;
                case R.id.pengfu:
                    Intent intent5 = new Intent(HomeActivity.this, WeexActivity.class);
                    intent5.putExtra("url","weex/joke/pengfu.js");
                    startActivity(intent5);
                    break;
                case R.id.kuailemahua:
                    Intent intent6 = new Intent(HomeActivity.this, WeexActivity.class);
                    intent6.putExtra("url","weex/joke/mahua.js");
                    startActivity(intent6);
                    break;
                case R.id.qiubai:
                    Intent intent1 = new Intent(HomeActivity.this, WeexActivity.class);
                    intent1.putExtra("url","weex/joke/qiushibaike.js");
                    startActivity(intent1);
                    break;
                case R.id.xiaohua:
                    Intent intent7 = new Intent(HomeActivity.this,WeexActivity.class);
                    intent7.putExtra("url","weex/index.js");
                    startActivity(intent7);
                default:
                    break;
            }
    }
}
