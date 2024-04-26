import { DocumentType } from "./documents";

export interface DocumentContextType {
  documents: DocumentType[];
  setLabels: (labels: string [], id: number) => void;
}