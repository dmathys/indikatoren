(function(){
    return {
"plotOptions": {
    "series": {
      pointPadding: 100,
      borderWidth: 0,
      "pointWidth": 20,
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
    "tickInterval": 1,
    "labels": {
        rotation: -45,
        formatter: function() {
              	 return this.value;
        }
    },
  },  
  "yAxis": {
     tickInterval: 2500,
    "labels": {
      "format": "{value:,.0f}",
    },
  },
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    itemWidth: 120,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
 "series": [
  {"color": "#d7e9d2", "index": 0, "legendIndex":0}, /*grün dunkel2*/
  {"color": "#73ba7c", "index": 1, "legendIndex":1}, /*grün mittel*/
  {"color": "#44ab2b", "index": 2, "legendIndex":2}, /*grün dunkel1*/
  {"color": "#007a2f", "index": 3, "legendIndex":3}, /*grün hell*/
  ],
  "chart": {
    "renderTo": 'container-I.01.1.0016', 
    "type": "column",
    "inverted": false
  },
  "tooltip": {
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
  "footerFormat": 'Total: <b>{point.total:,.0f}</b>',
   "shared": true
  },
};
}());
