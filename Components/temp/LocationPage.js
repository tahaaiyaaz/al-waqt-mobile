import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  Button,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native";
import * as Location from "expo-location";
import { useAppContext } from "./Container";
import { ReducerActions } from "./constants/reducerConstants";

export default function LocationPage({ navigation }) {
  // Accessing global state
  const { state, dispatch } = useAppContext();

  const reverseGeocode = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      dispatch({
        type: ReducerActions.SET_LOCATION,
        payload: { location: location },
      });

      const address = await Location.reverseGeocodeAsync(location.coords);
      dispatch({
        type: ReducerActions.SET_ADDRESS,
        payload: { address: address },
      });
    } catch (error) {
      console.log(error);
    }
    // comment
  };
  const { formattedAddress, city, region, country, postalCode } =
    state?.address[0];
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={{ fontSize: 40, fontWeight: "bold", color: "#387478" }}>
          Registration
        </Text>
      </View>
      <Text style={{ fontWeight: "bold", fontSize: 15, color: "#387478" }}>
        Name:
      </Text>
      <TextInput style={styles.input}></TextInput>
      <Text style={{ fontWeight: "bold", fontSize: 15, color: "#387478" }}>
        Street:
      </Text>
      <TextInput style={styles.input} value={formattedAddress}></TextInput>
      <Text style={{ fontWeight: "bold", fontSize: 15, color: "#387478" }}>
        City:
      </Text>
      <TextInput style={styles.input} value={city}></TextInput>
      <Text style={{ fontWeight: "bold", fontSize: 15, color: "#387478" }}>
        Region:
      </Text>
      <TextInput style={styles.input} value={region}></TextInput>
      <Text style={{ fontWeight: "bold", fontSize: 15, color: "#387478" }}>
        Country:
      </Text>
      <TextInput style={styles.input} value={country}></TextInput>
      <Text style={{ fontWeight: "bold", fontSize: 15, color: "#387478" }}>
        Postal Code:
      </Text>
      <TextInput style={styles.input} value={postalCode}></TextInput>
      <View style={{ alignItems: "center" }}>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={reverseGeocode}>
            <Text
              style={{ fontSize: 15, color: "#E2F1E7", fontWeight: "bold" }}
            >
              Current Location
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text
              style={{ fontSize: 15, color: "#E2F1E7", fontWeight: "bold" }}
            >
              Get Location
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Timings Page")}
        >
          <Text style={{ fontSize: 15, color: "#E2F1E7", fontWeight: "bold" }}>
            Next
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
    justifyContent: "flex-start",
    backgroundColor: "#E2F1E7",
  },
  heading: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 40,
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#E2F1E7",
    color: "#387478",
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#387478",
    fontSize: 15,
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 20,
    justifyContent: "center",
    paddingTop: 0,
    paddingBottom: 0,
  },
  btn: {
    backgroundColor: "#387478",
    height: 40,
    width: 150,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  btnContainer: {
    flexDirection: "row",
  },
});
