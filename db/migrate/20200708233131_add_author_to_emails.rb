class AddAuthorToEmails < ActiveRecord::Migration[5.2]
  def change
    add_column :emails, :author, :string 
  end
end
