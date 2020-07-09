class EmailsController < ApplicationController
  before_action :set_email, only: [:show, :edit, :update, :destroy]


  # GET /emails/new
  def new
    @email = Email.new
  end

  # POST /emails
  # POST /emails.json
  def create
    @email = Email.new(email_params)

    respond_to do |format|
      if @email.save
        AdminMailer.new_email(@email).deliver_now
        format.html { redirect_to(root_path, notice: 'Email sent.') }
        format.json { render json: @email, status: :created, location: @user }
      end
    end
  end

  # DELETE /emails/1
  # DELETE /emails/1.json
  def destroy
    @email.destroy
    respond_to do |format|
      format.html { redirect_to emails_url, notice: 'Email was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_email
      @email = Email.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def email_params
      params.require(:email).permit(:author, :subject, :content)
    end
end
