$(document).ready(function(){

    $("#sandwich, .menu_item").click(function() {
        $("#sandwich").toggleClass("active");
      });

    $('.toggle').click(function(){
        if ($(".mnu").is(":visible")){
            $(".mnu").fadeOut(600);
            $(".mnu").addClass("slideOutRight animated");
            $("#sandwich").removeClass('active');
        }else{
            $(".mnu").fadeIn(600);
            $(".mnu").addClass("slideInRight animated");
            $(".mnu").removeClass("slideOutRight animated");
        };
    });


    $(document).mouseup(function (e) {
        var container = $(".mnu");
        if (container.has(e.target).length === 0){
            container.fadeOut(600);
            $("#sandwich").removeClass('active');
        }
    });

});