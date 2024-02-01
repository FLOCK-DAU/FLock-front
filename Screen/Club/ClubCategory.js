import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ClubCategory = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  // 백엔드 연결전 하드코딩
  const categories = ['Sports', 'Music', 'Technology', 'Books', 'Movies', '음', '그냥', '아무거나'];
  const categoryContents = {
    Sports: ['Football', 'Basketball', 'Tennis'],
    Music: ['Rock', 'Pop', 'Jazz'],
    Technology: ['Programming', 'Gadgets', 'AI'],
    Books: ['Fiction', 'Non-fiction', 'Mystery'],
    Movies: ['Action', 'Drama', 'Comedy'],
    음: ['아무', 'Drama', 'Comedy'],
    그냥: ['Action', 'Drama', 'Comedy'],
    아무거나: ['Action', 'Drama', 'Comedy'],
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <View style={styles.container}>
      {/* 검색 */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search clubs..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />

      {/* 카테고리 */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
        {categories.map((category) => (
          <TouchableWithoutFeedback
            key={category}
            onPress={() => handleCategorySelect(category)}
          >
            <View
              style={[
                styles.categoryItem,
                selectedCategory === category && styles.selectedCategory,
              ]}
            >
              <View style={styles.categoryCircle}>
                <Text style={styles.categoryText}>{category}</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>

      {/* 카테고리 컨텐츠 */}
      <ScrollView style={styles.categoryContents}>
        {selectedCategory &&
          categoryContents[selectedCategory].map((content) => (
            <View key={content} style={styles.contentItem}>
              <Text>{content}</Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchInput: {
    flex: 0.1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 10,
  },
  categories: {
    flex: 0.2,
    marginBottom: 16,
  },
  categoryItem: {
    marginRight: 8,
  },
  categoryCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  selectedCategory: {
    backgroundColor: '#a0a0a0',
  },
  categoryContents: {
    flex: 0.7,
  },
  contentItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});

export default ClubCategory;
