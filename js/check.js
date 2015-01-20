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

    var obj = jQuery.parseJSON( '{"question":[{"meaning":"0","answer":"0"},{"meaning":"To forgive someone and be friendly with them again after an argument or disagreement.","answer":"Make up"},{"meaning":"To do something.","answer":"Get up to"},{"meaning":"To relax completely, or not allow things to upset you.","answer":"Chill out"},{"meaning":"To admire and respect someone.","answer":"Look up to sb"},{"meaning":"To become unconscious for a short time, for example when ill, badly hurt, or drunk.","answer":"Pass Out"},{"meaning":"To be similar to an older member of your family in appearance or character.","answer":"Take after sb"},{"meaning":"To become familiar with a place and to feel happy and confident in it.","answer":"Settle down"},{"meaning":"A test to see how useful or effective something or someone is.","answer":"Try out"},{"meaning":"To argue with someone and stop being friendly with them.","answer":"Fall out"},{"meaning":"To stop doing something before you have finished it, usually because it is too difficult.","answer":"Give up"},{"meaning":"Used to warn someone of danger or an accident that seems likely to happen.","answer":"Watch out"},{"meaning":"To provide someone with a place to stay temporarily.","answer":"Put sb up"},{"meaning":"To make someone feel silly or not important by criticizing them.","answer":"Put sb down"},{"meaning":"To decide or arrange to delay an event or activity until a later time or date.","answer":"Put off"},{"meaning":"To decide that a planned event, will not happen, or to end an activity because it is no longer useful or possible.","answer":"Call off"},{"meaning":"To remove or throw away something unwanted.","answer":"Get rid of"},{"meaning":"If a business or organization stops operating.","answer":"Close down"},{"meaning":"To understand, especially after a long time.","answer":"Catch on"},{"meaning":"To criticize, punish, or be unkind to the same person often and unfairly.","answer":"Pick on sb"},{"meaning":"Not have any more of something.","answer":"Run out of"},{"meaning":"Escape.","answer":"Look over"},{"meaning":"Raise children.","answer":"Bring up"},{"meaning":"To start a journey.","answer":"Set off"},{"meaning":"To start eating something eagerly.","answer":"Tuck in"},{"meaning":"The way in which things are organized or arranged.","answer":"Set up"},{"meaning":"To be as good as something.","answer":"Live up to sth"},{"meaning":"The moment when an aircraft leaves the ground and begins to fly.","answer":"Take off"},{"meaning":"To put on formal clothes for a special occasion or clothes in order to change your appearance.","answer":"Dress up"},{"meaning":"To leave a hotel after paying and returning your room key.","answer":"Check out"},{"meaning":"Ask for news about.","answer":"Ask after"},{"meaning":"Stop demanding sth, stop saying that you will do sth.","answer":"Back down"},{"meaning":"Decide not to do sth you agreed to do.","answer":"Back out"},{"meaning":"Depend on sth happening.","answer":"Bank on"},{"meaning":"Stop working (for machine,etc).","answer":"Break down"},{"meaning":"Escape (from prison).","answer":"Break out of"},{"meaning":"Change the date/time of an event so it happends earlier.","answer":"Bring forward"},{"meaning":"Introduce a new law or system.","answer":"Bring in"},{"meaning":"Cause (an illness, etc).","answer":"Bring on"},{"meaning":"Produce and start to sell a new product.","answer":"Bring out"},{"meaning":"Look after a child until he or she becomes an adult.","answer":"Bring up"},{"meaning":"Start discussing a subject.","answer":"Bring up"},{"meaning":"Require, need.","answer":"Call for"},{"meaning":"Demand.","answer":"Call for"},{"meaning":"Cancel.","answer":"Call off"},{"meaning":"Continue.","answer":"Carry on"},{"meaning":"Perform an experiment, etc.","answer":"Carry out"},{"meaning":"Become popular or fashionable.","answer":"Catch on"},{"meaning":"Understand.","answer":"Catch on"},{"meaning":"Reach the same point/level as.","answer":"Catch up with"},{"meaning":"Follow sb/sth quickly in order to catch them.","answer":"Chase after"},{"meaning":"Register at a hotel or an airport.","answer":"Check in"},{"meaning":"Leave a hotel.","answer":"Check out"},{"meaning":"Investigate.","answer":"Check out"},{"meaning":"Become brighter and better (for weather).","answer":"Clear up"},{"meaning":"Stop operating (for companies).","answer":"Close down"},{"meaning":"Happen again (for regular events).","answer":"Come (a)round"},{"meaning":"Be persuaded to change your mind (about).","answer":"Come (a)round (to)"},{"meaning":"Find sth or meet sb by chance.","answer":"Come across"},{"meaning":"Get sth, especially sth that is hard to get.","answer":"Come by"},{"meaning":"Start to suffer from a minor illness.","answer":"Come down with"},{"meaning":"Offer help or information.","answer":"Come forward"},{"meaning":"Inherit.","answer":"Come into"},{"meaning":"Succeed.","answer":"Come off"},{"meaning":"Develop or make progress.","answer":"Come on"},{"meaning":"Start to be broadcast.","answer":"Come on"},{"meaning":"Be published.","answer":"Come out"},{"meaning":"Become conscious.","answer":"Come round/to"},{"meaning":"Think of (an idea, a plan, etc).","answer":"Come up with"},{"meaning":"Rely on, trust.","answer":"Count on"},{"meaning":"Draw a line through sth written.","answer":"Cross out"},{"meaning":"Do less of (smoking, etc).","answer":"Cut down (on)"},{"meaning":"Reduce an amount of.","answer":"Cut down (on)"},{"meaning":"Make a place difficult or impossible to enter, leave or communicate with.","answer":"Cut off"},{"meaning":"Stop the supply of sth.","answer":"Cut off"},{"meaning":"Disconnect.","answer":"Cut off"},{"meaning":"Realise it for the first time.","answer":"Dawn on"},{"meaning":"Handle, cope with.","answer":"Deal with"},{"meaning":"Become less noisy, powerful or active.","answer":"Die down"},{"meaning":"Get rid of.","answer":"Do away with"},{"meaning":"Repair, paint or improve.","answer":"Do up"},{"meaning":"Live without (sth you cannot afford).","answer":"Do without"},{"meaning":"Create (plans, etc).","answer":"Draw up"},{"meaning":"Put on fancy or unusual clothes.","answer":"Dress up"},{"meaning":"Visit unexpectedly.","answer":"Drop in (on)"},{"meaning":"Let someone get out of a vehicle.","answer":"Drop off"},{"meaning":"Fall asleep.","answer":"Drop off"},{"meaning":"Leave school, etc before you have finished a course.","answer":"Drop out (of)"},{"meaning":"Prevent a sound from being heard by making a louder noise.","answer":"Drown out"},{"meaning":"Accept sth and try to deal with it.","answer":"Face up to"},{"meaning":"Fall in love with.","answer":"Fall for"},{"meaning":"Believe (a lie,trick,joke,etc).","answer":"Fall for"},{"meaning":"Have an argument with and stop being friends.","answer":"Fall out (with)"},{"meaning":"Feel well enough to do.","answer":"Feel up to"},{"meaning":"Add information in the spaces or a document.","answer":"Fill in"},{"meaning":"Discover information, etc.","answer":"Find out"},{"meaning":"Turn and look at the pages of a magazine, etc quickly.","answer":"Flick through"},{"meaning":"Make sb feel sad or lose hope.","answer":"Get (sb) down"},{"meaning":"Have a good relationship (with).","answer":"Get along (with)"},{"meaning":"Try to express.","answer":"Get at"},{"meaning":"Escape punishment for.","answer":"Get away with"},{"meaning":"Return from a place.","answer":"Get back"},{"meaning":"Manage to survive.","answer":"Get by"},{"meaning":"Have a good relationship (with).","answer":"Get on (with)"},{"meaning":"Be almost a particular time.","answer":"Get on for"},{"meaning":"Continue doing.","answer":"Get on with"},{"meaning":"Recover from (an illness, etc).","answer":"Get over"},{"meaning":"Start (after planning to do sth for a long time).","answer":"Get round to"},{"meaning":"Use all of, finish.","answer":"Get through"},{"meaning":"To do something.","answer":"Get up to"},{"meaning":"Give free of charge.","answer":"Give away"},{"meaning":"Reveal sth you are trying to hide.","answer":"Give away"},{"meaning":"Stop making an effort to achieve sth difficult.","answer":"Give in"},{"meaning":"Produce sth such as heat or a smell.","answer":"Give off"},{"meaning":"To stop doing something before you have finished it, usually because it is too difficult.","answer":"Give up"},{"meaning":"Go on holiday.","answer":"Go away"},{"meaning":"Be remembered for having done something.","answer":"Go down (as)"},{"meaning":"Enter (a competition, etc).","answer":"Go in for"},{"meaning":"Like.","answer":"Go in for"},{"meaning":"Deal with sth in detail.","answer":"Go into"},{"meaning":"Be no longer fresh.","answer":"Go off"},{"meaning":"Explode; be fired (for a gun, usually accidentally).","answer":"Go off"},{"meaning":"Stop liking.","answer":"Go off"},{"meaning":"Continue happening or doing sth.","answer":"Go on"},{"meaning":"Do sth after doing sth else.","answer":"Go on"},{"meaning":"Repeat or think about again in order to understand completely.","answer":"Go over"},{"meaning":"Go/come to sb house to visit them.","answer":"Go/come round"},{"meaning":"If sth grows on you, you start to like it more.","answer":"Grow on"},{"meaning":"Develop from.","answer":"Grow out of"},{"meaning":"Become too big for.","answer":"Grow out of"},{"meaning":"Become older.","answer":"Grow up"},{"meaning":"Give something valuable to your children or grandchildren, usually when you die.","answer":"Hand down"},{"meaning":"Give to a person in authority.","answer":"Hand in"},{"meaning":"Give things to people in a group.","answer":"Hand out"},{"meaning":"Rob while threatening violence.","answer":"Hold up"},{"meaning":"Delay.","answer":"Hold up"},{"meaning":"Participate, take part.","answer":"Join in"},{"meaning":"Continue doing sth.","answer":"Keep on"},{"meaning":"Stay at the same point/level as.","answer":"Keep up with"},{"meaning":"Defeat and remove from a competition.","answer":"Knock out"},{"meaning":"Make unconscious.","answer":"Knock out"},{"meaning":"Not include.","answer":"Leave out"},{"meaning":"Disappoint.","answer":"Let down"},{"meaning":"Give little or no punishment.","answer":"Let off"},{"meaning":"Make a bomb, etc explode.","answer":"Let off"},{"meaning":"Get/put into lines.","answer":"Line up"},{"meaning":"Use as a source of money.","answer":"Live on"},{"meaning":"Take care of.","answer":"Look after"},{"meaning":"Think that you are better than.","answer":"Look down on"},{"meaning":"Investigate.","answer":"Look into"},{"meaning":"Be careful.","answer":"Look out"},{"meaning":"Examine (a place).","answer":"Look round"},{"meaning":"Admire and respect.","answer":"Look up to"},{"meaning":"Try to find information in a book or list, etc.","answer":"Look up"},{"meaning":"Escape.","answer":"Make off"},{"meaning":"Pretend that something is true.","answer":"Make out"},{"meaning":"See, hear or understand sb or sth with difficulty.","answer":"Make out"},{"meaning":"Write all the necessary information on a cheque, etc.","answer":"Make out"}]}' );
    var n = pick(5, 0, 157);
    // console.log(obj); return false;

    $("#question1 option:first-child").attr("selected", true);
    $("#question2 option:first-child").attr("selected", true);
    $("#question3 option:first-child").attr("selected", true);
    $("#question4 option:first-child").attr("selected", true);
    $("#question5 option:first-child").attr("selected", true);

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