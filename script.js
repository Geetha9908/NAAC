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
else if (input.toLowerCase().includes("criteria 1")) {
  reply = "Criteria 1: Curricular Aspects focuses on curriculum design and delivery.";
}
else if (input.toLowerCase().includes("criteria 2")) {
  reply = "Criteria 2: Teaching-Learning and Evaluation.";
}
else if (input.toLowerCase().includes("criteria 3")) {
  reply = "Criteria 3: Research, Innovations and Extension.";
}
else if (input.toLowerCase().includes("criteria 4")) {
  reply = "Criteria 4: Infrastructure and Learning Resources.";
}
else if (input.toLowerCase().includes("criteria 5")) {
  reply = "Criteria 5: Student Support and Progression.";
}
else if (input.toLowerCase().includes("criteria 6")) {
  reply = "Criteria 6: Governance, Leadership and Management.";
}
else if (input.toLowerCase().includes("criteria 7")) {
  reply = "Criteria 7: Institutional Values and Best Practices.";
}