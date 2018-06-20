(function(){
    return {
   plotOptions: {
        series: {
            pointPadding: 0,
            borderWidth: 0,
            pointWidth: 5, 
        }
   },
  xAxis: {
    type: "category",
    labels: {
      rotation: 0,
      y: 3, 
      padding: 0,
      step: 1,
    } 
  },
  yAxis: {
    offset: -5,
    labels: {
      y: 18, 
      format: "{value:,.0f}"
    }    
  },
  "series": [
  {"color": "#E6E600", "visible": true}, /* gelb*/
  {"color": "#68AB2B", "visible": true} /* grün */
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }, 
    padding: 1
  },
   tooltip: {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>',
    "shared": false
  },
  chart: {      
    type: "column",
    inverted: true,
    marginLeft: 120
  }
};
}());