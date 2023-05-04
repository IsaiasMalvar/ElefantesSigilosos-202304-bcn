import axios from "axios";
import { useEffect, useState } from "react";

const baseURL = "http://localhost:4000/cards";

const useAxios = () => {
  const [card, setCard] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCard(response.data);
    });
  }, []);

  if (!card) return "Card not found";

  return { card };
};

export default useAxios;
