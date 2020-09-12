let x = Number(prompt("Enter the number > 10"));


function prov()
{
    if(x<=10 || isNaN(x))
    {
        x = Number(prompt("Enter the number > 10"));
        prov();
    }else
    {
        var sum=0;
        for (let i = 1; i <= x; i++) 
        {
            sum= sum + i;
        }
        document.write(sum);
    }
}
prov();