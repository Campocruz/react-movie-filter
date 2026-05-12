import { useState } from "react"

export default function AppFormAddItem({ onFormSubmit }) {

  const [inputValue, setInputValue] = useState({ title: "", genre: "" })

  return (
    <>
      <form onSubmit={(e) => (onFormSubmit(e, inputValue))}>
        <div className="mb-3">
          <label htmlFor="title">Titolo</label>
          <input type="text" className="form-control" name="title" value={inputValue.title} onChange={e => (setInputValue({ ...inputValue, [e.target.name]: e.target.value }))} />
          <label htmlFor="genre">Genere</label>
          <input type="text" className="form-control" name="genre" value={inputValue.genre} onChange={e => (setInputValue({ ...inputValue, [e.target.name]: e.target.value }))} />
        </div>
        <button className="btn btn-secondary w-100">New Article</button>
      </form>
    </>
  )
}