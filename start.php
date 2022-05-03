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


include('simple_html_dom.php');
include('characters.php');
include('replacements.php');
include('removals.php');

include('include/db.php');

    //for batch pages
    $sql = "select id, url from externalPages WHERE ID BETWEEN $threshold";

    $result = $conn->query($sql);

    while($row = $result->fetch_array())
    {
      $ID = $row['id'];

      $myURL = $row['url'];
      $html = file_get_html($myURL);
      $name = $ID;
      $title = strip_tags($html->find('h1[id="wb-cont"]',0));
      $breadcrumbs = $html->find('div[id="gcwu-bc"]',0);

      $content = $html->find('div[id="wb-main"]',0);

      foreach($content->find('img[!class]') as $img) {
        $img->class = "img-responsive";
      }

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
    $translation_breadcrumbs = $translation_html->find('div[id="gcwu-bc"]',0);
    $translation_content = $translation_html->find('div[id="wb-main"]',0);

    foreach($translation_content->find('img[!class]') as $img) {
      $img->class = "img-responsive";
     }

    $content = str_replace('https://www.nuclearsafety.gc.ca/','/',$content);
    $translation_content = str_replace('https://www.nuclearsafety.gc.ca/','/',$translation_content);
    $title = str_replace(array_keys($characters), $characters, $title);
    $translation_title = str_replace(array_keys($characters), $characters,  $translation_title);
   
    $content = str_replace('<div id="wb-core">', '', $content);
    $content = str_replace('<div id="wb-core-in" class="equalize">', '', $content);
    $content = str_replace('<div id="wb-main-in">', '', $content);
    $content = str_replace('<div id="wb-main" role="main">', '', $content);
    $content = str_replace('<div class="span-6">', '', $content);
    $content = str_replace('<div class="span-8">', '', $content);
    $content = preg_replace('#<h1 id="wb-cont">(.*?)<\/h1>#', '', $content);
    $content = str_replace(array_keys($replacements), $replacements, $content);
    $content = str_replace(($removals), '', $content);
    $content = preg_replace('#<div class="wet-boew-share(.*?)</div>#', '', $content);
    $content = preg_replace('#<dl id="gcwu-date-mod(.*?)</dl>#', '', $content);
    $content = str_replace('<div class="clearfix"></div>', '', $content);
    $content = str_replace('<table class="width-100">', '<table class="wb-tables table">', $content);
    $content = str_replace('<table>', '<table class="wb-tables table">', $content);
    $content = preg_replace('#(<img[^>]+)(?<!\/)>#', '$1/>', $content); 
    $content = trim($content);

    $breadcrumbs = str_replace('<div id="gcwu-bc">', '', $breadcrumbs);
    $breadcrumbs = str_replace('<h2>Breadcrumb trail</h2>', '', $breadcrumbs);
    $breadcrumbs = str_replace('<div id="gcwu-bc-in">', '', $breadcrumbs);
    $breadcrumbs = str_replace('<ol>', '', $breadcrumbs);
    $breadcrumbs = str_replace('</ol>', '', $breadcrumbs);
    $breadcrumbs = str_replace('</div>', '', $breadcrumbs);
    $breadcrumbs = str_replace('</div>', '', $breadcrumbs);
    $breadcrumbs = trim($breadcrumbs);
 
    $translation_content = str_replace('<div id="wb-core">', '', $translation_content);
    $translation_content = str_replace('<div id="wb-core-in" class="equalize">', '', $translation_content);
    $translation_content = str_replace('<div id="wb-main-in">', '', $translation_content);
    $translation_content = str_replace('<div id="wb-main" role="main">', '', $translation_content);
    $translation_content = str_replace('<div class="span-6">', '', $translation_content);
    $translation_content = str_replace('<div class="span-8">', '', $translation_content);
    $translation_content = preg_replace('#<h1 id="wb-cont">(.*?)<\/h1>#', '', $translation_content);
    $translation_content = str_replace(array_keys($replacements), $replacements, $translation_content);
    $translation_content = str_replace(($removals), '', $translation_content);
    $translation_content = preg_replace('#<div class="wet-boew-share(.*?)</div>#', '', $translation_content);
    $translation_content = preg_replace('#<dl id="gcwu-date-mod(.*?)</dl>#', '', $translation_content);
    $translation_content = str_replace('’', '', $translation_content);
    $translation_content = str_replace('<div class="clearfix"></div>', '', $translation_content);
    $translation_content = str_replace('<table class="width-100">', '<table class="wb-tables table">', $translation_content);
    $translation_content = str_replace('<table>', '<table class="wb-tables table">', $translation_content);
    $translation_content = preg_replace('#(<img[^>]*[^\/])>#', '$1/>', $translation_content); 
    $translation_content = trim($translation_content);
    
    $translation_breadcrumbs = str_replace('<div id="gcwu-bc">', '', $translation_breadcrumbs);
    $translation_breadcrumbs = str_replace('<h2>Fil d\'Ariane</h2>', '', $translation_breadcrumbs);
    $translation_breadcrumbs = str_replace('<div id="gcwu-bc-in">', '', $translation_breadcrumbs);
    $translation_breadcrumbs = str_replace('<ol>', '', $translation_breadcrumbs);
    $translation_breadcrumbs = str_replace('</ol>', '', $translation_breadcrumbs);
    $translation_breadcrumbs = str_replace('</div>', '', $translation_breadcrumbs);
    $translation_breadcrumbs = str_replace('</div>', '', $translation_breadcrumbs);
    $translation_breadcrumbs = trim($translation_breadcrumbs);

    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }

    $content = htmlspecialchars($content, ENT_QUOTES);
    $breadcrumbs = htmlspecialchars($breadcrumbs, ENT_QUOTES);
    $content = mysqli_real_escape_string($conn, $content);
    $translation_content = htmlspecialchars($translation_content, ENT_QUOTES);
    $translation_breadcrumbs = htmlspecialchars($translation_breadcrumbs, ENT_QUOTES);
    $translation_content = mysqli_real_escape_string($conn, $translation_content );
  
    $sql = "INSERT INTO content_both_top_500 (name, link, title, breadcrumb, translation_title, translation_breadcrumb, language, translation_language, content, translation_content, status, modified, path, translation_path)
    VALUES ('$name', '$myURL', '$title', ' $breadcrumbs', '$translation_title', '$translation_breadcrumbs', 'en', 'fr', '$content', '$translation_content', $status, '$modified', '$path', '$translation_path')";

    if ($conn->query($sql) === TRUE) {
      echo "\nNew record " . $ID . " created successfully<br>";
    } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
    }
    $conn->close();
       
    }
    
    $conn->close();

    header("Location: index.php");
    ?> 
</body>
</html>