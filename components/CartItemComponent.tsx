import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Minus, Plus, Trash2 } from 'lucide-react-native';
import { CartItem } from '../types/product';

interface CartItemComponentProps {
  item: CartItem;
  onUpdateQuantity: (quantity: number) => void;
  onRemove: () => void;
}

export default function CartItemComponent({
  item,
  onUpdateQuantity,
  onRemove,
}: CartItemComponentProps) {
  const { product, quantity } = item;
  const subtotal = product.price * quantity;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} resizeMode="cover" />
      <View style={styles.details}>
        <View style={styles.info}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>${product.price.toLocaleString()}</Text>
        </View>
        <View style={styles.actions}>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => onUpdateQuantity(quantity - 1)}
              activeOpacity={0.7}
            >
              <Minus size={16} color="#1d1d1f" strokeWidth={2} />
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => onUpdateQuantity(quantity + 1)}
              activeOpacity={0.7}
            >
              <Plus size={16} color="#1d1d1f" strokeWidth={2} />
            </TouchableOpacity>
          </View>
          <View style={styles.rightActions}>
            <Text style={styles.subtotal}>${subtotal.toLocaleString()}</Text>
            <TouchableOpacity onPress={onRemove} activeOpacity={0.7} style={styles.deleteButton}>
              <Trash2 size={20} color="#ff3b30" strokeWidth={2} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: '#f5f5f7',
  },
  details: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1d1d1f',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#86868b',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f7',
    borderRadius: 8,
    padding: 4,
  },
  quantityButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  quantity: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1d1d1f',
    marginHorizontal: 12,
    minWidth: 24,
    textAlign: 'center',
  },
  rightActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  subtotal: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1d1d1f',
  },
  deleteButton: {
    padding: 4,
  },
});
