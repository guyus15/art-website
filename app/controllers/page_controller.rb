class PageController < ApplicationController

    def show
        @posts_by_years = Post.all.group_by{|year| year.created_at.year}
        render params[:page]
    end
end
