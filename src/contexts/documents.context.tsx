import React, { useState } from 'react';
import { DocumentType, INITIAL_DOCUMENTS } from '../consts';
import { DocumentContextType } from "../consts";


interface DocumentContextProps {
  children: React.ReactNode;
}

export const DocumentContext = React.createContext<DocumentContextType>({
  documents: [],
  setLabels: () => {}
});

export const DocumentContextProvider: React.FC<DocumentContextProps> = ({ children }) => {
  const [documents, setDocuments] = useState<DocumentType[]>(INITIAL_DOCUMENTS);
  const setLabels = (labels: string[], id: number) => {
    const newDocuments = documents.map(document => {
      if (document.id == id) {
        document.labels = labels;
      }
      return document;
    })
    setDocuments(newDocuments);
  }
  const documentsState: DocumentContextType = {
    documents: documents,
    setLabels: setLabels
  }
  return (
    <DocumentContext.Provider value={documentsState}>
      {children}
    </DocumentContext.Provider>
  )
}

