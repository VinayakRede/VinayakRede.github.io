var len;

var indexes;

var arrStateCity;

var arrStateCityVals;



var arrState;

var arrStateVals;

var arrCity;

var arrCityVals;

var val;

var count;

var form;



var dlen;

var dindexes;

var dval;

var dval2;

var dcount;

var arrDegreeSpec;

var arrDegreeSpecVals;

var arrFunctSpec;

var arrFunctSpecVals;



var validWorldPhoneChars = "0123456789-+() ";

var validNumbers = "0123456789()";

// ********





      function checkvalidate(frm)

      {

       var passfieldstrname,passfieldstr,passdisplaystr;

	   for(i=0;i<=frm.length-1;i++)

       {  		

         	passfieldstrname = frm.elements[i].name;

	        passfieldstr     = frm.elements[i].value;

		

				//alert("After For "+ i +" "+passfieldstrname );

				if(frm.elements[i].getAttribute("validate"))

				{

				   passdisplaystr   = frm.elements[i].getAttribute("displaymessage");			

				   var s;

				   s=frm.elements[i].getAttribute("validate");  

				   var val_array=s.split(",");

				   var part_num=0;

				   //		alert("b4 while"+passfieldstrname );

					   while (part_num < val_array.length)

						{					

						  switch(val_array[part_num])

						  {

							case "checkdelimeter":

								   //alert(passfieldstrname + "  Case " + val_array[part_num] );

								   

								      for (k = 0; k < passfieldstr.length; k++) { 

											Char = passfieldstr.charAt(i); 

											j=k+1;

											if (Char == "<" && j <= passfieldstr.length ) {

													if (sText.charAt(j)=="\""){ 

														alert(passdisplaystr +" Don't Use < After ? Or ? After > Characters");

														return(0);

													}

												}

								  			}

								   

								   //retval = checkstdelimeter(passfieldstrname,passfieldstr,passdisplaystr); 

								   /*if(retval){

								   		alert(retval);

								   		return(0);

								   }*/

									break;

						  } 

						 part_num+=1;

						 

						}  //while 

				} //if		

       } // for

      return(1);

      }   //main
function checkstdelimeter(sText,actualval,name1)

{

	sText = actualval;

   for (i = 0; i < sText.length; i++) { 

			Char = sText.charAt(i); 

			j=i+1;

			if (Char == "<" && j <= sText.length ) {

					if (sText.charAt(j)=="\""){ 

						alert(name1 +" Don't Use < After ? Or ? After > Characters");

						return(0);

					}

				}

  }

  

  for (i = 0; i < sText.length; i++) { 

			Char = sText.charAt(i); 

			j=i+1;

			if (Char == "\"" && j <= sText.length ) {

					if (sText.charAt(j)==">"){ 

							alert(name1 +" Don't Use < After ? Or ? After > Characters");

							return(0);

					}

				}

  }

    return(1);

}





function isAlphabetic(sText)

	{

		   var ValidChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ';

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
function isPrePost(sText)
{
	if(sText.charAt(0)==" ")
		return true;
	else if(sText.charAt(sText.length-1)==" ")
		return true;
	else
		return false;
}

function isAlphanumeric(sText)

	{

		   var ValidChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789. ';

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
	
	function isCName(sText)

	{

		   var ValidChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.!@#$%^&*()_ ';

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

	

function loadFunctSpecDDStartup(form, field1, field2){

	//alert('loadFunctSpecDDStartup');

	dlen = form.elements[field2].options.length;

	arrFunctSpec = new Array(len);

	arrFunctSpecVals = new Array(len);	

	for (var i=0;i<dlen;i++) {

		arrFunctSpecVals[i] = form.elements[field2].options[i].value;

		arrFunctSpec[i] = form.elements[field2].options[i].text;

	}	

	dcount=0;

	var dselcount= new Array(dlen);

	dval2 = new Array(dlen);

	//dval = form.elements[field1].options[form.elements[field1].selectedIndex].value;

	var klen=0;

	var dl=form.elements[field1].options.length;

	//alert("dl "+dl);

	var dval_func=new Array(dl);

	for(var ilen=0;ilen<dl;ilen++)

	{

		if(form.elements[field1].options[ilen].selected)

		{

			dval_func[klen] = form.elements[field1].options[ilen].value;

			klen++;

		}		

	}

	if(klen==0)

	{

		for(var t=0;t<dl;t++)

		{

			dval_func[klen] = form.elements[field1].options[t].value;

				klen++;

		}

	}

	//

	//alert("klen: "+klen);



	var i=0;

	var ii=0;

	var k=0;

	for(i=0,k=0;i<dlen;i++)

	{		

		if(form.elements[field2].options[i].selected)

		{

			dval2[k] = form.elements[field2].options[i].value;			

			k++;

		}

	}	

	dindexes = new Array(dlen);	



	for(var n=0;n<klen;n++){

		if(parseInt(dval_func[n]) == -1){

			form.elements[field2].options.length=0;

			form.elements[field2].options.length += 1;

			form.elements[field2].options[0].value = -1;

			form.elements[field2].options[0].text = "No Preference";

			form.elements[field2].selectedIndex = 0; 

			return;

		}

	}

}



// ********





function loadFunctSpecDD(form, field1, field2){

	

	dlen = form.elements[field2].options.length;

	arrFunctSpec = new Array(len);

	arrFunctSpecVals = new Array(len);	

	for (var i=0;i<dlen;i++) {

		arrFunctSpecVals[i] = form.elements[field2].options[i].value;

		arrFunctSpec[i] = form.elements[field2].options[i].text;

	}	

	dcount=0;

	var dselcount= new Array(dlen);

	dval2 = new Array(dlen);

	//dval = form.elements[field1].options[form.elements[field1].selectedIndex].value;

	var klen=0;

	var dl=form.elements[field1].options.length;

	//alert("dl "+dl);

	var dval_func=new Array(dl);

	for(var ilen=0;ilen<dl;ilen++)

	{

		if(form.elements[field1].options[ilen].selected)

		{

			dval_func[klen] = form.elements[field1].options[ilen].value;

			klen++;

		}		

	}

	if(klen==0)

	{

		for(var t=0;t<dl;t++)

		{

			dval_func[klen] = form.elements[field1].options[t].value;

				klen++;

		}

	}

	//

	//alert("klen: "+klen);



	var i=0;

	var ii=0;

	var k=0;

	for(i=0,k=0;i<dlen;i++)

	{		

		if(form.elements[field2].options[i].selected)

		{

			dval2[k] = form.elements[field2].options[i].value;			

			k++;

		}

	}	

	dindexes = new Array(dlen);	



	for (i=0,ii=0;i<dlen;i++)

	{

		for(var n=0;n<klen;n++){

			if (form.elements[field2].options[i].value.substring(0,2) == dval_func[n])

			{

				//alert("dval_func[n] "+dval_func[n]);

				for(var kk=0;kk<i;kk++)

				{

					if(form.elements[field2].options[i].value == dval2[kk])

					{

						dselcount[ii] = i;

						ii++;	

					}

				}			

				dindexes[dcount] = i;

				dcount = dcount+1;	

			}

		}

	}

	form.elements[field2].options.length=0;

	var sel = -1;

	for (var i=0;i<dcount;i++) { 

		var j = dindexes[i];

		form.elements[field2].options.length += 1;

		form.elements[field2].options[i].value = arrFunctSpecVals[j];

		form.elements[field2].options[i].text = arrFunctSpec[j];

		for(var kk=0;kk<ii;kk++)

		{

			if(j == dselcount[kk])

			{

				form.elements[field2].options[i].selected =true; 			

			}

		}

	}

	for(var n=0;n<klen;n++){

		if(parseInt(dval_func[n]) == -1){

			form.elements[field2].options.length=0;

			form.elements[field2].options.length += 1;

			form.elements[field2].options[0].value = -1;

			form.elements[field2].options[0].text = "No Preference";

			form.elements[field2].selectedIndex = 0; 

			return;

		}

	}

}

function changeFunctSpec(form,field1,field2) {

	

	dlen = form.elements[field1].options.length;

//	alert("dlen "+dlen);

	dcount=0;

	var dval_func=new Array(dlen);

	var klen=0;





//val = form.elements[field1].options[form.elements[field1].selectedIndex].value;



	for(var ilen=0;ilen<dlen;ilen++)

	{

		if(form.elements[field1].options[ilen].selected)

		{

			dval_func[klen] = form.elements[field1].options[ilen].value;

			klen++;

		}		

	}

	

for(var n=0;n<klen;n++){

	if(parseInt(dval_func[n]) == -1){

		form.elements[field2].options.length=0;

		form.elements[field2].options.length += 1;

		form.elements[field2].options[0].value = -1;

		form.elements[field2].options[0].text = "No Preference";

		form.elements[field2].selectedIndex = 0; 

		return;

	}

}



	dindexes = new Array(dlen);

	for (var i=0;i<arrFunctSpecVals.length;i++) 

	{



		for(var k=0;k<=klen;k++)

		{

			if (arrFunctSpecVals[i].substring(0,2) == dval_func[k])

			{ 

				//alert("arrFunctSpecVals[i] "+ arrFunctSpecVals[i]);

				dindexes[dcount] = i;

				dcount = dcount+1;	

				//alert("dcount "+dcount);

			}

		}

	}



	form.elements[field2].options.length=0;

	var sel = 0;

	for (i=0;i<dcount;i++) { 

		var j = dindexes[i];

		form.elements[field2].options.length += 1;

		form.elements[field2].options[i].value = arrFunctSpecVals[j];

		form.elements[field2].options[i].text = arrFunctSpec[j];		

	}

}

function loadStateCityDD(form, field1, field2){

	len = form.elements[field2].options.length;

	arrStateCity = new Array(len);

	arrStateCityVals = new Array(len);





	for (var i=0;i<len;i++) {

		arrStateCityVals[i] = form.elements[field2].options[i].value;

		arrStateCity[i] = form.elements[field2].options[i].text;

	}

	

	count=0;

	val = form.elements[field1].options[form.elements[field1].selectedIndex].value;



	indexes = new Array(len);



	for (var i=0;i<len;i++) {

		if (form.elements[field2].options[i].value.substring(0,3) == val) { 

			indexes[count] = i;

			count = count+1;	

		}

	}

	form.elements[field2].options.length=0;

	var sel = -1;

	for (var i=0;i<count;i++) { 

		var j = indexes[i];

		form.elements[field2].options.length += 1;

		form.elements[field2].options[i].value = arrStateCityVals[j];

		form.elements[field2].options[i].text = arrStateCity[j];

		if(parseInt(form.elements[field2].options[i].value) == 198185)

			form.elements[field2].selectedIndex = i;

	}

	

	if(parseInt(val) == -1){

		form.elements[field2].options.length=0;

		form.elements[field2].options.length += 1;

		form.elements[field2].options[0].value = -1;

		form.elements[field2].options[0].text = "No Preference";

		form.elements[field2].selectedIndex = 0; 

		return;

	}

}
function checkname(sText)
{
    var ValidChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
    var IsNumber=true;
    var Char;
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
    }  
    return IsNumber;
   }	
}



function loadSearchStateCityDD(form, field1, field2){

	len = form.elements[field2].options.length;

	arrStateCity = new Array(len);

	arrStateCityVals = new Array(len);





	for (var i=0;i<len;i++) {

		arrStateCityVals[i] = form.elements[field2].options[i].value;

		arrStateCity[i] = form.elements[field2].options[i].text;

	}

	

	count=0;

	val = form.elements[field1].options[form.elements[field1].selectedIndex].value;

	indexes = new Array(len);



	for (var i=0;i<len;i++) {

		if (form.elements[field2].options[i].value.substring(0,3) == val) { 

			indexes[count] = i;

			count = count+1;	

		}

	}

	form.elements[field2].options.length=0;

	var sel = -1;



		form.elements[field2].options.length=0;

		form.elements[field2].options.length += 1;

		form.elements[field2].options[0].value = -1;

		form.elements[field2].options[0].text = "No Preference";



	for (var i=0;i<count;i++) { 

		var j = indexes[i];

		form.elements[field2].options.length += 1;

		form.elements[field2].options[i+1].value = arrStateCityVals[j];

		form.elements[field2].options[i+1].text = arrStateCity[j];

	}

	

		form.elements[field2].selectedIndex = 0; 

		return;

}



function loadStateDD(form, field1, field2){

	len = form.elements[field2].options.length;

	arrState = new Array(len);

	arrStateVals = new Array(len);





	for (var i=0;i<len;i++) {

		arrStateVals[i] = form.elements[field2].options[i].value;

		arrState[i] = form.elements[field2].options[i].text;

	}

	

	count=0;

	val = form.elements[field1].options[form.elements[field1].selectedIndex].value;

	indexes = new Array(len);



	for (var i=0;i<len;i++) {

		if (form.elements[field2].options[i].value.substring(0,3) == val) { 

			indexes[count] = i;

			count = count+1;	

		}

	}

	form.elements[field2].options.length=0;

	var sel;

	for (var i=0;i<count;i++) { 

		var j = indexes[i];

		form.elements[field2].options.length += 1;

		form.elements[field2].options[i].value = arrStateVals[j];

		form.elements[field2].options[i].text = arrState[j];

		if(parseInt(form.elements[field2].options[i].value) == parseInt(form.hidState.value))

			sel = i;

	}

	form.elements[field2].selectedIndex = sel;

}





function loadCityDD(form, field1, field2){

	len = form.elements[field2].options.length;

	arrCity = new Array(len);

	arrCityVals = new Array(len);





	for (var i=0;i<len;i++) {

		arrCityVals[i] = form.elements[field2].options[i].value;

		arrCity[i] = form.elements[field2].options[i].text;

	}

	

	count=0;

	val = form.elements[field1].options[form.elements[field1].selectedIndex].value;

	indexes = new Array(len);



	for (var i=0;i<len;i++) {

		if (form.elements[field2].options[i].value.substring(0,6) == val) { 

			indexes[count] = i;

			count = count+1;	

		}

	}

	form.elements[field2].options.length=0;

	var sel;

	for (var i=0;i<count;i++) { 

		var j = indexes[i];

		form.elements[field2].options.length += 1;

		form.elements[field2].options[i].value = arrCityVals[j];

		form.elements[field2].options[i].text = arrCity[j];

		if(parseInt(form.elements[field2].options[i].value) == parseInt(form.hidCity.value))

			sel = i;

	}

	form.elements[field2].selectedIndex = sel;

}





function changeStateCity(form,field1,field2) {

	len = arrStateCityVals.length;

	count=0;

	val = form.elements[field1].options[form.elements[field1].selectedIndex].value;

	if(parseInt(val) == -1){

		form.elements[field2].options.length=0;

		form.elements[field2].options.length += 1;

		form.elements[field2].options[0].value = -1;

		form.elements[field2].options[0].text = "No Preference";

		form.elements[field2].selectedIndex = 0; 

		return;

	}



	indexes = new Array(len);

	for (var i=0;i<len;i++) {

		if (arrStateCityVals[i].substring(0,3) == val) { 

			indexes[count] = i;

			count = count+1;	

		}

	}



	form.elements[field2].options.length=0;

	var sel = 0;

	for (i=0;i<count;i++) { 

		var j = indexes[i];

		form.elements[field2].options.length += 1;

		form.elements[field2].options[i].value = arrStateCityVals[j];

		form.elements[field2].options[i].text = arrStateCity[j];

		if(parseInt(form.elements[field2].options[i].value) == 198185)

			sel = i;

	}

	form.elements[field2].selectedIndex = sel;

}





/*----  Added for search forms only*/

function changeSearchStateCity(form,field1,field2) {

	len = arrStateCityVals.length;

	count=0;

	val = form.elements[field1].options[form.elements[field1].selectedIndex].value;

	if(parseInt(val) == -1){

		form.elements[field2].options.length=0;

		form.elements[field2].options.length += 1;

		form.elements[field2].options[0].value = -1;

		form.elements[field2].options[0].text = "No Preference";

		form.elements[field2].selectedIndex = 0; 

		return;

	}



	indexes = new Array(len);

	for (var i=0;i<len;i++) {

		if (arrStateCityVals[i].substring(0,3) == val) { 

			indexes[count] = i;

			count = count+1;	

		}

	}



	form.elements[field2].options.length=0;

	form.elements[field2].options.length += 1;

	form.elements[field2].options[0].value = -1;

	form.elements[field2].options[0].text = "No Preference";

	for (i=1;i<=count;i++) { 

		var j = indexes[i-1];

		form.elements[field2].options.length += 1;

		form.elements[field2].options[i].value = arrStateCityVals[j];

		form.elements[field2].options[i].text = arrStateCity[j];

	}

	form.elements[field2].selectedIndex = 0;

}

/*----*/



function changeState(form,field1,field2,field3) {

	len = arrStateVals.length;

	count=0;

	val = form.elements[field1].options[form.elements[field1].selectedIndex].value;

	indexes = new Array(len);

	for (var i=0;i<len;i++) {

		if (arrStateVals[i].substring(0,3) == val) { 

			indexes[count] = i;

			count = count+1;	

		}

	}



	form.elements[field2].options.length=0;

	var sel = 0;

	for (i=0;i<count;i++) { 

		var j = indexes[i];

		form.elements[field2].options.length += 1;

		form.elements[field2].options[i].value = arrStateVals[j];

		form.elements[field2].options[i].text = arrState[j];

		if(parseInt(form.elements[field2].options[i].value) == 198103)

			sel = i;

	}

	form.elements[field2].selectedIndex = sel;

	changeCity(form,field2,field3);

}



function changeCity(form,field1,field2) {

	len = arrCityVals.length;

	count=0;

	val = form.elements[field1].options[form.elements[field1].selectedIndex].value;

	indexes = new Array(len);

	for (var i=0;i<len;i++) {

		if (arrCityVals[i].substring(0,6) == val) { 

			indexes[count] = i;

			count = count+1;	

		}

	}



	form.elements[field2].options.length=0;

	var sel = 0;

	for (i=0;i<count;i++) { 

		var j = indexes[i];

		form.elements[field2].options.length += 1;

		form.elements[field2].options[i].value = arrCityVals[j];

		form.elements[field2].options[i].text = arrCity[j];

		if(parseInt(form.elements[field2].options[i].value) == 198103100)

			sel = i;

	}

	form.elements[field2].selectedIndex = sel;

}



function checkPositiveInteger(field,name) {

		var fieldValue = field.value;

		//Check for non-integer or negative entries 

		if(isNaN(fieldValue) || parseInt(fieldValue) <= 0 || fieldValue.indexOf(".") != -1)	

		{

			field.focus();

			if(name != null)

				alert("Please provide a numeric value for "+name);

			else

				alert("Please provide a numeric value only.");

			field.select();

			field.focus();

			return false;

		}

		return true;

}



function checkFloat(field,name) {

		var fieldValue = field.value;

		//Check for negative entries 

		if(isNaN(fieldValue) || parseInt(fieldValue) <= 0)	

		{

			field.focus();

			if(name != null)

				alert("Please provide a numeric value for "+name);

			else

				alert("Please provide a numeric value only.");

			field.select();

			field.focus();

			return false;

		}

		if(fieldValue.indexOf(".") != -1)

		{

			var substring1 = fieldValue.substring(fieldValue.indexOf(".")+1,fieldValue.length);

			if(substring1.length > 2)

			{

			field.focus();

			if(name != null)

				alert("Please provide only two digits after decimal for "+name);

			else

				alert("Please provide only two digits after decimal.");

			field.select();

			field.focus();

			return false;

			}

				

		}



		return true;

}



function trim( instr ) {

    	var reFirst = /\S/;		// regular expression for first non-white char

    	var reLast = /\s+$/;	// regular expression for first white char after last non-white char

    	var firstChar = instr.search(reFirst);

    	var lastChar = instr.search(reLast);

    	

    	if( lastChar == -1 ) 

			lastChar = instr.length;    	

    	outstr = instr.substring( firstChar, lastChar );

    	return outstr;

}



function checkBlank(field,name)
{
	if(trim(field.value) == "")
	{	
		field.focus();
		if(name != null)
			alert(name+" field should not be blank.");
		else
			alert("This field should not be blank.");

		field.value = "";
		field.focus();
		return false;
	}
	return true;
}
//New function added to display correct error/ warning msgs.

/*function checkBlank(field,name)
{
	if(trim(field.value) == "")
	{	
		field.focus();
		if(name != null)
			alert(" Please enter the "+name+".");
		else
			alert("This field should not be blank.");

		field.value = "";
		field.focus();
		return false;
	}
	return true;
}*/

function checkBlankNew(field,msg)

{

	if(trim(field.value) == "")

	{	

		field.focus();

		if(msg != null)

			//alert(name+" can not be left blank.");

			alert(msg);

		else

			alert("This field is Mandatory");



		field.value = "";

		field.focus();

		return false;

	}

	return true;

}



function replaceQuotes(field)
{
	if(trim(field.value) != ""){
		if(!parseText(field.value,field))
		{
			alert(" Please Enter Valid Characters  " ) ;
			field.focus();
			return false;
		}
		var myRegExp = /'/g;
		var newString = field.value.replace(myRegExp,"`");
		field.value = newString;
	}
	return true;
}

function isEmail (emailIn){
	var isEmailOk = false;
	var filter = /^[a-zA-Z0-9][a-zA-Z0-9._-]*\@[a-zA-Z0-9-]+(\.[a-zA-Z][a-zA-Z-]+)+$/
	if(emailIn.search(filter) != -1)
		isEmailOk = true;
	if(emailIn.indexOf("..") != -1)
		isEmailOk = false;
	if(emailIn.indexOf(".@") != -1)
		isEmailOk = false;
	return isEmailOk;
} // Ends 

/********************************************************added by lokesh*****/ 

function MultipleEmail (emailIn){

	var isEmailOk = false;
	var filter = /^[a-zA-Z0-9][a-zA-Z0-9._-]*\@[a-zA-Z0-9-]+(\.[a-zA-Z][a-zA-Z-]+)+$/
	var LastCommaIndex = emailIn.lastIndexOf(',');	
	var separator = ",";
	lastemail = emailIn.substring(LastCommaIndex,emailIn.length);
	emailIn = emailIn.substring(0,emailIn.length);
	if (lastemail.length > 1)
	{
	}
	else
	{
		emailIn = emailIn.substring(0,LastCommaIndex);
	}
	var arrayOfStrings = emailIn.split(separator);
	var sizeArr  = arrayOfStrings.length;
	for (em=0;em<sizeArr ;em++ )
	{
		getemailIn = arrayOfStrings[em];
		if(getemailIn.search(filter) != -1)
		{
			isEmailOk = true;
		}
		else
		{
			isEmailOk = false;
			break;
		}
		if(getemailIn.indexOf("..") != -1)
		{
			isEmailOk = false;
		}
		if(getemailIn.indexOf(".@") != -1)
		{
			isEmailOk = false;
		}
		emailIn ="";
	}

	return isEmailOk;
} // Ends

/********************************************************/



function isSms (sms)

{

	var isSmsOk = false;

	var filter = /^[\+]?[0-9]{10,}\@[a-zA-Z0-9]+(\.[a-zA-Z][a-zA-Z]+)+$/



	if(sms.search(filter) != -1)

		isSmsOk = true;



	return isSmsOk;

}



function validateContactDetailForm(frm)

{	

	if(  frm.chkEmail.checked==false && frm.chkPostalAddress.checked==false  ) {

		alert("Please select atleast one option for contact details.");

		frm.chkEmail.focus();

		return false;

	}



	if(frm.chkEmail.checked && frm.rdoEmail[1].checked) {

		if(!isEmail(trim(frm.txtEmail2.value))){

			alert("Email format is not correct. \nThe entry should be of type 'a@b.c', where 'c' is a valid domain name or a 2-letter country code.");

			frm.txtEmail2.select();

			frm.txtEmail2.focus();

			return false;

		}

		if (!replaceQuotes(frm.txtEmail2))

		{

			return false;

		}

	}





	if(frm.chkPostalAddress.checked)

	{

		if (!replaceQuotes(frm.txtAddress1))

		{

			return false;

		}

		if (!replaceQuotes(frm.txtAddress2))

		{

			return false;

		}

		if (!replaceQuotes(frm.txtTelOff))

		{

			return false;

		}

		if (!replaceQuotes(frm.txtTelOther))

		{

			return false;

		}

	}









	if(frm.chkPostalAddress.checked)

	{

		if(trim(frm.txtPinCode.value) != "")

		if(!checkPositiveInteger(frm.txtPinCode))

		 return false;

	}



	if(frm.chkTerms != null && frm.chkTerms.checked == false)

	{

	var retVal = confirm("Yes! I agree with the Terms of Use.");

		if(retVal){

			frm.chkTerms.checked = true;

			return true;

		}

		else

			return false;

	}



	return true;

}



function checkDate(day,month,year)
{
	/*var dd = parseInt(day.options[day.selectedIndex].value);
	var mm = parseInt(month.options[month.selectedIndex].value);
	var yyyy = parseInt(year.options[year.selectedIndex].value);*/
	
	var dd = parseInt(day);
	var mm = parseInt(month);
	var yyyy = parseInt(year);
	
	if((mm == 4 || mm == 6 || mm == 9 || mm == 11) && (dd > 30))
	{
		alert("Please select a valid date");
		day.focus();
		return false;
	}
	if(mm == 2)
	{
		if(dd > 29)
		{
			alert("Please select a valid date");
			day.focus();
			return false;
		}
		else if (dd == 29) { 
				if(!( ((yyyy%4 == 0) && (yyyy%100 != 0)) || (yyyy%400 == 0) )) {
					alert("Please select a valid date");
					day.focus();
					return false;	
				}
		}
	}
	return true;
}


function isDateBeforeSystemDate(day,month,year,cday,cmonth,cyear)
{	
	var dd = parseInt(day.options[day.selectedIndex].value);
	var mm = parseInt(month.options[month.selectedIndex].value);
	var yyyy = parseInt(year.options[year.selectedIndex].value);

	if(cyear.value < yyyy)
	{
		alert("Date should be before today's date");			
		day.focus();
		return false;
	}

	if((cyear.value == yyyy) && (cmonth.value < mm))
	{
		alert("Date should be before today's date");			
		day.focus();
		return false;
	}

	if((cyear.value == yyyy) && (cmonth.value == mm)  && (cday.value <= dd))
	{
		alert("Date should be before today's date");			
		day.focus();
		return false;
	}

	return true;
}

function isDateBeforeToday(day,month,year)
{

	var dd = parseInt(day.options[day.selectedIndex].value);
	var mm = parseInt(month.options[month.selectedIndex].value);
	var yyyy = parseInt(year.options[year.selectedIndex].value);
	var today = new Date();
	if(today.getFullYear() < yyyy)
	{
		alert("Date should be before today's date");			
		day.focus();
		return false;
	}

	if((today.getFullYear() == yyyy) && ((today.getMonth() + 1) < mm))
	{
		alert("Date should be before today's date");			
		day.focus();
		return false;
	}

	if((today.getFullYear() == yyyy) && ((today.getMonth() + 1) == mm)  && (today.getDate() < dd))
	{
		alert("Date should be before today's date");			
		day.focus();
		return false;
	}
	return true;
}



function isDateBeforeToday1(day,month,year)
{
	var dd = parseInt(day.options[day.selectedIndex].value);
	var mm = parseInt(month.options[month.selectedIndex].value);
	var yyyy = parseInt(year.options[year.selectedIndex].value);
	var today = new Date();
	if(today.getFullYear() < yyyy)
	{
		alert("Death Date should be today's date or before today's date");			
		day.focus();
		return false;
	}
	if((today.getFullYear() == yyyy) && ((today.getMonth() + 1) < mm))
	{
		alert("Death Date should be today's date or before today's date");			
		day.focus();
		return false;
	}

	if((today.getFullYear() == yyyy) && ((today.getMonth() + 1) == mm)  && (today.getDate() < dd))
	{
		alert("Death Date should be today's date or before today's date");			
		day.focus();
		return false;
	}
	return true;
}

function isDateAfterToday(day,month,year)
{
	var dd = parseInt(day.options[day.selectedIndex].value);
	var mm = parseInt(month.options[month.selectedIndex].value);
	var yyyy = parseInt(year.options[year.selectedIndex].value);
	var today = new Date();
	if(today.getFullYear() > yyyy)
	{
		alert("Date should be after today's date");			
		day.focus();
		return false;
	}

	if((today.getFullYear() == yyyy) && ((today.getMonth() + 1) > mm))
	{
		alert("Date should be after today's date");			
		day.focus();
		return false;
	}

	if((today.getFullYear() == yyyy) && ((today.getMonth() + 1) == mm)  && (today.getDate() > dd))
	{
		alert("Date should be after today's date");			
		day.focus();
		return false;
	}
	return true;
}

function compareDates(day1,month1,year1,day2,month2,year2)
{
	var dd1 = parseInt(day1.options[day1.selectedIndex].value);
	var mm1 = parseInt(month1.options[month1.selectedIndex].value);
	var yyyy1 = parseInt(year1.options[year1.selectedIndex].value);
	var dd2 = parseInt(day2.options[day2.selectedIndex].value);
	var mm2 = parseInt(month2.options[month2.selectedIndex].value);
	var yyyy2 = parseInt(year2.options[year2.selectedIndex].value);

	if(yyyy1 > yyyy2)
	{
		alert("'To Date' should be after 'From Date'");			
		day1.focus();
		return false;
	}

	if((yyyy1 == yyyy2) && (mm1 > mm2))
	{
		alert("'To Date' should be after 'From Date'");			
		day1.focus();
		return false;
	}

	if((yyyy1 == yyyy2) && (mm1 == mm2)  && (dd1 > dd2))
	{
		alert("'To Date' should be after 'From Date'");			
		day1.focus();
		return false;
	}

	return true;

}


function compareDates1(cboDeathDay,cboDeathMonth,cboDeathYear,cboBirthDay,cboBirthMonth,cboBirthYear)
{
	var dd1 = parseInt(cboDeathDay.options[cboDeathDay.selectedIndex].value);
	var mm1 = parseInt(cboDeathMonth.options[cboDeathMonth.selectedIndex].value);
	var yyyy1 = parseInt(cboDeathYear.options[cboDeathYear.selectedIndex].value);
	var dd2 = parseInt(cboBirthDay.options[cboBirthDay.selectedIndex].value);
	var mm2 = parseInt(cboBirthMonth.options[cboBirthMonth.selectedIndex].value);
	var yyyy2 = parseInt(cboBirthYear.options[cboBirthYear.selectedIndex].value);

	if(yyyy1 < yyyy2)
	{
		alert("Death Date should be greater than Birth Date");			
		cboDeathDay.focus();
		return false;
	}

	if((yyyy1 == yyyy2) && (mm1 < mm2))
	{
		alert("Death Date should be greater than Birth Date");			
		cboDeathDay.focus();
		return false;
	} 

	if((yyyy1 == yyyy2) && (mm1 == mm2)  && (dd1 < dd2))
	{
		alert("Death Date should be greater than Birth Date");			
		cboDeathDay.focus();
		return false;
	}

	return true;
}



function mandatoryValidate(field1,name)
{
	val = field1.options[field1.selectedIndex].value;
	if(parseInt(val) == -1){
		field1.focus();
		if(name != null)
			alert("Please select some value for "+name);
		else
			alert("Please select some value for this field");
		field1.focus();
		return false;
	}
		return true;
}

function mandatoryValidateList(field1,name)
{
	val =field1.selectedIndex;

	if(parseInt(val) == -1){
		field1.focus();
		if(name != null)
			alert("Please select some value for "+name);
		else
			alert("Please select some value for this field");
		field1.focus();
		return false;
	}
	return true;
}





function mandatoryValidateNew(field1,msg)

	{

	val = field1.options[field1.selectedIndex].value;

	if(parseInt(val) == -1){

		field1.focus();

		if(msg != null)

			alert(msg);

		else

			alert("Please select some value for this field");

		field1.focus();

		return false;

	}

		return true;

	}

	

/*

function parseText(str,field)

{

	for( i = 0 ; i < str.length ; i++ )

	{

		var ascVal = str.charCodeAt(i) ;

		//if( (ascVal < 32 || ascVal > 126) && ascVal != 13 && ascVal != 10)

		//{

			if(str.charCodeAt(i) == 183)

			{

				str = replaceSplchar(i,183,str);

				field.value = str;

			}

			if(str.charCodeAt(i) == 8226)

			{

				str = replaceSplchar(i,8226,str);

				field.value = str;



			}

			if(str.charCodeAt(i) ==8217)

			{

				str =replaceSplchar(i,8217,str);

				field.value = str;

			}

			if(str.charCodeAt(i) ==8216)

			{

				str =replaceSplchar(i,8216,str);

				field.value = str;

			}

			if(str.charCodeAt(i) ==8211)

			{

				str =replaceSplchar(i,8211,str);

				field.value = str;

			}

			if(str.charCodeAt(i) ==8220)

                        {

                                str =replaceSplchar(i,8220,str);

                                field.value = str;

                        }

			if(str.charCodeAt(i) ==8221)

                        {

                                str =replaceSplchar(i,8221,str);

                                field.value = str;

                        }

			if(str.charCodeAt(i) ==9)

                        {

                                str =replaceSplchar(i,9,str);

                                field.value = str;

                        }

			if(str.charCodeAt(i) ==8230)

                        {

                                str =replaceSplchar(i,8230,str);

                                field.value = str;

                        }

			if(str.charCodeAt(i) != 183 && str.charCodeAt(i) != 8226 && str.charCodeAt(i) != 8217 && str.charCodeAt(i) != 8216 && str.charCodeAt(i) != 8211 && str.charCodeAt(i) != 8220 && str.charCodeAt(i) != 8221 && (str.charCodeAt(i) <32 || str.charCodeAt(i) >126) && ascVal != 13 && ascVal != 10 ) 

			{

                                str =replaceSplchar(i,str.charCodeAt(i),str);

                                field.value = str;



			}

			//return false ;

		//}

	}

	return true ;

}



*/

// for pasing text

function parseText(text,field) {
	var finaltext = "";
	for(var i = 0; i < text.length ; i++)
	{
		var charCode = text.charCodeAt(i);
		if(charCode == 39 ) {
			finaltext += "`";
		}
		else if(charCode == 9 ) {
			finaltext += " ";
		}
		else if(charCode == 10) {

				finaltext += text.charAt(i);
		}
		else if( !(charCode >= 33 && charCode <= 126 ) ) {

			finaltext += " ";
		}
		else {
			finaltext +=  text.charAt(i);
		}
	}
	field.value = finaltext;
	return true;
}



/*

function parseText(text,field)

{

	

	var finaltext = "";	

	for(var i = 0; i < text.length ; i++)

	{

		var charCode = text.charCodeAt(i);

		

		if( !( (charCode >= 64 && charCode <= 90) || (charCode >= 48 && charCode <= 58) || (charCode >= 97 && charCode <= 122)  || charCode == 95 || charCode == 44 || charCode == 45 || charCode == 46 || charCode == 9 | charCode == 10)  )

		{

			finaltext += " ";

		}

		else

		{

			finaltext +=  text.charAt(i);

		}

	}

	field.value = finaltext;

	return true;

}

*/



//



function replaceSplchar(i,code,str)

{

		var temp=""+str ;

		var replaceWith = "";

		if(code == 183)

			replaceWith ="-";

		else if(code == 8226)

			replaceWith ="-";

		else if(code == 8217)

			replaceWith ="`";

		else if(code == 8216)

			replaceWith ="`";

		else if(code == 8220)

			replaceWith ="\"";

		else if(code == 8221)

			replaceWith ="\"";

		else if(code == 8211)

			replaceWith ="-";

		else if(code == 9)

			replaceWith ="  ";

		else if(code == 8230)

			replaceWith =".";

		else

			replaceWith =" ";

	

		temp = str.substring(0,i) +replaceWith + str.substring(i+1,str.length);		

	return temp;

}





/*function parseText(str)

{

	var filter = /^[a-zA-Z0-9_\\\/~`!@#$%^&*()-+-={}\[\]|\"\':;<>.,? ]*$/

	if(str.search(filter) == -1)

	{

		return false;

	}

	else 

	{

		return true;

	}

}*/









/*   Changes made By Subodh... to enhance the functionality for Course starts here*/



function loadDegreeSpecDD(form, field1, field2){

	dlen = form.elements[field2].options.length;

	arrDegreeSpec = new Array(len);

	arrDegreeSpecVals = new Array(len);





	for (var i=0;i<dlen;i++) {

		arrDegreeSpecVals[i] = form.elements[field2].options[i].value;

		arrDegreeSpec[i] = form.elements[field2].options[i].text;

	}

	

	dcount=0;

	dval = form.elements[field1].options[form.elements[field1].selectedIndex].value;



	dindexes = new Array(dlen);



	for (var i=0;i<dlen;i++) {

		if (form.elements[field2].options[i].value.substring(0,3) == dval) { 

			dindexes[dcount] = i;

			dcount = dcount+1;	

		}

	}

	form.elements[field2].options.length=0;

	var sel = -1;

	for (var i=0;i<dcount;i++) { 

		var j = dindexes[i];

		form.elements[field2].options.length += 1;

		form.elements[field2].options[i].value = arrDegreeSpecVals[j];

		form.elements[field2].options[i].text = arrDegreeSpec[j];			

	}

	

	if(parseInt(dval) == -1){

		form.elements[field2].options.length=0;

		form.elements[field2].options.length += 1;

		form.elements[field2].options[0].value = -1;

		form.elements[field2].options[0].text = "No Preference";

		form.elements[field2].selectedIndex = 0; 

		return;

	}

}





function changeDegreeSpec(form,field1,field2) {

	dlen = arrDegreeSpecVals.length;

	dcount=0;

	dval = form.elements[field1].options[form.elements[field1].selectedIndex].value;

	if(parseInt(dval) == -1){

		form.elements[field2].options.length=0;

		form.elements[field2].options.length += 1;

		form.elements[field2].options[0].value = -1;

		form.elements[field2].options[0].text = "No Preference";

		form.elements[field2].selectedIndex = 0; 

		return;

	}



	dindexes = new Array(dlen);

	for (var i=0;i<dlen;i++) {

		if (arrDegreeSpecVals[i].substring(0,3) == dval) { 

			dindexes[dcount] = i;

			dcount = dcount+1;	

		}

	}



	form.elements[field2].options.length=0;

	form.elements[field2].options.length += 1;

	form.elements[field2].options[0].value = "-1";

	form.elements[field2].options[0].text = "Select";



	var sel = 0;

	for (i=0;i<dcount;i++) { 

		var j = dindexes[i];

		form.elements[field2].options.length += 1;

		form.elements[field2].options[i+1].value = arrDegreeSpecVals[j];

		form.elements[field2].options[i+1].text = arrDegreeSpec[j];		

	}

}

	



function stripCharsInBag(s, bag)

{   var i;

    var returnString = "";

    // Search through string's characters one by one.

    // If character is not in bag, append to returnString.

    for (i = 0; i < s.length; i++)

    {   

        // Check that current character isn't whitespace.

        var c = s.charAt(i);

        if (bag.indexOf(c) == -1) returnString += c;

    }

    return returnString;

}



function checkPhone(strPhone){

s=stripCharsInBag(strPhone,validWorldPhoneChars);

if (s.length == 0)

	return true;

else 

	return false;

}

function checkNumbers(strPhone){

s=stripCharsInBag(strPhone,validNumbers);

if (s.length == 0)

	return true;

else 

	return false;

}

/* Changes to check for valid phone number on 05 jan 2005 ends here*/

function openPopup(url) {
 var mywindow;
 mywindow=window.open(url, "popup_id", "scrollbars,resizable,width=300,height=200");
 mywindow.moveTo(300,300);

}


function readchoice(MemberStatus)
{
	alert('hello');
	var Type = document.frmmanage.RegisterType.value;
	var searchvalue = document.frmmanage.searchlike.value;
	alert(searchvalue);
	var choicevalue = document.frmmanage.choice.value;
	alert(choicevalue);

	if (MemberStatus == "")
	{
		MemberStatus = "Active";
	}

	if( (searchvalue == "") && (choicevalue == ""))
	{	//alert('here');
		alert("Select atleast one criteria");
		document.frmmanage.searchlike.focus();
		return false;
	}
	if( (choicevalue == ""))
	{
		alert("Select Choice Criteria");
		document.frmmanage.choice.focus();
		return false;
	}
	//alert('*****');
	var goto=document.frmmanage.action="user-management.php?searchlike="+searchvalue+"&choice="+choicevalue;
	//document.updateaccessFrm.choice.value="";
	//alert('hello');
	//alert(goto);
	document.frmmanage.method = "post";
	document.frmmanage.submit();
	return true;
}

function isValidPhone( sText )
	{
		
		   var ValidChars = '-+() 0123456789';
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



function checkprice(sText)
{
    var ValidChars = "0123456789.";
    var IsNumber=true;
    var Char;
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
    }  
    return IsNumber;
   }	
}

function isInteger(s){
	var i;
    for (i = 0; i < s.length; i++){   
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // All characters are numbers.
    return true;
}
//valid phone number

function countWord(sText)
{
    var ValidChars = " ";
    var Isword=0;
    var Char =" ";
	if(sText.length==0)	
	{
	  return false;
	}
	else
	{
    for (i = 0; i < sText.length; i++) 
    { 
        Char = sText.charAt(i); 
        if (ValidChars == Char) 
        {
			Isword++;
        }
    }  
    return Isword;
   }	
}

function showHideDiv(displayFlag)
{
	if(document.getElementById(displayFlag).style.display=='none')
	{
		document.getElementById(displayFlag).style.display='block';
//		document.getElementById("imgplus").src='images/icon_minus.gif';
	}
	else
	{
		document.getElementById(displayFlag).style.display='none';
//		document.getElementById("imgplus").src='images/icon_plus.gif';
	}
}

function confirmAction(message, navigateTo)
{
	var answer=confirm(message);
	if(answer)
		document.location=navigateTo;
}
function checkfield_alphanumeric(ctrl,str)
{
	if(!checkBlank(ctrl,str))
	{
		return false;
	}
	if(!prespaces(ctrl,str))
	{
		return false;
	}
	if(!postspaces(ctrl,str))
	{
		return false;
	}
	if(!checkNamewithNumber(ctrl.value))
	{
		alert("Use Alphanumeric");
		ctrl.value='';
		ctrl.focus();
		return false;
	}
	
	return true;
}
