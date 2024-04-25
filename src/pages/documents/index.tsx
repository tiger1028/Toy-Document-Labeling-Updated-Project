import { WithLayout } from "../../components/common"
import { DocumentsComponent } from "../../components/views"

const Documents: React.FC = () => {
  return <DocumentsComponent/>
}

export const DocumentsPage = WithLayout(Documents);