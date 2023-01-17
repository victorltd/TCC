



  Highcharts.setOptions({
    time: {
        timezone: 'America/Brasilia'
    }
})

//referentes ao sabado
Highcharts.chart('ad-sabado', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'AD'
    },
    yAxis: {
        title: { 
          text: 'AD (m)' 
        }
      },
      plotOptions: {
        series: {
            marker: {
                enabled: false
            },
            color: '#EC5555'
        }
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/victorltd/TCC/main/Firebase/public/docs/ad2.csv',
        enablePolling: true
    }
});
Highcharts.chart('temp-sabado', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Temperatura'
    },
    yAxis: {
        title: { 
          text: 'Temperatura (ºC)' 
        }
      },
      plotOptions: {
        series: {
            color: '#FF0000'
        }
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/victorltd/TCC/main/Firebase/public/docs/temp.csv',
        enablePolling: true
    }
});
Highcharts.chart('umid-sabado', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Umidade'
    },
    yAxis: {
        title: { 
          text: 'Umidade (%)' 
        }
      },
      plotOptions: {
        series: {
            color: '#FF0000'
        }
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/victorltd/TCC/main/Firebase/public/docs/umid.csv',
        enablePolling: true
    }
});
Highcharts.chart('pressao-sabado', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Pressão'
    },
    yAxis: {
        title: { 
          text: 'Pressão (hPa)' 
        }
      },
      plotOptions: {
        series: {
            color: '#FF0000'
        }
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/victorltd/TCC/main/Firebase/public/docs/press.csv',
        enablePolling: true
    }
});


//referentes a sexta
Highcharts.chart('ad-sexta', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'AD'
    },
    yAxis: {
        title: { 
          text: 'AD (m)' 
        }
      },
      plotOptions: {
        series: {
            color: '#FF0000'
        }
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/victorltd/TCC/main/Firebase/public/docs/ad2.csv',
        enablePolling: true
    }
});
Highcharts.chart('temp-sexta', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Temperatura'
    },
    yAxis: {
        title: { 
          text: 'Temperatura (ºC)' 
        }
      },
      plotOptions: {
        series: {
            color: '#FF0000'
        }
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/victorltd/TCC/main/Firebase/public/docs/temp.csv',
        enablePolling: true
    }
});
Highcharts.chart('umid-sexta', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Umidade'
    },
    yAxis: {
        title: { 
          text: 'Umidade (%)' 
        }
      },
      plotOptions: {
        series: {
            color: '#FF0000'
        }
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/victorltd/TCC/main/Firebase/public/docs/umid.csv',
        enablePolling: true
    }
});
Highcharts.chart('pressao-sexta', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Pressão'
    },
    yAxis: {
        title: { 
          text: 'Pressão (hPa)' 
        }
      },
      plotOptions: {
        series: {
            color: '#FF0000'
        }
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/victorltd/TCC/main/Firebase/public/docs/press.csv',
        enablePolling: true
    }
});






  /*referentes a exibicao das tabelas por meio dos botoes*/

  //sexta
  document.getElementById("btnradio1").onclick = function() {
    document.getElementById("graf-sexta").style.display = "inline";
    document.getElementById("graf-sabado").style.display = "none";
    document.getElementById("graf-domingo").style.display = "none";

  }

  //sabado
  document.getElementById("btnradio2").onclick = function() {
    document.getElementById("graf-sexta").style.display = "none";
    document.getElementById("graf-sabado").style.display = "inline";
    document.getElementById("graf-domingo").style.display = "none";

  }

  //domingo
  document.getElementById("btnradio3").onclick = function() {
    document.getElementById("graf-sexta").style.display = "none";
    document.getElementById("graf-sabado").style.display = "none";
    document.getElementById("graf-domingo").style.display = "inline";

  }