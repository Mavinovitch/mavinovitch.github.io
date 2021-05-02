function toggler()
{
    var div = document.getElementsByClassName("titel");
    var i;

    for (i = 0; i < div.length; i++)
    {
        if (div[i].style.display !== "none") {
            div[i].style.display = "none";
        }
        else {
            div[i].style.display = "block";
        }
    }

    var containers = document.getElementsByClassName("photocontainer");

    var u;
    for (u = 0; u < images.length; u++)
    {
        if (containers[u].style.display !== "none") {
            containers[u].style.display = "none";
        }
        else {
            containers[u].style.display = "grid";
        }
    }
}