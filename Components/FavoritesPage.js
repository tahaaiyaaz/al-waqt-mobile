// pages/FavoritesPage.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function FavoritesPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Favorites</Text>
      <Text style={styles.subText}>Your favorite masjids will appear here.</Text>
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
    fontSize: 30,
    color: "#387478",
    fontWeight: "bold",
  },
  subText: {
    fontSize: 18,
    color: "#387478",
    marginTop: 10,
  },
});
