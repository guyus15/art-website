# Preview all emails at http://localhost:3000/rails/mailers/admin_mailer
class AdminMailerPreview < ActionMailer::Preview
    def new_email
        AdminMailer.new_email(Email.last)
    end
end
