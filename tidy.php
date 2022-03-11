<?php

chdir('./wwwroot/eng/about-us/organization/');
//echo applyHTMLTidy();
echo getcwd();

$html = '<p>test</I>';

$tidy = tidy_parse_string($html);
$tidy->cleanRepair();

echo $tidy;

$command = "./scripts/tidy.sh";
shell_exec($command);
//connect to database for path and filename

//files already exist

//$path = '';
//$filename = '';

//$dirtyHTML = './wwwroot/eng/about-us/organization/index.html';
//$cleanHTML = './wwwroot/eng/about-us/organization/index-test.html';

//echo (applyHTMLTidy($dirtyHTML, $cleanHTML));

//echo $HTML;
//        echo $clean;
//fwrite($handlehtml, $clean);



function applyHTMLTidy(){
   //$HTML = shell_exec('tidy $dirtyHTML > $cleanHTML');
   exec('tidy index.html > index-test.html');
    //return $HTML;
}


//find . -maxdepth 1 -type d \( ! -name . \) -exec bash -c "cd '{}' && pwd" \;


//FILES="*"
//for f in $FILES
//do
  //echo "Processing $f file..."
  # take action on each file. $f store current file name
  //cat "$f"
//done


?>