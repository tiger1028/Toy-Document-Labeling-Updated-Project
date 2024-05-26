import { useContext, useEffect, useState } from "react";
import { Container, TextField, Ticket } from "./styles";
import { DocumentContext } from "contexts";
import { DocumentType } from "consts";
import { useNavigate } from "react-router-dom";

export const DocumentsComponent: React.FC = () => {
  const props = useContext(DocumentContext);
  const [documents, setDocuments] = useState<DocumentType[]>([]);
  const navigate = useNavigate();
  const getDocument = (index: number) => {
    navigate(`/documents/${index}`);
  }

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const e = event.currentTarget;
    if (e.scrollHeight - e.scrollTop === e.clientHeight) {
      props.fetchDocuments(documents.length);
    }
  }

  useEffect(() => {
    setDocuments(props.documents);
  }, [props.documents]);

  return (
    <Container onScroll = {handleScroll}>
      {documents.map((document, index) => (
        <Ticket key = {index} onClick={() => getDocument(index)}>
          <TextField> {index + 1} : {document.title}</TextField>
        </Ticket>
      ))}
    </Container>
  )
}