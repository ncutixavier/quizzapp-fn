import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useQuery } from '@apollo/client';
import { GetQuestions } from '../graphql/types/question.type';
import { GET_QUESTIONS } from '../graphql/queries/question.query';
import useTheme from '../theme/useTheme';
import { LinearGradient } from 'expo-linear-gradient';

const Questions: React.FC = () => {
    const { theme } = useTheme()
    const { loading, error, data } = useQuery<GetQuestions>(GET_QUESTIONS);

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text style={styles.error}>Error: {error.message}</Text>;

    return (
        <LinearGradient 
            colors={theme.gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{flex: 1, width: '100%'}}
        >
            {data?.getQuestions.map(question => (
                <View key={question.id}>
                    <Text style={{ color: theme.textColor }}>{question.title}</Text>
                    <Text style={{ color: theme.textColor }}>{question.body}</Text>
                </View>
            ))}
        </LinearGradient>
    );
};


const styles = StyleSheet.create({
    error: {
        color: "#fff",
        fontSize: 16
    }
});


export default Questions
