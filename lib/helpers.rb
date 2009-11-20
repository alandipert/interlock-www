def nav_link(text, path) 
  if @item_rep and @item_rep.path == path 
    "<span class=\"current\">#{text}</span>" 
  else 
    "<a href=\"#{path}\">#{text}</a>" 
  end 
end 
