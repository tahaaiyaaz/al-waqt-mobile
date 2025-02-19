import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomePage from "./WelcomePage";
import HomePage from "./HomePage";
import AboutMasjidPage from "./AboutMasjidPage";

import MasjidDetail from './MasjidDetail';

import UpdateTimingsPage from "./UpdateTimingsPage";



// Container component
const Container = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome Page" component={WelcomePage} />
        <Stack.Screen name="Home Page" component={HomePage} />
        <Stack.Screen name="About Page" component={AboutMasjidPage} />



        <Stack.Screen 
          name="UpdateTimingsPage" 
          component={UpdateTimingsPage}
          options={{
            title: "Update Timings",
            headerStyle: { backgroundColor: "#E2F1E7" },
            headerTintColor: "#387478",
          }}
        />
        <Stack.Screen
          name="MasjidDetail"
          component={MasjidDetail}
          options={{
            title: 'Masjid Details',
            headerStyle: { backgroundColor: "#E2F1E7" },
            headerTintColor: "#387478",
          }}
        />


        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Container;
