
(function(){
    return {
  "plotOptions": {
  	   series: {
          //pointWidth: 5, 
        },
    "column": {
        "colorByPoint": true
    }
  },
 "xAxis": {
 	tickInterval: 1,
    "type": "category",
    "labels": {
      "rotation": 0,
       	step: 1,
       	x: -5,
       	y: 3
    } 
  },
  "yAxis": {
	//"max": 100,
    "labels": {
  		y: 15,
      "format": "{value:,.0f}%"
    }    
  },
  
  series: [{
    name: 'Ländergruppe'
  }],
 "colors": [
  "#b00000", /*Schweiz*/
  "#672773", /*Deutschland*/
  "#007a2f", /*Italien*/
  "#fabd24", /*Türkei*/
  "#b475ab", /*EU-17 & EFTA*/
  "#71a3b5", /*EU-Ost */
  "#b9cfd7", /*Balkan*/
  "#ff8028", /*Mittel- & Südamerika */
  "#73ba7c", /*Arabische Länder */
  "#9f7c5a", /*Afrikanische Länder*/
  "#999999", /*Übrige Länder*/
  ],
  "legend": {
    "enabled": false,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
   tooltip: {
    headerFormat: '<span style="font-size: 10px">{series.name}</span><br/>',
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {point.name}: <b>{point.y:,.1f}%</b><br/>',
    "shared": false
  },
  "chart": {      
    "type": "column",
    "inverted": true,
    //spacing: [15,3,8,3] /*top, right, bottom and left */	
  }
}
}());



