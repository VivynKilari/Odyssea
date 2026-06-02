import { router } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function Home() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.logo}>ODYSSEA</Text>

      <Text style={styles.subtitle}>
        Ready for your next journey?
      </Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/map")}
      >
        <Text style={styles.cardTitle}>🗺️ Live Map</Text>
        <Text style={styles.cardText}>
          View your location and track rides
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>🏍️ Start Ride</Text>
        <Text style={styles.cardText}>
          Begin recording your journey
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>👥 Friends</Text>
        <Text style={styles.cardText}>
          See where your riding group is
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>👤 Profile</Text>
        <Text style={styles.cardText}>
          Manage your account and rides
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1220",
  },

  content: {
    padding: 20,
    paddingTop: 60,
  },

  logo: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    letterSpacing: 2,
  },

  subtitle: {
    color: "#94A3B8",
    fontSize: 16,
    marginBottom: 30,
  },

  card: {
    backgroundColor: "#172033",
    borderRadius: 18,
    padding: 20,
    marginBottom: 18,
  },

  cardTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
  },

  cardText: {
    color: "#94A3B8",
    fontSize: 14,
  },
});