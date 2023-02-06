function verdadera(){
    return true;
};

setTimeout(function(){
    console.log("Hola soy una promesa")
},5000);

function* indexGen(){
    let id = 2;
    while (true) {
        id +=2;
        yield id;
    }
}









