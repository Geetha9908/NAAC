function sendMessage() {
  let input = document.getElementById("userInput").value;
  let chatbox = document.getElementById("chatbox");

  chatbox.innerHTML += "<p><b>You:</b> " + input + "</p>";

  let reply = "I am a NAAC Virtual Assistant.";

  if (input.toLowerCase().includes("naac")) {
    reply = "NAAC stands for National Assessment and Accreditation Council.";
  }

  chatbox.innerHTML += "<p><b>Bot:</b> " + reply + "</p>";
}