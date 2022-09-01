// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
//= require jquery
//= require semantic-ui
import "@hotwired/turbo-rails"
import "controllers"

const scroll_bottom = () => {
  const chatWindow = document.getElementById("messages");
  const count = chatWindow.getElementsByClassName('summary').length;
  if(count > 0) {
    chatWindow.scrollTo(0, chatWindow.scrollHeight);
  }
}

$(document).on('turbo:load', () => {
  $('.ui.dropdown').dropdown();
  scroll_bottom();
});

$('.message .close').on('click', function() {
  $(this)
    .closest('.message')
    .transition('fade')
  ;
});
import "channels"
