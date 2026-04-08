<script>
// DARK MODE + SAVE
const btn=document.getElementById('toggleTheme');
if(localStorage.getItem('theme')==='dark') document.body.classList.add('dark');
btn.onclick=()=>{
 document.body.classList.toggle('dark');
 localStorage.setItem('theme',document.body.classList.contains('dark')?'dark':'light');
};

// TYPING EFFECT
const text="Hi, I'm Adib 👋";
let i=0;
function type(){if(i<text.length){typing.innerHTML+=text[i++];setTimeout(type,70)}}
type();

// PARTICLES + CONNECT LINES (PRO)
const canvas=document.getElementById('bg');
const ctx=canvas.getContext('2d');
canvas.width=innerWidth;canvas.height=innerHeight;
let p=[];
for(let i=0;i<100;i++)p.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,dx:Math.random()-0.5,dy:Math.random()-0.5});

function draw(){ctx.clearRect(0,0,canvas.width,canvas.height);
 p.forEach(a=>{
  a.x+=a.dx;a.y+=a.dy;
  ctx.beginPath();ctx.arc(a.x,a.y,2,0,Math.PI*2);ctx.fill();
  p.forEach(b=>{
    let d=Math.hypot(a.x-b.x,a.y-b.y);
    if(d<100){ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.strokeStyle='rgba(0,0,0,0.1)';ctx.stroke();}
  });
 });
 requestAnimationFrame(draw);
}
draw();

onresize=()=>{canvas.width=innerWidth;canvas.height=innerHeight};
</script>
