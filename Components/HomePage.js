import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  Button,
} from "react-native";
import NearestMasjidCard from "./NearestMasjidCard";
import CurrentLocationUI from "./CurrentLocationUI";

export default function HomePage({ navigation }) {
  const [masjidData, setMasjidData] = useState();
  const [showAll, setShowAll] = useState(false); // State to toggle showing all masjids
  const [isLoading, setIsLoading] = useState(true); // Loading state

  // Simulate loading data (Replace with actual API call)
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulating a delay for loading data
        setTimeout(() => {
          setMasjidData({
            masjids: [
              {
                id: 1,
                details: {
                  name: "Masjid A",
                  distance: "1 km",
                  nextNamazTime: "12:00 PM",
                },
              },
              {
                id: 2,
                details: {
                  name: "Masjid B",
                  distance: "2 km",
                  nextNamazTime: "1:00 PM",
                },
              },
              {
                id: 3,
                details: {
                  name: "Masjid C",
                  distance: "3 km",
                  nextNamazTime: "2:00 PM",
                },
              },
              {
                id: 4,
                details: {
                  name: "Masjid D",
                  distance: "4 km",
                  nextNamazTime: "3:00 PM",
                },
              },
              {
                id: 5,
                details: {
                  name: "Masjid E",
                  distance: "5 km",
                  nextNamazTime: "4:00 PM",
                },
              },
            ],
          });
          setIsLoading(false);
        }, 2000);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const nearMasjidCard = masjidData ? (
    masjidData.masjids
      .slice(0, showAll ? masjidData.masjids.length : 3) // Show only the first 3 initially, or all if showAll is true
      .map((masjid) => (
        <NearestMasjidCard
          key={masjid.id}
          MasjidName={masjid.details.name}
          MasjidDistance={masjid.details.distance}
          NextNamazTime={masjid.details.nextNamazTime}
        />
      ))
  ) : isLoading ? (
    <ActivityIndicator size="large" color="#387478" />
  ) : (
    <Text>No masjid data available.</Text>
  );

  return (
    <View style={styles.container}>
      <CurrentLocationUI setMasjidData={setMasjidData} />
      <Text
        style={styles.subHeadings}
        onPress={() => navigation.navigate("About Page")}
      >
        Near By
      </Text>
      {nearMasjidCard}
      {/* Show Less button appears when masjids are shown completely */}
      {showAll && (
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => setShowAll(false)} // Set showAll to false to hide extra cards
        >
          <Text style={styles.floatingButtonText}>Show Less</Text>
        </TouchableOpacity>
      )}
      {/* Show More button appears when data is loaded */}
      {!isLoading && !showAll && (
        <TouchableOpacity
          style={styles.showMoreButton}
          onPress={() => setShowAll(true)}
        >
          <Text style={{ color: "#E2F1E7", fontSize: 16 }}>Show More</Text>
        </TouchableOpacity>
      )}
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
  subHeadings: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#387478",
    marginTop: 5,
    marginBottom: 5,
  },
  showMoreText: {
    fontSize: 16,
    color: "#387478",
    marginTop: 10,
    textDecorationLine: "underline",
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 30,
    backgroundColor: "#387478",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderColor: "#E2F1E7",
    borderWidth: 2,
  },
  showMoreButton: {
    backgroundColor: "#387478",
    height: 40,
    width: 120,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  floatingButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
