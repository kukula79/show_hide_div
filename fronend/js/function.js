$(document).ready(function(){
 $("#content").hide();

 $('#nms_product').on('change', function() {
    if ($('#nms_product').val() == "none"){
            show_hide();
    } else {
        show_hide($('#nms_product').val(),$('#nms_mode').val());
        }
     });
 $('#nms_mode').on('change', function() {
    if ($('#nms_mode').val() == "none"){
            show_hide($('#nms_product').val(),$('#nms_mode').val());
    } else {
        show_hide($('#nms_product').val(),$('#nms_mode').val());
        }
     });

function show_hide(){
    var product = $('#nms_product').val();
    var mode = $('#nms_mode').val();
    if ( product != "none"  &&  mode != "none" ){
       $("#content").show();
       console.log("User select nms_product : "+ product+ "And nms_mode :"+mode + "-> Display");
       product = null;
       mode = null
        } else {
            $("#content").hide();
            console.log("User select nms_product : "+ product+ "And nms_mode :"+mode + "-> NOT Display");
            product = null;
            mode = null
        }
    }
});




