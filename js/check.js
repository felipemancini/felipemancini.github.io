$(document).ready(function() {

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