/*
* todo
* 1.1 动画效果
* 3. 增加下载PDF
* 4. 部署流程、压缩图片等
* */


$(document).ready(function() {
    /**
     * 加载动画
     * */
    var setAnimate = function (el) {
        var inWindow = $(el).offset().top - ($(window).height() + $(window).scrollTop()) <= 0;
        if(inWindow) {
            var classStyle = $(el).attr('data-animate') + ' animated';
            $(el).addClass(classStyle);
        }
    };

    $(document).on('scroll', function () {
        $('[data-animate]').each(function (k, v) {
            setAnimate(v);
        });
    });

    /**
     * 幻灯片
     */
    var mpParams = {
        delegate: 'a',
        gallery: {
            enabled: true,
            tCounter: '<span class="mfp-counter" style="width: 200px;text-align: right;">%curr% / %total%张</span>' // markup of counter
        },
        image: {
            verticalFit: true,
            titleSrc: function(item) {
                return  item.el.attr('title');
            }
        },
        type: 'image',
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        zoom: {
            enabled: true,
            duration: 300,
            opener: function(element) {
                return element;
            }
        }
    };
    $('#works .item').each(function(k, v) {
        $(v).magnificPopup(mpParams);

    });
    $('#about li').magnificPopup(mpParams);


    // 查看更多
    var $experience = $('#experience'),
        $experienceMore = $experience.find('dl:not(:first)');

    $experienceMore.hide();
    $experience.find('.more').on('click', function () {
        $experienceMore.fadeIn('fast');
        $(this).fadeOut('fast');
    });
});