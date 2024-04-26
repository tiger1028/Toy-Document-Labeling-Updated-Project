import { useContext } from "react"
import { Container, TextField, Ticket } from "./styles"
import { DocumentContext } from "../../../contexts";
import { useNavigate } from "react-router-dom";

export const DocumentsComponent: React.FC = () => {
  const props = useContext(DocumentContext);
  const navigate = useNavigate();
  const getDocument = (index: number) => {
    navigate(`/documents/${index}`);
  }
  return (
    <Container>
      {props.documents.map((document, index) => (
        <Ticket key = {index} onClick={() => getDocument(index)}>
          <TextField> {index + 1} : {document.title}</TextField>
        </Ticket>
      ))}
    </Container>
  )
}