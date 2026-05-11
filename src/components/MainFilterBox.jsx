import MainSelectList from "./MainSelectList"
import FormInputText from "./FormInputText"

export default function MainFilterBox({ onSetSelectGenre, onSetRenderList, movieList }) {

  function selectedGenre(e) {
    onSetSelectGenre(e.target.value)
  }

  function findTitle(inputTitle) {
    if (inputTitle === "") {
      onSetRenderList(movieList)
    } else {
      const filteredTitle = movieList.filter((movie) => movie.title.toLowerCase() === inputTitle.toLowerCase())
      onSetRenderList(filteredTitle)
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-md-2">
          <MainSelectList movieList={movieList} onSelectedGenre={selectedGenre} />
        </div>
        <div className="col-md-2">
          <FormInputText onFindTitle={findTitle} />
        </div>
      </div>
    </>
  )
}