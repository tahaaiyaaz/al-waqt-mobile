// pages/AccountsPage.js
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function AccountsPage({ navigation }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get the currently logged-in user
    const currentUser = auth.currentUser;
    setUser(currentUser);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // After logging out, navigate to the Login screen.
      navigation.navigate("SignUp");
    } catch (error) {
      alert("Error signing out.");
    }
  };

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No user is logged in.</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Account Details</Text>
      <Text style={styles.text}>Email: {user.email}</Text>
      <Text style={styles.text}>User ID: {user.uid}</Text>
      {user.displayName && <Text style={styles.text}>Name: {user.displayName}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E2F1E7",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    color: "#387478",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: "#387478",
  },
  button: {
    backgroundColor: "#387478",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
