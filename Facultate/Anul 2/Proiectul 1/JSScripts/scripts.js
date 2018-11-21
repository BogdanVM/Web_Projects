
window.onload = function() {
    
    let path = window.location.pathname;
    let pageName = path.substring(path.lastIndexOf('/') + 1);
    
    let currentLi;
    if (pageName === "index.html") {
        
        currentLi = document.querySelectorAll("#myNav .menuItem li")[0];
        currentLi.style.background = "#9ca1a8";
    }
    
    if (pageName === "countries.html" || pageName === "europe.html" || pageName === "spain.html" || 
       pageName === "england.html" || pageName === "italy.html") {
        
        currentLi = document.querySelectorAll("#myNav .menuItem li")[1];
        currentLi.style.background = "#9ca1a8";
    }
    
    if (pageName === "romania.html") {
        
        currentLi = document.querySelectorAll("#myNav .menuItem li")[2];
        currentLi.style.background = "#9ca1a8";
    }
    
    if (pageName === "contact.html") {
        
        currentLi = document.querySelectorAll("#myNav .menuItem li")[3];
        currentLi.style.background = "#9ca1a8";
    }
    
    let liElements = document.querySelectorAll(".optionsList ul li");
    let aElements = document.querySelectorAll(".optionsList ul li a");
    
    for (let index = 0; index < liElements.length; ++index) {
        
        let currentLi = liElements[index];
        let currentA = aElements[index];
        
        currentLi.onclick = function() { currentA.click(); }
    }
}