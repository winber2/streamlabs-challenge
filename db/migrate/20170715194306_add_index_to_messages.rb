class AddIndexToMessages < ActiveRecord::Migration[5.0]
  def change
    add_column :messages, :uid, :string
    add_column :messages, :user, :string
    add_index :messages, [:chatroomId, :uid]
  end
end
