package com.ibm.mobile.foundation.ibmmobileanalyticssample;

import android.app.Activity;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import com.worklight.common.Logger;
import com.worklight.common.WLAnalytics;
import com.worklight.wlclient.api.WLAccessTokenListener;
import com.worklight.wlclient.api.WLAuthorizationManager;
import com.worklight.wlclient.api.WLClient;
import com.worklight.wlclient.api.WLFailResponse;
import com.worklight.wlclient.api.WLResourceRequest;
import com.worklight.wlclient.api.WLResponse;
import com.worklight.wlclient.api.WLResponseListener;
import com.worklight.wlclient.auth.AccessToken;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

public class MainActivity extends AppCompatActivity {
    private WLClient client;
    private static final Logger logger = Logger.getInst ance("IBMMASample");

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        client = WLClient.createInstance(this);
        setContentView(R.layout.activity_main);
        WLAuthorizationManager.getInstance().obtainAccessToken(null, new WLAccessTokenListener() {
            @Override
            public void onSuccess(AccessToken token) {
                System.out.println("Received the following access token value: " + token);

            }

            @Override
            public void onFailure(WLFailResponse wlFailResponse) {
                System.out.println("Did not receive an access token from server: " + wlFailResponse.getErrorMsg());

            }
        });
        WLAnalytics.init(this.getApplication());
        WLAnalytics.addDeviceEventListener(WLAnalytics.DeviceEvent.LIFECYCLE);
        WLAnalytics.addDeviceEventListener(WLAnalytics.DeviceEvent.NETWORK);

        // if the previous session had crashed then send crash analytics data captured
        if (Logger.isUnCaughtExceptionDetected()) {
            Logger.send();
            WLAnalytics.send();
        }

        new OpeningAlert(this).show();


    }

    public void onSetUserClicked(android.view.View view) {
        EditText mEdit = (EditText) findViewById(R.id.userId);
        WLAnalytics.setUserContext(mEdit.getText().toString());
        WLAnalytics.send();
    }

    public void onWLAnalyticsSend(android.view.View view) {
        WLAnalytics.send();
    }

    public void onCallApiClicked(android.view.View view) throws IOException, URISyntaxException {
        EditText mEdit = (EditText) findViewById(R.id.nwEndpoint);
        WLResourceRequest request = new WLResourceRequest(new URI(mEdit.getText().toString()), WLResourceRequest.GET);
        request.send(new WLResponseListener() {

            @Override
            public void onSuccess(WLResponse wlResponse) {
                //handle success of HTTP call and use wlResponse
                WLAnalytics.send();
            }

            @Override
            public void onFailure(WLFailResponse wlFailResponse) {
                //handle failure of HTTP call and use wlFailResponse
                WLAnalytics.send();
            }
        });
    }

    public void onLogMsgBtnClicked(android.view.View view) {
        EditText mEdit = (EditText) findViewById(R.id.logMsg);
        String logMsg = mEdit.getText().toString();
        Logger.setLevel(Logger.LEVEL.INFO);
        logger.info("INFO " + logMsg);
        logger.debug("DEBUG " + logMsg);
        logger.warn("WARN " + logMsg);
        logger.error("ERROR " + logMsg);
        Logger.send();
    }

    public void onLogCustDataClicked(android.view.View view) throws JSONException {
        EditText mEdit = (EditText) findViewById(R.id.custData);
        String customData = mEdit.getText().toString();
        JSONObject jsonObject = new JSONObject(customData);

        WLAnalytics.log("sampleCustData", jsonObject);
        WLAnalytics.send();
    }

    public void onCrashClicked(View v) throws JSONException {
        int denominator = 0;
        logger.debug("About to divide by " + denominator);

        int crash = 8 / denominator;
    }

    public void onFeedbackClicked(View v) throws JSONException {
        WLAnalytics.triggerFeedbackMode();
    }

    public void onCallAdapter(View v) throws JSONException {
        final Activity activity = this;
        try {
            WLResourceRequest request = new WLResourceRequest(new URI("adapters/javaAdapter/resource/unprotected"), WLResourceRequest.GET);
            WLResponseListener listener = new WLResponseListener() {
                @Override
                public void onSuccess(WLResponse wlResponse) {
                    final String message = wlResponse.getResponseText();
                    activity.runOnUiThread(new Runnable() {
                        public void run() {
                            Toast.makeText(activity, message, Toast.LENGTH_SHORT).show();
                        }
                    });
                    WLAnalytics.send();
                }

                @Override
                public void onFailure(WLFailResponse wlFailResponse) {
                    logger.error("Something bad happemed: " + wlFailResponse.getErrorMsg());
                    WLAnalytics.send();
                }
            };
            request.send(listener);
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }

    }
}
