chartOptions["Chancengleichheit_LP.7.25.2"] = {
   "yAxis": {
	"min": 20,
    "labels": {
	  useHTML : true,
      "format": "{value:,.0f}%",
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
      "color": "#376092"
    },
    {
      "marker": {
        "symbol": "circle",
        "enabled": true
      },      
      "color": "#FABD24"
    }
  ],
  "tooltip": {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}%</b><br/>',
  },
  "plotOptions": {
    "series": {
      "dataLabels": {
        "enabled": true,
        "allowOverlap": true,
		 y: -40,
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
 
