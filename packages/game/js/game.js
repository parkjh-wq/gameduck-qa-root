let s=0,t=10,run=false,iv=null;const $=id=>document.getElementById(id);
function tick(){t-=0.1;if(t<=0){t=0;run=false;clearInterval(iv);$("btn").disabled=true;$("btn").textContent="끝! "+s+"점";}$("timer").textContent=t.toFixed(1);}
$("btn").onclick=()=>{if(!run&&t>0){run=true;iv=setInterval(tick,100);}if(run){s++;$("score").textContent=s;}};
$("reset").onclick=()=>{clearInterval(iv);s=0;t=10;run=false;$("score").textContent=0;$("timer").textContent="10.0";$("btn").disabled=false;$("btn").textContent="클릭!";};