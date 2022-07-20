import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";
import { useState } from "react";

export default function App() {
  let [selectedImage, setSelectedImage] = useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      return alert("Permission to access camera roll is required!");
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled !== true) {
      setSelectedImage({ uri: pickerResult.uri });
    }
  };

  let openShareDialogAsync = async () => {
    if (Platform.OS === "web") {
      return alert("Uh oh, sharing isn't available on your platform!");
    }

    await Sharing.shareAsync(selectedImage.uri);
  };

  if (selectedImage) {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Heading</Text>

        <Image source={{ uri: selectedImage.uri }} style={styles.image} />

        <TouchableOpacity style={styles.button} onPress={openShareDialogAsync}>
          <Text style={styles.buttonText}>Share Photo</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Heading</Text>

        <Text style={styles.text}>
          To share a photo from your phone with a friend, just press the button
          below!
        </Text>

        <TouchableOpacity style={styles.button} onPress={openImagePickerAsync}>
          <Text style={styles.buttonText}>Pick a Photo</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  heading: {
    color: "orange",
    padding: 5,
    fontSize: 40,
    borderBottomColor: "gray",
    borderBottomWidth: 2,
  },
  text: {
    color: "#222",
    fontSize: 18,
    marginTop: 15,
    marginBottom: 15,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "cover",
    borderColor: "black",
    borderWidth: 2,
  },
  button: {
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
});
