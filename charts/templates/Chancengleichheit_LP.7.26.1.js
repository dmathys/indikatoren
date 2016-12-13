chartOptions["Chancengleichheit_LP.7.26.1"] = {
  "plotOptions": {
    "series": {
      "stacking": null,
      "groupPadding": 0.05
    }
  },
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}%"
    }
  },
  "xAxis": {
    "tickInterval": 1
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.2f}%)<br/>',
    shared: false
  },
  "legend": {
		"verticalAlign": "top",
		"floating": false,
		"y": 20,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
    {
      "color": "#b00000"
    }, /*Schweiz - rot*/
    {
      "color": "#71a3b5"
    }, /*Ausland- blau*/
    {
      "color": "#ff8028",
      "marker": {
        "enabled": false
      }, /*Kt. BS - orange*/
      "type": "line"
    }    
  ],

  "chart": {
    "marginBottom": 65,
    "marginTop": 100,
    "type": "column"
  }
};
