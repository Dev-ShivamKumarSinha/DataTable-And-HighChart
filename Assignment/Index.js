//Drwaing Export button
Highcharts.SVGRenderer.prototype.symbols.download = function (x, y, w, h) {
    var path = [
        // Arrow stem
        'M', x + w * 0.5, y,
        'L', x + w * 0.5, y + h * 0.7,
        // Arrow head
        'M', x + w * 0.3, y + h * 0.5,
        'L', x + w * 0.5, y + h * 0.7,
        'L', x + w * 0.7, y + h * 0.5,
        // Box
        'M', x, y + h * 0.9,
        'L', x, y + h,
        'L', x + w, y + h,
        'L', x + w, y + h * 0.9
    ];
    return path;
};

//Class for storing required data for table from JSON input
class ParsedJson{
    constructor(name, dups, gc, length, sequences) {
        this.name = name;
        this.dups = dups;
        this.gc = gc;
        this.length = length;
        this.sequences = sequences;
      }
}

//Class for initializing the DataTable and HighChart
class Assignment{
    constructor(){
        console.log("Assignment Initialized");
    }

    //DataTable Function
    dataTable(){
                
        //Initializing DataTable
        $('#example').DataTable( {
            "bPaginate": false,
            "bLengthChange": false,
            "bFilter": false,
            "bInfo": false,
            "bAutoWidth": false,
            "data": parsedJson,
            columns: [
                { data: "name"},
                { data: "dups"},
                { data: "gc" },
                { data: "length" },
                { data: "sequences"}
            ]
        });

        //highChart function is called from within the table funciton
        this.highcharts();
    }

    //HighChart Function
    highcharts(){    
        //Initializing HighCHart
        Highcharts.chart('container', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'FastQC: Sequence Counts'
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: xAxisCat
            },
            yAxis: {
                min: 0,
                tickInterval: 50000,
                title: {
                    text: 'Number of Reads'
                },
                labels: {
                    rotation: 0,
                    style: {
                        fontSize: '11px'
                    }
                },
            },
            legend: {
                reversed: true
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            series: [{
                name: 'Duplicate Reads',
                data: dr,
                color: '#434348'
            },{
                name: 'Unique Reads',
                data: ur,
                color: '#7cb5ec'
            } ],
            exporting: {
                buttons: {
                    contextButton: {
                        symbol: 'download',
                        text: 'Export Plot'
                    }
                }
            }
        });   
    }
}





