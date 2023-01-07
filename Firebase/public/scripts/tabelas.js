// convert epochtime to JavaScripte Date object
function epochToJsDate(epochTime){
    return new Date(epochTime*1000);
  }
  
  // convert time to human-readable format YYYY/MM/DD HH:MM:SS
  /*
  function epochToDateTime(epochTime){
    var epochDate = new Date(epochToJsDate(epochTime));
    var dateTime = epochDate.getFullYear() + "/" +
      ("00" + (epochDate.getMonth() + 1)).slice(-2) + "/" +
      ("00" + epochDate.getDate()).slice(-2) + " " +
      ("00" + epochDate.getHours()).slice(-2) + ":" +
      ("00" + epochDate.getMinutes()).slice(-2) + ":" +
      ("00" + epochDate.getSeconds()).slice(-2);
    console.log(dateTime)
    return dateTime;
  }
*/
  function epochToDateTime(epochTime){
    var epochDate = new Date(epochToJsDate(epochTime));
    var dateTime = epochDate.getDate() + "/" +
      ("00" + (epochDate.getMonth() + 1)).slice(-2) + "/" +
      ("00" + epochDate.getFullYear()).slice(-4) + " " + //tem que botar o -4 pra aparecer o 2022 e nao 22
      ("00" + epochDate.getHours()).slice(-2) + ":" +
      ("00" + epochDate.getMinutes()).slice(-2) + ":" +
      ("00" + epochDate.getSeconds()).slice(-2);
    console.log(dateTime)
    return dateTime;
  }

// lê o arquivo CSV
Papa.parse('estacao.csv', {
    download: true,
    header: true,
    complete: function(results) {
      // results.data contém um array de objetos, cada um representando uma linha do arquivo CSV
      var tabela = document.getElementById('myTable');
      var tbody = tabela.getElementsByTagName('tbody')[0];
      for (var i = 0; i < results.data.length; i++) {
        var linha = results.data[i];
        var tr = document.createElement('tr');
        //console.log(linha._key);
        var conversao = epochToDateTime(linha._key);
        //console.log(conversao);

        tr.innerHTML = '<td>' + conversao + '</td><td>' + linha.temperature + '</td><td>' + linha.humidity + '</td><td>' + linha.pressure + 
        '</td><td>' + linha.ad + '</td>' ;
        tbody.appendChild(tr);
      }
    }
  })

  //le o csv do sabado
  Papa.parse('estacao1.csv', {
    download: true,
    header: true,
    complete: function(results) {
      // results.data contém um array de objetos, cada um representando uma linha do arquivo CSV
      var tabela = document.getElementById('tabSabado');
      var tbody = tabela.getElementsByTagName('tbody')[0];
      for (var i = 0; i < results.data.length; i++) {
        var linha = results.data[i];
        var tr = document.createElement('tr');
        //console.log(linha._key);
        var conversao = epochToDateTime(linha._key);
        //console.log(conversao);

        tr.innerHTML = '<td>' + conversao + '</td><td>' + linha.temperature + '</td><td>' + linha.humidity + '</td><td>' + linha.pressure + 
        '</td><td>' + linha.ad + '</td>' ;
        tbody.appendChild(tr);
      }
    }
  })
  
    //le o csv do domingo
    Papa.parse('estacao2.csv', {
      download: true,
      header: true,
      complete: function(results) {
        // results.data contém um array de objetos, cada um representando uma linha do arquivo CSV
        var tabela = document.getElementById('tabDomingo');
        var tbody = tabela.getElementsByTagName('tbody')[0];
        for (var i = 0; i < results.data.length; i++) {
          var linha = results.data[i];
          var tr = document.createElement('tr');
          //console.log(linha._key);
          var conversao = epochToDateTime(linha._key);
          //console.log(conversao);
  
          tr.innerHTML = '<td>' + conversao + '</td><td>' + linha.temperature + '</td><td>' + linha.humidity + '</td><td>' + linha.pressure + 
          '</td><td>' + linha.ad + '</td>' ;
          tbody.appendChild(tr);
        }
      }
    })



  /*referentes a exibicao das tabelas por meio dos botoes*/

  //sexta
  document.getElementById("btnradio1").onclick = function() {
    document.getElementById("table-sexta").style.display = "inline";
    document.getElementById("table-sabado").style.display = "none";
    document.getElementById("table-container").style.display = "none";

  }

  //sabado
  document.getElementById("btnradio2").onclick = function() {
    document.getElementById("table-sexta").style.display = "none";
    document.getElementById("table-sabado").style.display = "inline";
    document.getElementById("table-container").style.display = "none";

  }

  //domingo
  document.getElementById("btnradio3").onclick = function() {
    document.getElementById("table-sexta").style.display = "none";
    document.getElementById("table-sabado").style.display = "none";
    document.getElementById("table-container").style.display = "inline";

  }