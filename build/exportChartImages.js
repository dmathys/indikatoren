const exporter = require('highcharts-export-server');
var execfile = require("execfile");
var fs = require('fs');
var path = require('path');
var keysFilePath = path.join(__dirname, '../metadata/all/kuerzelById.js');
var ctx = execfile(keysFilePath);
var kuerzelById = ctx.kuerzelById;

var chartDetails = [];

console.log('Deleting previous svg files...');
var rimraf = require("rimraf");
rimraf('images/indikatorenset/*', function(error) {
    if (error) { throw error; }
    rimraf('images/portal/*', function(error) {
        if (error) { throw error; }
        go();
    });
});



function go(){
    var views = [true, false];
    views.forEach(function(view){
        console.log('Creating array entries for indikatorensetView=' + view);
        Object.keys(kuerzelById).forEach(function(chartId) {
            chartDetails.push(createPathArray(chartId, view));
        });
    });
    
    exporter.initPool(
        {
            maxWorkers: 1,
            initialWorkers: 1,
            workLimit: 10
        });
    createSvgImages(chartDetails);
}


function createPathArray(chartId, view){
    var imagePath = (view) ? 'images/indikatorenset/' : 'images/portal/';
    var configPath = (view) ? 'charts/configs/indikatorenset/' : 'charts/configs/portal/';
    var infilePath = path.join(__dirname, '../' + configPath + chartId + '.json');
    var outfilePath = path.join(__dirname, '../' + imagePath + chartId + '.svg');
    
    var configFile = fs.readFileSync(infilePath, 'utf8');
    var config = deserialize(configFile);
    
    return {config: config, outfilePath: outfilePath};
}


function createSvgImages(chartDetails){
    if (chartDetails.length > 0){
        var chartEntry = chartDetails.pop();     
        var exportSettings = {
            type: 'svg',
            options: chartEntry.config,
            outfile: chartEntry.outfilePath
        };

        exporter.export(exportSettings, function (err, res) {
            if (err) {throw err};
            //The export result is now in res.
            //If the output is not PDF or SVG, it will be base64 encoded (res.data).
            //If the output is a PDF or SVG, it will contain a filename (res.filename).
            console.log('File created: ' + res.filename);
            createSvgImages(chartDetails);
        });
    }
    else {
        console.log('...done!');
        exporter.killPool();
        process.exit();
    }
}


//from https://github.com/yahoo/serialize-javascript
function deserialize(serializedJavascript){
  return eval('(' + serializedJavascript + ')');
}
