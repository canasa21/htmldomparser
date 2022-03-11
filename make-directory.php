<?php

//define root folder

$target_directory = "./wwwroot";

$servername = "db";
    $username = "root";
    $password = "root";
    $dbname = "db";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }
    //echo '3. ' . $content;

//connect to database and query
$sql = "select link, path, title, content from content_both_top_500";
    $result = $conn->query($sql);

//select paths

//loop through records
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $incoming_path = $target_directory . $row['path'];
        $page_name = $row['link'];
        //get URL and strip filename
        //https://www.nuclearsafety.gc.ca/eng/resources/radiation/introduction-to-radiation/types-and-sources-of-radiation.cfm
        //$page_name = str_replace('https://www.nuclearsafety.gc.ca/', '', $page_name);
        //$page_name = str_replace('/', '\"', $page_name);
        //$page_name = str_replace('.cfm', '', $page_name);
        //$page_name = str_replace('.cfm', '.html', $page_name);
        echo "<br>Basename: " . (basename($page_name, ".cfm"));
       
        echo "<br>";
        $page_name = (basename($page_name, ".cfm"));
        $page_name = "/" . $page_name;

        //remove filename from incoming path
        $incoming_path = pathinfo($incoming_path, PATHINFO_DIRNAME);
        echo "<br>Path: " . $incoming_path;
        createDirectoryStructure($page_name,$incoming_path);

        $title = $row['title'];
        $content = $row['content'];

        $title = htmlspecialchars_decode($row["title"], ENT_QUOTES);
        $content = htmlspecialchars_decode($row["content"], ENT_QUOTES);

        $HTML=$incoming_path . $page_name.'.html';
        //$HTML=$path_to_directory . '.html';
        $handlehtml=fopen($HTML, 'w');
        $loadhtml='<!doctype html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <title>' . $title . '</title>
        </head>
        <body>' . $content . '</body>
        </html>';
    
        //echo $loadhtml;
        
        fwrite($handlehtml, $loadhtml);


    }
}

$conn->close();


function createDirectoryStructure($page_name,$path_to_directory) {
if (!file_exists($path_to_directory)) {
    mkdir($path_to_directory, 0777, true);
    //add page    
    }
}

?>