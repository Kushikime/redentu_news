
 import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
 import {
   SafeAreaView,
   StatusBar,
   StyleSheet
 } from 'react-native';
import { Provider, useDispatch } from 'react-redux';
import MainNavigation from './src/Navigation/MainNavigation';
import { SplashScreen } from './src/screens/SplashScreen';
import { store } from './src/store';
import { loggedIn } from './src/store/userReducer';



const AppContent = () => {

  const [appLoading, setAppLoading] = useState(true);
  const rightTokenFromServer = 'super_secret_token';

  const dispatch = useDispatch();
  

  useEffect(()=>{
    (async () => {
      const token = await AsyncStorage.getItem("access_token");


      setTimeout(()=>{
        if(token === "super_secret_token"){
          dispatch(loggedIn())
        }
        setAppLoading(false);
      }, 1000);
    })();
    
    
  }, []);

  return (
    <Provider store={store}>
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
          <StatusBar barStyle={"light-content"} />


          {
            appLoading?
              <SplashScreen />
              :
              <MainNavigation />
          }

          


        </SafeAreaView>
    </Provider>
   );
}

 const App = () => {



  

   return (
    <Provider store={store}>
      <AppContent />
    </Provider>
   );
 };

 export default App;
