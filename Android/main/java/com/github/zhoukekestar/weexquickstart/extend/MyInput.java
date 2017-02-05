package com.github.zhoukekestar.weexquickstart.extend;


import android.text.TextUtils;
import android.view.Gravity;

import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.common.Constants;
import com.taobao.weex.dom.TextAreaEditTextDomObject;
import com.taobao.weex.dom.WXDomObject;
import com.taobao.weex.ui.component.AbstractEditComponent;
import com.taobao.weex.ui.component.WXComponentProp;
import com.taobao.weex.ui.component.WXVContainer;
import com.taobao.weex.ui.view.WXEditText;
import com.taobao.weex.utils.WXUtils;

/**
 * Created by chenlei on 16/12/26.
 */
public class MyInput extends AbstractEditComponent {

    public MyInput(WXSDKInstance instance, WXDomObject dom, WXVContainer parent, boolean isLazy) {
        super(instance, dom, parent, isLazy);
    }

    @Override
    protected void appleStyleAfterCreated(WXEditText editText) {
        super.appleStyleAfterCreated(editText);
        String rowsStr = (String) getDomObject().getStyles().get(Constants.Name.ROWS);

        int rows = TextAreaEditTextDomObject.DEFAULT_ROWS;
        try{
            if(!TextUtils.isEmpty(rowsStr)) {
                rows = Integer.parseInt(rowsStr);
            }
        }catch (NumberFormatException e){
            //ignore
            e.printStackTrace();
        }

        editText.setLines(rows);
        editText.setMinLines(rows);
        editText.setGravity(Gravity.TOP);
    }

    @Override
    protected boolean setProperty(String key, Object param) {
        switch (key) {
            case Constants.Name.ROWS:
                Integer rows = WXUtils.getInteger(param,null);
                if (rows != null)
                    setRows(rows);
                return true;
        }
        return super.setProperty(key, param);
    }

    @WXComponentProp(name = Constants.Name.ROWS)
    public void setRows(int rows){
        WXEditText text = getHostView();
        if(text == null||rows <=0 ){
            return;
        }

        text.setLines(rows);
    }
}
