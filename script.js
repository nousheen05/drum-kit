for(var i=0 ;i<8;i++)
{
    document.querySelectorAll(".key")[i].addEventListener("click",function()
    {
        var x = this.classList[1];
        playSound(x);
        animation(x);
    });
}


document.addEventListener("keydown", function(event)
{
    var x = event.key;
    playSound(x);
    animation(x);
});


function playSound(key) {

    switch (key) {
      case "a":
        var clap = new Audio("sounds/clap.wav");
        clap.play();
        break;
  
      case "s":
        var hihat = new Audio("sounds/hihat.wav");
        hihat.play();
        break;
  
      case "d":
        var kick = new Audio('sounds/kick.wav');
        kick.play();
        break;
  
      case "f":
        var openhat = new Audio('sounds/openhat.wav');
        openhat.play();
        break;
  
      case "g":
        var booom = new Audio('sounds/boom.wav');
        boom.play();
        break;
  
      case "h":
        var boom = new Audio('sounds/ride.wav');
        boom.play();
        break;
  
      case "j":
        var snare = new Audio('sounds/snare.wav');
        snare.play();
        break;
      case "k":
        var tom = new Audio('sounds/tom.wav');
        tom.play();
        break;
  
  
      default: console.log(key);
  
    }
  }


  function animation(x)
  {
        var classClicked = "."+ x ;
        document.querySelector(classClicked).classList.add("newAnimation");


        setTimeout(function(){
            document.querySelector(classClicked).classList.remove("newAnimation");
        }, 100);
        
  }