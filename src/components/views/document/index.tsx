import React, { useContext, useEffect, useState } from "react";
import { ButtonDiv, CloseButton, ItemLabel, Circle, Container, ContentArea, Description, Input, Item, Label, LabelArea, LabelContent, LabelInputSection, LinkButton, NumberContent, PageButton, PageButtonBar, SubmitButton, SubmitButtonBar, SuggestArea, SuggestButton, Title, TitleArea } from "./styles";
import { DocumentContext } from "contexts";
import { DocumentType } from "consts";
import { useNavigate, useParams } from "react-router-dom";
import { DialogComponent, SuggestListComponent } from "components";

export const DocumentComponent: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const documentId = parseInt(id ?? "");
  const props = useContext(DocumentContext);
  const pageButtonLabels = ["<<", "<", ">", ">>"];
  const [inputLabels, setInputLabels] = useState<string[]>([]);
  const [label, setLabel] = useState<string>("")
  const [isDialogOpened, setIsDialogOpened] = useState<boolean>(false);
  const [isSuggestListOpened, setIsSuggestListOpened] = useState<boolean>(false);
  const [method, setMethod] = useState<string>("");
  const [document, setDocument] = useState<DocumentType>(props.documents[documentId] ?? {});

  const goToDocumentHandler = (method: string) => {
    const inheritedDocumentLabels = (props.documents[documentId].labels ?? []);
    if (inheritedDocumentLabels.toString() !== inputLabels.toString()) {
      setMethod(method);
      setIsDialogOpened(true);
    }
    else {
      {method == "goToFirst" && navigate(`/documents/${0}`)}
      {method == "goToNext" &&  navigate(`/documents/${Math.min(documentId + 1, props.documents.length - 1)}`)}
      {method == "goToPrevious" &&  navigate(`/documents/${Math.max(documentId - 1, 0)}`)}
      {method == "goToLast" && navigate(`/documents/${props.documents.length - 1}`)}
    }
  }
  
  const handleEnterKeyPress = (e : React.KeyboardEvent) => {
    if (e.key === "Enter" && label !== "" && inputLabels.indexOf(label) == -1) {
      setInputLabels([...inputLabels, label]);
      setLabel("");
    }
  }

  const deleteLabel = (index: number) => {
    setInputLabels((previousLabels) => {
      const newLabels = [...previousLabels];
      newLabels.splice(index, 1);
      return newLabels;
    })
  }

  const onSave = () => {
    const inheritedDocumentLabels = (props.documents[documentId].labels ?? []);
    if (inheritedDocumentLabels.toString() !== inputLabels.toString()) {
      setMethod("current")
      setIsDialogOpened(true);
    }
  }

  const onReset = () => {
    setInputLabels([]);
  }

  const openDialog = (isOpened : boolean) => {
    setIsDialogOpened(isOpened);
  }

  const openSuggestList = (isOpened: boolean) => {
    setIsSuggestListOpened(isOpened);
  }

  const getSuggestLabels = (labels: string[]) => {
    const unrepeatedLabels: string[] = [];
    labels.map(label => {
      if (inputLabels.indexOf(label) == -1) {
        unrepeatedLabels.push(label);
      }
    })
    setInputLabels([...inputLabels, ...unrepeatedLabels]);
  }

  const onSuggestButton = () => {
    setIsSuggestListOpened(true);
  }

  useEffect(() => {
    setDocument(props.documents[documentId]);
    setInputLabels(props.documents[documentId].labels ?? []);
  }, [props.documents, documentId]);

  return (
    <Container>
      <ContentArea>
        <TitleArea>
          <NumberContent>
            <Circle>{documentId + 1}</Circle>
          </NumberContent>
          <Title>{document.title}</Title>
        </TitleArea>
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
            {inputLabels.map((label, index) => (
              <Item key={index}>
                <ItemLabel>{label}</ItemLabel>
                <CloseButton onClick={() => deleteLabel(index)}></CloseButton>
              </Item>
            ))}    
          </LabelArea>
        </LabelContent>
        <SuggestArea>
          <SuggestButton onClick={onSuggestButton}>Suggest</SuggestButton>
          {isSuggestListOpened && <SuggestListComponent openSuggestList={openSuggestList} getSuggestLabels={getSuggestLabels} />}
        </SuggestArea>
        <ButtonDiv>
          <PageButtonBar>
            <PageButton onClick={() => goToDocumentHandler("goToFirst")}>{pageButtonLabels[0]}</PageButton>
            <PageButton onClick={() => goToDocumentHandler("goToPrevious")}>{pageButtonLabels[1]}</PageButton>
            <PageButton onClick={() => goToDocumentHandler("goToNext")}>{pageButtonLabels[2]}</PageButton>
            <PageButton onClick={() => goToDocumentHandler("goToLast")}>{pageButtonLabels[3]}</PageButton>
          </PageButtonBar>
          <SubmitButtonBar>
            <SubmitButton onClick={onSave}>Save</SubmitButton>
            <SubmitButton onClick= {onReset}>Reset</SubmitButton>
          </SubmitButtonBar>
        </ButtonDiv>
      </ContentArea>
      {isDialogOpened && <DialogComponent openDialog={openDialog} labels={inputLabels} id={documentId} method={method} />}
    </Container>
  )
}