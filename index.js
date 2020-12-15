

readCount = () =>{
   
   let countDate= new Date('Jan 1,2021 00:00:00').getTime();
   let now = new Date().getTime();
   let gap = countDate - now;
   let seconds = 1000;
   let minute = seconds  *60;
   let hour = minute * 60;
   let day = hour * 24;
   
   var d = Math.floor(gap / (day));
   var h = Math.floor((gap % (day)) / (hour));
   var m =  Math.floor((gap % (hour))/ (minute));
   var s = Math.floor((gap % (minute))/ (seconds));

   if(m==0&&s==10){
      document.getElementById("day").style.display = "none";
  document.getElementById("hour").style.display = "none";
  document.getElementById("minute").style.display = "none";
  document.querySelector("#title1").style.display = "none";
  document.querySelector("#title2").style.display = "none";
  document.querySelector("#title3").style.display = "none";
  document.querySelector("#title4").style.color = "#fff";
  document.querySelector("#title5").style.color = "#fff";
   document.querySelector("#slider1").style.display = "none";
  document.getElementById("second").style.width = "400px";
  document.getElementById("second").style.height = "400px";
  document.getElementById("second").style.fontSize="400px";
  document.getElementById("second").style.lineHeight ="400px";
  document.getElementById("second").style.backgroundColor="rgb(58 30 255 / 98%)";
  document.getElementById("second").style.color ="white";
  document.getElementById("second").style.border ="none";
  document.querySelector("body").style.backgroundColor ="rgb(58 30 255 / 98%)";
   document.querySelector("a").style.color ="#fff";
   document.querySelector("i").style.color ="#fff";
  document.querySelector("hr").style.display = "none";
  

   }
   
  if(d==-1){
   document.querySelector(".counter").style.display = "none";
   document.querySelector(".container").style.display = "none";
   document.querySelector(".dark").style.display = "block";
   document.querySelector("body").style.backgroundColor = "#1b1b1b";
  }else{
     document.querySelector(".time").style.display = "none";
   document.querySelector(".dark").style.display = "none";
   document.getElementById("day").innerHTML = d;
  document.getElementById("hour").innerHTML = h;
  document.getElementById("minute").innerHTML = m;
  document.getElementById("second").innerHTML = s;
  }
   
}
  
  setInterval(() => {
     readCount();
  }, 1000);
slider1 =()=>{
   document.querySelector("#slider1").style.backgroundImage = `url(assets/img1.jpg)`;
   setTimeout(() => {
      slider2();
   }, 5000);

}
slider2 =()=>{
   document.querySelector("#slider1").style.backgroundImage = `url(assets/img2.jpg)`;
   setTimeout(() => {
      slider3();
   }, 5000);

}
slider3 =()=>{
    document.querySelector("#slider1").style.backgroundImage = `url(assets/img3.jpg)`;
    setTimeout(() => {
      slider1();
   }, 5000);
}

  slider1();
