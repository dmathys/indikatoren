chartOptions["I.10.1.0003"] = {
  "xAxis": {
    "tickInterval": 1
  },
  "yAxis": {
    "min": undefined, 
	"labels": {
		"format": "{value}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
  "series": [
    {"color": "#71A3B5"}, /* BS global = hellblau*/
    {"color": "#E7CEE2"}, /* BE global hellpink*/
	{"color": "#73B97C"}, /* GE global hellgrün*/
	{"color": "#FFBB58"}, /* ZH global gelb*/
	{"color": "#008AC3"}, /* BS kontinental dunkelblau*/
    {"color": "#933F8D"}, /* BE kontinental dunkelpink*/
	{"color": "#007A2F"}, /* GE kontinental dunkelgrün*/
    {"color": "#FF8028"}  /* Zürich kontinental orange*/
	// {"color": "#8a8a8a"}, /* BS global = grau*/
    // {"color": "#aaa2c7"}, /* BE global lila*/
	// {"color": "#256370"}, /* GE global dunkelblau*/
	// {"color": "#67401E"}, /*ZH global dunkelbraun*/
	// {"color": "#C8C8C8"}, /* BS kontinental hellgrau*/
    // {"color": "#E7CEE2"}, /* BE kontinental hellila*/
	// {"color": "#007A2F"}, /* GE kontinental hellblau*/
    // {"color": "#C4AB91"}  /* Zürich kontinental hellbraun*/
  ],
  "legend": {
    "enabled": true,
    "x": 20,
    "y": 35,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "plotOptions": {
    "line": {
      "marker":{
        "enabled": false,
        "symbol": "circle",
      } 
    }
  }
};
 