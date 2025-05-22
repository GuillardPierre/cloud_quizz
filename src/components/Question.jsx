import { Accordion, Button, Stack } from 'react-bootstrap';
import '../assets/styles/question.scss';
import { useContext } from 'react';
import { QuestionContext } from '../context/QuestionContext';

export default function Question({ question }) {
  const { dispatch } = useContext(QuestionContext);

  const handleResponse = (questionId, response) => {
    dispatch({ type: 'response', questionId, response });
  };

  return (
    <Accordion.Item eventKey={question.id} key={question.id}>
      <Accordion.Header>
        <div className='accordion-question-wrapper'>
          <span>{question.question}</span>
          {question.validation !== null && (
            <span className={question.validation ? 'true' : 'false'}>
              {question.validation === true ? 'Vrai' : 'Faux'}
            </span>
          )}
        </div>
      </Accordion.Header>
      <Accordion.Body>
        <Stack gap={1}>
          <p>Réponse </p>
          <p> {question.answer}</p>
          <Stack direction='horizontal' gap={2}>
            <Button
              disabled={question.validation !== null}
              variant='success'
              onClick={() => handleResponse(question.id, true)}
            >
              Juste
            </Button>
            <Button
              disabled={question.validation !== null}
              variant='danger'
              onClick={() => handleResponse(question.id, false)}
            >
              Fausse
            </Button>
          </Stack>
        </Stack>
      </Accordion.Body>
    </Accordion.Item>
  );
}
