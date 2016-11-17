chartOptions['Test_LP.1.02.2'] = {
  "plotOptions": {

    "series": {      
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      }
    },
  },
  "xAxis": {
    "tickInterval": 1,
	"type": "year"    
  },
  "yAxis": {
    "labels": {
      "formatter": function(){
        return Highcharts.numberFormat((this.value),0);                
      },      
    }    
  },
  "series": [
    {
      "color": "#7B241C  "       
    },
	 {
      "color": "#6C3483"       
    },
	 {
      "color": "#2E86C1"       
    },
	 {
      "color": "#B7950B"       
    },
	 {
      "color": "#BA4A00"       
    },
    {
      "color": "#1C2833"
    }
  ],
  "legend": {
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 5,
    "align": "right",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "tooltip": {
    "pointFormatter": function(){
      return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y*100),1) + '%</b><br/>'
    },   
    "shared": false
  },  
  "chart": {
	"width": 1000,
    "marginBottom": 75,
    "marginTop": 75,
    "type": "column"
  }
};
