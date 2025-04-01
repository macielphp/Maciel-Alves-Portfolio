/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();


export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    skills: [],
    profile: {},
    projects: [],
    phrases: [],
    about: [],
    contact: [],
  });

  useEffect(() => {
    const gistUrl = 'https://gist.githubusercontent.com/macielphp/d17682882ed9b54e077fedaf2e4ea059/raw/944dae7892d79d3c426458ee907e96e70d683abb/gistfile1.txt';
    fetch(gistUrl)
      .then((response) => response.text())
      .then((text) => {
        try {
          const parsedData = JSON.parse(text);
          setData(parsedData);
        } catch (error) {
          console.error("Erro ao fazer o parse do JSON:", error);
        }
      })
      .catch((error) => console.error("Erro ao buscar os dados:", error));
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
