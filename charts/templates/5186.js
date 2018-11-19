(function(){
    return {
  "xAxis": {
    "tickInterval": 1,
    labels: { 
		style: { 
		//	textOverflow: 'none' // prevents ellipsis
	}, 
} 

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
    {"color": "#B00000",
      "marker": {
        "enabled": false
      }    
    }, /* dunkelrot */
    	/*{"color": "#007A2F",
	visible:true,
      "marker": {
        "enabled": true
      }    
    }, // dunkelgrün */
    {"color": "#B00000",
    linkedTo: 'previous',
      "marker": {
        "enabled": true,
        radius: 2
      }    
    },
    	{"color": "#4f81bd",
	visible:true,
      "marker": {
        "enabled": false
      }    
    }, //dunkelblau 
    	/*{"color": "#662673",
	visible:true,
      "marker": {
        "enabled": true
      }    
    },  dunkelviolett */
  ],
  "legend": {
    "enabled": true,
    //"x": 45,
    //"y": 35,
    //"itemWidth": 130,
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
 