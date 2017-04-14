

Folder.delete_all
Item.delete_all

folder1 = Folder.create!(name: "", parent_folder_id: nil, path: "", size: 1080)
  Item.create!(name: 'setup', ext: 'ini', size: 30, folder_id: folder1.id)
  Item.create!(name: 'civ', ext: 'exe', size: 30, folder_id: folder1.id)
  folder2 = Folder.create!(name: "My_Files", parent_folder_id: folder1.id, path: "", size: 570)
        Item.create!(name: 'file1', ext: 'doc', size: 40, folder_id: folder2.id)
        Item.create!(name: 'file2', ext: 'doc', size: 40, folder_id: folder2.id)
        Item.create!(name: 'file3', ext: 'doc', size: 40, folder_id: folder2.id)
        folder4 = Folder.create!(name: "Pictures", parent_folder_id: folder2.id, path: "/My_Files", size: 150)
          Item.create!(name: 'file4', ext: 'jpg', size: 50, folder_id: folder4.id)
          Item.create!(name: 'file5', ext: 'png', size: 50, folder_id: folder4.id)
          Item.create!(name: 'file6', ext: 'gif', size: 50, folder_id: folder4.id)
        folder5 = Folder.create!(name: "Documents", parent_folder_id: folder2.id, path: "/My_Files", size: 300)
          Item.create!(name: 'resume', ext: 'doc', size: 60, folder_id: folder5.id)
          Item.create!(name: 'schedule', ext: 'xls', size: 60, folder_id: folder5.id)
          Item.create!(name: 'products', ext: 'ppt', size: 60, folder_id: folder5.id)
          Item.create!(name: 'biography', ext: 'doc', size: 60, folder_id: folder5.id)
          Item.create!(name: 'income', ext: 'xls', size: 60, folder_id: folder5.id)

  folder3 = Folder.create!(name: "Projects", parent_folder_id: folder1.id, path: "", size: 450)
        Item.create!(name: 'file9', ext: 'doc', size: 70, folder_id: folder3.id)
        Item.create!(name: 'file10', ext: 'doc', size: 70, folder_id: folder3.id)
        Item.create!(name: 'file11', ext: 'doc', size: 70, folder_id: folder3.id)
        folder6 = Folder.create!(name: "History", parent_folder_id: folder3.id, path: "/Projects", size: 240)
          Item.create!(name: 'file4', ext: 'doc', size: 80, folder_id: folder6.id)
          Item.create!(name: 'file4', ext: 'doc', size: 80, folder_id: folder6.id)
          Item.create!(name: 'file4', ext: 'doc', size: 80, folder_id: folder6.id)
