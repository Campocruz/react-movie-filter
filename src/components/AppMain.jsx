import { useEffect, useState } from "react";
import initMovieList from "../assets/data/movieList"
import MainMovieList from "./MainMovielist";
import MainFilterBox from "./MainFilterBox";
import AppFormAddItem from "./AppFormAddItem";
export default function AppMain() {

  const movieList = initMovieList

  const [selcetGenre, setSelectGenre] = useState("null")
  const [renderList, setRenderList] = useState([])

  useEffect(() => {
    if (selcetGenre === "null") {
      setRenderList(movieList)
    } else {
      const filteredList = movieList.filter((movie) => movie.genre === selcetGenre)
      setRenderList(filteredList)
    }
  }, [selcetGenre])


  function addNewMovie(e, newMovie) {
    e.preventDefault()
    setRenderList(() => [...movieList, newMovie])
  }

  return (
    <>
      <div className="container">
        <section className="text-center">
          <MainFilterBox onSetRenderList={setRenderList} onSetSelectGenre={setSelectGenre} movieList={movieList} />
        </section>

        <section>
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header text-center">
                  <h3>card list </h3>
                </div>
                <div className="card-body p-1">
                  <MainMovieList movieList={renderList} />
                </div>
              </div>
            </div>
            <div className="col">
              <AppFormAddItem onFormSubmit={addNewMovie} />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}