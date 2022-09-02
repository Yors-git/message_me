// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
//= require jquery
//= require semantic-ui
import "@hotwired/turbo-rails"
import "controllers"
import "channels"

const scroll_bottom = () => {
  const chatWindow = document.getElementById("messages");
  const count = chatWindow.getElementsByClassName('summary').length;
  if(count > 0) {
    chatWindow.scrollTo(0, chatWindow.scrollHeight);
  }
}

const submit_message = () => {
  const inputBox = document.getElementById("message_body");
  const button = document.getElementById("msg_button")
  inputBox.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
      button.click()
      e.target.value = ""
    }  
  })
}

$(document).on('turbo:load', () => {
  $('.ui.dropdown').dropdown();
  $('.message .close').on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade')
    ;
  });
  submit_message();
  scroll_bottom();
});
