import { useEffect, useState } from "react";
import movieList from "../assets/data/movieList"
import MainMovieList from "./MainMovielist";
import MainFilterBox from "./MainFilterBox";
export default function AppMain() {

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

  return (
    <>
      <div className="container">
        <section>
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
          </div>
        </section>
      </div>
    </>
  )
}