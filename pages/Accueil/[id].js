import styles from "./details.module.scss";
import Card from "../../components/shared/Card";
import CardHuman from "../../components/shared/CardHuman";
import ReactPlayer from "react-player/youtube";
import axios from "axios";
const Details = ({ movieDetail, videoTranding, similarMovies, castigTeam }) => {
  return (
    <section className={styles.mainContenair}>
      <div className={styles.videoContenair}>
        <ReactPlayer
          url={`www.youtube.com/embed/${videoTranding[0].key}`}
          className={styles.video}
          style={({ height: "40vh" }, { width: "100vw" })}
          controls={true}
        />
      </div>

      <div className={styles.details}>
        <h2 className={styles.title}>{movieDetail.title}</h2>
        <div className={styles.icones}>
          {/* <h5 className={styles.iconeItem}>
            <Icon icon="bx:bx-time" />
            <span>8h 30</span>
          </h5> */}
        </div>
      </div>
      <h3>Overview</h3>
      <p>{movieDetail.overview}</p>
      <div className={styles.acteurs}>
        <h2>Acteurs</h2>
        <div className={styles.cardWrapper}>
          {castigTeam.map(({ name, profile_path, id }) => {
            return <CardHuman key={id} title={name} cover={profile_path} />;
          })}
        </div>
      </div>
      <div className={styles.similar}>
        <h2>Contenus similaires</h2>
        <div className={styles.cardWrapper}>
          {similarMovies.map(({ title, backdrop_path, id }) => {
            return <Card key={id} title={title} cover={backdrop_path} />;
          })}
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps({ params }) {
  const res = await axios.all([
    axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=e2a2f53fe94c336a47e632ddb6b9fc26&language=en-US`
    ),
    axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=e2a2f53fe94c336a47e632ddb6b9fc26&language=en-US&page=1`
    ),
    axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=e2a2f53fe94c336a47e632ddb6b9fc26&language=en-US`
    ),
    axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=e2a2f53fe94c336a47e632ddb6b9fc26&language=en-US`
    ),
  ]);

  const video = res[0].data.results;
  const similar = res[1].data.results.slice(0, 8);
  const movieDet = res[2].data;
  const casting = res[3].data.cast.slice(0, 8);

  //   if (!dataMovies && !dataTv) {
  //     return {
  //       notFound: true,
  //     };
  //   }

  return {
    props: {
      movieDetail: movieDet,
      similarMovies: similar,
      videoTranding: video,
      castigTeam: casting,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    // revalidate: 10, // In seconds
  };
}

export default Details;
