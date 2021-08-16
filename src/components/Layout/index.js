import Footer from "./Footer";
import Header from "./Header";
import { Main } from "./styled";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;


