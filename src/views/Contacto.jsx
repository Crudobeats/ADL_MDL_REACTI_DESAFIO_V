import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Contacto() {
  return (
    <Form className='contacto'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ingresa tu Email:</Form.Label>
        <Form.Control type="email" placeholder="Ingresa tu email" />
        <Form.Text className="text-muted">
          Recuerda revisar tu bandeja de Spam.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Ingresa tu N° de Teléfono:</Form.Label>
        <Form.Control type="text" placeholder="Ingresa tu N° Telefónico" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Confirma que eres humano" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}
