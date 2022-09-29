(function(){
  //Victor Augusto 
//Insira aqui os dados q vc pega no site do firebase
 // Inicia o firebase Firebase
 var config = {
    apiKey: "insiraapikey",
    authDomain: "aaaaaaa.firebaseapp.com",
    databaseURL: "https://estacaoaero-default-rtdb.firebaseio.com",
    projectId: "aaaaaaa",
    storageBucket: "estacaoaero.appspot.com",
    messagingSenderId: "365984633257",
    appId: "1:365984633257:web:2527e4d335c07af10334b8",
    measurementId: "G-JDBGQZXLSG"
  };
  
  firebase.initializeApp(config);

  var db = firebase.database();

  // Cria os listeners dos dados no firebase
  var tempRef = db.ref('/test/temperatureJ');
  var umidRef = db.ref('/test/humidityJ');
  var pressRef = db.ref('/test/pressaoJ');
  var adRef = db.ref('/test/ADJ');



  // Registra as funções que atualizam os gráficos e dados atuais da telemetria
  tempRef.on('value', onNewData('currentTemp', 'tempLineChart' , 'Temperatura', 'C°'));
  umidRef.on('value', onNewData('currentUmid', 'umidLineChart' , 'Umidade', '%'));
  pressRef.on('value', onNewData('currentPressao', 'pressaoLineChart' , 'Pressão', 'hPa'));
  adRef.on('value', onNewData('currentAD', 'ADLineChart' , 'AD', 'm'));



})();


// Retorna uma função que de acordo com as mudanças dos dados
// Atualiza o valor atual do elemento, com a metrica passada (currentValueEl e metric)
// e monta o gráfico com os dados e descrição do tipo de dados (chartEl, label)
function onNewData(currentValueEl, chartEl, label, metric){
  return function(snapshot){
    var readings = snapshot.val();
    if(readings){
        var currentValue;
        var data = [];
        for(var key in readings){
          currentValue = readings[key]
          data.push(currentValue);
        }

        document.getElementById(currentValueEl).innerText = currentValue + ' ' + metric;
        buildLineChart(chartEl, label, data);
    }
  }
}

// Constroi um gráfico de linha no elemento (el) com a descrição (label) e os
// dados passados (data)
function buildLineChart(el, label, data){
  var elNode = document.getElementById(el);
  new Chart(elNode, {
    type: 'line',
    data: {
        labels: new Array(data.length).fill(""),
        datasets: [{
            label: label,
            data: data,
            borderWidth: 1,
            fill: false,
            spanGaps: false,
            lineTension: 0.1,
            backgroundColor: "#F9A825",
            borderColor: "#F9A825"
        }]
    }
  });
}
