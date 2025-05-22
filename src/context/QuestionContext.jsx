import { createContext, useReducer } from 'react';
import { initialState, questionsReducer } from '../reducers/QuestionsReducer';

// eslint-disable-next-line react-refresh/only-export-components
export const QuestionContext = createContext();

export default function QuestionProvider({ children }) {
  const [state, dispatch] = useReducer(questionsReducer, initialState);

  return (
    <QuestionContext.Provider value={{ state, dispatch }}>
      {children}
    </QuestionContext.Provider>
  );
}
