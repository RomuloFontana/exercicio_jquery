$(document).ready(function(){
    $("header button").click(function(e){
        e.preventDefault();
        
        const inputLista = $("#lista").val();
        const addTaf = $('<li></li>').text(inputLista);
        $(addTaf).appendTo("ul");
        $("#lista").val("");
        
        $(addTaf).click(function(){
            $(this).toggleClass('linha');
        })
    })
})