import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>V</Text>
        </View>

        <Text style={styles.name}>Vivyn Kilari</Text>
        <Text style={styles.username}>@vivyn</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Vehicle</Text>
        <Text style={styles.cardText}>KTM Duke 390</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Ride Statistics</Text>
        <Text style={styles.cardText}>Total Rides: 0</Text>
        <Text style={styles.cardText}>Distance Travelled: 0 km</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>About</Text>
        <Text style={styles.cardText}>Robotics student. Rider. Explorer.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1220",
    padding: 20,
  },

  header: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 30,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#3B82F6",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  avatarText: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },

  name: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },

  username: {
    color: "#94A3B8",
    marginTop: 5,
  },

  card: {
    backgroundColor: "#172033",
    padding: 20,
    borderRadius: 18,
    marginBottom: 15,
  },

  cardTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },

  cardText: {
    color: "#94A3B8",
    fontSize: 15,
    marginBottom: 5,
  },
});
