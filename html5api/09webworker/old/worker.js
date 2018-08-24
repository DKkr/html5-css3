// worker 메시지 수신 listener
self.onmessage = function( e ) {
    console.log( 'Worker가 받은 메시지 ', e.data );

    // 1초 후에 호출한 페이지에 데이터를 보낸다.
    setTimeout( function() {
        postMessage( 'Worker Value' );
    }, 1000 );
};