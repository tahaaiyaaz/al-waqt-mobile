import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function TimeSetter({ prayerName }) {
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [time, setTime] = useState("Set Time");

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (date) => {
    const dt = new Date(date);
    const x = dt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setTime(x);
    hideTimePicker();
  };
  return (
    <View>
      <View style={styles.container}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#387478" }}>
          {prayerName}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            showTimePicker();
          }}
        >
          <View style={{ textAlign: "center" }}>
            <Text
              style={{
                fontSize: 20,
                color: "black",
              }}
            >
              {time}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    height: 45,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
