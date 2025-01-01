import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { createContext, useContext, useReducer } from "react";
import LocationPage from "./LocationPage";
import TimingsPage from "./TimingsPage";
import WelcomePage from "./WelcomePage";
import { ReducerActions } from "./constants/reducerConstants";

// Initial state
// Add a property here whenever we need to add something to reducer
const initialState = {
  location: "test location",
  address: "test address",
  // here
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case ReducerActions.SET_LOCATION:
      return { ...state, location: action.payload?.location };
    case ReducerActions.SET_ADDRESS:
      return { ...state, address: action.payload?.address };
    default:
      return state;
  }
};

// Create context
const AppContext = createContext();

// Context provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
export const useAppContext = () => {
  return useContext(AppContext);
};

// Container component
const Container = () => {
  const Stack = createStackNavigator();

  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Welcome Page" component={WelcomePage} />
          <Stack.Screen name="Location Page" component={LocationPage} />
          <Stack.Screen name="Timings Page" component={TimingsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default Container;
