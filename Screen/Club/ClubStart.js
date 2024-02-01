import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Image } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import img from '../../assets/images/sheep.png'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
const ClubStart = () => {
    const [searchText, setSearchText] = useState("");
    const [filter, setFilter] = useState("all");
    const navigation = useNavigation();

    const handleArrowButtonPress = () => {
        // Navigate to the ClubCategory
        navigation.navigate('ClubCategory');
    };

    const topMeetingsData = [
        {
            id: 1,
            title: "부산 볼링칠사람            모여라",
            organizer: "하윤지",
            nickname: "lozi",
            participants: 16,
            hearts: 23,
        },
        {
            id: 2,
            title: "롤체한판",
            organizer: "채승지",
            nickname: "똘복이",
            participants: 325,
            hearts: 526,
        },
        { id: 3, title: "Meeting 3" },
        { id: 4, title: "Meeting 4" },
        { id: 5, title: "Meeting 5" },
    ];

    const allMeetingsData = [
        { id: 1, title: "김해 라운딩 동호회" },
        { id: 2, title: "Meeting 2" },
        { id: 3, title: "Meeting 3" },
        { id: 4, title: "Meeting 4" },
        { id: 5, title: "Meeting 5" },
        { id: 6, title: "Meeting 6" },
        { id: 7, title: "Meeting 7" },
        { id: 8, title: "Meeting 8" },
    ];

    const filteredMeetings = filter === "all"
        ? allMeetingsData
        : filter === "popular"
            ? topMeetingsData
            : [];

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="menu" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>FLOCK</Text>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="bell" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <ScrollView>
                {/* Search Bar */}
                <View style={styles.searchBar}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search meetings..."
                        value={searchText}
                        onChangeText={(text) => setSearchText(text)}
                    />
                </View>

                {/* Top 5 Most Popular Meetings */}
                <View style={styles.topMeetings}>
                    <Text style={styles.sectionTitle}>Top 5 인기모임</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {topMeetingsData.map((meeting) => (
                            <TouchableOpacity key={meeting.id} style={styles.meetingCard}>
                                <View style={styles.meetingCardBody}>
                                    <Text style={styles.meetingTitle} numberOfLines={2}>{meeting.title}</Text>
                                    <View style={styles.iconContainer}>
                                        {/* Use Ant Design icons for participants and likes */}
                                        <AntDesign name="user" size={18} color="white" />
                                        <Text style={styles.textWhite}> {meeting.participants}</Text>
                                        <Text style={styles.iconSeparator}> | </Text>
                                        <AntDesign name="hearto" size={18} color="white" />
                                        <Text style={styles.textWhite}> {meeting.hearts}</Text>
                                    </View>

                                </View>
                                <View style={styles.meetingCardHeader}>
                                    <Text style={styles.textWhite}>이름: {meeting.organizer}</Text>
                                    <Text style={styles.textWhite}>닉네임: {meeting.nickname}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>


                {/* Additional Section */}
                <View style={styles.additionalSection}>
                    <Text style={styles.additionalSectionText}>더 많은 모임을{'\n'} 살펴볼까요?</Text>
                    <Image source={img} style={styles.img}></Image>
                    <TouchableOpacity style={styles.arrowButton} onPress={handleArrowButtonPress}>
                        <MaterialCommunityIcons name="arrow-right" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                {/* Filter Buttons */}
                <View style={styles.filterButtons}>
                    <TouchableOpacity
                        style={[styles.filterButton, filter === "all" && styles.activeFilter]}
                        onPress={() => handleFilterChange("all")}
                    >
                        <Text style={styles.filterButtonText}>recommend</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.filterButton, filter === "popular" && styles.activeFilter]}
                        onPress={() => handleFilterChange("popular")}
                    >
                        <Text style={styles.filterButtonText}>Popular</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.filterButton, filter === "recent" && styles.activeFilter]}
                        onPress={() => handleFilterChange("recent")}
                    >
                        <Text style={styles.filterButtonText}>Recent</Text>
                    </TouchableOpacity>
                </View>

                {/* Meetings List */}
                <ScrollView>
                    {filteredMeetings.map((meeting) => (
                        <TouchableOpacity key={meeting.id} style={styles.meetingCardAll}>
                            <Text style={styles.meetingTitle}>{meeting.title}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </ScrollView>
            {/* Bottom Tabs */}
            <View style={styles.bottomTabs}>
                <TouchableOpacity style={styles.bottomTab}>
                    <MaterialCommunityIcons name="account-search" size={24} color="white" />
                    <Text style={styles.bottomTabText}>모임찾기</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomTab}>
                    <MaterialCommunityIcons name="chat" size={24} color="white" />
                    <Text style={styles.bottomTabText}>채팅</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomTab}>
                    <MaterialCommunityIcons name="truck" size={24} color="white" />
                    <Text style={styles.bottomTabText}>대여</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomTab}>
                    <MaterialCommunityIcons name="bookmark" size={24} color="white" />
                    <Text style={styles.bottomTabText}>마이탭</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16,
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#1b444b'
    },
    searchBar: {
        marginBottom: 16,
    },
    searchInput: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        paddingLeft: 10,
    },
    topMeetings: {
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
        color: 'black'
    },
    filterButtons: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 16,
    },
    filterButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#e0e0e0",
    },
    activeFilter: {
        backgroundColor: "#e0e0e0",
    },
    filterButtonText: {
        fontWeight: "bold",
    },
    meetingCard: {
        width: 200,
        height: 250,
        backgroundColor: "#d4d0c4",
        borderRadius: 8,
        marginHorizontal: 8,
        marginBottom: 8,
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 8,
    },
    meetingCardHeader: {
        alignItems: "flex-end",
    },
    meetingCardBody: {
        alignItems: "flex-start",
    },
    meetingCardAll: {
        width: "100%",
        height: 100,
        backgroundColor: "#e0e0e0",
        borderRadius: 8,
        marginHorizontal: 8,
        marginBottom: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    meetingTitle: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "left",
        marginBottom: 8,
        color: "white",
    },
    textWhite: {
        color: "white",
    },
    additionalSection: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 16,
    },
    additionalSectionText: {
        fontSize: 20,
        marginRight: 8,
        color: "black",
    },
    arrowButton: {
        padding: 8,
        borderRadius: 4,
        backgroundColor: "#d4d0c4",
    },
    img: {
        width: 150,
        height: 150
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconSeparator: {
        marginHorizontal: 4,
    },

    bottomTabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#8d8b81', 
        paddingVertical: 8,
        marginHorizontal: -16, 
    },
    bottomTab: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 8,
    },
    bottomTabText: {
        color: 'white',
        fontSize: 10,
    },


});

export default  ClubStart;
