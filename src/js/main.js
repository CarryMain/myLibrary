import './lib/lib';

$('button').on('click', function() {
    $('div').eq(2).toggleClass('active');
});

$('div').click(function () {
    console.log($(this).index());
})

$('button').fadeIn(1900);