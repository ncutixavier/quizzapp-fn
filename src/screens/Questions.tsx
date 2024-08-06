import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useQuery } from '@apollo/client';
import { GetQuestions } from '../graphql/types/question.type';
import { GET_QUESTIONS } from '../graphql/queries/question.query';

const Questions: React.FC = () => {
    const { loading, error, data } = useQuery<GetQuestions>(GET_QUESTIONS);
  
    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text style={styles.error}>Error: {error.message}</Text>;
  
    return (
      <View>
        {data?.getQuestions.map(question => (
          <View key={question.id}>
            <Text>{question.title}</Text>
            <Text>{question.body}</Text>
          </View>
        ))}
      </View>
    );
  };


const styles = StyleSheet.create({
    error: {
      color: "#fff",
      fontSize: 16
    }
  });
  

export default Questions
