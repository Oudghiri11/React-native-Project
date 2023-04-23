import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';

export default function DetailsScreen({ navigation }) {
    const { colors } = useTheme();

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.profileContainer}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
                />
                <View style={styles.profileInfo}>
                    <Text style={[styles.profileText, { color: colors.primary, fontWeight: 'bold' }]}>John Doe</Text>
                    <Text style={styles.profileText}>New York, USA</Text>
                </View>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Profile</Text>
                <View style={{ marginVertical: 20 }}>
                    <Text style={{ fontSize: 20, color: colors.accent, marginTop: 10, fontWeight: 'bold' }}>Phone Number: 1234567890</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>Job: Enginer</Text>
                </View>
                <Image
                    style={{ width: 200, height: 200, marginBottom: 20 }}
                    source={{ uri: 'https://images.squarespace-cdn.com/content/v1/54ff63f0e4b0bafce6932642/1632186411348-Y0DDZOI477SJE85WQLBC/New+York+Look+Around+Area.gif?format=1000w' }}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={{
                        borderWidth: 1,
                        borderColor: colors.primary,
                        borderRadius: 5,
                        padding: 10,
                        backgroundColor: colors.primary,
                        marginTop: 20
                    }}>
                    <Text style={{ color: '#fff', fontSize: 18 }}>Back to Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    profileContainer: {
        backgroundColor: '#fff',
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 20
    },
    profileInfo: {
        flexDirection: 'column'
    },
    profileText: {
        fontSize: 20,
        marginBottom: 5
    }
});
