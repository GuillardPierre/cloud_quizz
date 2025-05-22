import { Accordion, Button, Col, Container, Row } from 'react-bootstrap';
import { useContext } from 'react';
import { QuestionContext } from '../context/QuestionContext';

export default function CustomAccordion({ category }) {
  const { state, dispatch } = useContext(QuestionContext);

  const filteredQuestions = state.filter(
    (question) => category === 'all' || question.category === category
  );

  const handleResponse = (questionId, response) => {
    dispatch({ type: 'response', questionId, response });
  };

  return (
    <Accordion>
      {filteredQuestions.map((question) => (
        <Accordion.Item eventKey={question.id}>
          <Accordion.Header>{question.question}</Accordion.Header>
          <Accordion.Body>
            <Container>
              <Row className='justify-content-md-center'>
                <Col xs={12} className='text-center'>
                  Réponse proposée : {question.answer}
                </Col>
              </Row>
              <Row className='justify-content-md-center'>
                {question.validation ? (
                  <Col xs={6} className='text-center'>
                    Vous avez répondu : {question.validation}{' '}
                  </Col>
                ) : (
                  <>
                    <Col xs={2}>
                      <Button
                        variant='success'
                        onClick={() => handleResponse(question.id, true)}
                      >
                        Vrai
                      </Button>
                    </Col>
                    <Col xs={2}>
                      <Button
                        variant='danger'
                        onClick={() => handleResponse(question.id, false)}
                      >
                        Faux
                      </Button>
                    </Col>
                  </>
                )}
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
