import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  View,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { useState } from "react";

const Login_Screen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.containerin}>
        <Image
          source={require("../../assets/photo_2023-03-20_09-52-33.png")}
          style={{ width: 250, height: 210, marginBottom: 20 }}
        />
        <Text style={styles.title}> Login page</Text>

        <TextInput
          onChange={(text) => setEmail(text)}
          value={email}
          style={styles.input}
          placeholder="Enter Email"
        ></TextInput>
        <TextInput
          onChange={(text) => setPassword(text)}
          value={password}
          style={styles.input}
          placeholder="Enter Password"
        ></TextInput>
        <View style={{ width: "100%", margin: 10 }}>
          <TouchableOpacity
            style={styles.submit}
            onPress={() => {
              if (email != null && password != null) {
                navigation.navigate("Register");
              }
            }}
          >
            <Text style={styles.submitText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={{ color: "#660303" }}> Register</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <TouchableOpacity>
            <Image
              source={require("../../assets/icons8_Facebook_64.png")}
              style={{
                width: 40,
                height: 40,
                marginBottom: 20,
                marginRight: 5,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require("../../assets/icons8_google_64.png")}
              style={{
                width: 40,
                height: 40,
                marginBottom: 20,
                marginRight: 5,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require("../../assets/icons8_twitter_64.png")}
              style={{
                width: 40,
                height: 40,
                marginBottom: 20,
                marginRight: 5,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  containerin: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 1,
  },
  input: {
    marginBottom: 12,
    borderWidth: 2,
    borderColor: "#bbb",
    width: "100%",
    borderRadius: 12,
    textAlign: "center",
    height: 40,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 3,
  },
  submit: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#000",
    borderRadius: 17,
    borderWidth: 1,
    borderColor: "#000",
  },
  submitText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Login_Screen;
