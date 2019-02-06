package com.ibm.mobile.foundation.ibmmobileanalyticssample;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.widget.Toast;

/**
 * Created by rott on 2/17/16.
 */
public class OpeningAlert extends AlertDialog {

    private static class ButtonClick implements OnClickListener {
        @Override
        public void onClick(DialogInterface dialog, int which) {
        }
    }

    public OpeningAlert(Activity activity) {
        super(activity);
        this.setTitle("WLAnalytics.init");
        this.setMessage("Mobile Analytics Console now lists this application");
        this.setButton(AlertDialog.BUTTON_POSITIVE, "OK", new ButtonClick());
    }

}


