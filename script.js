
for(var i=0; i<9 ; i++)
{
    document.querySelectorAll(".key")[i].addEventListener("click", function()
    {
        var buttonGotClicked = this.classList[1];
        playSound(buttonGotClicked);
    })
}


function playSound(exp)
{
    switch(exp)
    {
            case "A":
                var audio = new Audio('./sounds/clap.wav');
                audio.play();
                break;
            case "S":
                var audio = new Audio('./sounds/hihat.wav');
                audio.play();
                break;
            case "D":
                var audio = new Audio('./sounds/kick.wav');
                audio.play();
                break;
            case "F":
                var audio = new Audio('./sounds/openhat.wav');
                audio.play();
                break;
            case "G":
                var audio = new Audio('./sounds/boom.wav');
                audio.play();
                break;
            case "H":
                var audio = new Audio('./sounds/ride.wav');
                audio.play();
                break;
            case "J":
                var audio = new Audio('./sounds/snare.wav');
                audio.play();
                break;
            case "K":
                var audio = new Audio('./sounds/tom.wav');
                audio.play();
                break;
    }
}