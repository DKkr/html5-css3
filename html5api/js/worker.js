onmessage = function(event){
	var data = parseInt(event.data);
	for(var i=0; i <= data; i++){
		if(i%5 ==0)postMessage(i);
	}
	
};