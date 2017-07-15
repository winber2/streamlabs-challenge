class AddChatroomToMessage < ActiveRecord::Migration[5.0]
  def change
    add_column :messages, :chatroomId, :string
  end
end
