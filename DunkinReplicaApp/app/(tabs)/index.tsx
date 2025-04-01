import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MapPin, ChevronRight } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.locationContainer}>
            <MapPin color="#FF671F" size={24} />
            <Text style={styles.locationText}>Select a store</Text>
            <ChevronRight color="#FF671F" size={24} />
          </View>
        </View>

        <View style={styles.promoContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800' }}
            style={styles.promoImage}
          />
        </View>

        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Order Ahead</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Scan to Pay</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rewardsCard}>
          <Text style={styles.rewardsTitle}>DD Rewards</Text>
          <Text style={styles.rewardsPoints}>200 points</Text>
          <TouchableOpacity style={styles.rewardsButton}>
            <Text style={styles.rewardsButtonText}>View Rewards</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.featuredItems}>
          <Text style={styles.sectionTitle}>Featured Items</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2, 3].map((item) => (
              <View key={item} style={styles.featuredItem}>
                <Image
                  source={{ uri: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400' }}
                  style={styles.featuredItemImage}
                />
                <Text style={styles.featuredItemTitle}>Featured Drink {item}</Text>
                <Text style={styles.featuredItemPrice}>$4.99</Text>
              </View>
            ))}
          </ScrollView>
        </View>
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
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 8,
  },
  locationText: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
  promoContainer: {
    height: 200,
    marginVertical: 16,
  },
  promoImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  quickActions: {
    flexDirection: 'row',
    padding: 16,
    gap: 16,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#FF671F',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
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
  rewardsButton: {
    backgroundColor: '#FF671F',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  rewardsButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  featuredItems: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
    color: '#333',
  },
  featuredItem: {
    width: 200,
    marginRight: 16,
  },
  featuredItemImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  featuredItemTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
    color: '#333',
  },
  featuredItemPrice: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});