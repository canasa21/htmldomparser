<?php
include('../simple_html_dom.php');

echo file_get_html('https://www.nuclearsafety.gc.ca/eng/about-us/careers-at-cnsc/alumni-faqs.cfm')->plaintext;
?>