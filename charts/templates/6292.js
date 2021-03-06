(function(){
    return {
      chart: {
        inverted: true,
        width: 665
      },
      "legend": {
        "enabled": true,
        "layout": "vertical",
        "verticalAlign": "middle",
        "align": "right",
    	  //"y": 40,
    	  //itemWidth: 90, 
        "itemStyle": {
          "fontWeight": "normal"
        }
      },
      xAxis: {
        labels: {
          y: 3,
          formatter: function(a, b, c) {
              //console.log(this);
              //add sum of observations of visible series to the axis label
              var allVisibleSeries = this.chart.series.filter(function(val, i, arr){
                  return val.visible;
              });
              var indexOfCurrentValue = this.axis.names.indexOf(this.value);
              var sum = allVisibleSeries.reduce(function(accumulator, series, index, arr){
                  return accumulator + series.yData[indexOfCurrentValue];
              }, 0);
              //use N if all series are visible, otherwise use n
              var nString = (this.chart.series.length == allVisibleSeries.length && this.value == 'Total') ? 'N=' : 'n='; 
          	return this.value + ' (' + nString + sum + ')';
          }
        }
      },
      yAxis: {
        tickInterval: null, 
        reversedStacks: false,
        labels: {
          y: 12,
        }
      },
      "series": [
      {"color": "#007a2f", "index": 0, "legendIndex":0}, /*grün dunkel2*/
      {"color": "#44ab2b", "index": 1, "legendIndex":1}, /*grün mittel*/
      {"color": "#73ba7c", "index": 2, "legendIndex":2}, /*grün dunkel1*/
      {"color": "#d7e9d2", "index": 3, "legendIndex":3}, /*grün hell*/
      {"color": "#b9cfd7", "index": 4, "legendIndex":4}, /*blau hell */
      {"color": "#71a3b5", "index": 5, "legendIndex":5}, /*blau dunkel */
      {"color": "#ffbb58", "index": 6, "legendIndex":6}, /*orange hell */
      {"color": "#ff8028", "index": 7, "legendIndex":7}, /*orange dunkel */
      {"color": "#dc440e", "index": 8, "legendIndex":8}, /*rot hell */
      {"color": "#b00000", "index": 9, "legendIndex":9} /*rot dunkel */
      ],
    }
}());
