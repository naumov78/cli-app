











class List {


  listFiles(folders, items, options) {
    return (
      <div>
        <ul>
          {folders.map((folder, i) => {
            return (
            <li key={i}>
              <span>{folder.name}</span>
            </li>
            )
          })}
        </ul>
        <ul>
          {items.map((item, i) => {
            return (
            <li key={i}>
              <span>{`${item.name}.${item.ext}`}</span>
            </li>
            )
          })}
        </ul>
      </div>
    )
  }


}

export default List;
