 window.addEventListener("load", () => {

    // Animate Text

    // animate the text for landing section from https://tobiasahlin.com/moving-letters/

    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml9 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false})
    .add({
        targets: '.ml9 .letter',
        scale: [0, 1],
        duration: 3500,
        elasticity: 600,
        delay: (el, i) => 80 * (i+1)
    });

    // *************************************************************************************
    // Start Journey

    var playBtn= document.getElementById('playButton');
    var titleContainer=document.getElementById('titleContainer');

    var characters=document.getElementById('characters');
    var char1=document.getElementById('char1');
    var char2=document.getElementById('char2');
    var toPakBtn=document.getElementById('toPak');

    var dialogue=document.getElementById('char1_start_sound');
    /*start the story when user clicks play button and display and hide relevant elements*/
    playBtn.addEventListener("click",function(){
    playBtn.style.display="none";
    titleContainer.style.display="none";

    toPakBtn.style.display="block";
    characters.style.display="flex";
    var delayInMilliseconds = 200; //1 second
    setTimeout(function() {
        char1.style.opacity='1';
        char2.style.opacity='1';
    }, delayInMilliseconds);

    startDialogue();

    })

    function startDialogue(){
        dialogue.play();
    }

    var landing=document.getElementById('landingSection');
    var pakistan=document.getElementById('pakistan');
    /*stop audio when user moves to next scene*/
    toPakBtn.addEventListener("click",function(){
        dialogue.pause();
        dialogue.currentTime=0;
        toPak();
    });
    // move to next section when audio ends
    dialogue.addEventListener("ended",function(){
        toPak();
    });
    function toPak(){
    landingSection.style.opacity=0;
    setTimeout(function(){
        landingSection.style.display='none';
        pakistan.style.display='block';
    },1500);
    pakistan.style.opacity=1;
    }

    // *************************************************************************************
    // Modal Trig


    var modal;

    // display the relevant modal and play the relevant sound track upon which button is clicked

    var pakInstructions=document.getElementById('pakInstructions');
    // Get the modal
    var balochistanModal = document.getElementById("balochistanModal");
    // Get the button that opens the modal
    var balochistanBtn = document.getElementById("balochistan");
    // Get the <span> element that closes the modal
    var balochistanClose = document.getElementById("balochistanClose");

    var balochistanMusic=document.getElementById('balochistanMusic');
    // When the user clicks on the button, open the modal
    balochistanBtn.onclick = function() {
        pakInstructions.style.display="none";
        balochistanModal.style.display = "block";
        modal=balochistanModal;
        //play the relevant music file
        balochistanMusic.play();
    music=balochistanMusic;
    }
    // When the user clicks on <span> (x), close the modal and stop the music and stop the music
    balochistanClose.onclick = function() {
        balochistanModal.style.display = "none";
        balochistanMusic.pause();
        balochistanMusic.currentTime=0;
    }

    // Get the modal
    var kashmirModal = document.getElementById("kashmirModal");
    // Get the button that opens the modal
    var kashmirBtn = document.getElementById("kashmir");
    // Get the <span> element that closes the modal
    var kashmirClose = document.getElementById("kashmirClose");

    var kashmirMusic=document.getElementById('kashmirMusic');
    // When the user clicks on the button, open the modal
    kashmirBtn.onclick = function() {
        pakInstructions.style.display="none";
        kashmirModal.style.display = "block";
        modal=kashmirModal;
        kashmirMusic.play();
        music=kashmirMusic;
    }
    // When the user clicks on <span> (x), close the modal and stop the music
    kashmirClose.onclick = function() {
        kashmirModal.style.display = "none";
        kashmirMusic.pause();
        kashmirMusic.currentTime=0;
    }


    // Get the modal
    var northModal = document.getElementById("northModal");
    // Get the button that opens the modal
    var northBtn = document.getElementById("north");
    // Get the <span> element that closes the modal
    var northClose = document.getElementById("northClose");

    var northMusic=document.getElementById('northMusic');
    // When the user clicks on the button, open the modal
    northBtn.onclick = function() {
        pakInstructions.style.display="none";
        northModal.style.display = "block";
        modal=northModal;
        northMusic.play();
        music=northMusic;
    }
    // When the user clicks on <span> (x), close the modal and stop the music
    northClose.onclick = function() {
        northModal.style.display = "none";
        northMusic.pause();
        northMusic.currentTime=0;
    }


    // Get the modal
    var punjabModal = document.getElementById("punjabModal");
    // Get the button that opens the modal
    var punjabBtn = document.getElementById("punjab");
    // Get the <span> element that closes the modal
    var punjabClose = document.getElementById("punjabClose");

    var punjabMusic=document.getElementById('punjabMusic');
    // When the user clicks on the button, open the modal
    punjabBtn.onclick = function() {
        pakInstructions.style.display="none";
        punjabModal.style.display = "block";
        modal=punjabModal;
        punjabMusic.play();
        music=punjabMusic;
    }
    // When the user clicks on <span> (x), close the modal and stop the music
    punjabClose.onclick = function() {
        punjabModal.style.display = "none";
        punjabMusic.pause();
        punjabMusic.currentTime=0;
    }


    // Get the modal
    var sindhModal = document.getElementById("sindhModal");
    // Get the button that opens the modal
    var sindhBtn = document.getElementById("sindh");
    // Get the <span> element that closes the modal
    var sindhClose = document.getElementById("sindhClose");

    var sindhMusic=document.getElementById('sindhMusic');
    // When the user clicks on the button, open the modal
    sindhBtn.onclick = function() {
        pakInstructions.style.display="none";
        sindhModal.style.display = "block";
        modal=sindhModal;
        sindhMusic.play();
        music=sindhMusic;
    }
    // When the user clicks on <span> (x), close the modal and stop the music
    sindhClose.onclick = function() {
        sindhModal.style.display = "none";
        sindhMusic.pause();
        sindhMusic.currentTime=0;
    }

    // Get the modal
    var kpkModal = document.getElementById("kpkModal");
    // Get the button that opens the modal
    var kpkBtn = document.getElementById("kpk");
    // Get the <span> element that closes the modal
    var kpkClose = document.getElementById("kpkClose");

    var kpkMusic=document.getElementById('kpkMusic');
    // When the user clicks on the button, open the modal
    kpkBtn.onclick = function() {
        pakInstructions.style.display="none";
        kpkModal.style.display = "block";
        modal=kpkModal;
        kpkMusic.play();
        music=kpkMusic;
    }
    // When the user clicks on <span> (x), close the modal and stop the music
    kpkClose.onclick = function() {
        kpkModal.style.display = "none";
        kpkMusic.pause();
        kpkMusic.currentTime=0;
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        music.pause();
        music.currentTime=0;
    }
    }

    // *************************************************************************************
    // End Journey

    /*get the vietnam section and button to end the journey*/
    var endJourney=document.getElementById('endJourney');
    var pakistan=document.getElementById('pakistan');
    /*get elements for the last scene*/
    var lastScene=document.getElementById('lastScene');
    var charsLastScene=document.getElementById('charactersLScene');
    var endChar1=document.getElementById('char1LScene');
    var endChar2=document.getElementById('char2LScene');
    var lastDialogue=document.getElementById('lastDialogue');
    var lastSceneTxt=document.getElementById('lastSceneTxt');
    var lastFormWrapper=document.getElementById('locationForm');
    var lastForm=document.getElementById('locationName');
    var lastSceneBgMusic=document.getElementById('lastSceneBg');

    /*when end journey button is clicked, hide vietnam section and display last section*/
    endJourney.addEventListener("click",function(){
    pakistan.style.opacity=0;
    setTimeout(function(){
        pakistan.style.display='none';
        lastScene.style.display='block';
        lastDialogue.play();
    },1500);
    lastScene.style.opacity=1;
    endChar1.style.opacity=1;
    endChar2.style.opacity=1;
    });
    /*move to the last scene*/
    function toWorld(){
        endChar1.style.display="none";
        endChar2.style.display="none";
        lastSceneTxt.style.display="block";
        lastScene.style.backgroundImage = "url('images/worldMap.png')";
        lastFormWrapper.style.display="block";
        lastSceneBgMusic.play();
    }

    lastDialogue.addEventListener("ended",function(){
        toWorld();
    });
    /*if user presses enter key in the form input, give the user a confirmation message through alert*/
    lastForm.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();

        var loc=lastForm.value;
        var alertString='Your request to have a tour to '+loc+' has been received. Keep checking for updates!';
        alert(alertString);
    }
    });

    // *************************************************************************************

})