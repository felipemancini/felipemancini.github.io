<?php

function getRandomNumbers($num, $min, $max, $repeat = false, $sort = false){
    if ((($max - $min) + 1) >= $num) {
        $numbers = array();

        while (count($numbers) < $num) {
            $number = mt_rand($min, $max);

            if ($repeat || !in_array($number, $numbers)) {
                $numbers[] = $number;
            }
        }

        switch ($sort) {
        case SORT_ASC:
            sort($numbers);
            break;
        case SORT_DESC:
            rsort($numbers);
            break;
        }

        return $numbers;
    }

    return false;
}

$numbers = getRandomNumbers(5, 0, 7, false, SORT_ASC);
// echo '<pre>'; print_r($numbers); exit;

$arr['question'][0]['meaning'] = "to forgive someone and be friendly with them again after an argument or disagreement.";
$arr['question'][0]['answer']  = "Make up";

$arr['question'][1]['meaning'] = "To do something.";
$arr['question'][1]['answer']  = "Get up to";

$arr['question'][2]['meaning'] = "To relax completely, or not allow things to upset you.";
$arr['question'][2]['answer']  = "Chill out";

$arr['question'][3]['meaning'] = "To admire and respect someone.";
$arr['question'][3]['answer']  = "Look up to";

$arr['question'][4]['meaning'] = "To become familiar with a place and to feel happy and confident in it.";
$arr['question'][4]['answer']  = "Settle down";

$arr['question'][5]['meaning'] = "To argue with someone and stop being friendly with them.";
$arr['question'][5]['answer']  = "Fall out";

$arr['question'][6]['meaning'] = "To stop trying to guess.";
$arr['question'][6]['answer']  = "Give up";

$arr['question'][7]['meaning'] = "To become unconscious for a short time, for example when ill, badly hurt, or drunk.";
$arr['question'][7]['answer']  = "Pass out";


$options[0] = $arr['question'][$numbers[0]]['answer'];
$options[1] = $arr['question'][$numbers[1]]['answer'];
$options[2] = $arr['question'][$numbers[2]]['answer'];
$options[3] = $arr['question'][$numbers[3]]['answer'];
$options[4] = $arr['question'][$numbers[4]]['answer'];

?>

<!DOCTYPE html> 
<html> 
	<head>
  <meta charset="UTF-8">	
	<title>Phrasal Verbs</title> 
	
	<meta name="viewport" content="width=device-width, initial-scale=1"> 
	<script src="js/jquery-1.7.1.min.js"></script>
	<script src="js/check.js"></script>
	<link rel="stylesheet" href="custom.css" />
	<!-- <script src="../js/jquery.mobile-1.0.1.min.js"></script> -->
    
</head> 

<body> 
<div id="page">

<h1>Choose the correct Phrasal Verb</h1>
<div class="question">
	<select id="question1">
		<option>Choose one</option>
		<?php
		foreach($options as $answer){
			echo '<option value="'.$answer.'">'.$answer.'</option>';
		}
		?>
	</select>

	<?php echo $arr['question'][$numbers[0]]['meaning']; ?>
	<input id="answerQ1" type="hidden" value="<?php echo $options[0]; ?>" />
	<span id="statusQ1" class="red"></span>
</div>

<div class="question">
	<select id="question2">
		<option>Choose one</option>
		<?php
		foreach($options as $answer){
			echo '<option value="'.$answer.'">'.$answer.'</option>';
		}
		?>
	</select>

	<?php echo $arr['question'][$numbers[1]]['meaning']; ?>
	<input id="answerQ2" type="hidden" value="<?php echo $options[1]; ?>" />
	<span id="statusQ2" class="red"></span>
</div>

<div class="question">
	<select id="question3">
		<option>Choose one</option>
		<?php
		foreach($options as $answer){
			echo '<option value="'.$answer.'">'.$answer.'</option>';
		}
		?>
	</select>

	<?php echo $arr['question'][$numbers[2]]['meaning']; ?>
	<input id="answerQ3" type="hidden" value="<?php echo $options[2]; ?>" />
	<span id="statusQ3"></span>
</div>

<div class="question">
	<select id="question4">
		<option>Choose one</option>
		<?php
		foreach($options as $answer){
			echo '<option value="'.$answer.'">'.$answer.'</option>';
		}
		?>
	</select>

	<?php echo $arr['question'][$numbers[3]]['meaning']; ?>
	<input id="answerQ4" type="hidden" value="<?php echo $options[3]; ?>" />
	<span id="statusQ4"></span>
</div>

<div class="question">
	<select id="question5">
		<option>Choose one</option>
		<?php
		foreach($options as $answer){
			echo '<option value="'.$answer.'">'.$answer.'</option>';
		}
		?>
	</select>

	<?php echo $arr['question'][$numbers[4]]['meaning']; ?>
	<input id="answerQ5" type="hidden" value="<?php echo $options[4]; ?>" />
	<span id="statusQ5"></span>
</div>


<input type="button" id="check" value="check">

</div><!-- /page -->
</body>
</html>
