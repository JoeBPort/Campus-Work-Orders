/*
bil = new Array();
room = new Array();

*/ //str = '';
   n = '';
function gtickets(bld)
{
	var xmlhttp;
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}	
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
		response = xmlhttp.responseXML;

		doc = response.getElementsByTagName("tickets");
	 
		var bil = doc[0].getElementsByTagName('building')[0].firstChild.nodeValue;
		var room = doc[0].getElementsByTagName('room')[0].firstChild.nodeValue;
		var date =  doc[0].getElementsByTagName('date')[0].firstChild.nodeValue;
		var priority = doc[0].getElementsByTagName('priority')[0].firstChild.nodeValue;
		var requestor  = doc[0].getElementsByTagName('requestor')[0].firstChild.nodeValue;
		var desc  = doc[0].getElementsByTagName('desc')[0].firstChild.nodeValue;
	 
	 
		var creator = doc[0].getElementsByTagName('creator')[0].firstChild.nodeValue;
		var  editor = doc[0].getElementsByTagName('editor')[0].firstChild.nodeValue;
		var phone = doc[0].getElementsByTagName('phone')[0].firstChild.nodeValue;
		var  email = doc[0].getElementsByTagName('email')[0].firstChild.nodeValue;
		var  journal = doc[0].getElementsByTagName('journal')[0].firstChild.nodeValue;
		var  tasks = doc[0].getElementsByTagName('tasks')[0].firstChild.nodeValue;
	  
	  /* if(b >= doc.length){
		str += '<li onClick="return serch(\''+i+'\');">'+b+'</li>'; 
	  }
	  else{*/
	  
	
	 b = 0;
	str = '';
	//'<li onClick="serch(this.value)">'+n+'</li>'
	 for( var i = 0; i<doc.length; i++)
	 {
		b++;  
	 
		str += '<li onClick="return serch(\''+i+'\');">'+b+'&nbsp;</li>';
	 // }
	} 
	 f = '>';
	 b = '<';
	/* boxText.innerHTML = '<u>'+ bil +'-'+ room + '</u><br/>'
	 +'Priority: '+ priority + '<br/>'+' Requestor: '+requestor+'<br/>'+'Description: '+desc  + '</u><br/><div style="position: absolute; top: 30%; left: 20%; "><a onClick="serch()"></a><ul style="float:left; list-style-type:none;"><li onClick="return serch2(1);"><&nbsp;</li>'+str+'<li onClick="serch2(2)">&nbsp;></li></ul><a onClick="serch()"></a></div>';*/
	 
	  boxText.innerHTML = '<u>'+ bil +'-'+ room + '</u><br/>'
	 +'Priority: '+ priority + '<br/>'+' Requestor: '+requestor+'<br/>'+'Description: '+desc  + '</u><br/>'+
	 '<ul id="ul2" style=" list-style-type:none; position: absolute; top: 60%; left:25%;" ><li onClick="serch2(1)"><&nbsp;</li>'+str+'<li onClick="serch2(2)">&nbsp;></li></ul>';
	 
	 
	 
	 rss2.innerHTML = 'Creator: ' + creator + '<br/> Editor: ' + editor + '<br/> Phone: ' + phone + '<br/> Email: ' + email + '<br/> Journal: ' + journal;
	
    }
  }
xmlhttp.open("GET","mapre.php?bld="+bld,true);
xmlhttp.send();
}
rec = new Array();

function serch(i)
{
	//alert(last);
	 rec.push(i);
     //i=i-1;	
	
     var bil = doc[i].getElementsByTagName('building')[0].firstChild.nodeValue;
	 var room = doc[i].getElementsByTagName('room')[0].firstChild.nodeValue;
	 var date = doc[i].getElementsByTagName('date')[0].firstChild.nodeValue;
	 var priority = doc[i].getElementsByTagName('priority')[0].firstChild.nodeValue;
	 var requestor = doc[i].getElementsByTagName('requestor')[0].firstChild.nodeValue;
	 var desc = doc[i].getElementsByTagName('desc')[0].firstChild.nodeValue;
	 
	 
	var creator = doc[i].getElementsByTagName('creator')[0].firstChild.nodeValue;
	var editor = doc[i].getElementsByTagName('editor')[0].firstChild.nodeValue;
	var phone = doc[i].getElementsByTagName('phone')[0].firstChild.nodeValue;
	var email = doc[i].getElementsByTagName('email')[0].firstChild.nodeValue;
	var journal = doc[i].getElementsByTagName('journal')[0].firstChild.nodeValue;
	var  tasks = doc[i].getElementsByTagName('tasks')[0].firstChild.nodeValue;	
	
	 boxText.innerHTML = '<u>'+ bil +'-'+ room + '</u><br/>'
	 +'Priority: '+ priority + '<br/>'+' Requestor: '+requestor+'<br/>'+'Description: '+desc  + '</u><br/><ul id="ul3" style="list-style-type:none;  position: absolute; top: 60%; left:25% "><li onClick="serch2(1)"><&nbsp;</li>'+str+'<li onClick="serch2(2)">&nbsp;></li></ul>';
	 
	 
	/* boxText.innerHTML = '<u>'+ bil +'-'+ room + '</u><br/>'
	 +'Priority: '+ priority + '<br/>'+' Requestor: '+requestor+'<br/>'+'Description: '+desc  + '</u><br/><div style="position: absolute; top: 30%; left: 20%; "><a onClick="serch()"></a><ul style="float:left;  list-style-type:none;"><li onClick="return serch2(1);"><&nbsp;</li>'+str+'<li onClick="serch2(2)">&nbsp;></li></ul><a onClick="serch()"></a></div>';
	 */
	 

	 
	 rss2.innerHTML = 'Creator: ' + creator + '<br/> Editor: ' + editor + '<br/> Phone: ' + phone + '<br/> Email: ' + email + '<br/> Journal: ' + journal;
	
	
}

 function serch2(id)
 {
	last = rec[rec.length -1];
	//alert(d);	
	//alert(last);
	if(id == 1 || id == 2)
	{
		if(id == 2 && last == undefined || id == 2 && last == Nan || id == 2 && last == '')
		{
			d = 1;
	
		return serch(d);
		}
		else if (id == 2 && last != undefined || id == 2 && last !='' )
		{
			d = last + 1;	
			return serch(d);	
		}
		else if(id == 1 && last !='' || id == 1 && last != undefined || id == 2 && last !=Nan)
		{	d = last - 1;
			return serch(d);

		}
	
	}
 }



function pos(id) {
	
	var xmlhttp;
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	var ele = document.getElementById(id)
	var top = 0;
	var right = 0;
	while(ele.tagName != "BODY") 
	{
	        top += ele.offsetTop;
	        right += ele.offsetLeft;
	        ele = ele.offsetParent;
	}
	    
	xmlhttp.open("GET","insert.php?top="+top+"&right="+right,true);
	xmlhttp.send();

}
