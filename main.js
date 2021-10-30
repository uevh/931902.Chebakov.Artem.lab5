function hide_(e)
{
    document.getElementById(e).style.display='none';
    for (let i = 1; i < 4; i++)
        document.getElementById(i).style.display='none';
}

function ggwp(e)
{
    document.getElementById(e).style.display='block';
    document.getElementById('fon').style.display='block';
}