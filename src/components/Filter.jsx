import Form from 'react-bootstrap/Form';

export default function Filter({ setCategory }) {
  return (
    <Form.Select
      aria-label='Sélectionnez la catégorie de jeu'
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value={'all'}>Toutes</option>
      <option value='Math'>Math</option>
      <option value='Science'>Sciences</option>
      <option value='Histoire'>Histoire</option>
    </Form.Select>
  );
}
