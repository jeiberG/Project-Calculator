const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item)=>{
	item.onclick=()=>{
		if(item.id==="clear"){
			display.innerText="";
		}else if (item.id === "C") {
			let string = display.innerText.toString();
			display.innerText= string.substr(0,string.length-1);
		}else if (display.innerText != "" && item.id === "equal") {
			display.innerText= eval(display.innerText)
		}else if(display.innerText == "" && item.id == "equal"){
			display.innerText = "sytem32 hakeado... sera borrado en 2s" ;
			alert(" ERROR:Apresiona aqui para salir");
			setTimeout(()=> (display.innerText = "" ) , 2000);
		}else{
			display.innerText+=item.id;
		}
	}
})