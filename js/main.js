$(document).ready(function () {
    
    document.getElementById("more-view").addEventListener("click", checkedView, false);
    document.getElementById("more-search").addEventListener("click", checkedSearch, false);

});

function checkedView() {
    
    $(".more-view").toggleClass("ver");

}

function checkedSearch() {

    $(".more-search").toggleClass("ver");

}