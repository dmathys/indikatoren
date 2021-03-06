(function(){
    return {
  "xAxis": {
    "tickInterval":3
  },
  "yAxis": {
	"labels": {
		"format": "{value:,.0f}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>'
  },
  "series": [
    {"color": "#6F6F6F", /*dunkelgrau*/
      "marker": {
        "enabled": false
      }    
    }, 
    	{"color": "#B00000", /* dunkelrot */
	visible:true,
      "marker": {
        "enabled": false
      }    
    }, 
    	{"color": "#4f81bd", /* dunkelblau */
	visible:true,
      "marker": {
        "enabled": false
      }    
    }, /* dunkelblau */
    	/*{"color": "#662673",
	visible:true,
      "marker": {
        "enabled": true
      }    
    },  dunkelviolett */
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
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
 