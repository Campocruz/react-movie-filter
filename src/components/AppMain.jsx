import { useEffect, useState } from "react";
import movieList from "../assets/data/movieList"
import MainSelectList from "./MainSelectList";
import MainMovieList from "./MainMovielist";
import FormInputText from "./FormInputText";
export default function AppMain() {

  const [selcetGenre, setSelectGenre] = useState("null")
  const [renderList, setRenderList] = useState([])

  function selectedGenre(e) {
    setSelectGenre(e.target.value)
  }

  function findTitle(inputTitle) {
    const filteredTitle = movieList.filter((movie) => movie.title.toLowerCase() === inputTitle.toLowerCase())
    setRenderList(filteredTitle)
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
            <div className="col-md-2">
              <FormInputText onFindTitle={findTitle} />
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