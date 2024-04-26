import { useContext } from "react";
import { Container, DialogContent, TextField, Text, SubmitButtonBar, SubmitButton } from "./styles"
import { DocumentContext } from "../../../contexts";
import { useNavigate } from "react-router-dom";

interface DialogComponentProps {
  openDialog: (isOpened: boolean) => void;
  labels: string[];
  id: number;
  method: string;
}

export const DialogComponent: React.FC<DialogComponentProps> = ({ openDialog , labels, id, method }) => {
  const props = useContext(DocumentContext);
  const navigate = useNavigate();
  const onSubmit = () => {
    props.setLabels(labels, id);
    {method == "goToFirst" && navigate(`/documents/${0}`)}
    {
      method == "goToNext" && (
         id + 1 <= props.documents.length - 1 ? navigate(`/documents/${id + 1}`) : navigate(`/documents/${id}`)
      )
    }
    {
      method == "goToPrevious" && (
         id -1 >=0 ? navigate(`/documents/${id - 1}`) : navigate(`/documents/${id}`)
      )
    }
    {method == "goToLast" && navigate(`/documents/${props.documents.length - 1}`)}
    
    openDialog(false);
  }

  const onCancel = () => {
    openDialog(false);
  }
  return (
    <Container>
      <DialogContent>
        <TextField>
          <Text>Do you want to save this state?</Text>
        </TextField>
        <SubmitButtonBar>
          <SubmitButton onClick={onSubmit}>Yes</SubmitButton>
          <SubmitButton onClick={onCancel}>No</SubmitButton>
        </SubmitButtonBar>
      </DialogContent>
    </Container>
  )
}