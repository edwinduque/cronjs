$(document).ready(function () {
  cargaInicial();

  function cargaInicial() {
    CargarMinutos();

    CargarHoras();

    CargarDias();

    CargarMeses();

    CargarAnios();
  }

  function CargarMinutos() {
    var minutoshtml = "";
    minutoshtml +=
      '<div class="row panel panel-default" ><div class="col-md-7 offset-md-2"><input type="radio" name="rbMinuto" id="cadaNMinutos" class="ml-3 d-block" onchange="calcular()"><b> Cada </b><select name="desdeMinuto" id="desdeMinuto" onchange="calcular()">';
    for (var i = 1; i < 30; i++) {
      minutoshtml += '<option value="' + i + '">' + i + "</option>";
    }
    minutoshtml +=
      '</select> <b> Minuto(s) comenzando en el minuto </b> <select name="comienzaMinutos" id="comienzaMinutos" onchange="calcular()">';
    for (var i = 0; i < 60; i++) {
      minutoshtml += '<option value="' + i + '">' + i + "</option>";
    }
    minutoshtml += "</select></div></div>";
    $("#minutos").append(minutoshtml);

    var minutoshtml = "";
    minutoshtml +=
      '<div class="panel panel-default"><div class="row"><div class="col-md-10 offset-md-2"><input type="radio" name="rbMinuto" id="porMinutos" class="ml-3 d-block"><b> Por minutos </b>';
    for (var i = 0; i < 60; i++) {
      if (i % 10 == 0) {
        minutoshtml += "</div></div>";
        minutoshtml += '<div class="row"><div class="col-md-10 offset-md-2">';
      }
      minutoshtml += "<div class='col-md-1'>";
      minutoshtml +=
        "<input type='checkbox' class='form-check-input minutos' onchange='seleccionarOpcionPorMinutos();calcular();'  value='" +
        i +
        "' />";
      minutoshtml += "<label class='form-check-label'>" + i + "</label>";
      minutoshtml += "</div>";
    }
    minutoshtml += "</div></div>";
    $("#minutos").append(minutoshtml);
  }

  function CargarHoras() {
    var horashtml = "";
    horashtml +=
      '<div class="row panel panel-default" ><div class="col-md-6 offset-md-2"><input type="radio" name="rbHora" id="cadaNHoras" class="ml-3 d-block" onchange="calcular()"><b> Cada </b><select name="desdeHora" id="desdeHora" onchange="calcular()">';
    for (var i = 1; i < 13; i++) {
      horashtml += '<option value="' + i + '">' + i + "</option>";
    }
    horashtml +=
      '</select> <b> Horas(s) comenzando en la hora </b> <select name="comienzaHoras" id="comienzaHoras" onchange="calcular()">';
    for (var i = 0; i < 24; i++) {
      horashtml += '<option value="' + i + '">' + i + "</option>";
    }
    horashtml += "</select></div></div>";
    $("#horas").append(horashtml);

    horashtml = "";
    horashtml +=
      '<div class="panel panel-default"><div class="row"><div class="col-md-6 offset-md-2"><input type="radio" name="rbHora" id="porHoras" class="ml-3 d-block"><b> Por horas </b>';
    for (var i = 0; i < 24; i++) {
      if (i % 10 == 0) {
        horashtml += "</div></div>";
        horashtml += "<div class='row'><div class='col-md-10 offset-md-2'>";
      }
      horashtml += '<div class="col-md-1">';
      horashtml +=
        "<input type='checkbox' class='form-check-input horas' onchange='seleccionarOpcionPorHoras();calcular();'  value='" +
        i +
        "' />";
      horashtml += "<label class='form-check-label'>" + i + "</label>";
      horashtml += "</div>";
    }
    horashtml += "</div></div>";
    $("#horas").append(horashtml);
  }

  function CargarDias() {
    diashtml = "";
    diashtml +=
      '<div class="panel panel-default"><div class="row"><div class="col-md-6 offset-md-2"><input type="radio" onchange="calcular();" name="rbDia" id="porDias" class="ml-3 d-block"><b> Por dias </b>';
    for (var i = 1; i < 32; i++) {
      if (i % 10 == 1) {
        diashtml += "</div></div>";
        diashtml += "<div class='row'><div class='col-md-10 offset-md-2'>";
      }
      diashtml += "<div class='col-md-1'>";
      diashtml +=
        "<input type='checkbox' class='form-check-input dias' onchange='seleccionarOpcionPorDias();calcular();'  value='" +
        i +
        "' />";
      diashtml += "<label class='form-check-label'>" + i + "</label>";
      diashtml += "</div>";
    }
    diashtml += "</div></div>";
    $("#dias").append(diashtml);

    diashtml = "";
    diashtml +=
      '<div class="panel panel-default"><div class="row"><div class="col-md-6 offset-md-2"><input type="radio" name="rbDia" id="porDiaDeLaSemana" onchange="calcular();" class="ml-3 d-block"><b> Por dia de la semana</b>';
    //var diasDeLaSemana = [{'Domingo':'SUN'},{'Lunes':'MON'},{'Martes':'TUE'},{'Miercoles':'WED'},{'Jueves':'THU'},{'Viernes':'FRI'},{'Sabado':'SAT'}];
    var diasDeLaSemana = {
      Domingo: "0",
      Lunes: "1",
      Martes: "2",
      Miercoles: "3",
      Jueves: "4",
      Viernes: "5",
      Sabado: "6",
    };
    var index = 0;
    for (var key in diasDeLaSemana) {
      var value = diasDeLaSemana[key];
      if (index % 5 == 0) {
        diashtml += "</div></div>";
        diashtml += '<div class="row"><div class="col-md-10 offset-md-2">';
      }
      diashtml += "<div class='col-md-2'>";
      diashtml +=
        "<input type='checkbox' class='form-check-input diasSemana' onchange='seleccionarOpcionPorDiasDeLaSemana();calcular();'  value='" +
        value +
        "' />";
      diashtml += "<label class='form-check-label'>" + key + "</label>";
      diashtml += "</div>";
      index++;
    }
    diashtml += "</div></div>";
    $("#dias").append(diashtml);
  }

  function CargarMeses() {
    var mesesHtml = "";
    mesesHtml +=
      '<div class="panel panel-default"><div class="row"><div class="col-md-6 offset-md-2"><input type="radio" name="rbMes" id="porMes" class="ml-3 d-block"><b> Por mes</b>';
    var nombreMeses = {
      Enero: "1",
      Febrero: "2",
      Marzo: "3",
      Abril: "4",
      Mayo: "5",
      Junio: "6",
      Julio: "7",
      Agosto: "8",
      Septiembre: "9",
      Octubre: "10",
      Noviembre: "11",
      Diciembre: "12",
    };
    var index = 0;
    for (var key in nombreMeses) {
      var value = nombreMeses[key];
      if (index % 5 == 0) {
        mesesHtml += "</div></div>";
        mesesHtml += '<div class="row"><div class="col-md-10 offset-md-2">';
      }
      mesesHtml += "<div class='col-md-2'>";
      mesesHtml +=
        "<input type='checkbox' class='form-check-input meses' onchange='seleccionarOpcionPorMes();calcular();'  value='" +
        value +
        "' />";
      mesesHtml += "<label class='form-check-label'>" + key + "</label>";
      mesesHtml += "</div>";
      index++;
    }
    mesesHtml += "</div></div>";
    $("#meses").append(mesesHtml);
  }

  function CargarAnios() {
    aniohtml = "";
    aniohtml +=
      '<div class="panel panel-default"><div class="row"><div class="col-md-6 offset-md-2"><input type="radio" name="rbAnio" id="porAnio" class="ml-3 d-block"><b> Por año</b>';
    var contador = 0;
    var fecha = new Date();
    var inicio = fecha.getFullYear();

    for (var i = inicio; i < inicio + 10; i++) {
      if (contador % 6 == 0) {
        aniohtml += "</div></div>";
        aniohtml += '<div class="row"><div class="col-md-10 offset-md-2">';
      }
      aniohtml += "<div class='col-md-2'>";
      aniohtml +=
        "<input type='checkbox' class='form-check-input anio' onchange='calcular()'  value='" +
        i +
        "' />";
      aniohtml += "<label class='form-check-label'>" + i + "</label>";
      aniohtml += "</div>";
      contador++;
    }
    aniohtml += "</div></div>";
    $("#anios").append(aniohtml);
  }
});

function seleccionarOpcionPorMinutos() {
  if ($("#porMinutos").not(":checked")) {
    $("#porMinutos").prop("checked", true);
  }
}

function seleccionarOpcionPorHoras() {
  if ($("#porHoras").not(":checked")) {
    $("#porHoras").prop("checked", true);
  }
}

function seleccionarOpcionPorDias() {
  if ($("#porDias").not(":checked")) {
    $("#porDias").prop("checked", true);
  }
}

function seleccionarOpcionPorDiasDeLaSemana() {
  if ($("#porDiaDeLaSemana").not(":checked")) {
    $("#porDiaDeLaSemana").prop("checked", true);
  }
}

function seleccionarOpcionPorMes() {
  if ($("#porMes").not(":checked")) {
    $("#porMes").prop("checked", true);
  }
}

function calcular() {
  if ($("#ningunaPlantilla").is(":checked")) {
    var strMinutos = "";
    if ($("#cadaMinuto").is(":checked")) {
      strMinutos = "*";
    } else if ($("#cadaNMinutos").is(":checked")) {
      var comienzaMinutos = $("#comienzaMinutos").val();
      var desdeMinuto = $("#desdeMinuto").val();
      strMinutos = comienzaMinutos + "/" + desdeMinuto;
    } else {
      $(".minutos").each(function () {
        if (this.checked) {
          strMinutos += this.value + ",";
        }
      });
      if (strMinutos.length > 0) {
        strMinutos = strMinutos.substr(0, strMinutos.length - 1);
      } else {
        strMinutos = "*";
      }
    }

    var strHoras = "";
    if ($("#cadaHora").is(":checked")) {
      strHoras = "*";
    } else if ($("#cadaNHoras").is(":checked")) {
      var comienzaHoras = $("#comienzaHoras").val();
      var desdeHora = $("#desdeHora").val();
      strHoras = comienzaHoras + "/" + desdeHora;
    } else {
      $(".horas").each(function () {
        if (this.checked) {
          strHoras += this.value + ",";
        }
      });

      if (strHoras.length > 0) {
        strHoras = strHoras.substr(0, strHoras.length - 1);
      } else {
        strHoras = "0";
      }
    }

    var strDias = "";
    var strDiaDeLaSemana = "";
    if ($("#cadaDia").is(":checked")) {
      strDias = "*";
      strDiaDeLaSemana = "*";
    } else if ($("#porDias").is(":checked")) {
      $(".dias").each(function () {
        if (this.checked) {
          strDias += this.value + ",";
        }
      });

      if (strDias.length > 0) {
        strDias = strDias.substr(0, strDias.length - 1);
      } else {
        strDias = "1";
      }
      strDiaDeLaSemana = "*";
    } else {
      $(".diasSemana").each(function () {
        if (this.checked) {
          strDiaDeLaSemana += this.value + ",";
        }
      });

      if (strDiaDeLaSemana.length > 0) {
        strDiaDeLaSemana = strDiaDeLaSemana.substr(
          0,
          strDiaDeLaSemana.length - 1
        );
      } else {
        strDiaDeLaSemana = "0";
      }
      strDias = "*";
    }

    var strMeses = "";
    if ($("#cadaMes").is(":checked")) {
      strMeses = "*";
    } else if ($("#porMes").is(":checked")) {
      $(".meses").each(function () {
        if (this.checked) {
          strMeses += this.value + ",";
        }
      });

      if (strMeses.length > 0) {
        strMeses = strMeses.substr(0, strMeses.length - 1);
      } else {
        strMeses = "1";
      }
    }

    var strAnios = "";
    if ($("#cadaAnio").is(":checked")) {
      strAnios = "*";
    } else if ($("#porMes").is(":checked")) {
      $(".meses").each(function () {
        if (this.checked) {
          strAnios += this.value + ",";
        }
      });

      if (strAnios.length > 0) {
        strAnios = strAnios.substr(0, strAnios.length - 1);
      } else {
        var fechaAux = new Date();
        var anioAux = String(fechaAux.getFullYear());
        strAnios = anioAux;
      }
    }
    $("#formula").val(
      strMinutos +
        " " +
        strHoras +
        " " +
        strDias +
        " " +
        strMeses +
        " " +
        strDiaDeLaSemana
    );
  } else {
    if ($("#EnUnMinuto").is(":checked")) {
      var fechaProxima = new Date();
      var fechaProximaAux = new Date(fechaProxima.getTime() + 60000);
      $("#formula").val(
        String(fechaProximaAux.getMinutes()) +
          " " +
          String(fechaProximaAux.getHours()) +
          " " +
          String(fechaProximaAux.getUTCDate()) +
          " " +
          String(fechaProximaAux.getMonth()) +
          " " +
          String(fechaProximaAux.getDay())
      );
    }else if($("#horarioLunVie6A10Cada10").is(":checked")){
        $("#formula").val('0/10 6-21 * * 1-5');

    }else if($("#horarioLunDom6A10Cada15").is(":checked")){
        $("#formula").val('0/15 6-21 * * *');
    }
    //
  }
}
