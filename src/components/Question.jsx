import { Accordion, Button, Stack } from 'react-bootstrap';
import '../assets/styles/question.scss';
import { useContext } from 'react';
import { QuestionContext } from '../context/QuestionContext';

export default function Question({ question }) {
  const { dispatch } = useContext(QuestionContext);

  const handleResponse = (questionId, response) => {
    dispatch({ type: 'response', questionId, response });
  };

  const btnIsDisabled = (rep) => {
    return rep === false || rep === true;
  };

  const displayResponse = (rep) => {
    if (rep === false) {
      return 'Faux';
    } else if (rep === true) {
      return 'Vrai';
    }
    return '';
  };

  return (
    <Accordion.Item eventKey={question.id} key={question.id}>
      <Accordion.Header>
        <div className='accordion-question-wrapper'>
          <span>{question.question}</span>
          {question.validation !== undefined && (
            <span className={question.validation ? 'true' : 'false'}>
              {displayResponse(question.validation)}
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
              disabled={btnIsDisabled(question.validation)}
              variant='success'
              onClick={() => handleResponse(question.id, true)}
            >
              Juste
            </Button>
            <Button
              disabled={btnIsDisabled(question.validation)}
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
