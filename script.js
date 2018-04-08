function create_sketch() {
    var output = document.querySelector('#container');
    output.innerHTML = '';
    var input = document.querySelector('.grid_size');
    var i = input.value**2;
    while(i > 0) {
        var para = document.createElement('p');
        para.setAttribute("class", "square");
        para.setAttribute("id", "square_number_"+i);
        para.setAttribute("onmouseover", "change_color()");
        output.appendChild(para);
        i--;
    };
    var container_height = document.getElementById("container").offsetHeight
    console.log(container_height);
    document.getElementById("container").style.width = container_height;
    var size_square = container_height / input.value;
    //var margin_square = 0.01 * container_height / input.value;
    console.log(size_square);
    //console.log(margin_square);
    var elements = document.getElementsByClassName("square");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.width=(size_square+"px");
        elements[i].style.height=(size_square+"px");
        //elements[i].style.margin=((margin_square/2)+"px "+margin_square+"px");
    };
};

function change_color() {
    var square_number_hovered = window.event.fromElement.id;
    console.log(square_number_hovered);
    var opacity = window.getComputedStyle(document.getElementById(square_number_hovered)).getPropertyValue("opacity")
    console.log(opacity)
    opacity = Number(opacity)
    opacity += 0.1
    console.log(opacity)
    document.getElementById(square_number_hovered).style.opacity = opacity
}
