// js
// 메뉴 섹션 이동
function Move(sec) {
    var offset = $("#sec" + sec).offset();
    $('html, body').animate({
        scrollTop: offset.top
    }, 800);
}

$(document).ready(function ($) {

    // loading-view
    setTimeout(function () {
        $('.load_view').removeClass('on');
        $('html').css('overflow-y', 'scroll');
    }, 5000)

    //scroll function
    $(window.parent).scroll(function () {
        let ScrollTop = $(this).scrollTop();
        let sec1_con = $('.sec1_con2_wrap').offset().top - 400;
        if (ScrollTop > sec1_con) {
            //num count
            $('.counter').each(function () {
                $(this)
                    .prop('Counter', 0)
                    .animate(
                        {
                            Counter: $(this).text(),
                        },
                        {
                            duration: 4000,
                            easing: 'linear',
                            step: function (now) {
                                $(this).text(Math.ceil(now));
                            },
                        }
                    );
            });
            $(this).off();
        }
    })
    
    // validation
    $('#submit').on("click",function(event){

        if($('#username').val() == ''){
            alert('이름을 입력해주세요')
        }else if($('#usernum').val() == ''){
            alert('연락처를 입력해주세요.');
        }else if($('#useremail').val() == ''){
            alert('이메일을 입력해주세요.');
        }else if($('#contents').val() == ''){
            alert('문의내용을 입력해주세요.');
        }else{
            $(this).attr('type','submit').off(event);
            $('#contact-form').each(function(){
                this.reset();
            })
        }
    })


    //email js
    $(function () {
        emailjs.init("TfrzHIYxiPDnf8Egl");
    })
    window.onload = function () {
        document.getElementById('contact-form').addEventListener('submit', function (event) {
            event.preventDefault();
            // generate a five digit number for the contact_number variable
            this.contact_number.value = Math.random() * 100000 | 0;
            // these IDs from the previous steps
            emailjs.sendForm('sanghee', 'template_l03ed3h', this)
                .then(function () {
                    alert('빠른시일내에 답장 드리겠습니다. \n 포트폴리오를 봐주셔서 감사합니다. \n -양상희');
                }, function (error) {
                    console.log('FAILED...', error);
                });
        });
    }
    
    // topbtn

    $('.top_btn').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });


    //m_nav

    $('.m_btn').click(function(){
        $('.m_nav').addClass('on');
    })
    $('.m_c_btn').click(function(){
        $('.m_nav').removeClass('on');
    })
});
//ready end