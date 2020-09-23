package com.krishisansar;

import android.content.Intent;
import android.os.Bundle;
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;

public class SplashActivity extends ReactActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
			SplashScreen.show(this);
			super.onCreate(savedInstanceState);
			Intent intent = new Intent(this, MainActivity.class);
			startActivity(intent);
			finish();
    }
}