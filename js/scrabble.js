setup();
updateCookie();
newRow();
newRow();

$(document).ready(function(){
        $(document.body).on("change","input",function(){
                updatePlayer($(this).parent().index());
        });
});
