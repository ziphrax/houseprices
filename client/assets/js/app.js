$(function(){
    var regions = null;

    $.get('http://127.0.0.1:3000/regions').success(function(response){
        regions = response.data;
        $('select[name="region"]').empty();
        $.each(regions,function(index,val){
            $('select[name="region"]').append('<option value="' + val.Region + '">' + val.Name + '</option>');
        });

    })

});
