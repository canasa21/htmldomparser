<?php 

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

$language = "en";
$target_directory = "./export/";

$sql = "select title, breadcrumb, content, modified from content_both_top_500 where language='$language'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {

$title = htmlspecialchars_decode($row["title"], ENT_QUOTES);
$content = htmlspecialchars_decode($row["content"], ENT_QUOTES);


$filename =  strtolower(str_replace(' ', '-', $title));
include('filenames.php');
$filename =   str_replace(array_keys($filenames), $filenames, $filename);



$HTML=$target_directory . $filename.'.html';
$handlehtml=fopen($HTML, 'w');
$loadhtml='<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>' . $title .'</title>
</head>
<body>
' . $content . '
</body>
</html>';


fwrite($handlehtml, $loadhtml);
}
    }

    header('Location: top500.php');
?>