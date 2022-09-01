class SessionsController < ApplicationController
  before_action :logged_in_redirect, only: [:new, :create]
  def new
  
  end

  def create
    user = User.find_by(username: params[:session][:username])
    if user && user.authenticate(params[:session][:password])
      session[:user_id] = user.id
      flash[:success] = "Logged in successfully"
      redirect_to root_path
    else
      flash.now[:error] = "There was something wrong with your with your credentials. Please try again."
      render 'new', status: :unprocessable_entity
    end
  end

  def destroy
    session[:user_id] = nil
    flash[:success] = "You have been successfully logged out"
    render 'new', status: :unprocessable_entity
  end

  private

  def logged_in_redirect
    if logged_in?
      flash[:error] = "You are already logged in"
      redirect_to root_path
    end
  end
end