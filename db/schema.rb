# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_07_21_073125) do
  create_table "actors", force: :cascade do |t|
    t.string "name"
    t.string "photo"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "movies_id", null: false
    t.index ["movies_id"], name: "index_actors_on_movies_id"
  end

  create_table "movies", force: :cascade do |t|
    t.string "title"
    t.string "director"
    t.string "genre"
    t.date "releasedate"
    t.string "producer"
    t.string "duration"
    t.string "description"
    t.string "castcrew"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "poster"
    t.float "rating"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "user_id"
    t.integer "movie_id"
    t.float "rating"
    t.string "review_text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["movie_id"], name: "index_reviews_on_movie_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "role"
  end

  add_foreign_key "actors", "movies", column: "movies_id"
  add_foreign_key "reviews", "movies"
  add_foreign_key "reviews", "users"
end
