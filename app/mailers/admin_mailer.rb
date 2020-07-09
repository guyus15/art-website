class AdminMailer < ApplicationMailer
    default from: 'websitemailer4@gmail.com'

    def new_email(email)
        @email = email
        mail to:"chamberlainwebberh@gmail.com", subject: email.subject
    end
end
