chartOptions["Urbanitaet_LP.5.16.1"] = {
  "xAxis": {
    "tickInterval":2
  },
  "yAxis": {
    "min": 0, 
    "max": 300000, 
	  "labels": {
	  	"format": "{value:,.0f}"
	}
  },	
  "tooltip": {
    "shared": false, 
	  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
 "series": [
    {"color": "#b00000",
       "marker": {
        "enabled": true
    }
    }, /*rot*/ 
    {"color": "#71a3b5"}, /*blau*/
  	{"color": "#000000"} /*schwarz*/
  ],
  "legend": {
    "enabled": false,
    "x": 20,
    "y": 35,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "plotOptions": {
    "line": {
      "marker":{
        "enabled": false,
        "symbol": "circle",
      }, 
    },
     "series": {
      "dataLabels": {
        "enabled": true,
        "allowOverlap": true,
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