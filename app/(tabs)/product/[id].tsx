import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft, ShoppingCart } from 'lucide-react-native';
import { products } from '../../../data/products';
import { useCart } from '../../../contexts/CartContext';
import { useState } from 'react';

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { addToCart } = useCart();
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Product not found</Text>
      </SafeAreaView>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setShowAddedMessage(true);
    setTimeout(() => setShowAddedMessage(false), 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color="#007AFF" strokeWidth={2} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/cart')} style={styles.cartButton}>
          <ShoppingCart size={24} color="#007AFF" strokeWidth={2} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: product.image }} style={styles.image} resizeMode="cover" />
        </View>

        <View style={styles.content}>
          <Text style={styles.category}>{product.category}</Text>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>${product.price.toLocaleString()}</Text>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Specifications</Text>
            {product.specs.map((spec, index) => (
              <View key={index} style={styles.specItem}>
                <View style={styles.bullet} />
                <Text style={styles.specText}>{spec}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        {showAddedMessage && (
          <View style={styles.addedMessage}>
            <Text style={styles.addedMessageText}>Added to cart</Text>
          </View>
        )}
        <TouchableOpacity style={styles.addButton} onPress={handleAddToCart} activeOpacity={0.8}>
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  backButton: {
    padding: 8,
  },
  cartButton: {
    padding: 8,
  },
  imageContainer: {
    width: '100%',
    height: 400,
    backgroundColor: '#f5f5f7',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    padding: 20,
  },
  category: {
    fontSize: 14,
    color: '#ff3b30',
    fontWeight: '600',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  name: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1d1d1f',
    marginBottom: 12,
  },
  price: {
    fontSize: 24,
    color: '#1d1d1f',
    fontWeight: '400',
    marginBottom: 24,
  },
  section: {
    marginBottom: 28,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1d1d1f',
    marginBottom: 12,
  },
  description: {
    fontSize: 17,
    color: '#1d1d1f',
    lineHeight: 26,
  },
  specItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#86868b',
    marginTop: 8,
    marginRight: 12,
  },
  specText: {
    flex: 1,
    fontSize: 15,
    color: '#1d1d1f',
    lineHeight: 22,
  },
  footer: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e5ea',
  },
  addButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  errorText: {
    fontSize: 17,
    color: '#86868b',
    textAlign: 'center',
    marginTop: 40,
  },
  addedMessage: {
    backgroundColor: '#34c759',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  addedMessageText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});
