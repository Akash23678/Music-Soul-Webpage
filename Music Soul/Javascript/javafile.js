function myFunction() {
    var mysong = document.getElementById("mySong");
    var icon = document.getElementById("icon");
    icon.onclick = function () {
        if (mySong.paused) {
            mySong.play();
            icon.src = "pause.png";
            yourSong.pause();
            iconn.src = "play.png"
            oursong.pause();
            icon2.src = "play.png"
        } else {
            mySong.pause();
            icon.src = "play.png"
        }
    }
}

function myFunctionn() {
    var yoursong = document.getElementById("yourSong");
    var iconn = document.getElementById("iconn");
    iconn.onclick = function () {
        if (yourSong.paused) {
            yourSong.play();
            iconn.src = "pause.png";
            mySong.pause();
            icon.src = "play.png"
            oursong.pause();
            icon2.src = "play.png"
        } else {
            yourSong.pause();
            iconn.src = "play.png"
        }
    }
}


function myFunction2() {
    var oursong = document.getElementById("oursong");
    var icon2 = document.getElementById("icon2");
    icon2.onclick = function () {
        if (oursong.paused) {
            oursong.play();
            icon2.src = "pause.png";
            mySong.pause();
            icon.src = "play.png"
            yourSong.pause();
            iconn.src = "play.png"
        } else {
            oursong.pause();
            icon2.src = "play.png"
        }
    }
}