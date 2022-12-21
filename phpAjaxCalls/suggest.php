<?php
// People Array @TODO - Get from DB
$people[] = "Steve";
$people[] = "John";
$people[] = "Kathy";
$people[] = "Evan";
$people[] = "Anthony";
$people[] = "Tom";
$people[] = "Rhonda";
$people[] = "Hal";
$people[] = "Ernie";
$people[] = "Johanna";
$people[] = "Farrah";
$people[] = "Linda";
$people[] = "Shawn";
$people[] = "Olivia";
$people[] = "Derek";
$people[] = "Amanda";
$people[] = "Rachel";
$people[] = "Katie";
$people[] = "Jillian";
$people[] = "Jose";
$people[] = "Malcom";
$people[] = "Greg";
$people[] = "Mary";
$people[] = "Brad";
$people[] = "Mike";
$people[] = "Anna";
$people[]="Diana";
$people[]="Eva";
$people[]="Fiona";
$people[]="Gunda";
$people[]="Hege";
$people[]="Brittany";
$people[]="Inga";
$people[]="Johanna";
$people[]="Kitty";
$people[]="Linda";
$people[]="Nina";
$people[]="Ophelia";
$people[]="Petunia";
$people[]="Amanda";
$people[]="Raquel";
$people[]="Cindy";
$people[]="Doris";
$people[]="Eve";
$people[]="Evita";
$people[]="Sunniva";
$people[]="Tove";
$people[]="Unni";
$people[]="Violet";
$people[]="Liza";
$people[]="Elizabeth";
$people[]="Ellen";
$people[]="Wenche";
$people[]="Vicky";

// Get Query String
$q = $_REQUEST['q'];

$suggestion = "";

// Get Suggestions
if($q !== ""){
	$q = strtolower($q);
	$len = strlen($q);

    //loping people
	foreach($people as $person){
		if(stristr($q, substr($person, 0, $len))){
			if($suggestion === ""){
				$suggestion = $person;
			} else {
				$suggestion .= ", $person";
			}
		}
	}
}

echo $suggestion === "" ? "No Suggestion" : $suggestion;
?>
