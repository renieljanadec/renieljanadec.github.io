document.addEventListener('DOMContentLoaded', function() {

    var open = document.getElementById('burger-btn');
    var close = document.getElementById('close-btn');
    
    
    //toggle side navigation
    open.addEventListener('click', function() {

        document.getElementById('side-navigation').style.width = '100%';
    });

    //close side navigation
    close.addEventListener('click', function() {
        document.getElementById('side-navigation').style.width = '0';
    });

    //close side navigation when a link is clicked
    function close() {
        document.getElementById('side-navigation').style.width = '0';
    }
});


/* JQUERY WAY */
/*$(document).ready(function(){

    //toggle nav
    $('#burger-btn').click(function(){
        $('#side-navigation').css("width", "100%");
    });

    //close nav
    $('#close-btn').click(function(){
        $('#side-navigation').css("width", "0");
    });

});*/
