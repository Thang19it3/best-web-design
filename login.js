function getInfo(){
	var user = document.getElementById("username");
	var password = document.getElementById("pass");
	var you ="thang";
	var mk ="123";
	
	if(user.value == you){
		if(password.value == mk){
			window.open("demo6.html")
		}else {
			alert("ko thanh cong");
		}
	}
}

