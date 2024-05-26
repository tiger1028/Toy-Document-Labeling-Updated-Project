import { CheckMark, Container, ListItem, SubmitArea, SubmitButton, SuggestListContainer , SpinnerMark} from "./styles"
import CheckSvg from './check.svg';
import Spinner from './Spinner.svg';
import { useRef, useState } from "react";
import { useOutsideAlerter } from "../../../hooks";
import { useFetchSuggestLabels } from "../../../hooks/useFetchSuggestLabels";
interface SuggestListComponentProps {
  openSuggestList: (isOpened: boolean) => void;
  getSuggestLabels: (labels: string[]) => void;

}
export const SuggestListComponent: React.FC<SuggestListComponentProps> = ({ openSuggestList, getSuggestLabels }) => {
  const [isCheckedList, setIsCheckedList] = useState<boolean[]>([]);
  const ref = useRef(null);
  const { suggestLabels, isLoading } = useFetchSuggestLabels();
  const checkHandle = (id: number) => {
    if (isCheckedList[id] == true) {
      setIsCheckedList((previousList) => {
        const updatedList = [...previousList];
        updatedList[id] = false;
        return updatedList;
      })
    }
    else {
      setIsCheckedList((previousList) => {
        const updatedList = [...previousList];1113
        updatedList[id] = true;
        return updatedList;
      })
    }
  }

  const onSubmit = () => {
    openSuggestList(false);
    const checkedLabels : string[] = [];
    isCheckedList.map((isChecked, index) => {
      isChecked == true && checkedLabels.push(suggestLabels[index]);
    })
    getSuggestLabels(checkedLabels);
  }

  useOutsideAlerter(ref, openSuggestList);

  return (
    <Container>
      <SuggestListContainer ref = {ref}>
        {isLoading ? <SpinnerMark src={Spinner} /> : (
          <>
          {suggestLabels.map((suggestLabel : string, index: number) => (
            <ListItem key={index} onClick={() => checkHandle(index)}>
              {suggestLabel}
            {isCheckedList[index] == true && <CheckMark src={CheckSvg} />}
          </ListItem>
          ))}
          </>
        )}
        <SubmitArea>
          <SubmitButton onClick={onSubmit}>Save</SubmitButton>
        </SubmitArea>
      </SuggestListContainer>
      </Container>
  )
}