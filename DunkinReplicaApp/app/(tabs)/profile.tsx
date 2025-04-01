import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronRight, CreditCard, Gift, Settings, Bell } from 'lucide-react-native';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <ScrollView>
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400' }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileEmail}>john.doe@example.com</Text>
        </View>

        <View style={styles.rewardsCard}>
          <Text style={styles.rewardsTitle}>DD Rewards</Text>
          <Text style={styles.rewardsPoints}>200 points</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '40%' }]} />
          </View>
          <Text style={styles.rewardsProgress}>300 more points until next reward</Text>
        </View>

        <View style={styles.menuSection}>
          <TouchableOpacity style={styles.menuItem}>
            <CreditCard size={24} color="#333" />
            <Text style={styles.menuItemText}>Payment Methods</Text>
            <ChevronRight size={24} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Gift size={24} color="#333" />
            <Text style={styles.menuItemText}>Rewards</Text>
            <ChevronRight size={24} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Bell size={24} color="#333" />
            <Text style={styles.menuItemText}>Notifications</Text>
            <ChevronRight size={24} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Settings size={24} color="#333" />
            <Text style={styles.menuItemText}>Settings</Text>
            <ChevronRight size={24} color="#666" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signOutButton}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
  },
  profileSection: {
    alignItems: 'center',
    padding: 24,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  profileName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
  },
  rewardsCard: {
    margin: 16,
    padding: 16,
    backgroundColor: '#FFE4D6',
    borderRadius: 12,
  },
  rewardsTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FF671F',
  },
  rewardsPoints: {
    fontSize: 32,
    fontWeight: '700',
    color: '#FF671F',
    marginVertical: 8,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#FFB08E',
    borderRadius: 4,
    marginVertical: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FF671F',
    borderRadius: 4,
  },
  rewardsProgress: {
    fontSize: 14,
    color: '#666',
  },
  menuSection: {
    padding: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuItemText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 16,
  },
  signOutButton: {
    margin: 16,
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    alignItems: 'center',
  },
  signOutText: {
    fontSize: 16,
    color: '#FF671F',
    fontWeight: '600',
  },
});