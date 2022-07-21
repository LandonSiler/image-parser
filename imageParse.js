let i = new Image;
i.src = document.getElementById("imageLink").innerHTML;
i.onload = () => {window.open(`${document.getElementById("casualOSLink").innerHTML}&imageWidth=${i.width}&imageHeight=${i.height}`,"_self")};
