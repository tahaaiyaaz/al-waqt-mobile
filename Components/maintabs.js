// // MainTabs.js
// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import HomePage from "./HomePage";
// import FavoritesPage from "./FavoritesPage";
// import muezzin from "./muezzin";
// import Signup from "./Signup";
// import AccountsPage from "./AccountsPage";


// const Tab = createBottomTabNavigator();

// const MainTabs = () => {
//   return (
//     <Tab.Navigator screenOptions={{ headerShown: false }}>
//       <Tab.Screen name="Home" component={HomePage} 
//           />
//       <Tab.Screen name="Favorites" component={FavoritesPage} 
//         />
        
//       <Tab.Screen name="Your Masjid" component={muezzin} 
//         />
        
//       {/* <Tab.Screen name="accounts" component={Signup} /> */}

//       <Tab.Screen name="Account" component={AccountsPage} />



//     </Tab.Navigator>
//   );
// };

// export default MainTabs;
// MainTabs.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from 'react-native'; // Import StyleSheet and View

import HomePage from "./HomePage";
import FavoritesPage from "./FavoritesPage";
import muezzin from "./muezzin";
import Signup from "./Signup";
import AccountsPage from "./AccountsPage";

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { // Styling for the tab bar
          backgroundColor: '#f0f0f0', // Example background color
          height: 60, // Adjust as needed
          margin:10,
          borderRadius:50

        },
        tabBarActiveTintColor: '#007bff', // Example active tab icon color
        tabBarInactiveTintColor: 'gray', // Example inactive tab icon color
        labelStyle: { // Styling for the tab labels
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            // You can add custom icons here based on the 'focused' state
            <View
              style={{
                width: size,
                height: size,
                backgroundColor: focused ? color : 'transparent', // Example icon background
                borderRadius: size / 2, // Make it circular
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesPage}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            // Add your favorites icon here
            <View
              style={{
                width: size,
                height: size,
                backgroundColor: focused ? color : 'transparent',
                borderRadius: size / 2,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Your Masjid"
        component={muezzin}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            // Add your masjid icon here
            <View
              style={{
                width: size,
                height: size,
                backgroundColor: focused ? color : 'transparent',
                borderRadius: size / 2,
              }}
            />
          ),
        }}
      />

      {/* <Tab.Screen name="accounts" component={Signup} /> */}

      <Tab.Screen
        name="Account"
        component={AccountsPage}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            // Add your account icon here
            <View
              style={{
                width: size,
                height: size,
                backgroundColor: focused ? color : 'transparent',
                borderRadius: size / 2,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;