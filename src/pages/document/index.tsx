import { WithLayout } from "../../components/common"
import { DocumentComponent } from "../../components/views"

const Document: React.FC = () => {
  return <DocumentComponent/>
}

export const DocumentPage = WithLayout(Document);