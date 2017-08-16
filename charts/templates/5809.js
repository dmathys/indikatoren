(function(){
    return {
  "plotOptions": {
    "series": {
      "pointWidth": 10,
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      },
      "stacking": "normal"
    }
  },
  "xAxis": {
    "type": "category",
	"tickInterval": 2	
  },  
"yAxis": [{
  	title: {
        text: null
    },
    "labels": {
      "format": "{value:,.0f}"
    },
    "min": 0,  },
  {
    title: {
        text: null
    },
    "labels": {
      "format": "{value:,.1f}"
    },
    "min": 0,
    "opposite": true
  }
  ],
  "series": [
        {
	  "color": "#990300",
      "legendIndex": 1,
      "type": "column",
       "tooltip": {
    		"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
       }
    },
    {
	  "color": "#71A3B5",
      "legendIndex": 2,
      "type": "column",
      "tooltip": {
    		"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
       }
    },
    {
      "color": "#000000",
      "type": "line",
      "legendIndex": 3,
      "yAxis": 1,
      "marker": {
        "enabled": false
    },
    "tooltip": {
    		"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.2f}</b><br/>',
     }
    }
  ],
   "tooltip": {
    //"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
    "headerFormat": '&nbsp;&nbsp;&nbsp;Gesamtbevölkerung: <b>{point.total:,.0f}</b><br/>',
    "shared": true, 
    useHTML: true
  }, 
  "legend": {
    "enabled": true,
    "x": 45,
    "y": 35,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
     "fontWeight": "normal"
    }
  },
  "chart": {    
    "marginBottom": 75,
    "marginTop": 75,
    "type": "column"
  }
}
}());
