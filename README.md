# masjid-mobile
expo install @react-native-community/datetimepicker
expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs


















[20/02, 7:07 pm] Taha Aiyaaz: async function getFavoriteMasjids(favoriteIds) {
  const apiUrl = 'http://127.0.0.1:5001/functionsinjs/asia-south1/helloWorld/getFavoriteMasjids'; // Update with your URL
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ favoriteIds })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Favorite Masjids:', data.masjids);
    return data.masjids;
  } catch (error) {
    console.error('Error fetching favorite masjids:', error);
  }
}





async function signupWithMobile() {
  const apiUrl = "http://127.0.0.1:5001/functionsinjs/asia-south1/helloWorld/signupWithMobile"; // Replace with your deployed URL
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderId: {
          uid: "6ejSExTFnmSxqYLwGwAI8acsFG32",
          name: "John Doe",
          mobileNumber: "1234567890"
        }
      })
    });
    const data = await response.json();
    console.log("Signup response:", data);
  } catch (error) {
    console.error("Error during signup:", error);
  }
}
















async function updateUserDetails(userId, updates) {
    const apiUrl = 'http://127.0.0.1:5001/functionsinjs/asia-south1/helloWorld/updateUser'; // Replace with your deployed URL
    try {
        const response = await fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, updates })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Update Response:", data);
        return data;
    } catch (error) {
        console.error("Error updating user details:", error);
    }
}
[20/02, 7:08 pm] Taha Aiyaaz: // signupWithMobile()
          
          
        //   uid = ""
          
          
// getFavoriteMasjids(['5cWzpDG95UwJtb6aPYt3','8dcyShXkvjdFXwfd0Lcl']);
[20/02, 7:09 pm] Taha Aiyaaz: updateUserDetails("6ejSExTFnmSxqYLwGwAI8acsFG32", {
    name: "taha palan",
    favorites: ['5cWzpDG95UwJtb6aPYt3','8dcyShXkvjdFXwfd0Lcl'],

});
[20/02, 7:10 pm] Taha Aiyaaz: https://helloworld-ftfo4ql2pa-el.a.run.app
