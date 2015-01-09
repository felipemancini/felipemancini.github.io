$(document).ready(function() {

    function pick(n, min, max){
        var values = [], i = max;
        while(i >= min) values.push(i--);
        var results = [];
        var maxIndex = max;
        for(i=1; i <= n; i++){
            maxIndex--;
            var index = Math.floor(maxIndex * Math.random());
            results.push(values[index]);
            values[index] = values[maxIndex];
        }
        return results;
    }

    var obj = jQuery.parseJSON( '{"question":[{"meaning":"0","answer":"0"},{"meaning":"To forgive someone and be friendly with them again after an argument or disagreement.","answer":"Make up"},{"meaning":"To do something.","answer":"Get up to"},{"meaning":"To relax completely, or not allow things to upset you.","answer":"Chill out"},{"meaning":"To admire and respect someone.","answer":"Look up to sb"},{"meaning":"To become unconscious for a short time, for example when ill, badly hurt, or drunk.","answer":"Pass Out"},{"meaning":"To be similar to an older member of your family in appearance or character.","answer":"Take after sb"},{"meaning":"To become familiar with a place and to feel happy and confident in it.","answer":"Settle down"},{"meaning":"A test to see how useful or effective something or someone is.","answer":"Try out"},{"meaning":"To argue with someone and stop being friendly with them.","answer":"Fall out"},{"meaning":"To stop doing something before you have finished it, usually because it is too difficult.","answer":"Give up"},{"meaning":"Used to warn someone of danger or an accident that seems likely to happen.","answer":"Watch out"},{"meaning":"To provide someone with a place to stay temporarily.","answer":"Put sb up"},{"meaning":"To make someone feel silly or not important by criticizing them.","answer":"Put sb down"}]}' );

    var n = pick(5, 0, 13);
    // console.log(obj); return false;

    $("#q1").html(obj.question[n[0]].meaning);
    $("#q2").html(obj.question[n[1]].meaning);
    $("#q3").html(obj.question[n[2]].meaning);
    $("#q4").html(obj.question[n[3]].meaning);
    $("#q5").html(obj.question[n[4]].meaning);

    $(".opt1").html(obj.question[n[2]].answer);
    $(".opt1").val(obj.question[n[2]].answer);
    $("#answerQ1").val(obj.question[n[0]].answer);

    $(".opt2").html(obj.question[n[4]].answer);
    $(".opt2").val(obj.question[n[4]].answer);
    $("#answerQ2").val(obj.question[n[1]].answer);

    $(".opt3").html(obj.question[n[0]].answer);
    $(".opt3").val(obj.question[n[0]].answer);
    $("#answerQ3").val(obj.question[n[2]].answer);

    $(".opt4").html(obj.question[n[1]].answer);
    $(".opt4").val(obj.question[n[1]].answer);
    $("#answerQ4").val(obj.question[n[3]].answer);

    $(".opt5").html(obj.question[n[3]].answer);
    $(".opt5").val(obj.question[n[3]].answer);
    $("#answerQ5").val(obj.question[n[4]].answer);

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