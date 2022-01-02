# Scheduling_Job

### Dado um array de "jobs" para execução, no qual cada posição possui um objeto com os seguintes atributos:
* ID: Identificação do Job;
* Descrição: Descrição do Job;
* Data Máxima de conclusão do Job: Data máxima em que o Job deve ser concluído;
* Tempo estimado: Tempo estimado de execução do Job.
<hr/><br/>

### Criar algoritmo que retorne um conjunto de arrays com as seguintes características:
1. Cada array do conjunto representa uma lista de Jobs a serem executados em sequência;
2. Cada array deve conter jobs que sejam executados em, no máximo, 8h;
3. Deve ser respeitada a data máxima de conclusão do Job;
4. Todos os Jobs devem ser executados dentro da janela de execução (data início e fim).
