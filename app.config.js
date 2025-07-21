export default {
  expo: {
    name: "learn-linux",
    slug: "learn-linux",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/favicon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      package: "com.craftedwebpro.learnlinux",
      googleServicesFile: "./google-services.json", // ✅ Updated path
      adaptiveIcon: {
        foregroundImage: "./assets/favicon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "d8038c91-d612-4e9b-a418-917f28cf7cd4",
      },
    },
  },
};
