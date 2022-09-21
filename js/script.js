
$(document).ready(function(){
    $("#divForm").hide();
});

$(document).ready(function(){
    $("#botaoFechar").hide();
});

$(document).ready(function(){
    $("#botaoCadastro").click(function(){
      $("#divForm").toggle();
    });
});

$(document).ready(function(){
    $("#botaoCadastro").click(function(){
      $("#botaoFechar").toggle();
    });
});

$(document).ready(function(){
    $("#botaoFechar").click(function(){
      $("#divForm").toggle();
    });
});

$(document).ready(function(){
    $("#botaoFechar").click(function(){
      $("#botaoFechar").hide();
    });
});

$(function(){
    $("#form").validate();
});
