import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const categories = [
  { id: 1, name: 'Hot Coffee', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400' },
  { id: 2, name: 'Iced Coffee', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400' },
  { id: 3, name: 'Donuts', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400' },
  { id: 4, name: 'Breakfast', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400' },
];

export default function MenuScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Menu</Text>
      </View>
      
      <ScrollView>
        <View style={styles.categoriesGrid}>
          {categories.map((category) => (
            <TouchableOpacity key={category.id} style={styles.categoryCard}>
              <Image source={{ uri: category.image }} style={styles.categoryImage} />
              <Text style={styles.categoryName}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Featured Items</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2, 3].map((item) => (
              <TouchableOpacity key={item} style={styles.featuredItem}>
                <Image
                  source={{ uri: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400' }}
                  style={styles.featuredItemImage}
                />
                <Text style={styles.featuredItemTitle}>Featured Item {item}</Text>
                <Text style={styles.featuredItemPrice}>$4.99</Text>
              </TouchableOpacity>
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
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },
  categoryCard: {
    width: '50%',
    padding: 8,
  },
  categoryImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
    color: '#333',
    textAlign: 'center',
  },
  featuredSection: {
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