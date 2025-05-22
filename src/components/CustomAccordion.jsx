import { Accordion, Button, Col, Container, Row, Stack } from 'react-bootstrap';
import Question from './Question';
import '../assets/styles/customAccordion.scss';
import useCustomAccordion from '../hooks/useCustomAccordion';

export default function CustomAccordion({ category }) {
  const { filteredQuestions, handleResponse, btnIsDisabled } =
    useCustomAccordion(category);

  return (
    <Accordion>
      {filteredQuestions.map((question) => (
        <Question
          question={question}
          handleResponse={handleResponse}
          btnIsDisabled={btnIsDisabled}
        />
      ))}
    </Accordion>
  );
}
