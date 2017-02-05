var stream
__weex_define__('@weex-temp/api', function (__weex_require__) {
    stream = __weex_require__('@weex-module/stream')
});

var apiURL = {
        baseURL:'https://api.leancloud.cn/1.1/classes',
        jokeURL:'/joke',
        jokecommentURL:'/jokecomment',
        collectionURL:'/collection',
        userURL:'/user'
};

var getData  =  function(url,callback){
    stream.fetch({
        method:'GET',
        url:url,
        headers:{
            'X-LC-Id':'zksrg6fpR18GjAsv0eHPs4Kz-gzGzoHsz',
            'X-LC-Key':' XfkYkvCvsJ1FkhEqzdTsMnNC',
            'Content-Type':'application/json'
        }
    },function(ret){
        var data = JSON.parse(ret.data);
        callback(data);
    });
};

exports.getLC = function(url,callback){
        getData(url,callback);
};


