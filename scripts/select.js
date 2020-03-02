$(document).ready(mudaImagem());



function mudaImagem() {
    $(document).on('change', 'select', function(e) {
        let selecionado = $(this).find('option:selected');
        
        if(selecionado.val() === "accord" ) {
            $('#selectModelos').css("background", "url(assets/accord.svg) no-repeat");
        } else if (selecionado.val() === "city") {
            $('#selectModelos').css("background", "url(assets/city.svg) no-repeat");
        } else if (selecionado.val() === "fit") {
            $('#selectModelos').css("background", "url(assets/fit.svg) no-repeat");
        }
       
    });
}