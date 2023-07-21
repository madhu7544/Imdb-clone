class Review < ApplicationRecord
    belongs_to :movie, dependent: :destroy
end
