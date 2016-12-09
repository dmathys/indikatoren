chartOptions['Wirtschaftsstandort_LP.1.05.1_Test'] = {
"xAxis": {
    "tickInterval": 2,
  },
  "yAxis": {
    "min": 0, 
    "max": 50,
	"labels": {
		"format": "{value:,.0f}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
 "series": [
  {"color": "#256370", "index": 14}, /*dunkelblau */
  {"color": "#ffbb58", "index": 13}, /*dunkelgelb */
  {"color": "#672773", "index": 12}, /*violett */
  {"color": "#ffda80", "index": 11}, /*hellgelb */
  {"color": "#71a3b5", "index": 10}, /*helllblau */
  {"color": "#73ba7c", "index": 9}, /*hellgrün */
  {"color": "#68411e", "index": 8}, /*dunkelbraun */
  {"color": "#a8c4cb", "index": 7}, /*hellgrau */
  {"color": "#2B0099", "index": 6}, /*rot */
  {"color": "#ff8028", "index": 5}, /*orange */
  {"color": "#b475ab", "index": 4}, /*pink */
  {"color": "#7f5f1a", "index": 3},  /*hellbraun */
  {"color": "#007a2f", "index": 2},  /*dunkelgrün */
  {"color": "#000000", "index": 1},  /*schwarz */
  {"color": "#8a8a8a", "index": 0}  /*grau */
  ],
  "legend": {
    "enabled": true,
    "x": 35,
    "y": 40,
    "itemWidth": 200,
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
