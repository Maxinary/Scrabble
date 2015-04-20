setup();
updateCookie();
newRow();

$(document).ready(function(){
        $(document.body).on("change","input",function(){
                for(i=0;i<players.length;i++){
                        updatePlayer(i);
                }
        });
});
