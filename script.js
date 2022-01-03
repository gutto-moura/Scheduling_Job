
//Janela de execução: 2019-11-10 09:00:00 até 2019-11-11 12:00:00

var listJobs = [
{
"ID": 1,
"Descricao": "Importação de arquivos de fundos",
"DataConclusao": "2019-11-10 12:00:00",
"TempoEstimado": 2,
},
{
"ID": 2,
"Descricao": "Importação de dados da Base Legada",
"DataConclusao": "2019-11-11 12:00:00",
"TempoEstimado": 4,
},
{
"ID": 3,
"Descricao": "Importação de dados de integração",
"DataConclusao": "2019-11-11 08:00:00",
"TempoEstimado": 6,
},
];

//VERIFICAR AS INFORMAÇÕES DO ARRAY
console.log(listJobs[0]);

//DECLARANDO AS DATAS DA JANELA DE EXECUÇÃO
const dateStart = new Date("2019-11-10 09:00:00");
const dateEnd = new Date("2019-11-11 12:00:00");

//MOSTRANDO QUAIS DATAS ESTÃO DENTRO DO PERIODO.
 for(job of listJobs){
     console.log(job.DataConclusao);
     
 }