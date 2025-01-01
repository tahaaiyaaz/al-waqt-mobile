import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function WelcomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome</Text>
      <Text style={styles.subText}>Register your Masjid</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Location Page")}
      >
        <Text style={{ fontSize: 20, color: "#E2F1E7", fontWeight: "bold" }}>
          Let's Start
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E2F1E7",
  },
  heading: {
    fontSize: 50,
    color: "#387478",
    fontWeight: "bold",
  },
  subText: {
    fontSize: 30,
    color: "#387478",
    fontWeight: "bold",
  },
  btn: {
    backgroundColor: "#387478",
    height: 50,
    width: 140,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 40,
  },
});
