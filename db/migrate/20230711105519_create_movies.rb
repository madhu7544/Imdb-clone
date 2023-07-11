class CreateMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :director
      t.string :genre
      t.date :releasedate
      t.string :producer
      t.time :duration
      t.string :description
      t.string :castcrew

      t.timestamps
    end
  end
end
