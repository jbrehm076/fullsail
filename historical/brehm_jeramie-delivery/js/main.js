/**
 * Created by jbrehm on 1/9/14.
 */
$(function(){
//Utility Items
	$( document).tooltip({
		track: true
	});

	$(".adBtn,.adBtnVert, .loginBtn, .searchBtn, .infoIcon, .filterBtn, .homeBtn, .myRackBtn,.regBtn,#logBtn")
		.button()
		.click(function(event){
		event.preventDefault();
	});

	$("#slider-range").slider({
		range:true,
		min: 0,
		max: 1000,
		values: [150,800],
		slide: function (event, ui){
			$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
		}
	});
	$("#amount").val("$" + $("#slider-range").slider("values",0) + " -$" + $("#slider-range").slider("values",1));

	$(".resultsAcc,.myRackAcc").accordion({
		collapsible: true,
		active: false,
		heightStyle: "content"
	});



//Utility Items END

//Button functions START
	$(".infoIcon").on("click", function(){
		window.location = 'details.html';
	});

	$(".searchBtn").on("click", function(){
		window.location = 'results.html';
	});

	$(".filterBtn, .homeBtn").on("click",function(){
		window.location = 'home.html';
	});

	$(".myRackBtn").on('click',function(){
		window.location = 'favorites.html';
	});

    $("#logBtn").on('click',function(){
        window.location = 'home.html';
    });

	$("#termsCond").on('click',function(){
		var checkStat = ($("termsCond").is(':checked'));
		console.log (checkStat);
		$('.regBtn').toggleClass('disabled');
		/*if (checkStat == 'true'){
			$('.regBtn').removeClass('.disabled').addClass('.enabled');
		}else{
			$('.regBtn').removeClass('.enabled').addClass('disabled');
		}*/
	})
});