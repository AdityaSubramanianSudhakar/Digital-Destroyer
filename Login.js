function submit()
{
    var val=document.querySelector("#Password").value
    var val1=document.querySelector("#Password1").value
    if(val===val1)
    {
        console.log("True")
    }
    else
    {
        console.log("False")
    }
}