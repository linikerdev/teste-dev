import { Container } from "reactstrap";
import Search from "../../components/Search";
const Home = () => (
  <div>
    <Container>
      <Search />
    </Container>
    {/* <label>
      Choose a browser from this list:
      <input list="browsers" name="myBrowser" />
    </label>
    <datalist id="browsers">
      <option value="Chrome" />
      <option value="Firefox" />
      <option value="Internet Explorer" />
      <option value="Opera" />
      <option value="Safari" />
      <option value="Microsoft Edge" />
    </datalist> */}
  </div>
);

export default Home;
