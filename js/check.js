$(document).ready(function() {
    
    var obj = jQuery.parseJSON( '{"question":[{"meaning":"to forgive someone and be friendly with them again after an argument or disagreement.","answer":"Make up"},{"meaning":"To do something.","answer":"Get up to"},{"meaning":"To relax completely, or not allow things to upset you.","answer":"Chill out"}]}' );


    // var myArray = [];
    // myArray['meaning'] = "to forgive someone and be friendly with them again after an argument or disagreement.";
    // myArray['answer']  = "Make up";

    // myArray['meaning1'] = "to forgive someone and be friendly with them again after an argument or disagreement.";
    // myArray['answer1']  = "Make up";

// for (var key in myArray) {
//     console.log(key);
// }

    // console.log( myArray ); return false;

    $("#check").click(function(){

        // var qtd = $("select").length;
        var i = 1;
    	
        $("select").each(function(){

            var question = $("#question"+i+" option:selected").val();
            var status = 'wrong';
            var style = 'red';
            var answer = $("#answerQ"+i).val();

            if(question == answer){
                status = 'correct!';
                style = 'green';
            }

            $("#statusQ"+i).attr('class',style);
            $("#statusQ"+i).text(status);

            i++;

        });

    });

});