document.getElementById("startChatBtn").addEventListener("click", function() {
    this.style.display = 'none'; 
    const chatSimulation = document.getElementById("chatSimulation");
    chatSimulation.style.display = 'block';
    const messages = chatSimulation.getElementsByClassName("chat-message");

    let messageIndex = 0;
    const showMessage = function() {
        if (messageIndex < messages.length) {
            messages[messageIndex].style.display = 'block';
            messageIndex++;
        }
    };

    showMessage(); 
    setInterval(function() {
        showMessage();
    }, 2000); 
});
