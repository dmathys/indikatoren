(function(){
    return {
   plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0,
        }
   },
 "data":{
  	"switchRowsAndColumns": true
  },

  "xAxis": {
    "labels": {
      rotation: 0
    },
    "type": "category"
  },
     "yAxis": [{
      tickInterval: 1000,
      tickAmount: 10,
    "labels": {
      "format": "{value:,.0f}",
      "style": {
        "color": "#000000"
      }
    },
    "min": 0,
    "max": undefined,
    "title": ""
  },
  {
    "title": {
      "style": {
        "color": "#000000",
        "fontSize": null
      },
      "text": null
    },
    "labels": {
      "format": "{value:,.1f}",
      "style": {
        "color": "#000000"
      }
    },
    tickAmount: 10,
    "min": 0,
    "max": 0.9,
    "gridLineWidth": 0,
    "opposite": true
  }
  ],
  "series": [
    {"color": "#6F6F6F", "yAxis": 1, "type": "line", marker:{enabled: false},
  	tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.2f}</b><br/>',
	},  
  }, 
  {"color": "#DC440E", "yAxis": 0,
  	tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
	},  
  },
  {"color": "#008AC3", "yAxis": 0,
  	tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
	},  
  }, 
  {"color": "#3C3C3C", "yAxis": 0,
  	tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
	},  
  },  
    
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    //"x": 25,
	  //"y": 45,  
	  "itemWidth": 170,
	  "width": 340,
	  
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "chart": {      
    "type": "column",
    "inverted": false
  }
}
}());

 