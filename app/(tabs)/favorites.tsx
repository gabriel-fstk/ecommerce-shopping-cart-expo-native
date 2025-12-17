import { View, Text, FlatList, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { Heart } from 'lucide-react-native';
import ProductCard from '../../components/ProductCard';
import { useFavorites } from '../../contexts/FavoritesContext';

export default function FavoritesScreen() {
  const router = useRouter();
  const { favorites } = useFavorites();

  const handleProductPress = (productId: string) => {
    router.push(`/product/${productId}`);
  };

  if (favorites.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.header}>
          <Text style={styles.title}>Favorites</Text>
        </View>
        <View style={styles.emptyContainer}>
          <Heart size={80} color="#d1d1d6" strokeWidth={1.5} />
          <Text style={styles.emptyTitle}>No favorites yet</Text>
          <Text style={styles.emptyText}>
            Start adding products to your favorites by tapping the heart icon.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.title}>Favorites</Text>
        <Text style={styles.subtitle}>
          {favorites.length} {favorites.length === 1 ? 'item' : 'items'}
        </Text>
      </View>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard product={item} onPress={() => handleProductPress(item.id)} />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
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
  subtitle: {
    fontSize: 17,
    color: '#86868b',
    fontWeight: '400',
  },
  list: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 120,
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
});
