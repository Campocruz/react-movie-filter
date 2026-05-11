import { useEffect, useState } from "react";
import movieList from "../assets/data/movieList"
import MainSelectList from "./MainSelectList";
import MainMovieList from "./MainMovielist";
export default function AppMain() {

  const [selcetGenre, setSelectGenre] = useState("null")
  const [renderList, setRenderList] = useState([])

  function selectedGenre(e) {
    setSelectGenre(e.target.value)
  }

  useEffect(() => {
    if (selcetGenre === "null") {
      setRenderList(movieList)
    } else {
      const filteredList = movieList.filter((movie) => movie.genre === selcetGenre)
      setRenderList(filteredList)
    }
  }, [selcetGenre])

  return (
    <>
      <div className="container">
        <section>
          <div className="row">
            <div className="col-md-2">
              <MainSelectList movieList={movieList} onSelectedGenre={selectedGenre} />
            </div>
          </div>
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
          </div>
        </section>
      </div>
    </>
  )
}