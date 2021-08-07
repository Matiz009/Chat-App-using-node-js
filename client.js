const socket = io('http://localhost:3000');
const message = document.getElementById('message');
const form = document.getElementById('form');
const container = document.getElementById('container');

socket.on('message-from-server', function(data) {
    console.log(data.message);
    displayMessage(data.message);
});
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = message.value;
    displayMessage('You:${text}');
    socket.emit('message-from-client', text);
    message.value = '';
})

function displayMessage() {
    const messageElement = document.createElement('div');
    messageElement.innerText = text;
    messageElement.style.cssText = 'box-shadow: 0 14px 18px 0 rgba(0,0,0,0.2)';
    container.append(messageElement);


}