<?php

    include('simple_html_dom.php');

    $html = file_get_html('http://nuclearsafety.gc.ca/eng/resources/publications/reports/access-to-information-and-privacy/annual-report-ATIP-2019-2020.cfm');
    $content = $html->find('div[id="wb-main"]',0);
    echo ("<div style=\"border:4px solid black;\">".$content."</div>");
    echo("<br><br>");
    include('replacements.php');
    //$replacements = json_decode($json, true);
    //var_dump($replacements);
    $content = str_replace(array_keys($replacements), $replacements, $content, $i);
    echo ("<h1>".$i." WET replcaements</h1>");
    include('removals.php');
    $content = str_replace(($removals), '', $content, $x);
    echo ("<h1>".$x." removal</h1>");
    echo $content;

?>