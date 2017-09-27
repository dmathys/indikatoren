(function(){
    return {
      "xAxis": {
        "labels": {
        	step: 1,
        	overflow: "justify",
            "formatter": function() {
            	return this.value;
            }
        } 
      },  
      "tooltip": {
        valueDecimals: 1
      },  
      "series": [
        {"color": "#C8C8C8", index: 5, legendIndex: 5}, /*grau*/
        {"color": "#CD9C00", index: 4, legendIndex: 4}, /*dunkelrot*/
        {"color": "#FABD24", index: 3, legendIndex: 3}, /*hellrot*/
        {"color": "#73B97C", index: 2, legendIndex: 2}, /*hellgrün*/
        {"color": "#007A2F", index: 1, legendIndex: 1} /*dunkelgrün*/
      ],
  "chart": {      
     "inverted": true,
     "width":665
  },
    };
}());