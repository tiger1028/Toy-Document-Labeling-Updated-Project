import { WithLayout } from "../../components/common"
import { DashBoardComponent } from "../../components/views"

const DashBoard: React.FC = () => {
  return <DashBoardComponent/>
}
export const DashBoardPage = WithLayout(DashBoard);