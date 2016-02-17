$(function(){
    var regions = null;
    var houseprices = null;

    accounting.settings = {
    	currency: {
    		symbol : "£",   // default currency symbol is '$'
    		format: "%s%v", // controls output: %s = symbol, %v = value/number (can be object: see below)
    		decimal : ".",  // decimal point separator
    		thousand: ",",  // thousands separator
    		precision : 2   // decimal places
    	},
    	number: {
    		precision : 0,  // default precision on numbers is 0
    		thousand: ",",
    		decimal : "."
    	}
    };

    $.get('/regions')
        .success(function(response){
            regions = response.data;
            $('select[name="region"]').empty();
            $.each(regions,function(index,val){
                $('select[name="region"]')
                    .append('<option value="' + val.Region + '">' + val.Name + '</option>');
            });
            var selRegion = $('select[name="region"]').val();
            updateTable(selRegion);
        });

    $('select[name="region"]').change(function(e){
            e.preventDefault();
            var selRegion = $('select[name="region"]').val();
            updateTable(selRegion);
        }
    );


    function updateTable(selRegion){
        $.get('/terraced/' + selRegion)
            .success(function(response){
                houseprices = response.data;
                regionName = $('select[name="region"] option[value="' + selRegion +'"]').text();
                $('table[name="houseprices"] tbody').empty();
                $.each(houseprices,function(index,val){
                    $('table[name="houseprices"] tbody')
                        .append('<tr><td>' + val.Year + '</td><td>'
                            + val.Quater +  '</td><td>'
                            + regionName + '</td><td>'
                            + accounting.formatMoney(val[selRegion]) + '</td></tr>');
                });
                updateGraph( selRegion, regionName , houseprices );
            });
    }

    function updateGraph( selRegion , regionName, houseprices ){
        var ctx = document.getElementById('priceChart').getContext("2d");
        var arrlabels = $.map(houseprices,function(val,index){
            return val['Year'];
        });
        var arrData = $.map(houseprices,function(val,index){
            return val[selRegion];
        });
        var data = {
            labels : arrlabels,
            datasets: [
                {
                    label: regionName + ' House Prices Over Time',
                    fillColor: "rgba(180,180,255,0.9)",
                    data: arrData
                }
            ]
        };
        var myChart = new Chart(ctx).Bar(data,{
            animation : true,
            scaleShowGridLines : false,
            scaleGridLineColor : "rgba(0,0,0,.05)",
            scaleGridLineWidth : 1,
            scaleShowHorizontalLines: true,
            scaleShowVerticalLines: false,
            maintainAspectRatio: false,
            barShowStroke : false,
            yAxisMinimumInterval : 10000,
            scaleStartValue: 0,
            scaleFontSize: 10,
            scaleFontStyle: "normal",
            scaleFontColor: "#000",
            responsive: true,
            datasetStroke : false,
            barShowStroke: false,
            datasetStrokeWidth : 0,
            datasetFill : true,
            showTooltips: true,
            showXLabels: 4
        });
    }

});
