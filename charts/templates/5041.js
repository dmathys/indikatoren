var chartOptions = {
  "plotOptions": {
    "series": {
      "pointWidth": 15,
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      },
      "stacking": "normal"
    }
  },
  "xAxis": {
    "type": "category"    
  },  
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}"
    }
  },
  "tooltip": {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    "shared": false
  },  
  "legend": {
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 5,
    "align": "right",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
  {"color": "#256370", "index": 14}, /*dunkelblau */
  {"color": "#ffbb58", "index": 13}, /*dunkelgelb */
  {"color": "#672773", "index": 12}, /*violett */
  {"color": "#ffda80", "index": 11}, /*hellgelb */
  {"color": "#71a3b5", "index": 10}, /*helllblau */
  {"color": "#73ba7c", "index": 9}, /*hellgrün */
  {"color": "#68411e", "index": 8}, /*dunkelbraun */
  {"color": "#a8c4cb", "index": 7}, /*hellgrau */
  {"color": "#2B0099", "index": 6}, /*rot */
  {"color": "#ff8028", "index": 5}, /*orange */
  {"color": "#b475ab", "index": 4}, /*pink */
  {"color": "#7f5f1a", "index": 3},  /*hellbraun */
  {"color": "#007a2f", "index": 2},  /*dunkelgrün */
  {"color": "#000000", "index": 1},  /*schwarz */
  {"color": "#8a8a8a", "index": 0}  /*grau */
  // {"color": "#8B2223", "index": 14}, /*dunkelrot */
  // {"color": "#DC440E", "index": 13}, /*hellrot */
  // {"color": "#FF8028", "index": 12}, /*dunkelorange */
  // {"color": "#FFBB58", "index": 11}, /*dunkelgelb */
  // {"color": "#FFDA80", "index": 10}, /*hellgelb */
  // {"color": "#007A2F", "index": 9}, /*dunkelgrün */
  // {"color": "#D7E8D2", "index": 8}, /*hellgrün1 */
  // {"color": "#73BA7C", "index": 7}, /*hellgrün2 */
  // {"color": "#2B0099", "index": 6}, /*dunkelblau1 */
  // {"color": "#008AC3", "index": 5}, /*dunkelblau2 */
  // {"color": "#B9CFD7", "index": 4}, /*hellblau */
  // {"color": "#672773", "index": 3},  /*dunkelpink */
  // {"color": "#E7CEE2", "index": 2},  /*hellpink */
  // {"color": "#3A2012", "index": 1},  /*schwarz */
  // {"color": "#C8C8C8", "index": 0}  /*grau */
  ],
  "chart": {
    "renderTo": 'container-I.01.1.0016', 
    "marginBottom": 75,
    "marginTop": 75,
    "type": "column"
  }
};
