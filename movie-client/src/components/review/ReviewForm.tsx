import {Form,Button} from 'react-bootstrap';

interface ReviewFormProps {
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  revText: React.RefObject<HTMLTextAreaElement>;
  labelText: string,
}
const ReviewForm = ({handleSubmit,revText,labelText} :ReviewFormProps) => {
  return (

    <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{labelText}</Form.Label>
            <Form.Control ref={revText} as="textarea" rows={3}  />
        </Form.Group>
        <Button variant="outline-info" onClick={handleSubmit}>Submit</Button>
    </Form>   

  )
}

export default ReviewForm