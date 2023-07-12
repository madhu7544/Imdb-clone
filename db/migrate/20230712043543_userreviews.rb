class Userreviews < ActiveRecord::Migration[7.0]
  def change
    create_table :user_ratings_reviews do |t|
      t.references :user, foreign_key: true
      t.references :movie, foreign_key: true
      t.float :rating
      t.string :review_text

      t.timestamps
    end
  end
end
