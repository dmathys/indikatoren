(function(){
    return {
  plotOptions: {
        series: {
            pointPadding: 0,
            groupPadding: 0.5, // exaclty overlaps columns
        }
  },
  "yAxis": {
  	"min": -20000,
    "labels": {
      "format": "{value:,.0f}",
    }
  },
  "xAxis": {
   "tickInterval": 1
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	"y": 40,
	"x": 40,
	"itemMarginBottom": 5,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#000000",
      "index": 1,
      "type": "line",
      //"yAxis": 1,
      legendIndex: 1,
      tooltip: {
      	"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
    }
    },
    {
      "color": "#71a3b5",
      "index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 2
    },
    {
      "color": "#b00000",
      "index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 3
    }
  ],  
  "tooltip": {
    "shared": true
  },
  "chart": {
/*    
    "marginBottom": 65,
    "type": "line",
    "alignTicks": false
*/    
  }
};
}());
