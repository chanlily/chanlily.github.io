(function() {
    $.get("https://api.github.com/users/chanLily/repos?per_page=100",
        function(result, state) {
            new Vue({
                el:'#vue_det',
                data:{//data�������ݣ���Ҫ�󶨵�����
                    data:result
                }
            });
        })
})();