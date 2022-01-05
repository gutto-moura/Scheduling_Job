
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

//Verificar se as informações do array estão corretas
//console.log(listJobs[0]);


var countId;
var arrayId = [];
//Declarando as datas da janela de execução.
const dateStart = new Date("2019-11-10 09:00:00");
const dateEnd = new Date("2019-11-11 12:00:00");

//Mostrando quais datas estão dentro do periodo ou não.
 for(job of listJobs){
     console.log(job.DataConclusao);
     if (dateStart.getTime() <= new Date(job.DataConclusao).getTime() && dateEnd.getTime() >= new Date(job.DataConclusao).getTime()) {
        console.log('A data está dentro da janela de execução');
    } else {
        console.log('A data está fora da janela de execução');
    }
 }

 //Ordenando as datas do antigo para o mais recente
 listJobs.sort((a, b) => {
    const dateInitial = new Date(a.DataConclusao);
          dateFinal = new Date(b.DataConclusao);
    return dateInitial - dateFinal;
 });

 //Consultando se o array está ordenado de forma correta
 listJobs.map((job) => {
    return `Data da conclusão: ${job.DataConclusao} - ID: ${job.ID}`
 })

 //Mostrando os ID'S na ordem.
 for(job of listJobs){
   countId = countId + job.TempoEstimado;
   arrayId[0] = job.ID;
console.log(arrayId)
}
