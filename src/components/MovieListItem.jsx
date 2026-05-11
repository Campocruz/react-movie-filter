export default function MovieListItem({ title, genre }) {

  return (
    <>
      <li className="p-1">
        <div className="row">
          <i className="col-1 bi bi-film"></i>
          <div className="col-5">{title}</div>
          <div className="col-5">{genre}</div>
        </div>
      </li>
    </>
  )
}