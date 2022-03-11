<?php

//this is for content

function urlExists($url=NULL)  
{  
    if($url == NULL) return false;  
    $ch = curl_init($url);  
    curl_setopt($ch, CURLOPT_TIMEOUT, 5);  
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);  
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);  
    $data = curl_exec($ch);  
    $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);  
    curl_close($ch);  
    if($httpcode>=200 && $httpcode<300){  
        return true;  
    } else {  
        return false;  
    }  
}  

include('characters.php');
include('replacements.php');
include('removals.php');




    include('simple_html_dom.php');
    $ID = $_POST['id'];

    $myURL = $_POST['url'];

    if (urlExists($myURL)){
      $html = file_get_html($myURL);
    }else{
      exit();
    }
    //set scraped html conent to content varaible for both languages
    $content = $html->find('div[id="wb-main-in"]',0);
    $translation_myURL = str_replace('/eng/','/fra/',$myURL);
    $translation_html = file_get_html($translation_myURL);
    $translation_content = $translation_html->find('div[id="wb-main-in"]',0);

    //clean up content

        $content = preg_replace('#<h1 id="wb-cont">(.*?)<\/h1>#', '', $content);
        $content = str_replace(array_keys($replacements), $replacements, $content);
        $content = str_replace(($removals), '', $content);
        $content = preg_replace('#<div class="wet-boew-share(.*?)</div>#', '', $content);
        $content = preg_replace('#<dl id="gcwu-date-mod(.*?)</dl>#', '', $content);
        $ontent = preg_replace('/\s\s+/', ' ', $content);
        $content = trim($content);


        $translation_content = preg_replace('#<h1 id="wb-cont">(.*?)<\/h1>#', '', $translation_content);
        $translation_content = str_replace(array_keys($replacements), $replacements, $translation_content); 
        $translation_content = str_replace(($removals), '', $translation_content);
        $translation_content = preg_replace('#<div class="wet-boew-share(.*?)</div>#', '', $translation_content);
        $translation_content = preg_replace('#<dl id="gcwu-date-mod(.*?)</dl>#', '', $translation_content);
        $translation_content = str_replace('’', '', $translation_content);
        $translation_content = preg_replace('/\s\s+/', ' ', $translation_content);
        $translation_content = trim($translation_content);

    $servername = "db";
    $username = "root";
    $password = "root";
    $dbname = "db";
    
    
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }

    $content = htmlspecialchars($content, ENT_QUOTES);
    $translation_content = htmlspecialchars($translation_content, ENT_QUOTES);
    $translation_content = mysqli_real_escape_string($conn, $translation_content);

    //echo ($content);

    $sql = "UPDATE content_both_top_500 set content='$content', translation_content='$translation_content' WHERE name = $ID";

    
    if ($conn->query($sql) === TRUE) {
      echo ("Record " . $ID . " updated successfully");
    } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
    $conn->close();
?> 

