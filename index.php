<html>
<!-- Alex was here on October 18, 2021 -->
<!-- 1:15 PM -->
<style type="text/css">
* { font-family: helvetica;
    font-size: .9rem;}
table {
  border:10px solid #bbb;
  width: 800px;
    }
td {
    border-bottom:1px solid #000;
    padding: 3px;
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

</style>
<body>
<!--script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script--> 
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script>
      $(document).ready(function() {
        $('form').submit(function(event) {

     
            event.preventDefault();
            var idData = $(this).closest('form').find('input[name=id]').val();
            var urlData = $(this).closest('form').find('input[name=addy]').val();
            //urlData = urlData.replace('addy=','');
            console.log("url data: " + urlData);
            //alert(urlData.toString());
          $.ajax({
            type: 'POST',
            url: 'csv.php',
            data: {
                'url': urlData,
                'id' : idData
            },
            success: function (data) {
                returnedvalue = data;
                console.log(data)

               
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
  $no_of_records_per_page = 100;
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

  $total_pages_sql = "SELECT COUNT(*) FROM externalPages";
  $resultCount = mysqli_query( $conn, $total_pages_sql );
  $total_rows = mysqli_fetch_array( $resultCount )[ 0 ];
  $total_pages = ceil( $total_rows / $no_of_records_per_page );

  //$query_select_xref_info = "SELECT id, url FROM externalPages WHERE flag <> 'x' LIMIT $offset, $no_of_records_per_page";
  //$result = $conn->query($query_select_xref_info);

  $sql = "select id, url from externalPages LIMIT $offset, $no_of_records_per_page";
    $result = $conn->query($sql);

  echo("<p>Total number of records: " . $total_rows . "</p>");

  $sql_ids = "select name from content_both";
  $dataset = $conn->query($sql_ids);
  $page_ids = array();
  while($row = $dataset->fetch_assoc()){
    $page_ids[] = $row['name'];
  }
  //print_r($page_ids);

    
    echo "<table>";
    echo "<tr style=\"border-bottom:3px solid #000;\">";
    echo "<th style=\"text-align:left;\">ID</th>";
    echo "<th style=\"text-align:left;\">URL</th>";
    echo "<th></th>";
    echo "<th></th>";
    echo "</tr>";
    if ($result->num_rows > 0) {
      // output data of each row
      while($row = $result->fetch_assoc()) {

        echo "<tr>";
        echo "<td>" . $row['id'] . "</td>";
        echo "<td><a href=\"" . $row['url'] . "\" target=\"_blank\">" . $row['url'] . "</a></td>";

        
        echo "<td><form id=\"". $row['id'] . "\"><input type=\"hidden\" name=\"addy\" value=\"". $row['url'] . "\"><input type=\"hidden\" name=\"id\" value=\"". $row['id'] . "\"><input id=\"harvest\" type=\"submit\" value=\"Harvest\"></form></td>";  
       

     
        if (isset($row['id']) && in_array($row['id'],$page_ids)){
        echo "<td><a href=\"gcweb-eng.php?id=" . $row['id'] . "\">Preview</a></td>";
        }else{
          echo "<td></td>";
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
    <li><a href="?pageno=1">First</a></li>
    <li class="<?php if($pageno <= 1){ echo 'disabled'; } ?>"> <a href="<?php if($pageno <= 1){ echo '#'; } else { echo "?pageno=".($pageno - 1); } ?>">Prev</a> </li>
    <li class="<?php if($pageno >= $total_pages){ echo 'disabled'; } ?>"> <a href="<?php if($pageno >= $total_pages){ echo '#'; } else { echo "?pageno=".($pageno + 1); } ?>">Next</a> </li>
    <li><a href="?pageno=<?php echo $total_pages; ?>">Last</a></li>
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