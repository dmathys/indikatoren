(function(){
    return {
   plotOptions: {
           series: {
            pointPadding: 0, 
			groupPadding: 0.1, 
			borderWidth: 0,

        }

   },
  "xAxis": {
    "type": "category",
    "labels": {
      x:-5,
      step: 1,
      "rotation": 0,
       padding: -100,
         } 
  },
  "yAxis": {
  	//max: 140000,
  	//tickInterval: 40000,
    "labels": {
    	y: 10,
      "format": "{value:,.0f}"
    }    
  },
  "series": [
  {"color": "#246370", "visible": true}, /* */
  {"color": "#A8C3CA", "visible": true} /*  */
  ],
  "legend": {
  	margin:1,
  	x:-8,
  	itemWidth: 150,
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    //"x": 25,
	  //"y": 55,    
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
   tooltip: {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
    "shared": false
  },
  "chart": {     
  	spacing: [0,3,0,3], /*top, right, bottom and left */
    "type": "column",
    "inverted": true,
  }
}
}());