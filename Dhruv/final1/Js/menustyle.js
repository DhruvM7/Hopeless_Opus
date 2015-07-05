$(document).ready(function(){
	$("#open-button").click(function(){
			$("#target").toggleClass("show-menu");
		});
	/*$("#target").click(function(){
		if($("#target").hasClass("show-menu") == true)
			{$("#target").toggleClass("show-menu");}
			# dd bs=4M if=/path/to/archlinux.iso of=/dev/sdb1 && sync

		});*/
	//trying to close the menu options even when the user clicks anywhere in the screen.
});
