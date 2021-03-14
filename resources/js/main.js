$(document).ready(function(){
    $(".js-blog-section").waypoint(function( direction ){
        if ( direction == "down") {
            $("nav").addClass("sticky-menu");
        } else {
            $("nav").removeClass("sticky-menu");
        }
    });

});

function openNav(){
    document.getElementById("minimo-nav").style.width = "100%";
};
function closeNav(){
    document.getElementById("minimo-nav").style.width = "0";
};