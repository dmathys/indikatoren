(function(){
    return {
 "chart": {    
  	"width":665,
    "type": "column",
    "inverted": false,
    //spacing: [3,3,10,3], /*top, right, bottom and left */ /*[3,3,3,3]*/
  },   
  "xAxis": {
    "type": "category",
    "labels": {
      "rotation": -90 
    } 
  },
  "yAxis": {
	"max": 1100000,
	tickInterval: 600000,
    "labels": {
      "format": "{value:,.0f} m²"
    }    
  },
  "series": [
  {"color": "#CD9C00", "visible": true}, /* hellbraun*/
  {"color": "#83522E", "visible": true} /* dunkelbraun */
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "x": 65,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
   tooltip: {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y} m²</b><br/>',
    "shared": false
  },
  plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0,
        }
    }
}
}());