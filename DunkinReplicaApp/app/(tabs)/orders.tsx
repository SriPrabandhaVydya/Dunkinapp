import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Clock, ChevronRight } from 'lucide-react-native';

const orders = [
  {
    id: 1,
    date: 'Today, 9:30 AM',
    items: ['Medium Iced Coffee', 'Glazed Donut'],
    total: 7.98,
    status: 'Completed',
  },
  {
    id: 2,
    date: 'Yesterday, 2:15 PM',
    items: ['Large Hot Coffee', 'Bacon Egg Sandwich'],
    total: 9.47,
    status: 'Completed',
  },
];

export default function OrdersScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Orders</Text>
      </View>

      <ScrollView>
        <TouchableOpacity style={styles.reorderButton}>
          <Clock color="#FF671F" size={24} />
          <Text style={styles.reorderText}>Reorder your favorites</Text>
          <ChevronRight color="#FF671F" size={24} />
        </TouchableOpacity>

        <View style={styles.ordersSection}>
          <Text style={styles.sectionTitle}>Recent Orders</Text>
          {orders.map((order) => (
            <TouchableOpacity key={order.id} style={styles.orderCard}>
              <View style={styles.orderHeader}>
                <Text style={styles.orderDate}>{order.date}</Text>
                <Text style={styles.orderStatus}>{order.status}</Text>
              </View>
              <View style={styles.orderItems}>
                {order.items.map((item, index) => (
                  <Text key={index} style={styles.orderItem}>{item}</Text>
                ))}
              </View>
              <View style={styles.orderFooter}>
                <Text style={styles.orderTotal}>${order.total.toFixed(2)}</Text>
                <TouchableOpacity style={styles.reorderButton}>
                  <Text style={styles.reorderButtonText}>Reorder</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
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
  reorderButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    margin: 16,
    padding: 16,
    borderRadius: 8,
  },
  reorderText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 12,
    color: '#333',
  },
  ordersSection: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
    color: '#333',
  },
  orderCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#eee',
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  orderDate: {
    fontSize: 16,
    color: '#666',
  },
  orderStatus: {
    fontSize: 14,
    color: '#4CAF50',
  },
  orderItems: {
    marginBottom: 12,
  },
  orderItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 12,
  },
  orderTotal: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  reorderButtonText: {
    color: '#FF671F',
    fontSize: 16,
    fontWeight: '600',
  },
});