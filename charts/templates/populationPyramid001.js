/*
    global Highcharts
*/

(function(){
    return {
        chart: {
            type: 'bar', 
            borderColor: "#fbfbfb", 
            backgroundColor: "#fbfbfb",
            width: 485,
            height: 415,        
            spacingBottom: 30,
            style: {
                fontFamily: "Arial"
            },
            zoomType: "xy",
            events: {
              load: function(){
                this.credits.element.onclick = function() {};
                
                //create symmetric axis
            	var createSymmetricAxis = function(axis){
                    var absMax = Math.max(Math.abs(axis.min), Math.abs(axis.max));
                    axis.setExtremes(-absMax, absMax);
            	};
        	    createSymmetricAxis(this.yAxis[0]);
                
                //for top-left legends with no x defined: move legend to x position of first yAxis
                if (this['legend']['options']['align'] == 'left' && this['legend']['options']['verticalAlign'] == 'top' && this['legend']['options']['x'] == 0){
                  this.update(
                    {
                      legend: {
                        x: this.yAxis[0].left - this.spacingBox.x - this.legend.padding
                      }
                    }
                  );
                }
              }
            }, 
        },    
        plotOptions: {
            series: {
            	stacking: 'normal',
                dataLabels: {
                    style: {
                        fontSize: "10px"
                    }
                }
            }
        },
        title: {
            style: {
                fontSize: "14px",
                fontWeight: "bold",
                color: "#000000"
            },
            align: "left"
        },
        subtitle: {
            style: {
                fontSize: "12px",
                fontWeight: "normal",
                fontFamily: "Arial",
                color: "#000000"
            },
            text: "",
            align: "left"
        },        
        yAxis: {
            title: {
                style: {
                    color: "#000000",
                    fontSize: null
                },
                text: null
            },
            labels: {
                style: {
                	color: "#000000"
                }, 
                //Display absolute value
                formatter: function () {
                    return Math.abs(this.value);
                }
            },
         /*xAxis:[{
                        title: {
                            text: null
                        },
                        "labels": {
                            "style": {
                                "color": "#000000"
                            }
                        },
                         plotLines: [{
                                value: 0,
                                color: 'white',
                                width: 1,
                                zIndex: 4
                            }],
                }],*/
        },   
    	navigation: {
    		menuItemStyle: {
    			fontFamily: Highcharts.SVGRenderer.prototype.getStyle().fontFamily,
    			padding: '2px 10px'
    		}
    	},
        credits: {
            enabled: true,
            style: {
                color: "#000000",
                fontSize: "10px",
                cursor: "default"
            },
            position: {
                align: "left",
                verticalAlign: "bottom",
                x: 10
            }
        },
        legend: {
        	symbolRadius: 0
        },
        tooltip: {
            pointFormatter: function () {
                return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>'+ Math.abs(this.y) + '</b><br/>';
            }
        },
        customFunctions: {
        }
	};
}());