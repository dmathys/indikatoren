<<<<<<< HEAD
 
(function(){
    return {
   "yAxis": {
    "labels": {
      "format": "{value:,.0f}",
    }
  },
  "xAxis": {
	 "tickInterval": 5,
  },
  "series": [
    {
      "marker": {
        "symbol": "circle",
        "enabled": true
      },     
      "color": "#8b2223"
    }
  ],
  "tooltip": {
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y: .0f}</b><br/>',
    "shared": false
  },
  "plotOptions": {
      "series": {
        "dataLabels": {
          "enabled": true,
          "allowOverlap": true,
            y: -10,
            //display label at first or last point: https://gist.github.com/jeremywrowe/3506869
            formatter: function() {
              var last = this.series.data[this.series.data.length - 1];
              var first = this.series.data[0];
              if (this.point.category === first.category && this.point.y === first.y || this.point.category === last.category && this.point.y === last.y ) {
                 return Highcharts.numberFormat(this.point.y, 0, ",", " ");
              }
              return "";
            }
        }
      }
    }
};
}());
=======
/*
(function(){
    return {
  "chart": {
  }
  }
}());
*/
>>>>>>> c29a0183ef43658375c671143f8ada744e5ea7db
