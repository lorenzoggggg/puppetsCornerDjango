// Declare global variables safely
let currentSongIndex = 0;
let currentVolume = 0.5;

const songs = ["pulsewidth", "poji", "ape", "pikmin", "sniping", "heart"];

document.addEventListener("DOMContentLoaded", function () {
    // Initial highlight
    document.getElementById("song1").style.color = "purple";

    // Initialize volume
    const volumeSlider = document.getElementById("volume");
    currentVolume = (volumeSlider.value / volumeSlider.max) * 0.5;
    document.getElementById(songs[currentSongIndex]).volume = currentVolume;

    // Marquee banner animation
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

// Volume slider handler
document.getElementById("volume").addEventListener("input", function () {
    const currentSong = document.getElementById(songs[currentSongIndex]);
    currentVolume = (this.value / this.max) * 0.5;
    currentSong.volume = currentVolume;
});

// Clear form fields on page load
window.onload = function () {
    clearFields();
};

function clearFields() {
    document.getElementById("name").value = "";
    document.getElementById("message").value = "";
}

// Media control
function togglePlayPause() {
    const playbtn = document.getElementById("play");
    const currentSong = document.getElementById(songs[currentSongIndex]);

    if (currentSong.paused) {
        currentSong.play();
        playbtn.src = playbtn.dataset.pauseSrc; // See HTML note
    } else {
        currentSong.pause();
        playbtn.src = playbtn.dataset.playSrc;
    }
}

function pauseAllSongs() {
    songs.forEach(id => {
        const audio = document.getElementById(id);
        audio.pause();
        audio.currentTime = 0;
    });
}

function changeSong() {
    pauseAllSongs();

    const playbtn = document.getElementById("play");
    const currentSong = document.getElementById(songs[currentSongIndex]);
    const trackPic = document.getElementById("trackPic");

    const songElements = [
        document.getElementById("song1"),
        document.getElementById("song2"),
        document.getElementById("song3"),
        document.getElementById("song4"),
        document.getElementById("song5"),
        document.getElementById("song6")
    ];

    currentSong.currentTime = 0;
    currentSong.volume = currentVolume;
    currentSong.play();

    playbtn.src = playbtn.dataset.pauseSrc;

    // Reset song name colors
    songElements.forEach(song => song.style.color = "#41389b");

    switch (songs[currentSongIndex]) {
        case "poji":
            trackPic.src = trackPic.dataset.picPoji;
            songElements[1].style.color = "purple";
            break;
        case "ape":
            trackPic.src = trackPic.dataset.picApe;
            songElements[2].style.color = "purple";
            break;
        case "pikmin":
            trackPic.src = trackPic.dataset.picPikmin;
            songElements[3].style.color = "purple";
            break;
        case "sniping":
            trackPic.src = trackPic.dataset.picSniping;
            songElements[4].style.color = "purple";
            break;
        case "heart":
            trackPic.src = trackPic.dataset.picHeart;
            songElements[5].style.color = "purple";
            break;
        default:
            trackPic.src = trackPic.dataset.picPulsewidth;
            songElements[0].style.color = "purple";
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

// Individual song buttons
function song1Click() { currentSongIndex = 0; changeSong(); }
function song2Click() { currentSongIndex = 1; changeSong(); }
function song3Click() { currentSongIndex = 2; changeSong(); }
function song4Click() { currentSongIndex = 3; changeSong(); }
function song5Click() { currentSongIndex = 4; changeSong(); }
function song6Click() { currentSongIndex = 5; changeSong(); }

// Audio buttons
function yahooClick() {
    const yahoo = document.getElementById("yahoo");
    yahoo.volume = 0.5;
    yahoo.play();
}

function meowClick() {
    const meow = document.getElementById("meow");
    meow.volume = 0.5;
    meow.play();
    // window.open("catPage.html", "_self"); // Optional delay logic
}

function kitty1Click() {
    const pouik = document.getElementById("pouik");
    pouik.volume = 0.5;
    pouik.play();
}

function kitty2Click() {
    const grin = document.getElementById("grin");
    grin.volume = 0.5;
    grin.play();
}

function logoClick() {
    window.open("index.html", "_self");
}

async function postMessage() {
    const nameInput = document.getElementById("name");
    const messageInput = document.getElementById("message");
    const name = nameInput.value.trim();
    const message = messageInput.value.trim();
    var postMeow = document.getElementById("postMeow");
    postMeow.volume = 0.5;
    postMeow.play();

    if (!name && !message) {
        alert("The fields are empty, dummy...");
        return;
    }

    if (!name) {
        alert("Don't you have a name?");
        return;
    }

    if (!message) {
        alert("Can't send a blank letter, can you?");
        return;
    }

    try {
        const response = await fetch('/post-message/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, message }),
        });

        const data = await response.json();

        if (data.status === 'success') {
            alert('meowssage sent!!1!');
            nameInput.value = '';
            messageInput.value = '';

            appendMessageToDOM(data.message_data);
        } else {
            alert('Failed to post: ' + (data.message || 'Unknown error.'));
        }
    } catch (error) {
        console.error('Error posting message:', error);
        alert('An error occurred. Please try again.');
    }
}

function appendMessageToDOM({ name, message, timestamp }) {
    const messageList = document.getElementById("messageList");  // Ensure this ID matches your HTML
    const messageItem = document.createElement("li");  // Create a new list item
    messageItem.innerHTML = `<strong>${name}</strong> (${timestamp}): ${message}`;  // Format the message
    messageList.prepend(messageItem);  // Add the new message to the top of the list
}
