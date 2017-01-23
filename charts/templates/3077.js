var chartOptions = {
  "xAxis": {
    "tickInterval": 1,
    "labels":{
    	"style":{
    		"width": 1,
    		"textOverflow": "none"
		 }
    }
  },
  "yAxis": {
    "min": 0,
    "max": 20,
	"labels": {
		"format": "{value}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
 "series": [
 	{"color": "#672773", "legendIndex": 1}, /*violett*/
	{"color": "#dc440e", "legendIndex": 0} /*orange*/
  ],
  "legend": {
    "enabled": true,
    "x": 10,
    "y": 50,
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 5,
    "align": "right",
    "itemStyle": {
      "fontWeight": "normal",
       "width": 125
    }
  },
  "plotOptions": {
    "line": {
      "marker":{
        "enabled": false,
        "symbol": "circle",
      } 
    }
  }
};