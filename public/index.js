$(document).ready(() => {
    $('.privacy').css('display', 'none');
    $('.termItem').click(() => {
        $('.privacyItem').removeClass('active');
        $('.termItem').addClass('active');
        $('.privacy').css('display', 'none');
        $('.term').css('display', 'block');
    });
    $('.agree').click(() => {
        if (document.getElementsByClassName("agree")[0].getAttribute("isChecked") == "true") {
            document.getElementsByClassName("agree")[0].setAttribute("isChecked", "false");
        } else {
            document.getElementsByClassName("agree")[0].setAttribute("isChecked", "true");
        }
    })
    $('.privacyItem').click(() => {
        $('.termItem').removeClass('active');
        $('.privacyItem').addClass('active');
        $('.term').css('display', 'none');
        $('.privacy').css('display', 'block');
    });
    $('.submit').click(() => {
        let firstName = $('.firstName').val();
        let lastName = $('.lastName').val();
        let email = $('.email').val();
        let agree = document.getElementsByClassName("agree")[0].getAttribute("isChecked");
        console.log(agree);
        if (firstName && lastName && email && agree=="true") {
            $('.confirmation').attr('action', function(i, value) {
                return value + "&firstName="+encodeURIComponent(firstName)+
                    "&lastName=" + encodeURIComponent(lastName)+ "&email=" + encodeURIComponent(email);
            });
            $('#firstName').val(firstName);
            $('#lastName').val(lastName);
            $('#email').val(email);
            
            $('.confirmation').submit();
            
        } else {
            $('.error').css('display', 'block');
        }
    });
    $('.error').css('display', 'none');
});