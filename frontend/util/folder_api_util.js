

// folders

export const fetchFolder = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/folders/${id}`
  })
}

export const createFolder = (name, parentFolderId) => {
  return $.ajax({
    method: "POST",
    url: `/api/folders`,
    data: { folder: { name: name, parent_folder_id: parentFolderId }}
  })
}

export const deleteFolder = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/folders/${id}`
  })
}

export const renameFolder = (id, newName) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/folders/${id}`,
    data: { folder: { name: newName }}
  })
}


// items

export const deleteItem = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/items/${id}`
  })
}

export const renameItem = (id, newName) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/items/${id}`,
    data: { item: { name: newName }}
  })
}
