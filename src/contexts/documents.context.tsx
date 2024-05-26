import React, { useEffect, useState } from 'react';
import { DocumentType, INITIAL_DOCUMENTS } from '../consts';
import { DocumentContextType } from "../consts";


interface DocumentContextProps {
  children: React.ReactNode;
}

export const DocumentContext = React.createContext<DocumentContextType>({
  documents: [],
  setLabels: () => {},
  fetchDocuments: () => { },
});

export const DocumentContextProvider: React.FC<DocumentContextProps> = ({ children }) => {
  const [documents, setDocuments] = useState<DocumentType[]>(() => {
    const temp = localStorage.getItem("documents") ?? ""
    if (temp) {
      const documents = JSON.parse(temp);
      return documents;
    } else {
      return INITIAL_DOCUMENTS.slice(0, 20);
    }
  });
  const setLabels = (labels: string[], id: number) => {
    const newDocuments = documents.map(document => {
      if (document.id == id) {
        document.labels = labels;
      }
      return document;
    })
    setDocuments(newDocuments);
  }

  const fetchDocuments = (id: number) => {
    const newDocuments = INITIAL_DOCUMENTS.slice(id, id + 20);
    setDocuments((previousDocuments) => {
      const documents = [...previousDocuments];
      return [...documents, ...newDocuments];
    })
  }

  const saveDocumentsToLocalStorage = (documents : DocumentType[]) => {
    localStorage.removeItem('documents');
    localStorage.setItem('documents', JSON.stringify(documents));
  }
  // const loadDocumentsFromLocalStorage = () => {
  //   const documents = JSON.parse(localStorage.getItem("documents") ?? "");
  //   setDocuments(documents);
  // }
  const documentsState: DocumentContextType = {
    documents: documents,
    setLabels: setLabels,
    fetchDocuments: fetchDocuments,
  }

  // useEffect(() => {
  //   loadDocumentsFromLocalStorage();
  // }, []);

  useEffect(() => {
    saveDocumentsToLocalStorage(documents);
  }, [documents]);


  return (
    <DocumentContext.Provider value={documentsState}>
      {children}
    </DocumentContext.Provider>
  )
}

