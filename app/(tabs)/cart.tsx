import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native';
import { ShoppingBag } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useCart } from '../../contexts/CartContext';
import CartItemComponent from '../../components/CartItemComponent';

export default function CartScreen() {
  const { cart, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart();
  const insets = useSafeAreaInsets();

  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  const handleCheckout = () => {
    alert('Checkout functionality coming soon!');
  };

  if (cart.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.header}>
          <Text style={styles.title}>Cart</Text>
        </View>
        <View style={styles.emptyContainer}>
          <ShoppingBag size={80} color="#d1d1d6" strokeWidth={1.5} />
          <Text style={styles.emptyTitle}>Your cart is empty</Text>
          <Text style={styles.emptyText}>Start shopping to add items to your cart.</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.title}>Cart</Text>
        <Text style={styles.itemCount}>
          {totalItems} {totalItems === 1 ? 'item' : 'items'}
        </Text>
      </View>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.product.id}
        renderItem={({ item }) => (
          <CartItemComponent
            item={item}
            onUpdateQuantity={(quantity) => updateQuantity(item.product.id, quantity)}
            onRemove={() => removeFromCart(item.product.id)}
          />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />

      <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom, 20) + 80 }]}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalPrice}>${totalPrice.toLocaleString()}</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout} activeOpacity={0.8}>
          <Text style={styles.checkoutButtonText}>Check Out</Text>
        </TouchableOpacity>
        <Text style={styles.footerNote}>Review your order and complete the purchase.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f7',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
    backgroundColor: '#f5f5f7',
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
    color: '#1d1d1f',
    marginBottom: 4,
  },
  itemCount: {
    fontSize: 17,
    color: '#86868b',
    fontWeight: '400',
  },
  list: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1d1d1f',
    marginTop: 24,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 17,
    color: '#86868b',
    textAlign: 'center',
    lineHeight: 24,
  },
  footer: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e5ea',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1d1d1f',
  },
  totalPrice: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1d1d1f',
  },
  checkoutButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  footerNote: {
    fontSize: 13,
    color: '#86868b',
    textAlign: 'center',
  },
});
