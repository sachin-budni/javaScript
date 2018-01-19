var records=new Array();
function add()
{
	
	if(validation())
	{
		allRecords();
	}
}
function validation()
{
    var all=document.form1;
    var firstname=document.form1.firstname;
    var lastname=document.form1.lastname;
    var age=document.form1.age;
    var address=document.form1.address;
    var city=document.form1.city;
    var gender=document.form1.gender;

    if(firstname.value.length==0)
    {
        alert("Please Enter FirstName");
        firstname.focus();
        return false;
    }
    if(lastname.value.length==0)
    {
        alert("Please Enter LastName");
        lastname.focus();
        return false;
    }
    if(age.value.length==0)
    {
        alert("Please Enter Age");
        lastname.focus();
        return false;
    }
    if(address.value.length==0)
    {
        alert("Please Enter Address");
        address.focus();
        return false;
    }
    if(city.value == 0)
    {
        alert("Please Select CityName");
        city.focus();
        return false;
    }
    var flag=true;
    for(var i=0; i<gender.length; i++)
    {

        if(gender[i].checked)
        {
            flag=false;
            break;
        }
    }
    if(flag)
    {
        alert("Please Select Gender");
        gender[0].focus();
        return false;
    }
    var record=new Array();
        record[0]=firstname.value;
        record[1]=lastname.value;
        record[2]=age.value;
        record[3]=address.value;
        record[4]=city.value;
        record[5]=gender.value;
        records[records.length]=record;
    //    console.log(records);
        all.reset();
    return true;
}

function allRecords()
{
    var record;
    var table ="<table border='1'>";
    if(records.length==0)
    {
        table+="<h1>No records</h1>";
    }
    else
    {
        table+="<tr>";
        table+="<th>S/NO</th>";
        table+="<th>FirstName</th>";
        table+="<th>LastName</th>";
        table+="<th>Age</th>";
        table+="<th>Address</th>";
        table+="<th>City</th>";
        table+="<th>Gender</th>";
        table+="</tr>";
    }
    for(var i=0; i<records.length; i++)
    {
        record=records[i];
        table+="<tr>";
        table+="<td><a href='#' onclick='re("+i+")'>"+(i+1)+"</a></td>";
        table+="<td>"+record[0]+"</td>";
        table+="<td>"+record[1]+"</td>";
        table+="<td>"+record[2]+"</td>";
        table+="<td>"+record[3]+"</td>";
        table+="<td>"+record[4]+"</td>";
        table+="<td>"+record[5]+"</td>";
        table+="</tr>";
    }
    table+="</table>";
    document.getElementById('s').innerHTML=table; 
}
function re(index)
{
    var record=records[index];
    var all = document.form1;
    var first=all.firstname;
    var last=all.lastname;
    var age=all.age;
    var address=all.address;
    var city=all.city;
    var gender=all.gender;
    
    first.value=record[0];
    last.value=record[1];
    age.value=record[2];
    address.value=record[3];
    city.value=record[4];
    gender.value=record[5];
    records.splice(index,1);
    allRecords();
}
