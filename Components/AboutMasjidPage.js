import React from "react";
import { View, Text, StyleSheet, Dimensions, FlatList } from "react-native";
import SalahNameTime from "./SalahNameTime";
export default function AboutMasjidPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Masjid Al Haram</Text>
      <Text style={styles.subText}>Mecca, Saudi Arabia</Text>
      <Text style={styles.subText}>Abdul Rahman ibn Abdul Aziz al-Sudais</Text>
      <Text style={styles.subHeading}>Salah Timings</Text>
      <SalahNameTime salahName="Fajr" salahTime="5 : 00 AM" />
      <SalahNameTime salahName="Dhuhr" salahTime="1 : 00 PM" />
      <SalahNameTime salahName="Asr" salahTime="5 : 00 PM" />
      <SalahNameTime salahName="Maghrib" salahTime="7 : 00 PM" />
      <SalahNameTime salahName="Isha" salahTime="9 : 00 PM" />
      <Text style={styles.subHeading}>Events</Text>
      <Text style={styles.subText}>1. Pasha bhai ki shadi</Text>
      <Text style={styles.subText}>2.</Text>
      <Text style={styles.subText}>3.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    paddingHorizontal: 30,
    paddingTop: 50,
    justifyContent: "flex-start",
    backgroundColor: "#E2F1E7",
  },
  heading: {
    fontSize: 50,
    color: "#387478",
    fontWeight: "bold",
  },
  subHeading: {
    fontSize: 40,
    color: "#387478",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  subText: {
    fontSize: 20,
    color: "#387478",
    fontWeight: "bold",
    marginTop: 2,
    marginBottom: 2,
  },
});
