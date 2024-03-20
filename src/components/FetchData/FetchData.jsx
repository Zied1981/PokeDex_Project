import { useEffect, useContext } from "react";
import { GlobalFetchContext } from "../../context/context";

const FetchData = () => {
  const { setFetchContext, fetchContext } = useContext(GlobalFetchContext);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=200")
      .then((res) => res.json())
      .then((globalfetchdata) => setFetchContext(globalfetchdata.results))
      .catch((err) => console.log("fehler im fetch", err));
  }, []);
};

export default FetchData;
