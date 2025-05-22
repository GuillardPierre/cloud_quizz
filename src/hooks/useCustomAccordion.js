import { useContext } from 'react';
import { QuestionContext } from '../context/QuestionContext';

export default function useCustomAccordion(category) {
  const { state, dispatch } = useContext(QuestionContext);

  const filteredQuestions = state.filter(
    (question) => category === 'all' || question.category === category
  );

  const handleResponse = (questionId, response) => {
    dispatch({ type: 'response', questionId, response });
  };

  const btnIsDisabled = (rep) => {
    return rep === false || rep === true;
  };

  return { filteredQuestions, handleResponse, btnIsDisabled };
}
