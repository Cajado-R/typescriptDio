type hero = {
    name: string;
    nick: string;
};

function printarObjetos(pessoa: hero){
    console.log(pessoa);

}

printarObjetos({
        name: "Peter Parker",
        nick: "SpiderMan"
    });