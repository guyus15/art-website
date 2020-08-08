class PageController < ApplicationController

    def show
        
        @posts_by_year = Post.all.order("created_at DESC").group_by{ |year| year.created_at.year }

        render params[:page]
    end

    def get_posts_by_month(posts_by_year)
        posts_by_year[1].group_by{|month| month.created_at.month}
        
    end
    def get_month_name(month_number)
        I18n.t("date.month_names")[month_number]
    end

    helper_method :get_month_name
    helper_method :get_posts_by_month
end
