import { View, Text, FlatList, StyleSheet, SafeAreaView, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useState, useMemo } from 'react';
import ProductCard from '../../components/ProductCard';
import { products } from '../../data/products';

export default function ProductsScreen() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(products.map((p) => p.category))];
    return cats;
  }, []);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') {
      return products;
    }
    return products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const handleProductPress = (productId: string) => {
    router.push(`/product/${productId}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.title}>Store</Text>
        <Text style={styles.subtitle}>The best way to buy the products you love.</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterContainer}
        style={styles.filterScroll}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.filterButton,
              selectedCategory === category && styles.filterButtonActive,
            ]}
            onPress={() => setSelectedCategory(category)}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.filterText,
                selectedCategory === category && styles.filterTextActive,
              ]}
              numberOfLines={1}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={filteredProducts}
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
  filterScroll: {
    backgroundColor: '#f5f5f7',
    flexGrow: 0,
  },
  filterContainer: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 8,
    alignItems: 'center',
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: '#fff',
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#e5e5ea',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterButtonActive: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1d1d1f',
    textAlign: 'center',
  },
  filterTextActive: {
    color: '#fff',
  },
  list: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 120,
  },
});
