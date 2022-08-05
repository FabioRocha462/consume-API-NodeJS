const axios = require('axios');

var value1 = "2022-08-01";
var value2 = "2022-08-02";

valueInit = new Date(value1);
let dateInitFormated = ((valueInit.getFullYear() + "-" + ((valueInit.getMonth() + 1)) + "-" + valueInit.getDay() ));

value2 = new Date(value2);
let dateEndFormated = ((value2.getFullYear() + "-" + ((value2.getMonth() + 1)) + "-" + value2.getDay() ));

var i = 0;

while (dateInitFormated <= dateEndFormated){

    valueInit.setDate(dateInitFormated.getDate() + i);

    axios.get(`http://nadic.ifrn.edu.br/api/dou/${dateInitFormated}/?usuario=dev_nadic`).then(resp => {

        data = resp.data.licitacoes;
        datas = data[0].datas['Outras Datas'][0].data;
        console.log(
            'Orgão: ' + data[0].orgao + '\n' +
            'Título: ' + data[0].titulo + '\n' +
            'Estado: ' + data[0].estado + '\n' +
            'Cidade: ' + data[0].cidade + '\n' +
            'Objeto: ' + data[0].objeto + '\n' +
            'Datas: ' + JSON.stringify(datas) + '\n');
    });
    i = i + 1;
};