(function(){
    return {
  plotOptions: {
        series: {
        	"stacking": "normal",
            pointPadding: 0,
            groupPadding: 0.5, // exaclty overlaps columns,
            borderWidth: 0
        },
  },
  "yAxis": {
  	//"min": -16000,
  	//"max": 16000,
  	//"tickInterval": 4000,
    "labels": {
      "format": "{value:,.0f}",
    },
    //gridZIndex: 3,
     /*plotLines: [{
                    value: 0,
                    color: '#6F6F6F',
                    width: 2,
                    zIndex: 4
                }],*/
     plotLines: [{
                    value: 0,
                    color: 'white',
                    width: 2,
                    zIndex: 4
                }],

  },
  "xAxis": {
   "tickInterval": 1
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    //"width": 50,
	  "y": 15,
    "itemMarginBottom": 5,
    itemWidth: 200,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#083038", // dunkelblau -Zuzug_Unbekannt
      //"color": "#83038", // dunkelblau -Zuzug_Unbekannt
      //"index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 0
    },
    {
      "color": "#246370", //dunkelgrün -Zuzug_Schweiz. Agglomeration Basel
      //"index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 1
    },
    {
      "color": "#689199", //hellblau - Zuzug_Übrige Schweiz
      //"index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 2
    },
    {
      "color": "#A8C3CA", //hellgrün - Zuzug_Ausland
      //"index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 4
    },
        {
      "color": "#007A2F", // dunkelblau -Wegzug_Unbekannt
      //"index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 0
    },
    {
      "color": "#68AB2B", //dunkelgrün -Wegzug_Schweiz. Agglomeration Basel
      //"index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 1
    },
    {
      "color": "#73B97C", //hellblau - Wegzug_Übrige Schweiz
      //"index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 2
    },
    {
      "color": "#D7E8D2", //hellgrün - Wegzug_Ausland
      //"index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 4
    },
    {
      "color": "#000000",
      //"index": 1,
      "type": "line",
	   "marker": {
    	"enabled": false
      }, 
      legendIndex: 4,
    },
      /*{
      "color": "000000", //hellgrün - Wegzug_Ausland
      //"index": 0,
      "type": "column",
      "pointWidth": "15",
      legendIndex: 4
    },*/
  ],  
  "tooltip": {
    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    "shared": false
  },
  "chart": {
/*    
    "marginBottom": 65,
    "type": "line",
    "alignTicks": false
*/    
  }
};
}());
