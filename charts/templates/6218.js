(function(){
    return {
  plotOptions: {
        series: {
        	"stacking": "normal",
            pointPadding: 0,
            groupPadding: 0.5, // exaclty overlaps columns
            borderWidth: 0
        }
  },
  "yAxis": {
  	max: 100,
    "labels": {
      "format": "{value:,.0f} %",
    }
  },
  "xAxis": {
  	"type": "category",
   //"tickInterval": 1
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	"y": 40,
	"x": 35,
	itemWidth: 500,
	"itemMarginBottom": 5,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#b475ab",
      "index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 0
    },
    {
      "color": "#a8c4cb",
      "index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 1
    },
    {
      "color": "#fabd24",
      "index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 2
    },
    {
      "color": "#68AB2B",
      "index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 2
    },    
  ],  
  "tooltip": {
    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f} %</b><br/>',
  },
  /*"chart": {
    "marginBottom": 65,
    "type": "line",
    "alignTicks": false
  }*/
};
}());

