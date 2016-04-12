jQuery(document).ready(function($) {

    $(window).load(function(){
        $('#preloader').fadeOut('slow',function(){$(this).remove();});
    });
});

$('#lef-tpanel-btn').on('click', function() {
	$('#lef-tpanel-btn').toggleClass('close');
	$('#backplate').toggleClass('active');
	$('#left-panel-fx').toggleClass('active');
});
$('#backplate').on('click', function() {
	$('#lef-tpanel-btn').removeClass('close');
	$('#backplate').removeClass('active');
	$('#left-panel-fx').removeClass('active');
})

