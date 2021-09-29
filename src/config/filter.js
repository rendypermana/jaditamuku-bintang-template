import Vue from "vue";
var moment = require("moment-timezone");

// load local currency


Vue.filter("nullDash", function(val) {
  if (!val) return "-";
  return val;
});



Vue.filter("date", function(val) {
  if (!val) return "-";
  return moment(val).format("DD-MM-YYYY");
});
Vue.filter("dateTime", function(val) {
  if (!val) return "-";
  return moment(val).format("DD/MM/YYYY, hh:mm");
});

Vue.filter("dateSlash", function(val) {
  if (!val) return "-";
  return moment(val).format("DD/MM/YYYY");
});

Vue.filter("monthSlash", function(val) {
  if (!val) return "-";
  return moment(val).format("MM/YYYY");
});

Vue.filter("nofa", function(val) {
  if (!val) return "-";
  return val.replace(/(\d{3})(\d{3})(\d{2})(\d{8})/, "$1.$2.$3.$4");
});

Vue.filter("nofaNoPrefix", function(val) {
  if (!val) return "-";
  return val.replace(/(\d{3})(\d{2})(\d{8})/, "$1.$2.$3");
});



Vue.filter("fullDateTime", function(val) {
  if (!val) return "-";
  return moment(val).format("YYYY/MM/DD, hh:mm:ss");
});

Vue.filter("hariDari", function(val) {
  if (!val) return "-";
  return moment(val).fromNow();     
});



Vue.filter("monthNumber", function(val) {
  switch(val){
    case "01":
      return 'Januari';
      break;
    case "02":
      return 'Februari';
      break; 
    case "03":
      return 'Maret';
      break;
    case "04":
      return 'April';
      break;
    case "05":
      return 'Mei';
      break;
    case "06":
      return 'Juni';
      break;
    case "07":
      return 'Juli';
      break;
    case "08":
      return 'Agustus';
      break;
    case "09":
      return 'September';
      break;
    case "10":
      return 'Oktober';
      break;
    case "11":
      return 'November';
      break;
    case "12":
      return 'Desember';
  }
});
