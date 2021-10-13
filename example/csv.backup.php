<?php

//do a batch of files at once - 25 at a time


//function updateImgPath(){

//$drupalPath = "sites/default/files/";

//if (preg_match('%<img\s.*?src=".*?/?([^/]+?(\.gif|\.png|\.jpg))"%s', $subject, $regs)) {
  //$image = $regs[1];
//} else {
  //$image = "";
//}
//}

    include('simple_html_dom.php');
    $ID = $_POST['id'];

    $myURL = $_POST['url'];
    $html = file_get_html($myURL);
    $name = 'wxt_content_' . $ID;
    //$title = $html->find('title', 0)->plaintext;
    $title = strip_tags($html->find('h1[id="wb-cont"]',0));
    $heading = $html->find('h1[id="wb-cont"]',0);
    $content = $html->find('div[id="wb-main"]',0);
    $status = 1;
    $modified = $html->find('time',0)->plaintext;


    //modify $myURL into path
    $path = rtrim(str_replace('https://www.nuclearsafety.gc.ca','',$myURL), '.cfm');

    //modify myURL into language
      if (strpos($myURL, '/eng/') !== false) {
      $language = 'en';
      } else {
       $language = 'fr';
      }


    //$image = $content->find('img',0);

    //foreach($content->find('img') as $element){
      // echo $element->src . '<br>';
       //echo (basename($element));
       //if(isset($alttext->alt)){
        //echo $element->alt . '<br>';
      //}
    //}
    echo $heading;
    //$title = str_replace('&nbsp;', ' ', $title);
    include('characters.php');
    $title = str_replace(array_keys($characters), $characters, $title);
    echo $title;
    //echo " ";
    //echo $modified;
    //echo $image; 

    //<div id="wb-core">
	  //<div id="wb-core-in" class="equalize">
    //<div id="wb-main" role="main"><div id="wb-main-in">	
    //<h1 id="wb-cont">The CNSC's Regulatory Framework Plan</h1>
    //<div class="span-6">
    $content = str_replace('<div id="wb-core">', '', $content);
    $content = str_replace('<div id="wb-core-in" class="equalize">', '', $content);
    $content = str_replace('<div id="wb-main-in">', '', $content);
    $content = str_replace('<div id="wb-main" role="main">', '', $content);
    $content = str_replace('<div class="span-6">', '', $content);
    $content = str_replace('<div class="span-8">', '', $content);
    $content = preg_replace('#<h1 id="wb-cont">(.*?)<\/h1>#', '', $content);
    
    //</div>
    //</div>
    //$content = preg_replace('#</div></div>', '', $content);


     //include('paths.php');   
     $content = preg_replace('%<img\s.*?src=".*?/?([^/]+?(\.gif|\.png|\.jpg))"%s', '<img src="sites/default/files/$1"', $content);   
        //echo $content;
     $content = preg_replace('%(\s.*?)poster=".*?/?([^/]+?(\.gif|\.png|\.jpg))"%s', '$1poster="sites/default/files/$2"', $content); 
     $content = preg_replace('%<a\s.*?href=".*?/?([^/]+?(\.pdf))"%s', '<a href="sites/default/files/$1"', $content);  
        //echo $content;
        //clean content
        //include('wet4.php');
        //var_dump(json_decode($json));
        //var_dump(json_decode($json, true));

    include('replacements.php');
    //$replacements = json_decode($json, true);
    //var_dump($replacements);
    $content = str_replace(array_keys($replacements), $replacements, $content);
    //echo ("<h1>".$i." WET replcaements</h1>");
    include('removals.php');
    $content = str_replace(($removals), '', $content);
    //remove share
    //<div class="wet-boew-share span-5 margin-bottom-none" data-wet-boew="{'sites': ['bit.ly', 'blogger', 'del.icio.us', 'digg', 'diigo', 'facebook', 'google', 'hotmail', 'linkedin', 'newsvine', 'reddit', 'stumbleupon', 'technorati', 'tumblr', 'twitter', 'yahoobuzz'],addAnalytics:true, analyticsName:'/share/{r}/{s}'}"></div>
    $content = preg_replace('#<div class="wet-boew-share(.*?)</div>#', '', $content);
    $content = preg_replace('#<dl id="gcwu-date-mod(.*?)</dl>#', '', $content);
    $content = str_replace('<div class="clearfix"></div>', '', $content);
    //$content = preg_replace('#</div>{3}#', '', $content);
    //$content = preg_replace('#</div></div>#', '', $content);
    $content = str_replace('</div> </div> </div>', '', $content);
    $content = str_replace('</div></div></div>', '', $content);
    $content = preg_replace('/\s\s+/', ' ', $content);
    $content = trim($content);
    
    
   //grab the french data
   //modify the URL from eng to fra






    //echo ("<h1>".$x." removal</h1>");
    //echo $image;
  
    $servername = "localhost";
    $username = "root";
    $password = "root";
    $dbname = "scraper";
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }
    $content = mysqli_real_escape_string($conn, $content);
    //$content = htmlspecialchars($content);
    //$content = base64_encode($content);
    $sql = "INSERT INTO content (name, link, title, language, content, status, modified, path)
    VALUES ('$name', '$myURL', '$title', '$language', '$content', $status, '$modified', '$path')";


    //update flag
    //$sql_flag = ""
    
    if ($conn->query($sql) === TRUE) {
      echo " New record created successfully";
    } else {
      echo " Error: " . $sql . "<br>" . $conn->error;
    }
    
    $conn->close();
?> 

