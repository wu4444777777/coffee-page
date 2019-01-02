$('.tn-midSearch input[type="text"]').suggestion({
    url:'http://suggestion.baidu.com/su',
    FieldName:'wd',
    jsonp:'cb',
    onCallback:function(item,data){
        var list = data['s'];
        item.empty();
        for(var i=0;i<list.length;i++){
            item.append('<li>'+list[i]+'</li>');
        }
    }
});