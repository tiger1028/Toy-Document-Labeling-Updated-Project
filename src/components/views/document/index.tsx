import React, { useContext, useEffect, useState } from "react"
import { ButtonDiv, Container, ContentArea, Description, Input, Item, Label, LabelArea, LabelContent, LabelInputSection, LinkButton,  PageButton,  PageButtonBar,  SubmitButton,  SubmitButtonBar, SuggestButton,  Title } from "./styles"
import { DocumentContext } from "../../../contexts"
import { DocumentType } from "../../../consts"
import { useNavigate, useParams } from "react-router-dom"

export const DocumentComponent: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const documentId = parseInt(id ?? "");
  const props = useContext(DocumentContext);
  const pageButtonLabels = ["<<", "<", ">", ">>"];
  const [labels, setLabels] = useState<string[]>([]);
  const [label, setLabel] =useState<string>("")
  const [document, setDocument] = useState<DocumentType>(props.documents[documentId] ?? {});
 
  const getFirstDocument = () => navigate(`/documents/${0}`);

  const getPreviousDocument = () => {
    if(documentId - 1 >= 0)
      navigate(`/documents/${documentId - 1}`);
  }

  const getNextDocument = () => {
    if(documentId + 1 <= props.documents.length -1)
    navigate(`/documents/${documentId + 1}`);
  }

  const getLastDocument = () => navigate(`/documents/${props.documents.length -1}`);
  
  const handleEnterKeyPress = (e : React.KeyboardEvent) => {
    if (e.key === "Enter" && label !== "") {
      labels.push(label);
      setLabels(labels);
      setLabel("");
    }
  }


  const deleteLabel = (index: number) => {
    setLabels((previousLabels) => {
      const newLabels = [...previousLabels];
      newLabels.splice(index, 1);
      return newLabels;
    })
  }

  useEffect(() => {
    setDocument(props.documents[documentId]);
  }, [documentId]);
  
  return (
    <Container>
      <ContentArea>
        <Title>{document.title}</Title>
        <Description>{document.body}</Description>
        <LinkButton href={document.url} target="blank">Go to article</LinkButton>
        <LabelContent>
          <LabelInputSection>
            <Label >Label</Label>
            <Input
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              onKeyDown={handleEnterKeyPress}
            />
          </LabelInputSection>
          <LabelArea>
            {labels.map((label, index) => (
              <Item key={index}>
                <label>{label}</label>
                <button onClick={() => deleteLabel(index)}></button>
              </Item>
            ))}
          </LabelArea>
        </LabelContent>
        <SuggestButton>Suggest</SuggestButton>
        <ButtonDiv>
          <PageButtonBar>
            <PageButton onClick={getFirstDocument}>{pageButtonLabels[0]}</PageButton>
            <PageButton onClick={getPreviousDocument}>{pageButtonLabels[1]}</PageButton>
            <PageButton onClick={getNextDocument}>{pageButtonLabels[2]}</PageButton>
            <PageButton onClick={getLastDocument}>{pageButtonLabels[3]}</PageButton>
          </PageButtonBar>
          <SubmitButtonBar>
            <SubmitButton>Save</SubmitButton>
            <SubmitButton>Reset</SubmitButton>
          </SubmitButtonBar>
        </ButtonDiv>
      </ContentArea>
    </Container>
  )
}