import React from "react";
import TimeSetter from "./TimeSetter";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";

export default function TimingsPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={{ fontSize: 40, fontWeight: "bold", color: "#387478" }}>
          Salah Timings
        </Text>
      </View>
      <TimeSetter prayerName="Fajr" />
      <TimeSetter prayerName="Zuhr" />
      <TimeSetter prayerName="Asr" />
      <TimeSetter prayerName="Maghrib" />
      <TimeSetter prayerName="Isha" />
      <TimeSetter prayerName="Jumuah" />
      <TimeSetter prayerName="Jumuah Qutbah" />
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Home Page")}
        >
          <Text style={{ fontSize: 15, color: "#E2F1E7", fontWeight: "bold" }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    paddingHorizontal: 30,
    paddingTop: 50,
    backgroundColor: "#E2F1E7",
  },
  heading: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 40,
    marginBottom: 20,
  },
  btn: {
    backgroundColor: "#387478",
    height: 40,
    width: 150,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
});
