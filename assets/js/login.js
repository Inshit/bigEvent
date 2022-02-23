$(function() {
    //点击去注册账号的连接
    $('#link_reg').on('click', function() {
        $('.login-box').hide();
        $('.reg-box').show();
    })
    var layer = layui.layer;
    //点击去登录的连接
    $('#link_login').on('click', function() {
            $('.login-box').show();
            $('.reg-box').hide();
        })
        //监听组测表单的提交时间
    $('#form-reg').on("submit", function(e) {
        e.preventDefault(); //禁止默认提交行为
        //ajax的请求
        $.post('', { username: $('#form-reg[name=username]').val, password: $('#form-reg[name=password]').val }, function(res) {
            if (res.status !== 0) {
                return layer.msg(res.message);
            } else {
                layer.msg('注册成功！');
                $('#link_login').click();
            }
        })

    })

})