import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function EarlyMasjidCard({
  MasjidName,
  MasjidDistance,
  NextNamazTime,
}) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.text}>{MasjidName}</Text>
        <Text style={styles.text}>{MasjidDistance}</Text>
        <Text style={styles.text}>{NextNamazTime}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#387478",
    height: 100,
    padding: 10,
    marginTop: 3,
    marginBottom: 3,
    borderRadius: 10,
  },
  text: {
    margin: 3,
    color: "#E2F1E7",
  },
});
