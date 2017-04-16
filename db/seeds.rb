

Folder.delete_all
Item.delete_all
Record.delete_all

folder1 = Folder.create!(name: "", parent_folder_id: nil, path: "", size: 7970)
  Item.create!(name: 'setup', ext: 'ini', size: 430, folder_id: folder1.id)
  Item.create!(name: 'civ', ext: 'exe', size: 3030, folder_id: folder1.id)
  folder2 = Folder.create!(name: "MyFiles", parent_folder_id: folder1.id, path: "", size: 3970)
        Item.create!(name: 'letter', ext: 'doc', size: 40, folder_id: folder2.id)
        Item.create!(name: 'utilities', ext: 'xls', size: 55, folder_id: folder2.id)
        Item.create!(name: 'shipping', ext: 'txt', size: 50, folder_id: folder2.id)
        folder4 = Folder.create!(name: "Pictures", parent_folder_id: folder2.id, path: "/My_Files", size: 3150)
          Item.create!(name: 'maldives', ext: 'jpg', size: 350, folder_id: folder4.id)
          Item.create!(name: 'vacation', ext: 'png', size: 750, folder_id: folder4.id)
          Item.create!(name: 'cartoon', ext: 'gif', size: 2050, folder_id: folder4.id)
        folder5 = Folder.create!(name: "Documents", parent_folder_id: folder2.id, path: "/My_Files", size: 675)
          Item.create!(name: 'resume', ext: 'doc', size: 70, folder_id: folder5.id)
          Item.create!(name: 'schedule', ext: 'xls', size: 85, folder_id: folder5.id)
          Item.create!(name: 'products', ext: 'ppt', size: 360, folder_id: folder5.id)
          Item.create!(name: 'biography', ext: 'doc', size: 60, folder_id: folder5.id)
          Item.create!(name: 'income', ext: 'xls', size: 100, folder_id: folder5.id)

  folder3 = Folder.create!(name: "Projects", parent_folder_id: folder1.id, path: "", size: 540)
        Item.create!(name: 'project1', ext: 'doc', size: 70, folder_id: folder3.id)
        Item.create!(name: 'calculations', ext: 'xls', size: 170, folder_id: folder3.id)
        Item.create!(name: 'project2', ext: 'doc', size: 80, folder_id: folder3.id)
        folder6 = Folder.create!(name: "History", parent_folder_id: folder3.id, path: "/Projects", size: 220)
          Item.create!(name: 'story', ext: 'doc', size: 80, folder_id: folder6.id)
          Item.create!(name: 'tale', ext: 'doc', size: 50, folder_id: folder6.id)
          Item.create!(name: 'song', ext: 'doc', size: 90, folder_id: folder6.id)
