(function(){
    return {
"plotOptions": {
    "series": {
      pointPadding: 100,
      "pointWidth": 40,
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      },
      "stacking": "normal"
    }
  },
  "xAxis": {
    "type": "category",
    "tickInterval": 1
  },  
  "yAxis": {
  	 //max: 120000,
     //tickInterval: 60000,
    "labels": {
      "format": "{value:,.0f}",
    },
	"max": undefined
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "x": 45,
	"y": 20,
	"Itemwidth": 500,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
  {"color": "#B00000", "index": 4}, /*rot */
  {"color": "#FF8028", "index": 3}, /*dunkelorange */
  {"color":"#E6E600", "index": 2}, /*dunkelgelb */
  {"color":"#68AB2B ", "index": 1}, /*dunkelgrün */
  ],
  "chart": {
    "renderTo": 'container-I.01.1.0016', 
    "marginBottom": 75,
    "marginTop": 75,
    "type": "column",
    "inverted": false
  },
  "tooltip": {
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
  "footerFormat": 'Total: <b>{point.total:,.0f}</b>',
   "shared": true
  },
}
}());
