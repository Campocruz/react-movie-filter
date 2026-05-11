import { useEffect, useState } from "react";
import movieList from "../assets/data/movieList"
import MainSelectList from "./MainSelectList";
export default function AppMain() {

  const [selcetGenre, setSelectGenre] = useState("")

  function selectedGenre(e) {
    setSelectGenre(e.target.value)
  }

  useEffect(() => {
    if (selcetGenre !== "") { console.log(selcetGenre); }
  }, [selcetGenre])

  return (
    <>
      <div className="container">
        <div className="col-md-2">
          <MainSelectList movieList={movieList} onSelectedGenre={selectedGenre} />
        </div>
      </div>
    </>
  )
}