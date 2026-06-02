import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>ODYSSEA</Text>

      <Text style={styles.tagline}>Every Journey Has a Story</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonOutline}
        onPress={() => router.push("/signup")}
      >
        <Text style={styles.buttonOutlineText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1220",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },

  logo: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#FFFFFF",
    letterSpacing: 3,
    marginBottom: 12,
  },

  tagline: {
    fontSize: 16,
    color: "#94A3B8",
    marginBottom: 50,
  },

  button: {
    width: "85%",
    backgroundColor: "#3B82F6",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 15,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },

  buttonOutline: {
    width: "85%",
    borderWidth: 2,
    borderColor: "#3B82F6",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonOutlineText: {
    color: "#3B82F6",
    fontSize: 18,
    fontWeight: "600",
  },
});
