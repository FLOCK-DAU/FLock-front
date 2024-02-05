import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ClubCategory = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  // 백엔드 연결전 하드코딩
  const categories = [
    { name: '독서', icon: 'book' },
    { name: '영화', icon: 'movie' },
    { name: '건강', icon: 'heart' },
    { name: '쇼핑', icon: 'shopping' },
    { name: '드라이브', icon: 'car' },
    { name: '기술', icon: 'laptop' },
    { name: '음식', icon: 'food' },
  ];
  const categoryContents = {
    독서: [
      {
        name: '미스터리 북 클럽',
        description: '미스터리를 해결하고 흥미진진한 책을 함께 토론해봐요.',
        participants: 35,
        likes: 18,
        hostName: '그레이스 테일러',
        image: 'https://example.com/mystery-book-club-image.jpg',
      },
      {
        name: '고전 문학 소모임',
        description: '고전 문학과 불멸의 이야기의 세계를 탐험해봐요.',
        participants: 22,
        likes: 15,
        hostName: '알렉스 밀러',
        image: 'https://example.com/classic-literature-image.jpg',
      },

    ],
    영화: [
      {
        name: '액션 영화 팬 클럽',
        description: '긴장감 넘치는 액션 영화와 토론에 참여해보세요.',
        participants: 28,
        likes: 14,
        hostName: '라이언 카터',
        image: 'https://example.com/action-movie-buffs-image.jpg',
      },
      {
        name: '드라마 영화 소사이어티',
        description: '매료적인 드라마를 통해 인간 감정의 깊이를 탐험해보세요.',
        participants: 25,
        likes: 20,
        hostName: '소피아 화이트',
        image: 'https://example.com/drama-film-society-image.jpg',
      },

    ],
    건강: [
      {
        name: '웰니스와 요가 클럽',
        description: '요가와 웰니스 활동을 통해 전체적인 건강을 증진하세요.',
        participants: 30,
        likes: 22,
        hostName: '올리버 아담스',
        image: 'https://example.com/yoga-club-image.jpg',
      },
      {
        name: '영양 열정가 모임',
        description: '건강한 라이프스타일을 유지하는 데 관한 통찰을 나누어보세요.',
        participants: 20,
        likes: 12,
        hostName: '엠마 그린',
        image: 'https://example.com/nutrition-enthusiasts-image.jpg',
      },

    ],
    쇼핑: [
      {
        name: '패션 트렌드 클럽',
        description: '최신 패션 트렌드와 스타일 팁을 최신 정보로 받아보세요.',
        participants: 40,
        likes: 30,
        hostName: '리암 터너',
        image: 'https://example.com/fashion-trends-club-image.jpg',
      },
      {
        name: '테크 딜과 할인',
        description: '최고의 테크 딜과 할인을 발견하고 공유하세요.',
        participants: 15,
        likes: 10,
        hostName: '아바 마티네즈',
        image: 'https://example.com/tech-deals-club-image.jpg',
      },

    ],
    드라이브: [
      {
        name: '모험 로드 트립',
        description: '스릴 넘치는 로드 트립을 떠나고 경치 좋은 목적지를 탐험하세요.',
        participants: 25,
        likes: 16,
        hostName: '노아 로드리게스',
        image: 'https://example.com/road-trips-image.jpg',
      },
      {
        name: '자동차 애호가 클럽',
        description: '동료 자동차 애호가들과 자동차에 대한 열정을 공유하세요.',
        participants: 18,
        likes: 12,
        hostName: '미아 콜린스',
        image: 'https://example.com/car-enthusiasts-club-image.jpg',
      },

    ],
    기술: [
      {
        name: '기술 열정가 클럽',
        description: '최신 기술과 가전제품에 대해 토론하세요.',
        participants: 25,
        likes: 20,
        hostName: '이단 호손',
        image: 'https://example.com/tech-enthusiast-club-image.jpg',
      },
      {
        name: '코딩 부트캠프',
        description: '다른 열정적인 이들과 함께 코딩을 배우고 실습하세요.',
        participants: 30,
        likes: 25,
        hostName: '소피 스미스',
        image: 'https://example.com/coding-bootcamp-image.jpg',
      },

    ],
    음식: [
      {
        name: '국제 요리 클럽',
        description: '다양한 국제 요리를 탐험하고 공유하세요.',
        participants: 40,
        likes: 35,
        hostName: '김철수',
        image: 'https://example.com/international-cuisine-club-image.jpg',
      },
      {
        name: '건강한 요리 워크샵',
        description: '맛있고 건강한 레시피를 배우고 만들어보세요.',
        participants: 20,
        likes: 18,
        hostName: '이영희',
        image: 'https://example.com/healthy-cooking-workshop-image.jpg',
      },

    ],

  };


  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <View style={styles.container}>
      {/* Search */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Find a meeting you are interested in!"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <TouchableOpacity style={styles.searchIconContainer}>
          <MaterialCommunityIcons name="magnify" size={24} color="#555" />
        </TouchableOpacity>
      </View>

      {/* Category */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.name}
            onPress={() => handleCategorySelect(category.name)}
          >
            <View style={styles.categoryItemContainer}>
              <View
                style={[
                  styles.categoryItem,
                  selectedCategory === category.name && styles.selectedCategory,
                ]}
              >
                <View style={styles.categoryCircle}>
                  <MaterialCommunityIcons
                    name={category.icon}
                    size={24}
                    color={selectedCategory === category.name ? '#fff' : '#555'}
                  />
                </View>
              </View>
              <Text style={styles.categoryText}>{category.name}</Text>
            </View>

          </TouchableOpacity>
        ))}
      </ScrollView>
      {/* Category Content */}
      <ScrollView style={styles.categoryContents}>
        {selectedCategory &&
          categoryContents[selectedCategory]?.map((content, index) => (
            <View key={index} style={styles.contentItem}>
              <Text style={styles.contentTitle}>{content.name}</Text>
              <Text>{content.description}</Text>
              <Text>Participants: {content.participants}</Text>
              <Text>Likes: {content.likes}</Text>
              <Text>Host: {content.hostName}</Text>
              <View style={styles.imageContainer}>
                {/* Image Container */}
                {content.image ? (
                  <Image source={{ uri: content.image }} style={styles.image} />
                ) : (
                  <View style={styles.placeholderImage}>
                    <Text style={styles.placeholderText}>Image Space</Text>
                  </View>
                )}
              </View>

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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16, 
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
  },
  searchIconContainer: {
    marginLeft: 8,
  },
  categoryItem: {
    width: 63,
    height: 63,
    borderRadius: 30,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#e0e0e0',

  },
  categoryCircle: {
    width: 56,
    height: 56,
    borderRadius: 30,
    backgroundColor: '#d4d0c4',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#d4d0c4',
  },
  categoryItemContainer: {
    marginRight: 8,
    overflow: 'hidden',
  },
  categoryText: {
    marginTop: 4,
    marginBottom: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  selectedCategory: {
    backgroundColor: '#DECF92',
    borderColor: '#FFCE09',
  },
  categoryContents: {
    //marginTop: 0,
  },
  contentItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  contentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black'
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  placeholderText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -8 }],
    color: '#555', 
    fontWeight: 'bold',
  }
});

export default ClubCategory;
