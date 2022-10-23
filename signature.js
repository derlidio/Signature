var signature = null;
var pen = null;
var data = "";
var pressed = false;

function add_events()
{
    signature = document.getElementById("signature");
    pen = document.getElementById("pen");
    clear_button = document.getElementById("clear");

    signature.onmousemove = function(event){ trace(event, true); }
    signature.onmouseleave = function() { pressed = false; }

    signature.ontouchmove = function(event){ trace(event, false); }
    signature.ontouchend = function() { pressed = false; }

    clear_button.onclick= function(){ clear(); }
}

function trace(event, mouse)
{
    var px;
    var py;

    if (mouse)
    {
        if (event.buttons != 1) 
        { 
            pressed = false; return; 
        }
        px = event.pageX;
        py = event.pageY;
    }
    else
    {
        px = event.touches[0].clientX;
        py = event.touches[0].clientY;
    }

    const rect = signature.getBoundingClientRect();

    var x = px - rect.x;
    var y = py - rect.y;

    data += (pressed ? "L" : "M") + x + "," + y;

    pen.setAttribute("d", data);

    event.preventDefault();

    pressed = true;
}

function clear()
{
    data = "";
    pen.setAttribute("d", data);
}