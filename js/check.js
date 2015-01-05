$(document).ready(function() {
    
    $("#check").click(function(){
    	
    	var question1 = $("#question1 option:selected").val();
    	var status1 = 'wrong';
    	var style1 = 'red';

    	if(question1 == 'opt2'){
    		status1 = 'correct!';
    		style1 = 'green';
    	}
    	$("#statusQ1").attr('class',style1);
    	$("#statusQ1").text(status1);

    	var question2 = $("#question2 option:selected").val();
    	var status2 = 'wrong';
    	var style2 = 'red';

    	if(question2 == 'opt3'){
    		status2 = 'correct!';
    		style2 = 'green';
    	}
    	$("#statusQ2").attr('class',style2);
    	$("#statusQ2").text(status2);

    	var question3 = $("#question3 option:selected").val();
    	var status3 = 'wrong';
    	var style3 = 'red';

    	if(question3 == 'opt3'){
    		status3 = 'correct!';
    		style3 = 'green';
    	}
    	$("#statusQ3").attr('class',style3);
    	$("#statusQ3").text(status3);

    });

});