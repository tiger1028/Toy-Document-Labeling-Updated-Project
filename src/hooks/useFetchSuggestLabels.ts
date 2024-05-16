import { useEffect, useState } from "react";
import { INITIAL_SUGGESTLABELS } from "../consts";

export const useFetchSuggestLabels = () => {
  const [suggestLabels, setSuggestLabels] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      const array: string[] = INITIAL_SUGGESTLABELS;
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      setSuggestLabels(array.slice(0, 4));
      setIsLoading(false);
    }, 2000);
  }, []);
  return { suggestLabels, isLoading };
}