import { useContext, useRef } from "react";
import { Container, DialogContent, TextField, Text, SubmitButtonBar, SubmitButton } from "./styles"
import { DocumentContext } from "../../../contexts";
import { useNavigate } from "react-router-dom";
import { useOutsideAlerter } from "../../../hooks";

interface DialogComponentProps {
  openDialog: (isOpened: boolean) => void;
  labels: string[];
  id: number;
  method: string;
}

export const DialogComponent: React.FC<DialogComponentProps> = ({ openDialog , labels, id, method }) => {
  const props = useContext(DocumentContext);
  const navigate = useNavigate();
  const ref = useRef(null);
  useOutsideAlerter(ref, openDialog);

  const onSubmit = () => {
    props.setLabels(labels, id);
    {method == "goToFirst" && navigate(`/documents/${0}`)}
    {method == "goToNext" &&  navigate(`/documents/${Math.min(id + 1, props.documents.length - 1)}`)}
    {method == "goToPrevious" &&  navigate(`/documents/${Math.max(id - 1, 0)}`)}
    {method == "goToLast" && navigate(`/documents/${props.documents.length - 1}`)} 
    openDialog(false);
  }

  const onCancel = () => {
    {method == "goToFirst" && navigate(`/documents/${0}`)}
    {method == "goToNext" &&  navigate(`/documents/${Math.min(id + 1, props.documents.length - 1)}`)}
    {method == "goToPrevious" &&  navigate(`/documents/${Math.max(id - 1, 0)}`)}
    {method == "goToLast" && navigate(`/documents/${props.documents.length - 1}`)}
    openDialog(false);
  }
  return (
    <Container >
      <DialogContent ref = {ref}>
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