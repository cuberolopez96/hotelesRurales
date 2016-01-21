(function(){
	window.addEventListener("load",function(){
	var precio =  document.getElementById("precio");

		precio.value=sessionStorage.getItem("precio");
	});	
})()