// Screens/AdManager.js

import {
  InterstitialAd,
  AdEventType,
  TestIds,
} from 'react-native-google-mobile-ads';

const adUnitId = __DEV__
  ? TestIds.INTERSTITIAL
  : 'ca-app-pub-9508094092788627/8518482750';

let interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
});

export const showInterstitialAdWithCallback = (callback) => {
  interstitial.load();

  const onLoaded = interstitial.addAdEventListener(AdEventType.LOADED, () => {
    interstitial.show();
  });

  const onClosed = interstitial.addAdEventListener(AdEventType.CLOSED, () => {
    interstitial = InterstitialAd.createForAdRequest(adUnitId);
    callback(); // Trigger navigation after ad is closed
  });

  const onError = interstitial.addAdEventListener(AdEventType.ERROR, () => {
    callback(); // Fallback if ad fails to load
  });

  return () => {
    onLoaded();
    onClosed();
    onError();
  };
};
