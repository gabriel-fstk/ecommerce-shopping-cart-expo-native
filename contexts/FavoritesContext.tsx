import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Product } from '../types/product';

interface FavoritesContextType {
  favorites: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
  getFavoritesCount: () => number;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

const FAVORITES_STORAGE_KEY = '@favorites';

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadFavorites();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      saveFavorites();
    }
  }, [favorites, isLoaded]);

  const loadFavorites = async () => {
    try {
      const favoritesData = await AsyncStorage.getItem(FAVORITES_STORAGE_KEY);
      if (favoritesData) {
        setFavorites(JSON.parse(favoritesData));
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    } finally {
      setIsLoaded(true);
    }
  };

  const saveFavorites = async () => {
    try {
      await AsyncStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error('Error saving favorites:', error);
    }
  };

  const addToFavorites = (product: Product) => {
    setFavorites((currentFavorites) => {
      const exists = currentFavorites.find((fav) => fav.id === product.id);
      if (exists) {
        return currentFavorites;
      }
      return [...currentFavorites, product];
    });
  };

  const removeFromFavorites = (productId: string) => {
    setFavorites((currentFavorites) =>
      currentFavorites.filter((fav) => fav.id !== productId)
    );
  };

  const isFavorite = (productId: string) => {
    return favorites.some((fav) => fav.id === productId);
  };

  const getFavoritesCount = () => {
    return favorites.length;
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        getFavoritesCount,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within FavoritesProvider');
  }
  return context;
}
