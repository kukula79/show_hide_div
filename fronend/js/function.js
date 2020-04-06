$(document).ready(function(){
 $("#content").hide();
 $('#nms_product').on('change', function() {
    show_hide($('#nms_product').val(),$('#nms_mode').val());
     });
 $('#nms_mode').on('change', function() {
    show_hide($('#nms_product').val(),$('#nms_mode').val());
     });

function show_hide(product,mode){
    if ( product != "none"  &&  mode != "none" ){
        $("#content").show();
        console.log("User select nms_product : "+ product+ " And nms_mode :"+mode + "-> Display");
//        switch(product,mode){
//            case (product == "cs"):
//
//            }
       } else {
            $("#content").hide();
            console.log("User select nms_product : "+ product+ " And nms_mode :"+mode + "-> NOT Display");
        }
    }
});




