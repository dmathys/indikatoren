(function(){
    return {
"plotOptions": {
    "series": {
      pointPadding: 100,
      borderWidth: 0,
      "pointWidth": 5,
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      },
      "stacking": "normal"
    }
  },
  "xAxis": {
  	min: 0,
    "type": "category",
    "tickInterval": 1,
    labels:{
    rotation:-90,
    step:1,
    }
  },  
  "yAxis": {
  	 max: 100,
     tickInterval: 20,
    "labels": {
      "format": "{value:,.0f}%",
    },
  },

 "series": [
  {"color": "#71a3b5", index: 6, legendIndex: 0}, 
  {"color": "#672773", index: 5, legendIndex: 1}, 
  {"color": "#ff8028", index: 4, legendIndex: 2}, 
  {"color": "#73ba7c", index: 3, legendIndex: 3}, 
  {"color": "#E7CEE2", index: 2, legendIndex: 4},
  {"color": "#fabd24", index: 1, legendIndex: 5}, 
  {"color": "#999999", index: 0, legendIndex: 6}, 
],
  "chart": {
  	spacing: [15,3,8,3],
    "renderTo": 'container-I.01.1.0016', 
       "type": "column",
    "inverted": false,
  },
  "tooltip": {
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>',
   "shared": false
  },
  "legend": {
  	y: -8,
  	//"itemWidth": 145,
    "enabled": true,
    "layout": "vertical",
    "verticalAlign": "top",
    "align": "right",
    reversed: true,
    labelFormatter: function(){
      return this.name.replace(" ", "<br/>").replace("-", "<br/>");
    },
	  //"y": 30,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
}
}());
