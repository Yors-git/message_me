import consumer from "channels/consumer"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    const chatWindow = document.getElementById("message-container")
    // let div = document.createElement("div")
    // div.innerHTML = data.mod_message
    // div.classList.add("event")
    // console.log(div)
    const html = document.createRange().createContextualFragment(data.mod_message)
    chatWindow.append(html)
  }
});
