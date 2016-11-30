chartOptions["Urbanitaet_LP.5.16.1"] = {
   "yAxis": {
	"min": 30,
	"max": 50,
    "labels": {
	  useHTML : true,
      "format": "{value:,.0f} m<sup>2</sup>",
    }
  },
  "xAxis": {
    "tickInterval": 2,
	"labels": {
		"rotation": -45
		}
  },
  "series": [
    {

      "marker": {
        "symbol": "circle",
        "enabled": true
      },     
      "color": "#5592d5",		
    }
  ],
  "tooltip": {
	useHTML : true,
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}m<sup>2</sup></b><br/>',
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
            var last  = this.series.data[this.series.data.length - 1];
            if (this.point.category === last.category  && this.point.y === last.y) {
              return this.series.name;
            }
            return "";
          }
      }
    }
  }
};
 
