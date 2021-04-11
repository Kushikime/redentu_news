import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    console.log("ERROR SAVING TO LOCAL STORAGE");
  }
}

const defaultState = {
  authPassed: false,
  skippedAuth: false,
  preloader: true,
  selectedUrl: ''
};




export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SKIPPED_LOGIN":
      return {
        ...state,
        skippedAuth: action.payload.skipped,
        preloader: true
      }
    case "LOGGED_IN":
      (async () => {
        await storeData("access_token", "super_secret_token");
      })()
      return {
        ...state,
        authPassed: true,
        preloader: true
      }
    case "LOGGED_OUT":
      (async () => {
        await storeData("access_token", "null");
      })()
      return {
        ...state,
        authPassed: false,
        skippedAuth: false
      }
    case "SELECTED_URL":
      return {
        ...state,
        selectedUrl: action.payload.url
      }
    default:
      return state;
  }
};



export const skippedLogin = (payload) => ({type: "SKIPPED_LOGIN", payload});
export const loggedIn = (payload) => ({type: "LOGGED_IN", payload});
export const loggedOut = (payload) => ({type: "LOGGED_OUT", payload});
export const selectUrl = (payload) => ({type: "SELECTED_URL", payload});
