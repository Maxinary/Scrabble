$(document).ready(function(){
        for(i=3;i<6;i++){
                $("#p".concat(i.toString())).hide();
                $("#p".concat(i.toString()).concat("In")).hide();
        }
        $("#playerNum").change(function(){
                for(i=1;i<=$("#playerNum").val();i++){
                        $("#p".concat(i.toString())).fadeIn("slow","swing");
                        $("#p".concat(i.toString()).concat("In")).fadeIn("slow","swing");
                }
                for(i=Math.round($("#playerNum").val())+1;i<6;i++){
                        $("#p".concat(i.toString())).fadeOut();
                        $("#p".concat(i.toString()).concat("In")).fadeOut();
                }
        });
});

