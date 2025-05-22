import data from '../assets/data/data';

export const initialState = data;

export const questionsReducer = (state, action) => {
  switch (action.type) {
    case 'response':
      return state.map((question) => {
        if (question.id === action.questionId) {
          return {
            ...question,
            validation: action.response ? 'vrai' : 'faux',
          };
        }
        return question;
      });

    default:
      return state;
  }
};
