// Lang switcher

var baseUrl = 'http://euro.do';

$('.lang').on('change', function(){
    var lang = $(this).val();
    window.location.replace(baseUrl + lang);
});

// Steps toggle

$('.stars input[type="radio"]').on('input', function(){
    $('.stars input[type="radio"]').prop('disabled', true);
    if($('#star-4, #star-5').is(':checked')) {
        $('.step-1').hide();
        $('.step-3').fadeIn();
    }
    if($('#star-1, #star-2, #star-3').is(':checked')) {
        $('.step-1').hide();
        $('.step-2').fadeIn();
    }
    $('.review-header').fadeIn();
});
$('.js-finish').on('click', function(){
    $('.step-2, .stars').hide();
    $('.step-4').fadeIn();
});

// File name

$('input[type="file"]').each(function() {
    var $input = $(this),
        $label = $input.next('.file-name span'),
        labelVal = $label.html();
     
    $input.on('change', function(element) {
        var fileName = '';
        if (element.target.value) fileName = element.target.value.split('\\').pop();
        fileName ? $label.html(fileName) : $label.html(labelVal);
    });
});

// Send file

$('.js-success').on('click', function(){
    $('.link-file').hide();
    $('.link-file-success').fadeIn();
});

$('.js-again').on('click', function(){
    $('.link-file-success') .hide();
    $('.link-file').fadeIn();
});