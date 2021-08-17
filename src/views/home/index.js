import { useState } from "react";
import { toast } from "react-toastify";
import { Container } from "reactstrap";

import Search from "../../components/Search";
import ItemSearch from "../../components/Search/ItemSearch";
import { searchFilms } from "../../services/root";
import Loading from "../../components/loading/.";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const submitSearch = async ({ term }) => {
    try {
      setLoading(true);
      const result = await searchFilms(term);
      setData(result.data);
      setLoading(false);
    } catch (error) {
      toast.error("Erro ao fazer a busca, tente novamente");
    }
  };
  return (
    <div>
      <Container>
        <Search search={submitSearch} />
        {loading ? <Loading /> : null}
        {data?.results?.map((item, i) => (
          <ItemSearch key={i} data={item} />
        ))}
      </Container>
    </div>
  );
};

export default Home;
