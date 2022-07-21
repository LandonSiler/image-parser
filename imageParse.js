let imageLink = document.getElementById("imageLink").innerHTML;
let casualOSLink = document.getElementById("casualOSLink").innerHTML;

let i = new Image;
i.src = imageLink;
i.onload = function() {
    window.open(`${casualOSLink}&imageWidth=${i.width}&imageHeight=${i.height}`,"_self");
};
