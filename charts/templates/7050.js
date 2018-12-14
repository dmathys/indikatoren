(function(){
    return {
	plotOptions: {
        series: {
            pointPadding: 0,
            groupPadding: 0.1,
            borderWidth: 0
        }
    },
  "xAxis": {
    "type": "category",
    "labels": {
      rotation: -90,
      y: 10,
      x: -10,
           "align": "right",
           "formatter": function() {
           return this.value.replace("/", "<br/>")
        },
        style: { 
          fontSize: "9px",
          width: "100px",
          wordWrap: 'break-word',
		//	textOverflow: 'none' // prevents ellipsis
		} 
    },
  },
  "yAxis": {
    tickAmount: 5,
    "labels": {
      "format": "{value:,.0f}" ,
        style: { 
          fontSize: "9px",
		//	textOverflow: 'none' // prevents ellipsis
		} 
    }    
  },
  "series": [
  {"color": "#ECE1D0"},
  {"color": "#9E7C59"}, 
  {"color": "#3A2012"}, 
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    itemDistance: 3,
    "itemStyle": {
      "fontSize": "9px",
      "fontWeight": "normal"
    },
  },
  tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    shared: false
  },  
  "chart": {  
  	"type": "column",
    "inverted": false,
  	width: 662, 
  	hight: 208,
  	//marginBottom: 120,
	  spacingTop: 5
  }
};
}());
