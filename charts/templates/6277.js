(function(){
    return {
      chart: {
        spacingTop: 5,
      },
  "xAxis": {
    "tickInterval": 1,
    labels: {
      step: 2,
    },
  },
  "yAxis": {
    "min": 0, 
	  "labels": {
		  "format": "{value:,.1f}%",
		  y: 3
	  }
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b>%<br/>'
  },
 "series": [
    {
		"color": "#B00000",
    	"legendIndex": 2
    }, /* rot */
    {
    	"color": "#008AC3", 
    	"legendIndex": 0
    }, /* blau */
    {
    	"color": "#3c3c3c", /* schwarz */
    	"legendIndex": 1,
    },
  ],
  "legend": {
    "enabled": true,
    "layout": "vertical",
    "verticalAlign": "middle",
    "align": "right",
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
}
}());