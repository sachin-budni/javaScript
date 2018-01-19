function go()
{
    var from=document.first.from;
    var to=document.first.to;
    if(from.value==0)
        {
            alert("Please Select From Location");
            from.focus;
            return false;
        }
    if(to.value==0)
        {
            alert("Please Select To Location");
            to.focus;
            return false;
        }
    if(from.value==to.value)
        {
            alert("Please Change To Location");
            to.focus;
            to.value=0;
            return false;
        }
    table="<table>";
    table+="<tr><h1>Seat Booking</h1></tr>";
    table+="<tr>";
    table+="<th>Company</th>";
    table+="<th>From</th>";
    table+="<th>To</th>";
    table+="<th>Timing Deparch</th>";
    table+="<th>Timing Arrived</th>";
    table+="";
    table+="</tr>";
    table+="<tr>";
    table+="<td>SRS Travels</td>";
    table+="<td>"+from.value+"</td>";
    table+="<td>"+to.value+"</td>";
    table+="<td> 6:45PM</td>";
    table+="<td> 7:30AM</td>";
    table+="<td><input type='button' value='Book' onclick='show1()'/></td></tr>";
    table+="<tr id ='fir'></tr>"
    table+="<tr>";
    table+="<td>VRL Travels</td>";
    table+="<td>"+from.value+"</td>";
    table+="<td>"+to.value+"</td>";
    table+="<td> 7:45PM</td>";
    table+="<td> 8:15AM</td>";
    table+="<td><input type='button' value='Book' onclick='show1()'/></td></tr>";
    table+="<tr>";
    table+="<td>Royel Travels</td>";
    table+="<td>"+from.value+"</td>";
    table+="<td>"+to.value+"</td>";
    table+="<td> 7:45PM</td>";
    table+="<td> 7:40AM</td>";
    table+="<td><input type='button' value='Book' onclick='show1()'/></td></tr>";
    document.getElementById('s1').innerHTML=table;
}
function togoo()
{
    var from=document.first.from;
    var to=document.first.to;
    if(from.value==0)
        {
            alert("Please Select from Location");
            from.focus;
            to.value=0;
            return false;
        }
}
function show1()
{
    alert("sklkd");
}