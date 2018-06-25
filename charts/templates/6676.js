(function(){
    return {
      legend:{
        labelFormatter: function(){
            return this.name.replace(" ", "<br/>");
        },  
      	style: {
		    fontSize: "12px"
		}
      },
      "data":{
      	"switchRowsAndColumns": true
      },
      "series": [ 
          {
              "name": "Anzahl"
          }        
      ],
    	"tooltip": {
    		"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f} ({point.percentage:,.1f}%)</b><br/>',
        "shared": false
      },
      plotOptions: {
        pie: {
         colors: [
           '#B00000', 
           '#FF8028',
           '#FABD24',
           '#E6E600',
           "#8AB77D",
           '#68AB2B',
           '#007A2F',
           '#A8C3CA', 
           '#008AC3',
           '#3C3C3C',
           '#923F8D',
           ],
		dataLabels: {
		                enabled: false,
		                format: '{point.percentage:.1f}%',
		                distance: 20,
		                style: {
		                    color: 'black',
		                    textOutline: "0px black", 
                        fontWeight: "normal", 
                        fontSize: "12px"
		                }
	      }
      }
    }
    };
}());
