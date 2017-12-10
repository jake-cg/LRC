let equationList = [{
    first: 9,
    second: 8,
    product: 72
}, {
    first: 6,
    second: 4,
    product: 24
},{
    second: 2,
    product: 6
},{
    first: 7,
    product: 35
},{
    first: 12,
    second: 2
}
]

writeList();

function writeList() {
    let container = document.querySelector(".container");
    //shuffle(equationList);
    for(let i = 0; i < equationList.length; i++){
        let equation = document.createElement("div");
        let form = document.createElement("form");
        let row = document.createElement("div");
        let verification = document.createElement("h5");
        form.method = "post";
        for(let j = 0; j < 3; j++){
            let e;
            if(j === 0){
                e = equationList[i].first
            } else if(j === 1){
                e = equationList[i].second
            } else if (j === 2){
                e = equationList[i].product;                   
            }

            let elem = document.createElement("div");            
            if(e){
                elem.textContent = e;
            } else {
                let input = document.createElement("input");
                input.classList.add("form-control")
                elem.appendChild(input);

                form.addEventListener("submit", function(evt) {
                    evt.preventDefault();
                    let a = equationList[i].first;
                    let b = equationList[i].second;
                    let c = equationList[i].product;
                    let z = elem.firstChild.value;
                    if(a && b){
                        verification.textContent = a * b == z ? "correct" : "incorrect";
                    } else if (a * c){
                        verification.textContent = a * z == c ? "correct" : "incorrect";
                    } else if( b * c) {
                        verification.textContent = z * b == c ? "correct" : "incorrect";
                    }
                })
            }

            row.classList.add("form-group", "row", "py-2");
            elem.classList.add("col-1");                            
            row.appendChild(elem);
            form.appendChild(row);

        }
        verification.textContent = equationList[i].first * equationList[i].second === equationList[i].product 
        ? "correct" : "incorrect";

        verification.classList.add("col-2");        
        equation.appendChild(verification);  
        form.classList.add("col-10");
        equation.appendChild(form);    
        equation.classList.add("row");
        container.appendChild(equation);
    }
}

function shuffle(array) {
    var m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}