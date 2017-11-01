screen=document.getElementById('screen');
		notice=document.getElementById('notice');

		screen.innerHTML = "";
		notice.innerHTML = "Put on the calculator";

		var v = '';
		 var i=-1;
		function power()
			{
				i = -i;
				if (i == 1)
				{
					document.getElementById('power').value = "OFF";
					screen.innerHTML = "0";
					notice.innerHTML = "Calculator is On";
					document.getElementById('power').fontStyleAdjust('font-size', 2.5);
				}
				else {
					document.getElementById('power').value = "ON";
					screen.innerHTML = "";
					notice.innerHTML = "Put on the calculator";
				}
			}
			function button(u)
			{
				if (document.getElementById('power').value === "ON") {screen.innerHTML = ""}
				else if (screen.innerHTML=='0.') {screen.innerHTML+=u}
				else if (screen.innerHTML==0) {screen.innerHTML=u}
				else if (screen.innerHTML!=0) {screen.innerHTML +=u}
			}
			function clr()
			{
				if (screen.innerHTML.length==1) {screen.innerHTML=0}
				else if (screen.innerHTML.length=1)
				{screen.innerHTML=screen.innerHTML.substring(0,screen.innerHTML.length-1);}
			}
			function dot()
			{
				if (document.getElementById('power').value === "ON") {screen.innerHTML = ""}
				else if (screen.innerHTML==0) {screen.innerHTML='0.'}
				else if (screen.innerHTML!=0) {screen.innerHTML+='.'};
			}
			function oper(w)
			{
				v = w;
				x=parseInt(screen.innerHTML);
				screen.innerHTML="";
			}
			function equals()
			{
				y=parseInt(screen.innerHTML);

				if (v=='plus') 
				{
					screen.innerHTML=x+y;
				}
				else if (v=='minus')
				{
					screen.innerHTML=x-y;
				}
				else if (v=='times')
				{
					screen.innerHTML=x*y;
				}
				else if (v=='divide')
				{
					screen.innerHTML=x/y;
				}

			}