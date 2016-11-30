chartOptions["Chancengleichheit_LP.7.26.3"] = {
  "xAxis": {
    "tickInterval": 1,
	"labels": {
		"rotation": -45
	}
  },
  "yAxis": {
    "min": 0, 
	"labels": {
		"format": "{value}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
 "series": [
	{"color": "#256370"}, /* blau*/
	{"color": "#007a2f"}, /*grün*/
    {"color": "#9f7c5a"}  /* braun*/
  ],
  "legend": {
    "enabled": true,
    "x": 20,
    "y": 50,
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