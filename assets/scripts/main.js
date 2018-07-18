document.addEventListener('DOMContentLoaded', function() {

    var open = document.getElementById('burger-btn');
    var close = document.getElementById('close-btn');
    
    
    //toggle side navigation
    open.addEventListener('click', function() {

        document.getElementById('side-navigation').style.width = '300px';
        
        //prevent scrolling when side navigation is open
        document.body.style.overflow = 'hidden';
    });

    //close side navigation
    close.addEventListener('click', function() {
        document.getElementById('side-navigation').style.width = '0';
        
        //activate scroll when side nav is closed
        document.body.style.overflow = 'unset';
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
