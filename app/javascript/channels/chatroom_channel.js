import consumer from "channels/consumer"

const scroll_bottom = () => {
  const chatWindow = document.getElementById("messages");
  const count = chatWindow.getElementsByClassName('summary').length;
  if(count > 0) {
    chatWindow.scrollTo(0, chatWindow.scrollHeight);
  }
}

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    const chatWindow = document.getElementById("message-container")
    const html = document.createRange().createContextualFragment(data.mod_message)
    chatWindow.append(html)
    scroll_bottom()
  }
});
