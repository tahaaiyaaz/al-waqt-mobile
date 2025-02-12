import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomePage from "./WelcomePage";
import HomePage from "./HomePage";
import AboutMasjidPage from "./AboutMasjidPage";
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Container;
