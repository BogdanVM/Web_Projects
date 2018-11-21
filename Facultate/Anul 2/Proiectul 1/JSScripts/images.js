function nextImage(count, imageArray, image) {
   
    if (count < imageArray.length - 1) {
            
        count = count + 1;
        image.src = imageArray[count];
    }
    else if (count === imageArray.length - 1) {
            
        count = 0;
        image.src = imageArray[count];
    }
    
    return count;
}

function previousImage(count, imageArray, image) {
    
    if (count > 0) {
            
        count = count - 1;
        image.src = imageArray[count];
    }
    else if (count === 0) {
            
        count = imageArray.length - 1;
        image.src = imageArray[count];
    }
    
    return count;
}

window.onload = function() {
    
    let count = 0;
    let image = document.getElementById("imageGallery");
    let arrows = document.getElementsByClassName("arrows");
    
    let leftArrow = arrows[0];
    let rightArrow = arrows[1];
    
    let imageArray = new Array();
    
    let path = window.location.pathname;
    let pageName = path.substring(path.lastIndexOf('/') + 1);
    
    if (pageName === "spain.html") {
        imageArray[0] = "../../Images/Flags/spain.png";
        imageArray[1] = "../../Images/Spain/1.jpg";
        imageArray[2] = "../../Images/Spain/2.jpg";
        imageArray[3] = "../../Images/Spain/3.jpg";
        imageArray[4] = "../../Images/Spain/4.jpg";
        imageArray[5] = "../../Images/Spain/5.jpg";
    }
    
    else if (pageName === "italy.html") {
        imageArray[0] = "../../Images/Flags/italy.png";
        imageArray[1] = "../../Images/Italy/1.jpg";
        imageArray[2] = "../../Images/Italy/2.jpg";
        imageArray[3] = "../../Images/Italy/3.jpg";
        imageArray[4] = "../../Images/Italy/4.jpg";
    }
    
    else if (pageName === "england.html") {
        imageArray[0] = "../../Images/Flags/england.png";
        imageArray[1] = "../../Images/England/1.jpg";
        imageArray[2] = "../../Images/England/2.jpg";
        imageArray[3] = "../../Images/England/3.jpg";
        imageArray[4] = "../../Images/England/4.jpg";
        imageArray[5] = "../../Images/England/5.jpg";
    }
    
    leftArrow.onclick = function() {  count = previousImage(count, imageArray, image); }
    rightArrow.onclick = function() {  count = nextImage(count, imageArray, image);  }
    image.onclick = function() { count = nextImage(count, imageArray, image); }
}