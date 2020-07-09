class RemoveTitleFromEmail < ActiveRecord::Migration[5.2]
  def change
    remove_column :emails, :title
  end
end
