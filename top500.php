<html>
<!-- Alex was here on October 18, 2021 -->
<!-- 1:15 PM -->
<style type="text/css">
* { font-family: helvetica;
    font-size: 1rem;}

  table {
  border:1px solid #999;
  width: 100%;
    }
td {
    border-bottom:1px solid #999;
}
th {
    text-align:left;
}

.pagination {
	margin-bottom: 100px;
}

.pagination li {
	padding: 5px 10px;
	/*border: 1px solid #ddd;*/
	display: inline-block;
	float: left;
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
  cursor: pointer;
}

.buttonAction:hover {
  color: #000;
  background-color: #ddd;
  cursor: pointer;
}

.buttonExport {
  text-decoration: none;
  background-color: #336699;
  color: #fff;
  padding: 18px;
  border: 1px solid #000;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  
}

.buttonExport:hover {
  color: #000;
  background-color: #ddd;
  cursor: pointer;
}

select {
  text-decoration: none;
  background-color: #ddd;
  color: #000;
  padding: 18px;
  border: 1px solid #000;
  border-radius: 5px;
  font-size: 1.2rem;
  
}
a:hover {
  color: #000;
  background-color: #ddd;
}
.trigger, .result, .log {
  display: inline;
}

</style>
<body>
<div id="progressbar" style="border:1px solid #ccc; border-radius: 5px; "></div>
<div id="information" ></div>
<iframe id="loadarea" style="display:none;"></iframe>
<!--?php echo getcwd() . "\n"; ?-->
    <p style="padding-top:30px;padding-bottom:30px;"><a class="buttonExport" href="top500.php">Main</a> <a class="buttonExport" href="upload.php">Upload URLs</a> <a class="buttonExport" href="export-js.php">Export English Pages</a> <a class="buttonExport" href="export-js-f.php">Export French Pages</a> 
    
    <form id="batch" action="start.php">

    <?php
    echo ("<select name=\"threshold\" id=\"threshold\">");
    //echo ("<option value=\" 1 AND 25\">TEST (1 AND 25)</option>");
for ($i = 1; $i <= 2410; $i += 25)
{
    $j = $i + 24;
    echo ("<option value=\" $i AND $j \">$i to $j</option>");
}
echo("</select>");
?>
  <input class="buttonExport" id="batch" value="Batch Process" type="submit"></form>
 </p>

<!--- PROGRESS -- BAR -->


<!--script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script--> 
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script>


      $(document).ready(function() {


            $("form[name=singlePage]").submit(function(event) {

     
            event.preventDefault();
            var idData = $(this).closest('form').find('input[name=id]').val();
            var urlData = $(this).closest('form').find('input[name=addy]').val();
            //urlData = urlData.replace('addy=','');
            console.log("url data: " + urlData);
            //alert(urlData.toString());

          $.ajax({

           type: 'POST',
            url: 'force-csv.php',
            data: {
                'url': urlData,
                'id' : idData
            },
            success: function (data) {
                returnedvalue = data;
                console.log(data);

               
                    location.reload();
                 

                  }
          });
          return false;
        });   
     
});




    </script>



<?php


  if ( isset( $_GET[ 'pageno' ] ) ) {
    $pageno = $_GET[ 'pageno' ];
  } else {
    $pageno = 1;
  }
  $no_of_records_per_page = 200;
  $offset = ( $pageno - 1 ) * $no_of_records_per_page;

  include('include/db.php');


  $total_pages_sql = "SELECT COUNT(*) FROM externalPages";
  $resultCount = mysqli_query( $conn, $total_pages_sql );
  $total_rows = mysqli_fetch_array( $resultCount )[ 0 ];
  $total_pages = ceil( $total_rows / $no_of_records_per_page );

  //$query_select_xref_info = "SELECT id, url FROM externalPages WHERE flag <> 'x' LIMIT $offset, $no_of_records_per_page";
  //$result = $conn->query($query_select_xref_info);

  $sql = "select id, url from externalPages LIMIT $offset, $no_of_records_per_page";
    $result = $conn->query($sql);

  echo("<p><b>Total number of records: </b>" . $total_rows . "</p>");

  $sql_ids = "select name from content_both_top_500";
  $dataset = $conn->query($sql_ids);
  $page_ids = array();
  while($row = $dataset->fetch_assoc()){
    $page_ids[] = $row['name'];
  }
  //print_r($page_ids);

  ?>

<ul class="pagination">
    <li><a class="button" href="?pageno=1">First</a></li>
    <li class="<?php if($pageno <= 1){ echo 'disabled'; } ?>"> <a class="button" href="<?php if($pageno <= 1){ echo '#'; } else { echo "?pageno=".($pageno - 1); } ?>">Prev</a> </li>
    <li class="<?php if($pageno >= $total_pages){ echo 'disabled'; } ?>"> <a class="button" href="<?php if($pageno >= $total_pages){ echo '#'; } else { echo "?pageno=".($pageno + 1); } ?>">Next</a> </li>
    <li><a class="button" href="?pageno=<?php echo $total_pages; ?>">Last</a></li>
  </ul>

<?php

    
    echo "<table>";
    //echo "<tr style=\"border-bottom:3px solid #000;\">";
    //echo "<th style=\"text-align:left;\">ID</th>";
    //echo "<th style=\"text-align:left;\">URL</th>";
    //echo "<th>Action</th>";
    //echo "<th>Preview</th>";
    //echo "</tr>";
    if ($result->num_rows > 0) {
      // output data of each row
      while($row = $result->fetch_assoc()) {

        echo "<tr>";
        echo "<td>" . $row['id'] . "</td>";
        echo "<td><a href=\"" . $row['url'] . "\" target=\"_blank\">" . $row['url'] . "</a></td>";

        
        echo "<td style=\"padding-top:13px;\"><form name=\"singlePage\" id=\"". $row['id'] . "\"><input type=\"hidden\" name=\"addy\" value=\"". $row['url'] . "\"><input type=\"hidden\" name=\"id\" value=\"". $row['id'] . "\"><input class=\"buttonAction\" type=\"submit\"  id=\"harvest\" value=\"Force Harvest\"></form></td>";  
       

     
        if (isset($row['id']) && in_array($row['id'],$page_ids)){
        echo "<td width=\"100px\"><a class=\"button\" href=\"content-eng.php?id=" . $row['id'] . "\">Eng</a> <a class=\"button\" href=\"content-fra.php?id=" . $row['id'] . "\">Fra</a></td>";
        }else{
          echo "<td style=\"background-color: #dd0000;padding:4px;color:#fff;text-align:center;\">No data</td>";
        }
       
       echo "</tr>";
        
      }
    } else {
      echo "0 results";
    }
    
    $conn->close();
?> 
</table>

<ul class="pagination">
    <li><a class="button" href="?pageno=1">First</a></li>
    <li class="<?php if($pageno <= 1){ echo 'disabled'; } ?>"> <a class="button" href="<?php if($pageno <= 1){ echo '#'; } else { echo "?pageno=".($pageno - 1); } ?>">Prev</a> </li>
    <li class="<?php if($pageno >= $total_pages){ echo 'disabled'; } ?>"> <a class="button" href="<?php if($pageno >= $total_pages){ echo '#'; } else { echo "?pageno=".($pageno + 1); } ?>">Next</a> </li>
    <li><a class="button" href="?pageno=<?php echo $total_pages; ?>">Last</a></li>
  </ul>
  <script>
$('.js-selectall').on('change', function() {
  var isChecked = $(this).prop("checked");
  var selector = $(this).data('target');
  $(selector).prop("checked", isChecked);
});



</script>
</body>
</html>