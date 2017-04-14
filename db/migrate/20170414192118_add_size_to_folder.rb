class AddSizeToFolder < ActiveRecord::Migration
  def change

    drop_table(:folders)

    create_table :folders do |t|
      t.string :name
      t.integer :size, default: 0
      t.integer :parent_folder_id
      t.string :path

      t.timestamps null: false
    end
  end
end
