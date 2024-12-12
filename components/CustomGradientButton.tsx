import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons'; // Ensure you have react-native-vector-icons installed

interface GradientButtonProps {
    title: string;
    onPress: () => void;
}

const CustomGradientButton: React.FC<GradientButtonProps> = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.buttonWrapper} onPress={onPress}>
            <LinearGradient
                colors={['#29b1c8', '#178090']}
                start={[1, 0]}
                end={[0, 0]}
                style={styles.buttonContainer}
            >
                <View style={styles.buttonContent}>
                    <Text style={styles.buttonText}>{title}</Text>
                    <View style={styles.iconContainer}>
                        <Icon name="arrow-forward" size={16} color="#fff" />
                    </View>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonWrapper: {
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonContainer: {
        width: 250,
        height: 50,
        borderRadius: 25,
        justifyContent: 'space-around',
        alignItems: 'center',
        overflow: 'hidden', // Ensures content stays within rounded borders
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '85%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    iconContainer: {
        backgroundColor: '#00274D',
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CustomGradientButton;
