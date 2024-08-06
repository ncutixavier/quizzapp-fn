import { gql } from '@apollo/client';

export const GET_QUESTIONS = gql`
  query GetQuestions {
    getQuestions {
      id
      title
      body
    }
  }
`;
