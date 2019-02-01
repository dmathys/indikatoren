(function(){
    return {
      legend:{
      	style: {
		fontSize: "12px"
		}
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
           '#FABD24', 
           '#68AB2B',
           '#C4AB91',
           '#246370',
           '#008AC3',
           '#FFDA80', 
           '#BAA85A',
           '#FF8028',
           '#FABD24',
           '#B00000',
           
           
        
        ],
		/*dataLabels: {
		                enabled: true,
		                format: '{point.percentage:.1f}',
		                distance: 1,
		                style: {
		                    color: 'black',
		                    textOutline: "0px black", 
                        fontWeight: "normal", 
                        fontSize: "12px"
		                }
	      }*/
      }
      }
    
    };
}());