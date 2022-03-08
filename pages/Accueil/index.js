import Cover from "../../components/All/Cover";
import Search from "../../components/All/Search";
import Tendance from "../../components/All/Tendance";
import Toptv from "../../components/All/Toptv";
import { useState } from "react";
import axios from "axios";
const Accueil = ({ dataMovies, dataTv }) => {
  const [page, setPage] = useState(1);

  const handlePage = (e) => {
    e.preventDefault();
    setPage(page + 1);
  };
  return (
    <>
      <Cover dataMovies={dataMovies} />
      <Tendance dataMovies={dataMovies} />
      <Toptv datatv={dataTv} />
      <Search />
    </>
  );
};

export async function getStaticProps(context) {
  const res = await axios.all([
    axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=e2a2f53fe94c336a47e632ddb6b9fc26&language=en-US&page=1`
    ),
    axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=e2a2f53fe94c336a47e632ddb6b9fc26&language=en-US&page=1`
    ),
  ]);

  const dataMovies = await res[0].data;
  const dataTv = await res[1].data;

  if (!dataMovies && !dataTv) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      dataMovies: dataMovies.results.slice(0, 12),
      dataTv: dataTv.results.slice(0, 12),
    },
    revalidate: 10, // will be passed to the page component as props
  };
}
export default Accueil;
