json.extract! folder, :id, :name, :parent_folder_id, :path

if folder.parent_folder_id
  json.parent Folder.find(folder.parent_folder_id).name
end

json.folders folder.folders do |inner_folder|
  json.extract! inner_folder, :id, :name, :parent_folder_id
end

json.items folder.items do |item|
  json.extract! item, :id, :name, :ext, :size, :folder_id
end
