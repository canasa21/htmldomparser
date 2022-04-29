<!DOCTYPE>
<html lang="en">
<!-- Alex was here on October 18, 2021 -->
<!-- 1:15 PM -->
<style type="text/css">
* { font-family: helvetica;
    font-size: .9rem;}
table {
  border:1px solid #999;
  width: 80%;
    }
td {
    border-bottom:1px solid #999;
}
th {
    text-align:left;
}

.pagination {
	margin-bottom: -10px;
}

.pagination li {
	padding: 5px 10px;
	border: 1px solid #ddd;
	display: inline-block;
	*float: left;
	background: #fff;
	color: #888;
	margin-right: 1px;
	-webkit-box-shadow:  0px 1px 1px 0px rgba(180, 180, 180, 0.1);
	box-shadow:  0px 1px 1px 0px rgba(180, 180, 180, 0.1);
	-webkit-transition: all 0.1s ease-in-out;
	-moz-transition: all 0.1s ease-in-out;
	-o-transition: all 0.1s ease-in-out;
	-ms-transition: all 0.1s ease-in-out;
	transition: all 0.1s ease-in-out;
}

.ie7 .pagination li {margin-right: 5px;}

li.current {
	background: #72b626;
	border: 1px solid #72b626;
	color: #fff;
}

.button {
  text-decoration: none;
  background-color: #EEEEEE;
  color: #000;
  padding: 8px;
  border: 1px solid #CCCCCC;
  border-radius: 5px;
}

.buttonAction {
  text-decoration: none;
  background-color: #666;
  color: #fff;
  padding: 8px;
  border: 1px solid #000;
  border-radius: 5px;
}

</style>
<body>

<?php

ini_set('max_execution_time', '300');

$threshold = htmlspecialchars($_GET['threshold']);
//echo $threshold;

include('simple_html_dom.php');
include('characters.php');
include('replacements.php');
include('removals.php');

include('include/db.php');

    //for batch pages
    $sql = "select id, url from externalPages WHERE ID BETWEEN $threshold";

    //$sql = "select id, url from externalPages WHERE ID IN(83,92,105,116,119,150,204,838,837,956,989,993,961,1010,1031,1067,1081,1095,1104,1105,1233,1474,1495,1496,1560,1567,1623,1662,2014,2102,2106)";
    //$sql = "select id, url from externalPages WHERE ID IN(961,1010,1031,1067,1081,1095,1104,1105,1233,1474,1495,1496,1560,1567,1623,1662,2014,2102,2106)";
    // deepcode ignore Sqli: <please specify a reason of ignoring this>
    $result = $conn->query($sql);

    while($row = $result->fetch_array())
    {
    //$rows[] = $row;

    //echo $row['id'] . '<br>';
    //echo $row['url'] . '<br>';

        //START HARVEST

        
    $ID = $row['id'];

    $myURL = $row['url'];
    $html = file_get_html($myURL);

    
    //echo $html;
    $name = $ID;
    //$title = $html->find('title', 0)->plaintext;
    $title = strip_tags($html->find('h1[id="wb-cont"]',0));
    //$heading = $html->find('h1[id="wb-cont"]',0);

    $breadcrumbs = $html->find('div[id="gcwu-bc"]',0);

    

    //echo($breadcrumbs);
    $content = $html->find('div[id="wb-main"]',0);


    foreach($content->find('img[!class]') as $img) {
      $img->class = "img-responsive";
     }


    //$content->find('img[!class]',0)->class="img-responsive";
    
    //->class="img-responsive";


      //update <img add class="img responsive or add img-responsive to <img class="
      //[attribute]	Matches elements that have the specified attribute. (e.g.<img src="" class="" />)
      //[!attribute]	Matches elements that don't have the specified attribute. (e.g <img src="" />)



   
    //$content = $content->class = null;
    //$content = $content->className = "img-responsive";

    $status = 1;

    if ($html->find('time',0)){
    $modified = $html->find('time',0)->plaintext;
    }

    //modify $myURL into path
    $path = rtrim(str_replace('https://www.nuclearsafety.gc.ca','',$myURL), '.cfm');
    $translation_path = str_replace('/eng/','/fra/',$path);

    //get URL and switch to French
    $translation_myURL = str_replace('/eng/','/fra/',$myURL);
    $translation_html = file_get_html($translation_myURL);
    $translation_title = strip_tags($translation_html->find('h1[id="wb-cont"]',0));
    //$translation_heading = $translation_html->find('h1[id="wb-cont"]',0);
    $translation_breadcrumbs = $translation_html->find('div[id="gcwu-bc"]',0);
    $translation_content = $translation_html->find('div[id="wb-main"]',0);

    foreach($translation_content->find('img[!class]') as $img) {
      $img->class = "img-responsive";
     }

    $content = str_replace('https://www.nuclearsafety.gc.ca/','/',$content);
    $translation_content = str_replace('https://www.nuclearsafety.gc.ca/','/',$translation_content);
    //modify myURL into language
    //if (strpos($myURL, '/eng/') !== false) {
    //  $language = 'en';
    //}

    //if (strpos($translation_myURL, '/fra/') !== false) {
    //  $$translation_language = 'fr';
    //}


    //$image = $content->find('img',0);

    //foreach($content->find('img') as $element){
      // echo $element->src . '<br>';
       //echo (basename($element));
       //if(isset($alttext->alt)){
        //echo $element->alt . '<br>';
      //}
    //}
    //echo $title;
    //echo $translation_title;
    //$title = str_replace('&nbsp;', ' ', $title);
    
    $title = str_replace(array_keys($characters), $characters, $title);
    //echo "ENG: " . $title . PHP_EOL;


    $translation_title = str_replace(array_keys($characters), $characters,  $translation_title);
    //echo  "FRA: " . $translation_title . PHP_EOL;;
    //echo " ";
    //echo $modified;
    //echo $image; 

    
    //<a href="/eng/pdfs/Discussion-Papers/21-03/Discussion_Paper_DIS-21-03__Cyber_Security_and_the_Protection_of_Digital_Information.pdf
    //$content = preg_replace('#(\s.*?)=".*?/?([^/]+?(\.pdf|\.doc|\.xls|\.ppt|\.zip))"#s', '$1="sites/default/files/$2"', $content); 
    //$content = preg_replace('href="(.*?)(\.pdf|\.doc|\.xls|\.ppt|\.zip))"', 'href="sites/default/files/$2"', $content); 

     //   if (preg_match('#<a\s.*?href=".*?/?([^/]+?(\.pdf))"#s', '<a href="https://www.nuclearsafety.gc.ca/eng/pdfs/Discussion-Papers/21-03/Discussion_Paper_DIS-21-03__Cyber_Security_and_the_Protection_of_Digital_Information.pdf">DIS-21-03 | PDF, 40 pages, 1.10 MB</a>')){
       //     echo('Match!');
         //   $pdf = preg_replace('#<a\s.*?href=".*?/?([^/]+?(\.pdf))"#s', '<a href="sites/default/files/$1"', '<a href="https://www.nuclearsafety.gc.ca/eng/pdfs/Discussion-Papers/21-03/Discussion_Paper_DIS-21-03__Cyber_Security_and_the_Protection_of_Digital_Information.pdf">DIS-21-03 | PDF, 40 pages, 1.10 MB</a>');
           // echo $pdf;
          //}
        
   //$content = preg_replace('#<a\s.*?href=".*?/?([^/]+?(\.pdf))"#s', '<a href="sites/default/files/$1"', $content); 
    //echo $content;
    //<div id="wb-core">
	  //<div id="wb-core-in" class="equalize">
    //<div id="wb-main" role="main"><div id="wb-main-in">	
    //<h1 id="wb-cont">The CNSC's Regulatory Framework Plan</h1>
    //<div class="span-6">
    $content = str_replace('<div id="wb-core">', '', $content);
    //echo $content;


    $content = str_replace('<div id="wb-core-in" class="equalize">', '', $content);
    //echo $content;
    $content = str_replace('<div id="wb-main-in">', '', $content);
    $content = str_replace('<div id="wb-main" role="main">', '', $content);
    $content = str_replace('<div class="span-6">', '', $content);
    $content = str_replace('<div class="span-8">', '', $content);
    $content = preg_replace('#<h1 id="wb-cont">(.*?)<\/h1>#', '', $content);







    //clean breadcrumbs
    $breadcrumbs = str_replace('<div id="gcwu-bc">', '', $breadcrumbs);
    $breadcrumbs = str_replace('<h2>Breadcrumb trail</h2>', '', $breadcrumbs);
    $breadcrumbs = str_replace('<div id="gcwu-bc-in">', '', $breadcrumbs);
    $breadcrumbs = str_replace('<ol>', '', $breadcrumbs);
    $breadcrumbs = str_replace('</ol>', '', $breadcrumbs);
    $breadcrumbs = str_replace('</div>', '', $breadcrumbs);
    $breadcrumbs = str_replace('</div>', '', $breadcrumbs);
    $breadcrumbs = trim($breadcrumbs);
    //remove absolute paths


    //echo "img: ".$content; 
    //IMG $content = preg_replace('#<img\s.*?src=".*?/?([^/]+?(\.gif|\.png|\.jpg))"#s', '<img src="/images/$1"', $content);  
    //echo ("image on");
    //$content = preg_replace('%<img\s.*?src=".*?/?([^/]+?(\.gif|\.png|\.jpg))"%s', '<img src="sites/default/files/$1"', $content); 
    //POSTER $content = preg_replace('#(\s.*?)poster=".*?/?([^/]+?(\.gif|\.png|\.jpg))"#s', '$1poster="/images/$2"', $content); 
    //echo ("poster on");
     
   //echo ("pdf on");
        //echo $content;
        //clean content
        //include('wet4.php');
        //var_dump(json_decode($json));
        //var_dump(json_decode($json, true));

    
    //$replacements = json_decode($json, true);
    //var_dump($replacements);
    $content = str_replace(array_keys($replacements), $replacements, $content);
    //echo ("<h1>".$i." WET replcaements</h1>");
    
    $content = str_replace(($removals), '', $content);
    //remove share
    //<div class="wet-boew-share span-5 margin-bottom-none" data-wet-boew="{'sites': ['bit.ly', 'blogger', 'del.icio.us', 'digg', 'diigo', 'facebook', 'google', 'hotmail', 'linkedin', 'newsvine', 'reddit', 'stumbleupon', 'technorati', 'tumblr', 'twitter', 'yahoobuzz'],addAnalytics:true, analyticsName:'/share/{r}/{s}'}"></div>
    $content = preg_replace('#<div class="wet-boew-share(.*?)</div>#', '', $content);
    $content = preg_replace('#<dl id="gcwu-date-mod(.*?)</dl>#', '', $content);
    $content = str_replace('<div class="clearfix"></div>', '', $content);
    //$content = preg_replace('#</div>{3}#', '', $content);
    //$content = preg_replace('#</div></div>#', '', $content);
    //$content = str_replace('</div> </div> </div>', '', $content);
    //$content = str_replace('</div></div></div>', '', $content);
    //HOLD $content = preg_replace('/\s\s+/', ' ', $content);
    $content = str_replace('<table class="width-100">', '<table class="table table-striped">', $content);
    $content = str_replace('<table>', '<table class="table table-striped">', $content);

    //$content = preg_replace('#(<img[^>]*[^\/])>#', '$1/>', $content); 

    $content = preg_replace('#(<img[^>]+)(?<!\/)>#', '$1$2/>', $content); 

    $content = trim($content);
    

    //PDF $content = preg_replace('#href="/eng/.*?/?([^/]+?(\.pdf))"#s', 'href="/sites/default/files/$1"', $content);
    
   //French
    $translation_content = str_replace('<div id="wb-core">', '', $translation_content);
    $translation_content = str_replace('<div id="wb-core-in" class="equalize">', '', $translation_content);
    $translation_content = str_replace('<div id="wb-main-in">', '', $translation_content);
    $translation_content = str_replace('<div id="wb-main" role="main">', '', $translation_content);
    $translation_content = str_replace('<div class="span-6">', '', $translation_content);
    $translation_content = str_replace('<div class="span-8">', '', $translation_content);
    $translation_content = preg_replace('#<h1 id="wb-cont">(.*?)<\/h1>#', '', $translation_content);
 
    //$translation_content = preg_replace('#<img\s.*?src=".*?/?([^/]+?(\.gif|\.png|\.jpg))"#s', '<img src="/images/$1"', $translation_content);  
    
    //$translation_content = preg_replace('#(\s.*?)poster=".*?/?([^/]+?(\.gif|\.png|\.jpg))"#s', '$1poster="/images/$2"', $translation_content);    
    
   

  
    $translation_content = str_replace(array_keys($replacements), $replacements, $translation_content);
  
    $translation_content = str_replace(($removals), '', $translation_content);





    //remove share
    //<div class="wet-boew-share span-5 margin-bottom-none" data-wet-boew="{'sites': ['bit.ly', 'blogger', 'del.icio.us', 'digg', 'diigo', 'facebook', 'google', 'hotmail', 'linkedin', 'newsvine', 'reddit', 'stumbleupon', 'technorati', 'tumblr', 'twitter', 'yahoobuzz'],addAnalytics:true, analyticsName:'/share/{r}/{s}'}"></div>
    $translation_content = preg_replace('#<div class="wet-boew-share(.*?)</div>#', '', $translation_content);
    $translation_content = preg_replace('#<dl id="gcwu-date-mod(.*?)</dl>#', '', $translation_content);
    //$translation_content = str_replace('<div class="clearfix"></div>', '', $translation_content);
   
    //$translation_content = str_replace('</div> </div> </div>', '', $translation_content);
    $translation_content = str_replace('’', '', $translation_content);

  


    //HOLD $translation_content = preg_replace('/\s\s+/', ' ', $translation_content);
    $translation_content = preg_replace('#(<img[^>]*[^\/])>#', '$1/>', $translation_content); 

    $translation_content = trim($translation_content);

    //PDF $translation_content = preg_replace('#href="/fra/.*?/?([^/]+?(\.pdf))"#s', 'href="/sites/default/files/$1"', $translation_content);

    $translation_breadcrumbs = str_replace('<div id="gcwu-bc">', '', $translation_breadcrumbs);
    $translation_breadcrumbs = str_replace('<h2>Fil d\'Ariane</h2>', '', $translation_breadcrumbs);
    $translation_breadcrumbs = str_replace('<div id="gcwu-bc-in">', '', $translation_breadcrumbs);
    $translation_breadcrumbs = str_replace('<ol>', '', $translation_breadcrumbs);
    $translation_breadcrumbs = str_replace('</ol>', '', $translation_breadcrumbs);
    $translation_breadcrumbs = str_replace('</div>', '', $translation_breadcrumbs);
    $translation_breadcrumbs = str_replace('</div>', '', $translation_breadcrumbs);

   

    $translation_breadcrumbs = trim($translation_breadcrumbs);

    //echo ("<h1>".$x." removal</h1>");
    //echo $image;
  
    //$servername = "db";
    //$username = "root";
    //$password = "root";
    //$dbname = "db";


  
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }

    $content = htmlspecialchars($content, ENT_QUOTES);
    $breadcrumbs = htmlspecialchars($breadcrumbs, ENT_QUOTES);
    $content = mysqli_real_escape_string($conn, $content);
    //$content = addslashes($content);
    $translation_content = htmlspecialchars($translation_content, ENT_QUOTES);
    $translation_breadcrumbs = htmlspecialchars($translation_breadcrumbs, ENT_QUOTES);
    $translation_content = mysqli_real_escape_string($conn, $translation_content );
    //$translation_content = addslashes($translation_content);
    //$content = htmlspecialchars($content);
    //$content = base64_encode($content);
    $sql = "INSERT INTO content_both_top_500 (name, link, title, breadcrumb, translation_title, translation_breadcrumb, language, translation_language, content, translation_content, status, modified, path, translation_path)
    VALUES ('$name', '$myURL', '$title', ' $breadcrumbs', '$translation_title', '$translation_breadcrumbs', 'en', 'fr', '$content', '$translation_content', $status, '$modified', '$path', '$translation_path')";

    //update flag
    //$sql_flag = ""
    
    // deepcode ignore Sqli: <please specify a reason of ignoring this>
    if ($conn->query($sql) === TRUE) {
      echo "\nNew record " . $ID . " created successfully<br>";
    } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
    }
    $conn->close();

        //END HARVEST
        //sleep (10);
       
    }
    
    //echo("5 seconds");
    //print_r($rows);
       
    $conn->close();

    $content->clear();
    unset($content);

    //loop through array
    header("Location: top500.php");
    ?> 
</body>
</html>