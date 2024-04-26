import React, { useContext, useEffect, useState } from "react"
import { ButtonDiv, Container, ContentArea, Description, Input, Item, Label, LabelArea, LabelContent, LabelInputSection, LinkButton,  PageButton,  PageButtonBar,  SubmitButton,  SubmitButtonBar, SuggestArea, SuggestButton,  Title } from "./styles"
import { DocumentContext } from "../../../contexts"
import { DocumentType } from "../../../consts"
import { useNavigate, useParams } from "react-router-dom"
import { DialogComponent, SuggestListComponent } from "../../common"

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
  const getFirstDocument = () => {
    const inheritedDocumentLabels = (props.documents[documentId].labels ?? []);
    if (inheritedDocumentLabels.toString() !== inputLabels.toString()) {
      setMethod("goToFirst");
      setIsDialogOpened(true);
    }
    else navigate(`/documents/${0}`);
  }

  const getPreviousDocument = () => {
    const inheritedDocumentLabels = (props.documents[documentId].labels ?? []);
    if (inheritedDocumentLabels.toString() !== inputLabels.toString()) {
      setMethod("goToPrevious");
      setIsDialogOpened(true);
    }
    else  documentId -1 >=0 ? navigate(`/documents/${documentId - 1}`) : navigate(`/documents/${documentId}`)
  }

  const getNextDocument = () => {
    const inheritedDocumentLabels = (props.documents[documentId].labels ?? []);
    if (inheritedDocumentLabels.toString() !== inputLabels.toString()) {
      setMethod("goToNext");
      setIsDialogOpened(true);
    }
    else  documentId + 1 <= props.documents.length - 1 ? navigate(`/documents/${documentId + 1}`) : navigate(`/documents/${documentId}`)
  }

  const getLastDocument = () => {
    const inheritedDocumentLabels = (props.documents[documentId].labels ?? []);
    if (inheritedDocumentLabels.toString() !== inputLabels.toString()) {
      setMethod("goToLast");
      setIsDialogOpened(true);
    }
    else navigate(`/documents/${props.documents.length - 1}`);
  }
  
  const handleEnterKeyPress = (e : React.KeyboardEvent) => {
    if (e.key === "Enter" && label !== "") {
      inputLabels.push(label);
      setInputLabels(inputLabels);
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
    setMethod("current")
    setIsDialogOpened(true);
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
    setInputLabels([...inputLabels, ...labels]);
  }
  const onSuggestButton = () => {
    setIsSuggestListOpened(true);
  }

  useEffect(() => {
    setDocument(props.documents[documentId]);
    setInputLabels(props.documents[documentId].labels ?? []);
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
            {inputLabels.map((label, index) => (
              <Item key={index}>
                <label>{label}</label>
                <button onClick={() => deleteLabel(index)}></button>
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
            <PageButton onClick={getFirstDocument}>{pageButtonLabels[0]}</PageButton>
            <PageButton onClick={getPreviousDocument}>{pageButtonLabels[1]}</PageButton>
            <PageButton onClick={getNextDocument}>{pageButtonLabels[2]}</PageButton>
            <PageButton onClick={getLastDocument}>{pageButtonLabels[3]}</PageButton>
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