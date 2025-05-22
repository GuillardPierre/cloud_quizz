import { Accordion } from 'react-bootstrap';
import '../assets/styles/question.scss';

export default function Question({ question, response }) {
  console.log(response);

  const displayResponse = (rep) => {
    if (rep === false) {
      return 'Faux';
    } else if (rep === true) {
      return 'Vrai';
    }
    return '';
  };

  return (
    <Accordion.Header>
      <div className='accordion-question-wrapper'>
        <p>{question}</p>
        {response !== undefined && (
          <span className={response ? 'true' : 'false'}>
            {displayResponse(response)}
          </span>
        )}
      </div>
    </Accordion.Header>
  );
}
