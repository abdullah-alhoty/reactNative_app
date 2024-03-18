## README

**Beschreibung:**

Diese React Native-Applikation kann auf Web, Android und Desktop (über Expo) ausgeführt werden.

**Voraussetzungen:**

- Node.js installiert
- Expo CLI installiert (`npm install -g expo-cli`)
- Expo-Konto für Verwendung der Expo-Dienste

**Installation:**

1. Clone das Repository: `git clone https://github.com/abdullah-alhoty/reactNative_app.git`
2. In das Projektverzeichnis wechseln: `cd reactNative_app`
3. Abhängigkeiten installieren: `npm install` oder `yarn install`
4. Applikation ausführen:

   - Web: `expo build:web` dann `npx serve web-build`
   - Expo für Desktop: `cd reactApp` dann `npm install` dann ``
     - Windows: `npx react-native run-windows`
   - Android: `npm install -g eas-cli` dann `eas build -p android` ,add diese build configuration zu eas.json, damit man die APK bekommen kann  
   <pre>
      {
        ...
        ,
        "build": {
          ...
          ,
          "preview2": {
            "android": {
              "buildType": "apk"
            }
          },
        },
        ...
      }
    </pre>
    du kannst preview2 durch andere name ersetzen . dann `eas build -p android --profile preview2`

**Weitere Informationen:**

- React Native Dokumentation: [https://reactnative.dev/docs](https://reactnative.dev/docs)
- Expo Dokumentation: [https://docs.expo.dev/](https://docs.expo.dev/)
