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

.buttonExport {
  text-decoration: none;
  background-color: #336699;
  color: #fff;
  padding: 18px;
  border: 1px solid #000;
  border-radius: 5px;
  font-size: 1.2rem;
  
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

</style>
<body>
<!--?php echo getcwd() . "\n"; ?-->
    <p style="padding-top:30px;padding-bottom:30px;"><a class="buttonExport" href="top500.php">Back to main</a> 


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

            xhr: function() {
    var xhr = new window.XMLHttpRequest();

    xhr.upload.addEventListener("progress", function(evt) {
      if (evt.lengthComputable) {
        var percentComplete = evt.loaded / evt.total;
        percentComplete = parseInt(percentComplete * 100);
        console.log(percentComplete);

        if (percentComplete === 100) {

        }

      }
    }, false);

    return xhr;
  }, 



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


//UPDATE `externalPages` SET `flag`= 'x' WHERE `url` like '%application/app%'

  if ( isset( $_GET[ 'pageno' ] ) ) {
    $pageno = $_GET[ 'pageno' ];
  } else {
    $pageno = 1;
  }
  $no_of_records_per_page = 25;
  $offset = ( $pageno - 1 ) * $no_of_records_per_page;

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

  $total_pages_sql = "SELECT COUNT(*) FROM content_both_top_500 where content = ''";
  $resultCount = mysqli_query( $conn, $total_pages_sql );
  $total_rows = mysqli_fetch_array( $resultCount )[ 0 ];
  $total_pages = ceil( $total_rows / $no_of_records_per_page );



  $sql = "select id, url from top500 LIMIT $offset, $no_of_records_per_page";
    $result = $conn->query($sql);

  echo "<p><b>Total number of records: </b>" . $total_rows . "</p>";

  $sql_ids = "select name from content_both_top_500 WHERE content = ''";
  $dataset = $conn->query($sql_ids);
  $page_ids = array();
  while($row = $dataset->fetch_assoc()){
    $page_ids[] = $row['name'];
  }
  //print_r($page_ids);

    
    echo "<table>";

    if ($result->num_rows > 0) {
      // output data of each row
      while($row = $result->fetch_assoc()) {

        echo "<tr>";
        echo "<td>" . $row['id'] . "</td>";
        echo "<td><a href=\"" . $row['url'] . "\" target=\"_blank\">" . $row['url'] . "</a></td>";

        
        echo "<td style=\"padding-top:13px;\"><form name=\"singlePage\" id=\"". $row['id'] . "\"><input type=\"hidden\" name=\"addy\" value=\"". $row['url'] . "\"><input type=\"hidden\" name=\"id\" value=\"". $row['id'] . "\"><input class=\"buttonAction\" type=\"submit\"  id=\"harvest\" value=\"Harvest\"></form></td>";  
       

     
        if (isset($row['id']) && in_array($row['id'],$page_ids)){
        echo "<td width=\"100px\"><a class=\"button\" href=\"content-eng.php?id=" . $row['id'] . "\">Eng</a> <a class=\"button\" href=\"content-fra.php?id=" . $row['id'] . "\">Fra</a></td>";
        }else{
          echo "<td style=\"background-color: #dd0000;color:#fff;padding:4px;text-align:center;\">No data</td>";
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