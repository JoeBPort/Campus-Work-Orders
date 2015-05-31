<?php

header('Content-Type: text/xml');

$bld = $_GET['bld'];

$server = "";
		$sqlusername = "";
		$sqlpassword = "";
		$database = "";
		
		
$connection_string ='DRIVER={SQL SERVER};SERVER=' . $server . ';DATABASE=' . $database;
$connection = odbc_connect($connection_string, $sqlusername, $sqlpassword);

$query="SELECT   BldgSName,TicketRequestor,TicketRoomNum,TicketJournal,TicketCreator,TicketEditor,TicketPriority,TicketDesc,TicketPhone,
TicketEmail,TicketType,TicketIncidentNum,TicketTasks,TicketDate FROM Bldg_tbl LEFT JOIN Ticket_tbl ON BldgID=TicketBldgID
WHERE TicketStatus = 1 AND TicketPriority = 1 AND TicketBldgID = '".$bld."' ";

$result=odbc_exec($connection,$query);


echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';
echo '<response>';
echo "hello";
while(odbc_fetch_row($result)){
	
	
$bld =  odbc_result($result, 1);
$requestor =  odbc_result($result, 2);
$room =  odbc_result($result,3 );
$journal=  odbc_result($result, 4);
$creator =  odbc_result($result, 5);
$editor =  odbc_result($result, 6);
$priority =  odbc_result($result, 7);
$desc =  odbc_result($result, 8);
$phone =  odbc_result($result, 9);
$email =  odbc_result($result, 10);
$type =  odbc_result($result, 11);
$inum =  odbc_result($result, 12);
$tasks =  odbc_result($result, 13);
$date =  odbc_result($result, 14);
echo "
<tickets>
<building>$bld</building>
<requestor>$requestor</requestor>
<room>$room</room>
<journal>$journal</journal>
<creator>$creator</creator>
<editor>$editor</editor>
<priority>$priority</priority>
<desc>$desc</desc>
<phone>$phone</phone>
<email>$email</email>
<type>$type</type>
<inum>$inum</inum>
<tasks>$tasks</tasks>
<date>$date</date>


</tickets>";
}

echo  '</response>';


?>


