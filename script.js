function create_sketch() {
    var output = document.querySelector('.container');
    output.innerHTML = '';
    var input = document.querySelector('.grid_size');
    var i = input.value;
    while(i > 0) {
            var para = document.createElement('p');
        output.appendChild(para);
        console.log(i)
        i--;
    };
};

var size = {
  width: window.innerWidth || document.body.clientWidth,
  height: window.innerHeight || document.body.clientHeight
}

console.log(size)