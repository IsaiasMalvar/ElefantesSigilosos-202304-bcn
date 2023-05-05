import axios from "axios";
import { useCallback } from "react";

const apiUrl = process.env.REACT_APP_API_URL;

const useApi = () => {
  const getCards = useCallback(async () => {
    const { data: cards } = await axios.get(`${apiUrl}/cards/?_page=1`);
    return cards;
  }, []);

  return { getCards };
};

export default useApi;
