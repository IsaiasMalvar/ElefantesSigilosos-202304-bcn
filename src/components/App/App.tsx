import LayoutStyled from "../Layout/LayoutStyled";
import Layout from "../Layout/Layout";
import Header from "../Header/Header";

const App = (): JSX.Element => {
  return (
    <LayoutStyled>
      <Layout />
      <Header />
    </LayoutStyled>
  );
};

export default App;
