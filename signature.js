var signature = null;
var pen = null;
var data = "";
var pressed = false;

function add_events()
{
    signature = document.getElementById("signature");
    pen = document.getElementById("pen");
    clear_button = document.getElementById("clear");

    signature.onmousemove = function(event){ trace(event); }
    signature.onmouseleave = function() { pressed = false; }
    clear_button.onclick= function(){ clear(); }
}

function trace(event)
{
    if (event.buttons != 1) { pressed = false; return; }

    const rect = signature.getBoundingClientRect();

    var x = event.x - rect.x;
    var y = event.y - rect.y;

    data += (pressed ? "L" : "M") + x + "," + y;

    pen.setAttribute("d", data);

    pressed = true;
}

function clear()
{
    data = "";
    pen.setAttribute("d", data);
}