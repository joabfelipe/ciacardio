var professor = {
    id: 5,
    nome: "",
    turno: "manha",
    tipoAcesso: "restrito",
    senha: ""  
};



import entradaDados from 'readline-sync';

/*let userProf = entradaDados.question('Digite seu usuário de login: ');
let senhaProf = entradaDados.question('Digite sua senha ');

if (userProf == professor.nome && senhaProf == professor.senha){
    console.log('Acesso autorizado, bem-vindo!'+ professor.nome +'\n');
}else{
    console.log('Acesso não autorizado. Tente novamente');
}*/

let nomeAluno = entradaDados.question('Digite o nome do aluno: ');
console.log('Treinos prontos: \n 1 - Sessão de velocidade 3-2-1\n 2 - Inclinações para fortalecer\n 3 - Clássico Intervalado\n 4 - Ladeiras e Morros para iniciantes\n 5 - 5km\n 6 - 5km intervalado');


var treinos = entradaDados.question('Digite o numero do treino escolhido: ') ;

    switch(treinos)
    {
        case '1':
        console.log('Aluno: '+nomeAluno);
        console.log("\n\
         Para fazer este exercício, você precisa trabalhar seu ritmo rápido e de recuperação.\n\n\
         Primeiros 5 minutos: Aquecimento \n\
         De 5:01 até 8:00: Ritmo rápido\n\
         De 8:01 até 11:00: Recuperação\n\
         De 11:01 até 13:00: Ritmo rápido\n\
         De 13:01 até 15:00: Recuperação\n\
         De 15:01 até 16:00: Ritmo rápido\n\
         De 16:01 até 17:00: Recuperação\n\
         De 17:01 até 29:00: Repita tudo o que você fez anteriormente, inclinações 4%, 6%, 8%, 10% e 1%.\n\
         De 29:01 até 34:00: Desaquecimento ");
         <button onclick="window.print()">IMPRIMIR </button>
            break;
        
        case '2':
            console.log(nomeAluno);
            console.log('\n\
            Primeiros 5 minutos: Aquecimento \n\
            5:01 até 6:00: Ritmo rápido com 2% de inclinação\n\
            6:01 até 7:00: Ritmo rápido com 4% de inclinação\n\
            7:01 até 8:00: Ritmo rápido com 6% de inclinação\n\
            8:01 até 9:00: Ritmo rápido com 8% de inclinação\n\
            9:01 até 11:00: Ritmo lento com 1% de inclinação\n\
            11:01 até 17:00: Repita tudo (sem contar o aquecimento), dessa vez com 4%, 6%, 8%, 10% e 1% de inclinação\n\
            17:01 até 23:00: Repita tudo (sem contar o aquecimento), dessa vez com 6%, 8%, 10%, 12% e 1% de inclinação\n\
            23:01 até 28:00: Desaquecimento');
            break;
        
            case '3':
                console.log(nomeAluno);
                console.log('\n\
                0:01 até 5:00: Aquecimento\n\
                5:01 até 9:00: Ritmo rápido\n\
                9:01 até 13:00: Recuperação\n\
                13:01 até 45:00: Repetir tudo 4 vezes (sem o aquecimento)\n\
                45:01 até 50:00: Desaquecimento');
                break;

            case'4':
                console.log(nomeAluno);
                console.log('\n\
                0:01 até 5:00: Corrida leve ou caminhada para o aquecimento\n\
                5:01 até 6:00: Coloque a esteira em uma inclinação de 1% e caminhe\n\
                6:01 até 7:00: Zere a inclinação e trote\n\
                7:01 até 9:00: Coloque a esteira em uma inclinação de 2% e caminhe\n\
                9:01 até 11:00: Zere a inclinação e trote\n\
                11:01 até 14:00: Coloque a esteira em uma inclinação de 3% e caminhe\n\
                14:01 até 17: 00: Zere a inclinação e trote\n\
                17:01 até 21:00: Coloque a esteira em uma inclinação de 4% e caminhe\n\
                21:01 até 25:00: Zere a inclinação e trote\n\
                25:01 até 30:00: Corrida leve ou caminhada para o desaquecimento');
                break;

            case'5':
               console.log(nomeAluno);
               console.log('\n\
               1 km: Ritmo lento para aquecer\n\
               3 km: Siga em um ritmo de corrida para os 10 km ou meia maratona\n\
               1 km: Ritmo lento para desaquecer');
                break;
        default:
            console.log("Treino inválido");
            break;


    }

