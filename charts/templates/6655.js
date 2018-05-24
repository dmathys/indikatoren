(function(){
    return {
  "xAxis": {
    type: 'category',
    //endOnTick: false,
    tickInterval: 10,
    labels: {
        overflow: "justify",
       	step: 1,
        //rotation: -45,
     }
  },
  "yAxis": {
    "min": 0, 
    max: 60,
    //offset: -0,
	  labels: {
	    x: -5,
		  "format": "{value}%"
	  }
  },	
  "tooltip": {
    "shared": false, 
    "headerFormat": '<span style="font-size: 10px"> Alter: {point.key}</span><br/>',
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b>%<br/>'
  },
 "series": [
    {
		"color": "#fabd24", // 1997
    	"legendIndex": 2
    }, /* rot */
    {
		"color": "#672773" , // 2006
    	"legendIndex": 2
    }, /* violett */
    {
		"color": "#007a2f", // 2016
    	"legendIndex": 2
    }, /* blau */
  ],
   "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 1,
    "align": "left",
    padding: 1,
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
  }, 
  chart: {
    spacing: [1,8,1,1]
  }
};
}());