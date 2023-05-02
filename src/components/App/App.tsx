import ContainerStyled from "../../styles/ContainerStyled/ContainerStyled";
import Layout from "../Layout/Layout";
import Navbar from "../Navbar/Navbar";

const App = (): JSX.Element => {
  return (
    <>
      <ContainerStyled>
        <Layout />
        <Navbar />
      </ContainerStyled>
    </>
  );
};

export default App;
