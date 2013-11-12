var duoshuoQuery = {short_name:"thx"};

KISSY.use('node', function(S) {
    var toggler = S.one('#J_toggler')

    if (toggler.outerWidth() > 0) {
        toggler.on('click', function() {
            var page = S.one('#page')

            page.css(
                'left',
                parseInt(page.css('left'), 10) > 0 ? 0 : S.one('#aside').outerWidth()
            )
        })
    }

    S.getScript('http://static.duoshuo.com/embed.js')
})