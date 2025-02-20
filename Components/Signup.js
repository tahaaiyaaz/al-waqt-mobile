// // Signup.js
// import React from 'react';
// import { auth } from '../firebase'; // Import the initialized auth instance
// import firebase from 'firebase/compat/app';

// const Signup = () => {


//   const [user, setUser] = useState(null);




//   useEffect(() => {
//     // Get the currently logged-in user
//     const currentUser = auth.currentUser;
//     setUser(currentUser);
//   }, []);



//   // Function to handle Google Sign-In
//   const signInWithGoogle = async () => {




//     const provider = new firebase.auth.GoogleAuthProvider();
//     try {
//       // Use signInWithPopup to open the Google sign-in window
//       const result = await auth.signInWithPopup(provider);
//       // The signed-in user info is in result.user
//       console.log('User signed in: ', result);
//       console.log(result.user.uid)
//       // You can also redirect the user or update your state here
//     } catch (error) {
//       console.error('Error during Google sign-in', error);
//     }
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '2rem' }}>
//       <h2>Sign Up</h2>
//       <button onClick={signInWithGoogle}>
//         Sign Up with Google
//       </button>
//     </div>
//   );
// };

// export default Signup;







































// pages/AccountsPage.js
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import firebase from 'firebase/compat/app';

export default function Signup({ navigation }) {


  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get the currently logged-in user
    const currentUser = auth.currentUser;
    console.log(currentUser)
    setUser(currentUser);
  }, []);








  
  const signInWithGoogle = async () => {




    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      // Use signInWithPopup to open the Google sign-in window
      const result = await auth.signInWithPopup(provider);
      // The signed-in user info is in result.user
      console.log('User signed in: ', result);
      console.log(result.user.uid)
      navigation.navigate("MainTabs");
      
      // You can also redirect the user or update your state here
    } catch (error) {
      alert("sorry unable to sugnup")
      console.error('Error during Google sign-in', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // After logging out, navigate to the Login screen.
      navigation.navigate("Login");
    } catch (error) {
      alert("Error signing out.");
    }
  };

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No user is logged in.</Text>
        <TouchableOpacity
          style={styles.button}
          // onPress={() => navigation.navigate("Login")}
        >
          <Text onPress={signInWithGoogle} style={styles.buttonText}>login with google</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Account Details</Text>
      <Text style={styles.text}>Email: {user.email}</Text>
      <Text style={styles.text}>User ID: {user.uid}</Text>
      {user.displayName && <Text style={styles.text}>Name: {user.displayName}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E2F1E7",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    color: "#387478",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: "#387478",
  },
  button: {
    backgroundColor: "#387478",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

