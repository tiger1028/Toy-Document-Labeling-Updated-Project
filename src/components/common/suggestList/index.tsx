import { CheckMark, ListItem, SubmitArea, SubmitButton, SuggestListContainer } from "./styles"
import CheckSvg from './check.svg';
import { INITIAL_SUGGESTLABELS } from "../../../consts/suggest.labels";
import { useState } from "react";

interface SuggestListComponentProps {
  openSuggestList: (isOpened: boolean) => void;
  getSuggestLabels: (labels: string[]) => void;

}
export const SuggestListComponent: React.FC<SuggestListComponentProps> = ({openSuggestList, getSuggestLabels}) => {
  const suggestLabels = INITIAL_SUGGESTLABELS;
  const [isCheckedList, setIsCheckedList] = useState<boolean[]>([]);

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
        const updatedList = [...previousList];
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

  return (
    <SuggestListContainer>
      {suggestLabels.map((suggestLabel, index) => (
        <ListItem key={index} onClick={() => checkHandle(index)}>
          {suggestLabel}
        {isCheckedList[index] == true && <CheckMark src={CheckSvg} />}
      </ListItem>
      ))}
      <SubmitArea>
        <SubmitButton onClick={onSubmit}>Save</SubmitButton>
      </SubmitArea>
    </SuggestListContainer>
  )
}