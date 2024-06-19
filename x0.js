// boxes Objecs 
const inp1 = document.getElementById("bx1");
const inp2 = document.getElementById("bx2");
const inp3 = document.getElementById("bx3");
const inp4 = document.getElementById("bx4");
const inp5 = document.getElementById("bx5");
const inp6 = document.getElementById("bx6");
const inp7 = document.getElementById("bx7");
const inp8 = document.getElementById("bx9");
const inp9 = document.getElementById("bx8");

// Audio Objects
var b=new Audio("click.mp3");
var wn=new Audio("claping.mp3")
var bk=new Audio("tumheaana.mp3");
bk.play();
bk.volume=0.3;
// Output Objects
const rs = document.getElementById("resultid");
const wi = document.getElementById("winid");

// Controls Input
const c1 = document.getElementById("img1");
const c2 = document.getElementById("img2");
const c3 = document.getElementById("img3");
const c4 = document.getElementById("img4");

// Mute Section 
img2.addEventListener("click",ps);
function ps(){
    bk.pause();
}
// Score Output
const s1 = document.getElementById("pk1");
const s2 = document.getElementById("pk2");

// Timer 
const t=document.getElementById("tim");

//  Press the start button to play
c4.addEventListener('click', play);
c1.addEventListener('click', play);
function play() {
    // Boxes actions
    c4.remove();
    inp1.addEventListener("click", func1);
    inp2.addEventListener("click", func2);
    inp3.addEventListener("click", func3);
    inp4.addEventListener("click", func4);
    inp5.addEventListener("click", func5);
    inp6.addEventListener("click", func6);
    inp7.addEventListener("click", func7);
    inp8.addEventListener("click", func8);
    inp9.addEventListener("click", func9);

    // Result Variables 
    var f1;
    var f2;
    var f3;
    var f4;
    var f5;
    var f6;
    var f7;
    var f8;
    var f9;

    // Score variables
    var pl1 = 0;
    var pl2 = 0;
    // Random variable
    r = Math.floor(Math.random() * 2) + 1;

    //  Timer 
    
let count = 15;
const timer = setInterval(function() {
  count--;
  console.log(count);
  t.innerHTML=count;
  if (count === 0) {
    clearInterval(timer);
    console.log("Time's up!");
    t.innerHTML="Time's Up!";
  }
}, 1000);

// Boxes inputs 

    function func1() {
        b.play();
        if (r == 1) {
            inp1.style.backgroundImage = "url('cross-removebg-preview.png')";
            inp1.style.backgroundSize = "cover";
            inp1.style.backgroundPosition = "-7px";
            setTimeout(function(){
                inp1.style.backgroundImage=null;

            },15000);
            f1 = false;
            r = 2;
            return (r, f1);
        }
        else if (r == 2) {
            inp1.style.backgroundImage = "url('zero-removebg-preview.png')";
            inp1.style.backgroundSize = "cover";
            inp1.style.backgroundPosition = "-7px";
            setTimeout(function(){
                inp1.style.backgroundImage=null;
    
            },15000);
            f1 = true;
            r = 1;
            return (r, f1);
        }
    }
    function func2() {
        b.play();
        if (r == 1) {
            inp2.style.backgroundImage = "url('cross-removebg-preview.png')";
            inp2.style.backgroundSize = "cover";
            inp2.style.backgroundPosition = "-7px";
            setTimeout(function(){
                inp2.style.backgroundImage=null;
        
            },15000);
            f2 = false;
            r = 2;
            return r, f2;
        }
        else if (r == 2) {
            inp2.style.backgroundImage = "url('zero-removebg-preview.png')";
            inp2.style.backgroundSize = "cover";
            inp2.style.backgroundPosition = "-7px";
            setTimeout(function(){
                inp2.style.backgroundImage=null;
        
            },15000);
            f2 = true;
            r = 1;
            return r, f2;
        }
    }
    function func3() {
        b.play();
        if (r == 1) {
            inp3.style.backgroundImage = "url('cross-removebg-preview.png')";
            inp3.style.backgroundSize = "cover";
            inp3.style.backgroundPosition = "-7px";
            setTimeout(function(){
                inp3.style.backgroundImage=null;
        
            },15000);
            f3 = false;
            r = 2;
            return r, f3;
        }
        else if (r == 2) {
            inp3.style.backgroundImage = "url('zero-removebg-preview.png')";
            inp3.style.backgroundSize = "cover";
            inp3.style.backgroundPosition = "-7px";
            setTimeout(function(){
                inp3.style.backgroundImage=null;
        
            },15000);
            f3 = true;
            r = 1;
            return r, f3;
        }
    }
    function func4() {
        b.play();
        if (r == 1) {
            inp4.style.backgroundImage = "url('cross-removebg-preview.png')";
            inp4.style.backgroundSize = "cover";
            inp4.style.backgroundPosition = "-7px";
            setTimeout(function(){
                inp4.style.backgroundImage=null;
        
            },15000);
            f4 = false;
            r = 2;
            return r, f4;
        }
        else if (r == 2) {
            inp4.style.backgroundImage = "url('zero-removebg-preview.png')";
            inp4.style.backgroundSize = "cover";
            inp4.style.backgroundPosition = "-7px";
            setTimeout(function(){
                inp4.style.backgroundImage=null;
        
            },15000);
            f4 = true;
            r = 1;
            return r, f4;
        }
    }
    function func5() {
        b.play();
        if (r == 1) {
            inp5.style.backgroundImage = "url('cross-removebg-preview.png')";
            inp5.style.backgroundSize = "cover";
            inp5.style.backgroundPosition = "-7px";
            setTimeout(function(){
                inp5.style.backgroundImage=null;
        
            },15000);
            f5 = false;
            r = 2;
            return r, f5;
        }
        else if (r == 2) {
            inp5.style.backgroundImage = "url('zero-removebg-preview.png')";
            inp5.style.backgroundSize = "cover";
            inp5.style.backgroundPosition = "-7px";
            setTimeout(function(){
                inp5.style.backgroundImage=null;
        
            },15000);
            f5 = true;
            r = 1;
            return r, f5;
        }
    }
    function func6() {
        b.play();
        if (r == 1) {
            inp6.style.backgroundImage = "url('cross-removebg-preview.png')";
            inp6.style.backgroundSize = "cover";
            inp6.style.backgroundPosition = "-7px";
            setTimeout(function(){
                inp6.style.backgroundImage=null;
        
            },15000);
            f6 = false;
            r = 2;
            return r, f6;
        }
        else if (r == 2) {
            inp6.style.backgroundImage = "url('zero-removebg-preview.png')";
            inp6.style.backgroundSize = "cover";
            inp6.style.backgroundPosition = "-7px";
            setTimeout(function(){
                inp6.style.backgroundImage=null;
        
            },15000);
            f6 = true;
            r = 1;
            return r, f6;
        }
    }
    function func7() {
        b.play();
        if (r == 1) {
            inp7.style.backgroundImage = "url('cross-removebg-preview.png')";
            inp7.style.backgroundSize = "cover";
            inp7.style.backgroundPosition = "-7px";
            setTimeout(function(){
                inp7.style.backgroundImage=null;
        
            },15000);
            f7 = false;
            r = 2;
            return r, f7;
        }
        else if (r == 2) {
            inp7.style.backgroundImage = "url('zero-removebg-preview.png')";
            inp7.style.backgroundSize = "cover";
            inp7.style.backgroundPosition = "-7px";
            setTimeout(function(){
                inp7.style.backgroundImage=null;
        
            },15000);
            f7 = true;
            r = 1;
            return r, f7;
        }
    }
    function func8() {
        b.play();
        if (r == 1) {
            inp8.style.backgroundImage = "url('cross-removebg-preview.png')";
            inp8.style.backgroundSize = "cover";
            inp8.style.backgroundPosition = "-7px";
            setTimeout(function(){
                inp8.style.backgroundImage=null;
        
            },15000);
            f8 = false;
            r = 2;
            return r, f8;
        }
        else if (r == 2) {
            inp8.style.backgroundImage = "url('zero-removebg-preview.png')";
            inp8.style.backgroundSize = "cover";
            inp8.style.backgroundPosition = "-7px";
            setTimeout(function(){
                inp8.style.backgroundImage=null;
        
            },15000);
            f8 = true;
            r = 1;
            return r, f8;
        }
    }
    function func9() {
        b.play();
        if (r == 1) {
            inp9.style.backgroundImage = "url('cross-removebg-preview.png')";
            inp9.style.backgroundSize = "cover";
            inp9.style.backgroundPosition = "-7px";
            setTimeout(function(){
                inp9.style.backgroundImage=null;
        
            },15000);
            f9 = false;
            r = 2;
            return r, f9;
        }
        else if (r == 2) {
            inp9.style.backgroundImage = "url('zero-removebg-preview.png')";
            inp9.style.backgroundSize = "cover";
            inp9.style.backgroundPosition = "-7px";
            setTimeout(function(){
                inp9.style.backgroundImage=null;
        
            },15000);
            f9 = true;
            r = 1;
            return r, f9;
        }
    }
    console.log(r);
    setTimeout(function result() {
        console.log(f1);
        if (f1 == f2 && f1 == f3) {
            console.log("good");
            if (f1 == true) {
                rs.innerHTML = "Blue";
                rs.style.color="blue";
                pl1 = pl1 + 1;
                s1.innerHTML = pl1;
            }
            else if(f1==false) {
                rs.innerHTML = "Red";
                rs.style.color="red";
                pl2 = pl2 + 1;
                s2.innerHTML = pl2;
            }
        }
        else if (f1 == f4 && f1 == f7) {
            if (f1 == true) {
                rs.innerHTML = "Blue";
                rs.style.color="blue";
                pl1 = pl1 + 1;
                s1.innerHTML = pl1;
            }
            else if(f1==false){
                rs.innerHTML = "Red";
                rs.style.color="red";
                pl2 = pl2 + 1;
                s2.innerHTML = pl2;
            }
        }
        else if (f1 == f5 && f1 == f9) {
            if (f1 == true) {
                rs.style.transition="500ms";
                rs.innerHTML = "Blue";
                rs.style.color="blue";
                pl1 = pl1 + 1;
                s1.innerHTML = pl1;
            }
            else if(f1==false){
                rs.innerHTML = "Red";
                rs.style.color="red";
                rs.style.transition="500ms";
                pl2 = pl2 + 1;
                s2.innerHTML = pl2;
            }
        }
        if (f2 == f5 && f2 == f8) {
            console.log("good");
            if (f2 == true) {
                rs.innerHTML = "Blue";
                rs.style.color="blue";
                pl1 = pl1 + 1;
                s1.innerHTML = pl1;
            }
            else if(f2==false){
                rs.innerHTML = "Red";
                rs.style.color="red";
                pl2 = pl2 + 1;
                s2.innerHTML = pl2;
            }
        } if (f3 == f6 && f3 == f9) {
            console.log("good");
            if (f3 == true) {
                rs.innerHTML = "Blue";
                pl1 = pl1 + 1;
                s1.innerHTML = pl1;
            }
            else if(f3==false){
                rs.innerHTML = "Red";
                rs.style.color="red";
                pl2 = pl2 + 1;
                s2.innerHTML = pl2;
            }
        }
        if (f3 == f5 && f3 == f7) {
            console.log("good");
            if (f3 == true) {
                rs.innerHTML = "Blue";
                rs.style.color="blue";
                pl1 = pl1 + 1;
                s1.innerHTML = pl1;
            }
            else if(f3==false){
                rs.innerHTML = "Red";
                rs.style.color="red";
                pl2 = pl2 + 1;
                s2.innerHTML = pl2;
            }
        }
        if (f5 == f4 && f5 == f6) {
            console.log("good");
            if (f5 == true) {
                rs.style.color="blue";
                rs.innerHTML = "Blue";
                pl1 = pl1 + 1;
                s1.innerHTML = pl1;
            }
            else if(f5==false){
                rs.innerHTML = "Red";
                rs.style.color="red";
                pl2 = pl2 + 1;
                s2.innerHTML = pl2;
            }
        }
        if (f7 == f8 && f7 == f9) {
            console.log("good");
            if (f7 == true) {
                rs.innerHTML = "Blue";
                rs.style.color="blue";
                pl1 = pl1 + 1;
                s1.innerHTML = pl1;
            }
            else if(f7==false){
                rs.innerHTML = "Red";
                rs.style.color="red";
                pl2 = pl2 + 1;
                s2.innerHTML = pl2;
            }
        }
        wi.innerHTML = "Wins"
        wn.play();
    }, 15000);
}