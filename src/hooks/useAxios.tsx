import axios from "axios";
import { useCallback, useContext } from "react";
import GameCardContext from "../store/contexts/GameCardsContext/GameCardsContext";
import { loadGameCardsActionCreator } from "../store/actions/gameCards/gameCardsActionCreators";

const url = axios.create({
  baseURL: "http://localhost:4000/",
});

const useAxios = () => {
  const { dispatch } = useContext(GameCardContext);

  const loadCards = useCallback(async () => {
    const response = await url.get("cards");
    dispatch(loadGameCardsActionCreator(response.data));
  }, [dispatch]);

  return {
    loadCards,
  };
};

export default useAxios;
