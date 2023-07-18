class AddForeignKeyToConnections < ActiveRecord::Migration[7.0]
  def change
    add_foreign_key :connections, :movies, on_delete: :cascade
  end
end
