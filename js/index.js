$(function() {
    $('header ul a').on('click', function(event) {
        $('input#drawer_input').prop('checked',false);
    });
});

