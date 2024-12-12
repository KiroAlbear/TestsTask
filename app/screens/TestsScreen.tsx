import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './Arguments/ScreenArguments';
// import { ScrollView } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native-virtualized-view'

type TestsScreenRouteProp = RouteProp<RootStackParamList, 'TestsScreen'>;

const TestsScreen = ({ route }: { route: TestsScreenRouteProp }) => {
    const tests = route.params; // Access the passed list
    // console.log("Arguments Received" + tests);
    return (
        <ScrollView>

            <View style={styles.container}>
                <Text style={styles.title}>Moderate Tests</Text>
                <FlatList
                    data={tests.firstList}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <Text style={styles.itemTitle}>{item.title}</Text>
                            <Text style={styles.itemSubtitle}> {item.subtitle}</Text>
                            <Text style={styles.itemPrice}> {item.price}</Text>
                        </View>
                    )}
                />
                <Text style={styles.title}>Unmoderate Tests</Text>
                <FlatList
                    data={tests.secondList}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <Text style={styles.itemTitle}>{item.title}</Text>
                            <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
                            <Text style={styles.itemPrice}>{item.price}</Text>
                        </View>
                    )}
                />
            </View>

        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    itemContainer: {
        marginBottom: 15,
        padding: 15,
        marginHorizontal: 10,
        backgroundColor: '#f4f4f4', // Light background for better readability
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 10, // Shadow effect on Android
    },
    itemTitle: {

        fontSize: 20, // Larger font size for the title
        fontWeight: 'bold',
        color: '#333', // Darker text for better contrast
        marginBottom: 5,
    },
    itemSubtitle: {
        fontSize: 16, // Slightly larger font size for the subtitle
        color: '#666', // Gray text for a lighter tone
        marginBottom: 5,
    },
    itemPrice: {
        fontSize: 18, // Larger font size for the price
        fontWeight: '600', // Slightly bold for emphasis
        color: '#007BFF', // A friendly blue color for the price
    },
});

export default TestsScreen;
