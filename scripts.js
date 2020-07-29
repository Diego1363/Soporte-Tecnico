jQuery('document').ready(fuction($){

	var menuBtn = $('.menu-icon'), menu = $('.navigation ul');

	menuBtn.click(function() {

		menu.addClass('show');
	});
});