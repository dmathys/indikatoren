(function(){
    return {
   chart:{
   	spacing: [10,3,3,3], 
   	//marginRight: 100,
   },
   "yAxis": {
      "labels": {
      "format": "{value:,.0f} m²",
    }
  },
  "xAxis": {
  },
  "series": [
    {
      marker: {
        "symbol": "circle",
        "enabled": true
      },     
      "color": "#83522E",
      "dataLabels": {
        style: {"fontSize": "12px", "fontWeight": "normal"}, 
        "enabled": true,
        allowOverlap: true,
        //display label at first or last point: https://gist.github.com/jeremywrowe/3506869
        formatter: function() {
          var first = this.series.data[0];
          var last  = this.series.data[this.series.data.length - 1];
          if (this.point.y === first.y || this.point.y === last.y ) {
            return this.point.x + ":<br/>" + Highcharts.numberFormat(this.point.y, 1, ",", " ") + "";
          }
          return "";
        }
      },
    }
  ],
  "tooltip": {
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f} m²</b><br/>',
    "shared": false
  },
  "plotOptions": {
    /*"series": {
      "dataLabels": {
        "enabled": true,
        "allowOverlap": true,
          y: 30,
          //display label at first or last point: https://gist.github.com/jeremywrowe/3506869
          formatter: function() {
            var last = this.series.data[this.series.data.length - 1];
            var first = this.series.data[0];
            if (this.point.category === first.category && this.point.y === first.y || this.point.category === last.category && this.point.y === last.y ) {
              return Highcharts.numberFormat(this.point.y, 1, ",", " ");
            }
            return "";
          }
      }
    }*/
  }
}
}());
