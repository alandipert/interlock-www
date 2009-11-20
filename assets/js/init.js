var flickr_config = {
  api_key: '6dc4842b2e74b97383210c58c3446af5',
  thumbnail_size: 'sq'
}
 
$(document).ready(function() {
  /*Bring in the first 10 photos*/
  /*$('#flickr_feed').flickr(flickr_config).photosSearch({group_id: 'interlock_roc', count: 10});*/
  $('#flickr_feed').flickr(flickr_config).photosGetRecent({count: 10});
  /*Bring in the latest 3 tweets*/
  $("#twitter_feed").tweet({
    /*username: "interlockroc",*/
    username: "emmangoldstein",
    join_text: "auto",
    count: 5,
    /*avatar_size: "32",*/
    auto_join_text_default: "", 
    auto_join_text_ed: "",
    auto_join_text_ing: "",
    auto_join_text_reply: "",
    auto_join_text_url: "",
    loading_text: "loading tweets..."
  });
});
