const img = document.createElement("img");
img.setAttribute('src', 'https://raw.githubusercontent.com/IqNone/xss/refs/heads/main/giphy.gif');
img.style["position"] = "sticky";
img.style["top"] = "0";
img.style["left"] = "10px";
img.style["z-indez"] = "999999999";
document.body.appendChild(img);

document.body.insertAdjacentHTML('beforeend',
    '<audio autoPlay loop><source src="https://github.com/IqNone/xss/raw/refs/heads/main/audio.mp3" type="audio/mpeg"/></audio>');


