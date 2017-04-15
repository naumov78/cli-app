class ChangeRecords < ActiveRecord::Migration

  drop_table(:records)

  def change
    create_table :records do |t|
      t.text :record_list

      t.timestamps null: false
    end
  end
end
