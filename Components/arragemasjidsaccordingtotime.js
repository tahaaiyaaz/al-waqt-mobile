import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

// Helper to convert time (e.g., "10:00 AM") to minutes
const convertTimeToMinutes = (timeStr) => {
  if (timeStr) {
    const [time, period] = timeStr.split(' ');
    let [hours, minutes] = time.split(':').map(Number);
    if (period === 'PM' && hours !== 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;
    return hours * 60 + minutes;
  } else {
    // Fallback time in minutes if timeStr is not provided.
    return 2 * 60 + 18;
  }
};

const PrayerTimeComponent = ({ mosqueData, selectedPrayer, setEarlierMasjidData }) => {
  // Expecting mosqueData in the form { masjids: [...] }
  mosqueData = mosqueData.masjids;
  console.log("Entering PrayerTimeComponent");

  if (!mosqueData || mosqueData.length === 0) {
    console.log("There are no masjids for sure");
    return <View />;
  }

  console.log("Masjid data received in PrayerTimeComponent");

  const [prayerTimes, setPrayerTimes] = useState({});
  const [upcomingPrayer, setUpcomingPrayer] = useState(null);
  const [displayedMosques, setDisplayedMosques] = useState([]);

  // Generate prayer times for each prayer from the mosque data.
  const getPrayerTimes = () => {
    const isJuma = new Date().getDay() === 5;
    const prayers = isJuma 
      ? ['fajr', 'jummatiming', 'asar', 'isha'] 
      : ['fajr', 'dhuhr', 'asar', 'isha', 'jummatiming'];

    const times = {};
    prayers.forEach(prayer => {
      times[prayer] = mosqueData
        .map(mosque => ({
          mosqueId: mosque.id,
          mosqueName: mosque.details.name,
          time: mosque.details.timings[prayer],
          minutes: convertTimeToMinutes(mosque.details.timings[prayer]),
          address: mosque.details.addressLine1,
          location: mosque.location,
          details:mosque.details
        }))
        .sort((a, b) => a.minutes - b.minutes);
    });
    console.log(times)
    return times;
  };

  // Find the upcoming prayer (the first prayer with time greater than current time)
  const getUpcomingPrayer = (times) => {
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const prayers = Object.entries(times).map(([name, mosques]) => ({
      name,
      minutes: mosques[0].minutes, // since the array is sorted ascending
      mosques
    }));

    return prayers.find(prayer => prayer.minutes > currentMinutes) || prayers[0];
  };

  // Update prayer times when mosqueData changes
  useEffect(() => {
    const times = getPrayerTimes();
    setPrayerTimes(times);
    const upcoming = getUpcomingPrayer(times);
    setUpcomingPrayer(upcoming);
    setDisplayedMosques(upcoming.mosques);

    if (setEarlierMasjidData) {
      // We wrap the final sorted array inside an object, if needed.
      let earlierMasjids = { masjids: upcoming.mosques };
      setEarlierMasjidData(earlierMasjids);
      console.log("Final upcoming masjids array:", upcoming.mosques);
    }
  }, [mosqueData]);

  // When a specific prayer is selected, update the displayed mosques accordingly.
  useEffect(() => {
    if (selectedPrayer && prayerTimes[selectedPrayer]) {
      setDisplayedMosques(prayerTimes[selectedPrayer]);
      if (setEarlierMasjidData) {
        setEarlierMasjidData({ masjids: prayerTimes[selectedPrayer] });
        console.log("Final masjids array for selected prayer:", prayerTimes[selectedPrayer]);
      }
    }
  }, [selectedPrayer, prayerTimes, setEarlierMasjidData]);

  return (
    []
    // <View >
    //   <Text style={styles.sectionHeader}>
    //     {selectedPrayer ? 
    //       `Selected Prayer: ${selectedPrayer.toUpperCase()}` : 
    //       `Upcoming Prayer: ${upcomingPrayer?.name.toUpperCase()}`}
    //   </Text>
      
    //   {displayedMosques.map((mosque) => (
    //     <View key={mosque.mosqueId} style={styles.mosqueItem}>
    //       <View>
    //         <Text style={styles.mosqueName}>{mosque.mosqueName}</Text>
    //         <Text style={styles.mosqueAddress}>{mosque.address}</Text>
    //       </View>
    //       <Text style={styles.mosqueTime}>{mosque.time}</Text>
    //     </View>
    //   ))}
    // </View>
  );
};

const styles = StyleSheet.create({
  contentSection: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginVertical: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50',
  },
  mosqueItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  mosqueName: {
    fontSize: 14,
    color: '#34495e',
    fontWeight: '500',
  },
  mosqueAddress: {
    fontSize: 12,
    color: '#7f8c8d',
    marginTop: 2,
  },
  mosqueTime: {
    fontSize: 14,
    color: '#7f8c8d',
  },
});

export default PrayerTimeComponent;
