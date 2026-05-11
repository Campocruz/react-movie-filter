import { useEffect, useState } from "react";

export default function MainSelectList({ movieList, onSelectedGenre }) {

  const [genreList, setGenreList] = useState([]);

  function createList(obj) {
    const list = [];
    obj.map(o => {
      if (!list.includes(o.genre)) { list.push(o.genre) }
    })
    setGenreList(list)
  }

  useEffect(() => {
    createList(movieList)
  }, [])

  return (
    <>
      <label htmlFor="inputState" className="form-label">Genere</label>
      <select name="inputState" className="form-select" defaultValue={null} onChange={onSelectedGenre}>
        <option value={null}>null</option>
        {
          genreList.map((genre, index) => <option key={index} value={genre}>{genre}</option>)
        }
      </select>
    </>
  )
}