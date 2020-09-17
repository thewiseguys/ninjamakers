	function openNav() {
	  document.getElementById("mySidenav").style.width = "250px";
	}

	function closeNav() {
	  document.getElementById("mySidenav").style.width = "0";
	}

	function dispBasic() {
	  document.getElementById("advanceCoursesWrapper").style.display = "none";
	  document.getElementById("basicCoursesWrapper").style.display = "block";
	  document.getElementById("BasicSwitch").style.color = "white";
	  document.getElementById("BasicSwitch").style.background = "#101021";
	  document.getElementById("AdvanceSwitch").style.color = "#101021";
	  document.getElementById("AdvanceSwitch").style.background = "white";
	}
	
	function dispAdvance() {
	  document.getElementById("advanceCoursesWrapper").style.display = "block";
	  document.getElementById("basicCoursesWrapper").style.display = "none";
	  document.getElementById("AdvanceSwitch").style.color = "white";
	  document.getElementById("AdvanceSwitch").style.background = "#101021";
	  document.getElementById("BasicSwitch").style.color = "#101021";
	  document.getElementById("BasicSwitch").style.background = "white";
	}

	$("#demoSubmit").click(function() {
		var url = "http://localhost/demoForm";
		var data = {
			name : $('#demoFormWrap').find('input[name="name"]').val(),
			phone : $('#demoFormWrap').find('input[name="phone"]').val(),
			iam : $('#demoFormWrap').find('select[name="iam"]').val(),		
		}

		$.post(url,data,function(data,status){
			console.log(data, " and ",status );
		});

		console.log("Data is", data);
		UIkit.notification('<div style="font-weight:normal;font-size:0.75em;text-align:center;font-family:Verdana;color:#101021">Our Team will contact you to schedule the Demo</div>', {status:'success',pos: 'top-right'})

	});
	

	$("#BasicSwitch").click(function() {
		console.log("Basic Clicked");
		dispBasic();

	});
	$("#AdvanceSwitch").click(function() {
		console.log("Advance Clicked");
		dispAdvance();
	});
	

$(document).ready(function () {

  	$(".contactUsNabBtn").click(function() {
  		closeNav();
    	console.log("I am clicked");
      	$('html, body').animate({
          scrollTop: $(".footerWrap").offset().top
    	}, 3000);
    });

    $(".aboutUsNabBtn").click(function() {
  		closeNav();
    	console.log("I am clicked");
      	$('html, body').animate({
          scrollTop: $("#wawSec").offset().top
    	}, 1500);
    });

    $(".coursesNabBtn").click(function() {
  		closeNav();
    	console.log("I am clicked");
      	$('html, body').animate({
          scrollTop: $(".courseHead").offset().top
    	}, 2000);
    });

    




  });