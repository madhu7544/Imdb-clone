class AddFieldnameToMovies < ActiveRecord::Migration[7.0]
  def change
    add_column :movies, :poster, :string
  end
end
