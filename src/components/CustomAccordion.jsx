import { Accordion } from 'react-bootstrap';
import Question from './Question';
import '../assets/styles/customAccordion.scss';
import { useContext } from 'react';
import { QuestionContext } from '../context/QuestionContext';

export default function CustomAccordion({ category }) {
  const { state } = useContext(QuestionContext);

  const filteredQuestions = state.filter(
    (question) => category === 'all' || question.category === category
  );

  return (
    <Accordion>
      {filteredQuestions.map((question) => (
        <Question question={question} key={question.id} />
      ))}
    </Accordion>
  );
}
