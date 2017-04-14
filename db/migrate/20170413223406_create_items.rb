class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name
      t.string :ext
      t.integer :size
      t.integer :folder_id

      t.timestamps null: false
    end
  end
end
