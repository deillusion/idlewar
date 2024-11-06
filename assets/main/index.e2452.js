window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  ATAndroidBannerTS: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5878dsDRFVIJ4aq7lhOJmR8", "ATAndroidBannerTS");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ATAndroidBannerTS = void 0;
    var classJavaName = "com/anythink/cocosjs/ATBannerJSBridge";
    exports.ATAndroidBannerTS = {
      loadBanner: function(placementId, settings) {
        cc.log("Android-loadBanner:" + settings);
        jsb.reflection.callStaticMethod(classJavaName, "load", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, settings);
      },
      setAdListener: function(listener) {
        cc.log("Android-setAdListener");
        jsb.reflection.callStaticMethod(classJavaName, "setAdListener", "(Ljava/lang/String;)V", listener);
      },
      hasAdReady: function(placementId) {
        cc.log("Android-hasAdReady");
        return jsb.reflection.callStaticMethod(classJavaName, "isAdReady", "(Ljava/lang/String;)Z", placementId);
      },
      checkAdStatus: function(placementId) {
        cc.log("Android-checkAdStatus:" + placementId);
        return jsb.reflection.callStaticMethod(classJavaName, "checkAdStatus", "(Ljava/lang/String;)Ljava/lang/String;", placementId);
      },
      showAdInPosition: function(placementId, position) {
        cc.log("Android-showAdInPosistion");
        jsb.reflection.callStaticMethod(classJavaName, "showWithPosition", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", placementId, position, "");
      },
      showAdInPositionAndScenario: function(placementId, position, scenario) {
        cc.log("Android-showAdInPositionAndScenario");
        jsb.reflection.callStaticMethod(classJavaName, "showWithPosition", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", placementId, position, scenario);
      },
      showAdInRectangle: function(placementId, showAdRect) {
        cc.log("Android-showAdInRectangle");
        jsb.reflection.callStaticMethod(classJavaName, "showWithRect", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", placementId, showAdRect, "");
      },
      showAdInRectangleAndScenario: function(placementId, showAdRect, scenario) {
        cc.log("Android-showAdInRectangleAndScenario");
        jsb.reflection.callStaticMethod(classJavaName, "showWithRect", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", placementId, showAdRect, scenario);
      },
      removeAd: function(placementId) {
        cc.log("Android-removeAd");
        jsb.reflection.callStaticMethod(classJavaName, "remove", "(Ljava/lang/String;)V", placementId);
      },
      reShowAd: function(placementId) {
        cc.log("Android-reShowAd");
        jsb.reflection.callStaticMethod(classJavaName, "reshow", "(Ljava/lang/String;)V", placementId);
      },
      hideAd: function(placementId) {
        cc.log("Android-hideAd");
        jsb.reflection.callStaticMethod(classJavaName, "hide", "(Ljava/lang/String;)V", placementId);
      }
    };
    cc._RF.pop();
  }, {} ],
  ATAndroidIntersitialAutoTS: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4d057xJcwlNB5CZMUwLd3mi", "ATAndroidIntersitialAutoTS");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ATAndroidInterstitialAutoAdTS = void 0;
    var classJavaName = "com/anythink/cocosjs/ATInterstitialAutoAdJSBridge";
    exports.ATAndroidInterstitialAutoAdTS = {
      setAdListener: function(listener) {
        cc.log("Android-setAdListener");
        jsb.reflection.callStaticMethod(classJavaName, "setAdListener", "(Ljava/lang/String;)V", listener);
      },
      addPlacementIds: function(placementIds) {
        cc.log("Android-addPlacementIds");
        jsb.reflection.callStaticMethod(classJavaName, "addPlacementIds", "(Ljava/lang/String;)V", placementIds);
      },
      removePlacementId: function(placementId) {
        cc.log("Android-removePlacementId");
        jsb.reflection.callStaticMethod(classJavaName, "removePlacementId", "(Ljava/lang/String;)V", placementId);
      },
      setAdExtraData: function(placementId, settings) {
        cc.log("Android-setAdExtraData");
        jsb.reflection.callStaticMethod(classJavaName, "setAdExtraData", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, settings);
      },
      hasAdReady: function(placementId) {
        cc.log("Android-hasAdReady");
        return jsb.reflection.callStaticMethod(classJavaName, "isAdReady", "(Ljava/lang/String;)Z", placementId);
      },
      checkAdStatus: function(placementId) {
        cc.log("Android-checkAdStatus:" + placementId);
        return jsb.reflection.callStaticMethod(classJavaName, "checkAdStatus", "(Ljava/lang/String;)Ljava/lang/String;", placementId);
      },
      showAd: function(placementId) {
        cc.log("Android-ivautoad_showAd:" + placementId);
        jsb.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;)V", placementId);
      },
      showAdInScenario: function(placementId, scenario) {
        cc.log("Android-ivautoad_showAdInScenario:" + placementId + "---" + scenario);
        jsb.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, scenario);
      },
      entryAdScenario: function(placementId, scenario) {
        cc.log("Android-entryAdScenario:" + placementId + "---" + scenario);
        jsb.reflection.callStaticMethod(classJavaName, "entryAdScenario", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, scenario);
      }
    };
    cc._RF.pop();
  }, {} ],
  ATAndroidIntersitialTS: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "77488mJxaZEZLbbXfaRI8ki", "ATAndroidIntersitialTS");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ATAndroidInterstitialJS = void 0;
    var classJavaName = "com/anythink/cocosjs/ATInterstitialJSBridge";
    exports.ATAndroidInterstitialJS = {
      loadInterstitial: function(placementId, settings) {
        cc.log("Android-loadInterstitial");
        jsb.reflection.callStaticMethod(classJavaName, "load", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, settings);
      },
      setAdListener: function(listener) {
        cc.log("Android-setAdListener");
        jsb.reflection.callStaticMethod(classJavaName, "setAdListener", "(Ljava/lang/String;)V", listener);
      },
      hasAdReady: function(placementId) {
        cc.log("Android-hasAdReady");
        return jsb.reflection.callStaticMethod(classJavaName, "isAdReady", "(Ljava/lang/String;)Z", placementId);
      },
      checkAdStatus: function(placementId) {
        cc.log("Android-checkAdStatus:" + placementId);
        return jsb.reflection.callStaticMethod(classJavaName, "checkAdStatus", "(Ljava/lang/String;)Ljava/lang/String;", placementId);
      },
      showAd: function(placementId) {
        cc.log("Android-showAd:" + placementId);
        jsb.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;)V", placementId);
      },
      showAdInScenario: function(placementId, scenario) {
        cc.log("Android-showAdInScenario:" + placementId + "---" + scenario);
        jsb.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, scenario);
      },
      entryAdScenario: function(placementId, scenario) {
        cc.log("Android-entryAdScenario:" + placementId + "---" + scenario);
        jsb.reflection.callStaticMethod(classJavaName, "entryAdScenario", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, scenario);
      }
    };
    cc._RF.pop();
  }, {} ],
  ATAndroidJS: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "afeefa4i+1OX6ntDe5cRZ8l", "ATAndroidJS");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ATAndroidJS = void 0;
    var classJavaName = "com/anythink/cocosjs/ATJSBridge";
    exports.ATAndroidJS = {
      printJsLog: function(msg) {
        void 0 != msg && null != msg && jsb.reflection.callStaticMethod("android/util/Log", "i", "(Ljava/lang/String;Ljava/lang/String;)I", "AT-Cocos-JS", msg);
      },
      initSDK: function(appid, appkey) {
        jsb.reflection.callStaticMethod(classJavaName, "initSDK", "(Ljava/lang/String;Ljava/lang/String;)V", appid, appkey);
      },
      initCustomMap: function(customMap) {
        jsb.reflection.callStaticMethod(classJavaName, "initCustomMap", "(Ljava/lang/String;)V", customMap);
      },
      setPlacementCustomMap: function(placmentId, customMap) {
        jsb.reflection.callStaticMethod(classJavaName, "setPlacementCustomMap", "(Ljava/lang/String;Ljava/lang/String;)V", placmentId, customMap);
      },
      setGDPRLevel: function(level) {
        jsb.reflection.callStaticMethod(classJavaName, "setGDPRLevel", "(I)V", level);
      },
      getGDPRLevel: function() {
        return jsb.reflection.callStaticMethod(classJavaName, "getGDPRLevel", "()I");
      },
      getUserLocation: function(callbackMethod) {
        jsb.reflection.callStaticMethod(classJavaName, "getUserLocation", "(Ljava/lang/String;)V", callbackMethod);
      },
      showGDPRAuth: function() {
        jsb.reflection.callStaticMethod(classJavaName, "showGDPRAuth", "()V");
      },
      setLogDebug: function(debug) {
        jsb.reflection.callStaticMethod(classJavaName, "setLogDebug", "(Z)V", debug);
      },
      deniedUploadDeviceInfo: function(deniedInfo) {
        jsb.reflection.callStaticMethod(classJavaName, "deniedUploadDeviceInfo", "(Ljava/lang/String;)V", deniedInfo);
      }
    };
    cc._RF.pop();
  }, {} ],
  ATAndroidNativeTS: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "977d7SSJBdLSKSwP106WFd3", "ATAndroidNativeTS");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ATAndroidNativeTS = void 0;
    var classJavaName = "com/anythink/cocosjs/ATNativeJSBridge";
    exports.ATAndroidNativeTS = {
      loadNative: function(placementId, settings) {
        cc.log("Android-loadNative");
        jsb.reflection.callStaticMethod(classJavaName, "load", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, settings);
      },
      setAdListener: function(listener) {
        cc.log("Android-setAdListener");
        jsb.reflection.callStaticMethod(classJavaName, "setAdListener", "(Ljava/lang/String;)V", listener);
      },
      hasAdReady: function(placementId) {
        cc.log("Android-hasAdReady");
        return jsb.reflection.callStaticMethod(classJavaName, "isAdReady", "(Ljava/lang/String;)Z", placementId);
      },
      checkAdStatus: function(placementId) {
        cc.log("Android-checkAdStatus:" + placementId);
        return jsb.reflection.callStaticMethod(classJavaName, "checkAdStatus", "(Ljava/lang/String;)Ljava/lang/String;", placementId);
      },
      showAd: function(placementId, adViewProperty) {
        cc.log("Android-showAd");
        jsb.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", placementId, adViewProperty, "");
      },
      showAdInScenario: function(placementId, adViewProperty, scenario) {
        cc.log("Android-showAdInScenario");
        jsb.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", placementId, adViewProperty, scenario);
      },
      removeAd: function(placementId) {
        cc.log("Android-removeAd");
        jsb.reflection.callStaticMethod(classJavaName, "remove", "(Ljava/lang/String;)V", placementId);
      },
      entryAdScenario: function(placementId, scenario) {
        cc.log("Android-entryAdScenario:" + placementId + "---" + scenario);
        jsb.reflection.callStaticMethod(classJavaName, "entryAdScenario", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, scenario);
      }
    };
    cc._RF.pop();
  }, {} ],
  ATAndroidRewardedVideoAutoTS: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d4c32tD7W5IfLBsgIfwOE7D", "ATAndroidRewardedVideoAutoTS");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ATAndroidRewardedVideoAutoAdTS = void 0;
    var classJavaName = "com/anythink/cocosjs/ATRewardedVideoAutoAdJSBridge";
    exports.ATAndroidRewardedVideoAutoAdTS = {
      setAdListener: function(listener) {
        cc.log("Android-setAdListener");
        jsb.reflection.callStaticMethod(classJavaName, "setAdListener", "(Ljava/lang/String;)V", listener);
      },
      addPlacementIds: function(placementIds) {
        cc.log("Android-addPlacementIds");
        jsb.reflection.callStaticMethod(classJavaName, "addPlacementIds", "(Ljava/lang/String;)V", placementIds);
      },
      removePlacementId: function(placementId) {
        cc.log("Android-removePlacementId");
        jsb.reflection.callStaticMethod(classJavaName, "removePlacementId", "(Ljava/lang/String;)V", placementId);
      },
      setAdExtraData: function(placementId, settings) {
        cc.log("Android-setAdExtraData");
        jsb.reflection.callStaticMethod(classJavaName, "setAdExtraData", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, settings);
      },
      hasAdReady: function(placementId) {
        cc.log("Android-hasAdReady");
        return jsb.reflection.callStaticMethod(classJavaName, "isAdReady", "(Ljava/lang/String;)Z", placementId);
      },
      checkAdStatus: function(placementId) {
        cc.log("Android-checkAdStatus:" + placementId);
        return jsb.reflection.callStaticMethod(classJavaName, "checkAdStatus", "(Ljava/lang/String;)Ljava/lang/String;", placementId);
      },
      showAd: function(placementId) {
        cc.log("Android-rvautoad_showAd:" + placementId);
        jsb.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;)V", placementId);
      },
      showAdInScenario: function(placementId, scenario) {
        cc.log("Android-rvautoad_showAdInScenario:" + placementId + "---" + scenario);
        jsb.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, scenario);
      },
      entryAdScenario: function(placementId, scenario) {
        cc.log("Android-entryAdScenario:" + placementId + "---" + scenario);
        jsb.reflection.callStaticMethod(classJavaName, "entryAdScenario", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, scenario);
      }
    };
    cc._RF.pop();
  }, {} ],
  ATAndroidRewardedVideoTS: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c49c1amyVFBZLGQ7YmpKXtj", "ATAndroidRewardedVideoTS");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ATAndroidRewardedVideoJS = void 0;
    var classJavaName = "com/anythink/cocosjs/ATRewardedVideoJSBridge";
    exports.ATAndroidRewardedVideoJS = {
      loadRewardedVideo: function(placementId, settings) {
        cc.log("Android-loadRewardedVideo");
        jsb.reflection.callStaticMethod(classJavaName, "load", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, settings);
      },
      setAdListener: function(listener) {
        cc.log("Android-setAdListener");
        jsb.reflection.callStaticMethod(classJavaName, "setAdListener", "(Ljava/lang/String;)V", listener);
      },
      hasAdReady: function(placementId) {
        cc.log("Android-hasAdReady");
        return jsb.reflection.callStaticMethod(classJavaName, "isAdReady", "(Ljava/lang/String;)Z", placementId);
      },
      checkAdStatus: function(placementId) {
        cc.log("Android-checkAdStatus:" + placementId);
        return jsb.reflection.callStaticMethod(classJavaName, "checkAdStatus", "(Ljava/lang/String;)Ljava/lang/String;", placementId);
      },
      showAd: function(placementId) {
        cc.log("Android-rv_showAd:" + placementId);
        jsb.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;)V", placementId);
      },
      showAdInScenario: function(placementId, scenario) {
        cc.log("Android-rv_showAdInScenario:" + placementId + "---" + scenario);
        jsb.reflection.callStaticMethod(classJavaName, "show", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, scenario);
      },
      entryAdScenario: function(placementId, scenario) {
        cc.log("Android-entryAdScenario:" + placementId + "---" + scenario);
        jsb.reflection.callStaticMethod(classJavaName, "entryAdScenario", "(Ljava/lang/String;Ljava/lang/String;)V", placementId, scenario);
      }
    };
    cc._RF.pop();
  }, {} ],
  ATJSSDK: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "339fcGm9G1PNLLfW2omuAPh", "ATJSSDK");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ATJSSDK = void 0;
    var ATAndroidJS_1 = require("./Android/ATAndroidJS");
    var ATiOSJS_1 = require("./iOS/ATiOSJS");
    var isDebugLog = false;
    var initPlatformBridge = function() {
      if (cc.sys.os === cc.sys.OS_IOS) return ATiOSJS_1.ATiOSJS;
      if (cc.sys.os === cc.sys.OS_ANDROID) return ATAndroidJS_1.ATAndroidJS;
    };
    var platformBridge = initPlatformBridge();
    exports.ATJSSDK = {
      kATUserLocationUnknown: 0,
      kATUserLocationInEU: 1,
      kATUserLocationOutOfEU: 2,
      PERSONALIZED: 0,
      NONPERSONALIZED: 1,
      UNKNOWN: 2,
      OS_VERSION_NAME: "os_vn",
      OS_VERSION_CODE: "os_vc",
      APP_PACKAGE_NAME: "package_name",
      APP_VERSION_NAME: "app_vn",
      APP_VERSION_CODE: "app_vc",
      BRAND: "brand",
      MODEL: "model",
      DEVICE_SCREEN_SIZE: "screen",
      MNC: "mnc",
      MCC: "mcc",
      LANGUAGE: "language",
      TIMEZONE: "timezone",
      USER_AGENT: "ua",
      ORIENTATION: "orient",
      NETWORK_TYPE: "network_type",
      INSTALLER: "it_src",
      ANDROID_ID: "android_id",
      GAID: "gaid",
      MAC: "mac",
      IMEI: "imei",
      OAID: "oaid",
      IDFA: "idfa",
      IDFV: "idfv",
      ATSDKListener: {
        userLocationCallback: null,
        getUserLocationCallback: function(userLocation) {
          void 0 != this.userLocationCallback && null != this.userLocationCallback && this.userLocationCallback(userLocation);
        }
      },
      initSDK: function(appId, appKey) {
        void 0 != platformBridge && null != platformBridge ? platformBridge.initSDK(appId, appKey) : cc.log("You must run on Android or iOS.");
      },
      initCustomMap: function(customMap) {
        void 0 != platformBridge && null != platformBridge ? void 0 != customMap && null != customMap && platformBridge.initCustomMap(JSON.stringify(customMap)) : cc.log("You must run on Android or iOS.");
      },
      setPlacementCustomMap: function(placmentId, customMap) {
        void 0 != platformBridge && null != platformBridge ? void 0 != customMap && null != customMap && platformBridge.setPlacementCustomMap(placmentId, JSON.stringify(customMap)) : cc.log("You must run on Android or iOS.");
      },
      setGDPRLevel: function(level) {
        void 0 != platformBridge && null != platformBridge ? platformBridge.setGDPRLevel(level) : cc.log("You must run on Android or iOS.");
      },
      getGDPRLevel: function() {
        if (void 0 != platformBridge && null != platformBridge) return platformBridge.getGDPRLevel();
        cc.log("You must run on Android or iOS.");
        return this.UNKNOWN;
      },
      getUserLocation: function(userLocationCallback) {
        this.ATSDKListener.userLocationCallback = userLocationCallback;
        void 0 != platformBridge && null != platformBridge ? platformBridge.getUserLocation(GetUserLocationJsCallback) : cc.log("You must run on Android or iOS.");
      },
      showGDPRAuth: function() {
        void 0 != platformBridge && null != platformBridge ? platformBridge.showGDPRAuth() : cc.log("You must run on Android or iOS.");
      },
      setLogDebug: function(debug) {
        isDebugLog = debug;
        void 0 != platformBridge && null != platformBridge ? platformBridge.setLogDebug(debug) : cc.log("You must run on Android or iOS.");
      },
      printLog: function(msg) {
        void 0 != msg && null != msg && isDebugLog && null != platformBridge && (void 0 != platformBridge && null != platformBridge ? platformBridge.printJsLog(msg) : cc.log("You must run on Android or iOS."));
      },
      printLogWithParams: function(tag, methodName, placementId, callbackInfo, errorInfo) {
        this.printLog(tag + "::" + methodName + "()\nplacementId=" + placementId + "\ncallbackInfo=" + callbackInfo + "\nerrorInfo=" + errorInfo);
      },
      deniedUploadDeviceInfo: function(deniedInfo) {
        if (void 0 != platformBridge && null != platformBridge) {
          if (null != deniedInfo) {
            var length = deniedInfo.length;
            var deniedInfoString = "";
            for (var i = 0; i < length; i++) {
              var info = deniedInfo[i];
              deniedInfoString = 0 == i ? info : deniedInfoString + "," + info;
            }
            cc.log("test__" + deniedInfoString);
            platformBridge.deniedUploadDeviceInfo(deniedInfoString);
          }
        } else cc.log("You must run on Android or iOS.");
      }
    };
    var GetUserLocationJsCallback = " ATJSSDK.ATSDKListener.getUserLocationCallback";
    window["ATJSSDK"] = exports.ATJSSDK;
    cc._RF.pop();
  }, {
    "./Android/ATAndroidJS": "ATAndroidJS",
    "./iOS/ATiOSJS": "ATiOSJS"
  } ],
  ATRewardedAutoVideoTSSDK: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f8d9b3GpH9EyK5wXfmSPbNw", "ATRewardedAutoVideoTSSDK");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ATRewardedVideoAutoAdSDK = void 0;
    var ATAndroidRewardedVideoAutoTS_1 = require("./Android/ATAndroidRewardedVideoAutoTS");
    var ATiOSRewardedAutoVideoTS_1 = require("./iOS/ATiOSRewardedAutoVideoTS");
    var ATJSSDK_1 = require("./ATJSSDK");
    var initPlatformBridge = function() {
      if (cc.sys.os === cc.sys.OS_IOS) return ATiOSRewardedAutoVideoTS_1.ATiOSRewardedVideoAutoAdJS;
      if (cc.sys.os === cc.sys.OS_ANDROID) return ATAndroidRewardedVideoAutoTS_1.ATAndroidRewardedVideoAutoAdTS;
    };
    var platformBridge = initPlatformBridge();
    exports.ATRewardedVideoAutoAdSDK = {
      userIdKey: "userID",
      userDataKey: "media_ext",
      ATRewardedVideoListener: {
        developerCallback: null,
        onRewardedVideoAdLoaded: function(placementId) {
          ATJSSDK_1.ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdLoaded(" + placementId + ")");
          null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdLoaded && void 0 != this.developerCallback.onRewardedVideoAdLoaded && this.developerCallback.onRewardedVideoAdLoaded(placementId);
        },
        onRewardedVideoAdFailed: function(placementId, errorInfo) {
          ATJSSDK_1.ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdFailed(" + placementId + ", " + errorInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdFailed && void 0 != this.developerCallback.onRewardedVideoAdFailed && this.developerCallback.onRewardedVideoAdFailed(placementId, errorInfo);
        },
        onRewardedVideoAdPlayStart: function(placementId, callbackInfo) {
          ATJSSDK_1.ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdPlayStart(" + placementId + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdPlayStart && void 0 != this.developerCallback.onRewardedVideoAdPlayStart && this.developerCallback.onRewardedVideoAdPlayStart(placementId, callbackInfo);
        },
        onRewardedVideoAdPlayEnd: function(placementId, callbackInfo) {
          ATJSSDK_1.ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdPlayEnd(" + placementId + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdPlayEnd && void 0 != this.developerCallback.onRewardedVideoAdPlayEnd && this.developerCallback.onRewardedVideoAdPlayEnd(placementId, callbackInfo);
        },
        onRewardedVideoAdPlayFailed: function(placementId, errorInfo, callbackInfo) {
          ATJSSDK_1.ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdPlayFailed(" + placementId + ", " + errorInfo + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdPlayFailed && void 0 != this.developerCallback.onRewardedVideoAdPlayFailed && this.developerCallback.onRewardedVideoAdPlayFailed(placementId, errorInfo, callbackInfo);
        },
        onRewardedVideoAdClosed: function(placementId, callbackInfo) {
          ATJSSDK_1.ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdClosed(" + placementId + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdClosed && void 0 != this.developerCallback.onRewardedVideoAdClosed && this.developerCallback.onRewardedVideoAdClosed(placementId, callbackInfo);
        },
        onRewardedVideoAdPlayClicked: function(placementId, callbackInfo) {
          ATJSSDK_1.ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdPlayClicked(" + placementId + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdPlayClicked && void 0 != this.developerCallback.onRewardedVideoAdPlayClicked && this.developerCallback.onRewardedVideoAdPlayClicked(placementId, callbackInfo);
        },
        onReward: function(placementId, callbackInfo) {
          ATJSSDK_1.ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onReward(" + placementId + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onReward && void 0 != this.developerCallback.onReward && this.developerCallback.onReward(placementId, callbackInfo);
        },
        onRewardedVideoAdAgainPlayStart: function(placementId, callbackInfo) {
          ATJSSDK_1.ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayStart(" + placementId + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdAgainPlayStart && void 0 != this.developerCallback.onRewardedVideoAdAgainPlayStart && this.developerCallback.onRewardedVideoAdAgainPlayStart(placementId, callbackInfo);
        },
        onRewardedVideoAdAgainPlayEnd: function(placementId, callbackInfo) {
          ATJSSDK_1.ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayEnd(" + placementId + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdAgainPlayEnd && void 0 != this.developerCallback.onRewardedVideoAdAgainPlayEnd && this.developerCallback.onRewardedVideoAdAgainPlayEnd(placementId, callbackInfo);
        },
        onRewardedVideoAdAgainPlayFailed: function(placementId, errorInfo, callbackInfo) {
          ATJSSDK_1.ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayFailed(" + placementId + ", " + errorInfo + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdAgainPlayFailed && void 0 != this.developerCallback.onRewardedVideoAdAgainPlayFailed && this.developerCallback.onRewardedVideoAdAgainPlayFailed(placementId, errorInfo, callbackInfo);
        },
        onRewardedVideoAdAgainPlayClicked: function(placementId, callbackInfo) {
          ATJSSDK_1.ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayClicked(" + placementId + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onRewardedVideoAdAgainPlayClicked && void 0 != this.developerCallback.onRewardedVideoAdAgainPlayClicked && this.developerCallback.onRewardedVideoAdAgainPlayClicked(placementId, callbackInfo);
        },
        onAgainReward: function(placementId, callbackInfo) {
          ATJSSDK_1.ATJSSDK.printLog("ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onAgainReward(" + placementId + ", " + callbackInfo + ")");
          null != this.developerCallback && null != this.developerCallback.onAgainReward && void 0 != this.developerCallback.onAgainReward && this.developerCallback.onAgainReward(placementId, callbackInfo);
        }
      },
      setAdExtraData: function(placementId, settings) {
        void 0 === settings && (settings = {});
        void 0 != platformBridge && null != platformBridge ? platformBridge.setAdExtraData(placementId, JSON.stringify(settings)) : cc.log("You must run on Android or iOS.");
      },
      addPlacementIds: function(placementIds) {
        void 0 != platformBridge && null != platformBridge ? platformBridge.addPlacementIds(JSON.stringify(placementIds)) : cc.log("You must run on Android or iOS.");
      },
      removePlacementId: function(placementIds) {
        void 0 != platformBridge && null != platformBridge ? platformBridge.removePlacementId(JSON.stringify(placementIds)) : cc.log("You must run on Android or iOS.");
      },
      setAdListener: function(listener) {
        var eventJSON = {};
        eventJSON[LoadedCallbackKey] = "ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdLoaded", 
        eventJSON[LoadFailCallbackKey] = "ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdFailed", 
        eventJSON[PlayStartCallbackKey] = "ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdPlayStart", 
        eventJSON[PlayEndCallbackKey] = "ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdPlayEnd", 
        eventJSON[PlayFailCallbackKey] = "ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdPlayFailed", 
        eventJSON[CloseCallbackKey] = "ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdClosed", 
        eventJSON[ClickCallbackKey] = "ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdPlayClicked", 
        eventJSON[RewardCallbackKey] = "ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onReward", 
        eventJSON[AgainPlayStartCallbackKey] = "ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayStart", 
        eventJSON[AgainPlayEndCallbackKey] = "ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayEnd", 
        eventJSON[AgainPlayFailCallbackKey] = "ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayFailed", 
        eventJSON[AgainClickCallbackKey] = "ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onRewardedVideoAdAgainPlayClicked", 
        eventJSON[AgainRewardCallbackKey] = "ATRewardedVideoAutoAdSDK.ATRewardedVideoListener.onAgainReward";
        void 0 != platformBridge && null != platformBridge ? platformBridge.setAdListener(JSON.stringify(eventJSON)) : cc.log("You must run on Android or iOS.");
        this.ATRewardedVideoListener.developerCallback = listener;
      },
      hasAdReady: function(placementId) {
        if (void 0 != platformBridge && null != platformBridge) return platformBridge.hasAdReady(placementId);
        cc.log("You must run on Android or iOS.");
        return false;
      },
      checkAdStatus: function(placementId) {
        if (void 0 != platformBridge && null != platformBridge) return platformBridge.checkAdStatus(placementId);
        cc.log("You must run on Android or iOS.");
        return "";
      },
      showAd: function(placementId) {
        void 0 != platformBridge && null != platformBridge ? platformBridge.showAd(placementId) : cc.log("You must run on Android or iOS.");
      },
      showAdInScenario: function(placementId, scenario) {
        void 0 === scenario && (scenario = "");
        void 0 != platformBridge && null != platformBridge ? platformBridge.showAdInScenario(placementId, scenario) : cc.log("You must run on Android or iOS.");
      },
      entryAdScenario: function(placementId, scenario) {
        void 0 === scenario && (scenario = "");
        void 0 != platformBridge && null != platformBridge ? platformBridge.entryAdScenario(placementId, scenario) : cc.log("You must run on Android or iOS.");
      }
    };
    var LoadedCallbackKey = "RewardedVideoAutoAdLoaded";
    var LoadFailCallbackKey = "RewardedVideoAutoAdLoadFail";
    var PlayStartCallbackKey = "RewardedVideoAutoAdPlayStart";
    var PlayEndCallbackKey = "RewardedVideoAutoAdPlayEnd";
    var PlayFailCallbackKey = "RewardedVideoAutoAdPlayFail";
    var CloseCallbackKey = "RewardedVideoAutoAdClose";
    var ClickCallbackKey = "RewardedVideoAutoAdClick";
    var RewardCallbackKey = "RewardedVideoAutoAdReward";
    var AgainPlayStartCallbackKey = "RewardedVideoAutoAdAgainPlayStart";
    var AgainPlayEndCallbackKey = "RewardedVideoAutoAdAgainPlayEnd";
    var AgainPlayFailCallbackKey = "RewardedVideoAutoAdAgainPlayFail";
    var AgainClickCallbackKey = "RewardedVideoAutoAdAgainClick";
    var AgainRewardCallbackKey = "RewardedVideoAutoAdAgainReward";
    window["ATRewardedVideoAutoAdSDK"] = exports.ATRewardedVideoAutoAdSDK;
    cc._RF.pop();
  }, {
    "./ATJSSDK": "ATJSSDK",
    "./Android/ATAndroidRewardedVideoAutoTS": "ATAndroidRewardedVideoAutoTS",
    "./iOS/ATiOSRewardedAutoVideoTS": "ATiOSRewardedAutoVideoTS"
  } ],
  ATiOSBannerTS: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "74f1flhT61AX45pVOWdGItY", "ATiOSBannerTS");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ATiOSBannerJS = void 0;
    var ATiOSJS_1 = require("./ATiOSJS");
    var OC_WRAPPER_CLASS = "ATBannerAdWrapper";
    exports.ATiOSBannerJS = {
      loadBanner: function(placementId, extra) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSBannerJS::loadBanner(" + placementId + ", " + extra + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "loadBannerWithPlacementID:extra:", placementId, extra);
      },
      setAdListener: function(listener) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSBannerJS::setAdListener(" + listener + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "setDelegates:", listener);
      },
      hasAdReady: function(placementId) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSBannerJS::hasAdReady(" + placementId + ")");
        return jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "bannerReadyForPlacementID:", placementId);
      },
      checkAdStatus: function(placementId) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSBannerJS::checkAdStatus(" + placementId + ")");
        return jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "bannerCheckAdStatusForPlacementID:", placementId);
      },
      showAdInPosition: function(placementId, position) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSBannerJS::showAdInPosition(" + placementId + ", " + position + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showBannerWithPlacementID:scene:position:", placementId, null, position);
      },
      showAdInPositionAndScenario: function(placementId, position, scenario) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSBannerJS::showAdInPositionAndScenario(" + placementId + ", " + position + ", " + scenario + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showBannerWithPlacementID:scene:position:", placementId, scenario, position);
      },
      showAdInRectangle: function(placementId, showAdRect) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSBannerJS::showAdInRectangle(" + placementId + ", " + showAdRect + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showBannerWithPlacementID:scene:rect:", placementId, null, showAdRect);
      },
      showAdInRectangleAndScenario: function(placementId, showAdRect, scenario) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSBannerJS::showAdInRectangleAndScenario(" + placementId + ", " + showAdRect + ", " + scenario + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showBannerWithPlacementID:scene:rect:", placementId, scenario, showAdRect);
      },
      removeAd: function(placementId) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSBannerJS::removeAd(" + placementId + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "removeAd:", placementId);
      },
      reShowAd: function(placementId) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSBannerJS::reShowAd(" + placementId + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "reShowAd:", placementId);
      },
      hideAd: function(placementId) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSBannerJS::hideAd(" + placementId + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "hideAd:", placementId);
      }
    };
    cc._RF.pop();
  }, {
    "./ATiOSJS": "ATiOSJS"
  } ],
  ATiOSIntersitiaAutolTS: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a5890DEflxFJYFJRPBT3hdj", "ATiOSIntersitiaAutolTS");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ATiOSInterstitialAutoAdTS = void 0;
    var ATiOSJS_1 = require("./ATiOSJS");
    var OC_WRAPPER_CLASS = "ATInterstitialAutoAdWrapper";
    exports.ATiOSInterstitialAutoAdTS = {
      setAdListener: function(listener) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSInterstitialAutoAdJS::setAdListener(" + listener + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "setDelegates:", listener);
      },
      setAdExtraData: function(placementId, extra) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSInterstitialAutoAdJS::setAdExtraData(" + placementId + ", " + extra + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "setAutoLocalExtra:customDataJSONString:", placementId, extra);
      },
      addPlacementIds: function(placementId) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSInterstitialAutoAdJS::addPlacementIds(" + placementId + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "addAutoLoadAdPlacementID:", placementId);
      },
      removePlacementId: function(placementId) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSInterstitialAutoAdJS::removePlacementId(" + placementId + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "removeAutoLoadAdPlacementID:", placementId);
      },
      hasAdReady: function(placementId) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSInterstitialAutoAdJS::hasAdReady(" + placementId + ")");
        return jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "autoLoadInterstitialAdReadyForPlacementID:", placementId);
      },
      checkAdStatus: function(placementId) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSInterstitialAutoAdJS::hasAdReady(" + placementId + ")");
        return jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "checkAutoAdStatus:", placementId);
      },
      entryAdScenario: function(placementId, scenario) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSInterstitialAutoAdJS::entryAdScenario(" + placementId + ", " + scenario + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "entryAutoAdScenarioWithPlacementID:scenarioID:", placementId, scenario);
      },
      showAd: function(placementId) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSInterstitialAutoAdJS::showAd(" + placementId + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showAutoInterstitialAdWithPlacementID:scenarioID:", placementId, null);
      },
      showAdInScenario: function(placementId, scenario) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSInterstitialAutoAdJS::showAdInScenario(" + placementId + ", " + scenario + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showAutoInterstitialAdWithPlacementID:scenarioID:", placementId, scenario);
      }
    };
    cc._RF.pop();
  }, {
    "./ATiOSJS": "ATiOSJS"
  } ],
  ATiOSIntersitialTS: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0b6ealULVtInrtVhg/63WDR", "ATiOSIntersitialTS");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ATiOSInterstitialJS = void 0;
    var ATiOSJS_1 = require("./ATiOSJS");
    var OC_WRAPPER_CLASS = "ATInterstitialAdWrapper";
    exports.ATiOSInterstitialJS = {
      loadInterstitial: function(placementId, extra) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSInterstitialJS::loadInterstitial(" + placementId + ", " + extra + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "loadInterstitialWithPlacementID:extra:", placementId, extra);
      },
      setAdListener: function(listener) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSInterstitialJS::setAdListener(" + listener + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "setDelegates:", listener);
      },
      hasAdReady: function(placementId) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSInterstitialJS::hasAdReady(" + placementId + ")");
        return jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "interstitialReadyForPlacementID:", placementId);
      },
      checkAdStatus: function(placementId) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSInterstitialJS::checkAdStatus(" + placementId + ")");
        return jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "checkAdStatus:", placementId);
      },
      setUserData: function(placementId, userId, userData) {
        cc.log("Android-setUserData");
      },
      showAd: function(placementId) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSInterstitialJS::showAd(" + placementId + ")");
        return jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showInterstitialWithPlacementID:scene:", placementId, null);
      },
      showAdInScenario: function(placementId, scenario) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSInterstitialJS::showAd(" + placementId + ", " + scenario + ")");
        return jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showInterstitialWithPlacementID:scene:", placementId, scenario);
      },
      entryAdScenario: function(placementId, scenario) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSInterstitialJS::entryAdScenario(" + placementId + ", " + scenario + ")");
        return jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "entryAdScenarioWithPlacementID:scene:", placementId, scenario);
      }
    };
    cc._RF.pop();
  }, {
    "./ATiOSJS": "ATiOSJS"
  } ],
  ATiOSJS: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "609e0u06+BNVbYB1axeqMT9", "ATiOSJS");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ATiOSJS = void 0;
    var OC_ATSDK_MANAGER_CLASS = "ATSDKManager";
    var OC_BIRDGE_CLASS = "ATJSBridge";
    exports.ATiOSJS = {
      initSDK: function(appid, appkey) {
        this.printJsLog("ATiOSJS::initSDK(" + appid + "," + appkey + ")");
        jsb.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "startWithAppID:appKey:", appid, appkey);
      },
      initCustomMap: function(customMap) {
        this.printJsLog("ATiOSJS::initCustomMap(" + customMap + ")");
        jsb.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "setCustomData:", customMap);
      },
      setPlacementCustomMap: function(placmentId, customMap) {
        this.printJsLog("ATiOSJS::setPlacementCustomMap(" + placmentId + ", " + customMap + ")");
        jsb.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "setCustomData:forPlacementID:", customMap, placmentId);
      },
      setGDPRLevel: function(level) {
        this.printJsLog("ATiOSJS::setGDPRLevel(" + level + ")");
        jsb.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "setDataConsent:", level);
      },
      getGDPRLevel: function() {
        this.printJsLog("ATiOSJS::getGDPRLevel()");
        return jsb.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "dataConsent");
      },
      getUserLocation: function(callbackMethod) {
        this.printJsLog("ATiOSJS::getUserLocation(" + callbackMethod + ")");
        jsb.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "getUserLocationWithCallback:", callbackMethod);
      },
      showGDPRAuth: function() {
        this.printJsLog("ATiOSJS::showGDPRAuth()");
        jsb.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "presentDataConsentDialog");
      },
      setLogDebug: function(debug) {
        this.printJsLog("ATiOSJS::setLogDebug(" + debug + ")");
        jsb.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "setDebugLog:", debug);
      },
      printJsLog: function(msg) {
        console.log(msg);
        void 0 != msg && null != msg && jsb.reflection.callStaticMethod(OC_BIRDGE_CLASS, "log:", msg);
      },
      deniedUploadDeviceInfo: function(deniedInfo) {
        this.printJsLog("ATiOSJS::deniedUploadDeviceInfo(" + deniedInfo + ")");
        jsb.reflection.callStaticMethod(OC_ATSDK_MANAGER_CLASS, "deniedUploadDeviceInfo:", deniedInfo);
      }
    };
    cc._RF.pop();
  }, {} ],
  ATiOSNativeTS: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "242b9WdGLZKTKkgQWCNWpju", "ATiOSNativeTS");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ATiOSNativeTS = void 0;
    var ATiOSJS_1 = require("./ATiOSJS");
    var OC_WRAPPER_CLASS = "ATNativeAdWrapper";
    exports.ATiOSNativeTS = {
      loadNative: function(placementId, settings) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSBannerJS::loadNative(" + placementId + ", " + settings + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "loadNativeWithPlacementID:extra:", placementId, settings);
      },
      setAdListener: function(listener) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSNativeJS::setAdListener(" + listener + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "setDelegates:", listener);
      },
      hasAdReady: function(placementId) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSNativeJS::hasAdReady(" + placementId + ")");
        return jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "nativeReadyForPlacementID:", placementId);
      },
      checkAdStatus: function(placementId) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSNativeJS::checkAdStatus(" + placementId + ")");
        return jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "nativeCheckAdStatusForPlacementID:", placementId);
      },
      showAd: function(placementId, adViewProperty) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSNativeJS::showAd(" + placementId + ", " + adViewProperty + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showNativeWithPlacementID:scene:metrics:", placementId, null, adViewProperty);
      },
      showAdInScenario: function(placementId, adViewProperty, scenario) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSNativeJS::showAdInScenario(" + placementId + ", " + adViewProperty + ", " + scenario + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "showNativeWithPlacementID:scene:metrics:", placementId, scenario, adViewProperty);
      },
      removeAd: function(placementId) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSNativeJS::removeAd(" + placementId + ")");
        jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "removeNativeWithPlacementID:", placementId);
      },
      entryAdScenario: function(placementId, scenario) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSInterstitialJS::entryAdScenario(" + placementId + ", " + scenario + ")");
        return jsb.reflection.callStaticMethod(OC_WRAPPER_CLASS, "entryAdScenarioWithPlacementID:scene:", placementId, scenario);
      }
    };
    cc._RF.pop();
  }, {
    "./ATiOSJS": "ATiOSJS"
  } ],
  ATiOSRewardedAutoVideoTS: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6d1770NL9dPrqDfhaZ2VpX3", "ATiOSRewardedAutoVideoTS");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ATiOSRewardedVideoAutoAdJS = void 0;
    var ATiOSJS_1 = require("./ATiOSJS");
    var OC_RV_WRAPPER_CLASS = "ATRewardedVideoAutoAdWrapper";
    exports.ATiOSRewardedVideoAutoAdJS = {
      setAdListener: function(listener) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSRewardedVideoAutoAdJS::setAdListener(" + listener + ")");
        jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "setDelegates:", listener);
      },
      setAdExtraData: function(placementId, extra) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSRewardedVideoAutoAdJS::setAdExtraData(" + placementId + ", " + extra + ")");
        jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "setAutoLocalExtra:customDataJSONString:", placementId, extra);
      },
      addPlacementIds: function(placementId) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSRewardedVideoAutoAdJS::addPlacementIds(" + placementId + ")");
        jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "addAutoLoadAdPlacementID:", placementId);
      },
      removePlacementId: function(placementId) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSRewardedVideoAutoAdJS::removePlacementId(" + placementId + ")");
        jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "removeAutoLoadAdPlacementID:", placementId);
      },
      hasAdReady: function(placementId) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSRewardedVideoAutoAdJS::hasAdReady(" + placementId + ")");
        return jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "autoLoadRewardedVideoReadyForPlacementID:", placementId);
      },
      checkAdStatus: function(placementId) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSRewardedVideoAutoAdJS::hasAdReady(" + placementId + ")");
        return jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "checkAutoAdStatus:", placementId);
      },
      entryAdScenario: function(placementId, scenario) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSInterstitialAutoAdJS::entryAdScenario(" + placementId + ", " + scenario + ")");
        jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "entryAutoAdScenarioWithPlacementID:scenarioID:", placementId, scenario);
      },
      showAd: function(placementId) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSRewardedVideoAutoAdJS::showAd(" + placementId + ")");
        jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "showAutoRewardedVideoWithPlacementID:scenarioID:", placementId, null);
      },
      showAdInScenario: function(placementId, scenario) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSRewardedVideoAutoAdJS::showAdInScenario(" + placementId + ", " + scenario + ")");
        jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "showAutoRewardedVideoWithPlacementID:scenarioID:", placementId, scenario);
      }
    };
    cc._RF.pop();
  }, {
    "./ATiOSJS": "ATiOSJS"
  } ],
  ATiOSRewardedVideoTS: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a2f88b7l6tObIDw6nK+kc/P", "ATiOSRewardedVideoTS");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ATiOSRewardedVideoTS = void 0;
    var ATiOSJS_1 = require("./ATiOSJS");
    var OC_RV_WRAPPER_CLASS = "ATRewardedVideoWrapper";
    exports.ATiOSRewardedVideoTS = {
      loadRewardedVideo: function(placementId, extra) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSRewardedVideoJS::loadRewardedVideo(" + placementId + ", " + extra + ")");
        jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "loadRewardedVideoWithPlacementID:extra:", placementId, extra);
      },
      setAdListener: function(listener) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSRewardedVideoJS::setAdListener(" + listener + ")");
        jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "setDelegates:", listener);
      },
      hasAdReady: function(placementId) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSRewardedVideoJS::hasAdReady(" + placementId + ")");
        return jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "rewardedVideoReadyForPlacementID:", placementId);
      },
      checkAdStatus: function(placementId) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSRewardedVideoJS::checkAdStatus(" + placementId + ")");
        return jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "checkAdStatus:", placementId);
      },
      setUserData: function(placementId, userId, userData) {
        cc.log("Android-setUserData");
      },
      showAd: function(placementId) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSRewardedVideoJS::showAd(" + placementId + ")");
        return jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "showRewardedVideoWithPlacementID:scene:", placementId, null);
      },
      showAdInScenario: function(placementId, scenario) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSRewardedVideoJS::showAdInScenario(" + placementId + ", " + scenario + ")");
        return jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "showRewardedVideoWithPlacementID:scene:", placementId, scenario);
      },
      entryAdScenario: function(placementId, scenario) {
        ATiOSJS_1.ATiOSJS.printJsLog("ATiOSInterstitialJS::entryAdScenario(" + placementId + ", " + scenario + ")");
        return jsb.reflection.callStaticMethod(OC_RV_WRAPPER_CLASS, "entryAdScenarioWithPlacementID:scene:", placementId, scenario);
      }
    };
    cc._RF.pop();
  }, {
    "./ATiOSJS": "ATiOSJS"
  } ],
  AdsManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ed818t2xKVNR77IiPTuV+6a", "AdsManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.runAds = void 0;
    var AndroidAds_1 = require("./AndroidAds");
    function runAds(spaceName, data, callback) {
      switch (cc.sys.os) {
       case cc.sys.OS_ANDROID:
        AndroidAds_1.runTaptapAds(spaceName, data, callback);
        break;

       case cc.sys.OS_IOS:
      }
    }
    exports.runAds = runAds;
    cc._RF.pop();
  }, {
    "./AndroidAds": "AndroidAds"
  } ],
  AndroidAds: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9b3acUB5ZpEx4miTyYEV5FI", "AndroidAds");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.runTaptapAds = void 0;
    var Globals_1 = require("../Globals");
    var uiUtils_1 = require("../otherComponents/uiUtils");
    var SPACES = {
      addGem: {
        placementId: 1036939
      },
      enterJourney: {
        placementId: 1036941
      }
    };
    function runTaptapAds(spaceName, data, callback) {
      var placementId = SPACES[spaceName].placementId;
      console.log("VillV placementId: ", placementId);
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/TapADNActivity", "fetchAds", "(ILjava/lang/String;ILjava/lang/String;Ljava/lang/String;)V", placementId, "", 0, data, Globals_1.user.userid.toString());
      console.log("VillV: adn played ");
      var fn = function() {
        var o = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/TapADNActivity", "getPlayAdsResult", "()Ljava/lang/String;");
        if (!o || 0 == o.length) {
          setTimeout(fn, 200);
          return;
        }
        if ("success" == o) callback(true); else {
          callback(false);
          uiUtils_1.danMu(o);
        }
      };
      setTimeout(fn, 200);
    }
    exports.runTaptapAds = runTaptapAds;
    cc._RF.pop();
  }, {
    "../Globals": "Globals",
    "../otherComponents/uiUtils": "uiUtils"
  } ],
  AttackListeners: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e259b4ZzAtKbLc/AfIi83vR", "AttackListeners");
    "use strict";
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
      return _setPrototypeOf(o, p);
    }
    var _require = require("../loggers/logUtils"), logDamageInfo = _require.logDamageInfo;
    var _require2 = require("../objects/Damage"), Damage = _require2.Damage;
    var Listeners_1 = require("../templates/Listeners");
    var _require3 = require("../utils/numberUtils"), getThirdDigit = _require3.getThirdDigit;
    var AttackCriticalMonitors = function(_Listeners_1$Listener) {
      _inheritsLoose(AttackCriticalMonitors, _Listeners_1$Listener);
      function AttackCriticalMonitors() {
        return _Listeners_1$Listener.apply(this, arguments) || this;
      }
      var _proto = AttackCriticalMonitors.prototype;
      _proto.init = function init() {
        _Listeners_1$Listener.prototype.init.apply(this, arguments);
        this.critical_digits = [ [], [ 7 ], [ 7 ], [ 7 ] ];
      };
      _proto.check = function check(player1, player2, kwargs) {
        var _this$critical_digits;
        if (null != (_this$critical_digits = this.critical_digits[player1.code]) && _this$critical_digits.includes(getThirdDigit(player2.power))) {
          kwargs.critical = true;
          kwargs.damage.value *= 2;
          this.game.addLog('{"code":' + player2.code + "}\u4fee\u4e3a\u7b2c\u4e09\u4f4d\u6570\u4e3a" + getThirdDigit(player2.power) + ",\u672c\u6b21\u653b\u51fb\u89e6\u53d1\u66b4\u51fb", 3);
        }
      };
      return AttackCriticalMonitors;
    }(Listeners_1.Listener);
    var AttackDamageInitializer = function(_Listeners_1$Listener2) {
      _inheritsLoose(AttackDamageInitializer, _Listeners_1$Listener2);
      function AttackDamageInitializer() {
        return _Listeners_1$Listener2.apply(this, arguments) || this;
      }
      var _proto2 = AttackDamageInitializer.prototype;
      _proto2.check = function check(player1, player2, kwargs) {
        kwargs.damage = new Damage(Damage.PHYSICS, player1.damage);
      };
      return AttackDamageInitializer;
    }(Listeners_1.Listener);
    var AttackDamageExecuter = function(_Listeners_1$Listener3) {
      _inheritsLoose(AttackDamageExecuter, _Listeners_1$Listener3);
      function AttackDamageExecuter() {
        return _Listeners_1$Listener3.apply(this, arguments) || this;
      }
      var _proto3 = AttackDamageExecuter.prototype;
      _proto3.check = function check(player1, player2, kwargs) {
        player1.harm(player2, kwargs.damage);
      };
      return AttackDamageExecuter;
    }(Listeners_1.Listener);
    module.exports = {
      AttackCriticalMonitors: AttackCriticalMonitors,
      AttackDamageInitializer: AttackDamageInitializer,
      AttackDamageExecuter: AttackDamageExecuter
    };
    cc._RF.pop();
  }, {
    "../loggers/logUtils": "logUtils",
    "../objects/Damage": "Damage",
    "../templates/Listeners": "Listeners",
    "../utils/numberUtils": "numberUtils"
  } ],
  AttackStatus: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e6b5dGuaqlJfaXZKpi3NlD1", "AttackStatus");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AttackStatus = void 0;
    var AttackStatus = function AttackStatus() {
      this.critical = false;
    };
    exports.AttackStatus = AttackStatus;
    cc._RF.pop();
  }, {} ],
  BuffItems: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8d543aPaDFFjYRUCl8UFX5Q", "BuffItems");
    "use strict";
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
      return _setPrototypeOf(o, p);
    }
    var _require = require("./Listeners"), Listener = _require.Listener;
    var BuffItem = function(_Listener) {
      _inheritsLoose(BuffItem, _Listener);
      function BuffItem() {
        return _Listener.apply(this, arguments) || this;
      }
      var _proto = BuffItem.prototype;
      _proto.init = function init(player, duration, params) {
        void 0 === params && (params = {});
        _Listener.prototype.init.call(this, player, duration);
        this.duration = duration;
        this.game.endPQ.add(this);
        for (var i in params) this[i] = params[i];
      };
      return BuffItem;
    }(Listener);
    BuffItem.uiDisplay = true;
    BuffItem.temporary = true;
    exports.BuffItem = BuffItem;
    BuffItem.id = 0;
    cc._RF.pop();
  }, {
    "./Listeners": "Listeners"
  } ],
  Buffs: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5f432AeJP9M2Ja0WGNKHeZ6", "Buffs");
    "use strict";
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
      return _setPrototypeOf(o, p);
    }
    var _require = require("./templates/BuffItems"), BuffItem = _require.BuffItem;
    var _require2 = require("./templates/Listeners"), Listener = _require2.Listener;
    var _require3 = require("./utils/numberUtils"), getPercentage = _require3.getPercentage;
    var ChangeSpeedBuff = function(_Listener) {
      _inheritsLoose(ChangeSpeedBuff, _Listener);
      function ChangeSpeedBuff() {
        return _Listener.apply(this, arguments) || this;
      }
      var _proto = ChangeSpeedBuff.prototype;
      _proto.init = function init(player, duration, ratio) {
        _Listener.prototype.init.call(this, player, duration);
        this.game.addLog('{"code":' + player.code + "}\u83b7\u5f97\u77ed\u6682\u7684\u4fee\u4e3a" + (ratio < 1 ? "\u964d\u4f4e" : "\u63d0\u5347") + "\u6548\u679c", -1);
        player.updateSpeed(ratio);
        this.ratio = ratio;
      };
      _proto.expire = function expire() {
        this.game.addLog('{"code":' + this.owner.code + "}\u7684\u4fee\u4e3a" + (this.ratio < 1 ? "\u964d\u4f4e" : "\u63d0\u5347") + "\u6548\u679c\u89e3\u9664", -1);
        this.owner.updateSpeed(1 / this.ratio);
      };
      return ChangeSpeedBuff;
    }(Listener);
    ChangeSpeedBuff.description = function(item) {
      var ratio = getPercentage(Math.abs(item.ratio - 1));
      var verb = item.ratio < 1 ? "\u964d\u4f4e" : "\u63d0\u5347";
      var remainTime = item.end_time - item.game.currTime;
      return "\u77ed\u6682" + verb + ratio + "\u7684\u4fee\u4e3a\uff0c\u5269\u4f59" + remainTime + "\u79d2";
    };
    var IncreaseSpeedBuff = function(_ChangeSpeedBuff) {
      _inheritsLoose(IncreaseSpeedBuff, _ChangeSpeedBuff);
      function IncreaseSpeedBuff() {
        return _ChangeSpeedBuff.apply(this, arguments) || this;
      }
      return IncreaseSpeedBuff;
    }(ChangeSpeedBuff);
    var DecreaseSpeedBuff = function(_ChangeSpeedBuff2) {
      _inheritsLoose(DecreaseSpeedBuff, _ChangeSpeedBuff2);
      function DecreaseSpeedBuff() {
        return _ChangeSpeedBuff2.apply(this, arguments) || this;
      }
      return DecreaseSpeedBuff;
    }(ChangeSpeedBuff);
    var StrongBuff = function(_BuffItem) {
      _inheritsLoose(StrongBuff, _BuffItem);
      function StrongBuff() {
        return _BuffItem.apply(this, arguments) || this;
      }
      var _proto2 = StrongBuff.prototype;
      _proto2.init = function init(owner, duration, ratio) {
        _BuffItem.prototype.init.call(this, owner, duration);
        this.ratio = ratio;
      };
      _proto2.check = function check(player1, player2, damage) {
        if (!player1) return;
        if (player1.code != this.owner.code) return;
        damage.value *= this.ratio;
      };
      return StrongBuff;
    }(BuffItem);
    StrongBuff.description = function(item) {
      var ratio = getPercentage(Math.abs(item.ratio - 1));
      var verb = item.ratio < 1 ? "\u964d\u4f4e" : "\u63d0\u5347";
      var remainTime = item.end_time - item.game.currTime;
      return "\u9020\u6210\u7684\u4f24\u5bb3" + verb + ratio + "\uff0c\u5269\u4f59" + remainTime + "\u79d2";
    };
    var VulnerBuff = function(_Listener2) {
      _inheritsLoose(VulnerBuff, _Listener2);
      function VulnerBuff() {
        return _Listener2.apply(this, arguments) || this;
      }
      var _proto3 = VulnerBuff.prototype;
      _proto3.init = function init(owner, duration, ratio) {
        _Listener2.prototype.init.call(this, owner, duration);
        this.ratio = ratio;
      };
      _proto3.check = function check(player1, player2, damage) {
        if (!player2) return;
        if (player2.code != this.owner.code) return;
        damage.value *= this.ratio;
      };
      return VulnerBuff;
    }(Listener);
    VulnerBuff.description = function(item) {
      var ratio = getPercentage(Math.abs(item.ratio - 1));
      var verb = item.ratio < 1 ? "\u964d\u4f4e" : "\u63d0\u5347";
      var remainTime = item.end_time - item.game.currTime;
      return "\u53d7\u5230\u7684\u4f24\u5bb3" + verb + ratio + "\uff0c\u5269\u4f59" + remainTime + "\u79d2";
    };
    var ChangeAspdBuff = function(_BuffItem2) {
      _inheritsLoose(ChangeAspdBuff, _BuffItem2);
      function ChangeAspdBuff() {
        return _BuffItem2.apply(this, arguments) || this;
      }
      var _proto4 = ChangeAspdBuff.prototype;
      _proto4.init = function init(player, duration, ratio, params) {
        void 0 === params && (params = {});
        _BuffItem2.prototype.init.call(this, player, duration, params);
        player.minusAspd(ratio);
      };
      _proto4.expire = function expire() {
        this.owner.minusAspd(-this.ratio);
      };
      return ChangeAspdBuff;
    }(BuffItem);
    ChangeAspdBuff.description = function(item) {
      var ratio = Math.abs(item.ratio);
      var verb = item.ratio < 0 ? "\u51cf\u5c11" : "\u5ef6\u957f";
      var remainTime = item.end_time - item.game.currTime;
      return "" + verb + ratio + "\u7684\u653b\u51fb\u95f4\u9694\uff0c\u5269\u4f59" + remainTime + "\u79d2";
    };
    module.exports = {
      ChangeSpeedBuff: ChangeSpeedBuff,
      IncreaseSpeedBuff: IncreaseSpeedBuff,
      DecreaseSpeedBuff: DecreaseSpeedBuff,
      StrongBuff: StrongBuff,
      VulnerBuff: VulnerBuff,
      ChangeAspdBuff: ChangeAspdBuff
    };
    cc._RF.pop();
  }, {
    "./templates/BuffItems": "BuffItems",
    "./templates/Listeners": "Listeners",
    "./utils/numberUtils": "numberUtils"
  } ],
  Coin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "99568tauvFIz7LymLAutYJ9", "Coin");
    "use strict";
    function _createForOfIteratorHelperLoose(o, allowArrayLike) {
      var it = "undefined" !== typeof Symbol && o[Symbol.iterator] || o["@@iterator"];
      if (it) return (it = it.call(o)).next.bind(it);
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && "number" === typeof o.length) {
        it && (o = it);
        var i = 0;
        return function() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if ("string" === typeof o) return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      "Object" === n && o.constructor && (n = o.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(o);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      (null == len || len > arr.length) && (len = arr.length);
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
      return arr2;
    }
    var COIN_KEYS = [ "baseCoins", "geoCoins", "auroCoins", "hydroCoins", "pyroCoins" ];
    var COIN_KEYS_NAME_MAP = {
      baseCoins: "\u7075\u77f3",
      geoCoins: "\u571f\u7075\u77f3",
      auroCoins: "\u91d1\u7075\u77f3",
      hydroCoins: "\u6c34\u7075\u77f3",
      pyroCoins: "\u706b\u7075\u77f3"
    };
    var Coin = function() {
      function Coin(args) {
        this.baseCoins = 0;
        this.auroCoins = 0;
        this.geoCoins = 0;
        this.hydroCoins = 0;
        this.pyroCoins = 0;
        for (var _iterator = _createForOfIteratorHelperLoose(COIN_KEYS), _step; !(_step = _iterator()).done; ) {
          var key = _step.value;
          args[key] && (this[key] = args[key]);
        }
      }
      var _proto = Coin.prototype;
      _proto.add = function add(args) {
        for (var _i = 0, _COIN_KEYS = COIN_KEYS; _i < _COIN_KEYS.length; _i++) {
          var key = _COIN_KEYS[_i];
          args[key] && (this[key] += args[key]);
        }
      };
      _proto.minus = function minus(args) {
        for (var _i2 = 0, _COIN_KEYS2 = COIN_KEYS; _i2 < _COIN_KEYS2.length; _i2++) {
          var key = _COIN_KEYS2[_i2];
          args[key] && (this[key] -= args[key]);
        }
      };
      _proto.compare = function compare(args) {
        for (var _i3 = 0, _COIN_KEYS3 = COIN_KEYS; _i3 < _COIN_KEYS3.length; _i3++) {
          var key = _COIN_KEYS3[_i3];
          if (args[key] && this[key] < args[key]) return false;
        }
        return true;
      };
      _proto.opposite = function opposite() {
        var res = new Coin({});
        res.minus(this);
        return res;
      };
      _proto.totalValue = function totalValue() {
        var res = 0;
        for (var _i4 = 0, _COIN_KEYS4 = COIN_KEYS; _i4 < _COIN_KEYS4.length; _i4++) {
          var key = _COIN_KEYS4[_i4];
          res += this[key];
        }
        return res;
      };
      return Coin;
    }();
    module.exports = {
      Coin: Coin,
      COIN_KEYS: COIN_KEYS,
      COIN_KEYS_NAME_MAP: COIN_KEYS_NAME_MAP
    };
    cc._RF.pop();
  }, {} ],
  Constants: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bd84er5r0xCSo/3tKgyq5r6", "Constants");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.JOURNEY_START_TIME = exports.ONE_NATURAL_DAY = exports.ONE_JOURNEY_DAY = exports.DECORATION_MENU = void 0;
    var DECORATION_MENU = [ {
      category: "userIcon",
      index: 0,
      url: "",
      price: 0
    }, {
      category: "userIcon",
      index: 1,
      url: "file:heroIcon/1.png",
      price: 0
    }, {
      category: "userIcon",
      index: 2,
      url: "file:heroIcon/2.png",
      price: 0
    }, {
      category: "userIcon",
      index: 3,
      url: "file:heroIcon/3.png",
      price: 0
    }, {
      category: "userIcon",
      index: 4,
      url: "file:heroIcon/4.png",
      price: 0
    }, {
      category: "player",
      index: 1,
      url: "file:playerIcon/1.png",
      price: 0
    }, {
      category: "player",
      index: 2,
      url: "file:playerIcon/2.png",
      price: 0
    }, {
      category: "player",
      index: 3,
      url: "file:playerIcon/3.png",
      price: 0
    }, {
      category: "player",
      index: 4,
      url: "file:playerIcon/4.png",
      price: 0
    }, {
      category: "hero",
      index: 1,
      url: "file:hero/\u58a8\u950b\u6d41\u5f71.png",
      price: 199
    }, {
      category: "hero",
      index: 2,
      url: "file:hero/\u6e05\u6c90\u7476\u97f3.png",
      price: 199
    }, {
      category: "hero",
      index: 3,
      url: "file:hero/\u5bd2\u82f1\u5203\u534e.png",
      price: 199
    }, {
      category: "hero",
      index: 4,
      url: "file:hero/\u5251\u97f5\u82cd\u677e.png",
      price: 199
    }, {
      category: "scene",
      index: 1,
      url: "file:scene/1.png",
      price: 100
    }, {
      category: "scene",
      index: 2,
      url: "file:scene/2.png",
      price: 100
    }, {
      category: "scene",
      index: 3,
      url: "file:scene/3.png",
      price: 100
    }, {
      category: "scene",
      index: 4,
      url: "file:scene/4.png",
      price: 100
    } ];
    exports.DECORATION_MENU = DECORATION_MENU;
    var ONE_MINUTES = 60;
    var ONE_HOUR = 60 * ONE_MINUTES;
    var ONE_JOURNEY_DAY = 1e3 * ONE_MINUTES;
    exports.ONE_JOURNEY_DAY = ONE_JOURNEY_DAY;
    var ONE_NATURAL_DAY = 24 * ONE_HOUR;
    exports.ONE_NATURAL_DAY = ONE_NATURAL_DAY;
    var JOURNEY_START_TIME = new Date(0, 0, 1, 6, 40, 0).valueOf();
    exports.JOURNEY_START_TIME = JOURNEY_START_TIME;
    cc._RF.pop();
  }, {} ],
  Creature: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "aff19EOM6ZKiohXHn6TGfa9", "Creature");
    "use strict";
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return "symbol" === typeof key ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if ("object" !== typeof input || null === input) return input;
      var prim = input[Symbol.toPrimitive];
      if (void 0 !== prim) {
        var res = prim.call(input, hint || "default");
        if ("object" !== typeof res) return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === hint ? String : Number)(input);
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
      return _setPrototypeOf(o, p);
    }
    var _require = require("./wheels/interfaces"), Item = _require.Item;
    var Creature = function(_Item) {
      _inheritsLoose(Creature, _Item);
      function Creature() {
        return _Item.apply(this, arguments) || this;
      }
      var _proto = Creature.prototype;
      _proto.init = function init(x, y, source) {
        _Item.prototype.init.call(this, source);
        this._power = 1;
        this._level = 2;
        this._aspd = 7;
        this._scope = 1;
        this._damage = 100;
        this.hydroSign = 0;
        this.pyroSign = 0;
        this._geoSign = 0;
        this.x = x;
        this.y = y;
        if (source.map[y][x]) throw new common_1.GameLogicError("\u8be5\u4f4d\u7f6e\u5df2\u6709\u5355\u4f4d");
        source.map[y][x] = this;
      };
      _proto.minusAspd = function minusAspd(num) {
        this._aspd -= num;
      };
      _proto.distance = function distance(player2) {
        return Math.sqrt(Math.pow(this.x - player2.x, 2) + Math.pow(this.y - player2.y, 2));
      };
      _proto.attack = function attack(player2) {
        this.game.addLog(logItem(this) + "\u653b\u51fb\u4e86" + logItem(player2), 2);
        this.game.addLog("", 3);
        this.game.listeners.AttackListeners.check(this, player2, {
          damage: new Damage(Damage.PHYSICS, this.damage)
        });
      };
      _proto.harm = function harm(player2, damage) {
        logDamageInfo(this, player2, damage);
        this.game.listeners.DamageListeners.check(this, player2, damage);
      };
      _proto.updateSpeed = function updateSpeed(value) {
        this._power *= value;
        while (this._power > 10) {
          this._power /= 10;
          this._level++;
        }
        while (this._power < 1) {
          this._power *= 10;
          this._level--;
        }
        if (this.game.logger) {
          var percentage = 100 * (value - 1);
          var prefix = percentage < 0 ? "\u964d\u4f4e" : "\u63d0\u5347";
          var percentageStr = Math.abs(percentage).toFixed(3);
          this.game.addLog(logItem(this) + "\u7684\u4fee\u4e3a" + prefix + parseFloat(percentageStr) + "%", 0);
        }
      };
      _proto.move = function move(newX, newY, playAnimation) {
        void 0 === playAnimation && (playAnimation = true);
        var Game = this.game;
        var map = Game.map;
        var oldX = this.x, oldY = this.y;
        if (oldY == newY && oldX == newX) return;
        if (map[newY][newX]) throw new common_1.GameLogicError("\u4e0d\u80fd\u79fb\u52a8\u5230\u5df2\u6709\u5355\u4f4d\u7684\u4f4d\u7f6e");
        map[newY][newX] = this;
        map[oldY][oldX] = null;
        this.game.addLog(logItem(this) + "\u79fb\u52a8\u81f3(" + (newX + 1) + "," + (MAP_SIZE - newY) + ")", 0);
        playAnimation && this.game.addAnime(new MoveAnimation(oldX, oldY, newX, newY));
        this.x = newX, this.y = newY;
        Game.listeners.MoveListeners.check(this, oldX, oldY);
      };
      _proto.inScope = function inScope(x, y) {
        return this.itemsInScope().find(function(axis) {
          return axis[0] == x && axis[1] == y;
        });
      };
      _proto.itemsInScope = function itemsInScope() {
        var scope = this.game.listeners.InscopeCalculators.check(this);
        return this.game.allMapElements.filter(function(item) {
          return scope[item.y][item.x];
        });
      };
      _createClass(Creature, [ {
        key: "geoSign",
        get: function get() {
          return this._geoSign;
        },
        set: function set(num) {
          var diff = Math.max(num - this._geoSign, 0);
          this._geoSign = num;
          this.game.listeners.GeoSignListeners.check(this, diff);
        }
      }, {
        key: "level",
        get: function get() {
          return Math.log(this.power) / Math.log(this.aspd);
        }
      }, {
        key: "scope",
        get: function get() {
          return this._scope;
        },
        set: function set(num) {
          this._scope = num;
        }
      }, {
        key: "damage",
        get: function get() {
          return this._damage;
        },
        set: function set(num) {
          this._damage = num;
        }
      }, {
        key: "power",
        get: function get() {
          var valStr = this._power.toString();
          valStr.length > 6 && (valStr = valStr.substring(0, 6));
          return this._level <= 9 ? this._power + "e" + this._level : valStr + "e" + this._level;
        }
      }, {
        key: "aspd",
        get: function get() {
          return Math.max(this._aspd, 2);
        }
      } ]);
      return Creature;
    }(Item);
    Creature.challengable = false;
    module.exports = {
      Creature: Creature
    };
    var _require2 = require("../gameLogger"), logUpdateSpeedInfo = _require2.logUpdateSpeedInfo;
    var common_1 = require("./wheels/common");
    var _require3 = require("./objects/Damage"), Damage = _require3.Damage;
    var _require4 = require("./loggers/logUtils"), logDamageInfo = _require4.logDamageInfo, logItem = _require4.logItem;
    var _require5 = require("./animations/moveAnimation"), MoveAnimation = _require5.MoveAnimation;
    var _require6 = require("./constants/gameConstants"), MAP_SIZE = _require6.MAP_SIZE;
    cc._RF.pop();
  }, {
    "../gameLogger": "gameLogger",
    "./animations/moveAnimation": "moveAnimation",
    "./constants/gameConstants": "gameConstants",
    "./loggers/logUtils": "logUtils",
    "./objects/Damage": "Damage",
    "./wheels/common": "common",
    "./wheels/interfaces": "interfaces"
  } ],
  1: [ function(require, module, exports) {}, {} ],
  DamageListeners: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "65290CUC7VKNIgZMlK29AoM", "DamageListeners");
    "use strict";
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
      return _setPrototypeOf(o, p);
    }
    var _require = require("../constants/timeConstants"), ENDLESS_TIME = _require.ENDLESS_TIME;
    var _require2 = require("../templates/Listeners"), Listener = _require2.Listener;
    var RealDamageLogger = function(_Listener) {
      _inheritsLoose(RealDamageLogger, _Listener);
      function RealDamageLogger() {
        return _Listener.apply(this, arguments) || this;
      }
      var _proto = RealDamageLogger.prototype;
      _proto.check = function check(player1, player2, damage) {
        var type = (damage.type, "\u7269\u7406");
        this.game.addLog("\u5b9e\u9645\u9020\u6210\u4e86" + damage.value + "\u70b9" + type + "\u4f24\u5bb3", 0);
      };
      return RealDamageLogger;
    }(Listener);
    var HarmImprovingMonitors = function(_Listener2) {
      _inheritsLoose(HarmImprovingMonitors, _Listener2);
      function HarmImprovingMonitors() {
        return _Listener2.apply(this, arguments) || this;
      }
      var _proto2 = HarmImprovingMonitors.prototype;
      _proto2.init = function init() {
        _Listener2.prototype.init.apply(this, arguments);
        this.description = "\u9020\u6210\u4f24\u5bb3\u540e\u7ed3\u7b97\u5c5e\u6027\u63d0\u5347";
        this.base = [ 0, 1.025, 1.025, 1.025 ];
      };
      _proto2.check = function check(player1, player2, damage) {
        if (player1.code != this.game.currUser.code) return;
        player1.updateSpeed(Math.pow(player1.grow, damage.value / 100));
      };
      return HarmImprovingMonitors;
    }(Listener);
    module.exports = {
      RealDamageLogger: RealDamageLogger,
      HarmImprovingMonitors: HarmImprovingMonitors
    };
    cc._RF.pop();
  }, {
    "../constants/timeConstants": "timeConstants",
    "../templates/Listeners": "Listeners"
  } ],
  Damage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "aee40iT/cxGO6/5KxiW2Qyn", "Damage");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Damage = void 0;
    var Damage = function Damage(type, value) {
      this.type = type;
      this.value = value;
    };
    exports.Damage = Damage;
    Damage.PHYSICS = 1;
    Damage.SPELL = 2;
    Damage.WHITE = 3;
    cc._RF.pop();
  }, {} ],
  EquipItems: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b17daFBWulIJbJGBzShgyPh", "EquipItems");
    "use strict";
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
      return _setPrototypeOf(o, p);
    }
    var _require = require("../objects/Coin"), Coin = _require.Coin;
    var _require2 = require("../wheels/interfaces"), Item = _require2.Item;
    var EquipItems = function(_Item) {
      _inheritsLoose(EquipItems, _Item);
      function EquipItems() {
        return _Item.apply(this, arguments) || this;
      }
      var _proto = EquipItems.prototype;
      _proto.init = function init(owner) {
        _Item.prototype.init.call(this, owner.game);
        this.owner = owner;
        this.level = 0;
      };
      _proto.upgrade = function upgrade() {
        this.owner.updateSpeed(1.05);
        this.level++;
      };
      _proto.evolve = function evolve() {};
      return EquipItems;
    }(Item);
    EquipItems.category = "equip";
    EquipItems.equip_name = "";
    EquipItems.description = "";
    EquipItems.valid = true;
    EquipItems.energy_cost = 50;
    EquipItems.upgrade_price = new Coin({
      baseCoins: 50
    });
    EquipItems.buy_price = new Coin({
      baseCoins: 200
    });
    EquipItems.evolve_level = [ 1, 6, 10, 13, 15, 17, 18, 19, 20 ];
    EquipItems.uiDisplay = true;
    EquipItems.story = "";
    EquipItems.overviewDisplay = true;
    var EquipItemsWithListener = function(_EquipItems) {
      _inheritsLoose(EquipItemsWithListener, _EquipItems);
      function EquipItemsWithListener() {
        return _EquipItems.apply(this, arguments) || this;
      }
      return EquipItemsWithListener;
    }(EquipItems);
    module.exports = {
      EquipItems: EquipItems,
      EquipItemsWithListener: EquipItemsWithListener
    };
    cc._RF.pop();
  }, {
    "../objects/Coin": "Coin",
    "../wheels/interfaces": "interfaces"
  } ],
  Equips: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2d3f5A+KrpJfYsacpehGI9W", "Equips");
    "use strict";
    function _createForOfIteratorHelperLoose(o, allowArrayLike) {
      var it = "undefined" !== typeof Symbol && o[Symbol.iterator] || o["@@iterator"];
      if (it) return (it = it.call(o)).next.bind(it);
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && "number" === typeof o.length) {
        it && (o = it);
        var i = 0;
        return function() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if ("string" === typeof o) return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      "Object" === n && o.constructor && (n = o.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(o);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      (null == len || len > arr.length) && (len = arr.length);
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
      return arr2;
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
      return _setPrototypeOf(o, p);
    }
    var _require = require("./templates/EquipItems"), EquipItems = _require.EquipItems, EquipItemsWithListener = _require.EquipItemsWithListener;
    var _require2 = require("./objects/Coin"), Coin = _require2.Coin;
    var _require3 = require("./templates/Listeners"), Listener = _require3.Listener;
    var Equip0 = function(_EquipItems) {
      _inheritsLoose(Equip0, _EquipItems);
      function Equip0() {
        return _EquipItems.apply(this, arguments) || this;
      }
      return Equip0;
    }(EquipItems);
    Equip0.id = 0;
    Equip0.equip_name = "placeHolder";
    Equip0.description = "placeHolder";
    Equip0.valid = false;
    Equip0.upgrade_price = new Coin({});
    var Equip1 = function(_EquipItemsWithListen) {
      _inheritsLoose(Equip1, _EquipItemsWithListen);
      function Equip1() {
        return _EquipItemsWithListen.apply(this, arguments) || this;
      }
      var _proto = Equip1.prototype;
      _proto.init = function init(owner) {
        _EquipItemsWithListen.prototype.init.call(this, owner);
        this.listener = new Equip1AttackSpeedUpListener(owner, ENDLESS_TIME);
        this.game.listeners.AttackListeners.push(this.listener);
      };
      _proto.evolve = function evolve() {
        this.listener.grow += .01;
      };
      return Equip1;
    }(EquipItemsWithListener);
    Equip1.id = 1;
    Equip1.equip_name = "\u521d\u8292";
    Equip1.description = "\u6bcf\u6b21\u653b\u51fb\u90fd\u63d0\u5347\u81ea\u8eab2%\u7684\u4fee\u4e3a";
    Equip1.valid = true;
    Equip1.upgrade_price = new Coin({
      baseCoins: 50
    });
    var Equip1AttackSpeedUpListener = function(_Listener) {
      _inheritsLoose(Equip1AttackSpeedUpListener, _Listener);
      function Equip1AttackSpeedUpListener() {
        return _Listener.apply(this, arguments) || this;
      }
      var _proto2 = Equip1AttackSpeedUpListener.prototype;
      _proto2.init = function init() {
        _Listener.prototype.init.apply(this, arguments);
        this.grow = 1.01;
      };
      _proto2.check = function check(player1, player2) {
        if (player1.code != this.owner.code) return;
        this.game.addLog("\u201c\u521d\u8292\u201d\u7684\u6548\u679c\u89e6\u53d1", 3);
        this.game.addLog("", 4);
        player1.updateSpeed(this.grow);
      };
      return Equip1AttackSpeedUpListener;
    }(Listener);
    var Equip2 = function(_EquipItems2) {
      _inheritsLoose(Equip2, _EquipItems2);
      function Equip2() {
        return _EquipItems2.apply(this, arguments) || this;
      }
      var _proto3 = Equip2.prototype;
      _proto3.evolve = function evolve() {
        this.owner.grow += .01;
      };
      return Equip2;
    }(EquipItems);
    Equip2.id = 2;
    Equip2.equip_name = "\u7389\u9aa8";
    Equip2.description = "\u6bcf\u6b21\u9020\u6210100\u70b9\u7269\u7406\u4f24\u5bb3\u65f6\uff0c\u83b7\u5f97\u989d\u5916\u76841%\u7684\u4fee\u4e3a\u63d0\u5347";
    Equip2.valid = true;
    Equip2.upgrade_price = new Coin({
      auroCoins: 50
    });
    var Equip3 = function(_EquipItems3) {
      _inheritsLoose(Equip3, _EquipItems3);
      function Equip3() {
        return _EquipItems3.apply(this, arguments) || this;
      }
      var _proto4 = Equip3.prototype;
      _proto4.evolve = function evolve() {
        this.owner.damage += 50;
      };
      return Equip3;
    }(EquipItems);
    Equip3.id = 3;
    Equip3.equip_name = "\u7eaf\u94a7";
    Equip3.description = "\u653b\u51fb\u529b\u63d0\u534750";
    Equip3.valid = true;
    Equip3.upgrade_price = new Coin({
      auroCoins: 50
    });
    Equip3.evolve_level = [ 1, 5, 8, 11, 14, 16, 18, 20 ];
    var Equip4 = function(_EquipItems4) {
      _inheritsLoose(Equip4, _EquipItems4);
      function Equip4() {
        return _EquipItems4.apply(this, arguments) || this;
      }
      var _proto5 = Equip4.prototype;
      _proto5.evolve = function evolve() {
        this.owner.minusAspd(.5);
      };
      return Equip4;
    }(EquipItems);
    Equip4.id = 4;
    Equip4.equip_name = "\u4e3d\u83ba";
    Equip4.description = "\u653b\u51fb\u95f4\u9694\u964d\u4f4e0.5";
    Equip4.valid = true;
    Equip4.upgrade_price = new Coin({
      auroCoins: 50
    });
    var Equip5 = function(_EquipItems5) {
      _inheritsLoose(Equip5, _EquipItems5);
      function Equip5() {
        return _EquipItems5.apply(this, arguments) || this;
      }
      var _proto6 = Equip5.prototype;
      _proto6.evolve = function evolve() {
        this.owner.scope += .5;
      };
      return Equip5;
    }(EquipItems);
    Equip5.id = 5;
    Equip5.equip_name = "\u661f\u7fce";
    Equip5.description = "\u653b\u51fb\u8303\u56f4\u589e\u52a00.5\u683c";
    Equip5.valid = true;
    Equip5.upgrade_price = new Coin({
      pyroCoins: 50
    });
    Equip5.evolve_level = [ 1, 4, 7, 10, 13, 16, 18, 20 ];
    var Equip6 = function(_EquipItemsWithListen2) {
      _inheritsLoose(Equip6, _EquipItemsWithListen2);
      function Equip6() {
        return _EquipItemsWithListen2.apply(this, arguments) || this;
      }
      var _proto7 = Equip6.prototype;
      _proto7.init = function init(owner) {
        _EquipItemsWithListen2.prototype.init.call(this, owner);
        this.listener = new Equip6AttackWeakenListener(owner, ENDLESS_TIME);
        this.game.listeners.AttackListeners.push(this.listener);
      };
      _proto7.evolve = function evolve() {
        this.listener.weaken -= .1;
      };
      return Equip6;
    }(EquipItemsWithListener);
    Equip6.id = 6;
    Equip6.equip_name = "\u6d45\u6d77";
    Equip6.description = "\u6bcf\u6b21\u653b\u51fb\u90fd\u5c06\u77ed\u6682\u964d\u4f4e\u654c\u65b93*3\u8303\u56f4\u518510%\u7684\u52bf\u529b";
    Equip6.valid = true;
    Equip6.upgrade_price = new Coin({
      geoCoins: 50
    });
    Equip6.evolve_level = [ 1, 5, 9, 13, 17, 20 ];
    var Equip6AttackWeakenListener = function(_Listener2) {
      _inheritsLoose(Equip6AttackWeakenListener, _Listener2);
      function Equip6AttackWeakenListener() {
        return _Listener2.apply(this, arguments) || this;
      }
      var _proto8 = Equip6AttackWeakenListener.prototype;
      _proto8.init = function init() {
        _Listener2.prototype.init.apply(this, arguments);
        this.weaken = .9;
      };
      _proto8.check = function check(player1, player2) {
        var _this = this;
        if (player1.code != this.owner.code) return;
        this.game.addLog("\u201c\u6d45\u6d77\u201d\u7684\u524a\u5f31\u6548\u679c\u89e6\u53d1", 3);
        getItemIn33(player2).forEach(function(item) {
          new DecreaseSpeedBuff(item, ENTER_TIME, _this.weaken);
        });
      };
      return Equip6AttackWeakenListener;
    }(Listener);
    var Equip7 = function(_EquipItemsWithListen3) {
      _inheritsLoose(Equip7, _EquipItemsWithListen3);
      function Equip7() {
        return _EquipItemsWithListen3.apply(this, arguments) || this;
      }
      var _proto9 = Equip7.prototype;
      _proto9.init = function init(owner) {
        _EquipItemsWithListen3.prototype.init.call(this, owner);
        for (var _iterator = _createForOfIteratorHelperLoose(this.game.unitDict.values()), _step; !(_step = _iterator()).done; ) {
          var item = _step.value;
          if ("RefreshChallengeTimeMonitors" == item.type) {
            this.listener = item;
            break;
          }
        }
      };
      _proto9.evolve = function evolve() {
        var player_id = this.owner.code;
        this.listener.challenge_time[player_id] += 1;
      };
      return Equip7;
    }(EquipItemsWithListener);
    Equip7.id = 7;
    Equip7.equip_name = "\u7384\u725d";
    Equip7.description = "\u6bcf\u6b21\u4fee\u884c\u53ef\u4ee5\u989d\u5916\u53d1\u52a8\u4e00\u6b21\u8bba\u5251";
    Equip7.valid = true;
    Equip7.upgrade_price = new Coin({
      geoCoins: 50
    });
    Equip7.evolve_level = [ 1, 7, 12, 16, 20 ];
    var Equip8 = function(_EquipItemsWithListen4) {
      _inheritsLoose(Equip8, _EquipItemsWithListen4);
      function Equip8() {
        return _EquipItemsWithListen4.apply(this, arguments) || this;
      }
      var _proto10 = Equip8.prototype;
      _proto10.init = function init(owner) {
        _EquipItemsWithListen4.prototype.init.call(this, owner);
        this.listener = (0, typeUtils_1.findOneItemByType)(this.game, "AttackCriticalMonitors");
      };
      _proto10.evolve = function evolve() {
        var player_id = this.owner.code;
        this.listener.critical_digits[player_id].push(Equip8.critical_points.get(this.level));
      };
      return Equip8;
    }(EquipItemsWithListener);
    Equip8.id = 8;
    Equip8.equip_name = "\u8840\u854a";
    Equip8.description = "\u653b\u51fb\u7b2c\u4e09\u4f4d\u4e3a3\u7684\u4e5f\u53ef\u4ee5\u4ea7\u751f\u66b4\u51fb";
    Equip8.valid = true;
    Equip8.upgrade_price = new Coin({
      geoCoins: 50
    });
    Equip8.critical_points = new Map([ [ 1, 3 ], [ 6, 9 ], [ 10, 1 ], [ 13, 5 ], [ 16, 2 ], [ 17, 4 ], [ 18, 6 ], [ 19, 8 ], [ 20, 0 ] ]);
    var Equip9 = function(_EquipItemsWithListen5) {
      _inheritsLoose(Equip9, _EquipItemsWithListen5);
      function Equip9() {
        return _EquipItemsWithListen5.apply(this, arguments) || this;
      }
      var _proto11 = Equip9.prototype;
      _proto11.init = function init(owner) {
        _EquipItemsWithListen5.prototype.init.call(this, owner);
        this.listener = new Equip9AttackAllListener(owner, ENDLESS_TIME);
        this.game.listeners.ChallengeListeners.push(this.listener);
      };
      _proto11.evolve = function evolve() {
        this.listener.attack_times++;
      };
      return Equip9;
    }(EquipItemsWithListener);
    Equip9.id = 9;
    Equip9.equip_name = "\u660e\u6e0a";
    Equip9.description = "\u8bba\u5251\u65f6\u4f1a\u5bf9\u653b\u51fb\u8303\u56f4\u5185\u7684\u6240\u6709\u5355\u4f4d\uff08\u9664\u81ea\u5df1\u5916\uff09\u53d1\u52a8\u4e00\u6b21\u989d\u5916\u653b\u51fb";
    Equip9.valid = true;
    Equip9.upgrade_price = new Coin({
      hydroCoins: 50
    });
    Equip9.evolve_level = [ 1, 7, 12, 16, 20 ];
    var Equip9AttackAllListener = function(_Listener3) {
      _inheritsLoose(Equip9AttackAllListener, _Listener3);
      function Equip9AttackAllListener() {
        return _Listener3.apply(this, arguments) || this;
      }
      var _proto12 = Equip9AttackAllListener.prototype;
      _proto12.init = function init() {
        _Listener3.prototype.init.apply(this, arguments);
        this.attack_times = 0;
      };
      _proto12.check = function check(player1, player2) {
        if (player1.code != this.owner.code) return;
        for (var i = 0; i < this.attack_times; i++) player1.itemsInScope().forEach(function(item) {
          player1.attack(item);
        });
      };
      return Equip9AttackAllListener;
    }(Listener);
    var Equip10 = function(_EquipItemsWithListen6) {
      _inheritsLoose(Equip10, _EquipItemsWithListen6);
      function Equip10() {
        return _EquipItemsWithListen6.apply(this, arguments) || this;
      }
      var _proto13 = Equip10.prototype;
      _proto13.init = function init(owner) {
        _EquipItemsWithListen6.prototype.init.call(this, owner);
        this.listener = new Equip10AddPyroSignListener(owner, ENDLESS_TIME);
        this.game.listeners.AttackListeners.push(this.listener);
      };
      _proto13.evolve = function evolve() {};
      return Equip10;
    }(EquipItemsWithListener);
    Equip10.id = 10;
    Equip10.equip_name = "\u58a8\u708e";
    Equip10.description = "\u6bcf\u6b21\u653b\u51fb\u4ea7\u751f\u66b4\u51fb\u65f6\u5bf9\u53d7\u51fb\u8005\u53e0\u52a0\u4e00\u5c42\u706b\u5370\u8bb0";
    Equip10.valid = true;
    Equip10.upgrade_price = new Coin({
      pyroCoins: 50
    });
    Equip10.evolve_level = [ 1 ];
    var Equip10AddPyroSignListener = function(_Listener4) {
      _inheritsLoose(Equip10AddPyroSignListener, _Listener4);
      function Equip10AddPyroSignListener() {
        return _Listener4.apply(this, arguments) || this;
      }
      var _proto14 = Equip10AddPyroSignListener.prototype;
      _proto14.check = function check(player1, player2, kwargs) {
        if (kwargs.critical) {
          if (player1.code != this.owner.code) return;
          this.game.addLog('\u201c\u58a8\u708e\u201d\u7684\u6548\u679c\u89e6\u53d1\uff0c{"code":' + player2.code + "}\u53e0\u52a03\u5c42\u706b\u5370\u8bb0", 3);
          player2.pyroSign++;
        }
      };
      return Equip10AddPyroSignListener;
    }(Listener);
    var Equip11 = function(_EquipItemsWithListen7) {
      _inheritsLoose(Equip11, _EquipItemsWithListen7);
      function Equip11() {
        return _EquipItemsWithListen7.apply(this, arguments) || this;
      }
      var _proto15 = Equip11.prototype;
      _proto15.init = function init(owner) {
        _EquipItemsWithListen7.prototype.init.call(this, owner);
        this.listener = new Equip11AddHydroSignListener(owner, ENDLESS_TIME);
        this.game.listeners.AttackListeners.push(this.listener);
      };
      _proto15.evolve = function evolve() {};
      return Equip11;
    }(EquipItemsWithListener);
    Equip11.id = 11;
    Equip11.equip_name = "\u96e8\u9701";
    Equip11.description = "\u6bcf\u6b21\u653b\u51fb\u4ea7\u751f\u66b4\u51fb\u65f6\u5bf9\u53d7\u51fb\u8005\u53e0\u52a0\u4e00\u5c42\u6c34\u5370\u8bb0\uff0c\u82e5\u8be5\u89d2\u8272";
    Equip11.valid = true;
    Equip11.upgrade_price = new Coin({
      hydroCoins: 50
    });
    Equip11.buy_price = new Coin({
      hydroCoins: 200
    });
    Equip11.evolve_level = [ 1 ];
    var Equip11AddHydroSignListener = function(_Listener5) {
      _inheritsLoose(Equip11AddHydroSignListener, _Listener5);
      function Equip11AddHydroSignListener() {
        return _Listener5.apply(this, arguments) || this;
      }
      var _proto16 = Equip11AddHydroSignListener.prototype;
      _proto16.check = function check(player1, player2, kwargs) {
        if (kwargs.critical) {
          if (player1.code != this.owner.code) return;
          this.game.addLog('\u201c\u96e8\u9701\u201d\u7684\u6548\u679c\u89e6\u53d1\uff0c{"code":' + player2.code + "}\u53e0\u52a01\u5c42\u6c34\u5370\u8bb0", 3);
          player2.hydroSign++;
        }
      };
      return Equip11AddHydroSignListener;
    }(Listener);
    var Equip12 = function(_EquipItemsWithListen8) {
      _inheritsLoose(Equip12, _EquipItemsWithListen8);
      function Equip12() {
        return _EquipItemsWithListen8.apply(this, arguments) || this;
      }
      var _proto17 = Equip12.prototype;
      _proto17.init = function init(owner) {
        _EquipItemsWithListen8.prototype.init.call(this, owner);
        this.listener = new Equip12EnergyRecoveringListener(owner, ENDLESS_TIME);
        this.game.listeners.AttackListeners.push(this.listener);
      };
      _proto17.evolve = function evolve() {
        this.listener.recover++;
      };
      return Equip12;
    }(EquipItemsWithListener);
    Equip12.id = 12;
    Equip12.equip_name = "\u9752\u6eaa";
    Equip12.description = "\u6bcf\u6b21\u653b\u51fb\u56de\u590d1\u70b9\u6cd5\u529b";
    Equip12.valid = true;
    Equip12.upgrade_price = new Coin({
      hydroCoins: 50
    });
    Equip12.evolve_level = [ 1 ];
    var Equip12EnergyRecoveringListener = function(_Listener6) {
      _inheritsLoose(Equip12EnergyRecoveringListener, _Listener6);
      function Equip12EnergyRecoveringListener() {
        return _Listener6.apply(this, arguments) || this;
      }
      var _proto18 = Equip12EnergyRecoveringListener.prototype;
      _proto18.init = function init() {
        _Listener6.prototype.init.apply(this, arguments);
        this.recover = 20;
      };
      _proto18.check = function check(player1, player2) {
        player1.code == this.owner.code && this.game.addLog("\u201c\u9752\u6eaa\u201d\u7684\u6548\u679c\u89e6\u53d1\uff0c\u73a9\u5bb61\u56de\u590d20\u70b9\u6cd5\u529b\u503c", 3);
        player1.energy += this.recover;
      };
      return Equip12EnergyRecoveringListener;
    }(Listener);
    var Equip13 = function(_EquipItemsWithListen9) {
      _inheritsLoose(Equip13, _EquipItemsWithListen9);
      function Equip13() {
        return _EquipItemsWithListen9.apply(this, arguments) || this;
      }
      var _proto19 = Equip13.prototype;
      _proto19.init = function init(owner) {
        _EquipItemsWithListen9.prototype.init.call(this, owner);
        this.listener = new Equip13CoinsListener(owner, ENDLESS_TIME);
        this.game.listeners.CoinListeners.push(this.listener);
      };
      _proto19.evolve = function evolve() {
        if (1 == this.level) {
          this.listener.improve = 1.001;
          this.listener.deprove = .999;
        } else {
          this.listener.improve += 1e-4;
          this.listener.deprove += 1e-4;
        }
      };
      return Equip13;
    }(EquipItemsWithListener);
    Equip13.id = 13;
    Equip13.equip_name = "\u7075\u6cc9";
    Equip13.description = "\u6bcf\u5f53\u4f60\u83b7\u5f971\u679a\u91d1\u7075\u77f3/\u6c34\u7075\u77f3/\u706b\u7075\u77f3\uff0c\u4fee\u4e3a\u63d0\u53470.1%\u3002\u6bcf\u5f53\u4f60\u5931\u53bb1\u679a\u91d1\u7075\u77f3/\u6c34\u7075\u77f3/\u706b\u7075\u77f3\uff0c\u4fee\u4e3a\u964d\u4f4e0.1%";
    Equip13.valid = true;
    Equip13.upgrade_price = new Coin({
      geoCoins: 50
    });
    Equip13.evolve_level = [ 1 ];
    var Equip13CoinsListener = function(_Listener7) {
      _inheritsLoose(Equip13CoinsListener, _Listener7);
      function Equip13CoinsListener() {
        return _Listener7.apply(this, arguments) || this;
      }
      var _proto20 = Equip13CoinsListener.prototype;
      _proto20.init = function init() {
        _Listener7.prototype.init.apply(this, arguments);
        this.improve = 1.001;
        this.deprove = .999;
      };
      _proto20.check = function check(player1, coins) {
        if (this.owner.code != player1.code) return;
        var num = coins.totalValue() - coins.baseCoins;
        if (0 == num) return;
        this.game.addLog("\u201c\u7075\u6cc9\u201d\u7684\u6548\u679c\u89e6\u53d1", -1);
        num > 0 && player1.updateSpeed(Math.pow(this.improve, num));
        num < 0 && player1.updateSpeed(Math.pow(this.deprove, -num));
      };
      return Equip13CoinsListener;
    }(Listener);
    var Equip14 = function(_EquipItemsWithListen10) {
      _inheritsLoose(Equip14, _EquipItemsWithListen10);
      function Equip14() {
        return _EquipItemsWithListen10.apply(this, arguments) || this;
      }
      var _proto21 = Equip14.prototype;
      _proto21.init = function init(owner) {
        _EquipItemsWithListen10.prototype.init.call(this, owner);
        this.listener = new Equip14DistanceListener(owner, ENDLESS_TIME);
        this.game.listeners.AttackListeners.push(this.listener);
        this.game.listeners.ChallengeListeners.push(new Equip14ChallengeEnhanceMoveListener(owner, ENDLESS_TIME));
        this.game.listeners.OperateListeners.push(new Equip14OperateResetMoveListener(owner, ENDLESS_TIME));
      };
      _proto21.evolve = function evolve() {
        this.listener.value += .1;
      };
      return Equip14;
    }(EquipItemsWithListener);
    Equip14.id = 14;
    Equip14.equip_name = "\u98de\u71d5";
    Equip14.description = "\u653b\u51fb\u9020\u6210\u7684\u4f24\u5bb3\u63d0\u534710X%(X\u4e3a\u4f60\u4e0e\u53d7\u51fb\u8005\u7684\u8ddd\u79bb)\n\n\u6bcf\u5f53\u4f60\u53d1\u52a8\u4e00\u6b21\u8bba\u5251\u4e4b\u540e\uff0c\u4e0b\u4e00\u6b21\u53ef\u4ee5\u79fb\u52a8\u81f3\u653b\u51fb\u8303\u56f4\u5185\u4efb\u610f\u4f4d\u7f6e";
    Equip14.valid = true;
    Equip14.upgrade_price = new Coin({
      auroCoins: 50
    });
    Equip14.evolve_level = [ 1 ];
    var Equip14DistanceListener = function(_Listener8) {
      _inheritsLoose(Equip14DistanceListener, _Listener8);
      function Equip14DistanceListener() {
        return _Listener8.apply(this, arguments) || this;
      }
      var _proto22 = Equip14DistanceListener.prototype;
      _proto22.init = function init() {
        _Listener8.prototype.init.apply(this, arguments);
        this.value = 0;
      };
      _proto22.check = function check(player1, player2, kwargs) {
        if (this.owner.code != player1.code) return;
        kwargs.damage.value *= 1 + player1.distance(player2) * this.value;
      };
      return Equip14DistanceListener;
    }(Listener);
    var Equip14ChallengeEnhanceMoveListener = function(_Listener9) {
      _inheritsLoose(Equip14ChallengeEnhanceMoveListener, _Listener9);
      function Equip14ChallengeEnhanceMoveListener() {
        return _Listener9.apply(this, arguments) || this;
      }
      var _proto23 = Equip14ChallengeEnhanceMoveListener.prototype;
      _proto23.check = function check(player1, player2) {
        if (!this.checkOwner(player1)) return;
        player1.spellList[0].disabled = true;
        player1.spellList[0] = new Equip14EnhancedMoveSpell(player1);
      };
      return Equip14ChallengeEnhanceMoveListener;
    }(Listener);
    var Equip14OperateResetMoveListener = function(_Listener10) {
      _inheritsLoose(Equip14OperateResetMoveListener, _Listener10);
      function Equip14OperateResetMoveListener() {
        return _Listener10.apply(this, arguments) || this;
      }
      var _proto24 = Equip14OperateResetMoveListener.prototype;
      _proto24.init = function init() {
        _Listener10.prototype.init.apply(this, arguments);
        this.time = 1;
      };
      _proto24.check = function check(player) {
        if (!this.checkOwner(player)) return;
        if (this.time > 0) this.time--; else {
          this.disabled = true;
          player.spellList[0].disabled = true;
          player.spellList[0] = new MoveSpell(player);
        }
      };
      return Equip14OperateResetMoveListener;
    }(Listener);
    Equip1.iconUrl = "weapon/\u521d\u8292.png";
    Equip2.iconUrl = "weapon/\u7389\u9aa8.png";
    Equip3.iconUrl = "weapon/\u7eaf\u94a7.png";
    Equip4.iconUrl = "weapon/\u4e3d\u83ba.png";
    Equip5.iconUrl = "weapon/\u661f\u7fce.png";
    Equip6.iconUrl = "weapon/\u6d45\u6d77.png";
    Equip7.iconUrl = "weapon/\u660e\u6e0a.png";
    Equip8.iconUrl = "weapon/\u8840\u854a.png";
    Equip9.iconUrl = "weapon/\u7384\u725d.png";
    Equip10.iconUrl = "weapon/\u58a8\u708e.png";
    Equip11.iconUrl = "weapon/\u96e8\u9701.png";
    Equip12.iconUrl = "weapon/\u9752\u6eaa.png";
    Equip13.iconUrl = "weapon/\u7075\u6cc9.png";
    Equip14.iconUrl = "weapon/\u98de\u71d5.png";
    module.exports = {
      Equip0: Equip0,
      Equip1: Equip1,
      Equip1AttackSpeedUpListener: Equip1AttackSpeedUpListener,
      Equip2: Equip2,
      Equip3: Equip3,
      Equip4: Equip4,
      Equip5: Equip5,
      Equip6: Equip6,
      Equip6AttackWeakenListener: Equip6AttackWeakenListener,
      Equip7: Equip7,
      Equip8: Equip8,
      Equip9: Equip9,
      Equip9AttackAllListener: Equip9AttackAllListener,
      Equip10: Equip10,
      Equip10AddPyroSignListener: Equip10AddPyroSignListener,
      Equip11: Equip11,
      Equip11AddHydroSignListener: Equip11AddHydroSignListener,
      Equip12: Equip12,
      Equip12EnergyRecoveringListener: Equip12EnergyRecoveringListener,
      Equip13: Equip13,
      Equip13CoinsListener: Equip13CoinsListener,
      Equip14: Equip14,
      Equip14DistanceListener: Equip14DistanceListener,
      Equip14ChallengeEnhanceMoveListener: Equip14ChallengeEnhanceMoveListener,
      Equip14OperateResetMoveListener: Equip14OperateResetMoveListener
    };
    var OriginMonitors_1 = require("./OriginMonitors");
    var _require4 = require("./constants/timeConstants"), ENDLESS_TIME = _require4.ENDLESS_TIME, ENTER_TIME = _require4.ENTER_TIME;
    var typeUtils_1 = require("./utils/typeUtils");
    var _require5 = require("./Buffs"), DecreaseSpeedBuff = _require5.DecreaseSpeedBuff;
    var _require6 = require("./Spell"), Equip14EnhancedMoveSpell = _require6.Equip14EnhancedMoveSpell;
    var _require7 = require("./utils/mapUtils"), getItemIn33 = _require7.getItemIn33;
    cc._RF.pop();
  }, {
    "./Buffs": "Buffs",
    "./OriginMonitors": "OriginMonitors",
    "./Spell": "Spell",
    "./constants/timeConstants": "timeConstants",
    "./objects/Coin": "Coin",
    "./templates/EquipItems": "EquipItems",
    "./templates/Listeners": "Listeners",
    "./utils/mapUtils": "mapUtils",
    "./utils/typeUtils": "typeUtils"
  } ],
  2: [ function(require, module, exports) {
    (function(root, factory, undef) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core")) : "function" === typeof define && define.amd ? define([ "./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core" ], factory) : factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var BlockCipher = C_lib.BlockCipher;
        var C_algo = C.algo;
        var SBOX = [];
        var INV_SBOX = [];
        var SUB_MIX_0 = [];
        var SUB_MIX_1 = [];
        var SUB_MIX_2 = [];
        var SUB_MIX_3 = [];
        var INV_SUB_MIX_0 = [];
        var INV_SUB_MIX_1 = [];
        var INV_SUB_MIX_2 = [];
        var INV_SUB_MIX_3 = [];
        (function() {
          var d = [];
          for (var i = 0; i < 256; i++) d[i] = i < 128 ? i << 1 : i << 1 ^ 283;
          var x = 0;
          var xi = 0;
          for (var i = 0; i < 256; i++) {
            var sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
            sx = sx >>> 8 ^ 255 & sx ^ 99;
            SBOX[x] = sx;
            INV_SBOX[sx] = x;
            var x2 = d[x];
            var x4 = d[x2];
            var x8 = d[x4];
            var t = 257 * d[sx] ^ 16843008 * sx;
            SUB_MIX_0[x] = t << 24 | t >>> 8;
            SUB_MIX_1[x] = t << 16 | t >>> 16;
            SUB_MIX_2[x] = t << 8 | t >>> 24;
            SUB_MIX_3[x] = t;
            var t = 16843009 * x8 ^ 65537 * x4 ^ 257 * x2 ^ 16843008 * x;
            INV_SUB_MIX_0[sx] = t << 24 | t >>> 8;
            INV_SUB_MIX_1[sx] = t << 16 | t >>> 16;
            INV_SUB_MIX_2[sx] = t << 8 | t >>> 24;
            INV_SUB_MIX_3[sx] = t;
            if (x) {
              x = x2 ^ d[d[d[x8 ^ x2]]];
              xi ^= d[d[xi]];
            } else x = xi = 1;
          }
        })();
        var RCON = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ];
        var AES = C_algo.AES = BlockCipher.extend({
          _doReset: function() {
            var t;
            if (this._nRounds && this._keyPriorReset === this._key) return;
            var key = this._keyPriorReset = this._key;
            var keyWords = key.words;
            var keySize = key.sigBytes / 4;
            var nRounds = this._nRounds = keySize + 6;
            var ksRows = 4 * (nRounds + 1);
            var keySchedule = this._keySchedule = [];
            for (var ksRow = 0; ksRow < ksRows; ksRow++) if (ksRow < keySize) keySchedule[ksRow] = keyWords[ksRow]; else {
              t = keySchedule[ksRow - 1];
              if (ksRow % keySize) keySize > 6 && ksRow % keySize == 4 && (t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 255] << 16 | SBOX[t >>> 8 & 255] << 8 | SBOX[255 & t]); else {
                t = t << 8 | t >>> 24;
                t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 255] << 16 | SBOX[t >>> 8 & 255] << 8 | SBOX[255 & t];
                t ^= RCON[ksRow / keySize | 0] << 24;
              }
              keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
            }
            var invKeySchedule = this._invKeySchedule = [];
            for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
              var ksRow = ksRows - invKsRow;
              if (invKsRow % 4) var t = keySchedule[ksRow]; else var t = keySchedule[ksRow - 4];
              invKeySchedule[invKsRow] = invKsRow < 4 || ksRow <= 4 ? t : INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[t >>> 16 & 255]] ^ INV_SUB_MIX_2[SBOX[t >>> 8 & 255]] ^ INV_SUB_MIX_3[SBOX[255 & t]];
            }
          },
          encryptBlock: function(M, offset) {
            this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
          },
          decryptBlock: function(M, offset) {
            var t = M[offset + 1];
            M[offset + 1] = M[offset + 3];
            M[offset + 3] = t;
            this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);
            var t = M[offset + 1];
            M[offset + 1] = M[offset + 3];
            M[offset + 3] = t;
          },
          _doCryptBlock: function(M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
            var nRounds = this._nRounds;
            var s0 = M[offset] ^ keySchedule[0];
            var s1 = M[offset + 1] ^ keySchedule[1];
            var s2 = M[offset + 2] ^ keySchedule[2];
            var s3 = M[offset + 3] ^ keySchedule[3];
            var ksRow = 4;
            for (var round = 1; round < nRounds; round++) {
              var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[s1 >>> 16 & 255] ^ SUB_MIX_2[s2 >>> 8 & 255] ^ SUB_MIX_3[255 & s3] ^ keySchedule[ksRow++];
              var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[s2 >>> 16 & 255] ^ SUB_MIX_2[s3 >>> 8 & 255] ^ SUB_MIX_3[255 & s0] ^ keySchedule[ksRow++];
              var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[s3 >>> 16 & 255] ^ SUB_MIX_2[s0 >>> 8 & 255] ^ SUB_MIX_3[255 & s1] ^ keySchedule[ksRow++];
              var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[s0 >>> 16 & 255] ^ SUB_MIX_2[s1 >>> 8 & 255] ^ SUB_MIX_3[255 & s2] ^ keySchedule[ksRow++];
              s0 = t0;
              s1 = t1;
              s2 = t2;
              s3 = t3;
            }
            var t0 = (SBOX[s0 >>> 24] << 24 | SBOX[s1 >>> 16 & 255] << 16 | SBOX[s2 >>> 8 & 255] << 8 | SBOX[255 & s3]) ^ keySchedule[ksRow++];
            var t1 = (SBOX[s1 >>> 24] << 24 | SBOX[s2 >>> 16 & 255] << 16 | SBOX[s3 >>> 8 & 255] << 8 | SBOX[255 & s0]) ^ keySchedule[ksRow++];
            var t2 = (SBOX[s2 >>> 24] << 24 | SBOX[s3 >>> 16 & 255] << 16 | SBOX[s0 >>> 8 & 255] << 8 | SBOX[255 & s1]) ^ keySchedule[ksRow++];
            var t3 = (SBOX[s3 >>> 24] << 24 | SBOX[s0 >>> 16 & 255] << 16 | SBOX[s1 >>> 8 & 255] << 8 | SBOX[255 & s2]) ^ keySchedule[ksRow++];
            M[offset] = t0;
            M[offset + 1] = t1;
            M[offset + 2] = t2;
            M[offset + 3] = t3;
          },
          keySize: 8
        });
        C.AES = BlockCipher._createHelper(AES);
      })();
      return CryptoJS.AES;
    });
  }, {
    "./cipher-core": 4,
    "./core": 5,
    "./enc-base64": 6,
    "./evpkdf": 9,
    "./md5": 14
  } ],
  3: [ function(require, module, exports) {
    (function(root, factory, undef) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core")) : "function" === typeof define && define.amd ? define([ "./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core" ], factory) : factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var BlockCipher = C_lib.BlockCipher;
        var C_algo = C.algo;
        const N = 16;
        const ORIG_P = [ 608135816, 2242054355, 320440878, 57701188, 2752067618, 698298832, 137296536, 3964562569, 1160258022, 953160567, 3193202383, 887688300, 3232508343, 3380367581, 1065670069, 3041331479, 2450970073, 2306472731 ];
        const ORIG_S = [ [ 3509652390, 2564797868, 805139163, 3491422135, 3101798381, 1780907670, 3128725573, 4046225305, 614570311, 3012652279, 134345442, 2240740374, 1667834072, 1901547113, 2757295779, 4103290238, 227898511, 1921955416, 1904987480, 2182433518, 2069144605, 3260701109, 2620446009, 720527379, 3318853667, 677414384, 3393288472, 3101374703, 2390351024, 1614419982, 1822297739, 2954791486, 3608508353, 3174124327, 2024746970, 1432378464, 3864339955, 2857741204, 1464375394, 1676153920, 1439316330, 715854006, 3033291828, 289532110, 2706671279, 2087905683, 3018724369, 1668267050, 732546397, 1947742710, 3462151702, 2609353502, 2950085171, 1814351708, 2050118529, 680887927, 999245976, 1800124847, 3300911131, 1713906067, 1641548236, 4213287313, 1216130144, 1575780402, 4018429277, 3917837745, 3693486850, 3949271944, 596196993, 3549867205, 258830323, 2213823033, 772490370, 2760122372, 1774776394, 2652871518, 566650946, 4142492826, 1728879713, 2882767088, 1783734482, 3629395816, 2517608232, 2874225571, 1861159788, 326777828, 3124490320, 2130389656, 2716951837, 967770486, 1724537150, 2185432712, 2364442137, 1164943284, 2105845187, 998989502, 3765401048, 2244026483, 1075463327, 1455516326, 1322494562, 910128902, 469688178, 1117454909, 936433444, 3490320968, 3675253459, 1240580251, 122909385, 2157517691, 634681816, 4142456567, 3825094682, 3061402683, 2540495037, 79693498, 3249098678, 1084186820, 1583128258, 426386531, 1761308591, 1047286709, 322548459, 995290223, 1845252383, 2603652396, 3431023940, 2942221577, 3202600964, 3727903485, 1712269319, 422464435, 3234572375, 1170764815, 3523960633, 3117677531, 1434042557, 442511882, 3600875718, 1076654713, 1738483198, 4213154764, 2393238008, 3677496056, 1014306527, 4251020053, 793779912, 2902807211, 842905082, 4246964064, 1395751752, 1040244610, 2656851899, 3396308128, 445077038, 3742853595, 3577915638, 679411651, 2892444358, 2354009459, 1767581616, 3150600392, 3791627101, 3102740896, 284835224, 4246832056, 1258075500, 768725851, 2589189241, 3069724005, 3532540348, 1274779536, 3789419226, 2764799539, 1660621633, 3471099624, 4011903706, 913787905, 3497959166, 737222580, 2514213453, 2928710040, 3937242737, 1804850592, 3499020752, 2949064160, 2386320175, 2390070455, 2415321851, 4061277028, 2290661394, 2416832540, 1336762016, 1754252060, 3520065937, 3014181293, 791618072, 3188594551, 3933548030, 2332172193, 3852520463, 3043980520, 413987798, 3465142937, 3030929376, 4245938359, 2093235073, 3534596313, 375366246, 2157278981, 2479649556, 555357303, 3870105701, 2008414854, 3344188149, 4221384143, 3956125452, 2067696032, 3594591187, 2921233993, 2428461, 544322398, 577241275, 1471733935, 610547355, 4027169054, 1432588573, 1507829418, 2025931657, 3646575487, 545086370, 48609733, 2200306550, 1653985193, 298326376, 1316178497, 3007786442, 2064951626, 458293330, 2589141269, 3591329599, 3164325604, 727753846, 2179363840, 146436021, 1461446943, 4069977195, 705550613, 3059967265, 3887724982, 4281599278, 3313849956, 1404054877, 2845806497, 146425753, 1854211946 ], [ 1266315497, 3048417604, 3681880366, 3289982499, 290971e4, 1235738493, 2632868024, 2414719590, 3970600049, 1771706367, 1449415276, 3266420449, 422970021, 1963543593, 2690192192, 3826793022, 1062508698, 1531092325, 1804592342, 2583117782, 2714934279, 4024971509, 1294809318, 4028980673, 1289560198, 2221992742, 1669523910, 35572830, 157838143, 1052438473, 1016535060, 1802137761, 1753167236, 1386275462, 3080475397, 2857371447, 1040679964, 2145300060, 2390574316, 1461121720, 2956646967, 4031777805, 4028374788, 33600511, 2920084762, 1018524850, 629373528, 3691585981, 3515945977, 2091462646, 2486323059, 586499841, 988145025, 935516892, 3367335476, 2599673255, 2839830854, 265290510, 3972581182, 2759138881, 3795373465, 1005194799, 847297441, 406762289, 1314163512, 1332590856, 1866599683, 4127851711, 750260880, 613907577, 1450815602, 3165620655, 3734664991, 3650291728, 3012275730, 3704569646, 1427272223, 778793252, 1343938022, 2676280711, 2052605720, 1946737175, 3164576444, 3914038668, 3967478842, 3682934266, 1661551462, 3294938066, 4011595847, 840292616, 3712170807, 616741398, 312560963, 711312465, 1351876610, 322626781, 1910503582, 271666773, 2175563734, 1594956187, 70604529, 3617834859, 1007753275, 1495573769, 4069517037, 2549218298, 2663038764, 504708206, 2263041392, 3941167025, 2249088522, 1514023603, 1998579484, 1312622330, 694541497, 2582060303, 2151582166, 1382467621, 776784248, 2618340202, 3323268794, 2497899128, 2784771155, 503983604, 4076293799, 907881277, 423175695, 432175456, 1378068232, 4145222326, 3954048622, 3938656102, 3820766613, 2793130115, 2977904593, 26017576, 3274890735, 3194772133, 1700274565, 1756076034, 4006520079, 3677328699, 720338349, 1533947780, 354530856, 688349552, 3973924725, 1637815568, 332179504, 3949051286, 53804574, 2852348879, 3044236432, 1282449977, 3583942155, 3416972820, 4006381244, 1617046695, 2628476075, 3002303598, 1686838959, 431878346, 2686675385, 1700445008, 1080580658, 1009431731, 832498133, 3223435511, 2605976345, 2271191193, 2516031870, 1648197032, 4164389018, 2548247927, 300782431, 375919233, 238389289, 3353747414, 2531188641, 2019080857, 1475708069, 455242339, 2609103871, 448939670, 3451063019, 1395535956, 2413381860, 1841049896, 1491858159, 885456874, 4264095073, 4001119347, 1565136089, 3898914787, 1108368660, 540939232, 1173283510, 2745871338, 3681308437, 4207628240, 3343053890, 4016749493, 1699691293, 1103962373, 3625875870, 2256883143, 3830138730, 1031889488, 3479347698, 1535977030, 4236805024, 3251091107, 2132092099, 1774941330, 1199868427, 1452454533, 157007616, 2904115357, 342012276, 595725824, 1480756522, 206960106, 497939518, 591360097, 863170706, 2375253569, 3596610801, 1814182875, 2094937945, 3421402208, 1082520231, 3463918190, 2785509508, 435703966, 3908032597, 1641649973, 2842273706, 3305899714, 1510255612, 2148256476, 2655287854, 3276092548, 4258621189, 236887753, 3681803219, 274041037, 1734335097, 3815195456, 3317970021, 1899903192, 1026095262, 4050517792, 356393447, 2410691914, 3873677099, 3682840055 ], [ 3913112168, 2491498743, 4132185628, 2489919796, 1091903735, 1979897079, 3170134830, 3567386728, 3557303409, 857797738, 1136121015, 1342202287, 507115054, 2535736646, 337727348, 3213592640, 1301675037, 2528481711, 1895095763, 1721773893, 3216771564, 62756741, 2142006736, 835421444, 2531993523, 1442658625, 3659876326, 2882144922, 676362277, 1392781812, 170690266, 3921047035, 1759253602, 3611846912, 1745797284, 664899054, 1329594018, 3901205900, 3045908486, 2062866102, 2865634940, 3543621612, 3464012697, 1080764994, 553557557, 3656615353, 3996768171, 991055499, 499776247, 1265440854, 648242737, 3940784050, 980351604, 3713745714, 1749149687, 3396870395, 4211799374, 3640570775, 1161844396, 3125318951, 1431517754, 545492359, 4268468663, 3499529547, 1437099964, 2702547544, 3433638243, 2581715763, 2787789398, 1060185593, 1593081372, 2418618748, 4260947970, 69676912, 2159744348, 86519011, 2512459080, 3838209314, 1220612927, 3339683548, 133810670, 1090789135, 1078426020, 1569222167, 845107691, 3583754449, 4072456591, 1091646820, 628848692, 1613405280, 3757631651, 526609435, 236106946, 48312990, 2942717905, 3402727701, 1797494240, 859738849, 992217954, 4005476642, 2243076622, 3870952857, 3732016268, 765654824, 3490871365, 2511836413, 1685915746, 3888969200, 1414112111, 2273134842, 3281911079, 4080962846, 172450625, 2569994100, 980381355, 4109958455, 2819808352, 2716589560, 2568741196, 3681446669, 3329971472, 1835478071, 660984891, 3704678404, 4045999559, 3422617507, 3040415634, 1762651403, 1719377915, 3470491036, 2693910283, 3642056355, 3138596744, 1364962596, 2073328063, 1983633131, 926494387, 3423689081, 2150032023, 4096667949, 1749200295, 3328846651, 309677260, 2016342300, 1779581495, 3079819751, 111262694, 1274766160, 443224088, 298511866, 1025883608, 3806446537, 1145181785, 168956806, 3641502830, 3584813610, 1689216846, 3666258015, 3200248200, 1692713982, 2646376535, 4042768518, 1618508792, 1610833997, 3523052358, 4130873264, 2001055236, 3610705100, 2202168115, 4028541809, 2961195399, 1006657119, 2006996926, 3186142756, 1430667929, 3210227297, 1314452623, 4074634658, 4101304120, 2273951170, 1399257539, 3367210612, 3027628629, 1190975929, 2062231137, 2333990788, 2221543033, 2438960610, 1181637006, 548689776, 2362791313, 3372408396, 3104550113, 3145860560, 296247880, 1970579870, 3078560182, 3769228297, 1714227617, 3291629107, 3898220290, 166772364, 1251581989, 493813264, 448347421, 195405023, 2709975567, 677966185, 3703036547, 1463355134, 2715995803, 1338867538, 1343315457, 2802222074, 2684532164, 233230375, 2599980071, 2000651841, 3277868038, 1638401717, 4028070440, 3237316320, 6314154, 819756386, 300326615, 590932579, 1405279636, 3267499572, 3150704214, 2428286686, 3959192993, 3461946742, 1862657033, 1266418056, 963775037, 2089974820, 2263052895, 1917689273, 448879540, 3550394620, 3981727096, 150775221, 3627908307, 1303187396, 508620638, 2975983352, 2726630617, 1817252668, 1876281319, 1457606340, 908771278, 3720792119, 3617206836, 2455994898, 1729034894, 1080033504 ], [ 976866871, 3556439503, 2881648439, 1522871579, 1555064734, 1336096578, 3548522304, 2579274686, 3574697629, 3205460757, 3593280638, 3338716283, 3079412587, 564236357, 2993598910, 1781952180, 1464380207, 3163844217, 3332601554, 1699332808, 1393555694, 1183702653, 3581086237, 1288719814, 691649499, 2847557200, 2895455976, 3193889540, 2717570544, 1781354906, 1676643554, 2592534050, 3230253752, 1126444790, 2770207658, 2633158820, 2210423226, 2615765581, 2414155088, 3127139286, 673620729, 2805611233, 1269405062, 4015350505, 3341807571, 4149409754, 1057255273, 2012875353, 2162469141, 2276492801, 2601117357, 993977747, 3918593370, 2654263191, 753973209, 36408145, 2530585658, 25011837, 3520020182, 2088578344, 530523599, 2918365339, 1524020338, 1518925132, 3760827505, 3759777254, 1202760957, 3985898139, 3906192525, 674977740, 4174734889, 2031300136, 2019492241, 3983892565, 4153806404, 3822280332, 352677332, 2297720250, 60907813, 90501309, 3286998549, 1016092578, 2535922412, 2839152426, 457141659, 509813237, 4120667899, 652014361, 1966332200, 2975202805, 55981186, 2327461051, 676427537, 3255491064, 2882294119, 3433927263, 1307055953, 942726286, 933058658, 2468411793, 3933900994, 4215176142, 1361170020, 2001714738, 2830558078, 3274259782, 1222529897, 1679025792, 2729314320, 3714953764, 1770335741, 151462246, 3013232138, 1682292957, 1483529935, 471910574, 1539241949, 458788160, 3436315007, 1807016891, 3718408830, 978976581, 1043663428, 3165965781, 1927990952, 4200891579, 2372276910, 3208408903, 3533431907, 1412390302, 2931980059, 4132332400, 1947078029, 3881505623, 4168226417, 2941484381, 1077988104, 1320477388, 886195818, 18198404, 3786409e3, 2509781533, 112762804, 3463356488, 1866414978, 891333506, 18488651, 661792760, 1628790961, 3885187036, 3141171499, 876946877, 2693282273, 1372485963, 791857591, 2686433993, 3759982718, 3167212022, 3472953795, 2716379847, 445679433, 3561995674, 3504004811, 3574258232, 54117162, 3331405415, 2381918588, 3769707343, 4154350007, 1140177722, 4074052095, 668550556, 3214352940, 367459370, 261225585, 2610173221, 4209349473, 3468074219, 3265815641, 314222801, 3066103646, 3808782860, 282218597, 3406013506, 3773591054, 379116347, 1285071038, 846784868, 2669647154, 3771962079, 3550491691, 2305946142, 453669953, 1268987020, 3317592352, 3279303384, 3744833421, 2610507566, 3859509063, 266596637, 3847019092, 517658769, 3462560207, 3443424879, 370717030, 4247526661, 2224018117, 4143653529, 4112773975, 2788324899, 2477274417, 1456262402, 2901442914, 1517677493, 1846949527, 2295493580, 3734397586, 2176403920, 1280348187, 1908823572, 3871786941, 846861322, 1172426758, 3287448474, 3383383037, 1655181056, 3139813346, 901632758, 1897031941, 2986607138, 3066810236, 3447102507, 1393639104, 373351379, 950779232, 625454576, 3124240540, 4148612726, 2007998917, 544563296, 2244738638, 2330496472, 2058025392, 1291430526, 424198748, 50039436, 29584100, 3605783033, 2429876329, 2791104160, 1057563949, 3255363231, 3075367218, 3463963227, 1469046755, 985887462 ] ];
        var BLOWFISH_CTX = {
          pbox: [],
          sbox: []
        };
        function F(ctx, x) {
          let a = x >> 24 & 255;
          let b = x >> 16 & 255;
          let c = x >> 8 & 255;
          let d = 255 & x;
          let y = ctx.sbox[0][a] + ctx.sbox[1][b];
          y ^= ctx.sbox[2][c];
          y += ctx.sbox[3][d];
          return y;
        }
        function BlowFish_Encrypt(ctx, left, right) {
          let Xl = left;
          let Xr = right;
          let temp;
          for (let i = 0; i < N; ++i) {
            Xl ^= ctx.pbox[i];
            Xr = F(ctx, Xl) ^ Xr;
            temp = Xl;
            Xl = Xr;
            Xr = temp;
          }
          temp = Xl;
          Xl = Xr;
          Xr = temp;
          Xr ^= ctx.pbox[N];
          Xl ^= ctx.pbox[N + 1];
          return {
            left: Xl,
            right: Xr
          };
        }
        function BlowFish_Decrypt(ctx, left, right) {
          let Xl = left;
          let Xr = right;
          let temp;
          for (let i = N + 1; i > 1; --i) {
            Xl ^= ctx.pbox[i];
            Xr = F(ctx, Xl) ^ Xr;
            temp = Xl;
            Xl = Xr;
            Xr = temp;
          }
          temp = Xl;
          Xl = Xr;
          Xr = temp;
          Xr ^= ctx.pbox[1];
          Xl ^= ctx.pbox[0];
          return {
            left: Xl,
            right: Xr
          };
        }
        function BlowFishInit(ctx, key, keysize) {
          for (let Row = 0; Row < 4; Row++) {
            ctx.sbox[Row] = [];
            for (let Col = 0; Col < 256; Col++) ctx.sbox[Row][Col] = ORIG_S[Row][Col];
          }
          let keyIndex = 0;
          for (let index = 0; index < N + 2; index++) {
            ctx.pbox[index] = ORIG_P[index] ^ key[keyIndex];
            keyIndex++;
            keyIndex >= keysize && (keyIndex = 0);
          }
          let Data1 = 0;
          let Data2 = 0;
          let res = 0;
          for (let i = 0; i < N + 2; i += 2) {
            res = BlowFish_Encrypt(ctx, Data1, Data2);
            Data1 = res.left;
            Data2 = res.right;
            ctx.pbox[i] = Data1;
            ctx.pbox[i + 1] = Data2;
          }
          for (let i = 0; i < 4; i++) for (let j = 0; j < 256; j += 2) {
            res = BlowFish_Encrypt(ctx, Data1, Data2);
            Data1 = res.left;
            Data2 = res.right;
            ctx.sbox[i][j] = Data1;
            ctx.sbox[i][j + 1] = Data2;
          }
          return true;
        }
        var Blowfish = C_algo.Blowfish = BlockCipher.extend({
          _doReset: function() {
            if (this._keyPriorReset === this._key) return;
            var key = this._keyPriorReset = this._key;
            var keyWords = key.words;
            var keySize = key.sigBytes / 4;
            BlowFishInit(BLOWFISH_CTX, keyWords, keySize);
          },
          encryptBlock: function(M, offset) {
            var res = BlowFish_Encrypt(BLOWFISH_CTX, M[offset], M[offset + 1]);
            M[offset] = res.left;
            M[offset + 1] = res.right;
          },
          decryptBlock: function(M, offset) {
            var res = BlowFish_Decrypt(BLOWFISH_CTX, M[offset], M[offset + 1]);
            M[offset] = res.left;
            M[offset + 1] = res.right;
          },
          blockSize: 2,
          keySize: 4,
          ivSize: 2
        });
        C.Blowfish = BlockCipher._createHelper(Blowfish);
      })();
      return CryptoJS.Blowfish;
    });
  }, {
    "./cipher-core": 4,
    "./core": 5,
    "./enc-base64": 6,
    "./evpkdf": 9,
    "./md5": 14
  } ],
  4: [ function(require, module, exports) {
    (function(root, factory, undef) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core"), require("./evpkdf")) : "function" === typeof define && define.amd ? define([ "./core", "./evpkdf" ], factory) : factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      CryptoJS.lib.Cipher || function(undefined) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var WordArray = C_lib.WordArray;
        var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
        var C_enc = C.enc;
        var Utf8 = C_enc.Utf8;
        var Base64 = C_enc.Base64;
        var C_algo = C.algo;
        var EvpKDF = C_algo.EvpKDF;
        var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
          cfg: Base.extend(),
          createEncryptor: function(key, cfg) {
            return this.create(this._ENC_XFORM_MODE, key, cfg);
          },
          createDecryptor: function(key, cfg) {
            return this.create(this._DEC_XFORM_MODE, key, cfg);
          },
          init: function(xformMode, key, cfg) {
            this.cfg = this.cfg.extend(cfg);
            this._xformMode = xformMode;
            this._key = key;
            this.reset();
          },
          reset: function() {
            BufferedBlockAlgorithm.reset.call(this);
            this._doReset();
          },
          process: function(dataUpdate) {
            this._append(dataUpdate);
            return this._process();
          },
          finalize: function(dataUpdate) {
            dataUpdate && this._append(dataUpdate);
            var finalProcessedData = this._doFinalize();
            return finalProcessedData;
          },
          keySize: 4,
          ivSize: 4,
          _ENC_XFORM_MODE: 1,
          _DEC_XFORM_MODE: 2,
          _createHelper: function() {
            function selectCipherStrategy(key) {
              return "string" == typeof key ? PasswordBasedCipher : SerializableCipher;
            }
            return function(cipher) {
              return {
                encrypt: function(message, key, cfg) {
                  return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
                },
                decrypt: function(ciphertext, key, cfg) {
                  return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
                }
              };
            };
          }()
        });
        var StreamCipher = C_lib.StreamCipher = Cipher.extend({
          _doFinalize: function() {
            var finalProcessedBlocks = this._process(true);
            return finalProcessedBlocks;
          },
          blockSize: 1
        });
        var C_mode = C.mode = {};
        var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
          createEncryptor: function(cipher, iv) {
            return this.Encryptor.create(cipher, iv);
          },
          createDecryptor: function(cipher, iv) {
            return this.Decryptor.create(cipher, iv);
          },
          init: function(cipher, iv) {
            this._cipher = cipher;
            this._iv = iv;
          }
        });
        var CBC = C_mode.CBC = function() {
          var CBC = BlockCipherMode.extend();
          CBC.Encryptor = CBC.extend({
            processBlock: function(words, offset) {
              var cipher = this._cipher;
              var blockSize = cipher.blockSize;
              xorBlock.call(this, words, offset, blockSize);
              cipher.encryptBlock(words, offset);
              this._prevBlock = words.slice(offset, offset + blockSize);
            }
          });
          CBC.Decryptor = CBC.extend({
            processBlock: function(words, offset) {
              var cipher = this._cipher;
              var blockSize = cipher.blockSize;
              var thisBlock = words.slice(offset, offset + blockSize);
              cipher.decryptBlock(words, offset);
              xorBlock.call(this, words, offset, blockSize);
              this._prevBlock = thisBlock;
            }
          });
          function xorBlock(words, offset, blockSize) {
            var block;
            var iv = this._iv;
            if (iv) {
              block = iv;
              this._iv = undefined;
            } else block = this._prevBlock;
            for (var i = 0; i < blockSize; i++) words[offset + i] ^= block[i];
          }
          return CBC;
        }();
        var C_pad = C.pad = {};
        var Pkcs7 = C_pad.Pkcs7 = {
          pad: function(data, blockSize) {
            var blockSizeBytes = 4 * blockSize;
            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
            var paddingWord = nPaddingBytes << 24 | nPaddingBytes << 16 | nPaddingBytes << 8 | nPaddingBytes;
            var paddingWords = [];
            for (var i = 0; i < nPaddingBytes; i += 4) paddingWords.push(paddingWord);
            var padding = WordArray.create(paddingWords, nPaddingBytes);
            data.concat(padding);
          },
          unpad: function(data) {
            var nPaddingBytes = 255 & data.words[data.sigBytes - 1 >>> 2];
            data.sigBytes -= nPaddingBytes;
          }
        };
        var BlockCipher = C_lib.BlockCipher = Cipher.extend({
          cfg: Cipher.cfg.extend({
            mode: CBC,
            padding: Pkcs7
          }),
          reset: function() {
            var modeCreator;
            Cipher.reset.call(this);
            var cfg = this.cfg;
            var iv = cfg.iv;
            var mode = cfg.mode;
            if (this._xformMode == this._ENC_XFORM_MODE) modeCreator = mode.createEncryptor; else {
              modeCreator = mode.createDecryptor;
              this._minBufferSize = 1;
            }
            if (this._mode && this._mode.__creator == modeCreator) this._mode.init(this, iv && iv.words); else {
              this._mode = modeCreator.call(mode, this, iv && iv.words);
              this._mode.__creator = modeCreator;
            }
          },
          _doProcessBlock: function(words, offset) {
            this._mode.processBlock(words, offset);
          },
          _doFinalize: function() {
            var finalProcessedBlocks;
            var padding = this.cfg.padding;
            if (this._xformMode == this._ENC_XFORM_MODE) {
              padding.pad(this._data, this.blockSize);
              finalProcessedBlocks = this._process(true);
            } else {
              finalProcessedBlocks = this._process(true);
              padding.unpad(finalProcessedBlocks);
            }
            return finalProcessedBlocks;
          },
          blockSize: 4
        });
        var CipherParams = C_lib.CipherParams = Base.extend({
          init: function(cipherParams) {
            this.mixIn(cipherParams);
          },
          toString: function(formatter) {
            return (formatter || this.formatter).stringify(this);
          }
        });
        var C_format = C.format = {};
        var OpenSSLFormatter = C_format.OpenSSL = {
          stringify: function(cipherParams) {
            var wordArray;
            var ciphertext = cipherParams.ciphertext;
            var salt = cipherParams.salt;
            wordArray = salt ? WordArray.create([ 1398893684, 1701076831 ]).concat(salt).concat(ciphertext) : ciphertext;
            return wordArray.toString(Base64);
          },
          parse: function(openSSLStr) {
            var salt;
            var ciphertext = Base64.parse(openSSLStr);
            var ciphertextWords = ciphertext.words;
            if (1398893684 == ciphertextWords[0] && 1701076831 == ciphertextWords[1]) {
              salt = WordArray.create(ciphertextWords.slice(2, 4));
              ciphertextWords.splice(0, 4);
              ciphertext.sigBytes -= 16;
            }
            return CipherParams.create({
              ciphertext: ciphertext,
              salt: salt
            });
          }
        };
        var SerializableCipher = C_lib.SerializableCipher = Base.extend({
          cfg: Base.extend({
            format: OpenSSLFormatter
          }),
          encrypt: function(cipher, message, key, cfg) {
            cfg = this.cfg.extend(cfg);
            var encryptor = cipher.createEncryptor(key, cfg);
            var ciphertext = encryptor.finalize(message);
            var cipherCfg = encryptor.cfg;
            return CipherParams.create({
              ciphertext: ciphertext,
              key: key,
              iv: cipherCfg.iv,
              algorithm: cipher,
              mode: cipherCfg.mode,
              padding: cipherCfg.padding,
              blockSize: cipher.blockSize,
              formatter: cfg.format
            });
          },
          decrypt: function(cipher, ciphertext, key, cfg) {
            cfg = this.cfg.extend(cfg);
            ciphertext = this._parse(ciphertext, cfg.format);
            var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);
            return plaintext;
          },
          _parse: function(ciphertext, format) {
            return "string" == typeof ciphertext ? format.parse(ciphertext, this) : ciphertext;
          }
        });
        var C_kdf = C.kdf = {};
        var OpenSSLKdf = C_kdf.OpenSSL = {
          execute: function(password, keySize, ivSize, salt, hasher) {
            salt || (salt = WordArray.random(8));
            if (hasher) var key = EvpKDF.create({
              keySize: keySize + ivSize,
              hasher: hasher
            }).compute(password, salt); else var key = EvpKDF.create({
              keySize: keySize + ivSize
            }).compute(password, salt);
            var iv = WordArray.create(key.words.slice(keySize), 4 * ivSize);
            key.sigBytes = 4 * keySize;
            return CipherParams.create({
              key: key,
              iv: iv,
              salt: salt
            });
          }
        };
        var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
          cfg: SerializableCipher.cfg.extend({
            kdf: OpenSSLKdf
          }),
          encrypt: function(cipher, message, password, cfg) {
            cfg = this.cfg.extend(cfg);
            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, cfg.salt, cfg.hasher);
            cfg.iv = derivedParams.iv;
            var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);
            ciphertext.mixIn(derivedParams);
            return ciphertext;
          },
          decrypt: function(cipher, ciphertext, password, cfg) {
            cfg = this.cfg.extend(cfg);
            ciphertext = this._parse(ciphertext, cfg.format);
            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt, cfg.hasher);
            cfg.iv = derivedParams.iv;
            var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);
            return plaintext;
          }
        });
      }();
    });
  }, {
    "./core": 5,
    "./evpkdf": 9
  } ],
  5: [ function(require, module, exports) {
    (function(global) {
      (function(root, factory) {
        "object" === typeof exports ? module.exports = exports = factory() : "function" === typeof define && define.amd ? define([], factory) : root.CryptoJS = factory();
      })(this, function() {
        var CryptoJS = CryptoJS || function(Math, undefined) {
          var crypto;
          "undefined" !== typeof window && window.crypto && (crypto = window.crypto);
          "undefined" !== typeof self && self.crypto && (crypto = self.crypto);
          "undefined" !== typeof globalThis && globalThis.crypto && (crypto = globalThis.crypto);
          !crypto && "undefined" !== typeof window && window.msCrypto && (crypto = window.msCrypto);
          !crypto && "undefined" !== typeof global && global.crypto && (crypto = global.crypto);
          if (!crypto && "function" === typeof require) try {
            crypto = require("crypto");
          } catch (err) {}
          var cryptoSecureRandomInt = function() {
            if (crypto) {
              if ("function" === typeof crypto.getRandomValues) try {
                return crypto.getRandomValues(new Uint32Array(1))[0];
              } catch (err) {}
              if ("function" === typeof crypto.randomBytes) try {
                return crypto.randomBytes(4).readInt32LE();
              } catch (err) {}
            }
            throw new Error("Native crypto module could not be used to get secure random number.");
          };
          var create = Object.create || function() {
            function F() {}
            return function(obj) {
              var subtype;
              F.prototype = obj;
              subtype = new F();
              F.prototype = null;
              return subtype;
            };
          }();
          var C = {};
          var C_lib = C.lib = {};
          var Base = C_lib.Base = function() {
            return {
              extend: function(overrides) {
                var subtype = create(this);
                overrides && subtype.mixIn(overrides);
                subtype.hasOwnProperty("init") && this.init !== subtype.init || (subtype.init = function() {
                  subtype.$super.init.apply(this, arguments);
                });
                subtype.init.prototype = subtype;
                subtype.$super = this;
                return subtype;
              },
              create: function() {
                var instance = this.extend();
                instance.init.apply(instance, arguments);
                return instance;
              },
              init: function() {},
              mixIn: function(properties) {
                for (var propertyName in properties) properties.hasOwnProperty(propertyName) && (this[propertyName] = properties[propertyName]);
                properties.hasOwnProperty("toString") && (this.toString = properties.toString);
              },
              clone: function() {
                return this.init.prototype.extend(this);
              }
            };
          }();
          var WordArray = C_lib.WordArray = Base.extend({
            init: function(words, sigBytes) {
              words = this.words = words || [];
              this.sigBytes = sigBytes != undefined ? sigBytes : 4 * words.length;
            },
            toString: function(encoder) {
              return (encoder || Hex).stringify(this);
            },
            concat: function(wordArray) {
              var thisWords = this.words;
              var thatWords = wordArray.words;
              var thisSigBytes = this.sigBytes;
              var thatSigBytes = wordArray.sigBytes;
              this.clamp();
              if (thisSigBytes % 4) for (var i = 0; i < thatSigBytes; i++) {
                var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
              } else for (var j = 0; j < thatSigBytes; j += 4) thisWords[thisSigBytes + j >>> 2] = thatWords[j >>> 2];
              this.sigBytes += thatSigBytes;
              return this;
            },
            clamp: function() {
              var words = this.words;
              var sigBytes = this.sigBytes;
              words[sigBytes >>> 2] &= 4294967295 << 32 - sigBytes % 4 * 8;
              words.length = Math.ceil(sigBytes / 4);
            },
            clone: function() {
              var clone = Base.clone.call(this);
              clone.words = this.words.slice(0);
              return clone;
            },
            random: function(nBytes) {
              var words = [];
              for (var i = 0; i < nBytes; i += 4) words.push(cryptoSecureRandomInt());
              return new WordArray.init(words, nBytes);
            }
          });
          var C_enc = C.enc = {};
          var Hex = C_enc.Hex = {
            stringify: function(wordArray) {
              var words = wordArray.words;
              var sigBytes = wordArray.sigBytes;
              var hexChars = [];
              for (var i = 0; i < sigBytes; i++) {
                var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                hexChars.push((bite >>> 4).toString(16));
                hexChars.push((15 & bite).toString(16));
              }
              return hexChars.join("");
            },
            parse: function(hexStr) {
              var hexStrLength = hexStr.length;
              var words = [];
              for (var i = 0; i < hexStrLength; i += 2) words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
              return new WordArray.init(words, hexStrLength / 2);
            }
          };
          var Latin1 = C_enc.Latin1 = {
            stringify: function(wordArray) {
              var words = wordArray.words;
              var sigBytes = wordArray.sigBytes;
              var latin1Chars = [];
              for (var i = 0; i < sigBytes; i++) {
                var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                latin1Chars.push(String.fromCharCode(bite));
              }
              return latin1Chars.join("");
            },
            parse: function(latin1Str) {
              var latin1StrLength = latin1Str.length;
              var words = [];
              for (var i = 0; i < latin1StrLength; i++) words[i >>> 2] |= (255 & latin1Str.charCodeAt(i)) << 24 - i % 4 * 8;
              return new WordArray.init(words, latin1StrLength);
            }
          };
          var Utf8 = C_enc.Utf8 = {
            stringify: function(wordArray) {
              try {
                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
              } catch (e) {
                throw new Error("Malformed UTF-8 data");
              }
            },
            parse: function(utf8Str) {
              return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
            }
          };
          var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
            reset: function() {
              this._data = new WordArray.init();
              this._nDataBytes = 0;
            },
            _append: function(data) {
              "string" == typeof data && (data = Utf8.parse(data));
              this._data.concat(data);
              this._nDataBytes += data.sigBytes;
            },
            _process: function(doFlush) {
              var processedWords;
              var data = this._data;
              var dataWords = data.words;
              var dataSigBytes = data.sigBytes;
              var blockSize = this.blockSize;
              var blockSizeBytes = 4 * blockSize;
              var nBlocksReady = dataSigBytes / blockSizeBytes;
              nBlocksReady = doFlush ? Math.ceil(nBlocksReady) : Math.max((0 | nBlocksReady) - this._minBufferSize, 0);
              var nWordsReady = nBlocksReady * blockSize;
              var nBytesReady = Math.min(4 * nWordsReady, dataSigBytes);
              if (nWordsReady) {
                for (var offset = 0; offset < nWordsReady; offset += blockSize) this._doProcessBlock(dataWords, offset);
                processedWords = dataWords.splice(0, nWordsReady);
                data.sigBytes -= nBytesReady;
              }
              return new WordArray.init(processedWords, nBytesReady);
            },
            clone: function() {
              var clone = Base.clone.call(this);
              clone._data = this._data.clone();
              return clone;
            },
            _minBufferSize: 0
          });
          var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
            cfg: Base.extend(),
            init: function(cfg) {
              this.cfg = this.cfg.extend(cfg);
              this.reset();
            },
            reset: function() {
              BufferedBlockAlgorithm.reset.call(this);
              this._doReset();
            },
            update: function(messageUpdate) {
              this._append(messageUpdate);
              this._process();
              return this;
            },
            finalize: function(messageUpdate) {
              messageUpdate && this._append(messageUpdate);
              var hash = this._doFinalize();
              return hash;
            },
            blockSize: 16,
            _createHelper: function(hasher) {
              return function(message, cfg) {
                return new hasher.init(cfg).finalize(message);
              };
            },
            _createHmacHelper: function(hasher) {
              return function(message, key) {
                return new C_algo.HMAC.init(hasher, key).finalize(message);
              };
            }
          });
          var C_algo = C.algo = {};
          return C;
        }(Math);
        return CryptoJS;
      });
    }).call(this, "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
  }, {
    crypto: 1
  } ],
  6: [ function(require, module, exports) {
    (function(root, factory) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core")) : "function" === typeof define && define.amd ? define([ "./core" ], factory) : factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_enc = C.enc;
        var Base64 = C_enc.Base64 = {
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var map = this._map;
            wordArray.clamp();
            var base64Chars = [];
            for (var i = 0; i < sigBytes; i += 3) {
              var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
              var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
              var triplet = byte1 << 16 | byte2 << 8 | byte3;
              for (var j = 0; j < 4 && i + .75 * j < sigBytes; j++) base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 63));
            }
            var paddingChar = map.charAt(64);
            if (paddingChar) while (base64Chars.length % 4) base64Chars.push(paddingChar);
            return base64Chars.join("");
          },
          parse: function(base64Str) {
            var base64StrLength = base64Str.length;
            var map = this._map;
            var reverseMap = this._reverseMap;
            if (!reverseMap) {
              reverseMap = this._reverseMap = [];
              for (var j = 0; j < map.length; j++) reverseMap[map.charCodeAt(j)] = j;
            }
            var paddingChar = map.charAt(64);
            if (paddingChar) {
              var paddingIndex = base64Str.indexOf(paddingChar);
              -1 !== paddingIndex && (base64StrLength = paddingIndex);
            }
            return parseLoop(base64Str, base64StrLength, reverseMap);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function parseLoop(base64Str, base64StrLength, reverseMap) {
          var words = [];
          var nBytes = 0;
          for (var i = 0; i < base64StrLength; i++) if (i % 4) {
            var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
            var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
            var bitsCombined = bits1 | bits2;
            words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
            nBytes++;
          }
          return WordArray.create(words, nBytes);
        }
      })();
      return CryptoJS.enc.Base64;
    });
  }, {
    "./core": 5
  } ],
  7: [ function(require, module, exports) {
    (function(root, factory) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core")) : "function" === typeof define && define.amd ? define([ "./core" ], factory) : factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_enc = C.enc;
        var Base64url = C_enc.Base64url = {
          stringify: function(wordArray, urlSafe) {
            void 0 === urlSafe && (urlSafe = true);
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var map = urlSafe ? this._safe_map : this._map;
            wordArray.clamp();
            var base64Chars = [];
            for (var i = 0; i < sigBytes; i += 3) {
              var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
              var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
              var triplet = byte1 << 16 | byte2 << 8 | byte3;
              for (var j = 0; j < 4 && i + .75 * j < sigBytes; j++) base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 63));
            }
            var paddingChar = map.charAt(64);
            if (paddingChar) while (base64Chars.length % 4) base64Chars.push(paddingChar);
            return base64Chars.join("");
          },
          parse: function(base64Str, urlSafe) {
            void 0 === urlSafe && (urlSafe = true);
            var base64StrLength = base64Str.length;
            var map = urlSafe ? this._safe_map : this._map;
            var reverseMap = this._reverseMap;
            if (!reverseMap) {
              reverseMap = this._reverseMap = [];
              for (var j = 0; j < map.length; j++) reverseMap[map.charCodeAt(j)] = j;
            }
            var paddingChar = map.charAt(64);
            if (paddingChar) {
              var paddingIndex = base64Str.indexOf(paddingChar);
              -1 !== paddingIndex && (base64StrLength = paddingIndex);
            }
            return parseLoop(base64Str, base64StrLength, reverseMap);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function parseLoop(base64Str, base64StrLength, reverseMap) {
          var words = [];
          var nBytes = 0;
          for (var i = 0; i < base64StrLength; i++) if (i % 4) {
            var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
            var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
            var bitsCombined = bits1 | bits2;
            words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
            nBytes++;
          }
          return WordArray.create(words, nBytes);
        }
      })();
      return CryptoJS.enc.Base64url;
    });
  }, {
    "./core": 5
  } ],
  8: [ function(require, module, exports) {
    (function(root, factory) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core")) : "function" === typeof define && define.amd ? define([ "./core" ], factory) : factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_enc = C.enc;
        var Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var utf16Chars = [];
            for (var i = 0; i < sigBytes; i += 2) {
              var codePoint = words[i >>> 2] >>> 16 - i % 4 * 8 & 65535;
              utf16Chars.push(String.fromCharCode(codePoint));
            }
            return utf16Chars.join("");
          },
          parse: function(utf16Str) {
            var utf16StrLength = utf16Str.length;
            var words = [];
            for (var i = 0; i < utf16StrLength; i++) words[i >>> 1] |= utf16Str.charCodeAt(i) << 16 - i % 2 * 16;
            return WordArray.create(words, 2 * utf16StrLength);
          }
        };
        C_enc.Utf16LE = {
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var utf16Chars = [];
            for (var i = 0; i < sigBytes; i += 2) {
              var codePoint = swapEndian(words[i >>> 2] >>> 16 - i % 4 * 8 & 65535);
              utf16Chars.push(String.fromCharCode(codePoint));
            }
            return utf16Chars.join("");
          },
          parse: function(utf16Str) {
            var utf16StrLength = utf16Str.length;
            var words = [];
            for (var i = 0; i < utf16StrLength; i++) words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << 16 - i % 2 * 16);
            return WordArray.create(words, 2 * utf16StrLength);
          }
        };
        function swapEndian(word) {
          return word << 8 & 4278255360 | word >>> 8 & 16711935;
        }
      })();
      return CryptoJS.enc.Utf16;
    });
  }, {
    "./core": 5
  } ],
  9: [ function(require, module, exports) {
    (function(root, factory, undef) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core"), require("./sha1"), require("./hmac")) : "function" === typeof define && define.amd ? define([ "./core", "./sha1", "./hmac" ], factory) : factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var WordArray = C_lib.WordArray;
        var C_algo = C.algo;
        var MD5 = C_algo.MD5;
        var EvpKDF = C_algo.EvpKDF = Base.extend({
          cfg: Base.extend({
            keySize: 4,
            hasher: MD5,
            iterations: 1
          }),
          init: function(cfg) {
            this.cfg = this.cfg.extend(cfg);
          },
          compute: function(password, salt) {
            var block;
            var cfg = this.cfg;
            var hasher = cfg.hasher.create();
            var derivedKey = WordArray.create();
            var derivedKeyWords = derivedKey.words;
            var keySize = cfg.keySize;
            var iterations = cfg.iterations;
            while (derivedKeyWords.length < keySize) {
              block && hasher.update(block);
              block = hasher.update(password).finalize(salt);
              hasher.reset();
              for (var i = 1; i < iterations; i++) {
                block = hasher.finalize(block);
                hasher.reset();
              }
              derivedKey.concat(block);
            }
            derivedKey.sigBytes = 4 * keySize;
            return derivedKey;
          }
        });
        C.EvpKDF = function(password, salt, cfg) {
          return EvpKDF.create(cfg).compute(password, salt);
        };
      })();
      return CryptoJS.EvpKDF;
    });
  }, {
    "./core": 5,
    "./hmac": 11,
    "./sha1": 30
  } ],
  10: [ function(require, module, exports) {
    (function(root, factory, undef) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core"), require("./cipher-core")) : "function" === typeof define && define.amd ? define([ "./core", "./cipher-core" ], factory) : factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      (function(undefined) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var CipherParams = C_lib.CipherParams;
        var C_enc = C.enc;
        var Hex = C_enc.Hex;
        var C_format = C.format;
        var HexFormatter = C_format.Hex = {
          stringify: function(cipherParams) {
            return cipherParams.ciphertext.toString(Hex);
          },
          parse: function(input) {
            var ciphertext = Hex.parse(input);
            return CipherParams.create({
              ciphertext: ciphertext
            });
          }
        };
      })();
      return CryptoJS.format.Hex;
    });
  }, {
    "./cipher-core": 4,
    "./core": 5
  } ],
  11: [ function(require, module, exports) {
    (function(root, factory) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core")) : "function" === typeof define && define.amd ? define([ "./core" ], factory) : factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var C_enc = C.enc;
        var Utf8 = C_enc.Utf8;
        var C_algo = C.algo;
        var HMAC = C_algo.HMAC = Base.extend({
          init: function(hasher, key) {
            hasher = this._hasher = new hasher.init();
            "string" == typeof key && (key = Utf8.parse(key));
            var hasherBlockSize = hasher.blockSize;
            var hasherBlockSizeBytes = 4 * hasherBlockSize;
            key.sigBytes > hasherBlockSizeBytes && (key = hasher.finalize(key));
            key.clamp();
            var oKey = this._oKey = key.clone();
            var iKey = this._iKey = key.clone();
            var oKeyWords = oKey.words;
            var iKeyWords = iKey.words;
            for (var i = 0; i < hasherBlockSize; i++) {
              oKeyWords[i] ^= 1549556828;
              iKeyWords[i] ^= 909522486;
            }
            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;
            this.reset();
          },
          reset: function() {
            var hasher = this._hasher;
            hasher.reset();
            hasher.update(this._iKey);
          },
          update: function(messageUpdate) {
            this._hasher.update(messageUpdate);
            return this;
          },
          finalize: function(messageUpdate) {
            var hasher = this._hasher;
            var innerHash = hasher.finalize(messageUpdate);
            hasher.reset();
            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));
            return hmac;
          }
        });
      })();
    });
  }, {
    "./core": 5
  } ],
  12: [ function(require, module, exports) {
    (function(root, factory, undef) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core"), require("./x64-core"), require("./lib-typedarrays"), require("./enc-utf16"), require("./enc-base64"), require("./enc-base64url"), require("./md5"), require("./sha1"), require("./sha256"), require("./sha224"), require("./sha512"), require("./sha384"), require("./sha3"), require("./ripemd160"), require("./hmac"), require("./pbkdf2"), require("./evpkdf"), require("./cipher-core"), require("./mode-cfb"), require("./mode-ctr"), require("./mode-ctr-gladman"), require("./mode-ofb"), require("./mode-ecb"), require("./pad-ansix923"), require("./pad-iso10126"), require("./pad-iso97971"), require("./pad-zeropadding"), require("./pad-nopadding"), require("./format-hex"), require("./aes"), require("./tripledes"), require("./rc4"), require("./rabbit"), require("./rabbit-legacy"), require("./blowfish")) : "function" === typeof define && define.amd ? define([ "./core", "./x64-core", "./lib-typedarrays", "./enc-utf16", "./enc-base64", "./enc-base64url", "./md5", "./sha1", "./sha256", "./sha224", "./sha512", "./sha384", "./sha3", "./ripemd160", "./hmac", "./pbkdf2", "./evpkdf", "./cipher-core", "./mode-cfb", "./mode-ctr", "./mode-ctr-gladman", "./mode-ofb", "./mode-ecb", "./pad-ansix923", "./pad-iso10126", "./pad-iso97971", "./pad-zeropadding", "./pad-nopadding", "./format-hex", "./aes", "./tripledes", "./rc4", "./rabbit", "./rabbit-legacy", "./blowfish" ], factory) : root.CryptoJS = factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      return CryptoJS;
    });
  }, {
    "./aes": 2,
    "./blowfish": 3,
    "./cipher-core": 4,
    "./core": 5,
    "./enc-base64": 6,
    "./enc-base64url": 7,
    "./enc-utf16": 8,
    "./evpkdf": 9,
    "./format-hex": 10,
    "./hmac": 11,
    "./lib-typedarrays": 13,
    "./md5": 14,
    "./mode-cfb": 15,
    "./mode-ctr": 17,
    "./mode-ctr-gladman": 16,
    "./mode-ecb": 18,
    "./mode-ofb": 19,
    "./pad-ansix923": 20,
    "./pad-iso10126": 21,
    "./pad-iso97971": 22,
    "./pad-nopadding": 23,
    "./pad-zeropadding": 24,
    "./pbkdf2": 25,
    "./rabbit": 27,
    "./rabbit-legacy": 26,
    "./rc4": 28,
    "./ripemd160": 29,
    "./sha1": 30,
    "./sha224": 31,
    "./sha256": 32,
    "./sha3": 33,
    "./sha384": 34,
    "./sha512": 35,
    "./tripledes": 36,
    "./x64-core": 37
  } ],
  13: [ function(require, module, exports) {
    (function(root, factory) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core")) : "function" === typeof define && define.amd ? define([ "./core" ], factory) : factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      (function() {
        if ("function" != typeof ArrayBuffer) return;
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var superInit = WordArray.init;
        var subInit = WordArray.init = function(typedArray) {
          typedArray instanceof ArrayBuffer && (typedArray = new Uint8Array(typedArray));
          (typedArray instanceof Int8Array || "undefined" !== typeof Uint8ClampedArray && typedArray instanceof Uint8ClampedArray || typedArray instanceof Int16Array || typedArray instanceof Uint16Array || typedArray instanceof Int32Array || typedArray instanceof Uint32Array || typedArray instanceof Float32Array || typedArray instanceof Float64Array) && (typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength));
          if (typedArray instanceof Uint8Array) {
            var typedArrayByteLength = typedArray.byteLength;
            var words = [];
            for (var i = 0; i < typedArrayByteLength; i++) words[i >>> 2] |= typedArray[i] << 24 - i % 4 * 8;
            superInit.call(this, words, typedArrayByteLength);
          } else superInit.apply(this, arguments);
        };
        subInit.prototype = WordArray;
      })();
      return CryptoJS.lib.WordArray;
    });
  }, {
    "./core": 5
  } ],
  14: [ function(require, module, exports) {
    (function(root, factory) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core")) : "function" === typeof define && define.amd ? define([ "./core" ], factory) : factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      (function(Math) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var T = [];
        (function() {
          for (var i = 0; i < 64; i++) T[i] = 4294967296 * Math.abs(Math.sin(i + 1)) | 0;
        })();
        var MD5 = C_algo.MD5 = Hasher.extend({
          _doReset: function() {
            this._hash = new WordArray.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
          },
          _doProcessBlock: function(M, offset) {
            for (var i = 0; i < 16; i++) {
              var offset_i = offset + i;
              var M_offset_i = M[offset_i];
              M[offset_i] = 16711935 & (M_offset_i << 8 | M_offset_i >>> 24) | 4278255360 & (M_offset_i << 24 | M_offset_i >>> 8);
            }
            var H = this._hash.words;
            var M_offset_0 = M[offset + 0];
            var M_offset_1 = M[offset + 1];
            var M_offset_2 = M[offset + 2];
            var M_offset_3 = M[offset + 3];
            var M_offset_4 = M[offset + 4];
            var M_offset_5 = M[offset + 5];
            var M_offset_6 = M[offset + 6];
            var M_offset_7 = M[offset + 7];
            var M_offset_8 = M[offset + 8];
            var M_offset_9 = M[offset + 9];
            var M_offset_10 = M[offset + 10];
            var M_offset_11 = M[offset + 11];
            var M_offset_12 = M[offset + 12];
            var M_offset_13 = M[offset + 13];
            var M_offset_14 = M[offset + 14];
            var M_offset_15 = M[offset + 15];
            var a = H[0];
            var b = H[1];
            var c = H[2];
            var d = H[3];
            a = FF(a, b, c, d, M_offset_0, 7, T[0]);
            d = FF(d, a, b, c, M_offset_1, 12, T[1]);
            c = FF(c, d, a, b, M_offset_2, 17, T[2]);
            b = FF(b, c, d, a, M_offset_3, 22, T[3]);
            a = FF(a, b, c, d, M_offset_4, 7, T[4]);
            d = FF(d, a, b, c, M_offset_5, 12, T[5]);
            c = FF(c, d, a, b, M_offset_6, 17, T[6]);
            b = FF(b, c, d, a, M_offset_7, 22, T[7]);
            a = FF(a, b, c, d, M_offset_8, 7, T[8]);
            d = FF(d, a, b, c, M_offset_9, 12, T[9]);
            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
            a = FF(a, b, c, d, M_offset_12, 7, T[12]);
            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
            b = FF(b, c, d, a, M_offset_15, 22, T[15]);
            a = GG(a, b, c, d, M_offset_1, 5, T[16]);
            d = GG(d, a, b, c, M_offset_6, 9, T[17]);
            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
            b = GG(b, c, d, a, M_offset_0, 20, T[19]);
            a = GG(a, b, c, d, M_offset_5, 5, T[20]);
            d = GG(d, a, b, c, M_offset_10, 9, T[21]);
            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
            b = GG(b, c, d, a, M_offset_4, 20, T[23]);
            a = GG(a, b, c, d, M_offset_9, 5, T[24]);
            d = GG(d, a, b, c, M_offset_14, 9, T[25]);
            c = GG(c, d, a, b, M_offset_3, 14, T[26]);
            b = GG(b, c, d, a, M_offset_8, 20, T[27]);
            a = GG(a, b, c, d, M_offset_13, 5, T[28]);
            d = GG(d, a, b, c, M_offset_2, 9, T[29]);
            c = GG(c, d, a, b, M_offset_7, 14, T[30]);
            b = GG(b, c, d, a, M_offset_12, 20, T[31]);
            a = HH(a, b, c, d, M_offset_5, 4, T[32]);
            d = HH(d, a, b, c, M_offset_8, 11, T[33]);
            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
            a = HH(a, b, c, d, M_offset_1, 4, T[36]);
            d = HH(d, a, b, c, M_offset_4, 11, T[37]);
            c = HH(c, d, a, b, M_offset_7, 16, T[38]);
            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
            a = HH(a, b, c, d, M_offset_13, 4, T[40]);
            d = HH(d, a, b, c, M_offset_0, 11, T[41]);
            c = HH(c, d, a, b, M_offset_3, 16, T[42]);
            b = HH(b, c, d, a, M_offset_6, 23, T[43]);
            a = HH(a, b, c, d, M_offset_9, 4, T[44]);
            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
            b = HH(b, c, d, a, M_offset_2, 23, T[47]);
            a = II(a, b, c, d, M_offset_0, 6, T[48]);
            d = II(d, a, b, c, M_offset_7, 10, T[49]);
            c = II(c, d, a, b, M_offset_14, 15, T[50]);
            b = II(b, c, d, a, M_offset_5, 21, T[51]);
            a = II(a, b, c, d, M_offset_12, 6, T[52]);
            d = II(d, a, b, c, M_offset_3, 10, T[53]);
            c = II(c, d, a, b, M_offset_10, 15, T[54]);
            b = II(b, c, d, a, M_offset_1, 21, T[55]);
            a = II(a, b, c, d, M_offset_8, 6, T[56]);
            d = II(d, a, b, c, M_offset_15, 10, T[57]);
            c = II(c, d, a, b, M_offset_6, 15, T[58]);
            b = II(b, c, d, a, M_offset_13, 21, T[59]);
            a = II(a, b, c, d, M_offset_4, 6, T[60]);
            d = II(d, a, b, c, M_offset_11, 10, T[61]);
            c = II(c, d, a, b, M_offset_2, 15, T[62]);
            b = II(b, c, d, a, M_offset_9, 21, T[63]);
            H[0] = H[0] + a | 0;
            H[1] = H[1] + b | 0;
            H[2] = H[2] + c | 0;
            H[3] = H[3] + d | 0;
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = 8 * this._nDataBytes;
            var nBitsLeft = 8 * data.sigBytes;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            var nBitsTotalH = Math.floor(nBitsTotal / 4294967296);
            var nBitsTotalL = nBitsTotal;
            dataWords[15 + (nBitsLeft + 64 >>> 9 << 4)] = 16711935 & (nBitsTotalH << 8 | nBitsTotalH >>> 24) | 4278255360 & (nBitsTotalH << 24 | nBitsTotalH >>> 8);
            dataWords[14 + (nBitsLeft + 64 >>> 9 << 4)] = 16711935 & (nBitsTotalL << 8 | nBitsTotalL >>> 24) | 4278255360 & (nBitsTotalL << 24 | nBitsTotalL >>> 8);
            data.sigBytes = 4 * (dataWords.length + 1);
            this._process();
            var hash = this._hash;
            var H = hash.words;
            for (var i = 0; i < 4; i++) {
              var H_i = H[i];
              H[i] = 16711935 & (H_i << 8 | H_i >>> 24) | 4278255360 & (H_i << 24 | H_i >>> 8);
            }
            return hash;
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });
        function FF(a, b, c, d, x, s, t) {
          var n = a + (b & c | ~b & d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        function GG(a, b, c, d, x, s, t) {
          var n = a + (b & d | c & ~d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        function HH(a, b, c, d, x, s, t) {
          var n = a + (b ^ c ^ d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        function II(a, b, c, d, x, s, t) {
          var n = a + (c ^ (b | ~d)) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        C.MD5 = Hasher._createHelper(MD5);
        C.HmacMD5 = Hasher._createHmacHelper(MD5);
      })(Math);
      return CryptoJS.MD5;
    });
  }, {
    "./core": 5
  } ],
  15: [ function(require, module, exports) {
    (function(root, factory, undef) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core"), require("./cipher-core")) : "function" === typeof define && define.amd ? define([ "./core", "./cipher-core" ], factory) : factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      CryptoJS.mode.CFB = function() {
        var CFB = CryptoJS.lib.BlockCipherMode.extend();
        CFB.Encryptor = CFB.extend({
          processBlock: function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);
            this._prevBlock = words.slice(offset, offset + blockSize);
          }
        });
        CFB.Decryptor = CFB.extend({
          processBlock: function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var thisBlock = words.slice(offset, offset + blockSize);
            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);
            this._prevBlock = thisBlock;
          }
        });
        function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
          var keystream;
          var iv = this._iv;
          if (iv) {
            keystream = iv.slice(0);
            this._iv = void 0;
          } else keystream = this._prevBlock;
          cipher.encryptBlock(keystream, 0);
          for (var i = 0; i < blockSize; i++) words[offset + i] ^= keystream[i];
        }
        return CFB;
      }();
      return CryptoJS.mode.CFB;
    });
  }, {
    "./cipher-core": 4,
    "./core": 5
  } ],
  16: [ function(require, module, exports) {
    (function(root, factory, undef) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core"), require("./cipher-core")) : "function" === typeof define && define.amd ? define([ "./core", "./cipher-core" ], factory) : factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      CryptoJS.mode.CTRGladman = function() {
        var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();
        function incWord(word) {
          if (255 === (word >> 24 & 255)) {
            var b1 = word >> 16 & 255;
            var b2 = word >> 8 & 255;
            var b3 = 255 & word;
            if (255 === b1) {
              b1 = 0;
              if (255 === b2) {
                b2 = 0;
                255 === b3 ? b3 = 0 : ++b3;
              } else ++b2;
            } else ++b1;
            word = 0;
            word += b1 << 16;
            word += b2 << 8;
            word += b3;
          } else word += 1 << 24;
          return word;
        }
        function incCounter(counter) {
          0 === (counter[0] = incWord(counter[0])) && (counter[1] = incWord(counter[1]));
          return counter;
        }
        var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
          processBlock: function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var iv = this._iv;
            var counter = this._counter;
            if (iv) {
              counter = this._counter = iv.slice(0);
              this._iv = void 0;
            }
            incCounter(counter);
            var keystream = counter.slice(0);
            cipher.encryptBlock(keystream, 0);
            for (var i = 0; i < blockSize; i++) words[offset + i] ^= keystream[i];
          }
        });
        CTRGladman.Decryptor = Encryptor;
        return CTRGladman;
      }();
      return CryptoJS.mode.CTRGladman;
    });
  }, {
    "./cipher-core": 4,
    "./core": 5
  } ],
  17: [ function(require, module, exports) {
    (function(root, factory, undef) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core"), require("./cipher-core")) : "function" === typeof define && define.amd ? define([ "./core", "./cipher-core" ], factory) : factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      CryptoJS.mode.CTR = function() {
        var CTR = CryptoJS.lib.BlockCipherMode.extend();
        var Encryptor = CTR.Encryptor = CTR.extend({
          processBlock: function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var iv = this._iv;
            var counter = this._counter;
            if (iv) {
              counter = this._counter = iv.slice(0);
              this._iv = void 0;
            }
            var keystream = counter.slice(0);
            cipher.encryptBlock(keystream, 0);
            counter[blockSize - 1] = counter[blockSize - 1] + 1 | 0;
            for (var i = 0; i < blockSize; i++) words[offset + i] ^= keystream[i];
          }
        });
        CTR.Decryptor = Encryptor;
        return CTR;
      }();
      return CryptoJS.mode.CTR;
    });
  }, {
    "./cipher-core": 4,
    "./core": 5
  } ],
  18: [ function(require, module, exports) {
    (function(root, factory, undef) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core"), require("./cipher-core")) : "function" === typeof define && define.amd ? define([ "./core", "./cipher-core" ], factory) : factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      CryptoJS.mode.ECB = function() {
        var ECB = CryptoJS.lib.BlockCipherMode.extend();
        ECB.Encryptor = ECB.extend({
          processBlock: function(words, offset) {
            this._cipher.encryptBlock(words, offset);
          }
        });
        ECB.Decryptor = ECB.extend({
          processBlock: function(words, offset) {
            this._cipher.decryptBlock(words, offset);
          }
        });
        return ECB;
      }();
      return CryptoJS.mode.ECB;
    });
  }, {
    "./cipher-core": 4,
    "./core": 5
  } ],
  19: [ function(require, module, exports) {
    (function(root, factory, undef) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core"), require("./cipher-core")) : "function" === typeof define && define.amd ? define([ "./core", "./cipher-core" ], factory) : factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      CryptoJS.mode.OFB = function() {
        var OFB = CryptoJS.lib.BlockCipherMode.extend();
        var Encryptor = OFB.Encryptor = OFB.extend({
          processBlock: function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var iv = this._iv;
            var keystream = this._keystream;
            if (iv) {
              keystream = this._keystream = iv.slice(0);
              this._iv = void 0;
            }
            cipher.encryptBlock(keystream, 0);
            for (var i = 0; i < blockSize; i++) words[offset + i] ^= keystream[i];
          }
        });
        OFB.Decryptor = Encryptor;
        return OFB;
      }();
      return CryptoJS.mode.OFB;
    });
  }, {
    "./cipher-core": 4,
    "./core": 5
  } ],
  20: [ function(require, module, exports) {
    (function(root, factory, undef) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core"), require("./cipher-core")) : "function" === typeof define && define.amd ? define([ "./core", "./cipher-core" ], factory) : factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      CryptoJS.pad.AnsiX923 = {
        pad: function(data, blockSize) {
          var dataSigBytes = data.sigBytes;
          var blockSizeBytes = 4 * blockSize;
          var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;
          var lastBytePos = dataSigBytes + nPaddingBytes - 1;
          data.clamp();
          data.words[lastBytePos >>> 2] |= nPaddingBytes << 24 - lastBytePos % 4 * 8;
          data.sigBytes += nPaddingBytes;
        },
        unpad: function(data) {
          var nPaddingBytes = 255 & data.words[data.sigBytes - 1 >>> 2];
          data.sigBytes -= nPaddingBytes;
        }
      };
      return CryptoJS.pad.Ansix923;
    });
  }, {
    "./cipher-core": 4,
    "./core": 5
  } ],
  21: [ function(require, module, exports) {
    (function(root, factory, undef) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core"), require("./cipher-core")) : "function" === typeof define && define.amd ? define([ "./core", "./cipher-core" ], factory) : factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      CryptoJS.pad.Iso10126 = {
        pad: function(data, blockSize) {
          var blockSizeBytes = 4 * blockSize;
          var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
          data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).concat(CryptoJS.lib.WordArray.create([ nPaddingBytes << 24 ], 1));
        },
        unpad: function(data) {
          var nPaddingBytes = 255 & data.words[data.sigBytes - 1 >>> 2];
          data.sigBytes -= nPaddingBytes;
        }
      };
      return CryptoJS.pad.Iso10126;
    });
  }, {
    "./cipher-core": 4,
    "./core": 5
  } ],
  22: [ function(require, module, exports) {
    (function(root, factory, undef) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core"), require("./cipher-core")) : "function" === typeof define && define.amd ? define([ "./core", "./cipher-core" ], factory) : factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      CryptoJS.pad.Iso97971 = {
        pad: function(data, blockSize) {
          data.concat(CryptoJS.lib.WordArray.create([ 2147483648 ], 1));
          CryptoJS.pad.ZeroPadding.pad(data, blockSize);
        },
        unpad: function(data) {
          CryptoJS.pad.ZeroPadding.unpad(data);
          data.sigBytes--;
        }
      };
      return CryptoJS.pad.Iso97971;
    });
  }, {
    "./cipher-core": 4,
    "./core": 5
  } ],
  23: [ function(require, module, exports) {
    (function(root, factory, undef) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core"), require("./cipher-core")) : "function" === typeof define && define.amd ? define([ "./core", "./cipher-core" ], factory) : factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      CryptoJS.pad.NoPadding = {
        pad: function() {},
        unpad: function() {}
      };
      return CryptoJS.pad.NoPadding;
    });
  }, {
    "./cipher-core": 4,
    "./core": 5
  } ],
  24: [ function(require, module, exports) {
    (function(root, factory, undef) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core"), require("./cipher-core")) : "function" === typeof define && define.amd ? define([ "./core", "./cipher-core" ], factory) : factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      CryptoJS.pad.ZeroPadding = {
        pad: function(data, blockSize) {
          var blockSizeBytes = 4 * blockSize;
          data.clamp();
          data.sigBytes += blockSizeBytes - (data.sigBytes % blockSizeBytes || blockSizeBytes);
        },
        unpad: function(data) {
          var dataWords = data.words;
          var i = data.sigBytes - 1;
          for (var i = data.sigBytes - 1; i >= 0; i--) if (dataWords[i >>> 2] >>> 24 - i % 4 * 8 & 255) {
            data.sigBytes = i + 1;
            break;
          }
        }
      };
      return CryptoJS.pad.ZeroPadding;
    });
  }, {
    "./cipher-core": 4,
    "./core": 5
  } ],
  25: [ function(require, module, exports) {
    (function(root, factory, undef) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core"), require("./sha256"), require("./hmac")) : "function" === typeof define && define.amd ? define([ "./core", "./sha256", "./hmac" ], factory) : factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var WordArray = C_lib.WordArray;
        var C_algo = C.algo;
        var SHA256 = C_algo.SHA256;
        var HMAC = C_algo.HMAC;
        var PBKDF2 = C_algo.PBKDF2 = Base.extend({
          cfg: Base.extend({
            keySize: 4,
            hasher: SHA256,
            iterations: 25e4
          }),
          init: function(cfg) {
            this.cfg = this.cfg.extend(cfg);
          },
          compute: function(password, salt) {
            var cfg = this.cfg;
            var hmac = HMAC.create(cfg.hasher, password);
            var derivedKey = WordArray.create();
            var blockIndex = WordArray.create([ 1 ]);
            var derivedKeyWords = derivedKey.words;
            var blockIndexWords = blockIndex.words;
            var keySize = cfg.keySize;
            var iterations = cfg.iterations;
            while (derivedKeyWords.length < keySize) {
              var block = hmac.update(salt).finalize(blockIndex);
              hmac.reset();
              var blockWords = block.words;
              var blockWordsLength = blockWords.length;
              var intermediate = block;
              for (var i = 1; i < iterations; i++) {
                intermediate = hmac.finalize(intermediate);
                hmac.reset();
                var intermediateWords = intermediate.words;
                for (var j = 0; j < blockWordsLength; j++) blockWords[j] ^= intermediateWords[j];
              }
              derivedKey.concat(block);
              blockIndexWords[0]++;
            }
            derivedKey.sigBytes = 4 * keySize;
            return derivedKey;
          }
        });
        C.PBKDF2 = function(password, salt, cfg) {
          return PBKDF2.create(cfg).compute(password, salt);
        };
      })();
      return CryptoJS.PBKDF2;
    });
  }, {
    "./core": 5,
    "./hmac": 11,
    "./sha256": 32
  } ],
  26: [ function(require, module, exports) {
    (function(root, factory, undef) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core")) : "function" === typeof define && define.amd ? define([ "./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core" ], factory) : factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var StreamCipher = C_lib.StreamCipher;
        var C_algo = C.algo;
        var S = [];
        var C_ = [];
        var G = [];
        var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
          _doReset: function() {
            var K = this._key.words;
            var iv = this.cfg.iv;
            var X = this._X = [ K[0], K[3] << 16 | K[2] >>> 16, K[1], K[0] << 16 | K[3] >>> 16, K[2], K[1] << 16 | K[0] >>> 16, K[3], K[2] << 16 | K[1] >>> 16 ];
            var C = this._C = [ K[2] << 16 | K[2] >>> 16, 4294901760 & K[0] | 65535 & K[1], K[3] << 16 | K[3] >>> 16, 4294901760 & K[1] | 65535 & K[2], K[0] << 16 | K[0] >>> 16, 4294901760 & K[2] | 65535 & K[3], K[1] << 16 | K[1] >>> 16, 4294901760 & K[3] | 65535 & K[0] ];
            this._b = 0;
            for (var i = 0; i < 4; i++) nextState.call(this);
            for (var i = 0; i < 8; i++) C[i] ^= X[i + 4 & 7];
            if (iv) {
              var IV = iv.words;
              var IV_0 = IV[0];
              var IV_1 = IV[1];
              var i0 = 16711935 & (IV_0 << 8 | IV_0 >>> 24) | 4278255360 & (IV_0 << 24 | IV_0 >>> 8);
              var i2 = 16711935 & (IV_1 << 8 | IV_1 >>> 24) | 4278255360 & (IV_1 << 24 | IV_1 >>> 8);
              var i1 = i0 >>> 16 | 4294901760 & i2;
              var i3 = i2 << 16 | 65535 & i0;
              C[0] ^= i0;
              C[1] ^= i1;
              C[2] ^= i2;
              C[3] ^= i3;
              C[4] ^= i0;
              C[5] ^= i1;
              C[6] ^= i2;
              C[7] ^= i3;
              for (var i = 0; i < 4; i++) nextState.call(this);
            }
          },
          _doProcessBlock: function(M, offset) {
            var X = this._X;
            nextState.call(this);
            S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
            S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
            S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
            S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;
            for (var i = 0; i < 4; i++) {
              S[i] = 16711935 & (S[i] << 8 | S[i] >>> 24) | 4278255360 & (S[i] << 24 | S[i] >>> 8);
              M[offset + i] ^= S[i];
            }
          },
          blockSize: 4,
          ivSize: 2
        });
        function nextState() {
          var X = this._X;
          var C = this._C;
          for (var i = 0; i < 8; i++) C_[i] = C[i];
          C[0] = C[0] + 1295307597 + this._b | 0;
          C[1] = C[1] + 3545052371 + (C[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
          C[2] = C[2] + 886263092 + (C[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
          C[3] = C[3] + 1295307597 + (C[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
          C[4] = C[4] + 3545052371 + (C[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
          C[5] = C[5] + 886263092 + (C[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
          C[6] = C[6] + 1295307597 + (C[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
          C[7] = C[7] + 3545052371 + (C[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
          this._b = C[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;
          for (var i = 0; i < 8; i++) {
            var gx = X[i] + C[i];
            var ga = 65535 & gx;
            var gb = gx >>> 16;
            var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
            var gl = ((4294901760 & gx) * gx | 0) + ((65535 & gx) * gx | 0);
            G[i] = gh ^ gl;
          }
          X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
          X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
          X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
          X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
          X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
          X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
          X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
          X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
        }
        C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
      })();
      return CryptoJS.RabbitLegacy;
    });
  }, {
    "./cipher-core": 4,
    "./core": 5,
    "./enc-base64": 6,
    "./evpkdf": 9,
    "./md5": 14
  } ],
  27: [ function(require, module, exports) {
    (function(root, factory, undef) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core")) : "function" === typeof define && define.amd ? define([ "./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core" ], factory) : factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var StreamCipher = C_lib.StreamCipher;
        var C_algo = C.algo;
        var S = [];
        var C_ = [];
        var G = [];
        var Rabbit = C_algo.Rabbit = StreamCipher.extend({
          _doReset: function() {
            var K = this._key.words;
            var iv = this.cfg.iv;
            for (var i = 0; i < 4; i++) K[i] = 16711935 & (K[i] << 8 | K[i] >>> 24) | 4278255360 & (K[i] << 24 | K[i] >>> 8);
            var X = this._X = [ K[0], K[3] << 16 | K[2] >>> 16, K[1], K[0] << 16 | K[3] >>> 16, K[2], K[1] << 16 | K[0] >>> 16, K[3], K[2] << 16 | K[1] >>> 16 ];
            var C = this._C = [ K[2] << 16 | K[2] >>> 16, 4294901760 & K[0] | 65535 & K[1], K[3] << 16 | K[3] >>> 16, 4294901760 & K[1] | 65535 & K[2], K[0] << 16 | K[0] >>> 16, 4294901760 & K[2] | 65535 & K[3], K[1] << 16 | K[1] >>> 16, 4294901760 & K[3] | 65535 & K[0] ];
            this._b = 0;
            for (var i = 0; i < 4; i++) nextState.call(this);
            for (var i = 0; i < 8; i++) C[i] ^= X[i + 4 & 7];
            if (iv) {
              var IV = iv.words;
              var IV_0 = IV[0];
              var IV_1 = IV[1];
              var i0 = 16711935 & (IV_0 << 8 | IV_0 >>> 24) | 4278255360 & (IV_0 << 24 | IV_0 >>> 8);
              var i2 = 16711935 & (IV_1 << 8 | IV_1 >>> 24) | 4278255360 & (IV_1 << 24 | IV_1 >>> 8);
              var i1 = i0 >>> 16 | 4294901760 & i2;
              var i3 = i2 << 16 | 65535 & i0;
              C[0] ^= i0;
              C[1] ^= i1;
              C[2] ^= i2;
              C[3] ^= i3;
              C[4] ^= i0;
              C[5] ^= i1;
              C[6] ^= i2;
              C[7] ^= i3;
              for (var i = 0; i < 4; i++) nextState.call(this);
            }
          },
          _doProcessBlock: function(M, offset) {
            var X = this._X;
            nextState.call(this);
            S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
            S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
            S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
            S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;
            for (var i = 0; i < 4; i++) {
              S[i] = 16711935 & (S[i] << 8 | S[i] >>> 24) | 4278255360 & (S[i] << 24 | S[i] >>> 8);
              M[offset + i] ^= S[i];
            }
          },
          blockSize: 4,
          ivSize: 2
        });
        function nextState() {
          var X = this._X;
          var C = this._C;
          for (var i = 0; i < 8; i++) C_[i] = C[i];
          C[0] = C[0] + 1295307597 + this._b | 0;
          C[1] = C[1] + 3545052371 + (C[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
          C[2] = C[2] + 886263092 + (C[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
          C[3] = C[3] + 1295307597 + (C[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
          C[4] = C[4] + 3545052371 + (C[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
          C[5] = C[5] + 886263092 + (C[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
          C[6] = C[6] + 1295307597 + (C[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
          C[7] = C[7] + 3545052371 + (C[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
          this._b = C[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;
          for (var i = 0; i < 8; i++) {
            var gx = X[i] + C[i];
            var ga = 65535 & gx;
            var gb = gx >>> 16;
            var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
            var gl = ((4294901760 & gx) * gx | 0) + ((65535 & gx) * gx | 0);
            G[i] = gh ^ gl;
          }
          X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
          X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
          X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
          X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
          X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
          X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
          X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
          X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
        }
        C.Rabbit = StreamCipher._createHelper(Rabbit);
      })();
      return CryptoJS.Rabbit;
    });
  }, {
    "./cipher-core": 4,
    "./core": 5,
    "./enc-base64": 6,
    "./evpkdf": 9,
    "./md5": 14
  } ],
  28: [ function(require, module, exports) {
    (function(root, factory, undef) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core")) : "function" === typeof define && define.amd ? define([ "./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core" ], factory) : factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var StreamCipher = C_lib.StreamCipher;
        var C_algo = C.algo;
        var RC4 = C_algo.RC4 = StreamCipher.extend({
          _doReset: function() {
            var key = this._key;
            var keyWords = key.words;
            var keySigBytes = key.sigBytes;
            var S = this._S = [];
            for (var i = 0; i < 256; i++) S[i] = i;
            for (var i = 0, j = 0; i < 256; i++) {
              var keyByteIndex = i % keySigBytes;
              var keyByte = keyWords[keyByteIndex >>> 2] >>> 24 - keyByteIndex % 4 * 8 & 255;
              j = (j + S[i] + keyByte) % 256;
              var t = S[i];
              S[i] = S[j];
              S[j] = t;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(M, offset) {
            M[offset] ^= generateKeystreamWord.call(this);
          },
          keySize: 8,
          ivSize: 0
        });
        function generateKeystreamWord() {
          var S = this._S;
          var i = this._i;
          var j = this._j;
          var keystreamWord = 0;
          for (var n = 0; n < 4; n++) {
            i = (i + 1) % 256;
            j = (j + S[i]) % 256;
            var t = S[i];
            S[i] = S[j];
            S[j] = t;
            keystreamWord |= S[(S[i] + S[j]) % 256] << 24 - 8 * n;
          }
          this._i = i;
          this._j = j;
          return keystreamWord;
        }
        C.RC4 = StreamCipher._createHelper(RC4);
        var RC4Drop = C_algo.RC4Drop = RC4.extend({
          cfg: RC4.cfg.extend({
            drop: 192
          }),
          _doReset: function() {
            RC4._doReset.call(this);
            for (var i = this.cfg.drop; i > 0; i--) generateKeystreamWord.call(this);
          }
        });
        C.RC4Drop = StreamCipher._createHelper(RC4Drop);
      })();
      return CryptoJS.RC4;
    });
  }, {
    "./cipher-core": 4,
    "./core": 5,
    "./enc-base64": 6,
    "./evpkdf": 9,
    "./md5": 14
  } ],
  29: [ function(require, module, exports) {
    (function(root, factory) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core")) : "function" === typeof define && define.amd ? define([ "./core" ], factory) : factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      (function(Math) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var _zl = WordArray.create([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13 ]);
        var _zr = WordArray.create([ 5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11 ]);
        var _sl = WordArray.create([ 11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6 ]);
        var _sr = WordArray.create([ 8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11 ]);
        var _hl = WordArray.create([ 0, 1518500249, 1859775393, 2400959708, 2840853838 ]);
        var _hr = WordArray.create([ 1352829926, 1548603684, 1836072691, 2053994217, 0 ]);
        var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
          _doReset: function() {
            this._hash = WordArray.create([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
          },
          _doProcessBlock: function(M, offset) {
            for (var i = 0; i < 16; i++) {
              var offset_i = offset + i;
              var M_offset_i = M[offset_i];
              M[offset_i] = 16711935 & (M_offset_i << 8 | M_offset_i >>> 24) | 4278255360 & (M_offset_i << 24 | M_offset_i >>> 8);
            }
            var H = this._hash.words;
            var hl = _hl.words;
            var hr = _hr.words;
            var zl = _zl.words;
            var zr = _zr.words;
            var sl = _sl.words;
            var sr = _sr.words;
            var al, bl, cl, dl, el;
            var ar, br, cr, dr, er;
            ar = al = H[0];
            br = bl = H[1];
            cr = cl = H[2];
            dr = dl = H[3];
            er = el = H[4];
            var t;
            for (var i = 0; i < 80; i += 1) {
              t = al + M[offset + zl[i]] | 0;
              t += i < 16 ? f1(bl, cl, dl) + hl[0] : i < 32 ? f2(bl, cl, dl) + hl[1] : i < 48 ? f3(bl, cl, dl) + hl[2] : i < 64 ? f4(bl, cl, dl) + hl[3] : f5(bl, cl, dl) + hl[4];
              t |= 0;
              t = rotl(t, sl[i]);
              t = t + el | 0;
              al = el;
              el = dl;
              dl = rotl(cl, 10);
              cl = bl;
              bl = t;
              t = ar + M[offset + zr[i]] | 0;
              t += i < 16 ? f5(br, cr, dr) + hr[0] : i < 32 ? f4(br, cr, dr) + hr[1] : i < 48 ? f3(br, cr, dr) + hr[2] : i < 64 ? f2(br, cr, dr) + hr[3] : f1(br, cr, dr) + hr[4];
              t |= 0;
              t = rotl(t, sr[i]);
              t = t + er | 0;
              ar = er;
              er = dr;
              dr = rotl(cr, 10);
              cr = br;
              br = t;
            }
            t = H[1] + cl + dr | 0;
            H[1] = H[2] + dl + er | 0;
            H[2] = H[3] + el + ar | 0;
            H[3] = H[4] + al + br | 0;
            H[4] = H[0] + bl + cr | 0;
            H[0] = t;
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = 8 * this._nDataBytes;
            var nBitsLeft = 8 * data.sigBytes;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            dataWords[14 + (nBitsLeft + 64 >>> 9 << 4)] = 16711935 & (nBitsTotal << 8 | nBitsTotal >>> 24) | 4278255360 & (nBitsTotal << 24 | nBitsTotal >>> 8);
            data.sigBytes = 4 * (dataWords.length + 1);
            this._process();
            var hash = this._hash;
            var H = hash.words;
            for (var i = 0; i < 5; i++) {
              var H_i = H[i];
              H[i] = 16711935 & (H_i << 8 | H_i >>> 24) | 4278255360 & (H_i << 24 | H_i >>> 8);
            }
            return hash;
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });
        function f1(x, y, z) {
          return x ^ y ^ z;
        }
        function f2(x, y, z) {
          return x & y | ~x & z;
        }
        function f3(x, y, z) {
          return (x | ~y) ^ z;
        }
        function f4(x, y, z) {
          return x & z | y & ~z;
        }
        function f5(x, y, z) {
          return x ^ (y | ~z);
        }
        function rotl(x, n) {
          return x << n | x >>> 32 - n;
        }
        C.RIPEMD160 = Hasher._createHelper(RIPEMD160);
        C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
      })(Math);
      return CryptoJS.RIPEMD160;
    });
  }, {
    "./core": 5
  } ],
  30: [ function(require, module, exports) {
    (function(root, factory) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core")) : "function" === typeof define && define.amd ? define([ "./core" ], factory) : factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var W = [];
        var SHA1 = C_algo.SHA1 = Hasher.extend({
          _doReset: function() {
            this._hash = new WordArray.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
          },
          _doProcessBlock: function(M, offset) {
            var H = this._hash.words;
            var a = H[0];
            var b = H[1];
            var c = H[2];
            var d = H[3];
            var e = H[4];
            for (var i = 0; i < 80; i++) {
              if (i < 16) W[i] = 0 | M[offset + i]; else {
                var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
                W[i] = n << 1 | n >>> 31;
              }
              var t = (a << 5 | a >>> 27) + e + W[i];
              t += i < 20 ? 1518500249 + (b & c | ~b & d) : i < 40 ? 1859775393 + (b ^ c ^ d) : i < 60 ? (b & c | b & d | c & d) - 1894007588 : (b ^ c ^ d) - 899497514;
              e = d;
              d = c;
              c = b << 30 | b >>> 2;
              b = a;
              a = t;
            }
            H[0] = H[0] + a | 0;
            H[1] = H[1] + b | 0;
            H[2] = H[2] + c | 0;
            H[3] = H[3] + d | 0;
            H[4] = H[4] + e | 0;
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = 8 * this._nDataBytes;
            var nBitsLeft = 8 * data.sigBytes;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            dataWords[14 + (nBitsLeft + 64 >>> 9 << 4)] = Math.floor(nBitsTotal / 4294967296);
            dataWords[15 + (nBitsLeft + 64 >>> 9 << 4)] = nBitsTotal;
            data.sigBytes = 4 * dataWords.length;
            this._process();
            return this._hash;
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });
        C.SHA1 = Hasher._createHelper(SHA1);
        C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
      })();
      return CryptoJS.SHA1;
    });
  }, {
    "./core": 5
  } ],
  31: [ function(require, module, exports) {
    (function(root, factory, undef) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core"), require("./sha256")) : "function" === typeof define && define.amd ? define([ "./core", "./sha256" ], factory) : factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_algo = C.algo;
        var SHA256 = C_algo.SHA256;
        var SHA224 = C_algo.SHA224 = SHA256.extend({
          _doReset: function() {
            this._hash = new WordArray.init([ 3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428 ]);
          },
          _doFinalize: function() {
            var hash = SHA256._doFinalize.call(this);
            hash.sigBytes -= 4;
            return hash;
          }
        });
        C.SHA224 = SHA256._createHelper(SHA224);
        C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
      })();
      return CryptoJS.SHA224;
    });
  }, {
    "./core": 5,
    "./sha256": 32
  } ],
  32: [ function(require, module, exports) {
    (function(root, factory) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core")) : "function" === typeof define && define.amd ? define([ "./core" ], factory) : factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      (function(Math) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var H = [];
        var K = [];
        (function() {
          function isPrime(n) {
            var sqrtN = Math.sqrt(n);
            for (var factor = 2; factor <= sqrtN; factor++) if (!(n % factor)) return false;
            return true;
          }
          function getFractionalBits(n) {
            return 4294967296 * (n - (0 | n)) | 0;
          }
          var n = 2;
          var nPrime = 0;
          while (nPrime < 64) {
            if (isPrime(n)) {
              nPrime < 8 && (H[nPrime] = getFractionalBits(Math.pow(n, .5)));
              K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));
              nPrime++;
            }
            n++;
          }
        })();
        var W = [];
        var SHA256 = C_algo.SHA256 = Hasher.extend({
          _doReset: function() {
            this._hash = new WordArray.init(H.slice(0));
          },
          _doProcessBlock: function(M, offset) {
            var H = this._hash.words;
            var a = H[0];
            var b = H[1];
            var c = H[2];
            var d = H[3];
            var e = H[4];
            var f = H[5];
            var g = H[6];
            var h = H[7];
            for (var i = 0; i < 64; i++) {
              if (i < 16) W[i] = 0 | M[offset + i]; else {
                var gamma0x = W[i - 15];
                var gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
                var gamma1x = W[i - 2];
                var gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
                W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
              }
              var ch = e & f ^ ~e & g;
              var maj = a & b ^ a & c ^ b & c;
              var sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
              var sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
              var t1 = h + sigma1 + ch + K[i] + W[i];
              var t2 = sigma0 + maj;
              h = g;
              g = f;
              f = e;
              e = d + t1 | 0;
              d = c;
              c = b;
              b = a;
              a = t1 + t2 | 0;
            }
            H[0] = H[0] + a | 0;
            H[1] = H[1] + b | 0;
            H[2] = H[2] + c | 0;
            H[3] = H[3] + d | 0;
            H[4] = H[4] + e | 0;
            H[5] = H[5] + f | 0;
            H[6] = H[6] + g | 0;
            H[7] = H[7] + h | 0;
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = 8 * this._nDataBytes;
            var nBitsLeft = 8 * data.sigBytes;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            dataWords[14 + (nBitsLeft + 64 >>> 9 << 4)] = Math.floor(nBitsTotal / 4294967296);
            dataWords[15 + (nBitsLeft + 64 >>> 9 << 4)] = nBitsTotal;
            data.sigBytes = 4 * dataWords.length;
            this._process();
            return this._hash;
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });
        C.SHA256 = Hasher._createHelper(SHA256);
        C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
      })(Math);
      return CryptoJS.SHA256;
    });
  }, {
    "./core": 5
  } ],
  33: [ function(require, module, exports) {
    (function(root, factory, undef) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core"), require("./x64-core")) : "function" === typeof define && define.amd ? define([ "./core", "./x64-core" ], factory) : factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      (function(Math) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_x64 = C.x64;
        var X64Word = C_x64.Word;
        var C_algo = C.algo;
        var RHO_OFFSETS = [];
        var PI_INDEXES = [];
        var ROUND_CONSTANTS = [];
        (function() {
          var x = 1, y = 0;
          for (var t = 0; t < 24; t++) {
            RHO_OFFSETS[x + 5 * y] = (t + 1) * (t + 2) / 2 % 64;
            var newX = y % 5;
            var newY = (2 * x + 3 * y) % 5;
            x = newX;
            y = newY;
          }
          for (var x = 0; x < 5; x++) for (var y = 0; y < 5; y++) PI_INDEXES[x + 5 * y] = y + (2 * x + 3 * y) % 5 * 5;
          var LFSR = 1;
          for (var i = 0; i < 24; i++) {
            var roundConstantMsw = 0;
            var roundConstantLsw = 0;
            for (var j = 0; j < 7; j++) {
              if (1 & LFSR) {
                var bitPosition = (1 << j) - 1;
                bitPosition < 32 ? roundConstantLsw ^= 1 << bitPosition : roundConstantMsw ^= 1 << bitPosition - 32;
              }
              128 & LFSR ? LFSR = LFSR << 1 ^ 113 : LFSR <<= 1;
            }
            ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
          }
        })();
        var T = [];
        (function() {
          for (var i = 0; i < 25; i++) T[i] = X64Word.create();
        })();
        var SHA3 = C_algo.SHA3 = Hasher.extend({
          cfg: Hasher.cfg.extend({
            outputLength: 512
          }),
          _doReset: function() {
            var state = this._state = [];
            for (var i = 0; i < 25; i++) state[i] = new X64Word.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(M, offset) {
            var state = this._state;
            var nBlockSizeLanes = this.blockSize / 2;
            for (var i = 0; i < nBlockSizeLanes; i++) {
              var M2i = M[offset + 2 * i];
              var M2i1 = M[offset + 2 * i + 1];
              M2i = 16711935 & (M2i << 8 | M2i >>> 24) | 4278255360 & (M2i << 24 | M2i >>> 8);
              M2i1 = 16711935 & (M2i1 << 8 | M2i1 >>> 24) | 4278255360 & (M2i1 << 24 | M2i1 >>> 8);
              var lane = state[i];
              lane.high ^= M2i1;
              lane.low ^= M2i;
            }
            for (var round = 0; round < 24; round++) {
              for (var x = 0; x < 5; x++) {
                var tMsw = 0, tLsw = 0;
                for (var y = 0; y < 5; y++) {
                  var lane = state[x + 5 * y];
                  tMsw ^= lane.high;
                  tLsw ^= lane.low;
                }
                var Tx = T[x];
                Tx.high = tMsw;
                Tx.low = tLsw;
              }
              for (var x = 0; x < 5; x++) {
                var Tx4 = T[(x + 4) % 5];
                var Tx1 = T[(x + 1) % 5];
                var Tx1Msw = Tx1.high;
                var Tx1Lsw = Tx1.low;
                var tMsw = Tx4.high ^ (Tx1Msw << 1 | Tx1Lsw >>> 31);
                var tLsw = Tx4.low ^ (Tx1Lsw << 1 | Tx1Msw >>> 31);
                for (var y = 0; y < 5; y++) {
                  var lane = state[x + 5 * y];
                  lane.high ^= tMsw;
                  lane.low ^= tLsw;
                }
              }
              for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
                var tMsw;
                var tLsw;
                var lane = state[laneIndex];
                var laneMsw = lane.high;
                var laneLsw = lane.low;
                var rhoOffset = RHO_OFFSETS[laneIndex];
                if (rhoOffset < 32) {
                  tMsw = laneMsw << rhoOffset | laneLsw >>> 32 - rhoOffset;
                  tLsw = laneLsw << rhoOffset | laneMsw >>> 32 - rhoOffset;
                } else {
                  tMsw = laneLsw << rhoOffset - 32 | laneMsw >>> 64 - rhoOffset;
                  tLsw = laneMsw << rhoOffset - 32 | laneLsw >>> 64 - rhoOffset;
                }
                var TPiLane = T[PI_INDEXES[laneIndex]];
                TPiLane.high = tMsw;
                TPiLane.low = tLsw;
              }
              var T0 = T[0];
              var state0 = state[0];
              T0.high = state0.high;
              T0.low = state0.low;
              for (var x = 0; x < 5; x++) for (var y = 0; y < 5; y++) {
                var laneIndex = x + 5 * y;
                var lane = state[laneIndex];
                var TLane = T[laneIndex];
                var Tx1Lane = T[(x + 1) % 5 + 5 * y];
                var Tx2Lane = T[(x + 2) % 5 + 5 * y];
                lane.high = TLane.high ^ ~Tx1Lane.high & Tx2Lane.high;
                lane.low = TLane.low ^ ~Tx1Lane.low & Tx2Lane.low;
              }
              var lane = state[0];
              var roundConstant = ROUND_CONSTANTS[round];
              lane.high ^= roundConstant.high;
              lane.low ^= roundConstant.low;
            }
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = 8 * this._nDataBytes;
            var nBitsLeft = 8 * data.sigBytes;
            var blockSizeBits = 32 * this.blockSize;
            dataWords[nBitsLeft >>> 5] |= 1 << 24 - nBitsLeft % 32;
            dataWords[(Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits >>> 5) - 1] |= 128;
            data.sigBytes = 4 * dataWords.length;
            this._process();
            var state = this._state;
            var outputLengthBytes = this.cfg.outputLength / 8;
            var outputLengthLanes = outputLengthBytes / 8;
            var hashWords = [];
            for (var i = 0; i < outputLengthLanes; i++) {
              var lane = state[i];
              var laneMsw = lane.high;
              var laneLsw = lane.low;
              laneMsw = 16711935 & (laneMsw << 8 | laneMsw >>> 24) | 4278255360 & (laneMsw << 24 | laneMsw >>> 8);
              laneLsw = 16711935 & (laneLsw << 8 | laneLsw >>> 24) | 4278255360 & (laneLsw << 24 | laneLsw >>> 8);
              hashWords.push(laneLsw);
              hashWords.push(laneMsw);
            }
            return new WordArray.init(hashWords, outputLengthBytes);
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            var state = clone._state = this._state.slice(0);
            for (var i = 0; i < 25; i++) state[i] = state[i].clone();
            return clone;
          }
        });
        C.SHA3 = Hasher._createHelper(SHA3);
        C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
      })(Math);
      return CryptoJS.SHA3;
    });
  }, {
    "./core": 5,
    "./x64-core": 37
  } ],
  34: [ function(require, module, exports) {
    (function(root, factory, undef) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core"), require("./x64-core"), require("./sha512")) : "function" === typeof define && define.amd ? define([ "./core", "./x64-core", "./sha512" ], factory) : factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_x64 = C.x64;
        var X64Word = C_x64.Word;
        var X64WordArray = C_x64.WordArray;
        var C_algo = C.algo;
        var SHA512 = C_algo.SHA512;
        var SHA384 = C_algo.SHA384 = SHA512.extend({
          _doReset: function() {
            this._hash = new X64WordArray.init([ new X64Word.init(3418070365, 3238371032), new X64Word.init(1654270250, 914150663), new X64Word.init(2438529370, 812702999), new X64Word.init(355462360, 4144912697), new X64Word.init(1731405415, 4290775857), new X64Word.init(2394180231, 1750603025), new X64Word.init(3675008525, 1694076839), new X64Word.init(1203062813, 3204075428) ]);
          },
          _doFinalize: function() {
            var hash = SHA512._doFinalize.call(this);
            hash.sigBytes -= 16;
            return hash;
          }
        });
        C.SHA384 = SHA512._createHelper(SHA384);
        C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
      })();
      return CryptoJS.SHA384;
    });
  }, {
    "./core": 5,
    "./sha512": 35,
    "./x64-core": 37
  } ],
  35: [ function(require, module, exports) {
    (function(root, factory, undef) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core"), require("./x64-core")) : "function" === typeof define && define.amd ? define([ "./core", "./x64-core" ], factory) : factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Hasher = C_lib.Hasher;
        var C_x64 = C.x64;
        var X64Word = C_x64.Word;
        var X64WordArray = C_x64.WordArray;
        var C_algo = C.algo;
        function X64Word_create() {
          return X64Word.create.apply(X64Word, arguments);
        }
        var K = [ X64Word_create(1116352408, 3609767458), X64Word_create(1899447441, 602891725), X64Word_create(3049323471, 3964484399), X64Word_create(3921009573, 2173295548), X64Word_create(961987163, 4081628472), X64Word_create(1508970993, 3053834265), X64Word_create(2453635748, 2937671579), X64Word_create(2870763221, 3664609560), X64Word_create(3624381080, 2734883394), X64Word_create(310598401, 1164996542), X64Word_create(607225278, 1323610764), X64Word_create(1426881987, 3590304994), X64Word_create(1925078388, 4068182383), X64Word_create(2162078206, 991336113), X64Word_create(2614888103, 633803317), X64Word_create(3248222580, 3479774868), X64Word_create(3835390401, 2666613458), X64Word_create(4022224774, 944711139), X64Word_create(264347078, 2341262773), X64Word_create(604807628, 2007800933), X64Word_create(770255983, 1495990901), X64Word_create(1249150122, 1856431235), X64Word_create(1555081692, 3175218132), X64Word_create(1996064986, 2198950837), X64Word_create(2554220882, 3999719339), X64Word_create(2821834349, 766784016), X64Word_create(2952996808, 2566594879), X64Word_create(3210313671, 3203337956), X64Word_create(3336571891, 1034457026), X64Word_create(3584528711, 2466948901), X64Word_create(113926993, 3758326383), X64Word_create(338241895, 168717936), X64Word_create(666307205, 1188179964), X64Word_create(773529912, 1546045734), X64Word_create(1294757372, 1522805485), X64Word_create(1396182291, 2643833823), X64Word_create(1695183700, 2343527390), X64Word_create(1986661051, 1014477480), X64Word_create(2177026350, 1206759142), X64Word_create(2456956037, 344077627), X64Word_create(2730485921, 1290863460), X64Word_create(2820302411, 3158454273), X64Word_create(3259730800, 3505952657), X64Word_create(3345764771, 106217008), X64Word_create(3516065817, 3606008344), X64Word_create(3600352804, 1432725776), X64Word_create(4094571909, 1467031594), X64Word_create(275423344, 851169720), X64Word_create(430227734, 3100823752), X64Word_create(506948616, 1363258195), X64Word_create(659060556, 3750685593), X64Word_create(883997877, 3785050280), X64Word_create(958139571, 3318307427), X64Word_create(1322822218, 3812723403), X64Word_create(1537002063, 2003034995), X64Word_create(1747873779, 3602036899), X64Word_create(1955562222, 1575990012), X64Word_create(2024104815, 1125592928), X64Word_create(2227730452, 2716904306), X64Word_create(2361852424, 442776044), X64Word_create(2428436474, 593698344), X64Word_create(2756734187, 3733110249), X64Word_create(3204031479, 2999351573), X64Word_create(3329325298, 3815920427), X64Word_create(3391569614, 3928383900), X64Word_create(3515267271, 566280711), X64Word_create(3940187606, 3454069534), X64Word_create(4118630271, 4000239992), X64Word_create(116418474, 1914138554), X64Word_create(174292421, 2731055270), X64Word_create(289380356, 3203993006), X64Word_create(460393269, 320620315), X64Word_create(685471733, 587496836), X64Word_create(852142971, 1086792851), X64Word_create(1017036298, 365543100), X64Word_create(1126000580, 2618297676), X64Word_create(1288033470, 3409855158), X64Word_create(1501505948, 4234509866), X64Word_create(1607167915, 987167468), X64Word_create(1816402316, 1246189591) ];
        var W = [];
        (function() {
          for (var i = 0; i < 80; i++) W[i] = X64Word_create();
        })();
        var SHA512 = C_algo.SHA512 = Hasher.extend({
          _doReset: function() {
            this._hash = new X64WordArray.init([ new X64Word.init(1779033703, 4089235720), new X64Word.init(3144134277, 2227873595), new X64Word.init(1013904242, 4271175723), new X64Word.init(2773480762, 1595750129), new X64Word.init(1359893119, 2917565137), new X64Word.init(2600822924, 725511199), new X64Word.init(528734635, 4215389547), new X64Word.init(1541459225, 327033209) ]);
          },
          _doProcessBlock: function(M, offset) {
            var H = this._hash.words;
            var H0 = H[0];
            var H1 = H[1];
            var H2 = H[2];
            var H3 = H[3];
            var H4 = H[4];
            var H5 = H[5];
            var H6 = H[6];
            var H7 = H[7];
            var H0h = H0.high;
            var H0l = H0.low;
            var H1h = H1.high;
            var H1l = H1.low;
            var H2h = H2.high;
            var H2l = H2.low;
            var H3h = H3.high;
            var H3l = H3.low;
            var H4h = H4.high;
            var H4l = H4.low;
            var H5h = H5.high;
            var H5l = H5.low;
            var H6h = H6.high;
            var H6l = H6.low;
            var H7h = H7.high;
            var H7l = H7.low;
            var ah = H0h;
            var al = H0l;
            var bh = H1h;
            var bl = H1l;
            var ch = H2h;
            var cl = H2l;
            var dh = H3h;
            var dl = H3l;
            var eh = H4h;
            var el = H4l;
            var fh = H5h;
            var fl = H5l;
            var gh = H6h;
            var gl = H6l;
            var hh = H7h;
            var hl = H7l;
            for (var i = 0; i < 80; i++) {
              var Wil;
              var Wih;
              var Wi = W[i];
              if (i < 16) {
                Wih = Wi.high = 0 | M[offset + 2 * i];
                Wil = Wi.low = 0 | M[offset + 2 * i + 1];
              } else {
                var gamma0x = W[i - 15];
                var gamma0xh = gamma0x.high;
                var gamma0xl = gamma0x.low;
                var gamma0h = (gamma0xh >>> 1 | gamma0xl << 31) ^ (gamma0xh >>> 8 | gamma0xl << 24) ^ gamma0xh >>> 7;
                var gamma0l = (gamma0xl >>> 1 | gamma0xh << 31) ^ (gamma0xl >>> 8 | gamma0xh << 24) ^ (gamma0xl >>> 7 | gamma0xh << 25);
                var gamma1x = W[i - 2];
                var gamma1xh = gamma1x.high;
                var gamma1xl = gamma1x.low;
                var gamma1h = (gamma1xh >>> 19 | gamma1xl << 13) ^ (gamma1xh << 3 | gamma1xl >>> 29) ^ gamma1xh >>> 6;
                var gamma1l = (gamma1xl >>> 19 | gamma1xh << 13) ^ (gamma1xl << 3 | gamma1xh >>> 29) ^ (gamma1xl >>> 6 | gamma1xh << 26);
                var Wi7 = W[i - 7];
                var Wi7h = Wi7.high;
                var Wi7l = Wi7.low;
                var Wi16 = W[i - 16];
                var Wi16h = Wi16.high;
                var Wi16l = Wi16.low;
                Wil = gamma0l + Wi7l;
                Wih = gamma0h + Wi7h + (Wil >>> 0 < gamma0l >>> 0 ? 1 : 0);
                Wil += gamma1l;
                Wih = Wih + gamma1h + (Wil >>> 0 < gamma1l >>> 0 ? 1 : 0);
                Wil += Wi16l;
                Wih = Wih + Wi16h + (Wil >>> 0 < Wi16l >>> 0 ? 1 : 0);
                Wi.high = Wih;
                Wi.low = Wil;
              }
              var chh = eh & fh ^ ~eh & gh;
              var chl = el & fl ^ ~el & gl;
              var majh = ah & bh ^ ah & ch ^ bh & ch;
              var majl = al & bl ^ al & cl ^ bl & cl;
              var sigma0h = (ah >>> 28 | al << 4) ^ (ah << 30 | al >>> 2) ^ (ah << 25 | al >>> 7);
              var sigma0l = (al >>> 28 | ah << 4) ^ (al << 30 | ah >>> 2) ^ (al << 25 | ah >>> 7);
              var sigma1h = (eh >>> 14 | el << 18) ^ (eh >>> 18 | el << 14) ^ (eh << 23 | el >>> 9);
              var sigma1l = (el >>> 14 | eh << 18) ^ (el >>> 18 | eh << 14) ^ (el << 23 | eh >>> 9);
              var Ki = K[i];
              var Kih = Ki.high;
              var Kil = Ki.low;
              var t1l = hl + sigma1l;
              var t1h = hh + sigma1h + (t1l >>> 0 < hl >>> 0 ? 1 : 0);
              var t1l = t1l + chl;
              var t1h = t1h + chh + (t1l >>> 0 < chl >>> 0 ? 1 : 0);
              var t1l = t1l + Kil;
              var t1h = t1h + Kih + (t1l >>> 0 < Kil >>> 0 ? 1 : 0);
              var t1l = t1l + Wil;
              var t1h = t1h + Wih + (t1l >>> 0 < Wil >>> 0 ? 1 : 0);
              var t2l = sigma0l + majl;
              var t2h = sigma0h + majh + (t2l >>> 0 < sigma0l >>> 0 ? 1 : 0);
              hh = gh;
              hl = gl;
              gh = fh;
              gl = fl;
              fh = eh;
              fl = el;
              el = dl + t1l | 0;
              eh = dh + t1h + (el >>> 0 < dl >>> 0 ? 1 : 0) | 0;
              dh = ch;
              dl = cl;
              ch = bh;
              cl = bl;
              bh = ah;
              bl = al;
              al = t1l + t2l | 0;
              ah = t1h + t2h + (al >>> 0 < t1l >>> 0 ? 1 : 0) | 0;
            }
            H0l = H0.low = H0l + al;
            H0.high = H0h + ah + (H0l >>> 0 < al >>> 0 ? 1 : 0);
            H1l = H1.low = H1l + bl;
            H1.high = H1h + bh + (H1l >>> 0 < bl >>> 0 ? 1 : 0);
            H2l = H2.low = H2l + cl;
            H2.high = H2h + ch + (H2l >>> 0 < cl >>> 0 ? 1 : 0);
            H3l = H3.low = H3l + dl;
            H3.high = H3h + dh + (H3l >>> 0 < dl >>> 0 ? 1 : 0);
            H4l = H4.low = H4l + el;
            H4.high = H4h + eh + (H4l >>> 0 < el >>> 0 ? 1 : 0);
            H5l = H5.low = H5l + fl;
            H5.high = H5h + fh + (H5l >>> 0 < fl >>> 0 ? 1 : 0);
            H6l = H6.low = H6l + gl;
            H6.high = H6h + gh + (H6l >>> 0 < gl >>> 0 ? 1 : 0);
            H7l = H7.low = H7l + hl;
            H7.high = H7h + hh + (H7l >>> 0 < hl >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = 8 * this._nDataBytes;
            var nBitsLeft = 8 * data.sigBytes;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            dataWords[30 + (nBitsLeft + 128 >>> 10 << 5)] = Math.floor(nBitsTotal / 4294967296);
            dataWords[31 + (nBitsLeft + 128 >>> 10 << 5)] = nBitsTotal;
            data.sigBytes = 4 * dataWords.length;
            this._process();
            var hash = this._hash.toX32();
            return hash;
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          },
          blockSize: 32
        });
        C.SHA512 = Hasher._createHelper(SHA512);
        C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
      })();
      return CryptoJS.SHA512;
    });
  }, {
    "./core": 5,
    "./x64-core": 37
  } ],
  36: [ function(require, module, exports) {
    (function(root, factory, undef) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core")) : "function" === typeof define && define.amd ? define([ "./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core" ], factory) : factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var BlockCipher = C_lib.BlockCipher;
        var C_algo = C.algo;
        var PC1 = [ 57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4 ];
        var PC2 = [ 14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32 ];
        var BIT_SHIFTS = [ 1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28 ];
        var SBOX_P = [ {
          0: 8421888,
          268435456: 32768,
          536870912: 8421378,
          805306368: 2,
          1073741824: 512,
          1342177280: 8421890,
          1610612736: 8389122,
          1879048192: 8388608,
          2147483648: 514,
          2415919104: 8389120,
          2684354560: 33280,
          2952790016: 8421376,
          3221225472: 32770,
          3489660928: 8388610,
          3758096384: 0,
          4026531840: 33282,
          134217728: 0,
          402653184: 8421890,
          671088640: 33282,
          939524096: 32768,
          1207959552: 8421888,
          1476395008: 512,
          1744830464: 8421378,
          2013265920: 2,
          2281701376: 8389120,
          2550136832: 33280,
          2818572288: 8421376,
          3087007744: 8389122,
          3355443200: 8388610,
          3623878656: 32770,
          3892314112: 514,
          4160749568: 8388608,
          1: 32768,
          268435457: 2,
          536870913: 8421888,
          805306369: 8388608,
          1073741825: 8421378,
          1342177281: 33280,
          1610612737: 512,
          1879048193: 8389122,
          2147483649: 8421890,
          2415919105: 8421376,
          2684354561: 8388610,
          2952790017: 33282,
          3221225473: 514,
          3489660929: 8389120,
          3758096385: 32770,
          4026531841: 0,
          134217729: 8421890,
          402653185: 8421376,
          671088641: 8388608,
          939524097: 512,
          1207959553: 32768,
          1476395009: 8388610,
          1744830465: 2,
          2013265921: 33282,
          2281701377: 32770,
          2550136833: 8389122,
          2818572289: 514,
          3087007745: 8421888,
          3355443201: 8389120,
          3623878657: 0,
          3892314113: 33280,
          4160749569: 8421378
        }, {
          0: 1074282512,
          16777216: 16384,
          33554432: 524288,
          50331648: 1074266128,
          67108864: 1073741840,
          83886080: 1074282496,
          100663296: 1073758208,
          117440512: 16,
          134217728: 540672,
          150994944: 1073758224,
          167772160: 1073741824,
          184549376: 540688,
          201326592: 524304,
          218103808: 0,
          234881024: 16400,
          251658240: 1074266112,
          8388608: 1073758208,
          25165824: 540688,
          41943040: 16,
          58720256: 1073758224,
          75497472: 1074282512,
          92274688: 1073741824,
          109051904: 524288,
          125829120: 1074266128,
          142606336: 524304,
          159383552: 0,
          176160768: 16384,
          192937984: 1074266112,
          209715200: 1073741840,
          226492416: 540672,
          243269632: 1074282496,
          260046848: 16400,
          268435456: 0,
          285212672: 1074266128,
          301989888: 1073758224,
          318767104: 1074282496,
          335544320: 1074266112,
          352321536: 16,
          369098752: 540688,
          385875968: 16384,
          402653184: 16400,
          419430400: 524288,
          436207616: 524304,
          452984832: 1073741840,
          469762048: 540672,
          486539264: 1073758208,
          503316480: 1073741824,
          520093696: 1074282512,
          276824064: 540688,
          293601280: 524288,
          310378496: 1074266112,
          327155712: 16384,
          343932928: 1073758208,
          360710144: 1074282512,
          377487360: 16,
          394264576: 1073741824,
          411041792: 1074282496,
          427819008: 1073741840,
          444596224: 1073758224,
          461373440: 524304,
          478150656: 0,
          494927872: 16400,
          511705088: 1074266128,
          528482304: 540672
        }, {
          0: 260,
          1048576: 0,
          2097152: 67109120,
          3145728: 65796,
          4194304: 65540,
          5242880: 67108868,
          6291456: 67174660,
          7340032: 67174400,
          8388608: 67108864,
          9437184: 67174656,
          10485760: 65792,
          11534336: 67174404,
          12582912: 67109124,
          13631488: 65536,
          14680064: 4,
          15728640: 256,
          524288: 67174656,
          1572864: 67174404,
          2621440: 0,
          3670016: 67109120,
          4718592: 67108868,
          5767168: 65536,
          6815744: 65540,
          7864320: 260,
          8912896: 4,
          9961472: 256,
          11010048: 67174400,
          12058624: 65796,
          13107200: 65792,
          14155776: 67109124,
          15204352: 67174660,
          16252928: 67108864,
          16777216: 67174656,
          17825792: 65540,
          18874368: 65536,
          19922944: 67109120,
          20971520: 256,
          22020096: 67174660,
          23068672: 67108868,
          24117248: 0,
          25165824: 67109124,
          26214400: 67108864,
          27262976: 4,
          28311552: 65792,
          29360128: 67174400,
          30408704: 260,
          31457280: 65796,
          32505856: 67174404,
          17301504: 67108864,
          18350080: 260,
          19398656: 67174656,
          20447232: 0,
          21495808: 65540,
          22544384: 67109120,
          23592960: 256,
          24641536: 67174404,
          25690112: 65536,
          26738688: 67174660,
          27787264: 65796,
          28835840: 67108868,
          29884416: 67109124,
          30932992: 67174400,
          31981568: 4,
          33030144: 65792
        }, {
          0: 2151682048,
          65536: 2147487808,
          131072: 4198464,
          196608: 2151677952,
          262144: 0,
          327680: 4198400,
          393216: 2147483712,
          458752: 4194368,
          524288: 2147483648,
          589824: 4194304,
          655360: 64,
          720896: 2147487744,
          786432: 2151678016,
          851968: 4160,
          917504: 4096,
          983040: 2151682112,
          32768: 2147487808,
          98304: 64,
          163840: 2151678016,
          229376: 2147487744,
          294912: 4198400,
          360448: 2151682112,
          425984: 0,
          491520: 2151677952,
          557056: 4096,
          622592: 2151682048,
          688128: 4194304,
          753664: 4160,
          819200: 2147483648,
          884736: 4194368,
          950272: 4198464,
          1015808: 2147483712,
          1048576: 4194368,
          1114112: 4198400,
          1179648: 2147483712,
          1245184: 0,
          1310720: 4160,
          1376256: 2151678016,
          1441792: 2151682048,
          1507328: 2147487808,
          1572864: 2151682112,
          1638400: 2147483648,
          1703936: 2151677952,
          1769472: 4198464,
          1835008: 2147487744,
          1900544: 4194304,
          1966080: 64,
          2031616: 4096,
          1081344: 2151677952,
          1146880: 2151682112,
          1212416: 0,
          1277952: 4198400,
          1343488: 4194368,
          1409024: 2147483648,
          1474560: 2147487808,
          1540096: 64,
          1605632: 2147483712,
          1671168: 4096,
          1736704: 2147487744,
          1802240: 2151678016,
          1867776: 4160,
          1933312: 2151682048,
          1998848: 4194304,
          2064384: 4198464
        }, {
          0: 128,
          4096: 17039360,
          8192: 262144,
          12288: 536870912,
          16384: 537133184,
          20480: 16777344,
          24576: 553648256,
          28672: 262272,
          32768: 16777216,
          36864: 537133056,
          40960: 536871040,
          45056: 553910400,
          49152: 553910272,
          53248: 0,
          57344: 17039488,
          61440: 553648128,
          2048: 17039488,
          6144: 553648256,
          10240: 128,
          14336: 17039360,
          18432: 262144,
          22528: 537133184,
          26624: 553910272,
          30720: 536870912,
          34816: 537133056,
          38912: 0,
          43008: 553910400,
          47104: 16777344,
          51200: 536871040,
          55296: 553648128,
          59392: 16777216,
          63488: 262272,
          65536: 262144,
          69632: 128,
          73728: 536870912,
          77824: 553648256,
          81920: 16777344,
          86016: 553910272,
          90112: 537133184,
          94208: 16777216,
          98304: 553910400,
          102400: 553648128,
          106496: 17039360,
          110592: 537133056,
          114688: 262272,
          118784: 536871040,
          122880: 0,
          126976: 17039488,
          67584: 553648256,
          71680: 16777216,
          75776: 17039360,
          79872: 537133184,
          83968: 536870912,
          88064: 17039488,
          92160: 128,
          96256: 553910272,
          100352: 262272,
          104448: 553910400,
          108544: 0,
          112640: 553648128,
          116736: 16777344,
          120832: 262144,
          124928: 537133056,
          129024: 536871040
        }, {
          0: 268435464,
          256: 8192,
          512: 270532608,
          768: 270540808,
          1024: 268443648,
          1280: 2097152,
          1536: 2097160,
          1792: 268435456,
          2048: 0,
          2304: 268443656,
          2560: 2105344,
          2816: 8,
          3072: 270532616,
          3328: 2105352,
          3584: 8200,
          3840: 270540800,
          128: 270532608,
          384: 270540808,
          640: 8,
          896: 2097152,
          1152: 2105352,
          1408: 268435464,
          1664: 268443648,
          1920: 8200,
          2176: 2097160,
          2432: 8192,
          2688: 268443656,
          2944: 270532616,
          3200: 0,
          3456: 270540800,
          3712: 2105344,
          3968: 268435456,
          4096: 268443648,
          4352: 270532616,
          4608: 270540808,
          4864: 8200,
          5120: 2097152,
          5376: 268435456,
          5632: 268435464,
          5888: 2105344,
          6144: 2105352,
          6400: 0,
          6656: 8,
          6912: 270532608,
          7168: 8192,
          7424: 268443656,
          7680: 270540800,
          7936: 2097160,
          4224: 8,
          4480: 2105344,
          4736: 2097152,
          4992: 268435464,
          5248: 268443648,
          5504: 8200,
          5760: 270540808,
          6016: 270532608,
          6272: 270540800,
          6528: 270532616,
          6784: 8192,
          7040: 2105352,
          7296: 2097160,
          7552: 0,
          7808: 268435456,
          8064: 268443656
        }, {
          0: 1048576,
          16: 33555457,
          32: 1024,
          48: 1049601,
          64: 34604033,
          80: 0,
          96: 1,
          112: 34603009,
          128: 33555456,
          144: 1048577,
          160: 33554433,
          176: 34604032,
          192: 34603008,
          208: 1025,
          224: 1049600,
          240: 33554432,
          8: 34603009,
          24: 0,
          40: 33555457,
          56: 34604032,
          72: 1048576,
          88: 33554433,
          104: 33554432,
          120: 1025,
          136: 1049601,
          152: 33555456,
          168: 34603008,
          184: 1048577,
          200: 1024,
          216: 34604033,
          232: 1,
          248: 1049600,
          256: 33554432,
          272: 1048576,
          288: 33555457,
          304: 34603009,
          320: 1048577,
          336: 33555456,
          352: 34604032,
          368: 1049601,
          384: 1025,
          400: 34604033,
          416: 1049600,
          432: 1,
          448: 0,
          464: 34603008,
          480: 33554433,
          496: 1024,
          264: 1049600,
          280: 33555457,
          296: 34603009,
          312: 1,
          328: 33554432,
          344: 1048576,
          360: 1025,
          376: 34604032,
          392: 33554433,
          408: 34603008,
          424: 0,
          440: 34604033,
          456: 1049601,
          472: 1024,
          488: 33555456,
          504: 1048577
        }, {
          0: 134219808,
          1: 131072,
          2: 134217728,
          3: 32,
          4: 131104,
          5: 134350880,
          6: 134350848,
          7: 2048,
          8: 134348800,
          9: 134219776,
          10: 133120,
          11: 134348832,
          12: 2080,
          13: 0,
          14: 134217760,
          15: 133152,
          2147483648: 2048,
          2147483649: 134350880,
          2147483650: 134219808,
          2147483651: 134217728,
          2147483652: 134348800,
          2147483653: 133120,
          2147483654: 133152,
          2147483655: 32,
          2147483656: 134217760,
          2147483657: 2080,
          2147483658: 131104,
          2147483659: 134350848,
          2147483660: 0,
          2147483661: 134348832,
          2147483662: 134219776,
          2147483663: 131072,
          16: 133152,
          17: 134350848,
          18: 32,
          19: 2048,
          20: 134219776,
          21: 134217760,
          22: 134348832,
          23: 131072,
          24: 0,
          25: 131104,
          26: 134348800,
          27: 134219808,
          28: 134350880,
          29: 133120,
          30: 2080,
          31: 134217728,
          2147483664: 131072,
          2147483665: 2048,
          2147483666: 134348832,
          2147483667: 133152,
          2147483668: 32,
          2147483669: 134348800,
          2147483670: 134217728,
          2147483671: 134219808,
          2147483672: 134350880,
          2147483673: 134217760,
          2147483674: 134219776,
          2147483675: 0,
          2147483676: 133120,
          2147483677: 2080,
          2147483678: 131104,
          2147483679: 134350848
        } ];
        var SBOX_MASK = [ 4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679 ];
        var DES = C_algo.DES = BlockCipher.extend({
          _doReset: function() {
            var key = this._key;
            var keyWords = key.words;
            var keyBits = [];
            for (var i = 0; i < 56; i++) {
              var keyBitPos = PC1[i] - 1;
              keyBits[i] = keyWords[keyBitPos >>> 5] >>> 31 - keyBitPos % 32 & 1;
            }
            var subKeys = this._subKeys = [];
            for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
              var subKey = subKeys[nSubKey] = [];
              var bitShift = BIT_SHIFTS[nSubKey];
              for (var i = 0; i < 24; i++) {
                subKey[i / 6 | 0] |= keyBits[(PC2[i] - 1 + bitShift) % 28] << 31 - i % 6;
                subKey[4 + (i / 6 | 0)] |= keyBits[28 + (PC2[i + 24] - 1 + bitShift) % 28] << 31 - i % 6;
              }
              subKey[0] = subKey[0] << 1 | subKey[0] >>> 31;
              for (var i = 1; i < 7; i++) subKey[i] = subKey[i] >>> 4 * (i - 1) + 3;
              subKey[7] = subKey[7] << 5 | subKey[7] >>> 27;
            }
            var invSubKeys = this._invSubKeys = [];
            for (var i = 0; i < 16; i++) invSubKeys[i] = subKeys[15 - i];
          },
          encryptBlock: function(M, offset) {
            this._doCryptBlock(M, offset, this._subKeys);
          },
          decryptBlock: function(M, offset) {
            this._doCryptBlock(M, offset, this._invSubKeys);
          },
          _doCryptBlock: function(M, offset, subKeys) {
            this._lBlock = M[offset];
            this._rBlock = M[offset + 1];
            exchangeLR.call(this, 4, 252645135);
            exchangeLR.call(this, 16, 65535);
            exchangeRL.call(this, 2, 858993459);
            exchangeRL.call(this, 8, 16711935);
            exchangeLR.call(this, 1, 1431655765);
            for (var round = 0; round < 16; round++) {
              var subKey = subKeys[round];
              var lBlock = this._lBlock;
              var rBlock = this._rBlock;
              var f = 0;
              for (var i = 0; i < 8; i++) f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
              this._lBlock = rBlock;
              this._rBlock = lBlock ^ f;
            }
            var t = this._lBlock;
            this._lBlock = this._rBlock;
            this._rBlock = t;
            exchangeLR.call(this, 1, 1431655765);
            exchangeRL.call(this, 8, 16711935);
            exchangeRL.call(this, 2, 858993459);
            exchangeLR.call(this, 16, 65535);
            exchangeLR.call(this, 4, 252645135);
            M[offset] = this._lBlock;
            M[offset + 1] = this._rBlock;
          },
          keySize: 2,
          ivSize: 2,
          blockSize: 2
        });
        function exchangeLR(offset, mask) {
          var t = (this._lBlock >>> offset ^ this._rBlock) & mask;
          this._rBlock ^= t;
          this._lBlock ^= t << offset;
        }
        function exchangeRL(offset, mask) {
          var t = (this._rBlock >>> offset ^ this._lBlock) & mask;
          this._lBlock ^= t;
          this._rBlock ^= t << offset;
        }
        C.DES = BlockCipher._createHelper(DES);
        var TripleDES = C_algo.TripleDES = BlockCipher.extend({
          _doReset: function() {
            var key = this._key;
            var keyWords = key.words;
            if (2 !== keyWords.length && 4 !== keyWords.length && keyWords.length < 6) throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var key1 = keyWords.slice(0, 2);
            var key2 = keyWords.length < 4 ? keyWords.slice(0, 2) : keyWords.slice(2, 4);
            var key3 = keyWords.length < 6 ? keyWords.slice(0, 2) : keyWords.slice(4, 6);
            this._des1 = DES.createEncryptor(WordArray.create(key1));
            this._des2 = DES.createEncryptor(WordArray.create(key2));
            this._des3 = DES.createEncryptor(WordArray.create(key3));
          },
          encryptBlock: function(M, offset) {
            this._des1.encryptBlock(M, offset);
            this._des2.decryptBlock(M, offset);
            this._des3.encryptBlock(M, offset);
          },
          decryptBlock: function(M, offset) {
            this._des3.decryptBlock(M, offset);
            this._des2.encryptBlock(M, offset);
            this._des1.decryptBlock(M, offset);
          },
          keySize: 6,
          ivSize: 2,
          blockSize: 2
        });
        C.TripleDES = BlockCipher._createHelper(TripleDES);
      })();
      return CryptoJS.TripleDES;
    });
  }, {
    "./cipher-core": 4,
    "./core": 5,
    "./enc-base64": 6,
    "./evpkdf": 9,
    "./md5": 14
  } ],
  37: [ function(require, module, exports) {
    (function(root, factory) {
      "object" === typeof exports ? module.exports = exports = factory(require("./core")) : "function" === typeof define && define.amd ? define([ "./core" ], factory) : factory(root.CryptoJS);
    })(this, function(CryptoJS) {
      (function(undefined) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var X32WordArray = C_lib.WordArray;
        var C_x64 = C.x64 = {};
        var X64Word = C_x64.Word = Base.extend({
          init: function(high, low) {
            this.high = high;
            this.low = low;
          }
        });
        var X64WordArray = C_x64.WordArray = Base.extend({
          init: function(words, sigBytes) {
            words = this.words = words || [];
            this.sigBytes = sigBytes != undefined ? sigBytes : 8 * words.length;
          },
          toX32: function() {
            var x64Words = this.words;
            var x64WordsLength = x64Words.length;
            var x32Words = [];
            for (var i = 0; i < x64WordsLength; i++) {
              var x64Word = x64Words[i];
              x32Words.push(x64Word.high);
              x32Words.push(x64Word.low);
            }
            return X32WordArray.create(x32Words, this.sigBytes);
          },
          clone: function() {
            var clone = Base.clone.call(this);
            var words = clone.words = this.words.slice(0);
            var wordsLength = words.length;
            for (var i = 0; i < wordsLength; i++) words[i] = words[i].clone();
            return clone;
          }
        });
      })();
      return CryptoJS;
    });
  }, {
    "./core": 5
  } ],
  38: [ function(require, module, exports) {
    module.exports = require("./lib/heap");
  }, {
    "./lib/heap": 39
  } ],
  39: [ function(require, module, exports) {
    (function() {
      var Heap, defaultCmp, floor, heapify, heappop, heappush, heappushpop, heapreplace, insort, min, nlargest, nsmallest, updateItem, _siftdown, _siftup;
      floor = Math.floor, min = Math.min;
      defaultCmp = function(x, y) {
        if (x < y) return -1;
        if (x > y) return 1;
        return 0;
      };
      insort = function(a, x, lo, hi, cmp) {
        var mid;
        null == lo && (lo = 0);
        null == cmp && (cmp = defaultCmp);
        if (lo < 0) throw new Error("lo must be non-negative");
        null == hi && (hi = a.length);
        while (lo < hi) {
          mid = floor((lo + hi) / 2);
          cmp(x, a[mid]) < 0 ? hi = mid : lo = mid + 1;
        }
        return [].splice.apply(a, [ lo, lo - lo ].concat(x)), x;
      };
      heappush = function(array, item, cmp) {
        null == cmp && (cmp = defaultCmp);
        array.push(item);
        return _siftdown(array, 0, array.length - 1, cmp);
      };
      heappop = function(array, cmp) {
        var lastelt, returnitem;
        null == cmp && (cmp = defaultCmp);
        lastelt = array.pop();
        if (array.length) {
          returnitem = array[0];
          array[0] = lastelt;
          _siftup(array, 0, cmp);
        } else returnitem = lastelt;
        return returnitem;
      };
      heapreplace = function(array, item, cmp) {
        var returnitem;
        null == cmp && (cmp = defaultCmp);
        returnitem = array[0];
        array[0] = item;
        _siftup(array, 0, cmp);
        return returnitem;
      };
      heappushpop = function(array, item, cmp) {
        var _ref;
        null == cmp && (cmp = defaultCmp);
        if (array.length && cmp(array[0], item) < 0) {
          _ref = [ array[0], item ], item = _ref[0], array[0] = _ref[1];
          _siftup(array, 0, cmp);
        }
        return item;
      };
      heapify = function(array, cmp) {
        var i, _i, _j, _len, _ref, _ref1, _results, _results1;
        null == cmp && (cmp = defaultCmp);
        _ref1 = function() {
          _results1 = [];
          for (var _j = 0, _ref = floor(array.length / 2); 0 <= _ref ? _j < _ref : _j > _ref; 0 <= _ref ? _j++ : _j--) _results1.push(_j);
          return _results1;
        }.apply(this).reverse();
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          i = _ref1[_i];
          _results.push(_siftup(array, i, cmp));
        }
        return _results;
      };
      updateItem = function(array, item, cmp) {
        var pos;
        null == cmp && (cmp = defaultCmp);
        pos = array.indexOf(item);
        if (-1 === pos) return;
        _siftdown(array, 0, pos, cmp);
        return _siftup(array, pos, cmp);
      };
      nlargest = function(array, n, cmp) {
        var elem, result, _i, _len, _ref;
        null == cmp && (cmp = defaultCmp);
        result = array.slice(0, n);
        if (!result.length) return result;
        heapify(result, cmp);
        _ref = array.slice(n);
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          elem = _ref[_i];
          heappushpop(result, elem, cmp);
        }
        return result.sort(cmp).reverse();
      };
      nsmallest = function(array, n, cmp) {
        var elem, i, los, result, _i, _j, _len, _ref, _ref1, _results;
        null == cmp && (cmp = defaultCmp);
        if (10 * n <= array.length) {
          result = array.slice(0, n).sort(cmp);
          if (!result.length) return result;
          los = result[result.length - 1];
          _ref = array.slice(n);
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            elem = _ref[_i];
            if (cmp(elem, los) < 0) {
              insort(result, elem, 0, null, cmp);
              result.pop();
              los = result[result.length - 1];
            }
          }
          return result;
        }
        heapify(array, cmp);
        _results = [];
        for (i = _j = 0, _ref1 = min(n, array.length); 0 <= _ref1 ? _j < _ref1 : _j > _ref1; i = 0 <= _ref1 ? ++_j : --_j) _results.push(heappop(array, cmp));
        return _results;
      };
      _siftdown = function(array, startpos, pos, cmp) {
        var newitem, parent, parentpos;
        null == cmp && (cmp = defaultCmp);
        newitem = array[pos];
        while (pos > startpos) {
          parentpos = pos - 1 >> 1;
          parent = array[parentpos];
          if (cmp(newitem, parent) < 0) {
            array[pos] = parent;
            pos = parentpos;
            continue;
          }
          break;
        }
        return array[pos] = newitem;
      };
      _siftup = function(array, pos, cmp) {
        var childpos, endpos, newitem, rightpos, startpos;
        null == cmp && (cmp = defaultCmp);
        endpos = array.length;
        startpos = pos;
        newitem = array[pos];
        childpos = 2 * pos + 1;
        while (childpos < endpos) {
          rightpos = childpos + 1;
          rightpos < endpos && !(cmp(array[childpos], array[rightpos]) < 0) && (childpos = rightpos);
          array[pos] = array[childpos];
          pos = childpos;
          childpos = 2 * pos + 1;
        }
        array[pos] = newitem;
        return _siftdown(array, startpos, pos, cmp);
      };
      Heap = function() {
        Heap.push = heappush;
        Heap.pop = heappop;
        Heap.replace = heapreplace;
        Heap.pushpop = heappushpop;
        Heap.heapify = heapify;
        Heap.updateItem = updateItem;
        Heap.nlargest = nlargest;
        Heap.nsmallest = nsmallest;
        function Heap(cmp) {
          this.cmp = null != cmp ? cmp : defaultCmp;
          this.nodes = [];
        }
        Heap.prototype.push = function(x) {
          return heappush(this.nodes, x, this.cmp);
        };
        Heap.prototype.pop = function() {
          return heappop(this.nodes, this.cmp);
        };
        Heap.prototype.peek = function() {
          return this.nodes[0];
        };
        Heap.prototype.contains = function(x) {
          return -1 !== this.nodes.indexOf(x);
        };
        Heap.prototype.replace = function(x) {
          return heapreplace(this.nodes, x, this.cmp);
        };
        Heap.prototype.pushpop = function(x) {
          return heappushpop(this.nodes, x, this.cmp);
        };
        Heap.prototype.heapify = function() {
          return heapify(this.nodes, this.cmp);
        };
        Heap.prototype.updateItem = function(x) {
          return updateItem(this.nodes, x, this.cmp);
        };
        Heap.prototype.clear = function() {
          return this.nodes = [];
        };
        Heap.prototype.empty = function() {
          return 0 === this.nodes.length;
        };
        Heap.prototype.size = function() {
          return this.nodes.length;
        };
        Heap.prototype.clone = function() {
          var heap;
          heap = new Heap();
          heap.nodes = this.nodes.slice(0);
          return heap;
        };
        Heap.prototype.toArray = function() {
          return this.nodes.slice(0);
        };
        Heap.prototype.insert = Heap.prototype.push;
        Heap.prototype.top = Heap.prototype.peek;
        Heap.prototype.front = Heap.prototype.peek;
        Heap.prototype.has = Heap.prototype.contains;
        Heap.prototype.copy = Heap.prototype.clone;
        return Heap;
      }();
      (function(root, factory) {
        return "function" === typeof define && define.amd ? define([], factory) : "object" === typeof exports ? module.exports = factory() : root.Heap = factory();
      })(this, function() {
        return Heap;
      });
    }).call(this);
  }, {} ],
  Game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "25ec9mk/m9A+LyMy0N9H2mE", "Game");
    "use strict";
    function _createForOfIteratorHelperLoose(o, allowArrayLike) {
      var it = "undefined" !== typeof Symbol && o[Symbol.iterator] || o["@@iterator"];
      if (it) return (it = it.call(o)).next.bind(it);
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && "number" === typeof o.length) {
        it && (o = it);
        var i = 0;
        return function() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if ("string" === typeof o) return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      "Object" === n && o.constructor && (n = o.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(o);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      (null == len || len > arr.length) && (len = arr.length);
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
      return arr2;
    }
    function _wrapNativeSuper(Class) {
      var _cache = "function" === typeof Map ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (null === Class || !_isNativeFunction(Class)) return Class;
        if ("function" !== typeof Class) throw new TypeError("Super expression must either be null or a function");
        if ("undefined" !== typeof _cache) {
          if (_cache.has(Class)) return _cache.get(Class);
          _cache.set(Class, Wrapper);
        }
        function Wrapper() {
          return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class);
      };
      return _wrapNativeSuper(Class);
    }
    function _construct(Parent, args, Class) {
      _construct = _isNativeReflectConstruct() ? Reflect.construct.bind() : function _construct(Parent, args, Class) {
        var a = [ null ];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        Class && _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
      return _construct.apply(null, arguments);
    }
    function _isNativeReflectConstruct() {
      if ("undefined" === typeof Reflect || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if ("function" === typeof Proxy) return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _isNativeFunction(fn) {
      return -1 !== Function.toString.call(fn).indexOf("[native code]");
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return "symbol" === typeof key ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if ("object" !== typeof input || null === input) return input;
      var prim = input[Symbol.toPrimitive];
      if (void 0 !== prim) {
        var res = prim.call(input, hint || "default");
        if ("object" !== typeof res) return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === hint ? String : Number)(input);
    }
    function _assertThisInitialized(self) {
      if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return self;
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
      return _setPrototypeOf(o, p);
    }
    var _require = require("./wheels/interfaces"), Item = _require.Item;
    var Game = function(_Item) {
      _inheritsLoose(Game, _Item);
      function Game(data) {
        var _this;
        void 0 === data && (data = null);
        _this = _Item.call(this) || this;
        _Item.prototype.init.call(_assertThisInitialized(_this), null, false);
        _this.code = 0;
        _this.maxCode = 0;
        _this.currTime = 0;
        _this.recordNum = 0;
        _this.map = new GameMap(_assertThisInitialized(_this));
        _this.listeners = new ListenerDict(_assertThisInitialized(_this));
        _this.endPQ = new EndingPQ(_assertThisInitialized(_this));
        _this.unitDict = new ItemDict(_assertThisInitialized(_this));
        _this.game = _assertThisInitialized(_this);
        if (data) _this.JSONParse(data); else {
          [ new Player(1, _assertThisInitialized(_this)), new Player(2, _assertThisInitialized(_this)), new Player(3, _assertThisInitialized(_this)) ].forEach(function(player, index) {
            player.initialize();
          });
          _this.initialze();
        }
        return _this;
      }
      var _proto = Game.prototype;
      _proto.initialze = function initialze() {
        var dict = this.listeners;
        dict.DamageListeners.push(new HarmImprovingMonitors(this, ENDLESS_TIME));
        dict.DamageListeners.push(new RealDamageLogger(this, ENDLESS_TIME));
        dict.AttackListeners.push(new AttackCriticalMonitors(this, ENDLESS_TIME));
        dict.AttackListeners.push(new AttackDamageExecuter(this, ENDLESS_TIME));
        dict.EnterListeners.push(new RefreshChallengeTimeMonitors(this, ENDLESS_TIME));
        dict.InscopeCalculators.push(new BaseInScopeCalculators(this, ENDLESS_TIME));
        new MiningMonitors(this, ONE_MINUTES);
        new PetConvertingMonitors(this, 5 * ONE_MINUTES);
        new SpellRecoveringMonitors(this, ONE_MINUTES);
        var self = this;
        edgeIndexs().forEach(function(loc, index) {
          var y = loc[0], x = loc[1];
          new BasePet(x, y, self.getPlayer(index % 3 + 1));
        });
      };
      _proto.GenUniqueCode = function GenUniqueCode(item) {
        var code = ++this.maxCode;
        if (item) {
          this.unitDict.set(code, item);
          item.code = code;
        }
        return code;
      };
      _proto.isSleepTime = function isSleepTime() {
        return this.currTime % 1440 < 540;
      };
      _proto.refreshAll = function refreshAll(time) {
        var PQ = this.endPQ;
        while (PQ.peekTime() <= time) {
          this.currTime = PQ.peekTime();
          var _obj = PQ.remove();
          _obj.disabled = true;
          _obj.expire();
        }
        this.logger && this.logger.aggregate();
        this.currTime = time;
      };
      _proto.clearBuff = function clearBuff() {
        var PQ = this.endPQ.PQ;
        PQ.toArray().forEach(function(item) {
          typeDict[item.type].temporary && !item.disabled && item.expire();
        });
      };
      _proto.changeTime = function changeTime(time, player_index) {
        this.currUser = this.getPlayer(player_index);
        this.addLog("\u5728\u65e0\u4eba\u4fee\u884c\u7684\u8fd9\u6bb5\u65f6\u95f4\uff1a", 1);
        this.refreshAll(time);
      };
      _proto.playerEnter = function playerEnter(time, player_index) {
        this.changeTime(time, player_index);
        this.addLog('{"code":' + player_index + "}\u5f00\u59cb\u4fee\u884c", 1);
        this.listeners.EnterListeners.check(this.currUser);
      };
      _proto.setLevel = function setLevel(level) {
        this.addLog('{"code":1,"x":-1,"y":-1},{"code":2,"x":-1,"y":-1},{"code":3,"x":-1,"y":-1}\u6765\u5230\u4e86' + (level + 1) + "\u7ea7\u798f\u5730\uff0c\u51c6\u5907\u5f00\u8d77\u4e00\u6bb5\u65b0\u7684\u5386\u7ec3", 1);
        for (var i = 1; i <= 3; i++) this.getPlayer(i)._level = level + 2;
      };
      _proto.JSONParse = function JSONParse(obj) {
        obj.logger && (this.logger = new BaseLoggers());
        for (var key in obj) {
          var value = obj[key];
          if ("currUser" == key) {
            var player = this.unitDict.get(value);
            this[key] = player;
          } else "object" == typeof value ? this[key].JSONParse(value) : this[key] = value;
        }
        return this;
      };
      _proto.JSONStringify = function JSONStringify() {
        var _this2 = this;
        var res = {};
        [ "unitDict", "maxCode", "map", "listeners", "currTime", "endPQ", "record" ].forEach(function(key) {
          var value = _this2[key];
          res[key] = "object" == typeof value ? value.JSONStringify() : value;
        });
        this.currUser && (res.currUser = this.currUser.code);
        return res;
      };
      _proto.getPlayer = function getPlayer(code) {
        if (code > 3 || code < 1) return;
        var res = this.unitDict.get(code);
        return res;
      };
      _proto.nearest = function nearest(x, y, include) {
        var temp = 9;
        var res = [];
        for (var i = 0; i < MAP_SIZE; i++) for (var j = 0; j < MAP_SIZE; j++) this.map[i][j] && i * MAP_SIZE + j != include[1] * MAP_SIZE + include[0] || getDistance(j, x, i, y) < temp && (res = [ j, i ]);
        return res;
      };
      _proto.initForCocos = function initForCocos() {
        this.logger = new BaseLoggers();
        this.animationPlayer = new AnimationPlayer();
      };
      _proto.addLog = function addLog(sentence, level) {
        if (!this.logger) return;
        this.logger.addLog(this.currTime, level, sentence);
      };
      _proto.logStartInfo = function logStartInfo() {
        this.addLog("\u6709\u4e09\u4f4d\u5251\u5ba2\u5f00\u542f\u4e86\u4e00\u573a\u65b0\u7684\u5386\u7ec3", 1);
      };
      _proto.addAnime = function addAnime(anime, options) {
        if (!this.animationPlayer) return;
        this.animationPlayer.push(anime);
        if (!options) return;
        options.postpone && (this.animationPlayer.postponeFrames += options.postpone);
      };
      _createClass(Game, [ {
        key: "allMapElements",
        get: function get() {
          var res = [];
          this.map.forEach(function(arr) {
            arr.forEach(function(item) {
              item && res.push(item);
            });
          });
          return res;
        }
      } ]);
      return Game;
    }(Item);
    var GameMap = function(_Array) {
      _inheritsLoose(GameMap, _Array);
      function GameMap(owner) {
        var _this3;
        _this3 = _Array.call(this) || this;
        for (var i = 0; i < MAP_SIZE; i++) {
          var arr = [];
          for (var j = 0; j < MAP_SIZE; j++) arr.push(null);
          _this3.push(arr);
        }
        _this3.owner = owner;
        return _this3;
      }
      var _proto2 = GameMap.prototype;
      _proto2.JSONStringify = function JSONStringify() {
        return this.map(function(arr) {
          return arr.map(function(item) {
            return item ? item.code : null;
          });
        });
      };
      _proto2.JSONParse = function JSONParse(obj) {
        var _this4 = this;
        iter_36().forEach(function(loc) {
          var x = loc[0], y = loc[1];
          var code = obj[y][x];
          if (!code) return;
          var item = _this4.owner.unitDict.get(code);
          _this4[y][x] = item;
        });
      };
      return GameMap;
    }(_wrapNativeSuper(Array));
    var ItemDict = function(_Map) {
      _inheritsLoose(ItemDict, _Map);
      function ItemDict(owner) {
        var _this5;
        _this5 = _Map.call(this, [ [ 0, owner ] ]) || this;
        _this5.owner = owner;
        return _this5;
      }
      var _proto3 = ItemDict.prototype;
      _proto3.JSONStringify = function JSONStringify() {
        var unitDict = {};
        for (var _iterator = _createForOfIteratorHelperLoose(this.entries()), _step; !(_step = _iterator()).done; ) {
          var e = _step.value;
          var k = e[0], v = e[1];
          if (v["disabled"] || 0 == k) continue;
          unitDict[k] = v.JSONStringify();
        }
        return unitDict;
      };
      _proto3.JSONParse = function JSONParse(unitDict) {
        for (var k in unitDict) {
          var info = unitDict[k];
          var item = new typeDict[info.type]();
          item.game = this.owner;
          this.set(parseInt(k), item);
        }
        for (var _k in unitDict) {
          var _info = unitDict[_k];
          var _item = this.get(parseInt(_k));
          _item.JSONParse(_info);
        }
      };
      return ItemDict;
    }(_wrapNativeSuper(Map));
    var EndingPQ = function() {
      function EndingPQ(owner) {
        this.PQ = new heap(function(a, b) {
          if (a.end_time == b.end_time) return a.code - b.code;
          return a.end_time - b.end_time;
        });
        this.game = owner;
      }
      var _proto4 = EndingPQ.prototype;
      _proto4.add = function add(obj) {
        this.PQ.push(obj);
      };
      _proto4.peekTime = function peekTime() {
        this.removeTrash();
        return this.PQ.empty() ? Number.MAX_VALUE : this.PQ.peek().end_time;
      };
      _proto4.remove = function remove() {
        this.removeTrash();
        if (this.PQ.empty()) return null;
        return this.PQ.pop();
      };
      _proto4.removeTrash = function removeTrash() {
        while (!this.PQ.empty() && this.PQ.peek().disabled) this.PQ.pop();
      };
      _proto4.JSONStringify = function JSONStringify() {
        var res = [];
        this.PQ.toArray().forEach(function(item) {
          item.disabled || res.push(item.code);
        });
        return res;
      };
      _proto4.JSONParse = function JSONParse(obj) {
        var _this6 = this;
        while (!this.PQ.empty()) this.PQ.pop();
        obj.forEach(function(code) {
          _this6.PQ.push(_this6.game.unitDict.get(code));
        });
      };
      return EndingPQ;
    }();
    module.exports = {
      Game: Game
    };
    var _require2 = require("./Player"), Player = _require2.Player;
    var heap = require("heap");
    var _require3 = require("./listeners/ListenerDict"), ListenerDict = _require3.ListenerDict;
    var _require4 = require("./constants/timeConstants"), ENDLESS_TIME = _require4.ENDLESS_TIME, ONE_HOUR = _require4.ONE_HOUR, ONE_MINUTES = _require4.ONE_MINUTES;
    var _require5 = require("./wheels/common"), getDistance = _require5.getDistance;
    var _require6 = require("./constants/gameConstants"), MAP_SIZE = _require6.MAP_SIZE;
    var _require7 = require("./OriginMonitors"), BaseInScopeCalculators = _require7.BaseInScopeCalculators, GoldCostFloorMonitors = _require7.GoldCostFloorMonitors, MiningMonitors = _require7.MiningMonitors, RefreshChallengeTimeMonitors = _require7.RefreshChallengeTimeMonitors, SpellCostFloorMonitors = _require7.SpellCostFloorMonitors, SpellRecoveringMonitors = _require7.SpellRecoveringMonitors, PetConvertingMonitors = _require7.PetConvertingMonitors;
    var _require8 = require("./wheels/TypeDict"), typeDict = _require8.typeDict;
    var _require9 = require("./utils/iterationUtils"), iter_36 = _require9.iter_36;
    var _require10 = require("./Pets"), BasePet = _require10.BasePet;
    var _require11 = require("./utils/mapUtils"), edgeIndexs = _require11.edgeIndexs;
    var _require12 = require("./listeners/AttackListeners"), AttackCriticalMonitors = _require12.AttackCriticalMonitors, AttackDamageExecuter = _require12.AttackDamageExecuter;
    var _require13 = require("./loggers/baseLoggers"), BaseLoggers = _require13.BaseLoggers;
    var _require14 = require("./listeners/DamageListeners"), HarmImprovingMonitors = _require14.HarmImprovingMonitors, RealDamageLogger = _require14.RealDamageLogger;
    var _require15 = require("./animations/animationPlayer"), AnimationPlayer = _require15.AnimationPlayer;
    var obj = require("../gameLogicRoutes");
    cc._RF.pop();
  }, {
    "../gameLogicRoutes": "gameLogicRoutes",
    "./OriginMonitors": "OriginMonitors",
    "./Pets": "Pets",
    "./Player": "Player",
    "./animations/animationPlayer": "animationPlayer",
    "./constants/gameConstants": "gameConstants",
    "./constants/timeConstants": "timeConstants",
    "./listeners/AttackListeners": "AttackListeners",
    "./listeners/DamageListeners": "DamageListeners",
    "./listeners/ListenerDict": "ListenerDict",
    "./loggers/baseLoggers": "baseLoggers",
    "./utils/iterationUtils": "iterationUtils",
    "./utils/mapUtils": "mapUtils",
    "./wheels/TypeDict": "TypeDict",
    "./wheels/common": "common",
    "./wheels/interfaces": "interfaces",
    heap: 38
  } ],
  Globals: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eb7ef90gU9OsJFFAuV+UkwM", "Globals");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.foreigners = exports.music = exports.decoration = exports.journey = exports.auth = exports.top = exports.user = exports.config = void 0;
    var config = {
      bgm: .7,
      sound: 1,
      playAnimation: true,
      defaultMapScale: .7
    };
    exports.config = config;
    var user = {
      userid: 0,
      iconUrl: "",
      nickname: "\u65e0\u540d\u6c0f",
      newplayer: true,
      game_times: 15,
      win_times: 11,
      gems: 13,
      trophic: 233
    };
    exports.user = user;
    var auth = {
      userid: 273,
      token: "kMgoQ1KnQ8CIz/cfmfhRNQ=="
    };
    exports.auth = auth;
    var journey = {
      rooms: null,
      pastrooms: null,
      tv: null,
      mock: null,
      joined: false
    };
    exports.journey = journey;
    var top = [];
    exports.top = top;
    var decoration = [];
    exports.decoration = decoration;
    var music = {
      playingType: null
    };
    exports.music = music;
    var foreigners = {};
    exports.foreigners = foreigners;
    cc._RF.pop();
  }, {} ],
  ListenerDict: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1ac30qstxdBGbTwMpoEGQY8", "ListenerDict");
    "use strict";
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
      return _setPrototypeOf(o, p);
    }
    var _require = require("./ListenerList"), ListenerList = _require.ListenerList;
    var OperateListeners = function(_ListenerList) {
      _inheritsLoose(OperateListeners, _ListenerList);
      function OperateListeners() {
        return _ListenerList.apply(this, arguments) || this;
      }
      var _proto = OperateListeners.prototype;
      _proto.check = function check(player) {
        _ListenerList.prototype.check.call(this, player);
      };
      return OperateListeners;
    }(ListenerList);
    var ChallengeListeners = function(_ListenerList2) {
      _inheritsLoose(ChallengeListeners, _ListenerList2);
      function ChallengeListeners() {
        return _ListenerList2.apply(this, arguments) || this;
      }
      var _proto2 = ChallengeListeners.prototype;
      _proto2.check = function check(player1, player2) {
        _ListenerList2.prototype.check.call(this, player1, player2);
      };
      return ChallengeListeners;
    }(ListenerList);
    var AttackListeners = function(_ListenerList3) {
      _inheritsLoose(AttackListeners, _ListenerList3);
      function AttackListeners() {
        return _ListenerList3.apply(this, arguments) || this;
      }
      var _proto3 = AttackListeners.prototype;
      _proto3.check = function check(player1, player2, kwargs) {
        void 0 === kwargs && (kwargs = {});
        _ListenerList3.prototype.check.call(this, player1, player2, kwargs);
      };
      return AttackListeners;
    }(ListenerList);
    var DamageListeners = function(_ListenerList4) {
      _inheritsLoose(DamageListeners, _ListenerList4);
      function DamageListeners() {
        return _ListenerList4.apply(this, arguments) || this;
      }
      var _proto4 = DamageListeners.prototype;
      _proto4.check = function check(player1, player2, damage) {
        _ListenerList4.prototype.check.call(this, player1, player2, damage);
      };
      return DamageListeners;
    }(ListenerList);
    var MoveListeners = function(_ListenerList5) {
      _inheritsLoose(MoveListeners, _ListenerList5);
      function MoveListeners() {
        return _ListenerList5.apply(this, arguments) || this;
      }
      var _proto5 = MoveListeners.prototype;
      _proto5.check = function check(player1, x, y) {
        _ListenerList5.prototype.check.call(this, player1, x, y);
      };
      return MoveListeners;
    }(ListenerList);
    var ScopeListeners = function(_ListenerList6) {
      _inheritsLoose(ScopeListeners, _ListenerList6);
      function ScopeListeners() {
        return _ListenerList6.apply(this, arguments) || this;
      }
      var _proto6 = ScopeListeners.prototype;
      _proto6.check = function check(player1, old_num, new_num) {
        _ListenerList6.prototype.check.call(this, player1, old_num, new_num);
      };
      return ScopeListeners;
    }(ListenerList);
    var CoinListeners = function(_ListenerList7) {
      _inheritsLoose(CoinListeners, _ListenerList7);
      function CoinListeners() {
        return _ListenerList7.apply(this, arguments) || this;
      }
      var _proto7 = CoinListeners.prototype;
      _proto7.check = function check(player1, coins) {
        _ListenerList7.prototype.check.call(this, player1, coins);
      };
      return CoinListeners;
    }(ListenerList);
    var EnterListeners = function(_ListenerList8) {
      _inheritsLoose(EnterListeners, _ListenerList8);
      function EnterListeners() {
        return _ListenerList8.apply(this, arguments) || this;
      }
      var _proto8 = EnterListeners.prototype;
      _proto8.check = function check(player) {
        _ListenerList8.prototype.check.call(this, player);
      };
      return EnterListeners;
    }(ListenerList);
    var SpeedListeners = function(_ListenerList9) {
      _inheritsLoose(SpeedListeners, _ListenerList9);
      function SpeedListeners() {
        return _ListenerList9.apply(this, arguments) || this;
      }
      var _proto9 = SpeedListeners.prototype;
      _proto9.check = function check(player, value) {
        _ListenerList9.prototype.check.call(this, player, value);
      };
      return SpeedListeners;
    }(ListenerList);
    var InScopeCalculators = function(_ListenerList10) {
      _inheritsLoose(InScopeCalculators, _ListenerList10);
      function InScopeCalculators() {
        return _ListenerList10.apply(this, arguments) || this;
      }
      var _proto10 = InScopeCalculators.prototype;
      _proto10.check = function check(player) {
        var res = [];
        for (var i = 0; i < gameConstants_1.MAP_SIZE; i++) res.push([]);
        _ListenerList10.prototype.check.call(this, player, res);
        return res;
      };
      return InScopeCalculators;
    }(ListenerList);
    var GoldCostCalculators = function(_ListenerList11) {
      _inheritsLoose(GoldCostCalculators, _ListenerList11);
      function GoldCostCalculators() {
        return _ListenerList11.apply(this, arguments) || this;
      }
      var _proto11 = GoldCostCalculators.prototype;
      _proto11.check = function check(cost, player) {
        _ListenerList11.prototype.check.call(this, cost, player);
      };
      return GoldCostCalculators;
    }(ListenerList);
    var SpellCostCalculators = function(_ListenerList12) {
      _inheritsLoose(SpellCostCalculators, _ListenerList12);
      function SpellCostCalculators() {
        return _ListenerList12.apply(this, arguments) || this;
      }
      var _proto12 = SpellCostCalculators.prototype;
      _proto12.check = function check(info) {
        _ListenerList12.prototype.check.call(this, info);
      };
      return SpellCostCalculators;
    }(ListenerList);
    var GeoSignListeners = function(_ListenerList13) {
      _inheritsLoose(GeoSignListeners, _ListenerList13);
      function GeoSignListeners() {
        return _ListenerList13.apply(this, arguments) || this;
      }
      var _proto13 = GeoSignListeners.prototype;
      _proto13.check = function check(player, incur) {
        _ListenerList13.prototype.check.call(this, player, incur);
      };
      return GeoSignListeners;
    }(ListenerList);
    var ListenerDict = function() {
      function ListenerDict(game) {
        this.OperateListeners = new OperateListeners();
        this.ChallengeListeners = new ChallengeListeners();
        this.AttackListeners = new AttackListeners();
        this.DamageListeners = new DamageListeners();
        this.MoveListeners = new MoveListeners();
        this.ScopeListeners = new ScopeListeners();
        this.CoinListeners = new CoinListeners();
        this.EnterListeners = new EnterListeners();
        this.SpeedListeners = new SpeedListeners();
        this.InscopeCalculators = new InScopeCalculators();
        this.GoldCostCalculators = new GoldCostCalculators();
        this.SpellCostCalculators = new SpellCostCalculators();
        this.GeoSignListeners = new GeoSignListeners();
        for (var key in this) {
          if (!key.endsWith("Listeners") && !key.endsWith("Calculators")) continue;
          var listener = this[key];
          listener.game = game;
          listener.init();
        }
      }
      var _proto14 = ListenerDict.prototype;
      _proto14.JSONStringify = function JSONStringify() {
        var res = {};
        for (var k in this) {
          var key = k.toString();
          var value = this[key];
          value instanceof ListenerList && (res[key] = value.JSONStringify());
        }
        return res;
      };
      _proto14.JSONParse = function JSONParse(obj) {
        for (var key in obj) this[key].JSONParse(obj[key]);
      };
      return ListenerDict;
    }();
    exports.ListenerDict = ListenerDict;
    var gameConstants_1 = require("../constants/gameConstants");
    cc._RF.pop();
  }, {
    "../constants/gameConstants": "gameConstants",
    "./ListenerList": "ListenerList"
  } ],
  ListenerList: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4c299hJv/dA0b9pLvlq3qNE", "ListenerList");
    "use strict";
    var ListenerList = function() {
      function ListenerList() {
        this.list = new heap(function(a, b) {
          if (a.priority == b.priority) return a.code - b.code;
          return a.priority - b.priority;
        });
      }
      var _proto = ListenerList.prototype;
      _proto.init = function init() {};
      _proto.push = function push(listener) {
        this.list.push(listener);
      };
      _proto.check = function check() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
        var new_list = new heap(function(a, b) {
          return a.priority - b.priority;
        });
        this.list.toArray().forEach(function(item) {
          if (item.disabled) return;
          new_list.push(item);
          item.check.apply(item, args);
        });
        this.list = new_list;
      };
      _proto.JSONStringify = function JSONStringify() {
        return this.list.toArray().filter(function(listener) {
          return !listener.disabled;
        }).map(function(listener) {
          return listener.code;
        });
      };
      _proto.JSONParse = function JSONParse(obj) {
        var _this = this;
        while (!this.list.empty()) this.list.pop();
        obj.forEach(function(code) {
          var listener = _this.game.unitDict.get(code);
          _this.push(listener);
        });
      };
      return ListenerList;
    }();
    module.exports = {
      ListenerList: ListenerList
    };
    var heap = require("heap");
    cc._RF.pop();
  }, {
    heap: 38
  } ],
  ListenerPriorities: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0a932TOLAtDGrrmCJXZBvhA", "ListenerPriorities");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PRIORITY_DICT = void 0;
    var ORDER = [ "\u91cd\u4f24\u72b6\u6001\u4e0b\u4e0d\u53ef\u64cd\u4f5c", "\u64cd\u4f5c\u53e0\u52a0\u9ec4\u91d1\u5c42\u6570", "\u6b8b\u5f71:\u4e24\u6b21\u64cd\u4f5c\u91cd\u7f6e", "Equip9AttackAllListener", "AttackCriticalMonitors", "Equip14DistanceListener", "AttackDamageExecuter", "Equip1AttackSpeedUpListener", "Equip6AttackWeakenListener", "Equip10AddPyroSignListener", "Equip11AddHydroSignListener", "Equip12EnergyRecoveringListener", "RealDamageLogger", "HarmImprovingMonitors", "\u5730\u706b: \u707c\u70e7\u8fdb\u5165\u4f4d\u7f6e\u7684\u89d2\u8272", "\u4f4d\u79fb\u6cd5\u672f:\u65bd\u52a0\u6708\u5f71\u6807\u8bb0", "\u5ba0\u72694: \u653b\u51fb\u8303\u56f4\u6539\u53d8", "\u9ec4\u91d1\u5c42\u6570\u91cd\u7f6e", "\u6b66\u566823: \u91d1\u5e01\u51cf\u4ef7", "\u635f\u5931\u751f\u547d\u503c\u4ee4\u81ea\u8eab\u5b9e\u529b\u589e\u52a0", "\u56de\u590d\u8840\u91cf\u53ef\u4ee5\u63d0\u5347\u6218\u529b", "\u635f\u5931\u751f\u547d\u503c\u540e\u65bd\u52a0\u7206\u7834\u6548\u679c", "\u8840\u91cf\u4f4e\u4e8e\u4e0b\u9650\u5219\u8fdb\u5165\u91cd\u4f24\u72b6\u6001", "GoldCostFloorMonitors", "HydroCoinFreeListener", "SpellCostFloorMonitors", "HydroSpellFreeListener", "\u5723\u57df\u8fc7\u671f\u540e\u53e0\u52a0\u5723\u57df", "\u6bcf\u5c42\u5723\u57df\u53e0\u52a0\u901f\u5ea6" ];
    var PRIORITY_DICT = new Map();
    exports.PRIORITY_DICT = PRIORITY_DICT;
    ORDER.forEach(function(value, index) {
      PRIORITY_DICT[value] = index / ORDER.length;
    });
    cc._RF.pop();
  }, {} ],
  Listeners: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5b0b5B771ZP4YuUqHbo604C", "Listeners");
    "use strict";
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return "symbol" === typeof key ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if ("object" !== typeof input || null === input) return input;
      var prim = input[Symbol.toPrimitive];
      if (void 0 !== prim) {
        var res = prim.call(input, hint || "default");
        if ("object" !== typeof res) return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === hint ? String : Number)(input);
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
      return _setPrototypeOf(o, p);
    }
    var _require = require("../wheels/interfaces"), Item = _require.Item;
    var Listener = function(_Item) {
      _inheritsLoose(Listener, _Item);
      function Listener() {
        return _Item.apply(this, arguments) || this;
      }
      var _proto = Listener.prototype;
      _proto.init = function init(owner, duration) {
        _Item.prototype.init.call(this, owner.game);
        this.owner = owner;
        this.end_time = this.game.currTime + duration;
        this.game.endPQ.add(this);
      };
      _proto.check = function check() {};
      _proto.checkOwner = function checkOwner(item) {
        return this.owner.code == item.code;
      };
      _proto.expire = function expire() {};
      _proto.end = function end() {};
      _createClass(Listener, [ {
        key: "priority",
        get: function get() {
          return PRIORITY_DICT[this.type];
        }
      } ]);
      return Listener;
    }(Item);
    Listener.category = "listener";
    Listener.uiDisplay = false;
    Listener.description = function(item) {
      return "";
    };
    Listener.temporary = false;
    exports.Listener = Listener;
    var _require2 = require("../listeners/ListenerPriorities"), PRIORITY_DICT = _require2.PRIORITY_DICT;
    cc._RF.pop();
  }, {
    "../listeners/ListenerPriorities": "ListenerPriorities",
    "../wheels/interfaces": "interfaces"
  } ],
  LoadingLogic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "350d3Ry9aVIqJR27fP2H/z1", "LoadingLogic");
    "use strict";
    var _require = require("./Globals"), config = _require.config, auth = _require.auth, user = _require.user;
    var http = require("./http");
    var variables = {
      _loadedProgess: 0
    };
    cc.Class({
      extends: cc.Component,
      properties: {
        tipLabel: cc.Label,
        label: cc.Label,
        byteProgress: cc.ProgressBar,
        _stateStr: "",
        _progress: 0,
        _splash: null,
        _isLoading: false
      },
      onLoad: function onLoad() {
        if (!cc.sys.isNative && cc.sys.isMobile) {
          var cvs = this.node.getComponent(cc.Canvas);
          cvs.fitHeight = true;
          cvs.fitWidth = true;
        }
        var localConfig = JSON.parse(cc.sys.localStorage.getItem("config"));
        Object.assign(config, localConfig);
        this._splash = cc.find("\u521d\u59cb\u753b\u9762/logo");
        cc.find("\u521d\u59cb\u753b\u9762").active = true;
        this.nextSceneName = null;
      },
      start: function start() {
        var self = this;
        var SHOW_TIME = 1e3;
        var FADE_TIME = 500;
        var t = Date.now();
        var fn = function fn() {
          var dt = Date.now() - t;
          if (dt < SHOW_TIME) setTimeout(fn, 33); else {
            var op = 255 * (1 - (dt - SHOW_TIME) / FADE_TIME);
            if (op < 0) {
              self._splash.opacity = 0;
              cc.find("\u521d\u59cb\u753b\u9762").active = false;
              self.Loading();
            } else {
              self._splash.opacity = op;
              setTimeout(fn, 33);
            }
          }
        };
        setTimeout(fn, 33);
        setTimeout(self.loadResources, 0);
        self.checkLoginStatus();
      },
      loadResources: function loadResources() {
        var files = cc.resources.getDirWithPath("", cc.Asset).map(function(item) {
          var type;
          var path = item.path;
          type = path.startsWith("fonts") ? cc.Font : path.startsWith("audio") ? cc.AudioClip : cc.SpriteFrame;
          return {
            type: type,
            path: path
          };
        });
        var size = files.length;
        var loadedNum = 0;
        files.forEach(function(item) {
          return cc.resources.load(item.path, item.type, function(err, res) {
            loadedNum++;
            variables._loadedProgess = loadedNum / size;
            res.addRef();
          });
        });
      },
      Loading: function Loading() {
        this.byteProgress.progress = 0;
        var self = this;
        var fn2 = function fn2() {
          var _loadedProgess = variables._loadedProgess ? variables._loadedProgess : 1;
          if (!self.byteProgress) return;
          var progress = self.byteProgress.progress;
          progress >= 1 && cc.director.loadScene(self.nextSceneName);
          if (progress < _loadedProgess && (progress < .9 || self.nextSceneName)) {
            progress += .01;
            self.byteProgress.progress = progress;
            self.label.string = Math.round(100 * progress) + "%";
          }
          setTimeout(fn2, 10);
        };
        setTimeout(fn2, 10);
      },
      checkLoginStatus: function checkLoginStatus() {
        var self = this;
        var authInfo = cc.sys.localStorage.getItem("auth");
        if (authInfo) {
          Object.assign(auth, JSON.parse(authInfo));
          http.sendGetForms("account/checkLoginStatus", {}, function(response) {
            console.log(response);
            Object.assign(user, response);
            self.nextSceneName = "hall";
          }, {
            noLoadingView: true
          });
        } else this.nextSceneName = "Login";
      }
    });
    cc._RF.pop();
  }, {
    "./Globals": "Globals",
    "./http": "http"
  } ],
  Login: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "de54fUXrzNHb6yGSFmWduIa", "Login");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Globals_1 = require("./Globals");
    var http_1 = require("./http");
    var uiUtils_1 = require("./otherComponents/uiUtils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      NewClass.prototype.start = function() {};
      NewClass.prototype.Login = function() {
        switch (cc.sys.os) {
         case cc.sys.OS_ANDROID:
          this.loginByAndroid();
          break;

         case cc.sys.OS_IOS:
          this.loginByIOS();
          break;

         default:
          this.loginTestAccount();
        }
      };
      NewClass.prototype.loginByAndroid = function() {
        var _this = this;
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/TaptapLoginActivity", "taptapLogin", "()V");
        var fn = function() {
          var o = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/TaptapLoginActivity", "getLoginInfo", "()Ljava/lang/String;");
          if (!o || 0 == o.length) {
            setTimeout(fn, 200);
            return;
          }
          try {
            var obj = JSON.parse(o);
            _this.loginByAccessKey(obj.kid, obj.macKey);
          } catch (err) {
            uiUtils_1.danMu("\u767b\u5f55\u5931\u8d25");
          }
        };
        setTimeout(fn, 200);
      };
      NewClass.prototype.loginByIOS = function() {};
      NewClass.prototype.loginTestAccount = function() {};
      NewClass.prototype.loginByAccessKey = function(access_token, mac_key) {
        http_1.sendPostForms("/account/login/taptap", {
          accessToken: access_token,
          macKey: mac_key
        }, function(response) {
          Object.assign(Globals_1.user, response.data);
          Globals_1.auth.token = response.token;
          Globals_1.auth.userid = Globals_1.user.userid;
          cc.sys.localStorage.setItem("auth", JSON.stringify(Globals_1.auth));
          cc.director.loadScene("hall");
        });
      };
      NewClass.prototype.update = function(dt) {};
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "./Globals": "Globals",
    "./http": "http",
    "./otherComponents/uiUtils": "uiUtils"
  } ],
  OriginMonitors: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "97ec0oDIIFITJsM7SKglTEN", "OriginMonitors");
    "use strict";
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
      return _setPrototypeOf(o, p);
    }
    var _require = require("./templates/Listeners"), Listener = _require.Listener;
    var MiningMonitors = function(_Listener) {
      _inheritsLoose(MiningMonitors, _Listener);
      function MiningMonitors() {
        return _Listener.apply(this, arguments) || this;
      }
      var _proto = MiningMonitors.prototype;
      _proto.expire = function expire() {
        for (var i = 1; i <= 3; i++) {
          var player = this.game.getPlayer(i);
          player.changeCoins(new Coin({
            baseCoins: 2
          }));
        }
        new MiningMonitors(this.game, ONE_MINUTES);
      };
      return MiningMonitors;
    }(Listener);
    var PetConvertingMonitors = function(_Listener2) {
      _inheritsLoose(PetConvertingMonitors, _Listener2);
      function PetConvertingMonitors() {
        return _Listener2.apply(this, arguments) || this;
      }
      var _proto2 = PetConvertingMonitors.prototype;
      _proto2.expire = function expire() {
        this.game.allMapElements.forEach(function(creature) {
          if ("Player" != creature.type) {
            if (!creature.mining_type) return;
            if (creature.owner.coins.baseCoins < 2) return;
            creature.owner.changeCoins(new Coin({
              baseCoins: -2
            }));
            creature.mining_num[creature.mining_type] += 2;
          }
        });
        new PetConvertingMonitors(this.game, 5 * ONE_MINUTES);
      };
      return PetConvertingMonitors;
    }(Listener);
    var SpellRecoveringMonitors = function(_Listener3) {
      _inheritsLoose(SpellRecoveringMonitors, _Listener3);
      function SpellRecoveringMonitors() {
        return _Listener3.apply(this, arguments) || this;
      }
      var _proto3 = SpellRecoveringMonitors.prototype;
      _proto3.expire = function expire() {
        for (var i = 1; i <= 3; i++) {
          var player = this.game.getPlayer(i);
          player.energy = Math.min(player.energy + 3, 1e3);
        }
        new SpellRecoveringMonitors(this.game, ONE_MINUTES);
      };
      return SpellRecoveringMonitors;
    }(Listener);
    var RefreshChallengeTimeMonitors = function(_Listener4) {
      _inheritsLoose(RefreshChallengeTimeMonitors, _Listener4);
      function RefreshChallengeTimeMonitors() {
        return _Listener4.apply(this, arguments) || this;
      }
      var _proto4 = RefreshChallengeTimeMonitors.prototype;
      _proto4.init = function init() {
        _Listener4.prototype.init.apply(this, arguments);
        this.challenge_time = [ 0, 3, 3, 3 ];
      };
      _proto4.check = function check(player) {
        player.challenge_times = this.challenge_time[player.code];
      };
      return RefreshChallengeTimeMonitors;
    }(Listener);
    var BaseInScopeCalculators = function(_Listener5) {
      _inheritsLoose(BaseInScopeCalculators, _Listener5);
      function BaseInScopeCalculators() {
        return _Listener5.apply(this, arguments) || this;
      }
      var _proto5 = BaseInScopeCalculators.prototype;
      _proto5.check = function check(player, grids) {
        this.game.allMapElements.filter(function(e) {
          var x = e.x, y = e.y;
          if ((x - player.x) * (x - player.x) + (y - player.y) * (y - player.y) > player.scope * player.scope) return;
          if (e.code == player.code) return;
          grids[y][x] = true;
        });
      };
      return BaseInScopeCalculators;
    }(Listener);
    var GoldCostFloorMonitors = function(_Listener6) {
      _inheritsLoose(GoldCostFloorMonitors, _Listener6);
      function GoldCostFloorMonitors() {
        return _Listener6.apply(this, arguments) || this;
      }
      var _proto6 = GoldCostFloorMonitors.prototype;
      _proto6.init = function init() {
        _Listener6.prototype.init.apply(this, arguments);
        this.description = "\u552e\u4ef7\u4e0d\u4f1a\u4f4e\u4e8e5";
      };
      _proto6.check = function check(info) {
        info.cost = Math.max(5, info.cost);
      };
      return GoldCostFloorMonitors;
    }(Listener);
    var SpellCostFloorMonitors = function(_Listener7) {
      _inheritsLoose(SpellCostFloorMonitors, _Listener7);
      function SpellCostFloorMonitors() {
        return _Listener7.apply(this, arguments) || this;
      }
      var _proto7 = SpellCostFloorMonitors.prototype;
      _proto7.init = function init() {
        _Listener7.prototype.init.apply(this, arguments);
        this.description = "\u6cd5\u672f\u6d88\u8017\u4e0d\u4f1a\u4f4e\u4e8e5";
      };
      _proto7.check = function check(info) {
        info.cost = Math.max(5, info.cost);
      };
      return SpellCostFloorMonitors;
    }(Listener);
    module.exports = {
      MiningMonitors: MiningMonitors,
      PetConvertingMonitors: PetConvertingMonitors,
      SpellRecoveringMonitors: SpellRecoveringMonitors,
      RefreshChallengeTimeMonitors: RefreshChallengeTimeMonitors,
      BaseInScopeCalculators: BaseInScopeCalculators,
      GoldCostFloorMonitors: GoldCostFloorMonitors,
      SpellCostFloorMonitors: SpellCostFloorMonitors
    };
    var _require2 = require("./objects/Coin"), Coin = _require2.Coin;
    var _require3 = require("./constants/timeConstants"), ONE_MINUTES = _require3.ONE_MINUTES;
    cc._RF.pop();
  }, {
    "./constants/timeConstants": "timeConstants",
    "./objects/Coin": "Coin",
    "./templates/Listeners": "Listeners"
  } ],
  PetsItems: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4587cGNr21IDLqcrYFE7ujn", "PetsItems");
    "use strict";
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
      return _setPrototypeOf(o, p);
    }
    var _require = require("../Creature"), Creature = _require.Creature;
    var _require2 = require("../objects/Coin"), Coin = _require2.Coin;
    var PetsItems = function(_Creature) {
      _inheritsLoose(PetsItems, _Creature);
      function PetsItems() {
        return _Creature.apply(this, arguments) || this;
      }
      var _proto = PetsItems.prototype;
      _proto.init = function init(x, y, owner) {
        _Creature.prototype.init.call(this, x, y, owner.game);
        this.owner = owner;
        this.mining_num = new Coin({});
      };
      _proto.harvest = function harvest() {
        this.owner.changeCoins(this.mining_num);
        this.mining_num = new Coin({});
      };
      _proto.JSONParse = function JSONParse(info) {
        _Creature.prototype.JSONParse.call(this, info);
        this.mining_num = new Coin(this.mining_num);
      };
      return PetsItems;
    }(Creature);
    PetsItems.id = -1;
    PetsItems.valid = true;
    PetsItems.pet_name = "";
    PetsItems.category = "pet";
    PetsItems.price = new Coin({
      baseCoins: 114514
    });
    PetsItems.energy_cost = 50;
    PetsItems.description = function() {
      return "";
    };
    PetsItems.uiDisplay = true;
    PetsItems.overviewDisplay = true;
    PetsItems.iconUrl = "";
    exports.PetsItems = PetsItems;
    cc._RF.pop();
  }, {
    "../Creature": "Creature",
    "../objects/Coin": "Coin"
  } ],
  Pets: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "85b4fyYdp5Ef5mCyz14Mjzw", "Pets");
    "use strict";
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
      return _setPrototypeOf(o, p);
    }
    var _require = require("./templates/PetsItems"), PetsItems = _require.PetsItems;
    var _require2 = require("./templates/Listeners"), Listener = _require2.Listener;
    var _require3 = require("./objects/Coin"), Coin = _require3.Coin;
    var BasePet = function(_PetsItems) {
      _inheritsLoose(BasePet, _PetsItems);
      function BasePet() {
        return _PetsItems.apply(this, arguments) || this;
      }
      return BasePet;
    }(PetsItems);
    BasePet.id = 0;
    BasePet.pet_name = "\u5e7b\u68a6\u7075\u72d0";
    BasePet.description = "";
    BasePet.uiDisplay = false;
    BasePet.iconUrl = "pets/\u5e7b\u5f62\u517d.png";
    BasePet.description = function() {
      return "";
    };
    var GeoSignTransferPetsItems = function(_PetsItems2) {
      _inheritsLoose(GeoSignTransferPetsItems, _PetsItems2);
      function GeoSignTransferPetsItems() {
        return _PetsItems2.apply(this, arguments) || this;
      }
      var _proto = GeoSignTransferPetsItems.prototype;
      _proto.init = function init() {
        _PetsItems2.prototype.init.apply(this, arguments);
        this.transfer_time = 0;
      };
      return GeoSignTransferPetsItems;
    }(PetsItems);
    var GeoToAuroPet = function(_GeoSignTransferPetsI) {
      _inheritsLoose(GeoToAuroPet, _GeoSignTransferPetsI);
      function GeoToAuroPet() {
        return _GeoSignTransferPetsI.apply(this, arguments) || this;
      }
      var _proto2 = GeoToAuroPet.prototype;
      _proto2.init = function init(x, y, owner) {
        _GeoSignTransferPetsI.prototype.init.call(this, x, y, owner);
        new GeoSignTransferListener(owner, timeConstants_1.ONE_HOUR, this, 1);
      };
      return GeoToAuroPet;
    }(GeoSignTransferPetsItems);
    GeoToAuroPet.id = 1;
    GeoToAuroPet.pet_name = "\u5764\u91d1\u517d";
    GeoToAuroPet.iconUrl = "pets/\u5764\u91d1\u517d.png";
    GeoToAuroPet.price = new Coin({
      auroCoins: 100
    });
    var GeoToHydroPet = function(_GeoSignTransferPetsI2) {
      _inheritsLoose(GeoToHydroPet, _GeoSignTransferPetsI2);
      function GeoToHydroPet() {
        return _GeoSignTransferPetsI2.apply(this, arguments) || this;
      }
      var _proto3 = GeoToHydroPet.prototype;
      _proto3.init = function init(x, y, owner) {
        _GeoSignTransferPetsI2.prototype.init.call(this, x, y, owner);
        new GeoSignTransferListener(owner, timeConstants_1.ONE_HOUR, this, 1);
      };
      return GeoToHydroPet;
    }(GeoSignTransferPetsItems);
    GeoToHydroPet.id = 2;
    GeoToHydroPet.pet_name = "\u6d41\u6e0a\u517d";
    GeoToHydroPet.iconUrl = "pets/\u6d41\u6e0a\u517d.png";
    GeoToHydroPet.price = new Coin({
      hydroCoins: 100
    });
    var GeoToPyroPet = function(_GeoSignTransferPetsI3) {
      _inheritsLoose(GeoToPyroPet, _GeoSignTransferPetsI3);
      function GeoToPyroPet() {
        return _GeoSignTransferPetsI3.apply(this, arguments) || this;
      }
      var _proto4 = GeoToPyroPet.prototype;
      _proto4.init = function init(x, y, owner) {
        _GeoSignTransferPetsI3.prototype.init.call(this, x, y, owner);
        new GeoSignTransferListener(owner, timeConstants_1.ONE_HOUR, this, 1);
      };
      return GeoToPyroPet;
    }(GeoSignTransferPetsItems);
    GeoToPyroPet.id = 3;
    GeoToPyroPet.pet_name = "\u70ec\u706b\u7075";
    GeoToPyroPet.iconUrl = "pets/\u70ec\u706b\u7075.png";
    GeoToPyroPet.price = new Coin({
      pyroCoins: 100
    });
    var GeoSignTransferListener = function(_Listener) {
      _inheritsLoose(GeoSignTransferListener, _Listener);
      function GeoSignTransferListener() {
        return _Listener.apply(this, arguments) || this;
      }
      var _proto5 = GeoSignTransferListener.prototype;
      _proto5.init = function init(owner, duration, pet, incur) {
        _Listener.prototype.init.call(this, owner, duration);
        this.duration = duration;
        this.pet = pet;
      };
      _proto5.expire = function expire() {
        this.pet.transfer_time += this.incur;
        new GeoSignTransferListener(this.owner, this.duration, this.pet, this.incur);
      };
      return GeoSignTransferListener;
    }(Listener);
    var AddGeoPet = function(_PetsItems3) {
      _inheritsLoose(AddGeoPet, _PetsItems3);
      function AddGeoPet() {
        return _PetsItems3.apply(this, arguments) || this;
      }
      var _proto6 = AddGeoPet.prototype;
      _proto6.init = function init(x, y, owner) {
        _PetsItems3.prototype.init.call(this, x, y, owner);
        this.listener = new AddGeoPetListener(owner, timeConstants_1.ENDLESS_TIME);
        this.game.listeners.GeoSignListeners.push(this.listener);
      };
      return AddGeoPet;
    }(PetsItems);
    AddGeoPet.id = 4;
    AddGeoPet.pet_name = "\u571f\u8574\u7075\u7280";
    AddGeoPet.iconUrl = "pets/\u571f\u7eb9\u7075\u7280.png";
    AddGeoPet.price = new Coin({
      geoCoins: 100
    });
    var AddGeoPetListener = function(_Listener2) {
      _inheritsLoose(AddGeoPetListener, _Listener2);
      function AddGeoPetListener() {
        return _Listener2.apply(this, arguments) || this;
      }
      var _proto7 = AddGeoPetListener.prototype;
      _proto7.init = function init() {
        _Listener2.prototype.init.apply(this, arguments);
        this.count = 0;
      };
      _proto7.check = function check(player, incur) {
        if (player.code != this.owner.code) return;
        this.count += incur;
        if (this.count >= 7) {
          this.count -= 7;
          player._geoSign++;
        }
      };
      return AddGeoPetListener;
    }(Listener);
    var AddHydroPet = function(_PetsItems4) {
      _inheritsLoose(AddHydroPet, _PetsItems4);
      function AddHydroPet() {
        return _PetsItems4.apply(this, arguments) || this;
      }
      var _proto8 = AddHydroPet.prototype;
      _proto8.init = function init(x, y, owner) {
        _PetsItems4.prototype.init.call(this, x, y, owner);
        this.game.listeners.EnterListeners.push(new AddHydroPetListener(this, timeConstants_1.ENDLESS_TIME));
      };
      return AddHydroPet;
    }(PetsItems);
    AddHydroPet.id = 5;
    AddHydroPet.pet_name = "\u6c34\u7eb9\u7075\u86df";
    AddHydroPet.iconUrl = "pets/\u6c34\u7eb9\u7075\u86df.png";
    AddHydroPet.price = new Coin({
      hydroCoins: 100
    });
    var AddHydroPetListener = function(_Listener3) {
      _inheritsLoose(AddHydroPetListener, _Listener3);
      function AddHydroPetListener() {
        return _Listener3.apply(this, arguments) || this;
      }
      var _proto9 = AddHydroPetListener.prototype;
      _proto9.check = function check(player) {
        if (player.code != this.owner.owner.code) return;
        this.owner.hydroSign++;
      };
      return AddHydroPetListener;
    }(Listener);
    var AddPyroPet = function(_PetsItems5) {
      _inheritsLoose(AddPyroPet, _PetsItems5);
      function AddPyroPet() {
        return _PetsItems5.apply(this, arguments) || this;
      }
      var _proto10 = AddPyroPet.prototype;
      _proto10.init = function init(x, y, owner) {
        _PetsItems5.prototype.init.call(this, x, y, owner);
        this.game.listeners.EnterListeners.push(new AddPyroPetListener(this, timeConstants_1.ENDLESS_TIME));
      };
      return AddPyroPet;
    }(PetsItems);
    AddPyroPet.id = 6;
    AddPyroPet.pet_name = "\u706b\u821e\u7075\u72d0";
    AddPyroPet.iconUrl = "pets/\u706b\u7eb9\u7075\u72d0.png";
    AddPyroPet.price = new Coin({
      pyroCoins: 100
    });
    var AddPyroPetListener = function(_Listener4) {
      _inheritsLoose(AddPyroPetListener, _Listener4);
      function AddPyroPetListener() {
        return _Listener4.apply(this, arguments) || this;
      }
      var _proto11 = AddPyroPetListener.prototype;
      _proto11.check = function check(player) {
        if (player.code != this.owner.owner.code) return;
        this.owner.pyroSign += 5;
      };
      return AddPyroPetListener;
    }(Listener);
    var DisplacePet = function(_PetsItems6) {
      _inheritsLoose(DisplacePet, _PetsItems6);
      function DisplacePet() {
        return _PetsItems6.apply(this, arguments) || this;
      }
      return DisplacePet;
    }(PetsItems);
    DisplacePet.id = 7;
    DisplacePet.pet_name = "\u5f52\u9014\u7075\u9e64";
    DisplacePet.iconUrl = "pets/\u5f52\u9014\u7075\u9e64.png";
    DisplacePet.price = new Coin({
      hydroCoins: 50
    });
    var AddScopePet = function(_PetsItems7) {
      _inheritsLoose(AddScopePet, _PetsItems7);
      function AddScopePet() {
        return _PetsItems7.apply(this, arguments) || this;
      }
      var _proto12 = AddScopePet.prototype;
      _proto12.init = function init(x, y, owner) {
        _PetsItems7.prototype.init.call(this, x, y, owner);
        this.game.listeners.InscopeCalculators.push(new AddScopePetListener(this, timeConstants_1.ENDLESS_TIME));
      };
      return AddScopePet;
    }(PetsItems);
    AddScopePet.id = 8;
    AddScopePet.pet_name = "\u5fa1\u9635\u4ed9\u7075";
    AddScopePet.iconUrl = "pets/\u5fa1\u9635\u4ed9\u7075.png";
    AddScopePet.price = new Coin({
      auroCoins: 50
    });
    AddScopePet.description = function() {
      return "\u81ea\u8eab3*3\u7684\u8303\u56f4\u5185\u7684\u5355\u4f4d\u4e5f\u5c5e\u4e8e\u4e3b\u4eba\u7684\u653b\u51fb\u8303\u56f4\u5185";
    };
    var AddScopePetListener = function(_Listener5) {
      _inheritsLoose(AddScopePetListener, _Listener5);
      function AddScopePetListener() {
        return _Listener5.apply(this, arguments) || this;
      }
      var _proto13 = AddScopePetListener.prototype;
      _proto13.check = function check(player, res) {
        getLocInScope(this.owner, 1.5).forEach(function(loc) {
          var x = loc[0], y = loc[1];
          res[y][x] = true;
        });
      };
      return AddScopePetListener;
    }(Listener);
    var AddDistanceDamagePet = function(_PetsItems8) {
      _inheritsLoose(AddDistanceDamagePet, _PetsItems8);
      function AddDistanceDamagePet() {
        return _PetsItems8.apply(this, arguments) || this;
      }
      var _proto14 = AddDistanceDamagePet.prototype;
      _proto14.init = function init(x, y, owner) {
        _PetsItems8.prototype.init.call(this, x, y, owner);
        var listener = new AddDistanceDamagePetListener(this, timeConstants_1.ENDLESS_TIME);
        listener.buff = new StrongBuff(owner, timeConstants_1.ENDLESS_TIME, 1);
        listener.check(owner);
        this.game.listeners.MoveListeners.push(listener);
      };
      return AddDistanceDamagePet;
    }(PetsItems);
    AddDistanceDamagePet.id = 10;
    AddDistanceDamagePet.pet_name = "\u9010\u5f71\u7075\u9a79";
    AddDistanceDamagePet.iconUrl = "pets/\u9010\u5f71\u4ed9\u9a79.png";
    AddDistanceDamagePet.price = new Coin({
      auroCoins: 100
    });
    var AddDistanceDamagePetListener = function(_Listener6) {
      _inheritsLoose(AddDistanceDamagePetListener, _Listener6);
      function AddDistanceDamagePetListener() {
        return _Listener6.apply(this, arguments) || this;
      }
      var _proto15 = AddDistanceDamagePetListener.prototype;
      _proto15.check = function check(player1) {
        if (player1.code != this.code || player1.code != this.owner.code) return;
        var distance = this.distance(this.owner);
        var ratio = 1 + .1 * distance;
        this.buff.ratio = ratio;
      };
      return AddDistanceDamagePetListener;
    }(Listener);
    var ChasePet = function(_PetsItems9) {
      _inheritsLoose(ChasePet, _PetsItems9);
      function ChasePet() {
        return _PetsItems9.apply(this, arguments) || this;
      }
      return ChasePet;
    }(PetsItems);
    ChasePet.id = 9;
    ChasePet.pet_name = "\u6b65\u5c18\u4e4b\u5f71";
    ChasePet.iconUrl = "pets/\u6b65\u5c18\u4e4b\u5f71.png";
    ChasePet.price = new Coin({
      pyroCoins: 50
    });
    var ChasePetListener = function(_Listener7) {
      _inheritsLoose(ChasePetListener, _Listener7);
      function ChasePetListener() {
        return _Listener7.apply(this, arguments) || this;
      }
      var _proto16 = ChasePetListener.prototype;
      _proto16.check = function check(player1, x, y) {
        var _this = this;
        if (this.owner.code != player1.code) return;
        var moved = false;
        var map = this.game.map;
        getLocInScope(player1, 1).forEach(function(loc) {
          if (moved) return;
          var x = loc[0], y = loc[1];
          if (map[y][x]) return;
          _this.owner.move(x, y);
          moved = true;
        });
        getLocInScope(player1, 1.5).forEach(function(loc) {
          if (moved) return;
          var x = loc[0], y = loc[1];
          if (map[y][x]) return;
          _this.owner.move(x, y);
          moved = true;
        });
      };
      return ChasePetListener;
    }(Listener);
    module.exports = {
      BasePet: BasePet,
      GeoSignTransferPetsItems: GeoSignTransferPetsItems,
      GeoToAuroPet: GeoToAuroPet,
      GeoToHydroPet: GeoToHydroPet,
      GeoToPyroPet: GeoToPyroPet,
      GeoSignTransferListener: GeoSignTransferListener,
      AddGeoPet: AddGeoPet,
      AddGeoPetListener: AddGeoPetListener,
      AddHydroPet: AddHydroPet,
      AddHydroPetListener: AddHydroPetListener,
      AddPyroPet: AddPyroPet,
      AddPyroPetListener: AddPyroPetListener,
      DisplacePet: DisplacePet,
      AddScopePet: AddScopePet,
      AddScopePetListener: AddScopePetListener,
      AddDistanceDamagePet: AddDistanceDamagePet,
      AddDistanceDamagePetListener: AddDistanceDamagePetListener,
      ChasePet: ChasePet,
      ChasePetListener: ChasePetListener
    };
    var _require4 = require("./wheels/common"), SameLocation = _require4.SameLocation;
    var timeConstants_1 = require("./constants/timeConstants");
    var _require5 = require("./utils/mapUtils"), getLocInScope = _require5.getLocInScope;
    var _require6 = require("./Buffs"), VulnerBuff = _require6.VulnerBuff, StrongBuff = _require6.StrongBuff;
    cc._RF.pop();
  }, {
    "./Buffs": "Buffs",
    "./constants/timeConstants": "timeConstants",
    "./objects/Coin": "Coin",
    "./templates/Listeners": "Listeners",
    "./templates/PetsItems": "PetsItems",
    "./utils/mapUtils": "mapUtils",
    "./wheels/common": "common"
  } ],
  Player: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c34f9wOkrhM37nXIAlS+Z+a", "Player");
    "use strict";
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return "symbol" === typeof key ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if ("object" !== typeof input || null === input) return input;
      var prim = input[Symbol.toPrimitive];
      if (void 0 !== prim) {
        var res = prim.call(input, hint || "default");
        if ("object" !== typeof res) return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === hint ? String : Number)(input);
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
      return _setPrototypeOf(o, p);
    }
    var _require = require("./Creature"), Creature = _require.Creature;
    var xs = [ 2, 3, 4 ];
    var ys = [ 3, 2, 3 ];
    var Player = function(_Creature) {
      _inheritsLoose(Player, _Creature);
      function Player() {
        return _Creature.apply(this, arguments) || this;
      }
      var _proto = Player.prototype;
      _proto.init = function init(code, source) {
        _Creature.prototype.init.call(this, xs[code - 1], ys[code - 1], source);
        this.equipList = [];
        this.spellList = [];
        this.coins = new Coin({
          baseCoins: 100
        });
        this.energy = 100;
        this.grow = 1.025;
      };
      _proto.initialize = function initialize() {
        this.spellList.push(new MoveSpell(this));
      };
      _proto.challenge = function challenge(player2) {
        if (!player2) throw new GameLogicError("\u4e0d\u80fd\u5411\u6ca1\u6709\u5355\u4f4d\u7684\u5730\u65b9\u53d1\u52a8\u653b\u51fb");
        if (this.inScope(player2.x, player2.y)) throw new GameLogicError("\u653b\u51fb\u8ddd\u79bb\u4e0d\u591f");
        if (this.challenge_times <= 0) throw new GameLogicError("\u6311\u6218\u6b21\u6570\u5df2\u7528\u5b8c");
        if (!typeDict[player2.type].challengable) throw new GameLogicError("\u8be5\u5355\u4f4d\u4e0d\u53ef\u653b\u51fb");
        this.game.addLog(logItem(this) + "\u5411" + logItem(player2) + "\u53d1\u8d77\u8bba\u5251", 1);
        this.game.addAnime(new ChallengeAnimation(), {
          postpone: 75
        });
        this.game.listeners.ChallengeListeners.check(this, player2);
        var level1 = this.level, level2 = player2.level;
        var attacks1 = 1, attacks2 = 1;
        while (attacks1 < level1 || attacks2 < level2) {
          this.game.addAnime(new AttackAnimation(77, 77, attacks1 + attacks2 - 2), {
            postpone: 60
          });
          if (attacks2 / level2 < attacks1 / level1) {
            player2.attack(this);
            attacks2++;
          } else {
            this.attack(player2);
            attacks1++;
          }
        }
        return "at00";
      };
      _proto.changeCoins = function changeCoins(coin) {
        this.coins.add(coin);
        logCoinInfo(this, coin);
        this.game.listeners.CoinListeners.check(this, coin);
      };
      _proto.buyEquip = function buyEquip(id) {
        var clazz = Equips[id];
        if (!clazz || !clazz.valid) throw new GameLogicError("\u6b66\u5668\u4e0d\u5b58\u5728");
        var price = this.calculatePrice(clazz.buy_price);
        var energy = this.calculateEnergyCost(clazz.energy_cost);
        if (!this.coins.compare(price)) throw new GameLogicError("\u6750\u6599\u4e0d\u8db3");
        if (this.energy < clazz.energy_cost) throw new GameLogicError("\u5185\u529b\u4e0d\u8db3");
        if (this.findEquip(id)) throw new GameLogicError("\u60a8\u5df2\u8d2d\u4e70\u8be5\u6b66\u5668");
        this.game.addLog('{"code":' + this.code + "}\u8d2d\u4e70\u4e86\u201c" + clazz.equip_name + "\u201d", 1);
        this.energy -= energy;
        this.changeCoins(price.opposite());
        var equip = new clazz(this);
        this.equipList.push(equip);
        equip.upgrade();
        equip.level in clazz.evolve_level && equip.evolve();
      };
      _proto.upgradeEquip = function upgradeEquip(id) {
        var equip = this.findEquip(id);
        if (!equip) throw new GameLogicError("\u6b66\u5668\u4e0d\u5b58\u5728");
        var clazz = Equips[id];
        var price = this.calculatePrice(clazz.upgrade_price);
        var energy = this.calculateEnergyCost(clazz.energy_cost);
        if (!this.coins.compare(price)) throw new GameLogicError("\u6750\u6599\u4e0d\u8db3");
        if (this.energy < energy) throw new GameLogicError("\u5185\u529b\u4e0d\u8db3");
        if (equip.level >= 20) throw new GameLogicError("\u6b66\u5668\u5df2\u6ee1\u7ea7");
        this.game.addLog('{"code":' + this.code + "}\u5347\u7ea7\u4e86\u201c" + clazz.equip_name + "\u201d", 1);
        this.energy -= energy;
        this.changeCoins(price.opposite());
        equip.upgrade();
        equip.level in clazz.evolve_level && equip.evolve();
      };
      _proto.buySpell = function buySpell(id, x, y, extra) {
        var clazz = Spell[id];
        if (!clazz || !clazz.valid) throw new GameLogicError("\u6cd5\u672f\u4e0d\u5b58\u5728");
        var price = this.getSpellPrice(id);
        var energy = this.calculateEnergyCost(clazz.energy_cost);
        if (!this.coins.compare(price)) throw new GameLogicError("\u6750\u6599\u4e0d\u8db3");
        if (this.energy < energy) throw new GameLogicError("\u5185\u529b\u4e0d\u8db3");
        var locStr = x < MAP_SIZE ? "\u5bf9(" + (x + 1) + "," + (MAP_SIZE - y) + ")" : "";
        this.game.addLog('{"code":' + this.code + ',"x":' + this.x + ',"y":' + this.y + "}" + locStr + "\u4f7f\u7528\u4e86\u672f\u6cd5\u201c" + clazz.spellName + "\u201d", 1);
        this.findSpell(id) || this.spellList.push(new clazz(this));
        this.energy -= energy;
        this.changeCoins(price.opposite());
        this.findSpell(id).use(x, y, extra);
      };
      _proto.buyPet = function buyPet(id, x, y) {
        var clazz = Pets[id];
        var pet = this.game.map[y][x];
        if (!clazz || !clazz.valid) throw new GameLogicError("\u5ba0\u7269\u4e0d\u5b58\u5728");
        if (!pet || pet.owner.code != this.code) throw new GameLogicError("\u53ea\u80fd\u5e7b\u5316\u81ea\u5df1\u7684\u7075\u517d");
        var price = this.calculatePrice(clazz.price);
        var energy = this.calculateEnergyCost(clazz.energy_cost);
        if (!this.coins.compare(price)) throw new GameLogicError("\u6750\u6599\u4e0d\u8db3");
        if (this.energy < energy) throw new GameLogicError("\u5185\u529b\u4e0d\u8db3");
        this.energy -= energy;
        this.changeCoins(price.opposite());
        this.game.map[y][x] = null;
        this.game.map[y][x] = new clazz(x, y, this);
        var newPet = this.game.map[y][x];
        newPet.mining_num = new Coin(pet.mining_num);
        newPet.mining_type = pet.mining_type;
        this.game.addLog('{"code":' + this.code + '}\u5c06\u624b\u4e0b\u7075\u517d\u5e7b\u5316\u4e3a\u201c{"code":' + this.game.map[y][x].code + "}\u201d", 1);
      };
      _proto.harvest = function harvest(x, y) {
        var item = this.game.map[y][x];
        if (!item || item.owner.code != this.code) throw new GameLogicError("\u8bf7\u9009\u62e9\u6709\u5df1\u65b9\u7075\u517d\u6240\u5728\u7684\u683c\u5b50");
        this.game.addLog('{"code":' + this.code + '}\u9886\u53d6\u4e86\u624b\u4e0b{"code":' + item.code + "}\u70bc\u5316\u7684\u7075\u77f3", 1);
        item.harvest();
      };
      _proto.changeMiningType = function changeMiningType(x, y, key_id) {
        var item = this.game.map[y][x];
        if (!item || item.owner.code != this.code) throw new GameLogicError("\u8bf7\u9009\u62e9\u6709\u5df1\u65b9\u7075\u517d\u6240\u5728\u7684\u683c\u5b50");
        if (0 != key_id) {
          item.mining_type = COIN_KEYS[key_id];
          this.game.addLog('{"code":' + this.code + '}\u624b\u4e0b{"code":' + item.code + "}\u5f00\u59cb\u70bc\u5316" + COIN_KEYS_NAME_MAP[item.mining_type], 1);
        } else {
          item.mining_type = null;
          this.game.addLog('{"code":' + this.code + '}\u624b\u4e0b{"code":' + item.code + "}\u505c\u6b62\u70bc\u5316\u7075\u77f3", 1);
        }
        item.harvest();
      };
      _proto.bidding = function bidding(val) {
        this.coins.baseCoins -= val;
        this.game.addLog('{"code":' + this.code + "}\u7ade\u4ef7\u82b1\u8d39" + val + "\u9897\u7075\u77f3", 1);
      };
      _proto.findEquip = function findEquip(id) {
        var name = Equips[id].name;
        return this.equipList.find(function(e) {
          return e["type"] == name;
        });
      };
      _proto.findSpell = function findSpell(id) {
        return this.spellList.find(function(e) {
          return typeDict[e["type"]].id == id;
        });
      };
      _proto.getSpellPrice = function getSpellPrice(id) {
        var clazz = Spell[id];
        if (!clazz || !clazz.valid) throw new GameLogicError("\u6cd5\u672f\u4e0d\u5b58\u5728");
        var price = new Coin(clazz.price);
        if (!this.findSpell(id)) {
          var spellNum = 0;
          this.spellList.forEach(function(spell) {
            spellNum += typeDict[spell.type].size;
          });
          spellNum >= 5 && price.add(new Coin({
            baseCoins: 200
          }));
        }
        this.game.listeners.GoldCostCalculators.check(price, this);
        return price;
      };
      _proto.calculatePrice = function calculatePrice(prize) {
        var price = new Coin(prize);
        this.game.listeners.GoldCostCalculators.check(price, this);
        return price;
      };
      _proto.calculateEnergyCost = function calculateEnergyCost(energy) {
        var res = {
          cost: energy
        };
        this.game.listeners.SpellCostCalculators.check(res, this);
        return res.cost;
      };
      _proto.JSONStringify = function JSONStringify() {
        var res = _Creature.prototype.JSONStringify.call(this);
        res.spellList = this.spellList.map(function(spell) {
          return {
            isItem: true,
            code: spell.code
          };
        });
        res.equipList = this.equipList.map(function(equip) {
          return {
            isItem: true,
            code: equip.code
          };
        });
        return res;
      };
      _proto.JSONParse = function JSONParse(info) {
        _Creature.prototype.JSONParse.call(this, info);
        var dict = this.game.unitDict;
        this.spellList = this.spellList.map(function(spell) {
          return dict.get(spell.code);
        });
        this.equipList = this.equipList.map(function(equip) {
          return dict.get(equip.code);
        });
        this.coins = new Coin(this.coins);
      };
      _createClass(Player, [ {
        key: "Pets",
        get: function get() {
          var _this = this;
          return this.game.allMapElements.filter(function(item) {
            return item.owner && item.owner.code == _this.code;
          });
        }
      }, {
        key: "challengeAbleItems",
        get: function get() {
          var _this2 = this;
          return this.itemsInScope().filter(function(item) {
            return item.code != _this2.code && "Player" != item.type;
          }).map(function(item) {
            return [ item.x, item.y ];
          });
        }
      } ]);
      return Player;
    }(Creature);
    Player.challengable = true;
    Player.category = "player";
    exports.Player = Player;
    var _require2 = require("./wheels/common"), GameLogicError = _require2.GameLogicError;
    var _require3 = require("./objects/Coin"), COIN_KEYS = _require3.COIN_KEYS, Coin = _require3.Coin, COIN_KEYS_NAME_MAP = _require3.COIN_KEYS_NAME_MAP;
    var _require4 = require("./Spell"), MoveSpell = _require4.MoveSpell;
    var _require5 = require("./wheels/TypeDict"), typeDict = _require5.typeDict, Pets = _require5.Pets, Equips = _require5.Equips, Spell = _require5.Spell;
    var _require6 = require("./templates/SpellItems"), SpellItem = _require6.SpellItem;
    var _require7 = require("./templates/EquipItems"), EquipItems = _require7.EquipItems;
    var _require8 = require("./loggers/logUtils"), logCoinInfo = _require8.logCoinInfo, logItem = _require8.logItem;
    var _require9 = require("./constants/gameConstants.js"), MAP_SIZE = _require9.MAP_SIZE;
    var _require10 = require("./utils/iterationUtils"), iter_36 = _require10.iter_36;
    var _require11 = require("./animations/spellAnimation"), InkAnimation = _require11.InkAnimation;
    var _require12 = require("./animations/challengeAnimation"), AttackAnimation = _require12.AttackAnimation, ChallengeAnimation = _require12.ChallengeAnimation;
    cc._RF.pop();
  }, {
    "./Creature": "Creature",
    "./Spell": "Spell",
    "./animations/challengeAnimation": "challengeAnimation",
    "./animations/spellAnimation": "spellAnimation",
    "./constants/gameConstants.js": "gameConstants",
    "./loggers/logUtils": "logUtils",
    "./objects/Coin": "Coin",
    "./templates/EquipItems": "EquipItems",
    "./templates/SpellItems": "SpellItems",
    "./utils/iterationUtils": "iterationUtils",
    "./wheels/TypeDict": "TypeDict",
    "./wheels/common": "common"
  } ],
  SpellItems: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "55d72wVWSxGWpN5A40+1/mv", "SpellItems");
    "use strict";
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
      return _setPrototypeOf(o, p);
    }
    var _require = require("../objects/Coin"), Coin = _require.Coin;
    var _require2 = require("../wheels/interfaces"), Item = _require2.Item;
    var SpellItem = function(_Item) {
      _inheritsLoose(SpellItem, _Item);
      function SpellItem() {
        return _Item.apply(this, arguments) || this;
      }
      var _proto = SpellItem.prototype;
      _proto.init = function init(owner) {
        _Item.prototype.init.call(this, owner.game);
        this.owner = owner;
      };
      _proto.upgrade = function upgrade() {
        this.owner.updateSpeed(1.05);
        this.level++;
        this.upgrade_special();
      };
      _proto.upgrade_special = function upgrade_special() {};
      _proto.use = function use(x, y, extra) {};
      _proto.validLocations = function validLocations() {
        return this.game.allMapElements.map(function(item) {
          return [ item.x, item.y ];
        });
      };
      return SpellItem;
    }(Item);
    SpellItem.id = 0;
    SpellItem.category = "spell";
    SpellItem.valid = true;
    SpellItem.size = 1;
    SpellItem.price = new Coin({});
    SpellItem.energy_cost = 50;
    SpellItem.uiDisplay = true;
    SpellItem.overviewDisplay = true;
    SpellItem.spellName = "";
    SpellItem.description = function() {
      return "";
    };
    SpellItem.validLocations = function(player) {
      return player.game.allMapElements.map(function(item) {
        return [ item.x, item.y ];
      });
    };
    module.exports = {
      SpellItem: SpellItem
    };
    cc._RF.pop();
  }, {
    "../objects/Coin": "Coin",
    "../wheels/interfaces": "interfaces"
  } ],
  Spell: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a7ddcb0FKdOzr+A7N+yrVHM", "Spell");
    "use strict";
    var _this9 = void 0;
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return "symbol" === typeof key ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if ("object" !== typeof input || null === input) return input;
      var prim = input[Symbol.toPrimitive];
      if (void 0 !== prim) {
        var res = prim.call(input, hint || "default");
        if ("object" !== typeof res) return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === hint ? String : Number)(input);
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
      return _setPrototypeOf(o, p);
    }
    var _require = require("./templates/SpellItems"), SpellItem = _require.SpellItem;
    var _require2 = require("./objects/Coin"), Coin = _require2.Coin, COIN_KEYS = _require2.COIN_KEYS;
    var _require3 = require("./templates/Listeners"), Listener = _require3.Listener;
    var MoveSpell = function(_SpellItem) {
      _inheritsLoose(MoveSpell, _SpellItem);
      function MoveSpell() {
        return _SpellItem.apply(this, arguments) || this;
      }
      var _proto = MoveSpell.prototype;
      _proto.use = function use(x, y) {
        var player = this.owner;
        if (this.game.map[y][x]) throw new GameLogicError("\u53ea\u80fd\u79fb\u52a8\u81f3\u6ca1\u6709\u5355\u4f4d\u7684\u5730\u65b9");
        if (!this.validLocations().find(function(loc) {
          return loc[0] == x && loc[1] == y;
        })) throw new GameLogicError("\u53ea\u80fd\u79fb\u52a8\u4e00\u683c");
        player.move(x, y);
      };
      _proto.validLocations = function validLocations() {
        var player = this.owner, map = this.game.map;
        return getLocInScope(player, 1).filter(function(loc) {
          return loc[0] != player.x || loc[1] != player.y;
        }).filter(function(loc) {
          return !map[loc[1]][loc[0]];
        });
      };
      return MoveSpell;
    }(SpellItem);
    MoveSpell.id = 0;
    MoveSpell.size = 0;
    MoveSpell.price = new Coin({
      baseCoins: 10
    });
    MoveSpell.spellName = "\u6b65\u884c";
    MoveSpell.uiDisplay = false;
    MoveSpell.overviewDisplay = false;
    MoveSpell.description = function() {
      return "\u79fb\u52a8\u4e00\u683c";
    };
    var Equip14EnhancedMoveSpell = function(_MoveSpell) {
      _inheritsLoose(Equip14EnhancedMoveSpell, _MoveSpell);
      function Equip14EnhancedMoveSpell() {
        return _MoveSpell.apply(this, arguments) || this;
      }
      var _proto2 = Equip14EnhancedMoveSpell.prototype;
      _proto2.validLocations = function validLocations() {
        var _this = this;
        var scope = this.game.listeners.InscopeCalculators.check(this.owner);
        return iter_36().filter(function(loc) {
          var x = loc[0], y = loc[1];
          return scope[y][x] && !_this.game.map[y][x];
        });
      };
      return Equip14EnhancedMoveSpell;
    }(MoveSpell);
    Equip14EnhancedMoveSpell.spellName = "\u3010\u98de\u71d5\u3011\u98de\u884c";
    var PowerSpell = function(_SpellItem2) {
      _inheritsLoose(PowerSpell, _SpellItem2);
      function PowerSpell() {
        return _SpellItem2.apply(this, arguments) || this;
      }
      var _proto3 = PowerSpell.prototype;
      _proto3.use = function use(x, y, extra) {
        var target = this.game.map[y][x];
        if (!target) throw new GameLogicError("\u53ea\u80fd\u5bf9\u5b58\u6d3b\u5355\u4f4d\u4f7f\u7528");
        target.updateSpeed(1.07);
        this.game.addAnime(new ShowIconAnimation(PowerSpell.iconUrl));
      };
      return PowerSpell;
    }(SpellItem);
    PowerSpell.id = 1;
    PowerSpell.price = new Coin({
      baseCoins: 50
    });
    PowerSpell.spellName = "\u4ed9\u8109";
    PowerSpell.description = function() {
      return "\u4f7f\u4e00\u4e2a\u5355\u4f4d\u4fee\u4e3a\u63d0\u53477%";
    };
    var TempPowerSpell = function(_SpellItem3) {
      _inheritsLoose(TempPowerSpell, _SpellItem3);
      function TempPowerSpell() {
        return _SpellItem3.apply(this, arguments) || this;
      }
      var _proto4 = TempPowerSpell.prototype;
      _proto4.use = function use(x, y, extra) {
        var target = this.game.map[y][x];
        if (!target) throw new GameLogicError("\u53ea\u80fd\u5bf9\u5b58\u6d3b\u5355\u4f4d\u4f7f\u7528");
        new IncreaseSpeedBuff(target, ENTER_TIME, 1.07);
        this.game.addAnime(new ShowIconAnimation(TempPowerSpell.iconUrl));
      };
      return TempPowerSpell;
    }(SpellItem);
    TempPowerSpell.id = 2;
    TempPowerSpell.price = new Coin({
      baseCoins: 10
    });
    TempPowerSpell.spellName = "\u7075\u6e90";
    TempPowerSpell.description = function() {
      return "\u4f7f\u4e00\u4e2a\u5355\u4f4d\u83b7\u5f97\u4e00\u4e2a\u4fee\u4e3a\u63d0\u53477%\u7684\u589e\u5e45\u6548\u679c\uff0c\u6301\u7eed5\u5206\u949f";
    };
    var EnergyToPowerSpell = function(_SpellItem4) {
      _inheritsLoose(EnergyToPowerSpell, _SpellItem4);
      function EnergyToPowerSpell() {
        return _SpellItem4.apply(this, arguments) || this;
      }
      var _proto5 = EnergyToPowerSpell.prototype;
      _proto5.use = function use(x, y, extra) {
        var energy = .3 * this.owner.energy;
        this.owner.energy -= energy;
        this.owner.updateSpeed(Math.pow(1.01, energy / 10));
        this.game.addAnime(new ShowIconAnimation(EnergyToPowerSpell.iconUrl));
      };
      _proto5.validLocations = function validLocations() {
        return null;
      };
      return EnergyToPowerSpell;
    }(SpellItem);
    EnergyToPowerSpell.id = 3;
    EnergyToPowerSpell.price = new Coin({
      baseCoins: 50
    });
    EnergyToPowerSpell.spellName = "\u771f\u6c14\u5316\u5143";
    EnergyToPowerSpell.description = function() {
      return "\u6d88\u8017\u81ea\u8eab30%\u7684\u5185\u529b\uff0c\u6bcf\u6d88\u801710\u70b9\u5185\u529b\u90fd\u4f1a\u63d0\u5347\u81ea\u8eab1%\u7684\u4fee\u4e3a";
    };
    EnergyToPowerSpell.validLocations = function() {
      return null;
    };
    var GeoCoreSpell = function(_SpellItem5) {
      _inheritsLoose(GeoCoreSpell, _SpellItem5);
      function GeoCoreSpell() {
        return _SpellItem5.apply(this, arguments) || this;
      }
      var _proto6 = GeoCoreSpell.prototype;
      _proto6.init = function init() {
        _SpellItem5.prototype.init.apply(this, arguments);
        this.special = [ 7 ];
      };
      _proto6.use = function use(x, y) {
        var player2 = this.game.map[y][x];
        if (!player2) throw new GameLogicError("\u53ea\u80fd\u5bf9\u5b58\u6d3b\u5355\u4f4d\u7684\u683c\u5b50\u4f7f\u7528");
        player2.updateSpeed(1.07);
        this.game.addAnime(new GeoCoreSpellAnimation(x, y));
        if (7 == getThirdDigit(player2.power)) {
          this.game.addLog('{"code":' + player2.code + '}\u4fee\u4e3a\u7b2c\u4e09\u4f4d\u6570\u4e3a7,{"code":' + this.owner.code + "}\u83b7\u5f97\u571f\u5370\u8bb0\u5e76\u63d0\u5347\u4fee\u4e3a", 2);
          this.owner.geoSign++;
          var ratio = 1.12 + .05 * this.owner.geoSign;
          this.owner.updateSpeed(ratio);
          this.game.addAnime(new InkAnimation(x, y, [ 140, 108, 85 ]));
          this.game.addAnime(new InkAnimation(this.owner.x, this.owner.y, [ 140, 108, 85 ]));
        }
      };
      _proto6.upgrade_special = function upgrade_special() {
        7 == this.level && this.special.push(3);
        13 == this.level && this.special.push(5);
        20 == this.level && this.special.push(0);
      };
      return GeoCoreSpell;
    }(SpellItem);
    GeoCoreSpell.id = 4;
    GeoCoreSpell.price = new Coin({
      geoCoins: 50
    });
    GeoCoreSpell.spellName = "\u4e03\u66dc\u571f\u7075";
    GeoCoreSpell.description = function() {
      return "\u4ee4\u4e00\u540d\u89d2\u8272\u4fee\u4e3a\u63d0\u53477%\uff0c\u82e5\u6b64\u65f6\u5176\u4fee\u4e3a\u7684\u7b2c\u4e09\u4f4d\u6570\u4e3a7\uff0c\u5219\u4f60\u83b7\u5f97\u4e00\u5c42\u571f\u5370\u8bb0\u5e76\u63d0\u534712+5X%\uff08X\u4e3a\u571f\u5370\u8bb0\u5c42\u6570\uff09\u7684\u4fee\u4e3a";
    };
    var HydroCoreSpell = function(_SpellItem6) {
      _inheritsLoose(HydroCoreSpell, _SpellItem6);
      function HydroCoreSpell() {
        return _SpellItem6.apply(this, arguments) || this;
      }
      var _proto7 = HydroCoreSpell.prototype;
      _proto7.init = function init(player) {
        _SpellItem6.prototype.init.call(this, player);
        this.listener = new ResetHydroFreeListener(player, ENDLESS_TIME);
        this.game.listeners.OperateListeners.push(this.listener);
      };
      _proto7.use = function use(x, y) {
        var _this2 = this;
        if (this.game.map[y][x]) throw new GameLogicError("\u53ea\u80fd\u79fb\u52a8\u81f3\u7a7a\u4f4d");
        if (0 != x && x != MAP_SIZE - 1 && 0 != y && y != MAP_SIZE - 1) throw new GameLogicError("\u53ea\u80fd\u79fb\u52a8\u81f3\u8fb9\u7f18\u4f4d\u7f6e");
        var dest_x = x, dest_y = y;
        var owner = this.owner;
        var PointsInLine = function() {
          var res = [];
          var old_x = owner.x + .5, old_y = owner.y + .5;
          x += .5, y += .5;
          var x_diff = x - old_x, y_diff = y - old_y;
          var a = y_diff / x_diff, b = y - a * x;
          if (old_x > x) {
            var _ref = [ old_x, x ];
            x = _ref[0];
            old_x = _ref[1];
          }
          if (old_y > y) {
            var _ref2 = [ old_y, y ];
            y = _ref2[0];
            old_y = _ref2[1];
          }
          if (x == old_x) {
            for (var i = Math.floor(old_y); i <= y; i++) res.push([ Math.floor(x), i ]);
            return res;
          }
          if (y == old_y) {
            for (var _i = Math.floor(old_x); _i <= x; _i++) res.push([ _i, Math.floor(y) ]);
            return res;
          }
          var intersects = [];
          for (var _i2 = Math.floor(old_x); _i2 <= x + 1; _i2++) intersects.push([ _i2, roundIfInteger(a * _i2 + b) ]);
          for (var _i3 = Math.floor(old_y); _i3 <= y + 1; _i3++) intersects.push([ roundIfInteger((_i3 - b) / a), _i3 ]);
          var _loop = function _loop(_i4) {
            var _loop2 = function _loop2(j) {
              var points = intersects.filter(function(point) {
                return between(point[0], _i4, _i4 + 1) && between(point[1], j, j + 1);
              });
              var num = points.length;
              var duplicates = new Set();
              points.forEach(function(point) {
                var val = point[0] * MAP_SIZE + point[1];
                duplicates.has(val) ? num-- : duplicates.add(val);
              });
              2 == num && res.push([ _i4, j ]);
            };
            for (var j = Math.floor(old_y); j <= y; j++) _loop2(j);
          };
          for (var _i4 = Math.floor(old_x); _i4 <= x; _i4++) _loop(_i4);
          return res;
        }();
        var self = this;
        PointsInLine.forEach(function(location) {
          var x = location[0], y = location[1];
          if (x < 0 || y < 0 || x >= MAP_SIZE || y >= MAP_SIZE) return;
          if (x == self.owner.x && y == self.owner.y) return;
          var target = self.game.map[y][x];
          if (!(target && target.hydroSign > 0)) return;
          target.hydroSign = 0;
          if (self.listener.isFree) {
            _this2.game.addLog(logItem(target) + "\u6c34\u5370\u8bb0\u88ab\u91cd\u7f6e", 2);
            self.owner.updateSpeed(1.1);
          } else {
            _this2.game.addLog(logItem(target) + "\u6c34\u5370\u8bb0\u88ab\u91cd\u7f6e\uff0c" + logItem(_this2.owner) + "\u4e0b\u6b21\u64cd\u4f5c\u5c06\u514d\u8d39", 2);
            self.listener.free();
            self.owner.updateSpeed(1.3);
          }
        });
        x = this.owner.x, y = this.owner.y;
        this.game.addAnime(new InkAnimation(x, y, [ 40, 75, 178 ]), {
          postpone: 30
        });
        this.owner.move(dest_x, dest_y);
      };
      _proto7.validLocations = function validLocations() {
        var map = this.game.map;
        return iter_36().filter(function(axis) {
          var x = axis[0], y = axis[1];
          return !map[y][x];
        });
      };
      return HydroCoreSpell;
    }(SpellItem);
    HydroCoreSpell.id = 5;
    HydroCoreSpell.price = new Coin({
      hydroCoins: 50
    });
    HydroCoreSpell.spellName = "\u6d41\u6ce2\u78a7\u5f71";
    HydroCoreSpell.description = function() {
      return "\u79fb\u52a8\u81f3\u5730\u56fe\u4e2d\u4efb\u610f\u8fb9\u7f18\u4f4d\u7f6e\uff0c\u82e5\u79fb\u52a8\u7684\u8def\u5f84\u4e0a\u6709\u5355\u4f4d\u5e26\u6709\u6c34\u5370\u8bb0\uff0c\u5219\u4f60\u63d0\u534730%\u4fee\u4e3a\uff0c\u4e14\u4e0b\u4e00\u6b21\u64cd\u4f5c\u4e0d\u6d88\u8017\u6750\u6599\u4e0e\u5185\u529b\u3002\u82e5\u5e26\u6709\u6c34\u5370\u8bb0\u7684\u5355\u4f4d\u4e0d\u6b62\u4e00\u4e2a\uff0c\u5219\u6bcf\u4e2a\u989d\u5916\u7684\u5355\u4f4d\u4ee4\u4f60\u63d0\u534715%\u4fee\u4e3a";
    };
    HydroCoreSpell.validLocations = function(player) {
      var map = player.game.map;
      return iter_36().filter(function(axis) {
        var x = axis[0], y = axis[1];
        return !map[y][x];
      });
    };
    var HydroFreeListener = function(_Listener) {
      _inheritsLoose(HydroFreeListener, _Listener);
      function HydroFreeListener() {
        return _Listener.apply(this, arguments) || this;
      }
      var _proto8 = HydroFreeListener.prototype;
      _proto8.check = function check(cost) {
        cost instanceof Coin ? COIN_KEYS.forEach(function(key) {
          cost[key] = 0;
        }) : cost.cost = 0;
      };
      return HydroFreeListener;
    }(Listener);
    HydroFreeListener.uiDisplay = true;
    HydroFreeListener.iconUrl = HydroCoreSpell.iconUrl;
    HydroFreeListener.description = function(item) {
      return "\u3010\u6d41\u6ce2\u78a7\u5f71\u3011\u4e0b\u4e00\u6b21\u64cd\u4f5c\u4e0d\u6d88\u8017\u7075\u77f3\u4e0e\u5185\u529b";
    };
    var ResetHydroFreeListener = function(_Listener2) {
      _inheritsLoose(ResetHydroFreeListener, _Listener2);
      function ResetHydroFreeListener() {
        return _Listener2.apply(this, arguments) || this;
      }
      var _proto9 = ResetHydroFreeListener.prototype;
      _proto9.check = function check(player) {
        if (player.code != this.owner.code) return;
        this.isFree ? this.count++ : this.listener && (this.listener.disabled = true);
      };
      _proto9.free = function free() {
        this.count = 0;
        if (this.listener && !this.listener.disabled) return;
        this.listener = new HydroFreeListener(this, ONE_MINUTES);
        this.game.listeners.GoldCostCalculators.push(this.listener);
        this.game.listeners.SpellCostCalculators.push(this.listener);
      };
      _createClass(ResetHydroFreeListener, [ {
        key: "isFree",
        get: function get() {
          return 0 == this.count;
        }
      } ]);
      return ResetHydroFreeListener;
    }(Listener);
    var PyroCoreSpell = function(_SpellItem7) {
      _inheritsLoose(PyroCoreSpell, _SpellItem7);
      function PyroCoreSpell() {
        return _SpellItem7.apply(this, arguments) || this;
      }
      var _proto10 = PyroCoreSpell.prototype;
      _proto10.use = function use(x, y) {
        var target = this.game.map[y][x];
        if (!target) throw new GameLogicError("\u53ea\u80fd\u5bf9\u5b58\u6d3b\u5355\u4f4d\u4f7f\u7528");
        this.explode(target, 2);
      };
      _proto10.explode = function explode(target, log_level) {
        var _this3 = this;
        if (!target) return;
        this.game.addLog('{"code":' + target.code + "}\u88ab\u9644\u52a01\u5c42\u706b\u5370\u8bb0", log_level);
        target.pyroSign++;
        this.owner.harm(target, new Damage_1.Damage(Damage_1.Damage.SPELL, 100));
        if (target.pyroSign < 9) return;
        this.game.addLog('{"code":' + target.code + "}\u706b\u5370\u8bb0\u6570\u91cf\u8fbe\u5230" + target.pyroSign + "\u5c42\uff0c\u518d\u6b21\u89e6\u53d1\u3010\u4e5d\u7130\u711a\u5929\u3011", 2);
        this.game.addAnime(new InkAnimation(target.x, target.y, [ 255, 35, 5 ]), {
          postpone: 10
        });
        target.pyroSign -= 9;
        getItemIn33(target).forEach(function(new_target) {
          _this3.explode(new_target, 3);
        });
      };
      _proto10.upgrade_special = function upgrade_special() {
        this.level in [ 7, 13, 20 ] && this.num--;
      };
      return PyroCoreSpell;
    }(SpellItem);
    PyroCoreSpell.id = 6;
    PyroCoreSpell.price = new Coin({
      pyroCoins: 50
    });
    PyroCoreSpell.spellName = "\u4e5d\u7130\u711a\u5929";
    PyroCoreSpell.description = function() {
      return "\u5bf9\u4e00\u4e2a\u5355\u4f4d\u9020\u6210200\u70b9\u4f24\u5bb3\u5e76\u53e0\u52a0\u4e00\u5c42\u706b\u5370\u8bb0\uff0c\u82e5\u6b64\u65f6\u8be5\u5355\u4f4d\u6709\u8d85\u8fc7\u4e5d\u5c42\u706b\u5370\u8bb0\u5219\u5f15\u53d1\u7206\u70b8\uff0c\u5bf9\u5176\u6240\u57283*3\u8303\u56f4\u5185\u6240\u6709\u5355\u4f4d\u5168\u90e8\u65bd\u52a0\u4e00\u6b21\u3010\u4e5d\u7130\u711a\u5929\u3011";
    };
    var DisplaceSpell = function(_SpellItem8) {
      _inheritsLoose(DisplaceSpell, _SpellItem8);
      function DisplaceSpell() {
        return _SpellItem8.apply(this, arguments) || this;
      }
      var _proto11 = DisplaceSpell.prototype;
      _proto11.use = function use(x, y, extra) {
        var map = this.game.map;
        var oldX = this.owner.x, oldY = this.owner.y;
        var item1 = this.owner, item2 = map[y][x];
        map[y][x] = item1;
        map[oldY][oldX] = item2;
        item1.x = x;
        item1.y = y;
        if (null != item2) {
          console.log("item2 is not null");
          if (item2.code == item1.code) throw new GameLogicError("\u4e0d\u80fd\u6307\u5b9a\u81ea\u5df1");
          item2.x = oldX;
          item2.y = oldY;
          this.game.listeners.MoveListeners.check(item2, x, y);
          this.game.addLog('{"code":' + item2.code + ',"x":' + x + ',"y":' + y + "}\u79fb\u52a8\u81f3" + logVertex(oldX, oldY), 0);
        }
        this.game.listeners.MoveListeners.check(item1, oldX, oldY);
        this.game.addLog('{"code":' + item1.code + ',"x":' + oldX + ',"y":' + oldY + "}\u79fb\u52a8\u81f3" + logVertex(x, y), 0);
        this.game.addAnime(new DisplaceSpellAnimation(x, y));
        this.game.addAnime(new DisplaceSpellAnimation(oldX, oldY));
      };
      return DisplaceSpell;
    }(SpellItem);
    DisplaceSpell.id = 7;
    DisplaceSpell.price = new Coin({
      auroCoins: 50
    });
    DisplaceSpell.spellName = "\u661f\u79fb\u6597\u8f6c";
    DisplaceSpell.description = function() {
      return "\u4ee4\u4efb\u610f\u5355\u4f4d\u79fb\u52a8\u5230\u4efb\u610f\u4f4d\u7f6e";
    };
    DisplaceSpell.validLocations = function(player) {
      return iter_36().filter(function(axis) {
        return player.x != axis[0] || player.y != axis[1];
      });
    };
    var BounceSpell = function(_SpellItem9) {
      _inheritsLoose(BounceSpell, _SpellItem9);
      function BounceSpell() {
        return _SpellItem9.apply(this, arguments) || this;
      }
      var _proto12 = BounceSpell.prototype;
      _proto12.use = function use(x, y) {
        var _this4 = this;
        eightDirections(this.owner).forEach(function(direction) {
          direction.reverse();
          var items = direction.map(function(loc) {
            return _this4.game.map[loc[1]][loc[0]];
          }).filter(function(item) {
            return null != item;
          });
          items.forEach(function(item, i) {
            var x = direction[i][0], y = direction[i][1];
            item.move(x, y);
          });
        });
      };
      _proto12.validLocations = function validLocations() {
        return null;
      };
      return BounceSpell;
    }(SpellItem);
    BounceSpell.id = 8;
    BounceSpell.price = new Coin({
      baseCoins: 50
    });
    BounceSpell.spellName = "\u516b\u65b9\u98ce\u6563";
    BounceSpell.description = function() {
      return "\u5c06\u81ea\u8eab\u516b\u4e2a\u65b9\u4f4d\u7684\u5355\u4f4d\u5168\u90e8\u5f39\u5f00\u81f3\u6700\u8fdc\u4f4d\u7f6e";
    };
    BounceSpell.validLocations = function() {
      return null;
    };
    var AttractSpell = function(_SpellItem10) {
      _inheritsLoose(AttractSpell, _SpellItem10);
      function AttractSpell() {
        return _SpellItem10.apply(this, arguments) || this;
      }
      var _proto13 = AttractSpell.prototype;
      _proto13.use = function use(x, y) {
        var _this5 = this;
        eightDirections(this.owner).forEach(function(direction) {
          var items = direction.map(function(loc) {
            return _this5.game.map[loc[1]][loc[0]];
          }).filter(function(item) {
            return null != item;
          });
          items.forEach(function(item, i) {
            var x = direction[i][0], y = direction[i][1];
            if (item.x == x && item.y == y) return;
            item.move(x, y);
          });
        });
      };
      _proto13.validLocations = function validLocations() {
        return null;
      };
      return AttractSpell;
    }(SpellItem);
    AttractSpell.id = 9;
    AttractSpell.price = new Coin({
      baseCoins: 50
    });
    AttractSpell.spellName = "\u516b\u65b9\u5f52\u5f15";
    AttractSpell.description = function() {
      return "\u5c06\u81ea\u8eab\u516b\u4e2a\u65b9\u5411\u79bb\u81ea\u5df1\u6700\u8fd1\u7684\u5355\u4f4d\u62c9\u81f3\u8eab\u8fb9";
    };
    AttractSpell.validLocations = function() {
      return null;
    };
    var HydrateOneDirectionSpell = function(_SpellItem11) {
      _inheritsLoose(HydrateOneDirectionSpell, _SpellItem11);
      function HydrateOneDirectionSpell() {
        return _SpellItem11.apply(this, arguments) || this;
      }
      var _proto14 = HydrateOneDirectionSpell.prototype;
      _proto14.use = function use(x, y) {
        var _this6 = this;
        var has = false;
        var self = this;
        eightDirections(this.owner).forEach(function(direction) {
          if (!direction.find(function(loc) {
            return loc[0] == x && loc[1] == y;
          })) return;
          has = true;
          direction.map(function(loc) {
            return _this6.game.map[loc[1]][loc[0]];
          }).filter(function(item) {
            return null != item;
          }).forEach(function(item) {
            item.hydroSign++;
            self.game.addAnime(new InkAnimation(item.x, item.y, [ 40, 75, 178 ]));
          });
        });
        if (!has) throw new GameLogicError("\u53ea\u80fd\u6307\u5b9a\u76f4\u7ebf\u6216\u659c\u5bf9\u89d2\u7684\u65b9\u5411");
      };
      _proto14.validLocations = function validLocations() {
        var _this7 = this;
        return iter_36().filter(function(axis) {
          return _this7.owner.x != axis[0] || _this7.owner.y != axis[1];
        });
      };
      return HydrateOneDirectionSpell;
    }(SpellItem);
    HydrateOneDirectionSpell.id = 10;
    HydrateOneDirectionSpell.price = new Coin({
      hydroCoins: 50
    });
    HydrateOneDirectionSpell.spellName = "\u6d9f\u6f2a\u7eb5\u75d5";
    HydrateOneDirectionSpell.description = function() {
      return "\u5bf9\u4e00\u4e2a\u65b9\u5411\u4e0a\u7684\u6240\u6709\u5355\u4f4d\u65bd\u52a0\u6c34\u5370\u8bb0";
    };
    HydrateOneDirectionSpell.validLocations = function(player) {
      return iter_36().filter(function(axis) {
        return player.x != axis[0] || player.y != axis[1];
      });
    };
    var PyrateSpell = function(_SpellItem12) {
      _inheritsLoose(PyrateSpell, _SpellItem12);
      function PyrateSpell() {
        return _SpellItem12.apply(this, arguments) || this;
      }
      var _proto15 = PyrateSpell.prototype;
      _proto15.use = function use(x, y) {
        var player2 = this.game.map[y][x];
        if (!player2) throw new GameLogicError("\u53ea\u80fd\u5bf9\u5b58\u6d3b\u5355\u4f4d\u7684\u683c\u5b50\u4f7f\u7528");
        this.game.addLog('{"code":' + player2.code + "}\u88ab\u9644\u52a07\u5c42\u706b\u5370\u8bb0", 2);
        this.game.addAnime(new InkAnimation(x, y, [ 255, 35, 5 ]));
        player2.pyroSign += 7;
      };
      return PyrateSpell;
    }(SpellItem);
    PyrateSpell.id = 11;
    PyrateSpell.price = new Coin({
      pyroCoins: 50
    });
    PyrateSpell.spellName = "\u4e03\u6627\u771f\u706b";
    PyrateSpell.description = function() {
      return "\u5bf9\u4e00\u4e2a\u5355\u4f4d\u65bd\u52a0\u4e03\u5c42\u706b\u5370\u8bb0";
    };
    var Geo33Spell = function(_SpellItem13) {
      _inheritsLoose(Geo33Spell, _SpellItem13);
      function Geo33Spell() {
        return _SpellItem13.apply(this, arguments) || this;
      }
      var _proto16 = Geo33Spell.prototype;
      _proto16.use = function use(x, y) {
        var player = this.owner;
        getItemIn33({
          game: this.game,
          x: x,
          y: y
        }).forEach(function(item) {
          7 == getThirdDigit(item.power) && player.geoSign++;
        });
      };
      _proto16.validLocations = function validLocations() {
        return iter_36();
      };
      return Geo33Spell;
    }(SpellItem);
    Geo33Spell.id = 12;
    Geo33Spell.price = new Coin({
      geoCoins: 50
    });
    Geo33Spell.spellName = "\u7075\u58e4\u5f52\u97f5";
    Geo33Spell.description = function() {
      return "\u6307\u5b9a\u4f4d\u7f6e3*3\u8303\u56f4\u5185\uff0c\u6bcf\u4e2a\u4fee\u4e3a\u7b2c\u4e09\u4f4d\u6570\u4e3a7\u7684\u5355\u4f4d\u90fd\u4f1a\u4f7f\u4f60\u83b7\u5f97\u4e00\u5c42\u571f\u5370\u8bb0";
    };
    Geo33Spell.validLocations = function() {
      return iter_36();
    };
    var GeoToPyroSpell = function(_SpellItem14) {
      _inheritsLoose(GeoToPyroSpell, _SpellItem14);
      function GeoToPyroSpell() {
        return _SpellItem14.apply(this, arguments) || this;
      }
      var _proto17 = GeoToPyroSpell.prototype;
      _proto17.use = function use(x, y, extra) {
        var target = this.game.map[y][x];
        if (!target || "GeoToPyroPet" != target.type || target.owner.code != this.owner.code) throw new GameLogicError("\u53ea\u80fd\u5bf9\u5df1\u65b9\u70ec\u706b\u7075\u4f7f\u7528");
        if (target.transfer_time <= 0) throw new GameLogicError("\u70ec\u706b\u5370\u8bb0\u4e0d\u8db3");
        if (this.owner.geoSign <= 0) throw new GameLogicError("\u571f\u5370\u8bb0\u4e0d\u8db3");
        target.transfer_time--;
        this.owner.geoSign--;
        this.owner.changeCoins({
          pyroCoins: 50
        });
      };
      _proto17.validLocations = function validLocations() {
        var _this8 = this;
        return iter_36().filter(function(axis) {
          var x = axis[0], y = axis[1];
          var target = _this8.game.map[y][x];
          if (!target || "GeoToPyroPet" != target.type || target.owner.code != _this8.owner.code) return false;
          return true;
        });
      };
      return GeoToPyroSpell;
    }(SpellItem);
    GeoToPyroSpell.id = 13;
    GeoToPyroSpell.size = 0;
    GeoToPyroSpell.price = new Coin({});
    GeoToPyroSpell.spellName = "\u7075\u94f8\xb7\u70ec\u706b";
    GeoToPyroSpell.description = function() {
      return "\u6d88\u8017\u4e00\u5c42\u70ec\u706b\u5370\u8bb0\u548c\u571f\u5370\u8bb0\uff0c\u7136\u540e\u83b7\u5f9750\u679a\u706b\u7075\u77f3";
    };
    GeoToPyroSpell.validLocations = function(player) {
      return iter_36().filter(function(axis) {
        var x = axis[0], y = axis[1];
        var target = _this9.game.map[y][x];
        if (!target || "GeoToPyroPet" != target.type || target.owner.code != player.code) return false;
        return true;
      });
    };
    var GeoToHydroSpell = function(_SpellItem15) {
      _inheritsLoose(GeoToHydroSpell, _SpellItem15);
      function GeoToHydroSpell() {
        return _SpellItem15.apply(this, arguments) || this;
      }
      var _proto18 = GeoToHydroSpell.prototype;
      _proto18.use = function use(x, y, extra) {
        var target = this.game.map[y][x];
        if (!target || "GeoToHydroPet" != target.type || target.owner.code != this.owner.code) throw new GameLogicError("\u53ea\u80fd\u5bf9\u5df1\u65b9\u6d41\u6e0a\u517d\u4f7f\u7528");
        if (target.transfer_time <= 0) throw new GameLogicError("\u6d41\u6e0a\u5370\u8bb0\u4e0d\u8db3");
        if (this.owner.geoSign <= 0) throw new GameLogicError("\u571f\u5370\u8bb0\u4e0d\u8db3");
        target.transfer_time--;
        this.owner.geoSign--;
        this.owner.changeCoins({
          hydroCoins: 50
        });
      };
      _proto18.validLocations = function validLocations() {
        var _this10 = this;
        return iter_36().filter(function(axis) {
          var x = axis[0], y = axis[1];
          var target = _this10.game.map[y][x];
          if (!target || "GeoToHydroPet" != target.type || target.owner.code != _this10.owner.code) return false;
          return true;
        });
      };
      return GeoToHydroSpell;
    }(SpellItem);
    GeoToHydroSpell.id = 14;
    GeoToHydroSpell.size = 0;
    GeoToHydroSpell.price = new Coin({});
    GeoToHydroSpell.spellName = "\u7075\u94f8\xb7\u6d41\u6e0a";
    GeoToHydroSpell.description = function() {
      return "\u6d88\u8017\u4e00\u5c42\u6d41\u6e0a\u5370\u8bb0\u548c\u571f\u5370\u8bb0\uff0c\u7136\u540e\u83b7\u5f9750\u679a\u6c34\u7075\u77f3";
    };
    GeoToHydroSpell.validLocations = function(player) {
      return iter_36().filter(function(axis) {
        var x = axis[0], y = axis[1];
        var target = _this9.game.map[y][x];
        if (!target || "GeoToHydroPet" != target.type || target.owner.code != player.code) return false;
        return true;
      });
    };
    var GeoToAuroSpell = function(_SpellItem16) {
      _inheritsLoose(GeoToAuroSpell, _SpellItem16);
      function GeoToAuroSpell() {
        return _SpellItem16.apply(this, arguments) || this;
      }
      var _proto19 = GeoToAuroSpell.prototype;
      _proto19.use = function use(x, y, extra) {
        var target = this.game.map[y][x];
        if (!target || "GeoToPyroPet" != target.type || target.owner.code != this.owner.code) throw new GameLogicError("\u53ea\u80fd\u5bf9\u5df1\u65b9\u5764\u91d1\u517d\u4f7f\u7528");
        if (target.transfer_time <= 0) throw new GameLogicError("\u5764\u91d1\u5370\u8bb0\u4e0d\u8db3");
        if (this.owner.geoSign <= 0) throw new GameLogicError("\u571f\u5370\u8bb0\u4e0d\u8db3");
        target.transfer_time--;
        this.owner.geoSign--;
        this.owner.changeCoins({
          auroCoins: 50
        });
      };
      _proto19.validLocations = function validLocations() {
        var _this11 = this;
        return iter_36().filter(function(axis) {
          var x = axis[0], y = axis[1];
          var target = _this11.game.map[y][x];
          if (!target || "GeoToAuroPet" != target.type || target.owner.code != _this11.owner.code) return false;
          return true;
        });
      };
      return GeoToAuroSpell;
    }(SpellItem);
    GeoToAuroSpell.id = 15;
    GeoToAuroSpell.size = 0;
    GeoToAuroSpell.price = new Coin({});
    GeoToAuroSpell.spellName = "\u7075\u94f8\xb7\u5764\u91d1";
    GeoToAuroSpell.description = function() {
      return "\u6d88\u8017\u4e00\u5c42\u5764\u91d1\u5370\u8bb0\u548c\u571f\u5370\u8bb0\uff0c\u7136\u540e\u83b7\u5f9750\u679a\u91d1\u7075\u77f3";
    };
    GeoToAuroSpell.validLocations = function(player) {
      return iter_36().filter(function(axis) {
        var x = axis[0], y = axis[1];
        var target = _this9.game.map[y][x];
        if (!target || "GeoToAuroPet" != target.type || target.owner.code != player.code) return false;
        return true;
      });
    };
    var DisplaceToPetSpell = function(_SpellItem17) {
      _inheritsLoose(DisplaceToPetSpell, _SpellItem17);
      function DisplaceToPetSpell() {
        return _SpellItem17.apply(this, arguments) || this;
      }
      var _proto20 = DisplaceToPetSpell.prototype;
      _proto20.use = function use(x, y, extra) {
        if (!this.scope[y][x]) throw new GameLogicError("\u53ea\u80fd\u79fb\u52a8\u81f3\u5df1\u65b9\u5f52\u9014\u7075\u9e643*3\u8303\u56f4\u5185");
        this.owner.move(x, y);
      };
      _proto20.validLocations = function validLocations() {
        var scope = this.scope;
        return iter_36().filter(function(axis) {
          return scope[axis[1]][scope[axis[0]]];
        });
      };
      _createClass(DisplaceToPetSpell, [ {
        key: "scope",
        get: function get() {
          var _this12 = this;
          var res = emptyMap();
          this.game.allMapElements.forEach(function(item) {
            if ("DisplacePet" != item.type) return;
            if (item.owner.code != _this12.owner.code) return;
            getLocInScope(item, 1.5).forEach(function(loc) {
              var x = loc[0], y = loc[1];
              _this12.game.map[y][x] || (res[y][x] = true);
            });
          });
          return res;
        }
      } ]);
      return DisplaceToPetSpell;
    }(SpellItem);
    DisplaceToPetSpell.id = 16;
    DisplaceToPetSpell.size = 0;
    DisplaceToPetSpell.validLocations = function(player) {
      var spell = new DisplaceToPetSpell();
      spell.owner = player;
      spell.game = player.game;
      var scope = _this9.scope;
      return iter_36().filter(function(axis) {
        return scope[axis[1]][scope[axis[0]]];
      });
    };
    PowerSpell.iconUrl = "spell/\u4ed9\u8109.png";
    TempPowerSpell.iconUrl = "spell/\u7075\u6e90.png";
    GeoCoreSpell.iconUrl = "spell/\u4e03\u66dc\u571f\u7075.png";
    HydroCoreSpell.iconUrl = "spell/\u6d41\u6ce2\u78a7\u5f71.png";
    PyroCoreSpell.iconUrl = "spell/\u4e5d\u7130\u711a\u5929.png";
    DisplaceSpell.iconUrl = "spell/\u661f\u79fb\u6597\u8f6c.png";
    BounceSpell.iconUrl = "spell/\u516b\u65b9\u98ce\u6563.png";
    AttractSpell.iconUrl = "spell/\u516b\u65b9\u5f52\u5f15.png";
    HydrateOneDirectionSpell.iconUrl = "spell/\u6d9f\u6f2a\u7eb5\u75d5.png";
    PyrateSpell.iconUrl = "spell/\u4e03\u6627\u771f\u706b.png";
    Geo33Spell.iconUrl = "spell/\u7075\u58e4\u5f52\u97f5.png";
    EnergyToPowerSpell.iconUrl = "spell/\u771f\u6c14\u5316\u5143.png";
    GeoToAuroSpell.iconUrl = "pets/\u5764\u91d1\u517d.png";
    GeoToHydroSpell.iconUrl = "pets/\u6d41\u6e0a\u517d.png";
    GeoToPyroSpell.iconUrl = "pets/\u70ec\u706b\u7075.png";
    DisplaceToPetSpell.iconUrl = "pets/\u5f52\u9014\u7075\u9e64.png";
    module.exports = {
      MoveSpell: MoveSpell,
      Equip14EnhancedMoveSpell: Equip14EnhancedMoveSpell,
      PowerSpell: PowerSpell,
      TempPowerSpell: TempPowerSpell,
      GeoCoreSpell: GeoCoreSpell,
      HydroCoreSpell: HydroCoreSpell,
      HydroFreeListener: HydroFreeListener,
      ResetHydroFreeListener: ResetHydroFreeListener,
      PyroCoreSpell: PyroCoreSpell,
      DisplaceSpell: DisplaceSpell,
      BounceSpell: BounceSpell,
      AttractSpell: AttractSpell,
      HydrateOneDirectionSpell: HydrateOneDirectionSpell,
      PyrateSpell: PyrateSpell,
      Geo33Spell: Geo33Spell,
      EnergyToPowerSpell: EnergyToPowerSpell,
      GeoToHydroSpell: GeoToHydroSpell,
      GeoToPyroSpell: GeoToPyroSpell,
      DisplaceToPetSpell: DisplaceToPetSpell
    };
    var _require4 = require("./wheels/common"), GameLogicError = _require4.GameLogicError;
    var Damage_1 = require("./objects/Damage");
    var _require5 = require("./utils/numberUtils"), getThirdDigit = _require5.getThirdDigit, roundIfInteger = _require5.roundIfInteger, between = _require5.between;
    var _require6 = require("./constants/timeConstants"), ONE_MINUTES = _require6.ONE_MINUTES, ENDLESS_TIME = _require6.ENDLESS_TIME, ENTER_TIME = _require6.ENTER_TIME;
    var _require7 = require("./utils/mapUtils"), getLocInScope = _require7.getLocInScope, getItemIn33 = _require7.getItemIn33, eightDirections = _require7.eightDirections, emptyMap = _require7.emptyMap;
    var _require8 = require("./constants/gameConstants"), MAP_SIZE = _require8.MAP_SIZE;
    var _require9 = require("./Buffs"), IncreaseSpeedBuff = _require9.IncreaseSpeedBuff;
    var _require10 = require("./utils/iterationUtils"), iter_36 = _require10.iter_36;
    var _require11 = require("./animations/spellAnimation"), ShowIconAnimation = _require11.ShowIconAnimation, InkAnimation = _require11.InkAnimation, DisplaceSpellAnimation = _require11.DisplaceSpellAnimation, GeoCoreSpellAnimation = _require11.GeoCoreSpellAnimation;
    var _require12 = require("./loggers/logUtils"), logVertex = _require12.logVertex, logItem = _require12.logItem;
    cc._RF.pop();
  }, {
    "./Buffs": "Buffs",
    "./animations/spellAnimation": "spellAnimation",
    "./constants/gameConstants": "gameConstants",
    "./constants/timeConstants": "timeConstants",
    "./loggers/logUtils": "logUtils",
    "./objects/Coin": "Coin",
    "./objects/Damage": "Damage",
    "./templates/Listeners": "Listeners",
    "./templates/SpellItems": "SpellItems",
    "./utils/iterationUtils": "iterationUtils",
    "./utils/mapUtils": "mapUtils",
    "./utils/numberUtils": "numberUtils",
    "./wheels/common": "common"
  } ],
  TypeDict: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6ad7a1yOUNESr4MWStXOGD5", "TypeDict");
    "use strict";
    var Equips = [], Spell = [], Pets = [], Buffs = [], typeDict = {};
    module.exports = {
      typeDict: typeDict,
      Equips: Equips,
      Spell: Spell,
      Pets: Pets,
      Buffs: Buffs
    };
    var _require = require("../Equips"), Equip0 = _require.Equip0, Equip1 = _require.Equip1, Equip1AttackSpeedUpListener = _require.Equip1AttackSpeedUpListener, Equip2 = _require.Equip2, Equip3 = _require.Equip3, Equip4 = _require.Equip4, Equip5 = _require.Equip5, Equip6 = _require.Equip6, Equip6AttackWeakenListener = _require.Equip6AttackWeakenListener, Equip7 = _require.Equip7, Equip8 = _require.Equip8, Equip9 = _require.Equip9, Equip9AttackAllListener = _require.Equip9AttackAllListener, Equip10 = _require.Equip10, Equip10AddPyroSignListener = _require.Equip10AddPyroSignListener, Equip11 = _require.Equip11, Equip11AddHydroSignListener = _require.Equip11AddHydroSignListener, Equip12 = _require.Equip12, Equip12EnergyRecoveringListener = _require.Equip12EnergyRecoveringListener, Equip13 = _require.Equip13, Equip13CoinsListener = _require.Equip13CoinsListener, Equip14 = _require.Equip14, Equip14DistanceListener = _require.Equip14DistanceListener, Equip14ChallengeEnhanceMoveListener = _require.Equip14ChallengeEnhanceMoveListener, Equip14OperateResetMoveListener = _require.Equip14OperateResetMoveListener;
    var _require2 = require("../Pets"), BasePet = _require2.BasePet, GeoSignTransferPetsItems = _require2.GeoSignTransferPetsItems, GeoToAuroPet = _require2.GeoToAuroPet, GeoToHydroPet = _require2.GeoToHydroPet, GeoToPyroPet = _require2.GeoToPyroPet, GeoSignTransferListener = _require2.GeoSignTransferListener, AddGeoPet = _require2.AddGeoPet, AddGeoPetListener = _require2.AddGeoPetListener, AddHydroPet = _require2.AddHydroPet, AddHydroPetListener = _require2.AddHydroPetListener, AddPyroPet = _require2.AddPyroPet, AddPyroPetListener = _require2.AddPyroPetListener, DisplacePet = _require2.DisplacePet, AddScopePet = _require2.AddScopePet, AddScopePetListener = _require2.AddScopePetListener, AddDistanceDamagePet = _require2.AddDistanceDamagePet, AddDistanceDamagePetListener = _require2.AddDistanceDamagePetListener, ChasePet = _require2.ChasePet, ChasePetListener = _require2.ChasePetListener;
    var _require3 = require("../Spell"), MoveSpell = _require3.MoveSpell, Equip14EnhancedMoveSpell = _require3.Equip14EnhancedMoveSpell, PowerSpell = _require3.PowerSpell, TempPowerSpell = _require3.TempPowerSpell, GeoCoreSpell = _require3.GeoCoreSpell, HydroCoreSpell = _require3.HydroCoreSpell, HydroFreeListener = _require3.HydroFreeListener, ResetHydroFreeListener = _require3.ResetHydroFreeListener, PyroCoreSpell = _require3.PyroCoreSpell, DisplaceSpell = _require3.DisplaceSpell, BounceSpell = _require3.BounceSpell, AttractSpell = _require3.AttractSpell, HydrateOneDirectionSpell = _require3.HydrateOneDirectionSpell, PyrateSpell = _require3.PyrateSpell, Geo33Spell = _require3.Geo33Spell, EnergyToPowerSpell = _require3.EnergyToPowerSpell, GeoToHydroSpell = _require3.GeoToHydroSpell, GeoToPyroSpell = _require3.GeoToPyroSpell, DisplaceToPetSpell = _require3.DisplaceToPetSpell;
    var _require4 = require("../Buffs"), ChangeSpeedBuff = _require4.ChangeSpeedBuff, IncreaseSpeedBuff = _require4.IncreaseSpeedBuff, DecreaseSpeedBuff = _require4.DecreaseSpeedBuff, StrongBuff = _require4.StrongBuff, VulnerBuff = _require4.VulnerBuff, ChangeAspdBuff = _require4.ChangeAspdBuff;
    var _require5 = require("../Player"), Player = _require5.Player;
    var _require6 = require("../Creature"), Creature = _require6.Creature;
    var _require7 = require("../OriginMonitors"), MiningMonitors = _require7.MiningMonitors, PetConvertingMonitors = _require7.PetConvertingMonitors, SpellRecoveringMonitors = _require7.SpellRecoveringMonitors, RefreshChallengeTimeMonitors = _require7.RefreshChallengeTimeMonitors, BaseInScopeCalculators = _require7.BaseInScopeCalculators, GoldCostFloorMonitors = _require7.GoldCostFloorMonitors, SpellCostFloorMonitors = _require7.SpellCostFloorMonitors;
    var _require8 = require("../listeners/AttackListeners"), AttackCriticalMonitors = _require8.AttackCriticalMonitors, AttackDamageInitializer = _require8.AttackDamageInitializer, AttackDamageExecuter = _require8.AttackDamageExecuter;
    var _require9 = require("../listeners/DamageListeners"), RealDamageLogger = _require9.RealDamageLogger, HarmImprovingMonitors = _require9.HarmImprovingMonitors;
    Object.assign(typeDict, {
      Equip0: Equip0,
      Equip1: Equip1,
      Equip1AttackSpeedUpListener: Equip1AttackSpeedUpListener,
      Equip2: Equip2,
      Equip3: Equip3,
      Equip4: Equip4,
      Equip5: Equip5,
      Equip6: Equip6,
      Equip6AttackWeakenListener: Equip6AttackWeakenListener,
      Equip7: Equip7,
      Equip8: Equip8,
      Equip9: Equip9,
      Equip9AttackAllListener: Equip9AttackAllListener,
      Equip10: Equip10,
      Equip10AddPyroSignListener: Equip10AddPyroSignListener,
      Equip11: Equip11,
      Equip11AddHydroSignListener: Equip11AddHydroSignListener,
      Equip12: Equip12,
      Equip12EnergyRecoveringListener: Equip12EnergyRecoveringListener,
      Equip13: Equip13,
      Equip13CoinsListener: Equip13CoinsListener,
      Equip14: Equip14,
      Equip14DistanceListener: Equip14DistanceListener,
      Equip14ChallengeEnhanceMoveListener: Equip14ChallengeEnhanceMoveListener,
      Equip14OperateResetMoveListener: Equip14OperateResetMoveListener,
      BasePet: BasePet,
      GeoSignTransferPetsItems: GeoSignTransferPetsItems,
      GeoToAuroPet: GeoToAuroPet,
      GeoToHydroPet: GeoToHydroPet,
      GeoToPyroPet: GeoToPyroPet,
      GeoSignTransferListener: GeoSignTransferListener,
      AddGeoPet: AddGeoPet,
      AddGeoPetListener: AddGeoPetListener,
      AddHydroPet: AddHydroPet,
      AddHydroPetListener: AddHydroPetListener,
      AddPyroPet: AddPyroPet,
      AddPyroPetListener: AddPyroPetListener,
      DisplacePet: DisplacePet,
      AddScopePet: AddScopePet,
      AddScopePetListener: AddScopePetListener,
      AddDistanceDamagePet: AddDistanceDamagePet,
      AddDistanceDamagePetListener: AddDistanceDamagePetListener,
      ChasePet: ChasePet,
      ChasePetListener: ChasePetListener,
      MoveSpell: MoveSpell,
      Equip14EnhancedMoveSpell: Equip14EnhancedMoveSpell,
      PowerSpell: PowerSpell,
      TempPowerSpell: TempPowerSpell,
      GeoCoreSpell: GeoCoreSpell,
      HydroCoreSpell: HydroCoreSpell,
      HydroFreeListener: HydroFreeListener,
      ResetHydroFreeListener: ResetHydroFreeListener,
      PyroCoreSpell: PyroCoreSpell,
      DisplaceSpell: DisplaceSpell,
      BounceSpell: BounceSpell,
      AttractSpell: AttractSpell,
      HydrateOneDirectionSpell: HydrateOneDirectionSpell,
      PyrateSpell: PyrateSpell,
      Geo33Spell: Geo33Spell,
      EnergyToPowerSpell: EnergyToPowerSpell,
      GeoToHydroSpell: GeoToHydroSpell,
      GeoToPyroSpell: GeoToPyroSpell,
      DisplaceToPetSpell: DisplaceToPetSpell,
      ChangeSpeedBuff: ChangeSpeedBuff,
      IncreaseSpeedBuff: IncreaseSpeedBuff,
      DecreaseSpeedBuff: DecreaseSpeedBuff,
      StrongBuff: StrongBuff,
      VulnerBuff: VulnerBuff,
      ChangeAspdBuff: ChangeAspdBuff,
      Player: Player,
      Creature: Creature,
      MiningMonitors: MiningMonitors,
      PetConvertingMonitors: PetConvertingMonitors,
      SpellRecoveringMonitors: SpellRecoveringMonitors,
      RefreshChallengeTimeMonitors: RefreshChallengeTimeMonitors,
      BaseInScopeCalculators: BaseInScopeCalculators,
      GoldCostFloorMonitors: GoldCostFloorMonitors,
      SpellCostFloorMonitors: SpellCostFloorMonitors,
      AttackCriticalMonitors: AttackCriticalMonitors,
      AttackDamageInitializer: AttackDamageInitializer,
      AttackDamageExecuter: AttackDamageExecuter,
      RealDamageLogger: RealDamageLogger,
      HarmImprovingMonitors: HarmImprovingMonitors
    });
    for (var key in typeDict) {
      var clazz = typeDict[key];
      var arr = void 0;
      switch (clazz.category) {
       case "equip":
        arr = Equips;
        break;

       case "spell":
        arr = Spell;
        break;

       case "pet":
        arr = Pets;
      }
      if (arr) {
        if (arr[clazz.id]) {
          console.error("Class id conflict:", clazz.name, " , ", arr[clazz.id].name);
          continue;
        }
        arr[clazz.id] = clazz;
      }
    }
    cc._RF.pop();
  }, {
    "../Buffs": "Buffs",
    "../Creature": "Creature",
    "../Equips": "Equips",
    "../OriginMonitors": "OriginMonitors",
    "../Pets": "Pets",
    "../Player": "Player",
    "../Spell": "Spell",
    "../listeners/AttackListeners": "AttackListeners",
    "../listeners/DamageListeners": "DamageListeners"
  } ],
  TypeList: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1163bYlwdBF+rfInVP6PL+m", "TypeList");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Spell = exports.Pets = exports.Equips = void 0;
    var TypeDict_1 = require("./TypeDict");
    var Equips = [], Spell = [], Pets = [];
    exports.Equips = Equips;
    exports.Spell = Spell;
    exports.Pets = Pets;
    for (var key in TypeDict_1.typeDict) {
      var clazz = TypeDict_1.typeDict[key];
      var arr = void 0;
      switch (clazz.category) {
       case "equip":
        arr = Equips;
        break;

       case "spell":
        arr = Spell;
        break;

       case "pet":
        arr = Pets;
      }
      if (arr) {
        arr[clazz.id] && console.error("Class id conflict:", clazz.name, " , ", arr[clazz.id].name);
        arr[clazz.id] = clazz;
      }
    }
    cc._RF.pop();
  }, {
    "./TypeDict": "TypeDict"
  } ],
  alert: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2b2d9m8GJlH3Zmff9SqDEAn", "alert");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        lbl: cc.Label,
        _callback: null
      },
      onLoad: function onLoad() {},
      show: function show(str) {
        str ? "Failed to fetch" == str ? this.lbl.string = "\u7f51\u7edc\u65e0\u6cd5\u8fde\u63a5\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u540e\u91cd\u65b0\u8fdb\u5165\u6e38\u620f" : str.length <= 200 ? this.lbl.string = str : this.lbl.string = "\u9519\u8bef:\u672a\u77e5\u539f\u56e0" : this.lbl.string = "\u9519\u8bef:\u7f51\u7edc\u5f02\u5e38";
        this.node.active = true;
      },
      setCallback: function setCallback(fn) {
        this._callBack = fn;
      },
      confirmBtn: function confirmBtn() {
        this._callBack && this._callBack();
        this.node.active = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  animationPlayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ae74eUGZaFFV5ZekmGsGZm6", "animationPlayer");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AnimationPlayingParams = exports.BaseAnimation = exports.AnimationPlayer = void 0;
    var animeConstant_1 = require("./animeConstant");
    var BaseAnimation = function() {
      function BaseAnimation(x, y) {
        this.functions = [];
        this.playingFrame = 0;
        this.lastPlayTime = 0;
        this.x = x;
        this.y = y;
      }
      Object.defineProperty(BaseAnimation.prototype, "isPlaying", {
        get: function() {
          return this.playingFrame < this.functions.length;
        },
        enumerable: false,
        configurable: true
      });
      BaseAnimation.prototype.play = function(args) {
        if (this.x != args.x || this.y != args.y) return;
        if (this.playingFrame >= this.functions.length) return;
        var currTime = Date.now();
        if (currTime < this.lastPlayTime + animeConstant_1.ONE_FRAME_TIME) return;
        0 == this.lastPlayTime ? this.lastPlayTime = currTime : this.lastPlayTime += animeConstant_1.ONE_FRAME_TIME;
        var fns = this.functions[this.playingFrame];
        this.playingFrame++;
        if (!fns) return;
        fns.forEach(function(fn) {
          return fn(args);
        });
      };
      BaseAnimation.prototype.push = function(functions) {
        var self = this;
        functions.forEach(function(fn, index) {
          self.functions[index] || (self.functions[index] = []);
          self.functions[index].push(fn);
        });
      };
      return BaseAnimation;
    }();
    exports.BaseAnimation = BaseAnimation;
    var AnimationPlayer = function() {
      function AnimationPlayer() {
        this.animations = [];
        this.postponeFrames = 0;
      }
      Object.defineProperty(AnimationPlayer.prototype, "isPlaying", {
        get: function() {
          if (0 == this.animations.length) return false;
          return this.animations.map(function(anim) {
            return anim.isPlaying;
          }).reduce(function(prev, curr) {
            return prev || curr;
          });
        },
        enumerable: false,
        configurable: true
      });
      AnimationPlayer.prototype.play = function(args) {
        this.animations.forEach(function(animation) {
          return animation.play(args);
        });
      };
      AnimationPlayer.prototype.push = function(animation) {
        var emptyFrames = [];
        for (var i = 0; i < this.postponeFrames; i++) emptyFrames.push([]);
        animation.functions = emptyFrames.concat(animation.functions);
        this.animations.push(animation);
      };
      AnimationPlayer.prototype.skip = function() {
        this.animations.length = 0;
      };
      return AnimationPlayer;
    }();
    exports.AnimationPlayer = AnimationPlayer;
    var AnimationPlayingParams = function() {
      function AnimationPlayingParams() {}
      return AnimationPlayingParams;
    }();
    exports.AnimationPlayingParams = AnimationPlayingParams;
    cc._RF.pop();
  }, {
    "./animeConstant": "animeConstant"
  } ],
  animationUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6cb13LyUcRAvKbtqjMumAu1", "animationUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.levelUpCreatureIcon = exports.getCreatureIconNode = exports.addCreatureIconNodeIfAbsent = void 0;
    function addCreatureIconNodeIfAbsent(args) {
      var creatureIconName = "CreatureIcon";
      var anime = args.animation2Icon.parent;
      var iconNode = anime.children.find(function(node) {
        return node.name == creatureIconName;
      });
      if (!iconNode) {
        iconNode = new cc.Node();
        iconNode.width = anime.width;
        iconNode.height = anime.height;
        iconNode.name = creatureIconName;
        var sprite_1 = iconNode.addComponent(cc.Sprite);
        sprite_1.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        args.iconUrl && cc.loader.loadRes(args.iconUrl, cc.SpriteFrame, function(err, spriteFrame2) {
          err && console.log(err);
          sprite_1.spriteFrame = spriteFrame2;
        });
        anime.children.forEach(function(child) {
          return child.zIndex = 10;
        });
        anime.addChild(iconNode);
        iconNode.zIndex = 1;
      }
      return iconNode;
    }
    exports.addCreatureIconNodeIfAbsent = addCreatureIconNodeIfAbsent;
    function getCreatureIconNode(args) {
      return addCreatureIconNodeIfAbsent(args);
    }
    exports.getCreatureIconNode = getCreatureIconNode;
    function levelUpCreatureIcon(args) {
      args.gridIcon.active = false;
      addCreatureIconNodeIfAbsent(args);
    }
    exports.levelUpCreatureIcon = levelUpCreatureIcon;
    cc._RF.pop();
  }, {} ],
  animeConstant: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d10c4YU249DQp84KGgu+2Ag", "animeConstant");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ONE_FRAME_TIME = exports.GRID_SIZE_Y = exports.GRID_SIZE_X = void 0;
    var GRID_SIZE_X = 90.2, GRID_SIZE_Y = 91.4;
    exports.GRID_SIZE_X = GRID_SIZE_X;
    exports.GRID_SIZE_Y = GRID_SIZE_Y;
    var ONE_FRAME_TIME = 16;
    exports.ONE_FRAME_TIME = ONE_FRAME_TIME;
    cc._RF.pop();
  }, {} ],
  auction: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "327200OAddH+7/ObYbrJFEE", "auction");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.auctionValue = null;
        _this.auctionPosition = null;
        _this.auctionPositionColor = null;
        _this.auctionPositionSelection = null;
        return _this;
      }
      NewClass.prototype.init = function(index, val) {
        this.auctionValue.string = "" + val;
        this.setAuctionPosition(index);
      };
      NewClass.prototype.setAuctionPosition = function(index) {
        this.auctionPosition.string = [ "\u4e00\u53f7\u4f4d", "\u4e8c\u53f7\u4f4d", "\u4e09\u53f7\u4f4d" ][index];
        var position = this.auctionPositionSelection.children[index];
        this.auctionPositionColor.spriteFrame = position.getComponent(cc.Sprite).spriteFrame;
        this.auctionPositionSelection.active = false;
      };
      NewClass.prototype.enableAuctionPositionSelection = function() {
        this.auctionPositionSelection.active = true;
      };
      NewClass.prototype.readVal = function() {
        var valString = this.auctionValue.string ? this.auctionValue.string : "0";
        var val = parseInt(valString.trim());
        var pos = [ "\u4e00\u53f7\u4f4d", "\u4e8c\u53f7\u4f4d", "\u4e09\u53f7\u4f4d" ].indexOf(this.auctionPosition.string) + 1;
        return {
          val: val,
          pos: pos
        };
      };
      NewClass.prototype.auction1st = function() {
        this.setAuctionPosition(0);
      };
      NewClass.prototype.auction2nd = function() {
        this.setAuctionPosition(1);
      };
      NewClass.prototype.auction3rd = function() {
        this.setAuctionPosition(2);
      };
      __decorate([ property(cc.EditBox) ], NewClass.prototype, "auctionValue", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "auctionPosition", void 0);
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "auctionPositionColor", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "auctionPositionSelection", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  background: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "54d85TTN0BGzrfOI6gHGamy", "background");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Globals_1 = require("../Globals");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.background = null;
        _this.character = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        var background, character;
        if (Globals_1.decoration.length > 0) {
          background = Globals_1.decoration.find(function(item) {
            return "scene" == item.category && 1 == item.using;
          }).index - 1;
          character = Globals_1.decoration.find(function(item) {
            return "hero" == item.category && 1 == item.using;
          }).index - 1;
        } else {
          var storage = cc.sys.localStorage.getItem("decoration");
          if (!storage) return;
          var info = JSON.parse(storage);
          background = info.background;
          character = info.character;
        }
        cc.sys.localStorage.setItem("decoration", JSON.stringify({
          background: background,
          character: character
        }));
        this.character.children.concat(this.background.children).forEach(function(node) {
          return node.active = false;
        });
        this.background.children[background].active = true;
        this.character.children[character].active = true;
      };
      NewClass.prototype.start = function() {};
      __decorate([ property(cc.Node) ], NewClass.prototype, "background", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "character", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../Globals": "Globals"
  } ],
  baseLoggers: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0efe7v54OJLW54uoDWTYr27", "baseLoggers");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Log = exports.BaseLoggers = void 0;
    var Log = function() {
      function Log() {
        this.children = [];
      }
      return Log;
    }();
    exports.Log = Log;
    var BaseLoggers = function() {
      function BaseLoggers(data) {
        void 0 === data && (data = []);
        this.data = [];
        this.data = data;
      }
      BaseLoggers.prototype.addLog = function(time, level, content, extra) {
        void 0 === extra && (extra = null);
        this.pushLog({
          time: time,
          level: level,
          content: content,
          extra: extra
        });
      };
      BaseLoggers.prototype.pushLog = function() {
        var logs = [];
        for (var _i = 0; _i < arguments.length; _i++) logs[_i] = arguments[_i];
        var data = this.data;
        logs.forEach(function(log) {
          if (log.level <= 0) {
            var lastLog = data[data.length - 1];
            log.level = lastLog ? Math.max(lastLog.level - log.level, 2) : 2;
          }
          data.push(log);
        });
      };
      BaseLoggers.prototype.aggregate = function() {
        var temp = aggregateMiningLogs(this);
        temp = aggregateParentRelationship(temp);
        this.data = temp.data;
      };
      BaseLoggers.prototype.JSONStringify = function() {
        this.aggregate();
        return this.data;
      };
      BaseLoggers.prototype.JSONParse = function(data) {
        this.data = data;
      };
      BaseLoggers.prototype.console = function() {
        var fn = function(log) {
          var _a;
          console.log(log.time, "\t\t\t\t\t\t\t\t\t\t".substring(0, log.level) + log.content);
          null === (_a = log.children) || void 0 === _a ? void 0 : _a.forEach(function(child) {
            return fn(child);
          });
        };
        this.data.forEach(function(log) {
          return fn(log);
        });
      };
      return BaseLoggers;
    }();
    exports.BaseLoggers = BaseLoggers;
    function aggregateMiningLogs(logger) {
      var logs = logger.data;
      var res = new BaseLoggers();
      var miningValue = [ new Coin_1.Coin({}), new Coin_1.Coin({}), new Coin_1.Coin({}) ];
      var lastime = 0;
      logs.forEach(function(log) {
        if (0 == log.content.length) return;
        if (log.extra && log.extra.coin) {
          miningValue[log.extra.player.code - 1].add(log.extra.coin);
          lastime = log.time;
        } else {
          miningValue.forEach(function(coin, index) {
            res.pushLog.apply(res, logUtils_1.coinLog(coin, lastime, {
              code: index + 1
            }));
          });
          miningValue = [ new Coin_1.Coin({}), new Coin_1.Coin({}), new Coin_1.Coin({}) ];
          res.pushLog(log);
        }
      });
      miningValue.forEach(function(coin, index) {
        res.pushLog.apply(res, logUtils_1.coinLog(coin, lastime, {
          code: index + 1
        }));
      });
      return res;
    }
    function aggregateParentRelationship(logger) {
      var logs = logger.data;
      var lastNodeInLevel = [];
      var res = [];
      logs.forEach(function(log, index) {
        var _a;
        lastNodeInLevel[log.level] = log;
        log.children || (log.children = []);
        1 == log.level && res.push(log);
        for (var i = lastNodeInLevel.length - 1; i >= 0; i--) {
          if (i >= log.level) continue;
          if (!lastNodeInLevel[i]) continue;
          null === (_a = lastNodeInLevel[i].children) || void 0 === _a ? void 0 : _a.push(log);
          break;
        }
      });
      logger.data = res;
      return logger;
    }
    var Coin_1 = require("../objects/Coin");
    var logUtils_1 = require("./logUtils");
    cc._RF.pop();
  }, {
    "../objects/Coin": "Coin",
    "./logUtils": "logUtils"
  } ],
  board: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8a330Qlub9NjquGBufhmIsg", "board");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.content = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {};
      NewClass.prototype.start = function() {
        var self = this;
        http.sendGetForms("public/board", {}, function(response) {
          self.content.string = response;
          uiUtils_1.completeLoading();
        });
      };
      NewClass.prototype.close = function() {
        this.node.active = false;
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "content", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    var http = require("../http");
    var uiUtils_1 = require("../otherComponents/uiUtils");
    cc._RF.pop();
  }, {
    "../http": "http",
    "../otherComponents/uiUtils": "uiUtils"
  } ],
  buffDetails: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "60de56Bqn5NBptY3E3Uqne8", "buffDetails");
    "use strict";
    var _require = require("../battleMiddleWare/gameUtils"), buff = _require.buff;
    cc.Class({
      extends: cc.Component,
      properties: {
        intro: cc.Label,
        remain: cc.Label
      },
      init: function init(data) {
        var deck = buff();
        var str = deck[data.id].intro;
        deck[data.id].intro2 && (str += data.value + deck[data.id].intro2);
        this.intro.string = str;
        var now = data.duration - new Date().valueOf() + data.date;
        var timeStr = "\u5269\u4f59\u65f6\u95f4";
        if (now >= 36e5) {
          timeStr += Math.floor(now / 36e5) + "\u5c0f\u65f6";
          now -= 36e5 * Math.floor(now / 36e5);
        }
        timeStr += Math.floor(now / 6e4) + "\u5206";
        this.remain.string = timeStr;
      }
    });
    cc._RF.pop();
  }, {
    "../battleMiddleWare/gameUtils": "gameUtils"
  } ],
  buffItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a9adee0l19FZryvmTJq5OIK", "buffItem");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        icon: cc.Sprite,
        valLbl: cc.Label,
        data: null,
        detail: cc.Node,
        description: cc.Label,
        viewLongDescription: null
      },
      init: function init(data, fn) {
        this.data = data;
        this.parent = parent;
        var self = this;
        var _this$parseInfo = this.parseInfo(data), iconUrl = _this$parseInfo.iconUrl, value = _this$parseInfo.value, description = _this$parseInfo.description;
        cc.loader.loadRes(iconUrl, cc.SpriteFrame, function(err, spriteFrame) {
          self.icon.spriteFrame = spriteFrame;
        });
        if (value || 0 == value) {
          this.valLbl.node.active = true;
          this.valLbl.string = "" + value;
        }
        this.description.string = description;
      },
      parseInfo: function parseInfo(data) {
        var iconUrl, value, description;
        if ([ "geoSign", "hydroSign", "pyroSign" ].includes(data.type)) {
          var name = {
            geoSign: "\u571f\u5370\u8bb0",
            hydroSign: "\u6c34\u5370\u8bb0",
            pyroSign: "\u706b\u5370\u8bb0"
          }[data.type];
          iconUrl = "icons/" + name + ".png";
          value = data.value;
          description = name;
        } else {
          var clazz = typeDict()[data.type];
          iconUrl = clazz.iconUrl;
          value = data.ratio;
          description = clazz.description(data);
        }
        return {
          iconUrl: iconUrl,
          value: value,
          description: description
        };
      },
      seeDetailBtn: function seeDetailBtn() {
        console.log(this.description.string);
        if (this.description.string.length <= 5) {
          this.detail.active = true;
          var self = this;
          setTimeout(function() {
            return self.detail.active = false;
          }, 1e4);
        } else this.viewLongDescription(this.description.string);
      },
      closeDetailBtn: function closeDetailBtn() {
        this.detail.active = false;
      }
    });
    var _require = require("../battleMiddleWare/gameUtils"), typeDict = _require.typeDict;
    cc._RF.pop();
  }, {
    "../battleMiddleWare/gameUtils": "gameUtils"
  } ],
  challengeAnimation: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f2b60nAFDVKnZ9V3WUni9Uo", "challengeAnimation");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ChallengeAnimation = exports.AttackAnimation = void 0;
    var animationPlayer_1 = require("./animationPlayer");
    var spellAnimation_1 = require("./spellAnimation");
    var AttackAnimation = function(_super) {
      __extends(AttackAnimation, _super);
      function AttackAnimation() {
        var _this = _super.call(this, 77, 77) || this;
        _this.push([ function(args) {
          cc.loader.loadRes("audio/sword", cc.AudioClip, function(err, clip) {
            cc.audioEngine.play(clip, false, args.config.audio);
          });
        } ]);
        _this.push([ function(args) {
          args.gridIcon.getComponent("fightUI").addLog();
        } ]);
        return _this;
      }
      return AttackAnimation;
    }(animationPlayer_1.BaseAnimation);
    exports.AttackAnimation = AttackAnimation;
    var ChallengeAnimation = function(_super) {
      __extends(ChallengeAnimation, _super);
      function ChallengeAnimation() {
        var _this = _super.call(this, 77, 77, [ 174, 3, 3 ], false) || this;
        _this.functions.push([ function(args) {
          args.animationIcon.getComponent(cc.Sprite).spriteFrame = null;
        } ]);
        _this.push([ function(args) {
          cc.loader.loadRes("audio/sword", cc.AudioClip, function(err, clip) {
            cc.audioEngine.play(clip, false, args.config.audio);
          });
        } ]);
        return _this;
      }
      return ChallengeAnimation;
    }(spellAnimation_1.InkAnimation);
    exports.ChallengeAnimation = ChallengeAnimation;
    cc._RF.pop();
  }, {
    "./animationPlayer": "animationPlayer",
    "./spellAnimation": "spellAnimation"
  } ],
  commonUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "098c191IQNAWoM0Hi/U4roN", "commonUtils");
    "use strict";
    module.exports = {
      fillWithZero: function fillWithZero(num, digits) {
        var zeros = "000000000000000000000000000";
        var numStr = num.toString();
        return zeros.substring(0, digits - numStr.length) + numStr;
      }
    };
    cc._RF.pop();
  }, {} ],
  common: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "af70eOTsGFBMpALT+POWvML", "common");
    "use strict";
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _wrapNativeSuper(Class) {
      var _cache = "function" === typeof Map ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (null === Class || !_isNativeFunction(Class)) return Class;
        if ("function" !== typeof Class) throw new TypeError("Super expression must either be null or a function");
        if ("undefined" !== typeof _cache) {
          if (_cache.has(Class)) return _cache.get(Class);
          _cache.set(Class, Wrapper);
        }
        function Wrapper() {
          return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class);
      };
      return _wrapNativeSuper(Class);
    }
    function _construct(Parent, args, Class) {
      _construct = _isNativeReflectConstruct() ? Reflect.construct.bind() : function _construct(Parent, args, Class) {
        var a = [ null ];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        Class && _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
      return _construct.apply(null, arguments);
    }
    function _isNativeReflectConstruct() {
      if ("undefined" === typeof Reflect || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if ("function" === typeof Proxy) return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _isNativeFunction(fn) {
      return -1 !== Function.toString.call(fn).indexOf("[native code]");
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
      return _setPrototypeOf(o, p);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CopyingSign = exports.INSTRU = exports.FindCertainType = exports.CountCertainType = exports.SameLocation = exports.getDistance = exports.GameLogicError = void 0;
    var GameLogicError = function(_Error) {
      _inheritsLoose(GameLogicError, _Error);
      function GameLogicError() {
        return _Error.apply(this, arguments) || this;
      }
      return GameLogicError;
    }(_wrapNativeSuper(Error));
    exports.GameLogicError = GameLogicError;
    function getDistance(x1, x2, y1, y2) {
      return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }
    exports.getDistance = getDistance;
    function SameLocation(loc1, loc2) {
      return loc1[0] == loc2[0] && loc1[1] == loc2[1];
    }
    exports.SameLocation = SameLocation;
    function CountCertainType(Game, type, filter) {
      return FindCertainType(Game, type, filter).length;
    }
    exports.CountCertainType = CountCertainType;
    function FindCertainType(Game, type, filter) {
      var res = [];
      var remove = [];
      Game.unitDict.forEach(function(v, k) {
        if (v["disabled"]) {
          remove.push(k);
          return;
        }
        v instanceof type && res.push(v);
      });
      filter && (res = res.filter(filter));
      remove.forEach(function(key) {
        Game.unitDict["delete"](key);
      });
      return res;
    }
    exports.FindCertainType = FindCertainType;
    var CopyingSign = function CopyingSign() {};
    exports.CopyingSign = CopyingSign;
    var INSTRU = {
      getActionType: function getActionType(instru) {
        return instru.substring(0, 2);
      },
      getId: function getId(instru) {
        return parseInt(instru.substring(2, 2));
      },
      getX: function getX(instru) {
        return parseInt(instru.substring(4, 1));
      },
      getY: function getY(instru) {
        return parseInt(instru.substring(5, 1));
      }
    };
    exports.INSTRU = INSTRU;
    cc._RF.pop();
  }, {} ],
  console: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bd3c5FFMrlOdIgIsbfCknso", "console");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        changePlayerNode: cc.Node,
        playerIcon: cc.Sprite,
        currTimeLbl: cc.Label,
        changeTime: cc.Node,
        changeTimeLbl: cc.Label,
        timeSlider: cc.Slider,
        leftBtn: cc.Button,
        rightBtn: cc.Button,
        time: 0
      },
      init: function init() {
        var self = this;
        this.changePlayerNode.children.forEach(function(child, index) {
          var iconUrl = gameGlobals.gameInfo.playerInfo[index].iconUrl;
          child.getComponent("icon").init(iconUrl);
        });
        var fn = function fn() {
          self.changePlayer(gameGlobals.currPLayerIndex);
          self.playerIcon.spriteFrame || setTimeout(fn, 50);
        };
        setTimeout(fn, 50);
      },
      refresh: function refresh() {
        var pos = gameGlobals.historyPosition;
        var leftEnabled = true, rightEnabled = true;
        0 == pos && (leftEnabled = false);
        gameGlobals.isEntering && pos == gameGlobals.initPosition && (leftEnabled = false);
        pos == gameGlobals.gameRecords.length - 1 && (rightEnabled = false);
        this.leftBtn.enabled = leftEnabled;
        this.rightBtn.enabled = rightEnabled;
        this.leftBtn.node.color = leftEnabled ? new cc.Color(0, 0, 0) : new cc.Color(173, 173, 173);
        this.rightBtn.node.color = rightEnabled ? new cc.Color(0, 0, 0) : new cc.Color(173, 173, 173);
        this.time = gameGlobals.gameObj.currTime;
        this.currTimeLbl.string = this.refreshTime();
        this.changeTimeLbl.string = this.currTimeLbl.string;
      },
      left: function left() {
        moveHistoryPointer(-1);
      },
      right: function right() {
        moveHistoryPointer(1);
      },
      changePlayerBtn: function changePlayerBtn() {
        this.changePlayerNode.active = true;
      },
      changePlayer1: function changePlayer1() {
        this.changePlayer(1);
      },
      changePlayer2: function changePlayer2() {
        this.changePlayer(2);
      },
      changePlayer3: function changePlayer3() {
        this.changePlayer(3);
      },
      changePlayer: function changePlayer(index) {
        global.currPLayerIndex = index;
        var playerNode = this.changePlayerNode.children[index - 1];
        this.playerIcon.spriteFrame = playerNode.children[0].getComponent(cc.Sprite).spriteFrame;
        this.changePlayerNode.active = false;
        refreshPage();
      },
      addTimeBtn: function addTimeBtn() {
        this.changeTime.active = true;
      },
      refreshTime: function refreshTime() {
        var ONE_JOURNEY_DAY = constant().ONE_JOURNEY_DAY;
        var time = this.time;
        if (time >= 7 * ONE_JOURNEY_DAY) return "\u7b2c7\u65e5 23:20";
        time = Math.max(0, Math.min(time, 7 * ONE_JOURNEY_DAY));
        var day = Math.floor(time / ONE_JOURNEY_DAY);
        var clock = new Date(constant().DAILY_START_TIME.valueOf() + time % ONE_JOURNEY_DAY * 1e3);
        var hours = fillWithZero(clock.getHours(), 2), minutes = fillWithZero(clock.getMinutes(), 2);
        return "\u7b2c" + (day + 1) + "\u65e5 " + hours + ":" + minutes;
      },
      changeTimeEvent: function changeTimeEvent() {
        this.time = this.timeSlider.progress * constant().ONE_JOURNEY_DAY + global.gameObj.currTime;
        this.changeTimeLbl.string = this.refreshTime();
      },
      plusMinute: function plusMinute() {
        if (this.timeSlider.progress >= 1) return;
        this.time += constant().ONE_MINUTES;
        this.changeTimeLbl.string = this.refreshTime();
      },
      minusMinute: function minusMinute() {
        if (this.timeSlider.progress <= 0) return;
        this.time -= constant().ONE_MINUTES;
        this.changeTimeLbl.string = this.refreshTime();
      },
      confirmChangingTime: function confirmChangingTime() {
        global.currTime = Math.floor(this.time);
        makeOperation("ct");
        this.timeSlider.progress = 0;
      },
      cancelChangingTime: function cancelChangingTime() {
        this.changeTime.active = false;
      },
      confirmEntering: function confirmEntering() {
        makeOperation("et");
      },
      openSettingPage: function openSettingPage() {
        console.log(gameGlobals.operations.join("\n"));
        cc.find("Canvas/settings").active = true;
      },
      recover: function recover() {}
    });
    var gameGlobals = require("../battleMiddleWare/gameGlobals");
    var global = require("../battleMiddleWare/gameGlobals");
    var _require = require("../battleMiddleWare/gameUtils"), moveHistoryPointer = _require.moveHistoryPointer, getTimePrefix = _require.getTimePrefix, refreshPage = _require.refreshPage, constant = _require.constant;
    var _require2 = require("../battleMiddleWare/gameService"), makeOperation = _require2.makeOperation, copyGame = _require2.copyGame, addHistory = _require2.addHistory;
    var _require3 = require("../otherComponents/commonUtils"), fillWithZero = _require3.fillWithZero;
    var _require4 = require("../otherComponents/uiUtils"), root = _require4.root;
    var _require5 = require("../Globals"), auth = _require5.auth;
    cc._RF.pop();
  }, {
    "../Globals": "Globals",
    "../battleMiddleWare/gameGlobals": "gameGlobals",
    "../battleMiddleWare/gameService": "gameService",
    "../battleMiddleWare/gameUtils": "gameUtils",
    "../otherComponents/commonUtils": "commonUtils",
    "../otherComponents/uiUtils": "uiUtils"
  } ],
  creatureDetails: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dc64aWASQNA7KkYWJxXm2WE", "creatureDetails");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        nickname: cc.Label,
        icon: cc.Sprite,
        miningTypeIcon: cc.Sprite,
        miningTypeSelection: cc.Node,
        miningNumLabel: cc.Label,
        changeMiningTypeBtn: cc.Node,
        powerLabel: cc.Label,
        damageLabel: cc.Label,
        scopeLabel: cc.Label,
        aspdLabel: cc.Label,
        buffList: cc.Node,
        buffPrefab: cc.Prefab,
        buffDetail: cc.Node,
        buffDescription: cc.Label,
        harvest: cc.Node,
        content: cc.Node,
        data: null
      },
      init: function init(data) {
        this.data = data;
        var self = this;
        var clazz = typeDict()[data.type];
        console.log(clazz);
        this.nickname.string = clazz.pet_name;
        cc.loader.loadRes(clazz.iconUrl, cc.SpriteFrame, function(err, spriteFrame2) {
          err && console.log(err);
          self.icon.spriteFrame = spriteFrame2;
        });
        data.owner.code != gameGlobals.currPLayerIndex && (this.changeMiningTypeBtn.active = false);
        this.initMiningType(data.mining_type);
        this.miningNumLabel.string = "\u5df2\u70bc\u5316\uff1a" + data.mining_num.totalValue();
        this.powerLabel.string = convertPowerString(data.power);
        this.damageLabel.string = data.damage;
        this.scopeLabel.string = data.scope;
        this.aspdLabel.string = data.aspd;
        var createBuffItem = function createBuffItem(buffItem) {
          var node = cc.instantiate(self.buffPrefab);
          node.getComponent("buffItem").init(buffItem, self.node.getComponent("creatureDetails"));
          self.buffList.addChild(node);
        };
        createBuffItem({
          type: "geoSign",
          value: data.geoSign
        });
        data.hydroSign && createBuffItem({
          type: "hydroSign",
          value: data.hydroSign
        });
        data.pyroSign && createBuffItem({
          type: "pyroSign",
          value: data.pyroSign
        });
        gameGlobals.gameObj.unitDict.forEach(function(value) {
          var classOfItem = typeDict()[value.type];
          if (!classOfItem) return;
          if ("listener" != classOfItem.category) return;
          if (!classOfItem.uiDisplay) return;
          if (value.owner.code != data.code) return;
          createBuffItem(value);
        });
        data.owner.code != gameGlobals.currPLayerIndex && (this.harvest.active = false);
        setTimeout(function() {
          var content = self.content;
          content.y = 420 - content.height / 2;
        }, 10);
      },
      initMiningType: function initMiningType(mining_type) {
        var index = mining_type ? COIN_KEYS.indexOf(mining_type) : 0;
        this.setMiningType(index, false);
      },
      setMiningType: function setMiningType(index, refresh) {
        void 0 === refresh && (refresh = true);
        var selectedType = this.miningTypeSelection.children[0].children[index];
        var selectedSprite = selectedType.getComponent(cc.Sprite).spriteFrame;
        this.miningTypeIcon.spriteFrame = selectedSprite;
        this.miningTypeSelection.active = false;
        if (refresh) {
          var x = this.data.x, y = this.data.y;
          makeOperation("cm" + x + y + "0" + index);
          refreshPage();
        }
      },
      setMiningBaseCoin: function setMiningBaseCoin() {
        this.setMiningType(0);
      },
      setMiningGeoCoin: function setMiningGeoCoin() {
        this.setMiningType(1);
      },
      setMiningAuroCoin: function setMiningAuroCoin() {
        this.setMiningType(2);
      },
      setMiningHydroCoin: function setMiningHydroCoin() {
        this.setMiningType(3);
      },
      setMiningPyroCoin: function setMiningPyroCoin() {
        this.setMiningType(4);
      },
      selectMiningType: function selectMiningType() {
        this.miningTypeSelection.active = true;
      },
      cancelSelectMiningType: function cancelSelectMiningType() {
        this.miningTypeSelection.active = false;
      },
      harvestMining: function harvestMining() {
        makeOperation("hv" + this.data.x + this.data.y);
        this.miningNumLabel.string = "\u5df2\u70bc\u5316\uff1a0";
        refreshPage();
      },
      viewBuffDescription: function viewBuffDescription(content) {
        this.buffDetail.node.active = true;
        this.buffDescription.string = content;
        var self = this;
        setTimeout(function() {
          return self.buffDetail.active = false;
        }, 1e4);
      },
      closeBuffDescription: function closeBuffDescription() {
        this.buffDetail.node.active = false;
      },
      closeBtn: function closeBtn() {
        this.node.removeFromParent();
      }
    });
    var gameGlobals = require("../battleMiddleWare/gameGlobals");
    var _require = require("../battleMiddleWare/gameService"), makeOperation = _require.makeOperation;
    var _require2 = require("../battleMiddleWare/gameUtils"), typeDict = _require2.typeDict, convertPowerString = _require2.convertPowerString, refreshPage = _require2.refreshPage;
    var _require3 = require("../xjfz-journey/classic-v0.0.1/main/objects/Coin"), COIN_KEYS = _require3.COIN_KEYS;
    cc._RF.pop();
  }, {
    "../battleMiddleWare/gameGlobals": "gameGlobals",
    "../battleMiddleWare/gameService": "gameService",
    "../battleMiddleWare/gameUtils": "gameUtils",
    "../xjfz-journey/classic-v0.0.1/main/objects/Coin": "Coin"
  } ],
  deck: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b641eGYBSxCALWgkaWKyszD", "deck");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        equipView: cc.ScrollView,
        spellView: cc.ScrollView
      },
      equipBtn: function equipBtn() {
        this.equipView.node.active = true;
        this.spellView.node.active = false;
      },
      spellBtn: function spellBtn() {
        this.equipView.node.active = false;
        this.spellView.node.active = true;
      },
      backBtn: function backBtn() {
        cc.director.loadScene("hall");
      }
    });
    cc._RF.pop();
  }, {} ],
  decorationItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f9f21g9T6pMk6mwIPfF1cd6", "decorationItem");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Constants_1 = require("../Constants");
    var Globals_1 = require("../Globals");
    var http_1 = require("../http");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DecorationItem = function(_super) {
      __extends(DecorationItem, _super);
      function DecorationItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.useBtn = null;
        _this.priceLbl = null;
        _this.usingLbl = null;
        _this.nameLbl = null;
        _this.category = "";
        _this.index = 1;
        _this.item = null;
        return _this;
      }
      DecorationItem.prototype.refresh = function() {
        var _this = this;
        var item = Globals_1.decoration.find(function(item) {
          return item.category == _this.category && item.index == _this.index;
        });
        var a = [ this.priceLbl, this.useBtn, this.usingLbl ].forEach(function(node) {
          return node.active = false;
        });
        item ? 0 == item.using ? this.useBtn.active = true : this.usingLbl.active = true : this.priceLbl.active = true;
        this.item = item;
      };
      DecorationItem.prototype.use = function() {
        var self = this;
        http_1.sendPostForms("/decoration/switch", this.item, function(response) {
          if ("success" == response) {
            Globals_1.decoration.filter(function(item) {
              return item.category == self.category;
            }).forEach(function(item) {
              return item.using = 0;
            });
            self.item.using = 1;
            cc.find("Canvas").getComponent("decoration").refresh();
          }
        });
      };
      DecorationItem.prototype.changeIcon = function() {
        var _this = this;
        var self = this;
        var iconUrl;
        if (0 == this.index) {
          jsb.reflection.callStaticMethod("org/cocos2dx/javascript/TaptapLoginActivity", "taptapLogin", "()V");
          var fn_1 = function() {
            var o = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/TaptapLoginActivity", "getTaptapIcon", "()Ljava/lang/String;");
            if (!o || 0 == o.length) {
              setTimeout(fn_1, 200);
              return;
            }
            self.sendChangeIconRequest("taptap:" + o);
          };
          setTimeout(fn_1, 200);
        } else {
          iconUrl = Constants_1.DECORATION_MENU.find(function(item) {
            return item.category == _this.category && item.index == _this.index;
          }).url;
          this.sendChangeIconRequest(iconUrl);
        }
      };
      DecorationItem.prototype.sendChangeIconRequest = function(iconUrl) {
        var self = this;
        http_1.sendPostForms("player/changeIcon", iconUrl, function(response) {
          if ("success" == response) {
            Globals_1.decoration.filter(function(item) {
              return item.category == self.category;
            }).forEach(function(item) {
              return item.using = 0;
            });
            self.item.using = 1;
            Globals_1.user.iconUrl = iconUrl;
            cc.find("Canvas").getComponent("decoration").refresh();
          }
        });
      };
      DecorationItem.prototype.buy = function() {
        cc.find("Canvas").getComponent("decoration").activeBuyingConfirmation(this.category, this.index, this.nameLbl.string);
      };
      __decorate([ property(cc.Node) ], DecorationItem.prototype, "useBtn", void 0);
      __decorate([ property(cc.Node) ], DecorationItem.prototype, "priceLbl", void 0);
      __decorate([ property(cc.Node) ], DecorationItem.prototype, "usingLbl", void 0);
      __decorate([ property(cc.Label) ], DecorationItem.prototype, "nameLbl", void 0);
      __decorate([ property ], DecorationItem.prototype, "category", void 0);
      __decorate([ property ], DecorationItem.prototype, "index", void 0);
      DecorationItem = __decorate([ ccclass ], DecorationItem);
      return DecorationItem;
    }(cc.Component);
    exports.default = DecorationItem;
    cc._RF.pop();
  }, {
    "../Constants": "Constants",
    "../Globals": "Globals",
    "../http": "http"
  } ],
  decoration: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9582a0czx5Pe6gx23y4ibCA", "decoration");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AdsManager_1 = require("./AnyThinkAds/AdsManager");
    var Constants_1 = require("./Constants");
    var Globals_1 = require("./Globals");
    var http_1 = require("./http");
    var uiUtils_1 = require("./otherComponents/uiUtils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Decoration = function(_super) {
      __extends(Decoration, _super);
      function Decoration() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.userIcon = null;
        _this.journeyIcon = null;
        _this.hero = null;
        _this.scene = null;
        _this.addGem = null;
        _this.gemLbl = null;
        _this.confirmBuyingNode = null;
        _this.confirmBuyingLabel = null;
        _this.itemWantToBuy = null;
        return _this;
      }
      Decoration.prototype.onLoad = function() {
        if (Globals_1.decoration.length <= 1) {
          var self_1 = this;
          http_1.sendGetForms("decoration/menu", {}, function(response) {
            Globals_1.decoration.push.apply(Globals_1.decoration, response);
            self_1.refresh();
          });
        } else this.refresh();
        this.gemLbl.string = "" + Globals_1.user.gems;
      };
      Decoration.prototype.refresh = function() {
        var nodeLists = [ this.userIcon, this.journeyIcon, this.hero, this.scene ].map(function(layout) {
          return layout.node.children;
        });
        var nodes = [].concat.apply([], nodeLists);
        nodes.forEach(function(node) {
          node.getComponent("decorationItem").refresh();
        });
        this.gemLbl.string = "" + Globals_1.user.gems;
      };
      Decoration.prototype.activeAddGemPage = function() {
        this.addGem.active = true;
      };
      Decoration.prototype.closeAddGemPage = function() {
        this.addGem.active = false;
      };
      Decoration.prototype.viewAds = function() {
        var self = this;
        AdsManager_1.runAds("addGem", Globals_1.user.userid.toString(), function(res) {
          if (res) {
            Globals_1.user.gems += 10;
            self.gemLbl.string = "" + Globals_1.user.gems;
            uiUtils_1.danMu("\u83b7\u5f9710\u94bb\u77f3");
          }
          self.closeAddGemPage();
        });
      };
      Decoration.prototype.activeBuyingConfirmation = function(category, index, itemName) {
        this.itemWantToBuy = {
          category: category,
          index: index
        };
        this.confirmBuyingLabel.string = "\u786e\u5b9a\u8981\u8d2d\u4e70" + itemName + "\u5417?";
        this.confirmBuyingNode.active = true;
      };
      Decoration.prototype.confirmBuying = function() {
        var self = this;
        this.confirmBuyingNode.active = false;
        http_1.sendPostForms("decoration/buy", this.itemWantToBuy, function(response) {
          if (response && response.length > 0) {
            Globals_1.decoration.push.apply(Globals_1.decoration, response);
            uiUtils_1.danMu("\u8d2d\u4e70\u6210\u529f");
            var _a = self.itemWantToBuy, category_1 = _a.category, index_1 = _a.index;
            var item = Constants_1.DECORATION_MENU.find(function(item) {
              return item.category == category_1 && item.index == index_1;
            });
            item && (Globals_1.user.gems -= item.price);
            self.refresh();
          }
        });
      };
      Decoration.prototype.cancelBuying = function() {
        this.confirmBuyingNode.active = false;
      };
      Decoration.prototype.backToHall = function() {
        cc.director.loadScene("hall");
      };
      __decorate([ property(cc.Layout) ], Decoration.prototype, "userIcon", void 0);
      __decorate([ property(cc.Layout) ], Decoration.prototype, "journeyIcon", void 0);
      __decorate([ property(cc.Layout) ], Decoration.prototype, "hero", void 0);
      __decorate([ property(cc.Layout) ], Decoration.prototype, "scene", void 0);
      __decorate([ property(cc.Node) ], Decoration.prototype, "addGem", void 0);
      __decorate([ property(cc.Label) ], Decoration.prototype, "gemLbl", void 0);
      __decorate([ property(cc.Node) ], Decoration.prototype, "confirmBuyingNode", void 0);
      __decorate([ property(cc.Label) ], Decoration.prototype, "confirmBuyingLabel", void 0);
      Decoration = __decorate([ ccclass ], Decoration);
      return Decoration;
    }(cc.Component);
    exports.default = Decoration;
    cc._RF.pop();
  }, {
    "./AnyThinkAds/AdsManager": "AdsManager",
    "./Constants": "Constants",
    "./Globals": "Globals",
    "./http": "http",
    "./otherComponents/uiUtils": "uiUtils"
  } ],
  email: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "190a9UXkaZJ1asourztWxjB", "email");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      NewClass.prototype.start = function() {};
      NewClass.prototype.close = function() {
        this.node.active = false;
      };
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  entryTemplate: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2794bY+DIZC34y6kbfbPEIs", "entryTemplate");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        date: cc.Label,
        items: cc.Layout,
        power: cc.Label,
        itemIcon: cc.Prefab,
        historyDate: cc.Label,
        isEnd: false,
        baseInfo: null
      },
      init: function init(obj) {
        var _this = this;
        console.log(obj);
        this.baseInfo = obj;
        if (obj.results) {
          var index = [ obj.player1id, obj.player2id, obj.player3id ].indexOf(user.userid);
          var rank = parseInt(obj.results.toString().charAt(index));
          this.date.string = [ "\u9b41\u9996", "\u4e9a\u5723", "\u4e09\u624d" ][rank - 1];
          this.isEnd = true;
          if (this.historyDate) {
            var passedSecond = Date.now() / 1e3 - obj.startTime;
            var passedDay = Math.floor(passedSecond / 86400);
            this.historyDate.string = passedDay + "\u5929\u524d";
          }
        } else {
          var date = Math.floor((new Date().valueOf() / 1e3 - obj.startTime) / 86400) + 1;
          var NUM_CN = [ "\u65e0", "\u58f9", "\u8d30", "\u53c1", "\u8086", "\u4f0d", "\u9646", "\u67d2" ];
          this.date.string = NUM_CN[date];
        }
        var self = this;
        obj.overview.iconList.filter(function(itemInfo) {
          return typeDict()[itemInfo.type].overviewDisplay;
        }).forEach(function(itemInfo) {
          var item = cc.instantiate(_this.itemIcon);
          item.getComponent("itemOverview").init(itemInfo);
          self.items.node.addChild(item);
        });
        this.power.string = convertPowerString(obj.overview.power, 1e6);
      },
      entryBtn: function entryBtn() {
        var info = this.baseInfo;
        var self = this;
        if (!journey.hasVersion(info.version)) {
          danMu("\u7248\u672c\u8fc7\u65e7\uff0c\u5df2\u65e0\u6cd5\u56de\u653e");
          return;
        }
        gameGlobals.gameInfo = info;
        var needFetchInfo = function() {
          if (!info.records || 0 == info.records.length) return true;
          if (info.refreshTime && info.refreshTime < Date.now()) return true;
          return false;
        }();
        if (needFetchInfo) http.sendGetForms("journey/baseinfo/" + info.roomid, {}, function(response) {
          delete response["overview"];
          Object.assign(info, response);
          info.refreshTime = null;
          console.log(journey);
          gameGlobals.isTrying = self.isEnd;
          journey.getRouter(info.version).initForCocos();
          initGame(response.records, info.version);
          cc.director.loadScene("gameMain");
        }); else {
          initGame(info.records, info.version);
          cc.director.loadScene("gameMain");
        }
      }
    });
    var _require = require("../battleMiddleWare/gameService"), initGame = _require.initGame;
    var http = require("../http");
    var gameGlobals = require("../battleMiddleWare/gameGlobals");
    var journey = require("../xjfz-journey/index");
    var _require2 = require("../battleMiddleWare/gameUtils"), typeDict = _require2.typeDict, convertPowerString = _require2.convertPowerString;
    var _require3 = require("../Globals"), user = _require3.user;
    var _require4 = require("../otherComponents/uiUtils"), danMu = _require4.danMu;
    cc._RF.pop();
  }, {
    "../Globals": "Globals",
    "../battleMiddleWare/gameGlobals": "gameGlobals",
    "../battleMiddleWare/gameService": "gameService",
    "../battleMiddleWare/gameUtils": "gameUtils",
    "../http": "http",
    "../otherComponents/uiUtils": "uiUtils",
    "../xjfz-journey/index": "index"
  } ],
  equipDetails: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2e5f71gHmVATo97z57YfPFh", "equipDetails");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        id: 1,
        nameLbl: cc.Label,
        iconSF: cc.Sprite,
        buy: cc.Button,
        buyLbl: cc.Label,
        detail: cc.Label,
        price: cc.Node,
        energyLabel: cc.Label
      },
      init: function init(id) {
        var data = getCurrPlayer().findEquip(id), price;
        var Equip = equips()[id];
        this.id = id;
        if (data) {
          this.buyLbl.string = "\u5347\u7ea7";
          price = Equip.upgrade_price;
          data.level >= constant().EQUIP_MAX_LEVEL && (this.buy.node.active = false);
        } else {
          this.buyLbl.string = "\u8d2d\u4e70";
          price = Equip.buy_price;
        }
        this.price.getComponent("price").init(getCurrPlayer().calculatePrice(price));
        var energy = getCurrPlayer().calculateEnergyCost(Equip.energy_cost);
        this.energyLabel.string = "" + energy;
        var self = this;
        cc.loader.loadRes(Equip.iconUrl, cc.SpriteFrame, function(err, spriteFrame) {
          err && console.log(err);
          self.iconSF.spriteFrame = spriteFrame;
        });
        this.detail.string = Equip.description;
        this.nameLbl.string = Equip.equip_name;
        this.cost = false;
      },
      buyBtn: function buyBtn() {
        "\u8d2d\u4e70" == this.buyLbl.string ? makeOperation("be00" + fillWithZero(this.id, 2)) : makeOperation("ue00" + fillWithZero(this.id, 2));
        this.init(this.id);
      },
      closeBtn: function closeBtn() {
        this.node.removeFromParent();
      }
    });
    var _require = require("../battleMiddleWare/gameService"), makeOperation = _require.makeOperation;
    var _require2 = require("../battleMiddleWare/gameUtils"), getCurrPlayer = _require2.getCurrPlayer, equips = _require2.equips, constant = _require2.constant;
    var _require3 = require("../otherComponents/commonUtils"), fillWithZero = _require3.fillWithZero;
    cc._RF.pop();
  }, {
    "../battleMiddleWare/gameService": "gameService",
    "../battleMiddleWare/gameUtils": "gameUtils",
    "../otherComponents/commonUtils": "commonUtils"
  } ],
  equipItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b1e58ai+c1KlZf1YwYgeP2g", "equipItem");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        id: 0,
        data: null,
        iconSF: cc.Sprite,
        cost: cc.Label,
        detail: cc.Prefab,
        blocking: cc.Node,
        equipName: cc.Node,
        equipNameLabel: cc.Label
      },
      init: function init(data, onlyShow) {
        void 0 === onlyShow && (onlyShow = false);
        var id;
        if ("number" == typeof data) {
          id = data;
          data = getCurrPlayer().findEquip(id);
        } else id = typeDict()[data.type].id;
        this.id = id;
        this.data = data;
        var Equip = equips();
        var self = this;
        cc.loader.loadRes(Equip[id].iconUrl, cc.SpriteFrame, function(err, spriteFrame) {
          self.iconSF.spriteFrame = spriteFrame;
        });
        this.refresh();
        if (onlyShow) {
          this.blocking.active = true;
          this.equipNameLabel.string = typeDict()[data.type].equip_name;
        }
      },
      refresh: function refresh() {
        var data = checkEquip(this.id);
        if (data) {
          this.cost.node.active = true;
          this.cost.string = "Lv" + data.level;
          this.node.zIndex = this.id;
        } else {
          this.cost.node.active = false;
          this.cost.string = "";
          this.node.zIndex = 1e3 + this.id;
        }
      },
      seeDetailBtn: function seeDetailBtn() {
        var detail = cc.instantiate(this.detail);
        detail.getComponent("equipDetails").init(this.id);
        root().addChild(detail);
      },
      seeNameBtn: function seeNameBtn() {
        var equipName = this.equipName;
        equipName.active = true;
        setTimeout(function() {
          return equipName.active = false;
        }, 1e4);
      },
      hideNameBtn: function hideNameBtn() {
        this.equipName.active = false;
      }
    });
    var _require = require("../battleMiddleWare/gameUtils"), checkEquip = _require.checkEquip, equips = _require.equips, typeDict = _require.typeDict, getCurrPlayer = _require.getCurrPlayer;
    var _require2 = require("../otherComponents/uiUtils"), root = _require2.root;
    cc._RF.pop();
  }, {
    "../battleMiddleWare/gameUtils": "gameUtils",
    "../otherComponents/uiUtils": "uiUtils"
  } ],
  equips: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f28f2tYr3JNVZM6PED3T3GH", "equips");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        list: cc.Layout,
        item: cc.Prefab
      },
      start: function start() {
        var equipList = equips();
        for (var i = 0; i < equipList.length; i++) {
          if (!equipList[i] || !equipList[i].valid) continue;
          this.list.node.addChild(initNode(this.item, "equipItem", i));
        }
      },
      refresh: function refresh() {
        this.list.node.children.forEach(function(item) {
          item.getComponent("equipItem").refresh();
        });
      },
      backBtn: function backBtn() {
        this.node.active = false;
      }
    });
    var _require = require("../otherComponents/uiUtils"), initNode = _require.initNode;
    var _require2 = require("../battleMiddleWare/gameUtils"), equips = _require2.equips;
    cc._RF.pop();
  }, {
    "../battleMiddleWare/gameUtils": "gameUtils",
    "../otherComponents/uiUtils": "uiUtils"
  } ],
  fetch: [ function(require, module, exports) {
    (function(global) {
      "use strict";
      cc._RF.push(module, "668edy6C8FE8a7TzWChr3/k", "fetch");
      "use strict";
      exports.__esModule = true;
      exports.DOMException = void 0;
      exports.Headers = Headers;
      exports.Request = Request;
      exports.Response = Response;
      exports.fetch = fetch;
      var g = "undefined" !== typeof globalThis && globalThis || "undefined" !== typeof self && self || "undefined" !== typeof global && global || {};
      var support = {
        searchParams: "URLSearchParams" in g,
        iterable: "Symbol" in g && "iterator" in Symbol,
        blob: "FileReader" in g && "Blob" in g && function() {
          try {
            new Blob();
            return true;
          } catch (e) {
            return false;
          }
        }(),
        formData: "FormData" in g,
        arrayBuffer: "ArrayBuffer" in g
      };
      function isDataView(obj) {
        return obj && DataView.prototype.isPrototypeOf(obj);
      }
      if (support.arrayBuffer) {
        var viewClasses = [ "[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]" ];
        var isArrayBufferView = ArrayBuffer.isView || function(obj) {
          return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
        };
      }
      function normalizeName(name) {
        "string" !== typeof name && (name = String(name));
        if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || "" === name) throw new TypeError('Invalid character in header field name: "' + name + '"');
        return name.toLowerCase();
      }
      function normalizeValue(value) {
        "string" !== typeof value && (value = String(value));
        return value;
      }
      function iteratorFor(items) {
        var iterator = {
          next: function next() {
            var value = items.shift();
            return {
              done: void 0 === value,
              value: value
            };
          }
        };
        support.iterable && (iterator[Symbol.iterator] = function() {
          return iterator;
        });
        return iterator;
      }
      function Headers(headers) {
        this.map = {};
        headers instanceof Headers ? headers.forEach(function(value, name) {
          this.append(name, value);
        }, this) : Array.isArray(headers) ? headers.forEach(function(header) {
          if (2 != header.length) throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + header.length);
          this.append(header[0], header[1]);
        }, this) : headers && Object.getOwnPropertyNames(headers).forEach(function(name) {
          this.append(name, headers[name]);
        }, this);
      }
      Headers.prototype.append = function(name, value) {
        name = normalizeName(name);
        value = normalizeValue(value);
        var oldValue = this.map[name];
        this.map[name] = oldValue ? oldValue + ", " + value : value;
      };
      Headers.prototype["delete"] = function(name) {
        delete this.map[normalizeName(name)];
      };
      Headers.prototype.get = function(name) {
        name = normalizeName(name);
        return this.has(name) ? this.map[name] : null;
      };
      Headers.prototype.has = function(name) {
        return this.map.hasOwnProperty(normalizeName(name));
      };
      Headers.prototype.set = function(name, value) {
        this.map[normalizeName(name)] = normalizeValue(value);
      };
      Headers.prototype.forEach = function(callback, thisArg) {
        for (var name in this.map) this.map.hasOwnProperty(name) && callback.call(thisArg, this.map[name], name, this);
      };
      Headers.prototype.keys = function() {
        var items = [];
        this.forEach(function(value, name) {
          items.push(name);
        });
        return iteratorFor(items);
      };
      Headers.prototype.values = function() {
        var items = [];
        this.forEach(function(value) {
          items.push(value);
        });
        return iteratorFor(items);
      };
      Headers.prototype.entries = function() {
        var items = [];
        this.forEach(function(value, name) {
          items.push([ name, value ]);
        });
        return iteratorFor(items);
      };
      support.iterable && (Headers.prototype[Symbol.iterator] = Headers.prototype.entries);
      function consumed(body) {
        if (body._noBody) return;
        if (body.bodyUsed) return Promise.reject(new TypeError("Already read"));
        body.bodyUsed = true;
      }
      function fileReaderReady(reader) {
        return new Promise(function(resolve, reject) {
          reader.onload = function() {
            resolve(reader.result);
          };
          reader.onerror = function() {
            reject(reader.error);
          };
        });
      }
      function readBlobAsArrayBuffer(blob) {
        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsArrayBuffer(blob);
        return promise;
      }
      function readBlobAsText(blob) {
        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        var match = /charset=([A-Za-z0-9_-]+)/.exec(blob.type);
        var encoding = match ? match[1] : "utf-8";
        reader.readAsText(blob, encoding);
        return promise;
      }
      function readArrayBufferAsText(buf) {
        var view = new Uint8Array(buf);
        var chars = new Array(view.length);
        for (var i = 0; i < view.length; i++) chars[i] = String.fromCharCode(view[i]);
        return chars.join("");
      }
      function bufferClone(buf) {
        if (buf.slice) return buf.slice(0);
        var view = new Uint8Array(buf.byteLength);
        view.set(new Uint8Array(buf));
        return view.buffer;
      }
      function Body() {
        this.bodyUsed = false;
        this._initBody = function(body) {
          this.bodyUsed = this.bodyUsed;
          this._bodyInit = body;
          if (body) if ("string" === typeof body) this._bodyText = body; else if (support.blob && Blob.prototype.isPrototypeOf(body)) this._bodyBlob = body; else if (support.formData && FormData.prototype.isPrototypeOf(body)) this._bodyFormData = body; else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) this._bodyText = body.toString(); else if (support.arrayBuffer && support.blob && isDataView(body)) {
            this._bodyArrayBuffer = bufferClone(body.buffer);
            this._bodyInit = new Blob([ this._bodyArrayBuffer ]);
          } else support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body)) ? this._bodyArrayBuffer = bufferClone(body) : this._bodyText = body = Object.prototype.toString.call(body); else {
            this._noBody = true;
            this._bodyText = "";
          }
          this.headers.get("content-type") || ("string" === typeof body ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : support.searchParams && URLSearchParams.prototype.isPrototypeOf(body) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
        };
        support.blob && (this.blob = function() {
          var rejected = consumed(this);
          if (rejected) return rejected;
          if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer) return Promise.resolve(new Blob([ this._bodyArrayBuffer ]));
          if (this._bodyFormData) throw new Error("could not read FormData body as blob");
          return Promise.resolve(new Blob([ this._bodyText ]));
        });
        this.arrayBuffer = function() {
          if (this._bodyArrayBuffer) {
            var isConsumed = consumed(this);
            return isConsumed || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer));
          }
          if (support.blob) return this.blob().then(readBlobAsArrayBuffer);
          throw new Error("could not read as ArrayBuffer");
        };
        this.text = function() {
          var rejected = consumed(this);
          if (rejected) return rejected;
          if (this._bodyBlob) return readBlobAsText(this._bodyBlob);
          if (this._bodyArrayBuffer) return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
          if (this._bodyFormData) throw new Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText);
        };
        support.formData && (this.formData = function() {
          return this.text().then(decode);
        });
        this.json = function() {
          return this.text().then(JSON.parse);
        };
        return this;
      }
      var methods = [ "CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE" ];
      function normalizeMethod(method) {
        var upcased = method.toUpperCase();
        return methods.indexOf(upcased) > -1 ? upcased : method;
      }
      function Request(input, options) {
        if (!(this instanceof Request)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        options = options || {};
        var body = options.body;
        if (input instanceof Request) {
          if (input.bodyUsed) throw new TypeError("Already read");
          this.url = input.url;
          this.credentials = input.credentials;
          options.headers || (this.headers = new Headers(input.headers));
          this.method = input.method;
          this.mode = input.mode;
          this.signal = input.signal;
          if (!body && null != input._bodyInit) {
            body = input._bodyInit;
            input.bodyUsed = true;
          }
        } else this.url = String(input);
        this.credentials = options.credentials || this.credentials || "same-origin";
        !options.headers && this.headers || (this.headers = new Headers(options.headers));
        this.method = normalizeMethod(options.method || this.method || "GET");
        this.mode = options.mode || this.mode || null;
        this.signal = options.signal || this.signal || function() {
          if ("AbortController" in g) {
            var ctrl = new AbortController();
            return ctrl.signal;
          }
        }();
        this.referrer = null;
        if (("GET" === this.method || "HEAD" === this.method) && body) throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(body);
        if (("GET" === this.method || "HEAD" === this.method) && ("no-store" === options.cache || "no-cache" === options.cache)) {
          var reParamSearch = /([?&])_=[^&]*/;
          if (reParamSearch.test(this.url)) this.url = this.url.replace(reParamSearch, "$1_=" + new Date().getTime()); else {
            var reQueryString = /\?/;
            this.url += (reQueryString.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
          }
        }
      }
      Request.prototype.clone = function() {
        return new Request(this, {
          body: this._bodyInit
        });
      };
      function decode(body) {
        var form = new FormData();
        body.trim().split("&").forEach(function(bytes) {
          if (bytes) {
            var split = bytes.split("=");
            var name = split.shift().replace(/\+/g, " ");
            var value = split.join("=").replace(/\+/g, " ");
            form.append(decodeURIComponent(name), decodeURIComponent(value));
          }
        });
        return form;
      }
      function parseHeaders(rawHeaders) {
        var headers = new Headers();
        var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
        preProcessedHeaders.split("\r").map(function(header) {
          return 0 === header.indexOf("\n") ? header.substr(1, header.length) : header;
        }).forEach(function(line) {
          var parts = line.split(":");
          var key = parts.shift().trim();
          if (key) {
            var value = parts.join(":").trim();
            try {
              headers.append(key, value);
            } catch (error) {
              console.warn("Response " + error.message);
            }
          }
        });
        return headers;
      }
      Body.call(Request.prototype);
      function Response(bodyInit, options) {
        if (!(this instanceof Response)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        options || (options = {});
        this.type = "default";
        this.status = void 0 === options.status ? 200 : options.status;
        if (this.status < 200 || this.status > 599) throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
        this.ok = this.status >= 200 && this.status < 300;
        this.statusText = void 0 === options.statusText ? "" : "" + options.statusText;
        this.headers = new Headers(options.headers);
        this.url = options.url || "";
        this._initBody(bodyInit);
      }
      Body.call(Response.prototype);
      Response.prototype.clone = function() {
        return new Response(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new Headers(this.headers),
          url: this.url
        });
      };
      Response.error = function() {
        var response = new Response(null, {
          status: 200,
          statusText: ""
        });
        response.ok = false;
        response.status = 0;
        response.type = "error";
        return response;
      };
      var redirectStatuses = [ 301, 302, 303, 307, 308 ];
      Response.redirect = function(url, status) {
        if (-1 === redirectStatuses.indexOf(status)) throw new RangeError("Invalid status code");
        return new Response(null, {
          status: status,
          headers: {
            location: url
          }
        });
      };
      var DOMException = g.DOMException;
      exports.DOMException = DOMException;
      try {
        new DOMException();
      } catch (err) {
        exports.DOMException = DOMException = function DOMException(message, name) {
          this.message = message;
          this.name = name;
          var error = Error(message);
          this.stack = error.stack;
        };
        DOMException.prototype = Object.create(Error.prototype);
        DOMException.prototype.constructor = DOMException;
      }
      function fetch(input, init) {
        return new Promise(function(resolve, reject) {
          var request = new Request(input, init);
          if (request.signal && request.signal.aborted) return reject(new DOMException("Aborted", "AbortError"));
          var xhr = new XMLHttpRequest();
          function abortXhr() {
            xhr.abort();
          }
          xhr.onload = function() {
            var options = {
              statusText: xhr.statusText,
              headers: parseHeaders(xhr.getAllResponseHeaders() || "")
            };
            0 === request.url.indexOf("file://") && (xhr.status < 200 || xhr.status > 599) ? options.status = 200 : options.status = xhr.status;
            options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
            var body = "response" in xhr ? xhr.response : xhr.responseText;
            setTimeout(function() {
              resolve(new Response(body, options));
            }, 0);
          };
          xhr.onerror = function() {
            setTimeout(function() {
              reject(new TypeError("Network request failed"));
            }, 0);
          };
          xhr.ontimeout = function() {
            setTimeout(function() {
              reject(new TypeError("Network request timed out"));
            }, 0);
          };
          xhr.onabort = function() {
            setTimeout(function() {
              reject(new DOMException("Aborted", "AbortError"));
            }, 0);
          };
          function fixUrl(url) {
            try {
              return "" === url && g.location.href ? g.location.href : url;
            } catch (e) {
              return url;
            }
          }
          xhr.open(request.method, fixUrl(request.url), true);
          "include" === request.credentials ? xhr.withCredentials = true : "omit" === request.credentials && (xhr.withCredentials = false);
          "responseType" in xhr && (support.blob ? xhr.responseType = "blob" : support.arrayBuffer && (xhr.responseType = "arraybuffer"));
          if (init && "object" === typeof init.headers && !(init.headers instanceof Headers || g.Headers && init.headers instanceof g.Headers)) {
            var names = [];
            Object.getOwnPropertyNames(init.headers).forEach(function(name) {
              names.push(normalizeName(name));
              xhr.setRequestHeader(name, normalizeValue(init.headers[name]));
            });
            request.headers.forEach(function(value, name) {
              -1 === names.indexOf(name) && xhr.setRequestHeader(name, value);
            });
          } else request.headers.forEach(function(value, name) {
            xhr.setRequestHeader(name, value);
          });
          if (request.signal) {
            request.signal.addEventListener("abort", abortXhr);
            xhr.onreadystatechange = function() {
              4 === xhr.readyState && request.signal.removeEventListener("abort", abortXhr);
            };
          }
          xhr.send("undefined" === typeof request._bodyInit ? null : request._bodyInit);
        });
      }
      fetch.polyfill = true;
      if (!g.fetch) {
        g.fetch = fetch;
        g.Headers = Headers;
        g.Request = Request;
        g.Response = Response;
      }
      cc._RF.pop();
    }).call(this, "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
  }, {} ],
  fightUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e95fc39wUtI5LdyS7AJBgTy", "fightUI");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        player1Icon: cc.Sprite,
        player2Icon: cc.Sprite,
        inkAnimation: cc.Sprite,
        logPrefab: cc.Prefab,
        layout: cc.Node,
        _moved: false,
        _currIndex: 0,
        _layoutHeight: 0
      },
      init: function init(player1Code, player2Code) {
        var _this = this;
        var setPlayerIcon = function setPlayerIcon(code, icon) {
          var address = getPlayerIconUrl(code, "hero");
          cc.loader.loadRes(address, cc.SpriteFrame, function(err, spriteFrame2) {
            err && console.log(err);
            icon.spriteFrame = spriteFrame2;
          });
        };
        setPlayerIcon(player1Code, this.player1Icon);
        setPlayerIcon(player2Code, this.player2Icon);
        this.layout.removeAllChildren();
        var parent = gameGlobals.logs[gameGlobals.logs.length - 1][0];
        var self = this;
        parent.children.forEach(function(log) {
          var logNode = cc.instantiate(_this.logPrefab);
          logNode.getComponent("historyLog").init(log);
          logNode.getComponent("historyLog").expandAll();
          logNode.opacity = 0;
          self.layout.addChild(logNode);
        });
        this._currIndex = 0;
        this._layoutHeight = 0;
      },
      addLog: function addLog() {
        if (this._currIndex >= this.layout.childrenCount) return;
        var logNode = this.layout.children[this._currIndex];
        logNode.opacity = 255;
        this._layoutHeight += logNode.height;
        this._currIndex++;
        this._moved || (this._layoutHeight > 680 ? this.layout.y = this._layoutHeight - this.layout.height / 2 - 340 : this.layout.y = 340 - this.layout.height / 2);
      },
      scrolled: function scrolled(_, event) {
        this._moved = ![ cc.ScrollView.EventType.BOUNCE_BOTTOM, cc.ScrollView.EventType.SCROLL_TO_BOTTOM ].includes(event);
      },
      skip: function skip() {
        gameGlobals.animationPlayer.skip();
        var self = this;
        setTimeout(function() {
          return self.node.active = false;
        }, 100);
      },
      update: function update(dt) {
        config.playAnimation && gameGlobals.animationPlayer.play({
          animationIcon: this.inkAnimation,
          gridIcon: this.node,
          x: 77,
          y: 77,
          config: config
        });
      }
    });
    var _require = require("../Globals"), config = _require.config, decoration = _require.decoration;
    var gameGlobals = require("../battleMiddleWare/gameGlobals");
    var _require2 = require("../battleMiddleWare/gameUtils"), getPlayerIconUrl = _require2.getPlayerIconUrl, refreshPage = _require2.refreshPage;
    cc._RF.pop();
  }, {
    "../Globals": "Globals",
    "../battleMiddleWare/gameGlobals": "gameGlobals",
    "../battleMiddleWare/gameUtils": "gameUtils"
  } ],
  gameConstants: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b7da8ihX2VPoYNuJCrzgBUP", "gameConstants");
    "use strict";
    var MAP_SIZE = 7;
    var EQUIP_ENERGY_COST = 10;
    var EQUIP_MAX_LEVEL = 20;
    var UPGRADE_GROW_RATIO = 1.05;
    var MAX_ENERGY = 2e3;
    module.exports = {
      MAP_SIZE: MAP_SIZE,
      EQUIP_ENERGY_COST: EQUIP_ENERGY_COST,
      EQUIP_MAX_LEVEL: EQUIP_MAX_LEVEL,
      UPGRADE_GROW_RATIO: UPGRADE_GROW_RATIO,
      MAX_ENERGY: MAX_ENERGY
    };
    cc._RF.pop();
  }, {} ],
  gameEntry: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ab3adzmg9xDObTYFMSfAwq1", "gameEntry");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Globals_1 = require("../Globals");
    var http_1 = require("../http");
    var uiUtils_1 = require("../otherComponents/uiUtils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.games = null;
        _this.layout = null;
        _this.choose = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        uiUtils_1.loadingView();
        var self = this;
        if (Globals_1.journey.rooms) {
          this.refreshRooms();
          uiUtils_1.completeLoading();
        } else http_1.sendGetForms("journey/rooms", {}, function(response) {
          Object.assign(Globals_1.journey, response);
          Globals_1.journey.rooms || (Globals_1.journey.rooms = []);
          Globals_1.journey.joined = response.joined;
          self.refreshRooms();
          uiUtils_1.completeLoading();
        });
      };
      NewClass.prototype.refreshRooms = function() {
        var games = this.games;
        var layout = this.layout;
        layout.node.removeAllChildren();
        Globals_1.journey.rooms.forEach(function(room) {
          var game = cc.instantiate(games);
          game.getComponent("entryTemplate").init(room);
          layout.node.addChild(game);
        });
        layout.updateLayout();
        layout.node.y = 750 - layout.node.height / 2;
        console.log("layout y refreshed");
      };
      NewClass.prototype.addGameBtn = function() {
        Globals_1.journey.joined ? uiUtils_1.danMu("\u4e00\u5929\u53ea\u80fd\u5f00\u542f\u4e00\u573a\u6e38\u620f") : this.choose.active = true;
      };
      NewClass.prototype.backBtn = function() {
        cc.director.loadScene("hall");
      };
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "games", void 0);
      __decorate([ property(cc.Layout) ], NewClass.prototype, "layout", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "choose", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../Globals": "Globals",
    "../http": "http",
    "../otherComponents/uiUtils": "uiUtils"
  } ],
  gameGlobals: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "08deeTJwHFNG7EzfKjK11Gu", "gameGlobals");
    "use strict";
    var _require = require("../xjfz-journey/classic-v0.0.1/main/animations/animationPlayer"), AnimationPlayer = _require.AnimationPlayer;
    var journey = require("../xjfz-journey/index");
    module.exports = {
      gameModule: journey["classic-v0.0.1"],
      gameObj: journey.getRouter("classic-v0.0.1").newGame(),
      gameInfo: {
        roomid: 17,
        player1id: 274,
        player2id: 275,
        player3id: 273,
        playerInfo: [ {
          userid: 274,
          nickname: "\u7ef4\u5c14\u8587\u7684\u72d7",
          iconUrl: "file:heroIcon/3.png",
          decorations: [ {
            userid: 274,
            category: "hero",
            index: 4,
            using: 1
          }, {
            userid: 274,
            category: "player",
            index: 4,
            using: 1
          }, {
            userid: 274,
            category: "scene",
            index: 1,
            using: 1
          }, {
            userid: 274,
            category: "userIcon",
            index: 0,
            using: 1
          } ],
          game_times: 0,
          win_times: 0,
          power: 0,
          gems: 0,
          trophic: 0
        }, {
          userid: 275,
          nickname: "\u571f\u7cfbking",
          iconUrl: '"file:heroIcon/1.png"',
          decorations: [ {
            userid: 275,
            category: "hero",
            index: 2,
            using: 1
          }, {
            userid: 275,
            category: "player",
            index: 1,
            using: 1
          }, {
            userid: 275,
            category: "scene",
            index: 4,
            using: 1
          }, {
            userid: 275,
            category: "userIcon",
            index: 1,
            using: 1
          } ],
          game_times: 0,
          win_times: 0,
          power: 0,
          gems: 0,
          trophic: 0
        }, {
          userid: 273,
          nickname: "\u65e9C\u665aA",
          iconUrl: "file:heroIcon/2.png",
          decorations: [ {
            userid: 273,
            category: "hero",
            index: 4,
            using: 1
          }, {
            userid: 273,
            category: "player",
            index: 4,
            using: 1
          }, {
            userid: 273,
            category: "scene",
            index: 1,
            using: 1
          }, {
            userid: 273,
            category: "userIcon",
            index: 0,
            using: 1
          } ],
          game_times: 0,
          win_times: 0,
          power: 0,
          gems: 0,
          trophic: 0
        } ],
        observing: {
          logs: [],
          status: 1
        },
        entrying: {
          logs: [],
          status: 1
        },
        records: [ "0000001st000", "0000002st003", "0000003st000" ],
        overview: {
          power: "",
          iconList: []
        },
        startTime: 1718980800,
        version: "classic-v0.0.1",
        results: 0
      },
      gameVersion: "classic-v0.0.1",
      gameRouter: journey["classic-v0.0.1"].routers,
      initPosition: -1,
      historyPosition: 1,
      gameRecords: [],
      operations: [],
      logs: [],
      currPLayerIndex: 1,
      animationPlayer: new AnimationPlayer(),
      refreshed: false,
      isTrying: false,
      isEntering: false,
      isMocking: false,
      currTime: 0,
      temp: null,
      journeyInfos: []
    };
    cc._RF.pop();
  }, {
    "../xjfz-journey/classic-v0.0.1/main/animations/animationPlayer": "animationPlayer",
    "../xjfz-journey/index": "index"
  } ],
  gameHistory: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6ec4eqjLa9IS6qQ3LEatrNL", "gameHistory");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Globals_1 = require("../Globals");
    var http_1 = require("../http");
    var uiUtils_1 = require("../otherComponents/uiUtils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameHistory = function(_super) {
      __extends(GameHistory, _super);
      function GameHistory() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.games = null;
        _this.layout = null;
        _this.url = "journey/history";
        return _this;
      }
      GameHistory.prototype.start = function() {
        uiUtils_1.loadingView();
        var self = this;
        if (Globals_1.journey.pastrooms) {
          this.refreshRooms();
          uiUtils_1.completeLoading();
        } else http_1.sendGetForms(this.url, {}, function(response) {
          response && response.length ? Globals_1.journey.pastrooms = response : Globals_1.journey.pastrooms = [];
          self.refreshRooms();
          uiUtils_1.completeLoading();
        });
      };
      GameHistory.prototype.refreshRooms = function() {
        var games = this.games;
        var layout = this.layout;
        layout.node.removeAllChildren();
        Globals_1.journey.pastrooms.sort(function(a, b) {
          return b.startTime - a.startTime;
        });
        Globals_1.journey.pastrooms.forEach(function(room) {
          var game = cc.instantiate(games);
          game.getComponent("entryTemplate").init(room);
          layout.node.addChild(game);
        });
        layout.updateLayout();
        layout.node.y = 750 - layout.node.height / 2;
        console.log("layout y refreshed");
      };
      GameHistory.prototype.backBtn = function() {
        cc.director.loadScene("hall");
      };
      __decorate([ property(cc.Prefab) ], GameHistory.prototype, "games", void 0);
      __decorate([ property(cc.Layout) ], GameHistory.prototype, "layout", void 0);
      GameHistory = __decorate([ ccclass ], GameHistory);
      return GameHistory;
    }(cc.Component);
    exports.default = GameHistory;
    cc._RF.pop();
  }, {
    "../Globals": "Globals",
    "../http": "http",
    "../otherComponents/uiUtils": "uiUtils"
  } ],
  gameLogger: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d1fd0JgaUxGX4/W+n8YN3M6", "gameLogger");
    "use strict";
    var enable = false;
    module.exports = {
      logChangeCoinsInfo: function logChangeCoinsInfo(player, coins, time) {
        if (!enable) return;
        if (0 == coins) return;
        var subject = getName(player);
        var verb = coins > 0 ? "\u5f97\u5230\u4e86" : "\u5931\u53bb\u4e86";
        this.logInfo(timeStr(time) + " " + subject + verb + Math.abs(coins) + "\u91d1\u5e01");
      },
      logUpdateSpeedInfo: function logUpdateSpeedInfo(player, speed, time) {
        if (!enable) return;
        if (1 == speed) return;
        var subject = getName(player);
        var verb = speed > 1 ? "\u589e\u52a0\u4e86" : "\u51cf\u5c11\u4e86";
        this.logInfo(timeStr(time) + " " + subject + "\u7684\u901f\u5ea6" + verb + Math.abs(100 * (speed - 1)) + "%");
      },
      logInfo: function logInfo(sentence) {
        this.infoList.push(sentence);
      },
      infoList: []
    };
    var getName = function getName(player) {
      return player.nickname ? player.nickname : "\u73a9\u5bb6" + player.userid;
    };
    var timeStr = function timeStr(time) {
      return time ? time.toString() : new Date().toString();
    };
    cc._RF.pop();
  }, {} ],
  gameLogicRoutes: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "be9b2rEayhHb4C57BNkDx4X", "gameLogicRoutes");
    "use strict";
    var _require = require("./main/wheels/common"), GameLogicError = _require.GameLogicError;
    var _require2 = require("./main/Game"), Game = _require2.Game;
    var _require3 = require("./main/constants/timeConstants"), ONE_HOUR = _require3.ONE_HOUR, ONE_JOURNEY_DAY = _require3.ONE_JOURNEY_DAY;
    var obj = {
      updateGame: function updateGame(game, instrutions) {
        try {
          instrutions.forEach(function(instru) {
            console.log(instru);
            game.currUser = game.getPlayer(parseInt(instru.substring(6, 7)));
            game.recordNum++;
            var player1 = game.currUser;
            switch (instru.substring(7, 9)) {
             case "at":
              player1.challenge(game.map[getY(instru)][getX(instru)]);
              break;

             case "be":
              player1.buyEquip(getId(instru));
              break;

             case "ue":
              player1.upgradeEquip(getId(instru));
              break;

             case "bs":
              player1.buySpell(getId(instru), getX(instru), getY(instru), getExtra(instru));
              break;

             case "bp":
              player1.buyPet(getId(instru), getX(instru), getY(instru));
              break;

             case "cm":
              player1.changeMiningType(getX(instru), getY(instru), getId(instru));
              break;

             case "hv":
              player1.harvest(getX(instru), getY(instru));
              break;

             case "st":
              player1.bidding(getId(instru));
              break;

             case "ct":
              game.changeTime(parseInt(instru.substring(0, 6)), parseInt(instru.substring(6, 7)));
              break;

             case "et":
              game.playerEnter(parseInt(instru.substring(0, 6)), parseInt(instru.substring(6, 7)));
              break;

             case "lv":
              game.setLevel(getId(instru));
            }
            game.listeners.OperateListeners.check(player1);
          });
          return "success";
        } catch (err) {
          console.log(err);
          return err instanceof GameLogicError ? err.message : isFrontEnd.cocos ? "\u975e\u6cd5\u64cd\u4f5c" : "\u670d\u52a1\u5668\u6545\u969c";
        }
      },
      enterGame: function enterGame(game, time, player_index) {
        try {
          game.currUser = game.getPlayer(player_index);
          game.addLog("\u5728\u65e0\u4eba\u4fee\u884c\u7684\u8fd9\u6bb5\u65f6\u95f4\uff1a", 1);
          game.refreshAll(time);
          game.addLog('{"code":' + player_index + "}\u5f00\u59cb\u4fee\u884c", 1);
          game.listeners.EnterListeners.check(game.currUser);
          return "success";
        } catch (err) {
          console.log(err);
          return err instanceof GameLogicError ? err.message : "\u670d\u52a1\u5668\u6545\u969c";
        }
      },
      endGame: function endGame(game) {
        var res = {};
        game.refreshAll(7 * ONE_JOURNEY_DAY);
        game.clearBuff();
        var players = [ 1, 2, 3 ].map(function(index) {
          return game.getPlayer(index);
        });
        res.powers = players.map(function(player) {
          return player._level + player._power / 10;
        });
        players.sort(function(a, b) {
          if (a._level != b._level) return b._level - a._level;
          return b._power - a._power;
        });
        var ranking = [];
        players.map(function(player, index) {
          return ranking[player.code - 1] = index + 1;
        });
        var rankStr = ranking.join("");
        players[2].power == players[1].power && (rankStr = rankStr.replaceAll("3", "2"));
        players[1].power == players[0].power && (rankStr = rankStr.replaceAll("2", "1"));
        res.ranking = parseInt(rankStr);
        return res;
      },
      newGame: function newGame(data) {
        var game = new Game(data);
        if (isFrontEnd.cocos) {
          console.log("new game init for cocos");
          game.initForCocos();
        }
        return game;
      },
      startCommands: function startCommands(data) {
        var auctions = data.auctions, level = data.level;
        var auctionCommands = auctions.map(function(val, index) {
          return "000000" + (index + 1) + "st00" + Math.floor(val);
        });
        var levelCommands = [ "0000000lv00" + Math.floor(level) ];
        return [].concat(levelCommands, auctionCommands);
      },
      copyGame: function copyGame(oldgame) {
        var obj = JSON.parse(JSON.stringify(oldgame.JSONStringify()));
        var game = new Game(obj);
        isFrontEnd.cocos && game.initForCocos();
        return game;
      },
      getSimpleInfo: function getSimpleInfo(game, code) {
        var player = game.getPlayer(code);
        var equipList = player.equipList.map(function(equip) {
          return {
            type: equip.type,
            level: equip.level
          };
        });
        var spellList = player.spellList.map(function(spell) {
          return {
            type: spell.type
          };
        });
        var petList = game.allMapElements.filter(function(pet) {
          return pet.owner == player;
        }).map(function(pet) {
          return {
            type: pet.type
          };
        });
        var iconList = equipList.concat(spellList).concat(petList);
        return {
          power: player.power,
          wealth: player.coins,
          iconList: iconList
        };
      },
      initForCocos: function initForCocos() {
        isFrontEnd.cocos = true;
      }
    };
    var isFrontEnd = {
      cocos: false
    };
    module.exports = obj;
    var getX = function getX(instru) {
      return parseInt(instru.substr(9, 1));
    };
    var getY = function getY(instru) {
      return parseInt(instru.substr(10, 1));
    };
    var getId = function getId(instru) {
      return parseInt(instru.substr(11, 2));
    };
    var getExtra = function getExtra(instru) {
      return instru.substr(13);
    };
    cc._RF.pop();
  }, {
    "./main/Game": "Game",
    "./main/constants/timeConstants": "timeConstants",
    "./main/wheels/common": "common"
  } ],
  gameMain: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "306f25USbhLoasznFfsfkJu", "gameMain");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        observe: cc.Node,
        entry: cc.Node,
        history: cc.Node,
        send: cc.Node,
        players: cc.Node,
        map: cc.Node,
        tiles: cc.Prefab,
        equips: cc.Prefab,
        spells: cc.Prefab,
        pets: cc.Prefab,
        control: cc.Node,
        fightUI: cc.Node,
        attack: true,
        _zIndexMap: null
      },
      start: function start() {
        cc.audioEngine.stopMusic();
        cc.loader.loadRes("audio/journey", cc.AudioClip, function(err, clip) {
          cc.audioEngine.playMusic(clip, true);
          cc.audioEngine.setMusicVolume(config.bgm);
          0 == config.bgm && cc.audioEngine.pauseMusic();
          music.playingType = "journey";
        });
        if (gameGlobals.isTrying) ; else switch (user.userid) {
         case gameGlobals.gameInfo.player1id:
          gameGlobals.currPLayerIndex = 1;
          break;

         case gameGlobals.gameInfo.player2id:
          gameGlobals.currPLayerIndex = 2;
          break;

         case gameGlobals.gameInfo.player3id:
          gameGlobals.currPLayerIndex = 3;
        }
        var zIndexMap = {};
        this.node.children.forEach(function(child, index) {
          zIndexMap[child.uuid] = -1e3 + index;
          child.zIndex = -1e3 + index;
        });
        this._zIndexMap = zIndexMap;
        this.players.children.forEach(function(player, index) {
          return player.getComponent("playerPanel").init(index + 1);
        });
        this.map.getComponent("map").init();
        this.control.getComponent("console").init();
        this.refresh();
      },
      refresh: function refresh() {
        this.observe.getComponent("observeAndEntry").refresh();
        this.entry.getComponent("observeAndEntry").refresh();
        this.map.getComponent("map").refresh();
        this.control.getComponent("console").refresh();
        this.players.children.forEach(function(player) {
          return player.getComponent("playerPanel").refresh();
        });
        var self = this;
        this.node.children.forEach(function(child, index) {
          child.zIndex = self._zIndexMap[child.uuid];
        });
      },
      attackBtn: function attackBtn() {
        var coordinates = getCurrPlayer().challengeAbleItems;
        var self = this;
        this.map.getComponent("map").enableSelection(coordinates, function(x, y) {
          makeOperation("at" + x + y);
          if (config.playAnimation) {
            var player1Code = gameGlobals.currPLayerIndex;
            var player2Code = gameGlobals.gameObj.map[y][x].code;
            self.fightUI.getComponent("fightUI").init(player1Code, player2Code);
            self.fightUI.active = true;
            self.fightUI.zIndex = 201;
          }
        });
      },
      equipBtn: function equipBtn() {
        this.node.addChild(cc.instantiate(this.equips));
      },
      spellBtn: function spellBtn() {
        this.node.addChild(cc.instantiate(this.spells));
      },
      moveBtn: function moveBtn() {
        var coordinates = getCurrPlayer().findSpell(MoveSpell.id).validLocations();
        this.map.getComponent("map").enableSelection(coordinates, function(x, y) {
          makeOperation("bs" + x + y + "00");
        });
      },
      petsBtn: function petsBtn() {
        this.node.addChild(cc.instantiate(this.pets));
      },
      historyBtn: function historyBtn() {
        loadingView();
        this.history.getComponent("history").init();
        this.history.zIndex = 201;
        this.history.active = true;
        completeLoading();
      },
      backBtn: function backBtn() {
        cc.director.loadScene("hall");
      },
      fighting: function fighting(player1, player2) {
        var battle = cc.instantiate(this.fightUI);
        battle.init(player1, player2);
      }
    });
    var _require = require("./Globals"), config = _require.config, music = _require.music, user = _require.user;
    var gameGlobals = require("./battleMiddleWare/gameGlobals");
    var _require2 = require("./battleMiddleWare/gameService"), makeOperation = _require2.makeOperation;
    var _require3 = require("./battleMiddleWare/gameUtils"), getCurrPlayer = _require3.getCurrPlayer;
    var _require4 = require("./otherComponents/uiUtils"), loadingView = _require4.loadingView, completeLoading = _require4.completeLoading;
    var _require5 = require("./xjfz-journey/classic-v0.0.1/main/Spell"), MoveSpell = _require5.MoveSpell;
    cc._RF.pop();
  }, {
    "./Globals": "Globals",
    "./battleMiddleWare/gameGlobals": "gameGlobals",
    "./battleMiddleWare/gameService": "gameService",
    "./battleMiddleWare/gameUtils": "gameUtils",
    "./otherComponents/uiUtils": "uiUtils",
    "./xjfz-journey/classic-v0.0.1/main/Spell": "Spell"
  } ],
  gameService: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "442ac3CvoJEEaCDVIbBcIft", "gameService");
    "use strict";
    var global = require("./gameGlobals");
    var _require = require("./gameUtils"), refreshPage = _require.refreshPage, typeDict = _require.typeDict, constant = _require.constant;
    var _require2 = require("../otherComponents/uiUtils"), danMu = _require2.danMu;
    var journey = require("../xjfz-journey/index");
    var _require3 = require("../otherComponents/commonUtils"), fillWithZero = _require3.fillWithZero;
    var _require4 = require("../Globals"), config = _require4.config;
    var obj = {
      createGame: function createGame(version) {
        journey[version] || danMu("\u65e0\u6548\u6e38\u620f\u7248\u672c");
        global.gameModule = journey[version];
        global.gameRouter = global.gameModule.routers;
        global.gameObj = global.gameRouter.newGame();
        global.historyPosition = 0;
        global.gameRecords = [ global.gameObj ];
        global.operations = [];
      },
      copyGame: function copyGame() {
        global.gameObj = global.gameRouter.copyGame(global.gameObj);
        return global.gameObj;
      },
      makeOperation: function makeOperation(instru) {
        if (global.isEntering && global.historyPosition < global.initPosition) {
          danMu("\u4fee\u884c\u4e2d\u4e0d\u8981\u5206\u5fc3\u63a8\u6f14\u65e7\u4e8b");
          return;
        }
        var command = "" + fillWithZero(global.currTime, 6) + global.currPLayerIndex + instru;
        updateGame(command);
        console.log(global.gameObj.JSONStringify());
        global.animationPlayer = global.gameObj.animationPlayer;
        if (config.playAnimation) {
          var fn = function fn() {
            global.animationPlayer.isPlaying ? setTimeout(fn, 20) : refreshPage();
          };
          setTimeout(fn, 20);
        } else refreshPage();
      },
      initGame: function initGame(instructions, version) {
        version || (version = global.gameVersion);
        journey[version] || danMu("\u65e0\u6548\u6e38\u620f\u7248\u672c");
        global.gameModule = journey[version];
        global.gameRouter = global.gameModule.routers;
        global.gameObj = global.gameRouter.newGame();
        global.historyPosition = 0;
        global.gameRecords = [ global.gameObj ];
        global.operations = [];
        global.logs = [];
        instructions.forEach(function(command) {
          var _global$gameObj$currU;
          updateGame(command);
          global.currTime = global.gameObj.currTime;
          global.currPLayerIndex = null == (_global$gameObj$currU = global.gameObj.currUser) ? void 0 : _global$gameObj$currU.code;
        });
        global.initPosition = global.gameRecords.length - 1;
        global.historyPosition = global.initPosition;
      },
      addHistory: function addHistory() {
        global.gameRecords.push(global.gameObj);
        global.gameObj.logger.aggregate();
        global.gameObj.logger.data.forEach(formatLogger);
        global.logs.push(global.gameObj.logger.data);
        global.historyPosition++;
      }
    };
    module.exports = obj;
    function updateGame(command) {
      obj.copyGame();
      var result = global.gameRouter.updateGame(global.gameObj, [ command ]);
      if ("success" != result) {
        danMu(result);
        global.gameObj = global.gameRecords[global.historyPosition];
      } else {
        global.historyPosition < global.initPosition && (global.isTrying = true);
        global.gameRecords.splice(global.historyPosition + 1);
        global.operations.splice(global.historyPosition);
        global.logs.splice(global.historyPosition);
        global.operations.push(command);
        obj.addHistory();
        global.isMocking;
      }
    }
    function formatLogger(logger) {
      var _logger$children;
      logger.content = formatLogContent(logger.content);
      null == (_logger$children = logger.children) ? void 0 : _logger$children.forEach(formatLogger);
    }
    function formatLogContent(content) {
      var pattern = /\{"code":\d+.*?\}/;
      while (content.search(pattern) >= 0) {
        var results = content.match(pattern);
        results.forEach(function(result) {
          var data = JSON.parse(result);
          var item = global.gameObj.unitDict.get(data.code);
          var name;
          name = data.code <= 3 ? global.gameInfo.playerInfo[data.code - 1].nickname : typeDict()[item.type].pet_name;
          var genStr = name;
          data.x >= 0 ? genStr += "(" + (data.x + 1) + "," + (constant().MAP_SIZE - data.y) + ")" : void 0 == data.x && (genStr += "(" + (item.x + 1) + "," + (constant().MAP_SIZE - item.y) + ")");
          var code = "Player" == item.type ? item.code : item.owner.code;
          var color = [ "", "5e7563", "d3b09a", "c7a565" ][code];
          genStr = "<color=#" + color + ">" + genStr + "</c>";
          content = content.replace(result, genStr);
        });
      }
      return content;
    }
    function generateMockOverview() {
      var info = {};
      return {};
    }
    cc._RF.pop();
  }, {
    "../Globals": "Globals",
    "../otherComponents/commonUtils": "commonUtils",
    "../otherComponents/uiUtils": "uiUtils",
    "../xjfz-journey/index": "index",
    "./gameGlobals": "gameGlobals",
    "./gameUtils": "gameUtils"
  } ],
  gameTV: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7bb74npUSFMcp6YKzwslPie", "gameTV");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Globals_1 = require("../Globals");
    var http_1 = require("../http");
    var uiUtils_1 = require("../otherComponents/uiUtils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.games = null;
        _this.layout = null;
        _this.url = "public/tv";
        return _this;
      }
      NewClass.prototype.start = function() {
        uiUtils_1.loadingView();
        var self = this;
        if (Globals_1.journey.tv) {
          this.refreshRooms();
          uiUtils_1.completeLoading();
        } else http_1.sendGetForms(this.url, {}, function(response) {
          response && response.length ? Globals_1.journey.tv = response : Globals_1.journey.tv = [];
          self.refreshRooms();
          uiUtils_1.completeLoading();
        });
      };
      NewClass.prototype.refreshRooms = function() {
        var games = this.games;
        var layout = this.layout;
        layout.node.removeAllChildren();
        for (var _i = 0, _a = Globals_1.journey.tv; _i < _a.length; _i++) {
          var room = _a[_i];
          var game = cc.instantiate(games);
          game.getComponent("overviewTemplate").init(room);
          game.getComponent(cc.Layout).updateLayout();
          layout.node.addChild(game);
        }
        layout.updateLayout();
        layout.node.x = layout.node.width / 2 - 360;
      };
      NewClass.prototype.backBtn = function() {
        cc.director.loadScene("hall");
      };
      NewClass.prototype.update = function(dt) {
        this.layout.node.children.forEach(function(game) {
          game.y = 625 - game.height / 2;
        });
      };
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "games", void 0);
      __decorate([ property(cc.Layout) ], NewClass.prototype, "layout", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../Globals": "Globals",
    "../http": "http",
    "../otherComponents/uiUtils": "uiUtils"
  } ],
  gameUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a5f08nVnoVClZRhIkTPtOGA", "gameUtils");
    "use strict";
    var global = require("./gameGlobals");
    var _require = require("../xjfz-journey/index"), getEquip = _require.getEquip, getSpell = _require.getSpell, getPets = _require.getPets, getBuffs = _require.getBuffs;
    var _require2 = require("../Constants"), DECORATION_MENU = _require2.DECORATION_MENU;
    var obj = {
      constant: function constant() {
        return global.gameModule.constants;
      },
      equips: function equips() {
        return getEquip(global.gameVersion);
      },
      spell: function spell() {
        return getSpell(global.gameVersion);
      },
      pet: function pet() {
        return getPets(global.gameVersion);
      },
      buff: function buff() {
        return getBuffs(global.gameVersion);
      },
      typeDict: function typeDict() {
        return global.gameModule.typeDict.typeDict;
      },
      getPlayer: function getPlayer(i) {
        return global.gameObj.getPlayer(i);
      },
      getCurrPlayer: function getCurrPlayer() {
        return global.gameObj.getPlayer(global.currPLayerIndex);
      },
      getTimePrefix: function getTimePrefix() {
        var currTime = global.currTime ? global.currTime : Math.floor(new Date().valueOf() / 1e3);
        var startTime = global.gameObj.startdate;
        return currTime - startTime;
      },
      checkEquip: function checkEquip(id) {
        var list = obj.getCurrPlayer().equipList;
        return list.find(function(item) {
          return item.id == id;
        });
      },
      idString: function idString(id) {
        return id < 10 ? "0" + id : "" + id;
      },
      convertPowerString: function convertPowerString(power, MAX_NUM_VALUE) {
        void 0 === MAX_NUM_VALUE && (MAX_NUM_VALUE = 1e8);
        if (parseFloat(power) < MAX_NUM_VALUE) {
          power = "" + parseFloat(power).toFixed(2);
          power.endsWith("00") ? power = power.replace(".00", "") : power.endsWith("0") && (power = power.substring(0, power.length - 1));
        }
        return power;
      },
      refreshPage: function refreshPage() {
        cc.find("Canvas").getComponent("gameMain").refresh();
      },
      mapNode: function mapNode() {
        return cc.find("Canvas/Map").getComponent("map");
      },
      moveHistoryPointer: function moveHistoryPointer(step) {
        var newPosition = global.historyPosition + step;
        if (newPosition > 0 && newPosition < global.gameRecords.length) {
          global.historyPosition = newPosition;
          global.gameObj = global.gameRecords[newPosition];
          global.currTime = global.gameObj.currTime;
          obj.refreshPage();
        }
      },
      getPlayerIconUrl: function getPlayerIconUrl(code, category) {
        void 0 === category && (category = "player");
        var decoration = global.gameInfo.playerInfo[code - 1].decorations;
        var skin = decoration.find(function(item) {
          return "player" == item.category && 1 == item.using;
        });
        var skinId = skin ? skin.index : 4;
        var skinInfo = DECORATION_MENU.find(function(item) {
          return item.category == category && item.index == skinId;
        });
        return skinInfo.url.split(":")[1];
      }
    };
    module.exports = obj;
    cc._RF.pop();
  }, {
    "../Constants": "Constants",
    "../xjfz-journey/index": "index",
    "./gameGlobals": "gameGlobals"
  } ],
  getCoins: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "81029vGTLFOebbIS0QLareg", "getCoins");
    "use strict";
    var gameGlobals = require("../battleMiddleWare/gameGlobals");
    var _require = require("../battleMiddleWare/gameService"), makeOperation = _require.makeOperation;
    var _require2 = require("../battleMiddleWare/gameUtils"), refreshPage = _require2.refreshPage;
    cc.Class({
      extends: cc.Component,
      properties: {
        lasttimeStr: cc.Label
      },
      init: function init() {
        var date = new Date();
        var lasttime = new Date(gameGlobals.currTime);
        console.log(lasttime);
        var timeStr = "\u4e0a\u6b21\u767b\u5f55\u65f6\u95f4\uff1a\n";
        date.getDate() == lasttime.getDate() ? timeStr += "\u4eca\u5929" : date.getDate() - 1 == lasttime.getDate() ? timeStr += "\u6628\u5929" : timeStr += "\u51e0\u5929\u524d";
        timeStr += lasttime.getHours() + ":" + lasttime.getMinutes();
        this.lasttimeStr.string = timeStr;
      },
      useAd: function useAd() {
        this.entry("a");
      },
      useGem: function useGem() {
        this.entry("g");
      },
      observe: function observe(type) {
        http.sendPostForms("observe", {
          roomid: gameGlobals.roomid,
          type: type,
          version: gameGlobals.gameInfo.records.length
        }, function(response) {
          makeOperation(response.operations);
          refreshPage();
          if (JSON.stringify(gameObj) != JSON.stringify(response.obj)) {
            console.log(JSON.stringify(gameObj));
            console.log(JSON.stringify(response.obj));
          }
        });
      },
      entry: function entry() {
        var self = this;
      },
      closeBtn: function closeBtn() {
        this.node.active = false;
      }
    });
    cc._RF.pop();
  }, {
    "../battleMiddleWare/gameGlobals": "gameGlobals",
    "../battleMiddleWare/gameService": "gameService",
    "../battleMiddleWare/gameUtils": "gameUtils"
  } ],
  gridIcon: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1ee50H94MxOkqMt6O4u4lGl", "gridIcon");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        bg: cc.Sprite,
        icon: cc.Sprite,
        animation: cc.Node,
        animation2: cc.Node,
        pyroSign: cc.Sprite,
        hydroSign: cc.Sprite,
        selectionFrame: cc.Button,
        info: null,
        playerDetails: cc.Prefab,
        creatureDetails: cc.Prefab,
        _iconUrl: null,
        x: -1,
        y: -1,
        clickCallback: null
      },
      init: function init(data, x, y) {
        this.x = x;
        this.y = y;
        this.info = data;
        var self = this, icon = this.icon, address = null;
        if (data) {
          var code = "Player" == data.type ? data.code : data.owner.code;
          cc.loader.loadRes("texture/" + code + ".png", cc.SpriteFrame, function(err, spriteFrame) {
            err && console.log(err);
            self.bg.spriteFrame = spriteFrame;
          });
          address = typeDict()[data.type].iconUrl.replace("pets", "petIcon");
          "Player" == data.type && (address = getPlayerIconUrl(code));
          cc.loader.loadRes(address, cc.SpriteFrame, function(err, spriteFrame2) {
            err && console.log(err);
            icon.spriteFrame = spriteFrame2;
          });
          this.hydroSign.node.active = data.hydroSign > 0;
          if (data.pyroSign > 0) {
            this.pyroSign.node.active = true;
            var iconUrl = data.pyroSign >= 9 ? "icons/\u706b\u5370\u8bb0.png" : "icons/pyroSign/" + data.pyroSign + ".png";
            cc.loader.loadRes(iconUrl, cc.SpriteFrame, function(err, spriteFrame2) {
              err && console.log(err);
              self.pyroSign.spriteFrame = spriteFrame2;
            });
          } else this.pyroSign.node.active = false;
        } else {
          this.hydroSign.node.active = false;
          this.pyroSign.node.active = false;
          this.bg.spriteFrame = null;
          icon.spriteFrame = null;
        }
        this._iconUrl = address;
        this.recoverNodeProperties();
        this.recoverChildSequences();
      },
      setChildren: function setChildren(animation, animation2) {
        this.animation = animation;
        this.animation2 = animation2;
      },
      recoverNodeProperties: function recoverNodeProperties() {
        var _this = this;
        var animation = this.animation, animation2 = this.animation2, icon = this.icon.node;
        animation.active = false;
        animation.parent.children.filter(function(sibling) {
          return sibling.uuid != animation.uuid;
        }).forEach(function(node) {
          return node.removeFromParent();
        });
        animation2.active = false;
        animation2.parent.children.filter(function(sibling) {
          return sibling.uuid != animation2.uuid;
        }).forEach(function(node) {
          return node.removeFromParent();
        });
        icon.active = true;
        var self = this;
        var setCommonProperties = function setCommonProperties(node) {
          node.removeAllChildren();
          node.opacity = 255;
          node.scale = 1;
          node.angle = 0;
          node.x = 0;
          node.y = 0;
          node.color = new cc.Color(255, 255, 255);
          node.width = _this.node.width;
          node.height = _this.node.height;
        };
        setCommonProperties(animation);
        setCommonProperties(animation2);
        setCommonProperties(icon);
      },
      recoverChildSequences: function recoverChildSequences() {
        var children = [ this.bg.node, this.icon.node, this.hydroSign.node, this.pyroSign.node, this.selectionFrame.node ];
        children.forEach(function(child, index) {
          return child.zIndex = index;
        });
      },
      seeDetails: function seeDetails() {
        if (this.info) {
          var node;
          node = "Player" == this.info.type ? initNode(this.playerDetails, "playerDetails", this.info) : initNode(this.creatureDetails, "creatureDetails", this.info);
          root().addChild(node);
        }
      },
      enableSelection: function enableSelection(active, fn) {
        this.selectionFrame.node.active = true;
        this.selectionFrame.enabled = active;
        this.selectionFrame.node.opacity = active ? 0 : 120;
        this.clickCallback = fn;
      },
      onClickCallback: function onClickCallback() {
        this.clickCallback(this.x, this.y);
        mapNode().recover();
      },
      recover: function recover() {
        this.selectionFrame.node.active = false;
        this.clickCallback = function() {
          return null;
        };
      },
      update: function update(dt) {
        config.playAnimation && gameGlobals.animationPlayer.play({
          animationIcon: this.animation,
          animation2Icon: this.animation2,
          gridIcon: this.icon.node,
          x: this.x,
          y: this.y,
          iconUrl: this._iconUrl
        });
      }
    });
    var color = [ new cc.Color(238, 228, 207, 255), new cc.Color(94, 117, 99, 255), new cc.Color(211, 176, 154, 255), new cc.Color(199, 165, 101, 255) ];
    var _require = require("../Constants"), DECORATION_MENU = _require.DECORATION_MENU;
    var _require2 = require("../Globals"), config = _require2.config;
    var gameGlobals = require("../battleMiddleWare/gameGlobals");
    var _require3 = require("../battleMiddleWare/gameUtils"), typeDict = _require3.typeDict, mapNode = _require3.mapNode, getPlayerIconUrl = _require3.getPlayerIconUrl;
    var _require4 = require("../otherComponents/uiUtils"), initNode = _require4.initNode, root = _require4.root;
    var _require5 = require("../xjfz-journey/classic-v0.0.1/main/Creature"), Creature = _require5.Creature;
    cc._RF.pop();
  }, {
    "../Constants": "Constants",
    "../Globals": "Globals",
    "../battleMiddleWare/gameGlobals": "gameGlobals",
    "../battleMiddleWare/gameUtils": "gameUtils",
    "../otherComponents/uiUtils": "uiUtils",
    "../xjfz-journey/classic-v0.0.1/main/Creature": "Creature"
  } ],
  hall: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ffe8ff/Ky5OfpFgn2vLVi+o", "hall");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.nickname = null;
        _this.trophyLbl = null;
        _this.gemLbl = null;
        _this.icon = null;
        _this.setting = null;
        _this.email = null;
        _this.board = null;
        _this.top = null;
        _this.userDetail = null;
        _this.ascend = true;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this.nickname.string = "" + Globals_1.user.nickname;
        this.trophyLbl.string = "" + Globals_1.user.trophic;
        this.gemLbl.string = "" + Globals_1.user.gems;
        this.icon.getComponent("icon").init(Globals_1.user.iconUrl);
      };
      NewClass.prototype.start = function() {
        cc.audioEngine.isMusicPlaying() && "journey" != Globals_1.music.playingType || cc.loader.loadRes("audio/hall", cc.AudioClip, function(err, clip) {
          cc.audioEngine.playMusic(clip, true);
          cc.audioEngine.setMusicVolume(Globals_1.config.bgm);
          0 == Globals_1.config.bgm && cc.audioEngine.pauseMusic();
        });
      };
      NewClass.prototype.startBtn = function() {
        uiUtils_1.loadingView();
        cc.director.loadScene("gameEntry");
      };
      NewClass.prototype.historyBtn = function() {
        cc.director.loadScene("history");
      };
      NewClass.prototype.decorationBtn = function() {
        cc.director.loadScene("decoration");
      };
      NewClass.prototype.tvBtn = function() {
        cc.director.loadScene("tv");
      };
      NewClass.prototype.mockBtn = function() {
        cc.director.loadScene("mock");
      };
      NewClass.prototype.viewUserDetailBtn = function() {
        var detail = cc.instantiate(this.userDetail);
        detail.getComponent("userDetail").init(Globals_1.user.userid);
        this.node.addChild(detail);
      };
      NewClass.prototype.settingBtn = function() {
        this.setting.active = true;
      };
      NewClass.prototype.boardBtn = function() {
        this.board.active = true;
      };
      NewClass.prototype.topBtn = function() {
        this.top.active = true;
      };
      NewClass.prototype.emailBtn = function() {
        this.email.active = true;
      };
      NewClass.prototype.update = function(dt) {
        if (this.ascend) {
          this.label.node.opacity++;
          255 == this.label.node.opacity && (this.ascend = false);
        } else {
          this.label.node.opacity--;
          127 == this.label.node.opacity && (this.ascend = true);
        }
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "nickname", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "trophyLbl", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "gemLbl", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "icon", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "setting", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "email", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "board", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "top", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "userDetail", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    var Globals_1 = require("./Globals");
    var uiUtils_1 = require("./otherComponents/uiUtils");
    cc._RF.pop();
  }, {
    "./Globals": "Globals",
    "./otherComponents/uiUtils": "uiUtils"
  } ],
  history2: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "abe40/ggzZMw6ZTRo1ULJCl", "history2");
    "use strict";
    var _require = require("../battleMiddleWare/gameGlobals"), gameRecords = _require.gameRecords;
    var gameGlobals = require("../battleMiddleWare/gameGlobals");
    var TRY_COLOR = cc.Color.GRAY;
    var OPERATION_COLOR = cc.Color.GREEN;
    var HISTORY_COLOR = cc.Color.WHITE;
    var MAIN_OUTLINE_COLOR = cc.Color.BLACK;
    var COMMON_OUTLINE_COLOR = cc.Color.GRAY;
    cc.Class({
      extends: cc.Component,
      properties: {
        container: cc.Layout,
        label: cc.Prefab,
        dayList: []
      },
      onLoad: function onLoad() {
        self = this;
        gameGlobals.gameObj.logger.forEach(function(instru) {
          self.container.node.addChild(log_label(instru));
        });
      },
      refresh: function refresh() {
        if (this.container.children.length < infoList.length) for (var i = this.container.children.length; i < infoList.length; i++) {
          var node = gameGlobals.isTrying ? try_label(infoList[i]) : additional_label(infoList[i]);
          this.container.node.addChild(node);
        } else for (var _i = this.container.children.length - 1; _i >= infoList.length; _i--) this.container.node.removeChild(this.container.children[_i]);
      },
      recover: function recover() {
        for (var i = this.container.children.length - 1; i >= 0; i--) {
          var node = this.container.children[i];
          if (node.color == TRY_COLOR) {
            if (node.getComponent("Label").getComponent("LabelOutline").color == MAIN_OUTLINE_COLOR) {
              gameRecords.pop();
              gameGlobals.historyPosition--;
              var oldObj = gameRecords[gameGlobals.historyPosition];
              gameGlobals.gameObj = JSON.parse(JSON.stringify(oldObj));
            }
            this.container.node.removeChild(node);
          }
        }
        gameGlobals.isTrying = false;
      },
      closeBtn: function closeBtn() {
        this.node.active = false;
      }
    });
    var log_label = function log_label(instru) {
      return create_label(HISTORY_COLOR, instru);
    };
    var additional_label = function additional_label(instru) {
      return create_label(OPERATION_COLOR, instru);
    };
    var try_label = function try_label(instru) {
      return create_label(TRY_COLOR, instru);
    };
    var create_label = function create_label(label_color, instru) {
      var node = new cc.Node("123");
      node.width = 500;
      node.height = 50;
      var label = node.addComponent(cc.Label);
      label.overflow = 3;
      label.fontSize = 40;
      label.lineHeight = 40;
      label.horizontalAlign = 0;
      node.color = label_color;
      if (instru.startsWith("o")) {
        instru = instru.substr(1);
        outline_color = MAIN_OUTLINE_COLOR;
      } else outline_color = COMMON_OUTLINE_COLOR;
      var outline = label.addComponent(cc.LabelOutline);
      outline.color = outline_color;
      outline.width = 3;
      label.string = instru;
      return node;
    };
    module.exports = {
      create_label: log_label
    };
    cc._RF.pop();
  }, {
    "../battleMiddleWare/gameGlobals": "gameGlobals"
  } ],
  historyLog: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9d9d66+0eROgLauHsTQHcgr", "historyLog");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.selfPrefab = null;
        _this.children = null;
        return _this;
      }
      NewClass.prototype.init = function(log, nodeWidth) {
        var _a;
        void 0 === nodeWidth && (nodeWidth = 630);
        var self = this;
        this.node.childrenCount;
        var content = log.content;
        if (1 == log.level) {
          var days = Math.floor(log.time / Constants_1.ONE_JOURNEY_DAY);
          var secondsToday = log.time % Constants_1.ONE_JOURNEY_DAY;
          var startDate = new Date(Constants_1.JOURNEY_START_TIME + 1e3 * secondsToday);
          var hours = commonUtils_1.fillWithZero(startDate.getHours(), 2);
          var minutes = commonUtils_1.fillWithZero(startDate.getMinutes(), 2);
          var seconds = commonUtils_1.fillWithZero(startDate.getSeconds(), 2);
          content = "\u7b2c" + (days + 1) + "\u65e5 " + hours + ":" + minutes + ":" + seconds + " " + content;
        }
        this.node.width = nodeWidth;
        this.children.width = nodeWidth - 60;
        this.content.maxWidth = nodeWidth - 30;
        if ((null === (_a = log.children) || void 0 === _a ? void 0 : _a.length) > 0) {
          this.content.string = "<b>\u25b6" + content + "</b>";
          log.children.forEach(function(child) {
            var _a;
            if ((null === (_a = child.children) || void 0 === _a ? void 0 : _a.length) > 0) {
              var childNode = cc.instantiate(self.selfPrefab);
              childNode.getComponent("historyLog").init(child, nodeWidth - 60);
              self.children.addChild(childNode);
            } else {
              var childNode = new cc.Node();
              var richText = childNode.addComponent(cc.RichText);
              richText.maxWidth = nodeWidth - 60;
              richText.fontSize = 30;
              richText.lineHeight = 30;
              richText.horizontalAlign = cc.macro.TextAlignment.LEFT;
              richText.string = "<b>" + child.content + "</b>";
              childNode.color = new cc.Color(0, 0, 0, 255);
              self.children.addChild(childNode);
            }
          });
        } else this.content.string = "<b>" + content + "</b>";
      };
      NewClass.prototype.expand = function() {
        if (this.children.active) {
          this.content.string = this.content.string.replace("\u25bc", "\u25b6");
          this.children.active = false;
        } else {
          this.content.string = this.content.string.replace("\u25b6", "\u25bc");
          this.children.active = true;
        }
      };
      NewClass.prototype.expandAll = function() {
        this.expand();
        this.children.children.forEach(function(child) {
          var _a;
          return null === (_a = child.getComponent("historyLog")) || void 0 === _a ? void 0 : _a.expand();
        });
      };
      __decorate([ property(cc.RichText) ], NewClass.prototype, "content", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "selfPrefab", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "children", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    function initRickText(richText) {}
    function formatLogContent(content) {
      var pattern = /\{"code":\d+.*?\}/;
      while (content.search(pattern) >= 0) {
        var results = content.match(pattern);
        results.forEach(function(result) {
          var data = JSON.parse(result);
          var item = gameGlobals.gameObj.unitDict.get(data.code);
          var name;
          name = data.code <= 3 ? gameGlobals.gameInfo.playerInfo[data.code - 1].nickname : gameUtils_js_1.typeDict()[item.type].pet_name;
          var genStr = name;
          data.x >= 0 ? genStr += "(" + data.x + "," + data.y + ")" : void 0 == data.x && (genStr += "(" + item.x + "," + item.y + ")");
          var code = "Player" == item.type ? item.code : item.owner.code;
          var color = [ "", "5e7563", "d3b09a", "c7a565" ][code];
          genStr = "<color=#" + color + ">" + genStr + "</c>";
          content = content.replace(result, genStr);
        });
      }
      return content;
    }
    var gameUtils_js_1 = require("../battleMiddleWare/gameUtils.js");
    var gameGlobals = require("../battleMiddleWare/gameGlobals.js");
    var Constants_1 = require("../Constants");
    var commonUtils_1 = require("../otherComponents/commonUtils");
    cc._RF.pop();
  }, {
    "../Constants": "Constants",
    "../battleMiddleWare/gameGlobals.js": "gameGlobals",
    "../battleMiddleWare/gameUtils.js": "gameUtils",
    "../otherComponents/commonUtils": "commonUtils"
  } ],
  history: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e67a8GYjx9JppewkgtTVJ+Z", "history");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.logPrefab = null;
        _this.layout = null;
        return _this;
      }
      NewClass.prototype.init = function() {
        var _this = this;
        this.layout.removeAllChildren();
        var self = this;
        var logs = gameGlobals.logs.slice(0, gameGlobals.historyPosition).flat();
        logs.forEach(function(log) {
          var logNode = cc.instantiate(self.logPrefab);
          logNode.getComponent("historyLog").init(log);
          self.layout.addChild(logNode);
        });
        setTimeout(function() {
          return _this.layout.y = 450 - _this.layout.height / 2;
        }, 10);
      };
      NewClass.prototype.closeBtn = function() {
        this.node.active = false;
      };
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "logPrefab", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "layout", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    var gameGlobals = require("../battleMiddleWare/gameGlobals.js");
    cc._RF.pop();
  }, {
    "../battleMiddleWare/gameGlobals.js": "gameGlobals"
  } ],
  http: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4aa73XcG2pD54r2DtUgH4Ri", "http");
    "use strict";
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.sendPostForms = exports.sendGetForms = void 0;
    var uiUtils_1 = require("./otherComponents/uiUtils");
    var Globals_1 = require("./Globals");
    var fetch_1 = require("./netComponenents/fetch");
    var uri = "https://www.idlewar.online";
    var sendPostForms = function(urlApi, paramJson, callback, config) {
      void 0 === config && (config = {});
      uiUtils_1.loadingView();
      var url = uri + handleApi(urlApi) + url_suffix();
      var param = JSON.stringify(paramJson);
      send_request(url, {
        method: "POST",
        body: param
      }, callback, config);
    };
    exports.sendPostForms = sendPostForms;
    var sendGetForms = function(urlApi, paramJson, callback, config) {
      void 0 === config && (config = {});
      config.noLoadingView || uiUtils_1.loadingView();
      var url = uri + handleApi(urlApi) + url_suffix() + params_str(paramJson);
      send_request(url, {
        method: "GET"
      }, callback, config);
    };
    exports.sendGetForms = sendGetForms;
    function handleApi(urlApi) {
      var start = urlApi.charAt(0);
      if ("/" != start && ":" != start) return "/" + urlApi;
      return urlApi;
    }
    var send_request = function(url, body, callback, config) {
      body.headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      };
      fetch_1.fetch(url, body).then(function(response) {
        return __awaiter(this, void 0, void 0, function() {
          var _a, _b, _c;
          var _d;
          return __generator(this, function(_e) {
            switch (_e.label) {
             case 0:
              if (!(200 == response.status)) return [ 3, 1 ];
              return [ 2, response.json() ];

             case 1:
              if (!(401 == response.status)) return [ 3, 3 ];
              cc.sys.localStorage.removeItem("auth");
              uiUtils_1.alertComponent().setCallback(function() {
                return cc.director.loadScene("Login");
              });
              _a = Error.bind;
              return [ 4, response.text() ];

             case 2:
              throw new (_a.apply(Error, [ void 0, _e.sent() ]))();

             case 3:
              if (!!config.noAlert) return [ 3, 5 ];
              _b = Error.bind;
              return [ 4, response.text() ];

             case 4:
              throw new (_b.apply(Error, [ void 0, _e.sent() ]))();

             case 5:
              _d = {};
              _c = "str";
              return [ 4, response.text() ];

             case 6:
              return [ 2, (_d[_c] = _e.sent(), _d) ];
            }
          });
        });
      }).then(function(response) {
        uiUtils_1.completeLoading();
        var res = response;
        return res["str"] || "" == res["str"] ? res["str"] : res;
      }).then(callback).catch(function(err) {
        console.error(err);
        uiUtils_1.completeLoading();
        uiUtils_1.alertServerError(err);
      });
    };
    function responseCallback(xhr, callback) {
      var alert = true;
      console.log("connecting");
      xhr.onreadystatechange = function() {
        console.log(xhr.statusText);
        if (4 == xhr.readyState && xhr.status >= 200 && xhr.status <= 207) {
          alert = false;
          var httpStatus = xhr.statusText;
          var response = xhr.responseText;
          callback(response);
        }
      };
      setTimeout(function() {
        alert && callback(JSON.stringify({
          success: false,
          res: "\u9519\u8bef:\u7f51\u7edc\u5f02\u5e38"
        }));
      }, 5e3);
    }
    function sendPostForms2(urlApi, paramJson, callback) {
      var xhr = new XMLHttpRequest();
      responseCallback(xhr, callback);
      xhr.timeout = 5e3;
      xhr.open("POST", "http://106.52.82.57:8000/" + urlApi);
      xhr.setRequestHeader("Content-Type", "application/json");
      cc.sys.isNative && console.log("isNative");
      var args = "";
      for (var i = 0; i < paramJson.length; i++) {
        cc.log(paramJson[i]);
        args += paramJson[i].key + "=" + paramJson[i].value + "&";
      }
      xhr.send(JSON.stringify(paramJson));
    }
    function urlEncode(str) {
      var strSpecial = '%!"#$&\u2019()*+,/:;<=>?[]^`{|}~';
      for (var i = 0; i < str.length; i++) {
        var chr = str.charAt(i);
        var c = str.charCodeAt(i);
        strSpecial.includes(chr) && (str = str.replace(chr, "%" + c.toString(16)));
      }
      return str;
    }
    var url_suffix = function() {
      var token = urlEncode(generatePassport());
      var token2 = urlEncode(Globals_1.auth.token);
      return "?userid=" + Globals_1.auth.userid + "&token=" + token + "&token2=" + token2;
    };
    var params_str = function(paramJson) {
      var args = "";
      for (var key in paramJson) args += "&" + key + "=" + paramJson[key];
      return args.substring(0, -1);
    };
    var CryptoJS = require("crypto-js");
    function aesEncryption(value, key, iv) {
      void 0 === key && (key = "he4wfewscaed1f3q");
      void 0 === iv && (iv = "LingJAlgorithmic");
      value = value.toString();
      key = CryptoJS.enc.Utf8.parse(key);
      iv = CryptoJS.enc.Utf8.parse(iv);
      var encrypted = CryptoJS.AES.encrypt(value, key, {
        iv: iv,
        mode: CryptoJS.mode.CFB,
        padding: CryptoJS.pad.Pkcs7
      });
      return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
    }
    function generatePassport() {
      var timestamp = Math.floor(new Date().valueOf() / 1e3);
      var salt = 39 * randInt(7) + randInt(5);
      var passValue = 913 * timestamp + salt;
      return aesEncryption(passValue);
    }
    function randInt(n) {
      return Math.floor(Math.random() * n);
    }
    cc._RF.pop();
  }, {
    "./Globals": "Globals",
    "./netComponenents/fetch": "fetch",
    "./otherComponents/uiUtils": "uiUtils",
    "crypto-js": 12
  } ],
  icon: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "218e7Wcj6dPspcCbKvY1J5W", "icon");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.iconSF = null;
        return _this;
      }
      NewClass.prototype.init = function(iconUrl) {
        var params = iconUrl.split(":");
        var type = params[0], url = params.slice(1).join(":");
        var self = this;
        "taptap" == type ? cc.assetManager.loadRemote(url, cc.SpriteFrame, function(err, spriteFrame) {
          self.iconSF.spriteFrame = new cc.SpriteFrame(spriteFrame);
        }) : cc.loader.loadRes(url, cc.SpriteFrame, function(err, spriteFrame) {
          self.iconSF.spriteFrame = spriteFrame;
        });
      };
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "iconSF", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  index: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "34c9bwVQjtLT4F3SOCvJ1T0", "index");
    "use strict";
    var self = {
      getRouter: function getRouter(version) {
        return self[version].routers;
      },
      getEquip: function getEquip(version) {
        return self[version].typeDict.Equips;
      },
      getSpell: function getSpell(version) {
        return self[version].typeDict.Spell;
      },
      getPets: function getPets(version) {
        return self[version].typeDict.Pets;
      },
      getBuffs: function getBuffs(version) {
        return self[version].typeDict.Buffs;
      },
      hasVersion: function hasVersion(version) {
        return self.VALID_VERSION_LIST.includes(version);
      },
      "classic-v0.0.1": {
        game: require("./classic-v0.0.1/main/Game").Game,
        typeDict: require("./classic-v0.0.1/main/wheels/TypeDict"),
        routers: require("./classic-v0.0.1/gameLogicRoutes"),
        constants: Object.assign(require("./classic-v0.0.1/main/constants/gameConstants"), require("./classic-v0.0.1/main/constants/timeConstants"))
      },
      VALID_VERSION_LIST: [ "classic-v0.0.1", "classic-v0.0.2" ]
    };
    module.exports = self;
    var _require = require("./classic-v0.0.1/main/Game"), Game = _require.Game;
    var _require2 = require("./classic-v0.0.1/main/objects/Coin"), Coin = _require2.Coin;
    var _require3 = require("./classic-v0.0.1/main/templates/EquipItems"), EquipItems = _require3.EquipItems;
    var _require4 = require("./classic-v0.0.1/main/templates/Listeners"), Listener = _require4.Listener;
    var _require5 = require("./classic-v0.0.1/main/templates/PetsItems"), PetsItems = _require5.PetsItems;
    var _require6 = require("./classic-v0.0.1/main/templates/SpellItems"), SpellItem = _require6.SpellItem;
    cc._RF.pop();
  }, {
    "./classic-v0.0.1/gameLogicRoutes": "gameLogicRoutes",
    "./classic-v0.0.1/main/Game": "Game",
    "./classic-v0.0.1/main/constants/gameConstants": "gameConstants",
    "./classic-v0.0.1/main/constants/timeConstants": "timeConstants",
    "./classic-v0.0.1/main/objects/Coin": "Coin",
    "./classic-v0.0.1/main/templates/EquipItems": "EquipItems",
    "./classic-v0.0.1/main/templates/Listeners": "Listeners",
    "./classic-v0.0.1/main/templates/PetsItems": "PetsItems",
    "./classic-v0.0.1/main/templates/SpellItems": "SpellItems",
    "./classic-v0.0.1/main/wheels/TypeDict": "TypeDict"
  } ],
  inkRenderManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "93345LBO8FPq7lVT3OXxf8u", "inkRenderManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      NewClass.prototype.start = function() {
        var children = this.node.children;
        children[1].getComponent("inkRendering").curr_index += 6;
        children[2].getComponent("inkRendering").curr_index += 12;
        children[3].getComponent("inkRendering").curr_index += 18;
      };
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  inkRendering: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8e94achGilBX7fQy8ma+TzR", "inkRendering");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.color = new cc.Color(0, 0, 0, 255);
        _this.curr_index = 1;
        _this.count = 0;
        return _this;
      }
      NewClass.prototype.start = function() {
        var _this = this;
        this.node.children.forEach(function(child) {
          return child.color = _this.color;
        });
      };
      NewClass.prototype.update = function(dt) {
        this.count++;
        if (this.count % 30 != 0) return;
        var children = this.node.children;
        var size = children.length;
        children[(this.curr_index - 1) % size].active = false;
        children[this.curr_index % size].active = true;
        this.curr_index++;
      };
      __decorate([ property(cc.Color) ], NewClass.prototype, "color", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  instruction: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "514b72Q5OBFnqTdH1b0yoaB", "instruction");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        label: cc.Label,
        lblBg: cc.Node,
        arrow: cc.Node,
        touchArea: cc.Node,
        hallScene: cc.Node,
        mainGameScene: cc.Node,
        chooseScene: cc.Node,
        EntryScene: cc.Node,
        deckScene: cc.Node,
        equipScene: cc.Node,
        spellScene: cc.Node,
        equipIcon: cc.Sprite,
        equipDetail: cc.Node,
        spellDetail: cc.Node,
        spellList: cc.Node,
        choosePlayer: cc.Node,
        blue: cc.Node,
        process: 0
      },
      clicked: function clicked() {
        var self = this;
        var fnList = [ function() {
          console.log("start");
          self.lblBg.active = false;
          self.arrow.active = true;
          self.changeNode(self.arrow, 1.5, 1.5, -1, -247);
          self.changeNode(self.touchArea, 3.63, 3.63, 1, 55);
        }, function() {
          self.hallScene.active = false;
          self.EntryScene.active = true;
          self.changeNode(self.arrow, 1.5, 1.5, 227, -269);
          self.changeNode(self.touchArea, 2, 2, 231, -490);
          self.arrow.rotation = -90;
        }, function() {
          self.chooseScene.active = true;
          self.label.string = "\u5f00\u5c40\u4e4b\u524d\u9700\u8981\u5148\u9009\u62e9\u4e00\u4ef6\u81ea\u5df1\u7684\u88c5\u5907\uff0c\u6211\u4eec\u8fd9\u6b21\u5c31\u5148\u9009\u62e9\u8fd9\u4ef6\u53ef\u4ee5\u6253\u51fa\u771f\u5b9e\u4f24\u5bb3\u7684\u51e4\u708e\u4f5c\u4e3a\u6b66\u5668\u5427";
          self.lblBg.active = true;
          self.changeNode(self.arrow, 1.2, 1.2, 168, -231);
          self.changeNode(self.touchArea, 1.52, 1.5, 183, -81);
          self.arrow.rotation = 90;
        }, function() {
          self.equipIcon.node.active = true;
          self.label.string = "\u70b9\u51fb\u786e\u8ba4\u5373\u53ef\u5f00\u59cb\u5339\u914d\u3002\u6bcf\u4e00\u573a\u6e38\u620f\u90fd\u8981\u7b49\u5230\u665a\u4e0a10:30\u624d\u4f1a\u5f00\u5c40\uff0c\u4e0d\u8fc7\u8fd9\u6b21\u5c31\u5148\u4e0d\u8ba9\u4f60\u7b49\u5566";
          self.changeNode(self.arrow, 1.2, 1.2, -5, -252);
          self.changeNode(self.touchArea, 2, .8, 183, -252);
          self.arrow.rotation = 180;
        }, function() {
          self.EntryScene.active = false;
          self.mainGameScene.active = true;
          self.choosePlayer.active = true;
          self.label.string = "\u9996\u5148\uff0c\u8ba9\u6211\u4eec\u5148\u4e86\u89e3\u4e00\u4e0b\u600e\u4e48\u8fdb\u653b";
          self.changeNode(self.arrow, 0, 0, 0, 0);
          self.changeNode(self.touchArea, 7.2, 12.8, 0, 0);
        }, function() {
          self.lblBg.active = false;
          self.changeNode(self.arrow, 1.2, 1.2, -184, -263);
          self.changeNode(self.touchArea, 2.3, 1, -195, -412);
          self.arrow.rotation = -90;
        }, function() {
          self.blue.active = true;
          self.label.string = "\u70b9\u51fb\u53d8\u84dd\u7684\u73a9\u5bb6\u5373\u53ef\u53d1\u52a8\u653b\u51fb\uff0c\u70b9\u51fb\u653b\u51fb\u952e\u53ef\u4ee5\u64a4\u9500\u64cd\u4f5c";
          self.lblBg.active = true;
          self.changeNode(self.arrow, 1.2, 1.2, 0, 285);
          self.changeNode(self.touchArea, 5.32, 1.9, 5, 87);
        }, function() {
          self.blue.active = false;
          self.label.string = "\u6bcf\u6b21\u4f60\u5bf9\u4e00\u4e2a\u4eba\u53d1\u52a8\u653b\u51fb\u65f6\uff0c\u5bf9\u65b9\u4e5f\u4f1a\u5bf9\u4f60\u53d1\u52a8\u53cd\u51fb\uff0c\u662f\u4e00\u4e2a\u6740\u654c\u4e00\u5343\uff0c\u81ea\u635f\u516b\u767e\u7684\u4e3e\u52a8\uff0c\u6240\u4ee5\u53d1\u52a8\u653b\u51fb\u4e00\u5b9a\u8981\u8c28\u614e\u54e6";
          self.changeNode(self.arrow, 0, 0, 0, 0);
          self.changeNode(self.touchArea, 7.2, 12.8, 0, 0);
        }, function() {
          self.label.string = "\u73a9\u5bb6\u6709\u56db\u4e2a\u57fa\u7840\u5c5e\u6027\uff1a\u653b\u51fb\uff0c\u9632\u5fa1\uff0c\u654f\u6377\uff0c\u751f\u547d\u3002 \u653b\u51fb\u5f71\u54cd\u4f60\u6bcf\u6b21\u8fdb\u653b\u9020\u6210\u7684\u4f24\u5bb3\uff0c\u9632\u5fa1\u5f71\u54cd\u51cf\u4f24\u6548\u679c\uff0c\u654f\u6377\u51b3\u5b9a\u4e86\u4f60\u4eec\u4e4b\u95f4\u7684\u51fa\u624b\u987a\u5e8f\uff0c\u5982\u679c\u4f60\u7684\u654f\u6377\u6bd4\u5bf9\u624b\u9ad8\u51fa\u5f88\u591a\u7684\u8bdd\uff0c\u4f60\u8fd8\u53ef\u4ee5\u9020\u6210\u591a\u6b21\u4f24\u5bb3\u800c\u53ea\u53d7\u5230\u4e00\u6b21\u53cd\u51fb\u54e6\u3002";
        }, function() {
          self.label.string = "\u751f\u547d\u4e3a0\u7684\u65f6\u5019\u89d2\u8272\u5c31\u4f1a\u51fa\u5c40\uff0c\u800c\u5982\u679c\u65f6\u95f4\u5230\u4e86\u573a\u4e0a\u73a9\u5bb6\u6570\u4e0d\u6b62\u4e00\u4e2a\u7684\u8bdd\uff0c\u5c31\u6309\u6bcf\u4e2a\u89d2\u8272\u7684\u653b\u51fb\uff0c\u9632\u5fa1\uff0c\u654f\u6377\u4e09\u4e2a\u5c5e\u6027\u7684\u4e58\u79ef\u5927\u5c0f\u6765\u5206\u51fa\u80dc\u8d1f\u3002\u89d2\u8272\u4fe1\u606f\u4e0a\u7684\u5f97\u5206\u4fbf\u662f\u4ed6\u4eec\u7684\u4e58\u79ef";
        }, function() {
          self.label.string = "\u63d0\u5347\u81ea\u8eab\u5c5e\u6027\u7684\u65b9\u6cd5\u6709\u4e24\u79cd\uff1a\u8d2d\u4e70/\u5f3a\u5316\u88c5\u5907\u548c\u4f7f\u7528\u6cd5\u672f\uff0c\u8ba9\u6211\u4eec\u5148\u4e86\u89e3\u4e00\u4e0b\u600e\u4e48\u8d2d\u4e70\u88c5\u5907\u5427";
        }, function() {
          self.lblBg.active = false;
          self.changeNode(self.arrow, 1.2, 1.2, -190, -399);
          self.changeNode(self.touchArea, 2.3, 1, -196, -545);
        }, function() {
          self.mainGameScene.active = false;
          self.choosePlayer.active = false;
          self.deckScene.active = true;
          self.changeNode(self.arrow, 1.2, 1.2, -201, 437);
          self.changeNode(self.touchArea, 1.52, 1.5, -195, 227);
        }, function() {
          self.equipDetail.active = true;
          self.changeNode(self.arrow, 1.2, 1.2, 184, -339);
          self.changeNode(self.touchArea, 2.08, .75, 7, -339);
          self.arrow.rotation = 0;
        }, function() {
          self.equipDetail.active = false;
          self.lblBg.active = true;
          self.label.string = "\u5f88\u597d\uff0c\u8fd9\u6837\u6211\u4eec\u5c31\u6210\u529f\u5730\u5c06\u8fd9\u4ef6\u88c5\u5907\u4e70\u4e0b\u6765\u4e86\u3002\u6bcf\u6b21\u8d2d\u4e70\u88c5\u5907\u4f1a\u5360\u75282\u683c\u80cc\u5305\u5bb9\u91cf\uff0c\u80cc\u5305\u6ee1\u4e86\u4fbf\u65e0\u6cd5\u7ee7\u7eed\u8d2d\u4e70\uff0c\u51fa\u552e\u88c5\u5907\u53ef\u4ee5\u7a7a\u51fa\u80cc\u5305\uff0c\u65b9\u6cd5\u8ddf\u8d2d\u4e70\u76f8\u540c\uff0c\u4e0d\u8fc7\u53ea\u80fd\u8fd4\u8fd860%\u7684\u94b1\uff0c\u6240\u4ee5\u88c5\u5907\u8fd8\u662f\u8981\u8c28\u614e\u8d2d\u4e70\n\u4e0b\u9762\u6211\u4eec\u6765\u770b\u4e00\u4e0b\u5982\u4f55\u5f3a\u5316\u88c5\u5907";
          self.changeNode(self.arrow, 0, 0, 0, 0);
          self.changeNode(self.touchArea, 7.2, 12.8, 0, 0);
        }, function() {
          self.lblBg.active = false;
          self.changeNode(self.arrow, 1.2, 1.2, -277, 388);
          self.changeNode(self.touchArea, 1.2, 1.2, -274, 547);
          self.arrow.rotation = 90;
        }, function() {
          self.deckScene.active = false;
          self.mainGameScene.active = true;
          self.choosePlayer.active = true;
          self.changeNode(self.arrow, 1.2, 1.2, 59, -269);
          self.changeNode(self.touchArea, 2.3, 1, 57, -412);
          self.arrow.rotation = -90;
        }, function() {
          self.mainGameScene.active = false;
          self.choosePlayer.active = false;
          self.equipScene.active = true;
          self.changeNode(self.arrow, 1.2, 1.2, -201, 100);
          self.changeNode(self.touchArea, 1.52, 1.5, -195, 265);
          self.arrow.rotation = 90;
        }, function() {
          self.equipDetail.active = true;
          self.changeNode(self.arrow, 1.2, 1.2, 190, -339);
          self.changeNode(self.touchArea, 2.08, .75, 7, -339);
        }, function() {
          self.changeNode(self.arrow, 1.2, 1.2, 211, 176);
          self.changeNode(self.touchArea, 1, 1, 205, 448);
        }, function() {
          self.equipDetail.active = false;
          self.lblBg.active = true;
          self.label.string = "\u65e0\u8bba\u662f\u8d2d\u4e70\u8fd8\u662f\u5f3a\u5316\u88c5\u5907\uff0c\u90fd\u53ef\u4ee5\u4e3a\u4f60\u7684\u67d0\u9879\u5c5e\u6027\u63d0\u53475%\uff08\u6b66\u5668\u589e\u52a0\u653b\u51fb\uff0c\u9632\u5177\u589e\u52a0\u9632\u5fa1\uff0c\u978b\u5b50\u589e\u52a0\u654f\u6377\uff09\uff0c\u5e76\u9644\u5e26\u88c5\u5907\u7684\u7279\u6b8a\u6548\u679c\uff0c\u8fd9\u4e2a\u6548\u679c\u4e5f\u4f1a\u968f\u7740\u7b49\u7ea7\u7684\u53d8\u5316\u800c\u53d8\u5316";
          self.changeNode(self.arrow, 0, 0, 0, 0);
          self.changeNode(self.touchArea, 7.2, 12.8, 0, 0);
        }, function() {
          self.label.string = "\u88c5\u5907\u7684\u4ecb\u7ecd\u5c31\u5230\u8fd9\u91cc\u4e86\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u5c31\u6765\u770b\u770b\u600e\u6837\u4f7f\u7528\u6cd5\u672f";
        }, function() {
          self.lblBg.active = false;
          self.changeNode(self.arrow, 1.2, 1.2, -277, 388);
          self.changeNode(self.touchArea, 1.2, 1.2, -274, 547);
          self.arrow.rotation = 90;
        }, function() {
          self.equipScene.active = false;
          self.mainGameScene.active = true;
          self.changeNode(self.arrow, 1.2, 1.2, -190, -399);
          self.changeNode(self.touchArea, 2.3, 1, -196, -545);
          self.arrow.rotation = -90;
        }, function() {
          self.deckScene.active = true;
          self.mainGameScene.active = false;
          self.changeNode(self.arrow, 1.2, 1.2, 135, 523);
          self.changeNode(self.touchArea, 3.4, 1.5, 155, 359);
          self.arrow.rotation = -90;
        }, function() {
          self.spellList.active = true;
          self.changeNode(self.arrow, 1.2, 1.2, -201, 437);
          self.changeNode(self.touchArea, 1.52, 1.5, -195, 227);
        }, function() {
          self.spellDetail.active = true;
          self.changeNode(self.arrow, 1.2, 1.2, 184, -301);
          self.changeNode(self.touchArea, 2.08, .75, 7, -301);
          self.arrow.rotation = 0;
        }, function() {
          self.label.string = "\u8d2d\u4e70\u4e4b\u524d\u6ca1\u6709\u4e70\u8fc7\u7684\u6cd5\u672f\u4f1a\u5360\u75281\u683c\u80cc\u5305\u5bb9\u91cf\uff0c\u4e0d\u8fc7\u6cd5\u672f\u662f\u4e0d\u80fd\u51fa\u552e\u7684\uff0c\u6240\u4ee5\u6cd5\u672f\u7684\u8d2d\u4e70\u8981\u66f4\u52a0\u614e\u91cd\n\u6211\u4eec\u518d\u6765\u770b\u4e00\u4e0b\u600e\u6837\u4f7f\u7528\u6cd5\u672f";
          self.lblBg.active = true;
          self.changeNode(self.arrow, 0, 0, 0, 0);
          self.changeNode(self.touchArea, 7.2, 12.8, 0, 0);
        }, function() {
          self.spellDetail.active = false;
          self.changeNode(self.arrow, 1.2, 1.2, 211, 176);
          self.changeNode(self.touchArea, 1, 1, 205, 448);
          self.arrow.rotation = 90;
        }, function() {
          self.lblBg.active = false;
          self.changeNode(self.arrow, 1.2, 1.2, -277, 388);
          self.changeNode(self.touchArea, 1.2, 1.2, -274, 547);
        }, function() {
          self.deckScene.active = false;
          self.mainGameScene.active = true;
          self.choosePlayer.active = true;
          self.changeNode(self.arrow, 1.2, 1.2, 59, -399);
          self.changeNode(self.touchArea, 2.3, 1, 57, -545);
          self.arrow.rotation = -90;
        }, function() {
          self.mainGameScene.active = false;
          self.choosePlayer.active = false;
          self.spellScene.active = true;
          self.changeNode(self.arrow, 1.2, 1.2, -201, 437);
          self.changeNode(self.touchArea, 1.52, 1.5, -195, 265);
        }, function() {
          self.spellDetail.active = true;
          self.changeNode(self.arrow, 1.2, 1.2, 184, -301);
          self.changeNode(self.touchArea, 2.08, .75, 7, -301);
          self.arrow.rotation = 0;
        }, function() {
          self.spellDetail.active = false;
          self.spellScene.active = false;
          self.choosePlayer.active = true;
          self.label.string = "\u4e0e\u53d1\u8d77\u653b\u51fb\u4e0d\u540c\uff0c\u6240\u6709\u6cd5\u672f\u90fd\u53ef\u4ee5\u5bf9\u4efb\u610f\u4e00\u4e2a\u4eba\u4f7f\u7528\u7684\uff0c\u5305\u62ec\u81ea\u5df1\u3002";
          self.lblBg.active = true;
          self.changeNode(self.arrow, 1.2, 1.2, -17, 132);
          self.changeNode(self.touchArea, 5.4, 5.4, 11, 315);
          self.arrow.rotation = 90;
        }, function() {
          self.spellScene.active = true;
          self.choosePlayer.active = false;
          self.label.string = "\u6cd5\u672f\u4f7f\u7528\u6210\u529f\uff0c\u4f60\u7684\u653b\u51fb\u529b\u63d0\u5347\u4e862%";
          self.changeNode(self.arrow, 0, 0, 0, 0);
          self.changeNode(self.touchArea, 7.2, 12.8, 0, 0);
        }, function() {
          self.label.string = "\u5176\u5b9e\u80cc\u5305\u7684\u5bb9\u91cf\u5f88\u5c11\uff0c\u6839\u672c\u4e0d\u591f\u54b1\u4eec\u73a9\u7684\uff0c\u6240\u4ee5\u8ba9\u6211\u4eec\u6765\u6269\u5145\u4e00\u4e0b\u80cc\u5305\u7684\u5bb9\u91cf\u5427";
        }, function() {
          self.changeNode(self.arrow, 1.2, 1.2, 254, 419);
          self.changeNode(self.touchArea, 1.4, 1.4, 254, 555);
        }, function() {
          self.label.string = "\u6269\u5145\u80cc\u5305\u82b1\u8d39\u7684\u91d1\u5e01\u662f\u4f60\u5f53\u524d\u80cc\u5305\u4e0a\u9650\u768410\u500d\uff0c\u6269\u5145\u7684\u6b21\u6570\u8d8a\u591a\uff0c\u6d88\u8017\u7684\u91d1\u5e01\u5c31\u8d8a\u591a\uff0c\u6240\u4ee5\u6269\u5145\u80cc\u5305\u4e5f\u9700\u8981\u8c28\u614e\u4e00\u4e9b";
          self.changeNode(self.arrow, 0, 0, 0, 0);
          self.changeNode(self.touchArea, 7.2, 12.8, 0, 0);
        }, function() {
          self.label.string = "\u5bf9\u4e86\uff0c\u91d1\u5e01\u662f\u6bcf2\u5206\u949f\u83b7\u53d61\u679a\uff0c\u6bcf\u592922:30-6:30\u8fd9\u6bb5\u65f6\u95f4\u5185\u4e0d\u4ec5\u83b7\u53d6\u901f\u5ea6\u51cf\u534a\uff0c\u800c\u4e14\u65e0\u6cd5\u8fdb\u884c\u4efb\u4f55\u64cd\u4f5c\u3002\u6240\u4ee5\uff0c\u597d\u597d\u4f11\u606f\uff0c\u522b\u4e00\u5929\u5230\u665a\u60f3\u7740\u6e38\u620f";
        }, function() {
          self.label.string = "\u53e6\u5916\uff0c\u6bcf\u5929\u6709\u56db\u6b21\u673a\u4f1a\u8ba9\u4f60\u83b7\u53d6\u7684\u91d1\u5e01\u7ffb\u500d\uff0c\u6240\u4ee5\u5c31\u7b97\u4f60\u6bcf\u5929\u767b\u5f55\u7684\u6b21\u6570\u591a\u4e86\u4f60\u4e5f\u4e0d\u4f1a\u6709\u66f4\u591a\u7684\u6536\u76ca\u7684\u54e6";
        }, function() {
          self.mainGameScene.active = true;
          self.spellScene.active = false;
          self.label.string = "\u57fa\u672c\u64cd\u4f5c\u7684\u6559\u7a0b\u5c31\u5230\u8fd9\u91cc\u4e86\u3002\u5bf9\u4e86\uff0c\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684\u6309\u94ae\u53ef\u4ee5\u67e5\u770b\u4e09\u4e2a\u73a9\u5bb6\u64cd\u4f5c\u7684\u8bb0\u5f55\uff0c\u70b9\u51fb\u73a9\u5bb6\u53ef\u4ee5\u67e5\u770b\u66f4\u8be6\u7ec6\u7684\u4fe1\u606f\uff0c\u53f3\u4e0b\u89d2\u7684\u8ba1\u7b97\u5668\u53ef\u4ee5\u5e2e\u4f60\u5b8c\u6210\u5f88\u591a\u8ba1\u7b97\u4efb\u52a1\uff0c\u795d\u4f60\u6e38\u620f\u6109\u5feb\uff01";
        }, function() {
          cc.director.loadScene("hall");
        } ];
        this.process++;
        fnList[this.process]();
      },
      changeNode: function changeNode(node, scaleX, scaleY, x, y) {
        node.x = x;
        node.y = y;
        node.scaleX = scaleX;
        node.scaleY = scaleY;
      },
      onLoad: function onLoad() {
        this.changeNode(this.touchArea, 7.2, 12.8, 0, 0);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  interfaces: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a6325W7NF9LSL/6rLeR8Hib", "interfaces");
    "use strict";
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        "value" in descriptor && (descriptor.writable = true);
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      protoProps && _defineProperties(Constructor.prototype, protoProps);
      staticProps && _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return "symbol" === typeof key ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if ("object" !== typeof input || null === input) return input;
      var prim = input[Symbol.toPrimitive];
      if (void 0 !== prim) {
        var res = prim.call(input, hint || "default");
        if ("object" !== typeof res) return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === hint ? String : Number)(input);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Item = void 0;
    var Item = function() {
      function Item() {
        arguments.length > 0 && this.init.apply(this, arguments);
      }
      var _proto = Item.prototype;
      _proto.init = function init(game, new_item) {
        void 0 === new_item && (new_item = true);
        this.type = this.constructor.name;
        if (!new_item) return;
        this.game = game;
        game.GenUniqueCode(this);
        this.disabled = false;
      };
      _proto.JSONStringify = function JSONStringify() {
        var res = {};
        for (var key in this) {
          var value = this[key];
          if (value instanceof Function || this.__lookupGetter__(key)) continue;
          res[key] = value instanceof Item ? {
            isItem: true,
            code: value.code
          } : value;
        }
        return res;
      };
      _proto.JSONParse = function JSONParse(info) {
        for (var property in info) {
          var value = info[property];
          if (value && value["isItem"]) {
            var child = this.game.unitDict.get(value.code);
            this[property] = child;
          } else this[property] = value;
        }
      };
      _createClass(Item, [ {
        key: "isPlayer",
        get: function get() {
          return this.code >= 1 && this.code <= 3;
        }
      } ]);
      return Item;
    }();
    Item.category = "item";
    Item.uiDisplay = false;
    Item.iconUrl = "";
    exports.Item = Item;
    cc._RF.pop();
  }, {} ],
  itemOverview: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ebc0efTXw9NEqv1rPOUd51C", "itemOverview");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.level = null;
        return _this;
      }
      NewClass.prototype.init = function(obj) {
        obj.level && (this.level.string = "lv." + obj.level);
        var clazz = gameUtils_js_1.typeDict()[obj.type];
        var iconUrl = clazz.iconUrl.replace("pets", "petIcon");
        this.node.getComponent("icon").init("file:" + iconUrl);
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "level", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    var gameUtils_js_1 = require("../battleMiddleWare/gameUtils.js");
    cc._RF.pop();
  }, {
    "../battleMiddleWare/gameUtils.js": "gameUtils"
  } ],
  iterationUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9a7f83CUi9KHJIIOJm/5AKm", "iterationUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.iter_36 = void 0;
    var gameConstants_1 = require("../constants/gameConstants");
    function iter_36() {
      var res = [];
      for (var y = 0; y < gameConstants_1.MAP_SIZE; y++) for (var x = 0; x < gameConstants_1.MAP_SIZE; x++) res.push([ x, y ]);
      return res;
    }
    exports.iter_36 = iter_36;
    cc._RF.pop();
  }, {
    "../constants/gameConstants": "gameConstants"
  } ],
  labelToggle: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "70489DzjAZD0afgJ94c4Vpc", "labelToggle");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.data = null;
        return _this;
      }
      NewClass.prototype.start = function() {};
      NewClass.prototype.init = function(label, data) {
        this.label.string = label;
        this.data = data;
      };
      NewClass.prototype.getLabel = function() {
        return this.label.string;
      };
      NewClass.prototype.getContent = function() {
        return {
          label: this.label.string,
          data: this.data
        };
      };
      NewClass.prototype.onChecked = function() {
        var isChecked = this.node.getComponent(cc.Toggle).isChecked;
        this.label.node.color = isChecked ? new cc.Color(238, 228, 207) : new cc.Color(255, 255, 255);
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  logUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "34c5fLTqyRLobz+eLYZ+SDG", "logUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.logVertex = exports.logItem = exports.logDamageInfo = exports.logCoinInfo = exports.coinLog = void 0;
    function coinLog(coin, currTime, player) {
      var increased = [], decreased = [], res = [];
      Coin_1.COIN_KEYS.forEach(function(key) {
        coin[key] > 0 && increased.push(key);
        coin[key] < 0 && decreased.push(key);
      });
      if (increased.length > 0) {
        increased = increased.map(function(key) {
          return coin[key] + "\u679a" + Coin_1.COIN_KEYS_NAME_MAP[key];
        });
        res.push({
          time: currTime,
          level: 2,
          content: logItem(player) + "\u83b7\u5f97\u4e86" + increased.join("\uff0c") + "\u3002",
          extra: {
            player: player,
            coin: new Coin_1.Coin(coin)
          }
        });
      }
      if (decreased.length > 0) {
        decreased = decreased.map(function(key) {
          return -coin[key] + "\u679a" + Coin_1.COIN_KEYS_NAME_MAP[key];
        });
        res.push({
          time: currTime,
          level: 2,
          content: logItem(player) + "\u5931\u53bb\u4e86" + decreased.join("\uff0c") + "\u3002",
          extra: {
            player: player,
            coin: new Coin_1.Coin(coin)
          }
        });
      }
      return res;
    }
    exports.coinLog = coinLog;
    function logCoinInfo(player, coin) {
      var game = player.game;
      var logger = game.logger;
      if (!logger) return;
      var logList = logger.data[logger.data.length - 1];
      coinLog(coin, game.currTime, player).forEach(function(log) {
        return null === logger || void 0 === logger ? void 0 : logger.addLog(log.time, log.level, log.content, log.extra);
      });
    }
    exports.logCoinInfo = logCoinInfo;
    function logDamageInfo(player1, player2, damage) {
      var game = player1.game;
      var logger = game.logger;
      if (!logger) return;
      var type = (damage.type, "\u7269\u7406");
      logger.addLog(game.currTime, 0, '{"code":' + player1.code + '}\u5bf9{"code":' + player2.code + "}\u9020\u6210\u4e86" + damage.value + "\u70b9" + type + "\u4f24\u5bb3");
      logger.addLog(game.currTime, -1, "");
    }
    exports.logDamageInfo = logDamageInfo;
    function logActualDamageInfo(player1, player2, damage) {
      var game = player1.game;
      var logger = game.logger;
      if (!logger) return;
      var type = (damage.type, "\u7269\u7406");
      logger.addLog(game.currTime, 3, "\u5b9e\u9645\u9020\u6210\u4e86" + damage.value + "\u70b9" + type + "\u4f24\u5bb3");
    }
    function logItem(item) {
      if (void 0 == item.x) return '{"code":' + item.code + "}";
      return '{"code":' + item.code + ',"x":' + item.x + ',"y":' + item.y + "}";
    }
    exports.logItem = logItem;
    function logVertex(x, y) {
      return "(" + (x + 1) + "," + (gameConstants_1.MAP_SIZE - y) + ")";
    }
    exports.logVertex = logVertex;
    var Coin_1 = require("../objects/Coin");
    var gameConstants_1 = require("../constants/gameConstants");
    cc._RF.pop();
  }, {
    "../constants/gameConstants": "gameConstants",
    "../objects/Coin": "Coin"
  } ],
  mapUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "19a76oUshJJRL7UckY2qE19", "mapUtils");
    "use strict";
    function getItemIn33(center) {
      var locs = getLocInScope(center, 1.5);
      var game = center.game;
      return locs.map(function(loc) {
        return game.map[loc[1]][loc[0]];
      }).filter(function(item) {
        return item;
      });
      var map;
      var x, y;
      var xs, ys;
      var checkBoundary;
      var res;
    }
    function getLocInScope(center, scope) {
      var res = [];
      return iter_36().filter(function(loc) {
        var x = loc[0];
        var y = loc[1];
        return (x - center.x) * (x - center.x) + (y - center.y) * (y - center.y) <= scope * scope;
      });
    }
    function oneDirection(filter) {
      return iter_36().filter(function(loc) {
        return filter(loc[0], loc[1]);
      });
    }
    function eightDirections(center) {
      var res = [ oneDirection(function(x, y) {
        return x < center.x && center.x - x == y - center.y;
      }), oneDirection(function(x, y) {
        return x == center.x && y > center.y;
      }), oneDirection(function(x, y) {
        return x > center.x && center.x - x == center.y - y;
      }), oneDirection(function(x, y) {
        return x < center.x && y == center.y;
      }), oneDirection(function(x, y) {
        return x > center.x && y == center.y;
      }).reverse(), oneDirection(function(x, y) {
        return x < center.x && center.x - x == center.y - y;
      }).reverse(), oneDirection(function(x, y) {
        return x == center.x && y < center.y;
      }).reverse(), oneDirection(function(x, y) {
        return x > center.x && center.x - x == y - center.y;
      }).reverse() ];
      res.forEach(function(direction) {
        direction.sort(function(a, b) {
          a = {
            x: a[0],
            y: a[1]
          };
          b = {
            x: b[0],
            y: b[1]
          };
          return center.distance(a) - center.distance(b);
        });
      });
      return res;
    }
    function emptyMap() {
      var res = [];
      for (var i = 0; i < MAP_SIZE; i++) res.push([]);
      return res;
    }
    function edgeIndexs() {
      var res = [];
      for (var i = 0; i < MAP_SIZE - 1; i++) res.push([ 0, i ]);
      for (var _i = 0; _i < MAP_SIZE - 1; _i++) res.push([ _i, MAP_SIZE - 1 ]);
      for (var _i2 = 0; _i2 < MAP_SIZE - 1; _i2++) res.push([ MAP_SIZE - 1, MAP_SIZE - 1 - _i2 ]);
      for (var _i3 = 0; _i3 < MAP_SIZE - 1; _i3++) res.push([ MAP_SIZE - 1 - _i3, 0 ]);
      return res;
    }
    module.exports = {
      getItemIn33: getItemIn33,
      getLocInScope: getLocInScope,
      oneDirection: oneDirection,
      eightDirections: eightDirections,
      emptyMap: emptyMap,
      edgeIndexs: edgeIndexs
    };
    var _require = require("../constants/gameConstants"), MAP_SIZE = _require.MAP_SIZE;
    var _require2 = require("./iterationUtils"), iter_36 = _require2.iter_36;
    cc._RF.pop();
  }, {
    "../constants/gameConstants": "gameConstants",
    "./iterationUtils": "iterationUtils"
  } ],
  map: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e4cccqB0/lMP651CmloLuhJ", "map");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        inputBlocker: cc.Node,
        tiles: cc.Prefab,
        layout: cc.Layout,
        content: cc.Node,
        animationNodes: cc.Node,
        creatureIconLayout: cc.Node,
        animationLayout: cc.Node,
        animationLayout2: cc.Node,
        singleGrid: cc.Prefab,
        scaler: cc.Slider
      },
      init: function init() {
        this.animationNodes.removeAllChildren();
        var MAP_SIZE = constant().MAP_SIZE;
        for (var i = 0; i < MAP_SIZE * MAP_SIZE; i++) {
          var tile = cc.instantiate(this.tiles);
          var animation1 = cc.instantiate(this.singleGrid);
          var animation2 = cc.instantiate(this.singleGrid);
          tile.getComponent("gridIcon").setChildren(animation1.children[0], animation2.children[0]);
          this.layout.node.addChild(tile);
          this.animationLayout.addChild(animation1);
          this.animationLayout2.addChild(animation2);
        }
        this.scaler.progress = config.defaultMapScale;
        this.scale();
      },
      refresh: function refresh() {
        var MAP_SIZE = constant().MAP_SIZE;
        var children = this.layout.node.children;
        for (var y = 0; y < MAP_SIZE; y++) for (var x = 0; x < MAP_SIZE; x++) {
          var tile = children[y * MAP_SIZE + x];
          tile.getComponent("gridIcon").init(gameGlobals.gameObj.map[y][x], x, y);
        }
      },
      enableSelection: function enableSelection(coordinates, fn) {
        var _this = this;
        var activeMap = [];
        var MAP_SIZE = constant().MAP_SIZE;
        for (var i = 0; i < MAP_SIZE * MAP_SIZE; i++) activeMap.push(false);
        coordinates.forEach(function(ord) {
          var x = ord[0], y = ord[1];
          activeMap[y * MAP_SIZE + x] = true;
        });
        activeMap.forEach(function(active, index) {
          var child = _this.layout.node.children[index];
          child.getComponent("gridIcon").enableSelection(active, fn);
        });
        this.inputBlocker.active = true;
        this.node.zIndex = 200;
      },
      scale: function scale() {
        var scale = 1 + this.scaler.progress;
        this.content.scaleX = scale;
        this.content.scaleY = scale;
        this.content.width = 671 * scale;
        this.content.height = 671 * scale;
      },
      recover: function recover() {
        this.layout.node.children.forEach(function(child, index) {
          child.getComponent("gridIcon").recover();
        });
        this.inputBlocker.active = false;
        this.node.zIndex = 0;
        refreshPage();
      },
      update: function update(dt) {
        config.playAnimation && gameGlobals.animationPlayer.play({
          x: 99,
          y: 99
        });
      }
    });
    var _require = require("../Globals"), config = _require.config;
    var gameGlobals = require("../battleMiddleWare/gameGlobals");
    var _require2 = require("../battleMiddleWare/gameUtils"), constant = _require2.constant, refreshPage = _require2.refreshPage;
    cc._RF.pop();
  }, {
    "../Globals": "Globals",
    "../battleMiddleWare/gameGlobals": "gameGlobals",
    "../battleMiddleWare/gameUtils": "gameUtils"
  } ],
  mockConsole: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7e7676le0NIjq7At9Ygb6J+", "mockConsole");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.confirmCreatingJourneyPage = null;
        _this.versionSelected = null;
        _this.versionSelectedLabel = null;
        _this.versionSelection = null;
        _this.levelEditor = null;
        _this.level = 0;
        _this.auctions = null;
        _this.labelToggle = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        var _this = this;
        var versionSelectionList = this.versionSelection.node;
        var version2Chinese = function(version) {
          var twoParts = version.split("-v");
          var rawType = twoParts[0], rawIndex = twoParts[1];
          var typeMap = {
            classic: "\u9038\u5c18"
          };
          var chinType = typeMap[rawType];
          var numMap = [ "\u96f6", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d", "\u4e03", "\u516b", "\u4e5d" ];
          var chinIndex = rawIndex.split(".").map(function(num) {
            return numMap[parseInt(num)];
          }).join("");
          return chinType + "\xb7" + chinIndex;
        };
        var versionList = journey.VALID_VERSION_LIST;
        versionList.forEach(function(version) {
          var toggle = cc.instantiate(_this.labelToggle);
          var label = version2Chinese(version);
          toggle.getComponent("labelToggle").init(label, version);
          versionSelectionList.addChild(toggle);
        });
        var versionToggles = this.versionSelection.toggleItems;
        var lastToggle = versionToggles[versionToggles.length - 1];
        lastToggle.check();
        var lastToggleComponent = lastToggle.node.getComponent("labelToggle");
        lastToggleComponent.onChecked();
        var _a = lastToggleComponent.getContent(), label = _a.label, data = _a.data;
        this.versionSelectedLabel.string = label;
        this.versionSelected = data;
        var containerHeight = 57 * versionToggles.length;
        versionSelectionList.y = 125 - containerHeight / 2;
      };
      NewClass.prototype.selectVersion = function() {
        this.versionSelection.node.parent.active = true;
      };
      NewClass.prototype.cancelSelectVersion = function() {
        this.versionSelection.node.parent.active = false;
      };
      NewClass.prototype.onVersionChanged = function() {
        var toggles = this.versionSelection.toggleItems;
        var selectedToggle = toggles.find(function(toggle) {
          return toggle.isChecked;
        });
        var _a = selectedToggle.node.getComponent("labelToggle").getContent(), label = _a.label, data = _a.data;
        toggles.forEach(function(toggle) {
          return toggle.node.getComponent("labelToggle").onChecked();
        });
        this.versionSelectedLabel.string = label;
        this.versionSelected = data;
        this.versionSelection.node.parent.active = false;
      };
      NewClass.prototype.onLevelChanged = function() {
        var level = parseInt(this.levelEditor.string);
        var isValid = !isNaN(level) && level >= 0 && level <= 15;
        this.levelEditor.fontColor = isValid ? new cc.Color(255, 255, 255) : new cc.Color(255, 0, 0);
        this.level = level;
      };
      NewClass.prototype.cancelCreatingJourney = function() {
        this.confirmCreatingJourneyPage.active = false;
      };
      NewClass.prototype.confirmCreatingJourney = function() {
        this.confirmCreatingJourneyPage.active = true;
      };
      NewClass.prototype.createJourney = function() {
        var level = this.level, versionSelected = this.versionSelected;
        var auctions = this.auctions.getComponentsInChildren(cc.EditBox).map(function(editbox) {
          return editbox.string ? parseInt(editbox.string) : parseInt(editbox.placeholder);
        });
        if (void 0 != auctions.find(function(auction) {
          return isNaN(auction) || auction < 0 || auction > 99;
        })) {
          uiUtils_1.alertError("\u7ade\u4ef7\u503c\u5fc5\u987b\u4e3a0-99\u4e4b\u95f4\u7684\u6b63\u6574\u6570");
          return;
        }
        if (isNaN(level) || level < 0 || level > 15) {
          uiUtils_1.alertError("\u8bf7\u8f93\u5165\u6bb5\u4f4d\u7b49\u7ea7(0-15\u4e4b\u95f4\u7684\u6b63\u6574\u6570)");
          return;
        }
        var routers = journey.getRouter(versionSelected);
        console.log({
          auctions: auctions,
          level: level
        });
        var commands = routers.startCommands({
          auctions: auctions,
          level: level
        });
        routers.initForCocos();
        gameService.initGame(commands, versionSelected);
        Object.assign(gameGlobal.gameInfo, MOCKING_GAME_INFO);
        gameGlobal.isTrying = true;
        cc.director.loadScene("gameMain");
      };
      NewClass.prototype.close = function() {
        this.node.active = false;
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "confirmCreatingJourneyPage", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "versionSelectedLabel", void 0);
      __decorate([ property(cc.ToggleContainer) ], NewClass.prototype, "versionSelection", void 0);
      __decorate([ property(cc.EditBox) ], NewClass.prototype, "levelEditor", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "auctions", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "labelToggle", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    var MOCKING_GAME_INFO = {
      roomid: 17,
      player1id: -1,
      player2id: -2,
      player3id: -3,
      playerInfo: [ {
        userid: 274,
        nickname: "\u73a9\u5bb61",
        iconUrl: "file:heroIcon/4.png",
        decorations: [ {
          userid: 274,
          category: "hero",
          index: 4,
          using: 1
        }, {
          userid: 274,
          category: "player",
          index: 4,
          using: 1
        }, {
          userid: 274,
          category: "scene",
          index: 1,
          using: 1
        }, {
          userid: 274,
          category: "userIcon",
          index: 0,
          using: 1
        } ],
        game_times: 0,
        win_times: 0,
        power: 0,
        gems: 0,
        trophic: 0
      }, {
        userid: 275,
        nickname: "\u73a9\u5bb62",
        iconUrl: "file:heroIcon/2.png",
        decorations: [ {
          userid: 275,
          category: "hero",
          index: 2,
          using: 1
        }, {
          userid: 275,
          category: "player",
          index: 2,
          using: 1
        }, {
          userid: 275,
          category: "scene",
          index: 4,
          using: 1
        }, {
          userid: 275,
          category: "userIcon",
          index: 1,
          using: 1
        } ],
        game_times: 0,
        win_times: 0,
        power: 0,
        gems: 0,
        trophic: 0
      }, {
        userid: 273,
        nickname: "\u73a9\u5bb63",
        iconUrl: "file:heroIcon/3.png",
        decorations: [ {
          userid: 273,
          category: "hero",
          index: 3,
          using: 1
        }, {
          userid: 273,
          category: "player",
          index: 3,
          using: 1
        }, {
          userid: 273,
          category: "scene",
          index: 1,
          using: 1
        }, {
          userid: 273,
          category: "userIcon",
          index: 0,
          using: 1
        } ],
        game_times: 0,
        win_times: 0,
        power: 0,
        gems: 0,
        trophic: 0
      } ],
      observing: {
        logs: [],
        status: 1
      },
      entrying: {
        logs: [],
        status: 1
      },
      records: [ "0000001st000", "0000002st003", "0000003st000" ],
      overview: {
        power: "",
        iconList: []
      },
      startTime: 1718980800,
      version: "classic-v0.0.1",
      results: 0
    };
    var uiUtils_1 = require("../otherComponents/uiUtils");
    var journey = require("../xjfz-journey/index");
    var gameService = require("../battleMiddleWare/gameService.js");
    var gameGlobal = require("../battleMiddleWare/gameGlobals");
    cc._RF.pop();
  }, {
    "../battleMiddleWare/gameGlobals": "gameGlobals",
    "../battleMiddleWare/gameService.js": "gameService",
    "../otherComponents/uiUtils": "uiUtils",
    "../xjfz-journey/index": "index"
  } ],
  mocking: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9eef8UIfqRJebwvU8s207H2", "mocking");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.records = null;
        _this.games = null;
        _this.createJourneyPage = null;
        return _this;
      }
      NewClass.prototype.backToHall = function() {
        cc.director.loadScene("hall");
      };
      NewClass.prototype.startCreatingJourney = function() {
        this.createJourneyPage.active = true;
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "records", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "games", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "createJourneyPage", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  moveAnimation: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e6402tGiCNLp4pPTrbJLuVU", "moveAnimation");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.MoveAnimation = void 0;
    var animationPlayer_1 = require("./animationPlayer");
    var animationUtils_1 = require("./animationUtils");
    var animeConstant_1 = require("./animeConstant");
    var MoveAnimation = function(_super) {
      __extends(MoveAnimation, _super);
      function MoveAnimation(oldX, oldY, newX, newY) {
        var _this = this;
        try {
          _this = _super.call(this, oldX, oldY) || this;
          _this.push([ animationUtils_1.levelUpCreatureIcon ]);
          var locationGradient = [ 0 ];
          for (var i = 1; i <= 5; i++) locationGradient.push(locationGradient.at(-1) + 20);
          for (var i = 1; i <= 7; i++) locationGradient.push(locationGradient.at(-1) + 21 - 2 * i);
          var maxGradient_1 = locationGradient.at(-1);
          var x_diff_1 = (newX - oldX) * animeConstant_1.GRID_SIZE_X, y_diff_1 = (newY - oldY) * animeConstant_1.GRID_SIZE_Y;
          var functions = locationGradient.map(function(gradient) {
            return function(args) {
              var creatureNode = animationUtils_1.getCreatureIconNode(args);
              creatureNode.x = x_diff_1 * gradient / maxGradient_1;
              creatureNode.y = -y_diff_1 * gradient / maxGradient_1;
            };
          });
          _this.push(functions);
        } catch (err) {}
        return _this;
      }
      return MoveAnimation;
    }(animationPlayer_1.BaseAnimation);
    exports.MoveAnimation = MoveAnimation;
    cc._RF.pop();
  }, {
    "./animationPlayer": "animationPlayer",
    "./animationUtils": "animationUtils",
    "./animeConstant": "animeConstant"
  } ],
  numberUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4d73fsBRvFEJrN6ydlz7S1e", "numberUtils");
    "use strict";
    function getThirdDigit(numberStr) {
      if (numberStr.indexOf("e") < 4) return 0;
      return parseInt(numberStr[3], 10);
    }
    function getPercentage(num) {
      num *= 1e4;
      var numStr = Math.round(num).toString();
      var floatDigit = 2;
      numStr.endsWith("0") && (floatDigit = 1);
      numStr.endsWith("00") && (floatDigit = 0);
      var index = numStr.length - 2;
      var res = numStr.substring(0, index);
      floatDigit > 0 && (res += "." + numStr.substring(index, index + floatDigit));
      return res + "%";
    }
    function roundIfInteger(num) {
      var isInteger = Math.round(1e5 * num) % 1e5 == 0;
      return isInteger ? Math.round(num) : num;
    }
    function between(num, a, b) {
      return num >= a && num <= b;
    }
    module.exports = {
      getThirdDigit: getThirdDigit,
      getPercentage: getPercentage,
      roundIfInteger: roundIfInteger,
      between: between
    };
    cc._RF.pop();
  }, {} ],
  observeAndEntry: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2191fgUrohGf6FjnL7Jv1Ho", "observeAndEntry");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        observedTimesLbl: cc.Label,
        remainTimesLbl: cc.Label,
        page: cc.Node,
        actionType: "",
        commonBtns: cc.Node,
        specialCase: cc.Node
      },
      start: function start() {
        this.node.zIndex = 201;
        gameGlobals.isTrying && (this.node.active = false);
      },
      refresh: function refresh() {
        this.page.active = false;
        var info = gameGlobals.gameInfo[this.actionType];
        var logs = info.logs;
        var observed = logs.filter(function(log) {
          return 0 != log.active;
        }).length;
        var total = "observing" == this.actionType ? 7 : 4;
        var remain = total - observed;
        var actionName = "observing" == this.actionType ? "\u89c2\u6d4b" : "\u4fee\u884c";
        this.observedTimesLbl.string = "\u4eca\u65e5\u5df2" + actionName + "\uff1a" + observed + "\u6b21";
        this.remainTimesLbl.string = "\u5269\u4f59" + actionName + "\u6b21\u6570\uff1a" + remain + "\u6b21";
        this.node.active = 3 != info.status && 4 != info.status;
        this.commonBtns.active = 2 != info.status;
        this.specialCase.active = 2 == info.status;
      },
      adsObserving: function adsObserving() {
        var self = this;
        var roomid = gameGlobals.gameInfo.roomid;
        runAds("", roomid, function(success) {
          success && sendGetForms("journey/room/" + roomid, {}, function(response) {
            self.refreshGame(response);
            self.close();
          });
        });
      },
      gemObserving: function gemObserving() {
        this.close();
        var self = this;
        var roomid = gameGlobals.gameInfo.roomid;
        sendPostForms("journey/observe", {
          roomid: roomid
        }, function(response) {
          self.refreshGame(response);
        });
      },
      entry: function entry() {
        this.close();
        var self = this;
        var roomid = gameGlobals.gameInfo.roomid;
        sendPostForms("journey/entry", {
          roomid: roomid
        }, function(response) {
          self.refreshGame(response);
          gameGlobals.currTime = gameGlobals.gameObj.currTime;
          gameGlobals.isTrying = false;
          gameGlobals.isEntering = true;
        });
      },
      refreshGame: function refreshGame(response) {
        initGame(response.split("\n"));
        var minutes = "observing" == this.actionType ? 30 : 5;
        gameGlobals.gameInfo.refreshTime = Date.now() + 60 * minutes * 1e3;
        gameGlobals.gameInfo[this.actionType].status = 3;
        refreshPage();
        this.page.active = false;
      },
      open: function open() {
        this.page.active = true;
      },
      close: function close() {
        this.page.active = false;
      }
    });
    var gameGlobals = require("../battleMiddleWare/gameGlobals");
    var _require = require("../AnyThinkAds/AdsManager"), runAds = _require.runAds;
    var _require2 = require("../http"), sendGetForms = _require2.sendGetForms, sendPostForms = _require2.sendPostForms;
    var _require3 = require("../battleMiddleWare/gameService"), initGame = _require3.initGame;
    var _require4 = require("../battleMiddleWare/gameUtils"), refreshPage = _require4.refreshPage;
    cc._RF.pop();
  }, {
    "../AnyThinkAds/AdsManager": "AdsManager",
    "../battleMiddleWare/gameGlobals": "gameGlobals",
    "../battleMiddleWare/gameService": "gameService",
    "../battleMiddleWare/gameUtils": "gameUtils",
    "../http": "http"
  } ],
  overviewTemplate: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "df8f6sTX4BN/Zw5wKhn6r33", "overviewTemplate");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        journeyLevel: cc.Label,
        rank1: cc.Label,
        rank2: cc.Label,
        rank3: cc.Label,
        items1: cc.Node,
        items2: cc.Node,
        items3: cc.Node,
        power1: cc.Label,
        power2: cc.Label,
        power3: cc.Label,
        dateLabel: cc.Label,
        itemIcon: cc.Prefab,
        baseInfo: null
      },
      init: function init(obj) {
        var _this = this;
        var rankingLabelList = [ this.rank1, this.rank2, this.rank3 ];
        var itemOverviewList = [ this.items1, this.items2, this.items3 ];
        var powerLabelList = [ this.power1, this.power2, this.power3 ];
        var info = obj.info, overviews = obj.overviews;
        this.baseInfo = info;
        if (info.results && info.results > 0) {
          var rankings = info.results.toString().split("");
          rankings.forEach(function(rankStr, index) {
            var rank = parseInt(rankStr);
            var rankLabel = rankingLabelList[index];
            rankLabel.string = [ "\u9b41\u9996", "\u4e9a\u5723", "\u4e09\u624d" ][rank - 1];
          });
        }
        overviews.forEach(function(overview, index) {
          console.log(overview);
          overview.iconList.filter(function(itemInfo) {
            return typeDict()[itemInfo.type].overviewDisplay;
          }).forEach(function(itemInfo) {
            var item = cc.instantiate(_this.itemIcon);
            item.getComponent("itemOverview").init(itemInfo);
            itemOverviewList[index].addChild(item);
          });
          itemOverviewList[index].getComponent(cc.Layout).updateLayout();
          powerLabelList[index].string = convertPowerString(overview.power);
        });
        var passedSecond = Date.now() / 1e3 - info.startTime;
        var passedDay = Math.floor(passedSecond / 86400);
        this.dateLabel.string = passedDay + "\u5929\u524d";
        this.journeyLevel.string = info.level + "\u7ea7\u798f\u5730";
      },
      entryBtn: function entryBtn() {
        var info = this.baseInfo;
        gameGlobals.gameInfo = info;
        gameGlobals.isTrying = true;
        gameGlobals.isEntering = false;
        journey.getRouter(info.version).initForCocos();
        var needFetchInfo = !info.records || 0 == info.records.length;
        if (needFetchInfo) http.sendGetForms("journey/records/" + info.roomid, {}, function(response) {
          info.records = response.split("\n");
          initGame(info.records, info.version);
          cc.director.loadScene("gameMain");
        }); else {
          initGame(info.records, info.version);
          cc.director.loadScene("gameMain");
        }
      }
    });
    var _require = require("../battleMiddleWare/gameService"), initGame = _require.initGame;
    var http = require("../http");
    var gameGlobals = require("../battleMiddleWare/gameGlobals");
    var journey = require("../xjfz-journey/index");
    var _require2 = require("../battleMiddleWare/gameUtils"), typeDict = _require2.typeDict, convertPowerString = _require2.convertPowerString;
    var _require3 = require("../Globals"), user = _require3.user;
    cc._RF.pop();
  }, {
    "../Globals": "Globals",
    "../battleMiddleWare/gameGlobals": "gameGlobals",
    "../battleMiddleWare/gameService": "gameService",
    "../battleMiddleWare/gameUtils": "gameUtils",
    "../http": "http",
    "../xjfz-journey/index": "index"
  } ],
  petDetails: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2a00b5FYCpKIKtPs7MHfeS7", "petDetails");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        id: 1,
        title: cc.Label,
        iconSF: cc.Sprite,
        detail: cc.Label,
        price: cc.Node,
        energyLabel: cc.Label
      },
      init: function init(id) {
        var Pet = pet()[id];
        this.id = id;
        var price = getCurrPlayer().calculatePrice(Pet.price);
        this.price.getComponent("price").init(price);
        var energy = getCurrPlayer().calculateEnergyCost(Pet.energy_cost);
        this.energyLabel.string = "" + energy;
        var self = this;
        cc.loader.loadRes(Pet.iconUrl, cc.SpriteFrame, function(err, spriteFrame) {
          err && console.log(err);
          self.iconSF.spriteFrame = spriteFrame;
        });
        this.detail.string = Pet.description();
        this.title.string = Pet.pet_name;
      },
      useBtn: function useBtn() {
        var id = this.id;
        var locations = getCurrPlayer().Pets.map(function(item) {
          return [ item.x, item.y ];
        });
        mapNode().enableSelection(locations, function(x, y) {
          makeOperation("bp" + x + y + fillWithZero(id, 2));
          refreshPage();
        });
        cc.find("Canvas/pet").removeFromParent();
        this.node.removeFromParent();
      },
      closeBtn: function closeBtn() {
        this.node.removeFromParent();
      }
    });
    var gameGlobals = require("../battleMiddleWare/gameGlobals");
    var _require = require("../battleMiddleWare/gameService"), makeOperation = _require.makeOperation;
    var _require2 = require("../battleMiddleWare/gameUtils"), getCurrPlayer = _require2.getCurrPlayer, pet = _require2.pet, constant = _require2.constant, mapNode = _require2.mapNode, refreshPage = _require2.refreshPage;
    var _require3 = require("../otherComponents/commonUtils"), fillWithZero = _require3.fillWithZero;
    cc._RF.pop();
  }, {
    "../battleMiddleWare/gameGlobals": "gameGlobals",
    "../battleMiddleWare/gameService": "gameService",
    "../battleMiddleWare/gameUtils": "gameUtils",
    "../otherComponents/commonUtils": "commonUtils"
  } ],
  petItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6bd4bPwEzROq7lBW1+6f1P4", "petItem");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        id: 0,
        type: "detail",
        iconSF: cc.Sprite,
        detail: cc.Prefab
      },
      init: function init(id, type) {
        this.id = id;
        this.type = type;
        var address = pet()[id].iconUrl.replace("pets", "petIcon");
        var self = this;
        cc.loader.loadRes(address, cc.SpriteFrame, function(err, spriteFrame) {
          self.iconSF.spriteFrame = spriteFrame;
        });
      },
      refresh: function refresh() {
        this.init(this.id);
      },
      seeDetailBtn: function seeDetailBtn() {
        if ("detail" == this.type) {
          var detail = cc.instantiate(this.detail);
          detail.getComponent("petDetails").init(this.id);
          root().addChild(detail);
        } else var _detail = cc.instantiate(this.detail);
      }
    });
    var _require = require("../battleMiddleWare/gameUtils"), pet = _require.pet;
    var _require2 = require("../otherComponents/uiUtils"), root = _require2.root;
    cc._RF.pop();
  }, {
    "../battleMiddleWare/gameUtils": "gameUtils",
    "../otherComponents/uiUtils": "uiUtils"
  } ],
  pets: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "57425GNmcBE1LqugxckvyMd", "pets");
    "use strict";
    function _createForOfIteratorHelperLoose(o, allowArrayLike) {
      var it = "undefined" !== typeof Symbol && o[Symbol.iterator] || o["@@iterator"];
      if (it) return (it = it.call(o)).next.bind(it);
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && "number" === typeof o.length) {
        it && (o = it);
        var i = 0;
        return function() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if ("string" === typeof o) return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      "Object" === n && o.constructor && (n = o.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(o);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      (null == len || len > arr.length) && (len = arr.length);
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
      return arr2;
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        list: cc.Layout,
        ownList: cc.Layout,
        deckView: cc.Node,
        item: cc.Prefab
      },
      start: function start() {
        var _this = this;
        for (var _iterator = _createForOfIteratorHelperLoose(pet()), _step; !(_step = _iterator()).done; ) {
          var item = _step.value;
          if (!item.uiDisplay) continue;
          var child = initNode(this.item, "petItem", item.id, "detail");
          this.list.node.addChild(child);
        }
        getCurrPlayer().Pets.forEach(function(pet) {
          var clazz = typeDict()[pet.type];
          var child = initNode(_this.item, "petItem", clazz.id, "pet");
          _this.ownList.node.addChild(child);
        });
      },
      refresh: function refresh() {
        this.list.node.children.forEach(function(item) {
          item.getComponent("petItem").refresh();
        });
      },
      viewDeckBtn: function viewDeckBtn() {
        this.ownList.node.active = false;
        this.deckView.active = true;
      },
      viewPackageBtn: function viewPackageBtn() {
        this.deckView.active = false;
        this.ownList.node.active = true;
      },
      backBtn: function backBtn() {
        this.node.removeFromParent();
      }
    });
    var _require = require("../battleMiddleWare/gameUtils"), pet = _require.pet, getCurrPlayer = _require.getCurrPlayer, typeDict = _require.typeDict;
    var _require2 = require("../otherComponents/uiUtils"), initNode = _require2.initNode;
    cc._RF.pop();
  }, {
    "../battleMiddleWare/gameUtils": "gameUtils",
    "../otherComponents/uiUtils": "uiUtils"
  } ],
  playerDetails: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a9b557+UDlDIZx0XdFtMlwO", "playerDetails");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        nickname: cc.Node,
        icon: cc.Node,
        wealth: cc.Node,
        energy: cc.ProgressBar,
        energyLabel: cc.Label,
        powerLabel: cc.Label,
        growingLabel: cc.Label,
        damageLabel: cc.Label,
        scopeLabel: cc.Label,
        aspdLabel: cc.Label,
        equipList: cc.Node,
        equipItemPrefab: cc.Prefab,
        spellList: cc.Node,
        spellItemPrefab: cc.Prefab,
        buffList: cc.Node,
        buffPrefab: cc.Prefab,
        buffDetail: cc.Node,
        buffDescription: cc.Label,
        content: cc.Node,
        data: null
      },
      init: function init(data) {
        this.data = data;
        var self = this;
        var userInfo = gameGlobals.gameInfo.playerInfo[data.code - 1];
        this.nickname.getComponent("twoFontLabel").init(userInfo.nickname, {
          resizeIfExceed: true
        });
        this.icon.getComponent("icon").init(userInfo.iconUrl);
        this.powerLabel.string = convertPowerString(data.power);
        this.growingLabel.string = getPercentage(data.grow - 1);
        this.damageLabel.string = data.damage;
        this.scopeLabel.string = data.scope;
        this.aspdLabel.string = data.aspd;
        COIN_KEYS.forEach(function(key, index) {
          var child = self.wealth.children[index];
          var coins = data.coins;
          if (coins[key]) {
            var coin = {};
            coin[key] = coins[key];
            child.getComponent("price").init(coin);
          } else child.active = false;
        });
        var max_energy = constant().MAX_ENERGY;
        this.energy.progress = data.energy / max_energy;
        this.energyLabel.string = data.energy + "/" + max_energy;
        data.equipList.forEach(function(equip) {
          var node = cc.instantiate(self.equipItemPrefab);
          node.getComponent("equipItem").init(typeDict()[equip.type].id);
          resizeNode(node);
          addBlockInputComponent(node);
          self.equipList.addChild(node);
        });
        data.spellList.forEach(function(spell) {
          var clazz = typeDict()[spell.type];
          if (!clazz.uiDisplay) return;
          var node = cc.instantiate(self.spellItemPrefab);
          node.getComponent("spellItem").init(clazz.id);
          resizeNode(node);
          addBlockInputComponent(node);
          self.spellList.addChild(node);
        });
        var createBuffItem = function createBuffItem(buffItem) {
          var node = cc.instantiate(self.buffPrefab);
          node.getComponent("buffItem").init(buffItem, self.node.getComponent("creatureDetails"));
          self.buffList.addChild(node);
        };
        createBuffItem({
          type: "geoSign",
          value: data.geoSign
        });
        data.hydroSign && createBuffItem({
          type: "hydroSign",
          value: data.hydroSign
        });
        data.pyroSign && createBuffItem({
          type: "pyroSign",
          value: data.pyroSign
        });
        gameGlobals.gameObj.unitDict.forEach(function(value) {
          var classOfItem = typeDict()[value.type];
          if (!classOfItem) return;
          if ("listener" != classOfItem.category) return;
          if (!classOfItem.uiDisplay) return;
          if (value.owner.code != data.code) return;
          createBuffItem(value);
        });
        setTimeout(function() {
          var content = self.content;
          content.y = 450 - content.height / 2;
        }, 10);
      },
      viewBuffDescription: function viewBuffDescription(content) {
        this.buffDetail.node.active = true;
        this.buffDescription.string = content;
        var self = this;
        setTimeout(function() {
          return self.buffDetail.active = false;
        }, 1e4);
      },
      closeBuffDescription: function closeBuffDescription() {
        this.buffDetail.node.active = false;
      },
      closeBtn: function closeBtn() {
        this.node.removeFromParent();
      }
    });
    function resizeNode(node) {
      node.scaleX = 100 / node.width;
      node.scaleY = 100 / node.height;
      node.width = 105;
      node.height = 105;
    }
    function addBlockInputComponent(node) {
      var blockNode = new cc.Node();
      blockNode.addComponent(cc.BlockInputEvents);
      blockNode.x = node.x;
      blockNode.y = node.y;
      node.addChild(blockNode);
    }
    var gameGlobals = require("../battleMiddleWare/gameGlobals");
    var _require = require("../battleMiddleWare/gameUtils"), typeDict = _require.typeDict, convertPowerString = _require.convertPowerString, refreshPage = _require.refreshPage, constant = _require.constant;
    var _require2 = require("../xjfz-journey/classic-v0.0.1/main/objects/Coin"), COIN_KEYS = _require2.COIN_KEYS;
    var _require3 = require("../xjfz-journey/classic-v0.0.1/main/utils/numberUtils"), getPercentage = _require3.getPercentage;
    cc._RF.pop();
  }, {
    "../battleMiddleWare/gameGlobals": "gameGlobals",
    "../battleMiddleWare/gameUtils": "gameUtils",
    "../xjfz-journey/classic-v0.0.1/main/objects/Coin": "Coin",
    "../xjfz-journey/classic-v0.0.1/main/utils/numberUtils": "numberUtils"
  } ],
  playerPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7e6ee+hAVxExZ2QQANO332A", "playerPanel");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        icon: cc.Node,
        nameLbl: cc.Node,
        powerLbl: cc.Label,
        playerPrefab: cc.Prefab,
        code: 0
      },
      init: function init(code) {
        this.code = code;
        this.refresh();
      },
      refresh: function refresh() {
        var player = getPlayer(this.code);
        this.powerLbl.string = convertPowerString(player.power);
        var playerInfo = gameGlobals.gameInfo.playerInfo[this.code - 1];
        this.icon.getComponent("icon").init(playerInfo.iconUrl);
        this.nameLbl.getComponent("twoFontLabel").init(playerInfo.nickname);
      },
      viewPlayerDetail: function viewPlayerDetail() {
        var node = cc.instantiate(this.playerPrefab);
        node.getComponent("playerDetails").init(getPlayer(this.code));
        root().addChild(node);
      }
    });
    var gameGlobals = require("../battleMiddleWare/gameGlobals");
    var _require = require("../battleMiddleWare/gameUtils"), convertPowerString = _require.convertPowerString, getPlayer = _require.getPlayer;
    var _require2 = require("../otherComponents/uiUtils"), root = _require2.root;
    cc._RF.pop();
  }, {
    "../battleMiddleWare/gameGlobals": "gameGlobals",
    "../battleMiddleWare/gameUtils": "gameUtils",
    "../otherComponents/uiUtils": "uiUtils"
  } ],
  price: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "133abRvfqhHy4KAjPpxbH+0", "price");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.val = null;
        return _this;
      }
      NewClass.prototype.init = function(coin) {
        var type = null;
        Coin_1.COIN_KEYS.forEach(function(key) {
          coin[key] && (type = key);
        });
        if (!type) {
          this.node.active = false;
          return;
        }
        var address = "coins/" + type + ".png";
        var self = this;
        cc.loader.loadRes(address, cc.SpriteFrame, function(err, spriteFrame) {
          err && console.log(err);
          self.icon.spriteFrame = spriteFrame;
        });
        this.val.string = coin[type];
      };
      __decorate([ property(cc.Sprite) ], NewClass.prototype, "icon", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "val", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    var Coin_1 = require("../xjfz-journey/classic-v0.0.1/main/objects/Coin");
    cc._RF.pop();
  }, {
    "../xjfz-journey/classic-v0.0.1/main/objects/Coin": "Coin"
  } ],
  setting: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "67364NlhGxOGqPRMYfDTbPX", "setting");
    "use strict";
    var _require = require("../Globals"), config = _require.config;
    cc.Class({
      extends: cc.Component,
      properties: {
        bgmMgr: cc.Slider,
        audioMgr: cc.Slider,
        playAnimationToggle: cc.Toggle,
        mapPreview: cc.Node,
        mapScaler: cc.Slider
      },
      start: function start() {
        this.bgmMgr.progress = config.bgm;
        this.audioMgr.progress = config.sound;
        this.playAnimationToggle.isChecked = config.playAnimation;
        this.mapScaler.progress = config.defaultMapScale;
        this.refreshMapPreview();
      },
      changeBgm: function changeBgm() {
        config.bgm = this.bgmMgr.progress;
        cc.audioEngine.setMusicVolume(config.bgm);
        cc.audioEngine.resumeMusic();
        this.saveSetting();
      },
      changeAudio: function changeAudio() {
        config.sound = this.audioMgr.progress;
        this.saveSetting();
      },
      changePlayAnimationOption: function changePlayAnimationOption() {
        config.playAnimation = this.playAnimationToggle.isChecked;
        this.saveSetting();
      },
      changeMapScale: function changeMapScale() {
        config.defaultMapScale = this.mapScaler.progress;
        this.refreshMapPreview();
        this.saveSetting();
      },
      refreshMapPreview: function refreshMapPreview() {
        var scale = config.defaultMapScale + 1;
        this.mapPreview.scaleX = scale;
        this.mapPreview.scaleY = scale;
        this.mapPreview.width = 671 * scale;
        this.mapPreview.height = 671 * scale;
      },
      changeAccount: function changeAccount() {
        cc.sys.localStorage.removeItem("auth");
        cc.director.loadScene("Login");
      },
      saveSetting: function saveSetting() {
        var obj = {};
        Object.assign(obj, config);
        cc.sys.localStorage.setItem("config", JSON.stringify(obj));
      },
      closeBtn: function closeBtn() {
        this.node.active = false;
      }
    });
    cc._RF.pop();
  }, {
    "../Globals": "Globals"
  } ],
  spellAnimation: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "afb3bqz8ptIf7okr1MWHq5j", "spellAnimation");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __spreadArrays = this && this.__spreadArrays || function() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
      k++) r[k] = a[j];
      return r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DisplaceSpellAnimation = exports.GeoCoreSpellAnimation = exports.InkAnimation = exports.ShowIconAnimation = void 0;
    var animationPlayer_1 = require("./animationPlayer");
    var animationUtils_1 = require("./animationUtils");
    var ShowIconAnimation = function(_super) {
      __extends(ShowIconAnimation, _super);
      function ShowIconAnimation(iconUrl) {
        var _this = _super.call(this, 99, 99) || this;
        var node = cc.find("Canvas/Map/animationIcon");
        if (!node) return _this;
        var sprite = node.getComponent(cc.Sprite);
        setSpriteFrame(sprite, iconUrl);
        var functions = [];
        functions.push(function() {
          node.scale = 1;
          node.opacity = 150;
          node.active = true;
        });
        for (var i = 0; i < 21; i++) functions.push(function() {
          node.scale += .02;
          node.opacity += 5;
        });
        for (var i = 0; i < 30; i++) functions.push(function() {});
        for (var i = 0; i < 31; i++) functions.push(function() {
          node.opacity -= 8;
        });
        functions.push(function() {
          node.active = false;
        });
        _this.push(functions);
        return _this;
      }
      return ShowIconAnimation;
    }(animationPlayer_1.BaseAnimation);
    exports.ShowIconAnimation = ShowIconAnimation;
    var InkAnimation = function(_super) {
      __extends(InkAnimation, _super);
      function InkAnimation(x, y, inkColor, showCreatureIcon) {
        void 0 === showCreatureIcon && (showCreatureIcon = true);
        var _this = _super.call(this, x, y) || this;
        showCreatureIcon && _this.push([ animationUtils_1.levelUpCreatureIcon ]);
        var functions = [];
        _this.color = inkColor;
        functions.push(function(args) {
          var _a;
          var anime = args.animationIcon;
          anime.active = true;
          anime.scale = 3;
          anime.color = new ((_a = cc.Color).bind.apply(_a, __spreadArrays([ void 0 ], _this.color)))();
          anime.opacity = 255;
        });
        var _loop_1 = function(i) {
          functions.push(function(args) {
            var anime = args.animationIcon;
            cc.loader.loadRes("animation2/Image" + i + ".png", cc.SpriteFrame, function(err, spriteFrame2) {
              err && console.log(err);
              anime.getComponent(cc.Sprite).spriteFrame = spriteFrame2;
            });
          });
          functions.push(function() {});
        };
        for (var i = 4; i < 59; i += 2) _loop_1(i);
        _this.push(functions);
        return _this;
      }
      return InkAnimation;
    }(animationPlayer_1.BaseAnimation);
    exports.InkAnimation = InkAnimation;
    var DisplaceSpellAnimation = function(_super) {
      __extends(DisplaceSpellAnimation, _super);
      function DisplaceSpellAnimation(oldX, oldY) {
        var _this = _super.call(this, oldX, oldY) || this;
        var animeUrl = "spell/\u661f\u79fb\u6597\u8f6c.png";
        _this.push([ animationUtils_1.levelUpCreatureIcon ]);
        var functions = [];
        functions.push(function(args) {
          var animationNode = args.animationIcon;
          var sprite = animationNode.getComponent(cc.Sprite);
          setSpriteFrame(sprite, animeUrl);
          animationNode.opacity = 255;
          animationNode.active = true;
          animationNode.scale = 3;
        });
        for (var i = 1; i < 45; i++) functions.push(function() {});
        for (var i = 45; i < 65; i++) functions.push(function(args) {
          args.animationIcon.scale -= .15;
        });
        _this.push(functions);
        functions = [];
        for (var i = 0; i < 65; i++) functions.push(function(args) {
          args.animationIcon.angle -= 3;
        });
        _this.push(functions);
        functions = [];
        for (var i = 0; i < 51; i++) functions.push(function(args) {
          animationUtils_1.getCreatureIconNode(args).opacity -= 5;
        });
        _this.push(functions);
        return _this;
      }
      return DisplaceSpellAnimation;
    }(animationPlayer_1.BaseAnimation);
    exports.DisplaceSpellAnimation = DisplaceSpellAnimation;
    var GeoCoreSpellAnimation = function(_super) {
      __extends(GeoCoreSpellAnimation, _super);
      function GeoCoreSpellAnimation(x, y) {
        var _this = _super.call(this, x, y) || this;
        _this.push([ animationUtils_1.levelUpCreatureIcon ]);
        var functions = [];
        functions.push(function(args) {
          var anime = args.animation2Icon;
          anime.active = true;
          anime.scale = 1.3;
          anime.zIndex = 10;
          anime.opacity = 255;
          cc.loader.loadRes("icons/\u4e03\u66dc.png", cc.SpriteFrame, function(err, spriteFrame2) {
            err && console.log(err);
            anime.getComponent(cc.Sprite).spriteFrame = spriteFrame2;
          });
        });
        for (var i = 0; i < 60; i++) functions.push(function(args) {
          args.animation2Icon.angle -= 2;
        });
        _this.push(functions);
        return _this;
      }
      return GeoCoreSpellAnimation;
    }(animationPlayer_1.BaseAnimation);
    exports.GeoCoreSpellAnimation = GeoCoreSpellAnimation;
    function setSpriteFrame(sprite, iconUrl) {
      cc.loader.loadRes(iconUrl, cc.SpriteFrame, function(err, res) {
        sprite.spriteFrame = res;
      });
    }
    cc._RF.pop();
  }, {
    "./animationPlayer": "animationPlayer",
    "./animationUtils": "animationUtils"
  } ],
  spellDetails: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a0babRlR+BFw505KhLMUtNA", "spellDetails");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        id: 1,
        nameLbl: cc.Label,
        iconSF: cc.Sprite,
        detail: cc.Label,
        price: cc.Node,
        energyLabel: cc.Label,
        _spellDeck: null
      },
      init: function init(id, deckNode) {
        this._spellDeck = deckNode;
        var player = getCurrPlayer();
        var Spell = spell()[id];
        this.id = id;
        var price = player.getSpellPrice(id);
        var energy = player.calculateEnergyCost(Spell.energy_cost);
        this.price.getComponent("price").init(price);
        this.energyLabel.string = "" + energy;
        var self = this;
        cc.loader.loadRes(Spell.iconUrl, cc.SpriteFrame, function(err, spriteFrame) {
          err && console.log(err);
          self.iconSF.spriteFrame = spriteFrame;
        });
        this.detail.string = Spell.description();
        this.nameLbl.string = Spell.spellName;
      },
      useBtn: function useBtn() {
        var id = this.id;
        var Spell = spell()[id];
        var locations = Spell.validLocations(getCurrPlayer());
        locations ? mapNode().enableSelection(locations, function(x, y) {
          makeOperation("bs" + x + y + fillWithZero(id, 2));
        }) : makeOperation("bs99" + fillWithZero(id, 2));
        this._spellDeck.removeFromParent();
        this.node.removeFromParent();
      },
      closeBtn: function closeBtn() {
        this.node.removeFromParent();
      }
    });
    var _require = require("../battleMiddleWare/gameService"), makeOperation = _require.makeOperation;
    var _require2 = require("../battleMiddleWare/gameUtils"), getCurrPlayer = _require2.getCurrPlayer, spell = _require2.spell, constant = _require2.constant, mapNode = _require2.mapNode;
    var _require3 = require("../otherComponents/commonUtils"), fillWithZero = _require3.fillWithZero;
    cc._RF.pop();
  }, {
    "../battleMiddleWare/gameService": "gameService",
    "../battleMiddleWare/gameUtils": "gameUtils",
    "../otherComponents/commonUtils": "commonUtils"
  } ],
  spellItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f5c21rW/UxG5qAljKLBjV2k", "spellItem");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        id: 0,
        iconSF: cc.Sprite,
        detail: cc.Prefab,
        _deckNode: cc.Node
      },
      init: function init(id, deckNode) {
        this._deckNode = deckNode;
        this.id = id;
        var Spell = spell()[id];
        var self = this;
        cc.loader.loadRes(Spell.iconUrl, cc.SpriteFrame, function(err, spriteFrame) {
          self.iconSF.spriteFrame = spriteFrame;
        });
        this.refresh();
      },
      refresh: function refresh() {},
      seeDetailBtn: function seeDetailBtn() {
        var detail = cc.instantiate(this.detail);
        detail.getComponent("spellDetails").init(this.id, this._deckNode);
        root().addChild(detail);
      }
    });
    var _require = require("../battleMiddleWare/gameUtils"), spell = _require.spell;
    var _require2 = require("../otherComponents/uiUtils"), root = _require2.root;
    cc._RF.pop();
  }, {
    "../battleMiddleWare/gameUtils": "gameUtils",
    "../otherComponents/uiUtils": "uiUtils"
  } ],
  spells: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cfb5bHu/LhLBqAZdp4+Bo0A", "spells");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        list: cc.Layout,
        item: cc.Prefab
      },
      start: function start() {
        var self = this;
        spell().forEach(function(item) {
          if (!item.uiDisplay) return;
          self.list.node.addChild(initNode(self.item, "spellItem", item.id, self.node));
        });
      },
      refresh: function refresh() {},
      backBtn: function backBtn() {
        this.node.active = false;
      }
    });
    var _require = require("../battleMiddleWare/gameUtils"), spell = _require.spell;
    var _require2 = require("../otherComponents/uiUtils"), initNode = _require2.initNode;
    cc._RF.pop();
  }, {
    "../battleMiddleWare/gameUtils": "gameUtils",
    "../otherComponents/uiUtils": "uiUtils"
  } ],
  startJourney: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "399f7ve5CxAmb2knW+f7HEp", "startJourney");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Globals_1 = require("../Globals");
    var http_1 = require("../http");
    var uiUtils_1 = require("../otherComponents/uiUtils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.auctions = null;
        _this.sendConfirmation = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        var auctionSetting = cc.sys.localStorage.getItem("auction");
        if (auctionSetting) {
          var arr = JSON.parse(auctionSetting);
          var children_1 = this.auctions.children;
          arr.forEach(function(item, index) {
            return children_1[index].getComponent("auction").init(item.pos, item.val);
          });
        }
      };
      NewClass.prototype.closeBtn = function() {
        this.node.active = false;
      };
      NewClass.prototype.sendBtn = function() {
        this.sendConfirmation.active = true;
      };
      NewClass.prototype.cancelSendingBtn = function() {
        this.sendConfirmation.active = false;
      };
      NewClass.prototype.confirmSendingBtn = function() {
        uiUtils_1.loadingView();
        var auctions = this.auctions.children.map(function(node) {
          return node.getComponent("auction").readVal();
        });
        console.log(auctions);
        var valid = true;
        if (auctions.find(function(auction) {
          return isNaN(auction.val) || auction.val < 0 || auction.val > 100;
        })) {
          valid = false;
          uiUtils_1.alertServerError(new Error("\u7ade\u62cd\u4ef7\u5fc5\u987b\u4e3a\u5c0f\u4e8e100\u7684\u6b63\u6574\u6570"));
        }
        if (auctions[2].val > auctions[1].val || auctions[1].val > auctions[0].val) {
          valid = false;
          uiUtils_1.alertServerError(new Error("\u7ade\u62cd\u4ef7\u5fc5\u987b\u4ece\u9ad8\u5230\u4f4e"));
        }
        var positions = auctions.map(function(auction) {
          return auction.pos;
        }).sort();
        if (1 != positions[0] || 2 != positions[1] || 3 != positions[2]) {
          valid = false;
          uiUtils_1.alertServerError(new Error("\u7ade\u62cd\u4f4d\u7f6e\u4e0d\u53ef\u4ee5\u76f8\u540c"));
        }
        var self = this;
        valid ? http_1.sendPostForms("journey/join", auctions, function(response) {
          if ("success" == response) {
            uiUtils_1.danMu("\u5386\u7ec3\u884c\u7a0b\u5df2\u5b89\u6392");
            Globals_1.journey.joined = true;
            self.node.active = false;
          }
          uiUtils_1.completeLoading();
        }) : uiUtils_1.completeLoading();
        this.sendConfirmation.active = false;
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "auctions", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "sendConfirmation", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../Globals": "Globals",
    "../http": "http",
    "../otherComponents/uiUtils": "uiUtils"
  } ],
  stoarge: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f83aab/h9JGiIBiBYVc9mxC", "stoarge");
    "use strict";
    module.exports = {
      get_game_records: function get_game_records(roomid) {
        return getItem("room:history:" + roomid).split(",");
      },
      set_game_records: function set_game_records(roomid, records) {
        setItem("room:history:" + roomid, records.join(","));
      },
      get_game_info: function get_game_info(roomid) {
        return JSON.parse(getItem("room:info:" + roomid));
      },
      set_game_info: function set_game_info(roomid, obj) {
        setItem("room:info:" + roomid, JSON.stringify(obj));
      },
      get_user_data: function get_user_data(userid) {
        return JSON.parse(getItem("user:" + userid));
      },
      set_user_data: function set_user_data(userid, obj) {
        setItem("user:" + userid, JSON.stringify(obj));
      },
      get_password: function get_password() {
        return getItem("password");
      },
      set_password: function set_password(psw) {
        setItem("password", psw);
      },
      get_userid: function get_userid() {
        return getItem("userid");
      },
      set_userid: function set_userid(id) {
        setItem("userid", id);
      }
    };
    var getItem = function getItem(key) {
      return cc.sys.localStorage.getItem(key);
    };
    var setItem = function setItem(key, value) {
      cc.sys.localStorage.setItem(key, value);
    };
    cc._RF.pop();
  }, {} ],
  submit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cb55aFO6fhPwrMKXoAie+ad", "submit");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        page: cc.Node
      },
      refresh: function refresh() {
        this.node.active = gameGlobals.isEntering;
      },
      submit: function submit() {
        this.page.active = true;
      },
      cancelSubmit: function cancelSubmit() {
        this.page.active = false;
      },
      confirmSubmit: function confirmSubmit() {
        var allOperations = gameGlobals.operations.slice();
        var operations = allOperations.slice(gameGlobals.initPosition);
        console.log(operations);
        sendPostForms("/journey/update", {
          roomid: gameGlobals.gameInfo.roomid,
          commands: operations
        }, function(response) {
          "success" == response && initGame(allOperations, gameGlobals.gameVersion);
          danMu("\u63d0\u4ea4\u6210\u529f");
        });
        this.page.active = false;
      }
    });
    var gameGlobals = require("../battleMiddleWare/gameGlobals");
    var _require = require("../battleMiddleWare/gameService"), initGame = _require.initGame;
    var _require2 = require("../http"), sendPostForms = _require2.sendPostForms;
    var _require3 = require("../otherComponents/uiUtils"), danMu = _require3.danMu;
    cc._RF.pop();
  }, {
    "../battleMiddleWare/gameGlobals": "gameGlobals",
    "../battleMiddleWare/gameService": "gameService",
    "../http": "http",
    "../otherComponents/uiUtils": "uiUtils"
  } ],
  timeConstants: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b9d55HMSP9GuJIzkVGNW/YP", "timeConstants");
    "use strict";
    var ONE_MINUTES = 60;
    var ONE_HOUR = 60 * ONE_MINUTES;
    var ONE_JOURNEY_DAY = 1e3 * ONE_MINUTES;
    var ONE_NATURAL_DAY = 24 * ONE_HOUR;
    var ENDLESS_TIME = 999999;
    var ENTER_TIME = 5 * ONE_MINUTES;
    var DAILY_START_TIME = new Date(0, 0, 0, 6, 40);
    module.exports = {
      ONE_MINUTES: ONE_MINUTES,
      ONE_HOUR: ONE_HOUR,
      ONE_JOURNEY_DAY: ONE_JOURNEY_DAY,
      ONE_NATURAL_DAY: ONE_NATURAL_DAY,
      ENTER_TIME: ENTER_TIME,
      ENDLESS_TIME: ENDLESS_TIME,
      DAILY_START_TIME: DAILY_START_TIME
    };
    cc._RF.pop();
  }, {} ],
  topTemplate: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9d99f4iXghBnLuyK5HRs9Cl", "topTemplate");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        rank: cc.Label,
        name1: cc.Label,
        trophic: cc.Label,
        icon: cc.Node,
        userid: ""
      },
      init: function init(data, rank) {
        this.rank.string = rank + ".";
        this.name1.string = data.nickname;
        this.trophic.string = data.trophic;
        this.icon.getComponent("icon").init(data.iconUrl);
        this.userid = data.userid;
      },
      seeDetailBtn: function seeDetailBtn() {
        var detail = cc.find("Canvas/userDetail");
        detail.init(this.userid);
        detail.active = true;
      }
    });
    cc._RF.pop();
  }, {} ],
  top: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "57dc5e4OAhKxoQOd5JfEXOW", "top");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var http_1 = require("../http");
    var Globals_1 = require("../Globals");
    var uiUtils_1 = require("../otherComponents/uiUtils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.item = null;
        _this.list = null;
        _this.pos = 1;
        return _this;
      }
      NewClass.prototype.start = function() {
        var self = this;
        var list = this.list;
        var init = function(dt) {
          for (var i = 0; i < 20; i++) {
            var player = cc.instantiate(self.item);
            player.getComponent("topTemplate").init(Globals_1.top[i], i + 1);
            list.node.addChild(player);
          }
          list.updateLayout();
          list.node.y = (list.node.parent.height - list.node.height) / 2;
          self.starts = true;
          uiUtils_1.completeLoading();
        };
        0 == Globals_1.top.length ? http_1.sendGetForms("public/top", {
          interval: 0
        }, function(response) {
          Globals_1.top.push.apply(Globals_1.top, response);
          self.scheduleOnce(init, 0);
        }) : this.scheduleOnce(init, 0);
      };
      NewClass.prototype.backBtn = function() {
        this.node.active = false;
      };
      NewClass.prototype.update = function(dt) {
        if (this.list.node.y >= 0 && this.starts && Globals_1.top.length <= 200 && this.pos < 10) {
          this.starts = false;
          for (var i = 0; i < 20; i++) {
            var player = cc.instantiate(this.item);
            player.getComponent("topTemplate").init(Globals_1.top[20 * this.pos + i], 20 * this.pos + i + 1);
            this.list.node.addChild(player);
          }
          console.log("0");
          this.pos++;
          var selfs = this;
          this.list.updateLayout();
          this.list.node.y = -1;
          setTimeout(function() {
            selfs.starts = true;
          }, 1e3);
        }
      };
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "item", void 0);
      __decorate([ property(cc.Layout) ], NewClass.prototype, "list", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../Globals": "Globals",
    "../http": "http",
    "../otherComponents/uiUtils": "uiUtils"
  } ],
  twoFontLabel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "71292ymNIxEjZ2NMQMFYpKv", "twoFontLabel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.ascii = null;
        _this.chinese = null;
        _this.fontSize = 45;
        _this.fontColor = new cc.Color(0, 0, 0, 255);
        return _this;
      }
      NewClass.prototype.init = function(str, options) {
        this.node.removeAllChildren();
        for (var i = 0; i < str.length; i++) {
          var charCode = str.charCodeAt(i);
          var prefab = this.isChineseCharacter(charCode) ? this.chinese : this.ascii;
          var child = cc.instantiate(prefab);
          var label = child.getComponent(cc.Label);
          label.fontSize = this.fontSize;
          label.lineHeight = this.fontSize;
          label.string = str.charAt(i);
          child.color = this.fontColor;
          child.y = 0;
          this.node.addChild(child);
        }
        if (!options) return;
        if (options.resizeIfExceed) {
          var childrenWidth = this.node.children.map(function(child) {
            return child.width;
          }).reduce(function(res, width) {
            return res + width;
          }, 0);
          childrenWidth > this.node.width && (this.getComponent(cc.Layout).resizeMode = cc.Layout.ResizeMode.CHILDREN);
        }
      };
      NewClass.prototype.isChineseCharacter = function(charCode) {
        return charCode >= 19968 && charCode <= 40869;
      };
      NewClass.prototype.start = function() {};
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "ascii", void 0);
      __decorate([ property(cc.Prefab) ], NewClass.prototype, "chinese", void 0);
      __decorate([ property ], NewClass.prototype, "fontSize", void 0);
      __decorate([ property(cc.Color) ], NewClass.prototype, "fontColor", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  typeUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7c86fSoUYJCYrfGXa2NBYr9", "typeUtils");
    "use strict";
    function _createForOfIteratorHelperLoose(o, allowArrayLike) {
      var it = "undefined" !== typeof Symbol && o[Symbol.iterator] || o["@@iterator"];
      if (it) return (it = it.call(o)).next.bind(it);
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && "number" === typeof o.length) {
        it && (o = it);
        var i = 0;
        return function() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if ("string" === typeof o) return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      "Object" === n && o.constructor && (n = o.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(o);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      (null == len || len > arr.length) && (len = arr.length);
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
      return arr2;
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.findOneItemByType = exports.findAllItemByType = void 0;
    function findAllItemByType(Game, type) {
      var res = [];
      var remove = [];
      Game.unitDict.forEach(function(v, k) {
        if (v["disabled"]) {
          remove.push(k);
          return;
        }
        v instanceof type && res.push(v);
      });
      remove.forEach(function(key) {
        Game.unitDict["delete"](key);
      });
      return res;
    }
    exports.findAllItemByType = findAllItemByType;
    function findOneItemByType(game, type) {
      for (var _iterator = _createForOfIteratorHelperLoose(game.unitDict.values()), _step; !(_step = _iterator()).done; ) {
        var item = _step.value;
        if ("type" == item.type) return item;
      }
    }
    exports.findOneItemByType = findOneItemByType;
    cc._RF.pop();
  }, {} ],
  uiUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fa25d0dXqtDm7I8LhOJL3Du", "uiUtils");
    "use strict";
    var obj = {
      danMu: function(str) {
        console.log("triggered");
        var node = new cc.Node("123");
        node.width = 600;
        node.height = 70;
        node.x = 0;
        var label = node.addComponent(cc.Label);
        label.fontSize = 70;
        label.lineHeight = 70;
        label.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
        label.string = str;
        label.overflow = cc.Label.Overflow.RESIZE_HEIGHT;
        cc.loader.loadRes("fonts/Qiuhong.ttf", cc.Font, function(err, font) {
          if (err) {
            console.log(err);
            return;
          }
          label.font = font;
        });
        node.color = cc.Color.WHITE;
        var outline = label.addComponent(cc.LabelOutline);
        outline.color = cc.Color.BLACK;
        outline.width = 3;
        var canvas = cc.find("Canvas");
        canvas.addChild(node);
        var fn = function() {
          node.y += 2;
          if (node.y >= 50) {
            node.opacity -= 2;
            node.opacity < 60 && node.removeFromParent();
          }
          setTimeout(fn, 20);
        };
        setTimeout(fn, 20);
      },
      alertComponent: function() {
        return cc.find("Canvas/alert").getComponent("alert");
      },
      alertError: function(message) {
        obj.alertComponent().show(message);
      },
      alertServerError: function(object) {
        transitionSign = false;
        obj.alertComponent().show(object.message);
      },
      initNode: function(prefab, name) {
        var arg = [];
        for (var _i = 2; _i < arguments.length; _i++) arg[_i - 2] = arguments[_i];
        var node = cc.instantiate(prefab);
        var comp = node.getComponent(name);
        comp.init.apply(comp, arg);
        return node;
      },
      loadingView: function() {
        transitionSign = true;
        var loading = cc.find("Canvas/transition");
        var sign = cc.find("Canvas/transition/realLoading");
        if (!loading || !sign) {
          console.log("loading Node not found");
          return;
        }
        loading.active = true;
        var fn = function() {
          if (transitionSign) {
            try {
              sign.angle += 3;
              sign.angle >= 360 && (sign.angle -= 360);
            } catch (err) {
              console.log(err);
            }
            setTimeout(fn, 10);
          } else loading.active = false;
        };
        setTimeout(fn, 10);
      },
      completeLoading: function() {
        transitionSign = false;
      },
      root: function() {
        return cc.find("Canvas");
      },
      alertPrefab: null
    };
    var transitionSign = false;
    module.exports = obj;
    cc._RF.pop();
  }, {} ],
  userDetail: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "79154t+E99GAohtoeIUeSDx", "userDetail");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Globals_1 = require("../Globals");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nickname = null;
        _this.uid = null;
        _this.trophy = null;
        _this.maxTrophy = null;
        _this.enrollDate = null;
        _this.learningRate = null;
        _this.gameTimes = null;
        _this.winRate = null;
        return _this;
      }
      NewClass.prototype.init = function(userid) {
        userid == Globals_1.user.userid ? this.setProperties(Globals_1.user) : Globals_1.foreigners[userid] && this.setProperties(Globals_1.foreigners[userid]);
      };
      NewClass.prototype.setProperties = function(info) {
        this.nickname.string = info.nickname;
        this.uid.string = "UID:" + info.userid;
        this.trophy.string = info.trophic;
        this.maxTrophy.string = info.maxTrophic;
        this.enrollDate.string = info.enrolledDate;
        this.learningRate.string = info.learningRate;
        this.gameTimes.string = info.game_times;
        this.winRate.string = getPercentage(info.win_times / info.game_times);
      };
      NewClass.prototype.closeBtn = function() {
        this.node.removeFromParent();
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "nickname", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "uid", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "trophy", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "maxTrophy", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "enrollDate", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "learningRate", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "gameTimes", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "winRate", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    function getPercentage(num) {
      num *= 1e4;
      var numStr = Math.round(num).toString();
      var floatDigit = 2;
      numStr.endsWith("0") && (floatDigit = 1);
      numStr.endsWith("00") && (floatDigit = 0);
      var index = numStr.length - 2;
      var res = numStr.substring(0, index);
      floatDigit > 0 && (res += "." + numStr.substring(index, index + floatDigit));
      return res + "%";
    }
    cc._RF.pop();
  }, {
    "../Globals": "Globals"
  } ],
  viewTemplate: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0e5bcgA8uZA/YAroL7Lc2NL", "viewTemplate");
    "use strict";
    var http = require("../http");
    cc.Class({
      extends: cc.Component,
      properties: {
        roomid: "",
        time: cc.Label,
        player1: cc.Label,
        trophic1: cc.Label,
        player2: cc.Label,
        trophic2: cc.Label,
        player3: cc.Label,
        trophic3: cc.Label,
        alert: cc.Prefab
      },
      init: function init(data) {
        var _this = this;
        this.roomid = data.roomid;
        var time = new Date(this.time);
        this.time.string = "\u521b\u5efa\u65f6\u95f4\uff1a" + (time.getMonth() + 1) + "\u6708" + time.getDate() + "\u65e5";
        this.player1.string = data.player1;
        this.trophic1.string = data.trophic1;
        this.player2.string = data.player2;
        this.trophic2.string = data.trophic2;
        this.player3.string = data.player3;
        this.trophic3.string = data.trophic3;
        this.scheduleOnce(function(dt) {
          if (_this.player1.node.width <= 500) _this.player1.node.x = _this.player1.node.width / 2 - 250; else {
            _this.player1.node.scaleX = 500 / _this.player1.node.width;
            _this.player1.node.scaleY = 500 / _this.player1.node.width;
          }
        }, 0);
      },
      entry: function entry() {
        var roomid = this.roomid;
        http.sendPostForms("entrygame/load", {}, function(response) {
          cc.director.loadScene("mainGame");
        });
      }
    });
    cc._RF.pop();
  }, {
    "../http": "http"
  } ]
}, {}, [ "ATJSSDK", "ATRewardedAutoVideoTSSDK", "AdsManager", "AndroidAds", "ATAndroidBannerTS", "ATAndroidIntersitialAutoTS", "ATAndroidIntersitialTS", "ATAndroidJS", "ATAndroidNativeTS", "ATAndroidRewardedVideoAutoTS", "ATAndroidRewardedVideoTS", "ATiOSBannerTS", "ATiOSIntersitiaAutolTS", "ATiOSIntersitialTS", "ATiOSJS", "ATiOSNativeTS", "ATiOSRewardedAutoVideoTS", "ATiOSRewardedVideoTS", "Constants", "Globals", "LoadingLogic", "Login", "gameGlobals", "gameService", "gameUtils", "deck", "decoration", "auction", "entryTemplate", "gameEntry", "gameHistory", "gameTV", "itemOverview", "overviewTemplate", "startJourney", "console", "creatureDetails", "fightUI", "getCoins", "gridIcon", "history", "history2", "historyLog", "map", "observeAndEntry", "playerDetails", "playerPanel", "submit", "buffDetails", "buffItem", "equipDetails", "equipItem", "equips", "petDetails", "petItem", "pets", "price", "spellDetails", "spellItem", "spells", "gameMain", "labelToggle", "mockConsole", "hall", "background", "board", "email", "inkRenderManager", "inkRendering", "setting", "top", "topTemplate", "userDetail", "http", "instruction", "mocking", "fetch", "alert", "commonUtils", "decorationItem", "icon", "twoFontLabel", "uiUtils", "viewTemplate", "stoarge", "gameLogger", "gameLogicRoutes", "Buffs", "Creature", "Equips", "Game", "OriginMonitors", "Pets", "Player", "Spell", "animationPlayer", "animationUtils", "animeConstant", "challengeAnimation", "moveAnimation", "spellAnimation", "gameConstants", "timeConstants", "AttackListeners", "DamageListeners", "ListenerDict", "ListenerList", "ListenerPriorities", "baseLoggers", "logUtils", "AttackStatus", "Coin", "Damage", "BuffItems", "EquipItems", "Listeners", "PetsItems", "SpellItems", "iterationUtils", "mapUtils", "numberUtils", "typeUtils", "TypeDict", "TypeList", "common", "interfaces", "index" ]);