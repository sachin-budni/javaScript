function avgs()
{
    var tabs,tr,td,science=0,maths=0,english=0;
    tabs=document.getElementById('tab');
    tr=tabs.getElementsByTagName('tr');
    for(var i=1; i<tr.length;i++)
    {
        td=tr[i].getElementsByTagName('td')[2].innerHTML
        science+=parseInt(td);
    }
    for(var i=1; i<tr.length;i++)
    {
        td=tr[i].getElementsByTagName('td')[3].innerHTML
        maths+=parseInt(td);
    }
    for(var i=1; i<tr.length;i++)
    {
        td=tr[i].getElementsByTagName('td')[4].innerHTML
        english+=parseInt(td);
    }
    document.getElementById('tabel').innerHTML="Average :<br/>Science =>"+science/(tr.length-1)+"<br/> Maths  =>"+maths/(tr.length-1)+"<br/> English  =>"+english/(tr.length-1);
    sha();
}
function sha()
{
    var tabs,tr,td,science,maths,english,sic=0,mat=0,eng=0,max=0;
    tabs=document.getElementById('tab');
    tr=tabs.getElementsByTagName('tr');
    for(var i=1; i<tr.length;i++)
    {
        td=tr[i].getElementsByTagName('td')[2].innerHTML;
        max=parseInt(td);
        if(sic<max)
        {
            sic=max;
            science=tr[i].getElementsByTagName('td')[1].innerHTML;
        }
    }
    for(var i=1; i<tr.length;i++)
    {
        td=tr[i].getElementsByTagName('td')[3].innerHTML;
        max=parseInt(td);
        if(mat<max)
        {
            mat=max;
            maths=tr[i].getElementsByTagName('td')[1].innerHTML;
        }
    }
    for(var i=1; i<tr.length;i++)
    {
        td=tr[i].getElementsByTagName('td')[4].innerHTML;
        max=parseInt(td);
        if(eng<max)
        {
            eng=max;
            english=tr[i].getElementsByTagName('td')[1].innerHTML;
        }
    }
    document.getElementById('high').innerHTML="<hr/><br/>Highest in Science = "+science+"<br/>Highest in Maths = "+maths+"<br/>Highest in English = "+english;
}