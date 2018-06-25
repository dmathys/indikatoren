(function(){
    return {
	plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0
        }
    },
  "xAxis": {
    "type": "category",
    labels:{
    	rotation:-90,
    }
  },
  "yAxis": {
  	max: 75,
  	tickInterval: 25,
    "labels": {
      "format": "{value}" 
    }    
  },
  "series": [
  {"color": "#661200"},
  {"color": "#dc440e"}, 
  {"color": "#7f5f1a"}, 
  {"color": "#ffda80"}, 
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
  	itemDistance: 5,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}</b><br/>',
    shared: false
  },  
  "chart": {  
  	 marginBottom: 68,
    "type": "column",
    "inverted": false
  }
}
}());

 