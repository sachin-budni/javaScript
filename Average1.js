var records=new Array();
function validations()
{
    if(valid())
    {
        pops();
    }
}
function valid()
{
    var record=new Array();
    var doc = document.forms[0];
    var name=doc.name;
    var science=doc.science;
    var maths=doc.maths;
    var english=doc.english;
    if(name.value.length==0)
    {
        alert("Please Enter Name");
        name.focus();
        return false;
    }
    if(science.value.length==0)
    {
        alert("Please Enter Name");
        name.focus();
        return false;
    }
    if(maths.value.length==0)
    {
        alert("Please Enter Name");
        name.focus();
        return false;
    }
    if(english.value.length==0)
    {
        alert("Please Enter Name");
        name.focus();
        return false;
    }
    record[0]=name.value;
    record[1]=science.value;
    record[2]=maths.value;
    record[3]=english.value;
    records[records.length]=record;
    name.focus();
    doc.reset();
    return true;
}
function pops()
{
    var record=new Array();
    var table="<table border='1' id='tab'>";
    if(records.length==0)
    {
        table+="<h1>No Records is there</h1>";
    }
    else
    {
        table+="<tr>";
        table+="<th>SNO</th>";
        table+="<th>Name</th>";
        table+="<th>Science</th>";
        table+="<th>Maths</th>";
        table+="<th>English</th>";
        table+="</tr>";
    }   
    for(var i=0; i<records.length; i++)
    {
        record=records[i];
        table+="<tr>";
        table+="<td><a href='#' onclick='again("+i+")'>"+(1+i)+"</a></td>"
        table+="<td>"+record[0]+"</td>";
        table+="<td>"+record[1]+"</td>";
        table+="<td>"+record[2]+"</td>";
        table+="<td>"+record[3]+"</td>";
        table+="</tr>";
    }
    table+="</table>";
    document.getElementById('tables').innerHTML=table;
    document.getElementById('subs').innerHTML="<input type='button' value='submit' onclick='avgs()'/>";
}
function again(index)
{
    var record=new Array();
   var doc=document.forms[0];
    var name=doc.name;
    var science=doc.science;
    var maths=doc.maths;
    var english=doc.english;
    
    record=records[index];
    
    name.value=record[0];
    science.value=record[1];
    maths.value=record[2];
    english.value=record[3];
    records.splice(index,1);
    pops();
}