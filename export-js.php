<?php

//define root folder

$target_directory = "./wwwroot";

include('include/db.php');


    //echo '3. ' . $content;

//connect to database and query
$sql = "select link, path, title, content, modified, language, translation_path from content_both_top_500";
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
        $language = $row['language'];
        $modified = $row['modified'];
        $translation_path = $row['translation_path'];

        $title = htmlspecialchars_decode($row["title"], ENT_QUOTES);
        $content = htmlspecialchars_decode($row["content"], ENT_QUOTES);

        include('gatsby.php');
        $content = str_replace(array_keys($gatsby), $gatsby, $content);
        
        $content = preg_replace('/(<[^>]*) style=("[^"]+"|\'[^\']+\')([^>]*>)/i', '$1$3', $content);
        $content = preg_replace('/className="\s*?"/','',$content);
        $content = preg_replace('/<!--(.|\s)*?-->/', '', $content);

        //$content = preg_replace('/(<img((?!(.*?)className=['\"](.*?)emoji(.*?)['\"](.*?)).)*>)+/i','',$content);
        

        //add breaks
        $content = preg_replace('#\s{4,}#', PHP_EOL, $content);
        $content = preg_replace('#((<\/div>)\s*){2}$#','',$content);

        //remove inline styles
        $content = preg_replace('#style="[^\"]*"#','',$content);


        //$content = trim(preg_replace('#<img((.(?!className=))*)\/>#','<img className="img-responsive"$1/>',$content));
        //$content = preg_replace('#<img((.(?!className=\"pull-right\"))*)\/>#','<img className="img-responsive pull-right"$1/>',$content);
        //$content = preg_replace('#<img((.(?!className=\"pull-left\"))*)\/>#','<img className="img-responsive pull-left"$1/>',$content);

     
        $HTML=$incoming_path . $page_name.'.js';
        $languageToggle = $incoming_path . $page_name;
        $languageToggle = str_replace('./wwwroot/eng','/fra',$languageToggle);
        $languageToggle = str_replace('/index','/',$languageToggle);
        //$HTML=$path_to_directory . '.html';
        // deepcode ignore PT: <please specify a reason of ignoring this>
        $handlehtml=fopen($HTML, 'w');
        $loadhtml='import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "' . $language . '",
                pageTitle: "' . $title . '", 
                dateModified: "' . $modified . '",
                langToggleUrl: "'. $languageToggle .'"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    ' . $content . '
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }';

        
    
        //echo $loadhtml;
        
        fwrite($handlehtml, $loadhtml);


    }
}

$conn->close();


function createDirectoryStructure($page_name,$path_to_directory) {
if (!file_exists($path_to_directory)) {
    // deepcode ignore PT: <please specify a reason of ignoring this>
    mkdir($path_to_directory, 0777, true);
    //add page    
    }
}

?>