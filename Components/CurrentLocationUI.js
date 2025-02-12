import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import * as Location from "expo-location";
import SearchBar from "./SearchBar";

const CurrentLocationUI = ({ setMasjidData }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);

  //tapped masjid data
  const [sendCoords, setSendCoords] = useState([]);

  //Api data
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  const getLocation = async () => {
    let location = await Location.getCurrentPositionAsync({});

    // uses current location to display masjids
    //getallnearestmasjids(location.coords.latitude, location.coords.longitude);
    // uses tapped location to display masjids
    console.log(sendCoords);
    if (sendCoords.length == 0) {
      getallnearestmasjids(location.coords.latitude, location.coords.longitude);
    } else {
      getallnearestmasjids(sendCoords.lat, sendCoords.lng);
    }

    // getallnearestmasjids(sendCoords.lat, sendCoords.lng);

    setLocation(location);
    setLatitude(location.coords.latitude);
    setLongitude(location.coords.longitude);
    getReverseGeocode(location.coords.latitude, location.coords.longitude);
  };

  const getReverseGeocode = async (latitude, longitude) => {
    let reverseGeocode = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });
    setAddress(reverseGeocode);
    setCity(reverseGeocode[0].city);
    setCountry(reverseGeocode[0].country);
  };

  function getallnearestmasjids(latitude, longitude) {
    console.log(latitude, longitude);
    fetch(
      `https://helloworld-ftfo4ql2pa-uc.a.run.app/getNearestMasjid?latitude=${latitude}&longitude=${longitude}&radiusInKm=10000`
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setMasjidData(json);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }

  async function getlocationandmasjids() {
    await getLocation();
  }
  //Api call
  useEffect(() => {
    getlocationandmasjids();
  }, []);

  return (
    <View>
      <SearchBar
        setSendCoords={setSendCoords}
        getallnearestmasjids={getallnearestmasjids}
      />
      {/* <Text>Current Location:</Text>
      {location ? (
        <Text>
          Latitude: {latitude}, Longitude: {longitude}
        </Text>
      ) : (
        <Text>No location data available</Text>
      )}
      {address ? (
        <Text>
          Address: {city}, {country}
        </Text>
      ) : (
        <Text>No address data available</Text>
      )}
      {errorMsg ? <Text style={{ color: "red" }}>{errorMsg}</Text> : null}
      <Button title="Get Location" onPress={getLocation} /> */}
    </View>
  );
};

export default CurrentLocationUI;
