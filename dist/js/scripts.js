/*!
    * <img src="assets/img/DBSlogo.png" alt="" height="58px" width="140px"> - SB Admin v6.0.0 (https://startbootstrap.com/templates/sb-admin)
    * Copyright 2013-2020 <img src="assets/img/DBSlogo.png" alt="" height="58px" width="140px">
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    (function($) {
    "use strict";

    // Add active state to sidbar nav links
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
        $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
            if (this.href === path) {
                $(this).addClass("active");
            }
        });

    // Toggle the side navigation
    $("#sidebarToggle").on("click", function(e) {
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
    });
})(jQuery);

document.getElementById("btnClick").click();

function incr() {
    var v1=document.getElementById('p1').style.width;
    console.log(v1);
    var valueNeeded = v1.substring(0, 2);
    // v1.slice(v1.length - 2);
    console.log(valueNeeded);
    insertValue =  parseInt(valueNeeded);
    valueNeeded = insertValue+10;
     

    if(valueNeeded == 100){
        console.log("Reward For You!");
        this.myFunction();
        document.getElementById("modelClick").click();
    }
    console.log(valueNeeded);
    document.getElementById("p1").style = "width :"+valueNeeded+"%";
    document.getElementById("p1").innerHTML = valueNeeded + "%";
    }

    function myFunction() {
        
        var x = document.createElement("IMG");
        // var x = document.getElementById("RewardImg");
        // x.setAttribute("src", "./assets/source.gif");
        // x.setAttribute("width", "80%");
        // x.setAttribute("height", "50%");
        // // x.setAttribute("position","absolute");
        // // x.setAttribute("top","-80%");
        // // x.setAttribute("z-index", "100");
        // x.setAttribute("alt", "The Pulpit Rock");
        document.body.appendChild(x);
      }