class CreateRecords < ActiveRecord::Migration
  def change
    create_table :records do |t|
      t.text :record

      t.timestamps null: false
    end
  end
end
