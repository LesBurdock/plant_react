class UsersController < ApplicationController
  def show
    @user = current_user
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
    if @user.save
      render 'pages/home'
    else
      render 'pages/home'
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :description)
  end
end
