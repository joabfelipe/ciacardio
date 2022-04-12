import entradaDados from 'readline-sync';

let nomeProf = entradaDados.question('Professor: ');
let nomeAluno = entradaDados.question('Digite o nome do aluno: ');
let idadeAluno = entradaDados.question('Digite a idade do aluno: ');
let nivelAluno = entradaDados.question('Digite o nivel(01- iniciante, intermediario ou avancado) do aluno: ');
let objetivoAluno = entradaDados.question('Digite o objetivo do aluno: ');

if (nivelAluno == 'iniciante' && objetivoAluno == '10k'){
    console.log('Treino A')
}
else if(nivelAluno == 'iniciante' && objetivoAluno == '21k'){
    console.log('Treino B')
}
else if(nivelAluno == 'iniciante' && objetivoAluno == 'Maratona'){
    console.log('Treino C')
}
else{
    console.log('Dados inválidos')
}


//Iniciante - Emagrecimento
//Iniciante - Condicionamento Físico
//Iniciante - Performance
//Iniciante - 10k
//Iniciante - 21k
//Iniciante - Maratona


//Intermediario - Emagrecimento
//Intermediario - Condicionamento Físico
//Intermediario- Performance
//Intermediario - 10k
//Intermediario- 21k
//Intermediario- Maratona

//Avancado - Emagrecimento
//Avancado - Condicionamento Físico
//Avancado- Performance
//Avancado - 10k
//Avancado- 21k
//Avancado- Maratona

//Total de 18 treinos para todos os niveis e objetivos estabelecidos

//mais fácil fazer uma 'biblioteca' com todos os treinos, e o professor somente altera dados dos treinos

//Sistema de login (importar logins do CiaSoft)

//Banco de dados? tabelas:
