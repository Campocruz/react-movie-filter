import { useState } from "react"

export default function FormInputText({ onFindTitle }) {

  const [inputValue, setInputValue] = useState("")

  return (
    <>
      <label htmlFor="inputState" className="form-label">Cerca titolo</label>
      <input type="text" className="form-control" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button className="btn btn-dark" onClick={() => onFindTitle(inputValue)}>Cerca</button>
      <button className="btn btn-dark" onClick={() => {
        onFindTitle("");
        setInputValue("")
      }}>Clear</button>
    </>
  )
}