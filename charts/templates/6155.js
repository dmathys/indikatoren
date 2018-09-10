(function(){
    return {
  "xAxis": {
    "tickInterval":2
  },
  "yAxis": {
	"labels": {
		"format": "{value:,.0f}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
  "series": [
    {"color": "#FABD24",
    legendIndex: 0,
      "marker": {
        "enabled": false
      }    
    }, /* hellgelb */
    	{"color": "#7F5F1A",
   legendIndex: 2,
	visible:true,
      "marker": {
        "enabled": false
      }    
    }, /* dunkelgelb */
    	{"color": "#008AC3",
     legendIndex: 1,
	visible:true,
      "marker": {
        "enabled": false
      }    
    }, /* hellblau */
    	{"color": "#2B0099",
     legendIndex: 3,
	visible:true,
      "marker": {
        "enabled": false
      }    
    }, /* dunkelblau */
      	{"color": "#68AB2B",
     legendIndex: 5,
	visible:true,
      "marker": {
        "enabled": false
      }    
    }, /* violett */
  ],
  "legend": {
    "enabled": true,
    //"x": 45,
    //"y": 55,
    "itemWidth": 180,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "plotOptions": {
    "line": {
	  "connectNulls": true,
      "marker":{
        "enabled": false,
        "symbol": "circle",
      }
    }
  }
}
}());
 