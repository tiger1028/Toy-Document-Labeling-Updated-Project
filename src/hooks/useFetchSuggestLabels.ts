import { useEffect, useState } from "react";
import { INITIAL_SUGGESTLABELS } from "consts";

export const useFetchSuggestLabels = () => {
  const [suggestLabels, setSuggestLabels] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      const initialSuggestLabels: string[] = INITIAL_SUGGESTLABELS;
      for (let i = initialSuggestLabels.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [initialSuggestLabels[i], initialSuggestLabels[j]] = [initialSuggestLabels[j], initialSuggestLabels[i]];
      }
      setSuggestLabels(initialSuggestLabels.slice(0, 4));
      setIsLoading(false);
    }, 2000);
  }, []);
  return { suggestLabels, isLoading };
}