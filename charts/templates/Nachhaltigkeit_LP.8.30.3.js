chartOptions['Nachhaltigkeit_LP.8.30.3'] = {
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
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}%"
    },
  },
  "tooltip": {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>',
    "shared": false
  },  
  "legend": {
  	"enabled": true,
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 5,
    "itemWidth": 100,
    "align": "right",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
  {"color": "#73ba7c", "index": 3},  /*grün */
  {"color": "#9a86a6", "index": 2}, /*lila */
  {"color": "#b00000", "index": 1}, /*rot */
  {"color": "#71a3b5", "index": 0} /*blau */
  ],
  "chart": {
    "renderTo": 'container-I.01.1.0016', 
    "marginBottom": 75,
    "marginTop": 75,
    "type": "column",
    "inverted": false
  }
};

