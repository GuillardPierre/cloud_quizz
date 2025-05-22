import { Accordion, Button, Col, Container, Row } from 'react-bootstrap';
import Question from './Question';
import '../assets/styles/customAccordion.scss';
import useCustomAccordion from '../hooks/useCustomAccordion';

export default function CustomAccordion({ category }) {
  const { filteredQuestions, handleResponse, btnIsDisabled } =
    useCustomAccordion(category);

  return (
    <Accordion>
      {filteredQuestions.map((question) => (
        <Accordion.Item eventKey={question.id} key={question.id}>
          <Question
            question={question.question}
            response={question.validation}
          />
          <Accordion.Body>
            <Container>
              <Row>
                <Col xs={12}>
                  <span>Réponse </span>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>{question.answer}</Col>
              </Row>
              <Row>
                <Col xs={1}>
                  <Button
                    disabled={btnIsDisabled(question.validation)}
                    variant='success'
                    onClick={() => handleResponse(question.id, true)}
                  >
                    Juste
                  </Button>
                </Col>
                <Col xs={1}>
                  <Button
                    disabled={btnIsDisabled(question.validation)}
                    variant='danger'
                    onClick={() => handleResponse(question.id, false)}
                  >
                    Fausse
                  </Button>
                </Col>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
