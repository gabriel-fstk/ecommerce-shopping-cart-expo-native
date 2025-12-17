import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Heart, ShoppingCart } from 'lucide-react-native';
import { Product } from '../types/product';
import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  onPress: () => void;
}

export default function ProductCard({ product, onPress }: ProductCardProps) {
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const favorite = isFavorite(product.id);

  const handleToggleFavorite = (e: any) => {
    e.stopPropagation();
    if (favorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  const handleAddToCart = (e: any) => {
    e.stopPropagation();
    addToCart(product);
    setShowAddedMessage(true);
    setTimeout(() => setShowAddedMessage(false), 1500);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image }} style={styles.image} resizeMode="cover" />
        <TouchableOpacity
          style={[styles.favoriteButton, favorite && styles.favoriteButtonActive]}
          onPress={handleToggleFavorite}
          activeOpacity={0.8}
        >
          <Heart
            size={20}
            color={favorite ? '#fff' : '#1d1d1f'}
            fill={favorite ? '#fff' : 'transparent'}
            strokeWidth={2}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.category}>{product.category}</Text>
          <Text style={styles.name} numberOfLines={2}>
            {product.name}
          </Text>
          <Text style={styles.price}>${product.price.toLocaleString()}</Text>
        </View>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={handleAddToCart}
          activeOpacity={0.8}
        >
          <ShoppingCart size={20} color="#fff" strokeWidth={2} />
        </TouchableOpacity>
      </View>
      {showAddedMessage && (
        <View style={styles.addedBadge}>
          <Text style={styles.addedBadgeText}>Added</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  imageContainer: {
    width: '100%',
    height: 240,
    backgroundColor: '#f5f5f7',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  favoriteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  favoriteButtonActive: {
    backgroundColor: '#ff3b30',
  },
  infoContainer: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  textContainer: {
    flex: 1,
    marginRight: 12,
  },
  category: {
    fontSize: 12,
    color: '#86868b',
    fontWeight: '500',
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1d1d1f',
    marginBottom: 8,
  },
  price: {
    fontSize: 17,
    color: '#1d1d1f',
    fontWeight: '400',
  },
  cartButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  addedBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#34c759',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  addedBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});
