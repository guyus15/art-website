class CreateEmailQueries < ActiveRecord::Migration[5.2]
  def change
    create_table :email_queries do |t|
      t.string :subject
      t.text :content
      
      t.timestamps
    end
  end
end
