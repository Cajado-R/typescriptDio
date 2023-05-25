type heroi = {
    nome: string;
    vulgo: string;
};

function printarHeroi(pessoa: heroi){
    console.log(pessoa);

}

printarHeroi({
    nome:"Peter Parker",
    vulgo: "Homem-Aranha",
});