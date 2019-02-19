(function() {
    $.get("https://api.github.com/users/chanLily/repos?per_page=100",
        function(result, state) {
            new Vue({
                el:'#vue_det',
                data:{//data就是数据，主要绑定的数据
                    data:result
                }
            });
        })
})();