$('.introducao .container .btn').on('click', function(e){
    e.preventDefault()
    $(this).text('Clicou');
});

$('.introducao .container .btn').on('mouseenter', function(e){
    e.preventDefault()
    $(this).text('Passou o mouse');
});

$('.introducao .container .btn').on('mouseleave', function(e){
    e.preventDefault()
    $(this).text('Tirou o mouse');
});

$(document).on('scroll', function(){
    $('.introducao .container .btn').text('Rolando a página');
})