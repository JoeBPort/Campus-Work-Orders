<!DOCTYPE html>
<html>
	<head>
		<script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyDVxQ3m1kLr3d3r6Cnlz85xFGroYfVaJpM&sensor=false"></script>
		<link href="map.css" rel="stylesheet" type="text/css">
		<!--<script type="text/javascript" src="path_to/jquery.js"></script>
		<script type="text/javascript" src="path_to/jquery.simplePagination.js"></script>
		<link type="text/css" rel="stylesheet" href="path_to/simplePagination.css"/>
		-->
		<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />
		<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
		<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
		<link rel="stylesheet" href="/resources/demos/style.css" />
		<script type="text/javascript" src="jquery.js"></script>
		<script type="text/javascript" src="jquery.simplePagination.js"></script>
		<link type="text/css" rel="stylesheet" href="path_to/simplePagination.css"/>
		<!--
		<script>
			$(function() 
			{
				$( "#rss2" ).draggable();
			});
		</script>
		-->
		<script src="infobox.js" type="text/javascript"></script>
		<script type="text/javascript" src="infobox2.js"></script>
		<script type="text/javascript" src="results.js"></script>
	</head>
	<?php
		echo'
			<script>
				myCenter=new google.maps.LatLng(43.684819,-85.483596);
				function initialize()
				{
					mapProp = {
					center:myCenter,
					zoom:15,
					mapTypeId:google.maps.MapTypeId.ROADMAP
					};
					map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
				}
				google.maps.event.addDomListener(window, "load", initialize);
			</script>';

	?>

	<body bgcolor="#505050">

	<div id="border"></div>
	<div id="border2"></div>
	<div id="rss"></div>
	
	<?php	
		
		$server = "FSUDBOARD1\SQLEXPRESSDUNDAS";
		$sqlusername = "TechNet2";
		$sqlpassword = "Solution@01";
		$database = "technet";
		
		$connection_string ='DRIVER={SQL SERVER};SERVER=' . $server . ';DATABASE=' . $database;
		$connection = odbc_connect($connection_string, $sqlusername, $sqlpassword);

		$query1="SELECT PosX, PosY From Position_tbl";
		$res=odbc_exec($connection,$query1);

		while(odbc_fetch_row($res))
		{
			$PosX = odbc_result($res, 1);
			$PosY = odbc_result($res,2);
			if($PosX =="" && $PosY=="")
			{
				$PosY=45;
				$PosX=4;
			}
		
		}
	?>

	<div id="rss2" onClick="pos('rss2')" style="position: absolute; top: <?php echo $PosY."px;";?>; left: <?php echo $PosX."px;";?>  "></div>

	<div class="headerDivider1"></div>
	<div class="headerDivider2"></div>
	<div class="headerDivider3"></div>
	<div class="headerDivider4"></div>
	<div class="headerDivider5"></div>
	<div id="googleMap" ></div>

	<div id="nav">
	<font id="filter">FILTER BY:</font>
	<ul>
		<li><a href=""> FILTER BY:</a></li>
		<li onClick="change(1)"><a href="#" id="1">PRIORITY</a>
		<ul>
			<li><a href="#">1</a></li>
			<li><a href="#">2</a></li>
			<li><a href="#">3</a></li>
			<li><a href="#">4</a></li>
			<li><a href="#">5</a></li>
		</ul>
		</li>
	
		<li onClick="change(2)"><a href="#" id="2">TYPE</a>
		<ul>
			<li><a href="#">Incident</a></li>
			<li><a href="#">Request</a></li>
		</ul>
		</li>
    
		<li onClick="change(3)"><a href="#" id="3">TEAM</a>
		<ul>
			<li><a href="#">FLS</a></li>
			<li><a href="#">SLS</a></li>
			<li><a href="#">Applications</a></li>
			<li><a href="#">Asset Life Cycle Managment</a></li>
			<li><a href="#">Audio Visual </a></li>
			<li><a href="#">Automation and Continuity</a></li>
		</ul>
		</li>
		<li onClick="change(4)"><a href="#" id="4">DATE</a></li>
	</ul>
	</div>

	<p><font id="text">FERRIS STATE UNIVERISTY TICKETS</font></p></div>
	<br/>


	<?php 
	
		$query="SELECT BldgID FROM Bldg_tbl LEFT JOIN Ticket_tbl ON BldgID = TicketBldgID
		WHERE TicketStatus = 1";

		$result=odbc_exec($connection,$query);
		echo'<script type="text/javascript">
		
		function cords()
		{
			arr = [];
			arr["13"]=new google.maps.LatLng(43.683176,-85.482785);
			arr["84"]=new google.maps.LatLng(43.689185,-85.481616);
			arr["98"]=new google.maps.LatLng(43.687726, -85.479100);
			arr["36"]=new google.maps.LatLng(43.678274,-85.484851);
		}
		google.maps.event.addDomListener(window, "load", cords);

		</script>';


		$bld2 = array();
		while(odbc_fetch_row($result))
		{
			$bld = odbc_result($result, 1);
	?>

			<script type="text/javascript">
		
				function mark()
				{
					var bld = '<?php echo $bld; ?>';
					var marker=new google.maps.Marker({
					position:arr[bld],
					});
					marker.setMap(map);

					var infobox = new InfoBox(boxOptions);
					//open(map, marker)

					google.maps.event.addListener(marker, 'click', function() {
					gtickets(bld);
					infobox.open(map,marker);

					//boxText.innerHTML = "City Hall, Sechelt<br>British Columbia<br>Canada";
					});
				}
				google.maps.event.addDomListener(window, "load", mark);

			</script>

	<?php
		}
	?>

</body>
</html>
