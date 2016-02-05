jQuery(function($){
	var $iconThreeBars = $(".icon-three-bars");
	
	$iconThreeBars.on("click", function(){
        var $this = $(this);

        $this.parent().toggleClass("open");


        
    });


});