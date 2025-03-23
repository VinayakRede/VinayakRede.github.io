function validateRadioButton(obj)
{
	var result = 0;
	for(var i=0; i<obj.length; i++)
	{
		if(obj[i].checked==true) 
		result = 1;
	}	
	if(result==0)  {  
		return false;
	} 
	else
	{
	return true;	
	}
}


function isname(sText)

	{

		   var ValidChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.()&_ ';

    	   var IsValid=true;

		   var Char;

		   for (i = 0; i < sText.length && IsValid == true; i++) 

			    { 

			        Char = sText.charAt(i); 

			        if (ValidChars.indexOf(Char) == -1) 

				        {

				            IsValid = false;

				        }

			    }

		    return IsValid;

	}
function isAlphabeticNumeric(sText){
	  


		   var ValidChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ';

    	   var IsValid=true;

		   var Char;

		   for (i = 0; i < sText.length && IsValid == true; i++) 

			    { 

			        Char = sText.charAt(i); 

			        if (ValidChars.indexOf(Char) == -1) 

				        {

				            IsValid = false;

				        }

			    }

		    return IsValid;

	}
function isPhone(sText)

	{

		   var ValidChars = '+-()0123456789';

    	   var IsValid=true;

		   var Char;

		   for (i = 0; i < sText.length && IsValid == true; i++) 

			    { 

			        Char = sText.charAt(i); 

			        if (ValidChars.indexOf(Char) == -1) 

				        {

				            IsValid = false;

				        }

			    }

		    return IsValid;

	}	

function isNumber(sText)

	{

		   var ValidChars = '0123456789';

    	   var IsValid=true;

		   var Char;

		   for (i = 0; i < sText.length && IsValid == true; i++) 

			    { 

			        Char = sText.charAt(i); 

			        if (ValidChars.indexOf(Char) == -1) 

				        {

				            IsValid = false;

				        }

			    }

		    return IsValid;

	}

	
function checkforfields(obj,paratocheck,msg)
{	
	var splitresult = paratocheck.split(","); 
	
	for(var splitvalue=0;splitvalue < splitresult.length; splitvalue++ ) {
		
			if(splitresult[splitvalue]=="blank")	
			{
				if(obj.value=="") {
					alert("Please enter "+msg);
					//obj.value="";
					obj.focus();
					
					return false;
				}
			}
			if(splitresult[splitvalue]=="prespace")	
			{
				if(obj.value.charAt(0)==' ') {
					alert("Please avoid prespaces for "+msg);
					//obj.value="";
					obj.select();
					return false;
				}
			}
			if(splitresult[splitvalue]=="postspace")	
			{
				if(obj.value.charAt(obj.value.length-1)==" ") {
					alert("Please avoid postspaces for "+msg);
					//obj.value="";
					obj.select();
					return false;
				}
			}
			if(splitresult[splitvalue]=="num")	
			{
				if(!isNumber(obj.value)) {
					alert("Please use numbers for "+msg);
					//obj.value="";
					obj.select();
					return false;
				}
			}
			if(splitresult[splitvalue]=="fraction")	
			{
				if(!isFraction(obj.value)) {
					alert("Please use numbers or fractions for "+msg);
					//obj.value="";
					obj.select();
					return false;
				}
			}
			if(splitresult[splitvalue]=="alpha")	
			{
				if(!isAlphabetic(obj.value)) {
					alert("Please use alphabets for "+msg);
					//obj.value="";
					obj.select();
					return false;
				}
			}
			if(splitresult[splitvalue]=="name")	
			{
				if(!isname(obj.value)) {
					alert("Please use alphabets for "+msg);
					//obj.value="";
					obj.select();
					return false;
				}
			}
			if(splitresult[splitvalue]=="alphanum")	
			{
				if(!isAlphabeticNumeric(obj.value)) {
					alert("Please use alphanumeric for "+msg);
					//obj.value="";
					obj.select();
					return false;
				}
			}
			if(splitresult[splitvalue]=="select")	
			{
				if(obj.value=="" || obj.value==0) {
					alert("Please select "+msg);
					//obj.value="";
					obj.focus();
					return false;
				}
			}
			if(splitresult[splitvalue]=="pan")	
			{
				if(!isPan (obj.value)) {
					alert("Please enter valid "+msg);
					//obj.value="";
					obj.select();
					return false;
				}
			}
			if(splitresult[splitvalue]=="phone")	 /// added dec
			{
				
				if(!isPhone(obj.value)) {
					alert("Please use numbers for "+msg);
					//obj.value="";
					obj.select();
					return false;
				}
			}
			if(splitresult[splitvalue]=="email")	
			{
				if(!isEmail(obj.value))
				{
				alert("Please enter valid "+msg);
				//obj.value="";
				obj.select();
				return false;
				}
			}
		}
	return true;
}
function checktwofields(obja,objb,paratocheck,msg)
{   
	var splitresult = paratocheck.split(",");	
	for(var splitvalue=0;splitvalue < splitresult.length; splitvalue++ ) {
		if(splitresult[splitvalue]=="same")	
			{
				if(obja.value!=objb.value) {
					alert(msg);
					obja.value="";
					objb.value="";
					obja.focus();
					return false;
				}
			}
		if(splitresult[splitvalue]=="different")	
			{
				if(obja.value==objb.value) {
					alert(msg);
					obja.value="";
					objb.value="";
					obja.focus();
					return false;
				}
			}	
	}
	return true;
}

function checkvaliddate(input){
var validformat=/^\d{2}\/\d{2}\/\d{4}$/ //Basic check for format validity
var returnval=false
if (!validformat.test(input))
returnval=false;
//alert("Please enter valid Date. G");
else{ //Detailed check for valid date ranges
	var monthfield=input.split("/")[0]
	var dayfield=input.split("/")[1]
	var yearfield=input.split("/")[2]
	var dayobj = new Date(yearfield, monthfield-1, dayfield)
	
	if ((dayobj.getMonth()+1!=monthfield)||(dayobj.getDate()!=dayfield)||(dayobj.getFullYear()!=yearfield))
	returnval=false;
	//alert("Please enter valid Date. V");
	else
	returnval=true
}

/*if (returnval==false) {
*/	
	return returnval;
/*}*/
}
function checkItWITHOUTSPACES(evt) {
    evt = (evt) ? evt : window.event
    var charCode = (evt.which) ? evt.which : evt.keyCode
	// if (charCode != 32 && charCode != 40 && charCode != 41 && charCode != 45 && charCode != 43) {    
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        status = "This field accepts Numbers only."
        return false
    }
	//}
    status = ""
    return true
}
 
 
 function checkprice(sText)
{
 
	var ValidChars = "0123456789.";
    var IsNumber=true;
    var Char;
	var invalddot=0;
	if(sText.length==0)	
	{
	  return false;
	}
	else
	{
    for (i = 0; i < sText.length && IsNumber == true; i++) 
    { 
        Char = sText.charAt(i); 
        if (ValidChars.indexOf(Char) == -1) 
        {
            IsNumber = false;
        }
		if (Char==".") 
        {
            invalddot=invalddot+1;
			if(invalddot >= 2)
			IsNumber = false;
			
        }
    }  
    return IsNumber;
   }	
}
function validateRadioButton(obj)
{
	var result = 0;
	for(var i=0; i<obj.length; i++)
	{
		if(obj[i].checked==true) 
		result = 1;
	}	
	if(result==0)  {  
		return false;
	} 
	else
	{
	return true;	
	}
}

function isNumber(sText)
{
	   var ValidChars = '0123456789';
	   var IsValid=true;
	   var Char;
	   for (i = 0; i < sText.length && IsValid == true; i++) 
			{ 
				Char = sText.charAt(i); 
				if (ValidChars.indexOf(Char) == -1) 
					{
						IsValid = false;
					}
			}
		return IsValid;
}

function isFraction(sText)
{
	   var ValidChars = '0123456789.';
	   var IsValid=true;
	   var Char;
	   for (i = 0; i < sText.length && IsValid == true; i++) 
			{ 
				Char = sText.charAt(i); 
				if (ValidChars.indexOf(Char) == -1) 
					{
						IsValid = false;
					}
			}
		return IsValid;		
}


function checktwofields(obja,objb,paratocheck,msg)
{   
	var splitresult = paratocheck.split(",");	
	for(var splitvalue=0;splitvalue < splitresult.length; splitvalue++ ) {
		if(splitresult[splitvalue]=="same")	
			{
				if(obja.value!=objb.value) {
					alert(msg);
					obja.value="";
					objb.value="";
					obja.focus();
					return false;
				}
			}
		if(splitresult[splitvalue]=="different")	
			{
				if(obja.value==objb.value) {
					alert(msg);
					obja.value="";
					objb.value="";
					obja.focus();
					return false;
				}
			}	
	}
	return true;
}

function checkforfieldsbrowsermessage(obj,paratocheck,msg,displaymesg)
{
	var splitresult = paratocheck.split(","); 
	for(var splitvalue=0;splitvalue < splitresult.length; splitvalue++ ) {
		
			if(splitresult[splitvalue]=="blank")	
			{
				if(trim(obj.value)=="") {
					
					document.getElementById(displaymesg).innerHTML  = "Please enter "+msg;
					obj.value="";
					//obj.focus();
					
					return false;
				}
				else
				{
					document.getElementById(displaymesg).innerHTML  = "";
				}
			}
			if(splitresult[splitvalue]=="prespace")	
			{
				if(obj.value.charAt(0)==' ') {
					document.getElementById(displaymesg).innerHTML  = "Please avoid prespaces for "+msg;
					obj.value="";
					//obj.focus();
					return false;
				}
				else
				{
					document.getElementById(displaymesg).innerHTML  = "";
				}
			}
			if(splitresult[splitvalue]=="postspace")	
			{
				if(obj.value.charAt(obj.value.length-1)==" ") {
					document.getElementById(displaymesg).innerHTML  = "Please avoid postspaces for "+msg;
					obj.value="";
					//obj.focus();
					return false;
				}
				else
				{
					document.getElementById(displaymesg).innerHTML  = "";
				}
			}
			if(splitresult[splitvalue]=="num")	
			{
				if(!isNumber(obj.value)) {
					document.getElementById(displaymesg).innerHTML  = "Please use numbers for "+msg;
					
					obj.value="";
					//obj.focus();
					return false;
				}
				else
				{
					document.getElementById(displaymesg).innerHTML  = "";
				}
			}
			if(splitresult[splitvalue]=="alpha")	
			{
				if(!isAlphabetic(obj.value)) {
					document.getElementById(displaymesg).innerHTML  = "Please use alphabets for "+msg;
					
					obj.value="";
					//obj.focus();
					return false;
				}
				else
				{
					document.getElementById(displaymesg).innerHTML  = "";
				}
			}
			if(splitresult[splitvalue]=="CoName")	
			{
				if(!isCName(obj.value)) {
					document.getElementById(displaymesg).innerHTML  = "Please enter valid "+msg;
					
					obj.value="";
					//obj.focus();
					return false;
				}
				else
				{
					document.getElementById(displaymesg).innerHTML  = "";
				}
			}
			
			if(splitresult[splitvalue]=="alphanum")	
			{
				if(!isAlphabeticNumeric(obj.value)) {
					
					document.getElementById(displaymesg).innerHTML  = "Please use alphanumeric for "+msg;
					obj.value="";
					//obj.focus();
					return false;
				}
				else
				{
					document.getElementById(displaymesg).innerHTML  = "";
				}
			}
			if(splitresult[splitvalue]=="select")	
			{
				if(obj.value=="" || obj.value==0) {
					document.getElementById(displaymesg).innerHTML  = "Please select "+msg;
					
					obj.value="";
					//obj.focus();
					return false;
				}
				else
				{
					document.getElementById(displaymesg).innerHTML  = "";
				}
			}
			if(splitresult[splitvalue]=="email")	
			{
				
					if(!isEmail(obj.value))
	{					document.getElementById(displaymesg).innerHTML  = "Please enter valid Email Address";
					obj.value="";
					//obj.focus();
					return false;
				}
				else
				{
					document.getElementById(displaymesg).innerHTML  = "";
				}
			}
		}
	return true;
}

function checkvaliddate(input){
var validformat=/^\d{2}\/\d{2}\/\d{4}$/ //Basic check for format validity
var returnval=false
if (!validformat.test(input))
returnval=false;
//alert("Please enter valid Date. G");
else{ //Detailed check for valid date ranges
	var monthfield=input.split("/")[0]
	var dayfield=input.split("/")[1]
	var yearfield=input.split("/")[2]
	var dayobj = new Date(yearfield, monthfield-1, dayfield)
	
	if ((dayobj.getMonth()+1!=monthfield)||(dayobj.getDate()!=dayfield)||(dayobj.getFullYear()!=yearfield))
	returnval=false;
	//alert("Please enter valid Date. V");
	else
	returnval=true
}

/*if (returnval==false) {
*/	
	return returnval;
/*}*/
}
function checkItWITHOUTSPACES(evt) {
    evt = (evt) ? evt : window.event
    var charCode = (evt.which) ? evt.which : evt.keyCode
	// if (charCode != 32 && charCode != 40 && charCode != 41 && charCode != 45 && charCode != 43) {    
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        status = "This field accepts Numbers only."
        return false
    }
	//}
    status = ""
    return true
}
 
 
 function checkprice(sText)
{
 
	var ValidChars = "0123456789.";
    var IsNumber=true;
    var Char;
	var invalddot=0;
	if(sText.length==0)	
	{
	  return false;
	}
	else
	{
    for (i = 0; i < sText.length && IsNumber == true; i++) 
    { 
        Char = sText.charAt(i); 
        if (ValidChars.indexOf(Char) == -1) 
        {
            IsNumber = false;
        }
		if (Char==".") 
        {
            invalddot=invalddot+1;
			if(invalddot >= 2)
			IsNumber = false;
			
        }
    }  
    return IsNumber;
   }	
}

function checkFileUpload(obj, paratocheck,fileFormats, msg)
{
	var splitresult = paratocheck.split(","); 	
	for(var splitvalue=0;splitvalue < splitresult.length; splitvalue++ )
	{
		if(splitresult[splitvalue]=="blank")	
		{
			if(obj.value=="")
			{
				alert("Please Browse "+msg);
				obj.focus();				
				return false;
			}
		}
	}
	if(obj.value!="")
	{
		var fileFormatsResult = fileFormats.split(","); 	
		var valueResult=obj.value.split(".");	
		var flag=false;
		for(var splitvalue=0;splitvalue < fileFormatsResult.length; splitvalue++ )
		{
			if(fileFormatsResult[splitvalue]==valueResult[valueResult.length-1])
			{
				flag=true;
				break;
			}
		}
		if(flag==false)
		{
			alert("Please browse one of "+fileFormats+" file formats.");
			obj.focus();
			return false;
		}
		else
			return true;
	}
	return true;
}