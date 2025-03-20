
//Seleccionar de manera aleatoria entre: Piedra, Papel o Tijeras.


//Math.floor --> Sirve para que nos de un nº entero entre la franja que le demos.
//Math.random --> Sirve para que nos de un nº random dentro de la franja deseada y puede contener nº flotantes.

//Paso 2. Generar nº Random.

function getComputerChoice(){
    let numero = Math.floor(Math.random() * 3); //0, 1 o 2
    // console.log(numero);
    // return numero;

    if (numero === 0){
        console.log("El Ordenador ha elegido: piedra");
        return "piedra";
    } else if (numero === 1){
        console.log("El Ordenador ha elegido: papel");
        return "papel";
    } else{
        console.log("El Ordenador ha elegido: tijera");
        return "tijera";
    }

}
//console.log(getComputerChoice());


//Paso 3. Ahora viene la elección del usuario en escoger una de las 3 posibiliades.

function getHumanChoice(){
    let entrada = prompt("¿Piedra, Papel o Tijera? Tienes que elegir entre uno de ellos. Buena suerte!");
    
    let entrada2 = entrada.trim().toLowerCase(); 

    if (entrada2 === null){
        console.log("Ha habido un error inesperado");
        return null;  // Retorna null si el usuario cancela
    } else if (entrada2 === ""){
        console.log("Alma de cántaro... me lo has dejado vacío, prueba otra vez");
        return getHumanChoice();  // Pide de nuevo si la entrada está vacía
    } else if (entrada2 === "piedra" || entrada2 === "papel" || entrada2 === "tijera"){
        console.log("Has elegido: " + entrada2);
        return entrada2;  // Retorna la elección válida
    } else{
        console.log("No lo has introducido correctamente. Intenta de nuevo.");
        return getHumanChoice();  // Pide de nuevo si la entrada no es válida
    }
}
// console.log(getHumanChoice());

//Paso 4. Crear 2 variables para almacenar los resultados del Humaho y el PC.

let humanScorey = 0;
let computerScore = 0;

//Paso 5. Escribir la lógica para que se juegue 1 ronda.

function playRound(humanChoicey, computerChoice){

    // Empate
    if (humanChoicey === computerChoice) {
        console.log("Empate");
    }
    // Caso en que el humano elige "piedra"
    else if (humanChoicey === "piedra") {
        if (computerChoice === "papel") {
            console.log("Gana Papel, 1 punto para el PC");
            computerScore += 1;
        } else if (computerChoice === "tijera") {
            console.log("Gana Piedra, 1 punto para el Usuario");
            humanScorey += 1;
        }
    }
    // Caso en que el humano elige "papel"
    else if (humanChoicey === "papel") {
        if (computerChoice === "piedra") {
            console.log("Gana Papel, 1 punto para el Usuario");
            humanScorey += 1;
        } else if (computerChoice === "tijera") {
            console.log("Gana Tijera, 1 punto para el PC");
            computerScore += 1;
        }
    }
    // Caso en que el humano elige "tijera"
    else if (humanChoicey === "tijera") {
        if (computerChoice === "piedra") {
            console.log("Gana Piedra, 1 punto para el PC");
            computerScore += 1;
        } else if (computerChoice === "papel") {
            console.log("Gana Tijera, 1 punto para el Usuario");
            humanScorey += 1;
        }
    }
    
}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);
// console.log("Puntos Usuario: ", humanScorey);
// console.log("Puntos PC: ", computerScore);


//Paso 6. Escribir la lógica para que se juegue 5 ronda.

function playGame(){

        for(i=1; i<=5; i++){
            console.log(`\n--- Ronda ${i} ---`);
            //Las elecciones
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();

            //Juega la Ronda
            playRound(humanSelection, computerSelection);

            console.log(`Puntajes actuales: Usuario ${humanScorey} - PC ${computerScore}`);
            // console.log("Puntos Usuario: ", humanScorey);
            // console.log("Puntos PC: ", computerScore);
        }

        // Al final de las 5 rondas, mostrar el ganador
    if (humanScorey > computerScore) {
        console.log("\n¡Felicidades! Has ganado el juego.");
    } else if (humanScorey < computerScore) {
        console.log("\n¡El PC ha ganado el juego!");
    } else {
        console.log("\nEl juego terminó en empate.");
    }
}

//Iniciar el juego
playGame();