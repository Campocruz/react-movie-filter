import MovieListItem from "./MovieListItem";

export default function MainMovieList({ movieList }) {

  return (
    <>
      <ul style={{ listStyleType: "none" }}>
        {
          movieList.map((movie, index) => < MovieListItem key={index} title={movie.title} genre={movie.genre} />)
        }
      </ul>
    </>
  )
}