(function(){
    return {
  "yAxis": [{
  	title: {
        text: null
    },
    "labels": {
      "format": "{value:,.0f}"
    },
    "min": 0,
    //"max": 3000,
    //"tickInterval":600,
    //"title": ""
  },
  {
    /*"title": {
        "style": {
        "color": "#000000",
        "fontSize": null
      },
      "text": null
    },*/
    title: {
        text: null
    },
    "labels": {
      "format": "{value:,.0f}"
    },
    "min": 0,
    //"tickInterval": 2,
    //"gridLineWidth": 0,
    "opposite": true
  }
  ],
  "xAxis": {
    "tickInterval": 2
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	"x": 45,
	"width": 300,
	"itemMarginBottom": 5,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
 "series": [
    {
      "color": "#B375AB",
      "index": 0,
      "type": "column",
      //"pointWidth": "7",
      pointPadding: 0,
      borderWidth: 0,
      //"pointPadding": 0,
      //"groupPadding": 0.1,
      legendIndex: 1,
    	"tooltip": {
  		"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.0f}</b><br/>',
		   },
    },
    {
      "color": "#2B0099",
      "index": 1,
      "type": "line",
      "yAxis": 1,
       "marker": {
        "enabled": true
      },
      legendIndex: 2,
      "tooltip": {
  		"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}</b><br/>',
		   },
      //tooltip: {
      	//"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>'
    //}
    },
     {
      "color": "#C4AB91",
      "index": 0,
      "type": "column",
      //"pointWidth": "7",
      pointPadding: 0,
      borderWidth: 0,
      legendIndex: 3,
      "tooltip": {
  		"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.0f}</b><br/>',
		   },
    },
    {
      "color": "#3A2012",
      "index": 1,
      "type": "line",
      "yAxis": 1,
      "legendIndex": 3,
      "marker": {
        "enabled": true
      },
      "tooltip": {
  		"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}</b><br/>',
		   },
		   
    }
  ],  
  "chart": {
    "alignTicks": false
  }
}
}());