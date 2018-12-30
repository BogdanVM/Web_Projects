window.onload = function() {
    let inputs = document.getElementsByClassName("choosePath");

    for (let i = 0; i < inputs.length; ++i) {

        inputs[i].addEventListener("click", function() {
            let url = "Pages/" + inputs[i].value.toLowerCase() + ".html";
            window.open(url, "_self");
        }, true);
    }
}
