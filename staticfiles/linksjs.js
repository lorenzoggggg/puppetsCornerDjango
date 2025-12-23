document.addEventListener("DOMContentLoaded", function () {
    currentSongIndex = 0;
    document.getElementById("song1").style.color = "purple";
});

function yahooClick() {
    var yahoo = document.getElementById("yahoo");
    yahoo.volume = 0.5;
    yahoo.play();
}

function meowClick() {
    var meow = document.getElementById("meow");
    meow.volume = 0.5;
    meow.play();
    //setTimeout(function() {
    //window.open("catPage.html", "_self");
    //}, 1000);
}

function kitty1Click() {
    var pouik = document.getElementById("pouik");
    pouik.volume = 0.5;
    pouik.play();
}

function kitty2Click() {
    var grin = document.getElementById("grin");
    grin.volume = 0.5;
    grin.play();
}

function logoClick() {
    window.open("index.html", "_self");
}

//function volumeChange() {
//    var speaker = document.getElementById("speaker");
//
//    if (speaker.src.endsWith("assets/gifs/speaker.gif")) {
//        audio.volume = 0.5;
//        speaker.src = "assets/gifs/speaker50.gif";
//    } else if (speaker.src.endsWith("assets/gifs/speaker50.gif")) {
//        audio.volume = 0.25;
//        speaker.src = "assets/gifs/speaker25.gif";
//    } else if (speaker.src.endsWith("assets/gifs/speaker25.gif")) {
//        audio.volume = 1.0;
//        speaker.src = "assets/gifs/speaker.gif";
//    } else {
//        audio.volume = 1.0;
//        speaker.src = "assets/gifs/speaker.gif";
//    }
//}

const songs = ["pulsewidth", "poji", "ape", "pikmin", "sniping", "heart"];
let currentSongIndex = 0;

document.addEventListener("DOMContentLoaded", function() {
    let volumeSlider = document.getElementById("volume");
    let initialVolume = (volumeSlider.value / volumeSlider.max) * 0.5;
    let currentSong = document.getElementById(songs[currentSongIndex]);
    currentSong.volume = initialVolume;
    currentVolume = currentSong.volume;
});

document.getElementById("volume").addEventListener("input", function () {
    let currentSong = document.getElementById(songs[currentSongIndex]);

    currentSong.volume = (this.value / this.max) * 0.5;
    currentVolume = currentSong.volume;
});


function togglePlayPause() {
    let playbtn = document.getElementById("play");
    let currentSong = document.getElementById(songs[currentSongIndex]);

    if (currentSong.paused) {
        currentSong.play();
        playbtn.src = "assets/mediaPlayer/mediaplayer_pause.png";
    } else {
        currentSong.pause();
        playbtn.src = "assets/mediaPlayer/mediaplayer_play.png";
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    changeSong();
}

function previousSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    changeSong();
}

function changeSong() {
    pauseAllSongs();

    let playbtn = document.getElementById("play");
    let currentSong = document.getElementById(songs[currentSongIndex]);
    let trackPic = document.getElementById("trackPic");

    let song1 = document.getElementById("song1")
    let song2 = document.getElementById("song2")
    let song3 = document.getElementById("song3")
    let song4 = document.getElementById("song4")
    let song5 = document.getElementById("song5")
    let song6 = document.getElementById("song6")

    currentSong.currentTime = 0;
    currentSong.play();

    currentSong.volume = currentVolume;

    playbtn.src = "assets/mediaPlayer/mediaplayer_pause.png";

    const songNames = [song1, song2, song3, song4, song5, song6];
    songNames.forEach(song => song.style.color = "#41389b");

    switch (songs[currentSongIndex]) {
        case "poji":
            trackPic.src = "assets/images/swaganime.jpg";
            song2.style.color = "purple"
            break;
        case "ape":
            trackPic.src = "assets/images/apeEscape.jpg";
            song3.style.color = "purple"
            break;
        case "pikmin":
            trackPic.src = "assets/images/pikmin.jpg";
            song4.style.color = "purple"
            break;
        case "sniping":
            trackPic.src = "assets/images/raiden.jpg";
            song5.style.color = "purple"
            break;
        case "heart":
            trackPic.src = "assets/images/klonoa.png";
            song6.style.color = "purple"
            break;
        default:
            trackPic.src = "assets/images/pulswidth.jpg";
            song1.style.color = "purple"
    }
}

function pauseAllSongs() {
    let allAudios = songs.map(id => document.getElementById(id));
    allAudios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}

function song1Click() {
    currentSongIndex = 0;
    changeSong();
}

function song2Click() {
    currentSongIndex = 1;
    changeSong();
}

function song3Click() {
    currentSongIndex = 2;
    changeSong();
}

function song4Click() {
    currentSongIndex = 3;
    changeSong();
}

function song5Click() {
    currentSongIndex = 4;
    changeSong();
}

function song6Click() {
    currentSongIndex = 5;
    changeSong();
}

document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("buttonBanner");
    
    banner.innerHTML += banner.innerHTML;

    let offset = 0;
    function moveBanner() {
        offset -= 1;
        if (offset <= -banner.scrollWidth / 2) {
            offset = 0;
        }
        banner.style.transform = `translateX(${offset}px)`;
        requestAnimationFrame(moveBanner);
    }

    moveBanner();
});

window.onload = function() {
    clearFields();
};

function clearFields() {
    document.getElementById("name").value = "";
    document.getElementById("message").value = "";
}

function postMessage() {
    let name = document.getElementById("name").value.trim();
    let message = document.getElementById("message").value.trim();
    var postMeow = document.getElementById("postMeow");
    postMeow.volume = 0.5;
    postMeow.play();

    if (name === "" && message === "") {
        alert("The fields are empty, dummy...");
        return;
    }
    if (name === "") {
        alert("Don't you have a name?");
        return;
    }
    if (message === "") {
        alert("Can't send a blank letter, can you?");
        return;
    }

    // PHP BULLSHIT NOT WORK
    //let formData = new FormData();
    //formData.append("name", name);
    //formData.append("message", message);
    //
    //fetch("saveMessages.php", {
    //    method: "POST",
    //    body: formData
    //})
    //.then(response => response.text())
    //.then(data => {
    //    alert("Thank you for your message!! :3");
    //    document.getElementById("name").value = "";
    //    document.getElementById("message").value = "";
    //    loadMessages();
    //})
    //.catch(error => console.error("Error:", error));
}

//function loadMessages() {
//    fetch("getMessages.php")
//    .then(response => response.text())
//    .then(data => {
//        document.getElementById("messages").innerHTML = data;
//    })
//    .catch(error => console.error("Error:", error));
//}
//
//window.onload = loadMessages;

//fetch("counter.php")
//    .then(response => response.text())
//    .then(data => {
//        document.getElementById("visitorCount").innerText = data;
//    })
//    .catch(error => console.error("Error fetching visitor count:", error));