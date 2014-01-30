// JavaScript Document
function getxmlobject()
{
	var http_request=null;
	if(window.XMLHttpRequest)
	{
		try
		{
			http_request= new XMLHttpRequest();
		}catch(e)
		{
			http_request=false;
		}
	}
	else if(window.ActiveXObject)
	{
		try
		{
				http_request=new ActiveXObject("Msxml2.XMLHTTP");
		}catch(e)
			{
				try{
					http_request = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch(e)
			{
				http_request= false;
			}
		}
		
	}
	if(!http_request)
	{
		alert("cannot create an Xml");
		return false;
	}
	return http_request;

}

function getpage(pageid)
{
	var request= getxmlobject();
	request.open('GET.html',pageid);
	div=document.getElementById('divpage');
	if(div==null)
		div=parent.document.getElementById(divid);
	request.onreadystatechange=function()
	{
			if(request.readyState==4 && request.status==200)
			{
				var response = request.responseText;
				div.innerHTML="";
				div.innerHTML=response;
			}
	}
	request.send(null);
	
}



function getpage1(divid,pageid)
{
	var request= getxmlobject();
	request.open('GET.html',pageid);
	request.onreadystatechange=function()
	{
			if(request.readyState==4 && request.status==200)
			{
				var response = request.responseText;
				document.getElementById(divid).innerHTML=response;
			}
	}
	request.send(null);
	
}


var gid1=0;
function setgotra(value)
{
	gid1=value;
}
var mgid1=0;
function setmgotra(value)
{
	mgid1=value;
}




function gonext()
{
	name=document.forms['frmsearch'].oname.value;
	occ=document.forms['frmsearch'].occ.value;
	gotra=document.forms['frmsearch'].gotra.value;
	for (i=0; i < 2; i++)
	   {
	   if (document.frmsearch.gender[i].checked)
	      {
		      gender = document.frmsearch.gender[i].value;
	      }
	   }
	   string=name+","+occ+","+gotra+","+gender;
	document.location.href="indexd996.html?content=searchdetail.php?string="+string;
}

function gonext1()
{
	name=document.forms['frmsearch'].oname.value;
	occ=document.forms['frmsearch'].occ.value;
	edu=document.forms['frmsearch'].edu.value;	
	gotra=document.forms['frmsearch'].gotra.value;
	for (i=0; i < 3; i++)
	   {
	   if (document.frmsearch.gender[i].checked)
	      {
		      gender = document.frmsearch.gender[i].value;
	      }
	   }
	   string=name+","+occ+","+gotra+","+gender+","+edu;
	document.location.href="indexe4fa.html?content=dsearchdetail.php?string="+string;
}





function getdesc(id)
{
	
	var request= getxmlobject();
	request.open('GET.html','getdesc5445.html?id='+id);
	request.onreadystatechange=function()
	{
			if(request.readyState==4 && request.status==200)
			{
				var response = request.responseText;
				document.getElementById('articledesc').innerHTML=response;
			}
	}
	request.send(null);
	
}




function login(name,pass)
{
	if(name=="undefine" || name=="")
	{
		  document.getElementById('slogin').innerHTML="Enter User Name";
		  return false;
	}
	else
	{
		document.getElementById('slogin').innerHTML="";
	}
	
	if(pass=="undefine" || pass=="")
	{
		  document.getElementById('slogin').innerHTML="Enter Password";
		  return false;
	}
	else
	{
		document.getElementById('slogin').innerHTML="";	
	}
						  
	var request= getxmlobject();
	request.open('GET.html','login2e96.html?uname='+name+'&passwd='+pass+'&type=login');
	request.onreadystatechange=function()
	{
			if(request.readyState==4 && request.status==200)
			{
				var response = request.responseText;
				alert(response);
				if(response==0)
				{
					
					document.getElementById('slogin').innerHTML="Incorrect Username Or Password";
				}
				else	
				{
				document.getElementById('login').innerHTML="<img src='vimage/button/profile.gif' width='65px' onClick=\"getpage('profile.html');\">";
								document.location.href='indexfd9c.html?content='+response;
				}

			}
	}
	request.send(null);
	
}



function chkedata(frm)
{
	name=frm.elements['txtname'].value;
	flagdot=true;
	for(i=0;i<name.length;i++)
	{
		if(!((name[i]>='a' && name[i]<='z') || (name[i]>='A' && name[i]<='Z') || (name[i]>='0' && name[i]<='9') || name[i]=='.'))
		{
			document.getElementById('chkuser').innerHTML="No special symbol allowed";
			return false;
		}
		else
		{
			if(name[i]=='.')
			{	
				if(flagdot)
				{
					flagdot=false;
				}
				else
				{
					document.getElementById('chkuser').innerHTML="No special symbol allowed";
					return false;
				}
			}
		}
	}

	pass=frm.elements['txtpass'].value;
	conpass=frm.elements['txtconpass'].value;
	mobileno=frm.elements['txtmobile'].value;
	emailid=frm.elements['txtmailid'].value;

	if(name=="undefine" || name=="")
	{
		  document.getElementById('chkuser').innerHTML="Enter User Name";
		  return false;
	}
	else
	{
		document.getElementById('chkuser').innerHTML="";
	}
		
	if(pass=="undefine" || pass=="")
	{
		  document.getElementById('chkpass').innerHTML="Enter Password";
		  return false;
	}
	else
	{
		document.getElementById('chkpass').innerHTML="";	
	}
		
	if(conpass=="undefine" || conpass=="")
	{
		  document.getElementById('chkconpass').innerHTML="Enter Confirm Password";
		  return false;
	}
	else
	{
		document.getElementById('chkconpass').innerHTML="";	
	}
		
		
	if(pass != conpass)
	{
		  document.getElementById('chkconpass').innerHTML="Confirm Password Not Matched";
		  return false;
	}
	else
	{
		document.getElementById('chkconpass').innerHTML="";	
	}
			  
	
	document.location.href='login2e96.html?uname='+name+'&passwd='+pass+'&mobileno='+mobileno+'&emailid='+emailid+'&type=create';
	
	
}



function logout()
{

	var request= getxmlobject();
	request.open('GET.html',"logout.html");
	request.onreadystatechange=function()
	{
			if(request.readyState==4 && request.status==200)
			{
				var response = request.responseText;
				document.location.href='index-2.html'
			}
	}
	request.send(null);
	
}



function getnextarticle(id)
{
	//alert(pageid);
	var request= getxmlobject();
	request.open('GET.html',"articles8793.html?range="+id);
	request.onreadystatechange=function()
	{
			if(request.readyState==4 && request.status==200)
			{
				var response = request.responseText;
				document.getElementById('divpage').innerHTML=response;
			}
	}
	request.send(null);
}

function checkcomm()
{
 
	name=document.forms['commform'].hname.value;
 	address=document.forms['commform'].address.value;
	comment=document.forms['commform'].comment.value;
	if(name=="undefine" || name=="")
	{
		  alert("Please Enter The Name.");
		  return false;
	}
	if(address=="undefine" || address=="")
	{
		  alert("Please Enter The Address and Mobile No.");
		  return false;
	}
	if(comment=="undefine" || comment=="")
	{
		  alert("Please Enter The Comment.");
		  return false;
	}
	
	
	document.commform.submit();
	
}





 