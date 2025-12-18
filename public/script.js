const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');

// Send message on button click
sendBtn.addEventListener('click', sendMessage);

// Send message on Enter key press
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

async function sendMessage() {
    const message = messageInput.value.trim();
    
    if (!message) return;

    // Display user message
    addMessage(message, 'user');
    messageInput.value = '';
    
    // Disable send button while waiting
    sendBtn.disabled = true;

    try {
        // Send message to backend
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });

        const data = await response.json();

        if (data.error) {
            addMessage('Sorry, there was an error: ' + data.error, 'bot');
        } else {
            // Extract just the response text
            let responseText = data.response;
            // Remove the user's input from the response if it's included
            if (responseText.includes(message)) {
                responseText = responseText.replace(message, '').trim();
            }
            addMessage(responseText || 'No response generated', 'bot');
        }
    } catch (error) {
        console.error('Error:', error);
        addMessage('Sorry, I encountered an error. Please try again.', 'bot');
    } finally {
        // Re-enable send button
        sendBtn.disabled = false;
        messageInput.focus();
    }
}

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.class = 'message';
    
    const messageClass = sender === 'user' ? 'user-message' : 'bot-message';
    messageDiv.className = `message ${messageClass}`;
    
    const messageParagraph = document.createElement('p');
    messageParagraph.textContent = text;
    
    messageDiv.appendChild(messageParagraph);
    chatMessages.appendChild(messageDiv);
    
    // Auto scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Focus input on page load
messageInput.focus();
