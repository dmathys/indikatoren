/*
    global Highcharts
*/

(function(){
    return {
        data: {
            parsed: function (columns) {
                //Negate the numbers in the the 2nd column to create the left side of the population pyramid
                var negateNumbersInColumn = function(columnIndex){
                    Highcharts.each(columns, function(column, i, c) {
                        if (i == columnIndex){
                            Highcharts.each(column, function(item, j, v){
                                if (typeof(item) == 'number'){
                                    v[j] = -v[j];
                                }
                            });
                        }
                    });
                };
                negateNumbersInColumn(1);
            }     
        },
        yAxis:[{
            //max: 7,
            tickInterval: 1,
            min:0,
            //offset: -5,
            gridLineColor: '#B9CFD7',
            gridLineWidth: 0.5,
            title: {
                text: null
            },
            labels: {
                formatter: function () {
                	return Highcharts.numberFormat(Math.abs(this.value), 0, ",", " ")+"%";
            	},
                style: {
                    color: "#000000", 
                    fontSize: '9px'
                }
            },
            plotLines: [{
                value: 0,
                color: 'white',
                width: 1,
                zIndex: 4
            }],
            //create symmetric xAxis
            events: {
                afterSetExtremes: function(args){
            	    this.chart.options.customFunctions.createSymmetricAxis(this);
                }, 
            }
        }],
        xAxis: [{
                reversed: false,
                type: 'category',
                labels: {
    	        	step: 1,
	                style: {
	                    color: "#000000", 
	                    fontSize: '9px'
	                }
                }, 
                tickLength: 0, 
	            title: {
	                style: {
	                    color: "#000000"
	                }
	            },
	            tickColor: "#FFFFFF",
                lineColor: '#B9CFD7',
                lineWidth: 0.5,
            }, 
            { // mirror axis on right side
                type: 'category',
                visible: false,
                opposite: true,
                reversed: false,
                linkedTo: 0
            }
        ],                
		series: [
            {
             color: "#661200", // Männer
              //borderWidth: 0,
              //pointWidth: 15
            }, 
            {
             color: "#dc440e", //Frauen
              //borderWidth: 0,
              //pointWidth: 15
            },
             /*{
              color: "#000000", //schwarz
              //borderWidth: 0,
              //pointWidth: 15
            }*/
	    ],
    "legend": {
        "enabled": true,
        "layout": "horizontal",
        "verticalAlign": "top",
        "align": "center",
      },
        plotOptions: {
            series: {
	            borderWidth: 0.2,
            }
        },
        tooltip: {
            pointFormatter: function () {
                return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>'+ Highcharts.numberFormat( Math.abs(this.y),1, ",", " ") + '%</b><br/>';
            }
        },
	};
}());