
var x=0;
var array=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];


function fun(val) {

    if (x%2==0)
    {
        document.getElementById("demo"+val).innerHTML="X";
        array[val]=1;
    }
   
    else
   {
    document.getElementById("demo"+val).innerHTML="O";
    array[val]=0;
   }
    x++;
     
   
   
}
function check_win()
{
   
        
     if (array[4]==array[5]&&array[5]==array[6]&&array[i]!=-1)
     {
        alarm(array[1])
        location.replace("congo.html");
     }
   

}
function alarm(val)
{
   if (val==1)
   alert("X win");
   else
   alert("O win");
}
