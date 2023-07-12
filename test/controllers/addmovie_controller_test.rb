require "test_helper"

class AddmovieControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get addmovie_index_url
    assert_response :success
  end
end
