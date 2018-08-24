window.onload = function() {

  // 1.엘리언트 객체 가져오기
  var form = document.getElementById('message-form');
  var messageField = document.getElementById('message');
  var messagesList = document.getElementById('messages');
  var socketStatus = document.getElementById('status');
  var closeBtn = document.getElementById('close');


  // 2. 새로운 WebSocket 생성.
  var socket = new WebSocket("ws://localhost:40510");

  // 3. onerror : Websocket 오류처리
  socket.onerror = function(error) {
      socketStatus.innerHTML = `Websocket Error : ${error.type}`;
      socketStatus.className = 'closed';
  };

  //4. onopen :  WebSocket이 open 되었을 때 message 출력하기
  socket.onopen = function(event) {
    socketStatus.innerHTML = 'Connected to : ws://localhost:40510';
    socketStatus.className = 'open';
  };


  // 5. onmessage : 서버로 부터 받은 message 출력하기
  socket.onmessage = function(event) {
    var receivedMsg = event.data;
    messagesList.innerHTML += `<li class="received" style="color: #eee"><span>Received : </span>${receivedMsg}</li>`;
  };


  // 6. onclose : WebSocket close 되었을때 message 출력하기
  socket.onclose = function(event) {
    socketStatus.innerHTML = 'Disconnected from websocket';
    socketStatus.className = 'closed';
  };


  //7. form을 submit 할때 message를 서버로 보내기
  form.onsubmit = function(e) {
    //7.1 prevent default event
    e.preventDefault();

    //7.2 Retrieve the message from the textarea.
    var sendMsg = messageField.value;

    //7.3 Send the message through the WebSocket.
      socket.send(sendMsg);

    //7.4 Add the message to the messages list.
    messagesList.innerHTML += `<li class="sent" style="color: #eee"><span>Sent : </span>${sendMsg}</li>`;

    //7.5 Clear out the message field.
    messageField.value = '';

    return false;
  };


  // 8. close button 클릭할때 Websocket close 하기
  closeBtn.onclick = function(e) {
    //8.1 prevent default event

    //8.2 Close the WebSocket.

    return false;
  };

};
