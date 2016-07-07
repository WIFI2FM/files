function slickADSLREDPromoTurbo() {
    $('.ADSLREDPromoTurbo').slick({
        arrows : true,
        dots : true,
        rtl : true,
        slidesToShow : 4,
        slidesToScroll : 1,
        rtl : true,
        responsive : [{
            breakpoint : 769,
            settings : {
                slidesToShow : 3,
                slidesToScroll : 1
            }
        }, {
            breakpoint : 641,
            settings : {
                slidesToShow : 2,
                slidesToScroll : 1
            }
        }, {
            breakpoint : 481,
            settings : {
                slidesToShow : 1,
                slidesToScroll : 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });
}

function slickADSLREDPromoUnlimited() {
    $('.ADSLREDPromoUnlimited').slick({
        arrows : true,
        dots : true,
        rtl : true,
        slidesToShow : 4,
        slidesToScroll : 1,
        rtl : true,
        responsive : [{
            breakpoint : 769,
            settings : {
                slidesToShow : 3,
                slidesToScroll : 1
            }
        }, {
            breakpoint : 641,
            settings : {
                slidesToShow : 2,
                slidesToScroll : 1
            }
        }, {
            breakpoint : 481,
            settings : {
                slidesToShow : 1,
                slidesToScroll : 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });
}

function slickADSLNEWPromoTurbo() {
    $('.ADSLNEWPromoTurbo').slick({
        arrows : true,
        dots : true,
        rtl : true,
        slidesToShow : 4,
        slidesToScroll : 1,
        rtl : true,
        responsive : [{
            breakpoint : 769,
            settings : {
                slidesToShow : 3,
                slidesToScroll : 1
            }
        }, {
            breakpoint : 641,
            settings : {
                slidesToShow : 2,
                slidesToScroll : 1
            }
        }, {
            breakpoint : 481,
            settings : {
                slidesToShow : 1,
                slidesToScroll : 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });
}

function slickADSLNEWPromoUnlimited() {
    $('.ADSLNEWPromoUnlimited').slick({
        arrows : true,
        dots : true,
        rtl : true,
        slidesToShow : 4,
        slidesToScroll : 1,
        rtl : true,
        responsive : [{
            breakpoint : 769,
            settings : {
                slidesToShow : 3,
                slidesToScroll : 1
            }
        }, {
            breakpoint : 641,
            settings : {
                slidesToShow : 2,
                slidesToScroll : 1
            }
        }, {
            breakpoint : 481,
            settings : {
                slidesToShow : 1,
                slidesToScroll : 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });
}

function slickADSLNEWPromo9MonthTurbo() {
    $('.ADSLNEWPromo9MonthTurbo').slick({
        arrows : true,
        dots : true,
        rtl : true,
        slidesToShow : 4,
        slidesToScroll : 1,
        rtl : true,
        responsive : [{
            breakpoint : 769,
            settings : {
                slidesToShow : 3,
                slidesToScroll : 1
            }
        }, {
            breakpoint : 641,
            settings : {
                slidesToShow : 2,
                slidesToScroll : 1
            }
        }, {
            breakpoint : 481,
            settings : {
                slidesToShow : 1,
                slidesToScroll : 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });
}

function slickADSLNEWPromo9MonthUnlimited() {
    $('.ADSLNEWPromo9MonthUnlimited').slick({
        arrows : true,
        dots : true,
        slidesToShow : 4,
        slidesToScroll : 1,
        rtl : true,
        responsive : [{
            breakpoint : 769,
            settings : {
                slidesToShow : 3,
                slidesToScroll : 1
            }
        }, {
            breakpoint : 641,
            settings : {
                slidesToShow : 2,
                slidesToScroll : 1
            }
        }, {
            breakpoint : 481,
            settings : {
                slidesToShow : 1,
                slidesToScroll : 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });
}


$(document).ready(function() {

    $('.ADSL_Banner').slick({
        lazyLoad : 'ondemand',
        dots : true,
        slidesToShow : 1,
        slidesToScroll : 1,
        rtl : true,
        arrows : false

    });

    slickADSLNEWPromo9MonthTurbo();

    $('#Summerpromo').click(function() {
        $('.ADSLNEWPromoBOX').click();
    });

    $('#Newpricesbanner').click(function() {
        $('.ADSLREDPromoBOX').click();
    });
    $('#9monthsbanner').click(function() {
        $('.ADSLNEWPromo9MonthBOX').click();
    });

    var referrer = document.referrer;

    if (referrer != null && referrer.indexOf("pkgId") != -1) {
        pkgId = referrer.substring(referrer.indexOf("pkgId=") + 6, referrer.length);
        document.getElementById('ADSL_SUB_FRAME_ID').src = 'http://www.vodafone.com.eg/adsl/subscribeToADSL.do?lang=ar&pkgId=' + pkgId;
        showCheckAvailabiltyoverlay('check_availabilty');
    }

    $('.ADSLBox').click(function() {
        $('.ADSLBox').removeClass('ADSLBoxSelected');
        $(this).addClass('ADSLBoxSelected');
    });

    slickADSLNEWPromo9MonthTurbo();

    $('.ADSLPromoSwicherTurbo').click(function() {

        $(this).parent().find('.ADSLPromoSwichBTN').animate({
            right : "2%"
        }, 200);

    });

    $('.ADSLPromoSwicherUnlimited').click(function() {

        $(this).parent().find('.ADSLPromoSwichBTN').animate({
            right : "52%"
        }, 200);

    });

    $('.ADSLPromoREDTurbo').click(function() {
        $('.ADSLREDPromoTurbo').css('display', 'block');
        $('.ADSLREDPromoUnlimited').css('display', 'none');

        $('.ADSLTitleDescForREDUnlimited').css('display', 'none');
        $('.ADSLTitleDescForREDTurbo').css('display', 'block');

        if (document.documentElement.clientWidth > 768) {
            $('.ADSLNEWPromo9Month').css('padding-bottom', '0px');
        }
        slickADSLREDPromoTurbo();

    });

    $('.ADSLPromoREDUnlimited').click(function() {
        $('.ADSLREDPromoTurbo').css('display', 'none');
        $('.ADSLREDPromoUnlimited').css('display', 'block');

        $('.ADSLTitleDescForREDUnlimited').css('display', 'block');
        $('.ADSLTitleDescForREDTurbo').css('display', 'none');

        $('.ADSLREDPromo').css('padding-bottom', '40px');

        slickADSLREDPromoUnlimited();
    });

    $('.ADSLPromoNEWTurbo').click(function() {
        $('.ADSLNEWPromoTurbo').css('display', 'block');
        $('.ADSLNEWPromoUnlimited').css('display', 'none');

        $('.ADSLTitleDescForNEWPromoUnlimited').css('display', 'none');
        $('.ADSLTitleDescForNEWPromoTurbo').css('display', 'block');

        if (document.documentElement.clientWidth > 768) {
            $('.ADSLNEWPromo9Month').css('padding-bottom', '0px');
        }

        slickADSLNEWPromoTurbo();

    });

    $('.ADSLPromoNEWUnlimited').click(function() {
        $('.ADSLNEWPromoTurbo').css('display', 'none');
        $('.ADSLNEWPromoUnlimited').css('display', 'block');

        $('.ADSLTitleDescForNEWPromoUnlimited').css('display', 'block');
        $('.ADSLTitleDescForNEWPromoTurbo').css('display', 'none');

        $('.ADSLNEWPromo').css('padding-bottom', '40px');

        slickADSLNEWPromoUnlimited();
    });

    $('.ADSLPromoNEW9MonthTurbo').click(function() {
        $('.ADSLNEWPromo9MonthTurbo').css('display', 'block');
        $('.ADSLNEWPromo9MonthUnlimited').css('display', 'none');

        $('.ADSLTitleDescForNEWPromo9MonthUnlimited').css('display', 'none');
        $('.ADSLTitleDescForNEWPromo9MonthTurbo').css('display', 'block');

        if (document.documentElement.clientWidth > 768) {
            $('.ADSLNEWPromo9Month').css('padding-bottom', '0px');
        }

        slickADSLNEWPromo9MonthTurbo();

    });

    $('.ADSLPromoNEW9MonthUnlimited').click(function() {
        $('.ADSLNEWPromo9MonthTurbo').css('display', 'none');
        $('.ADSLNEWPromo9MonthUnlimited').css('display', 'block');

        $('.ADSLTitleDescForNEWPromo9MonthUnlimited').css('display', 'block');
        $('.ADSLTitleDescForNEWPromo9MonthTurbo').css('display', 'none');

        $('.ADSLNEWPromo9Month').css('padding-bottom', '40px');

        slickADSLNEWPromo9MonthUnlimited();
    });

    $('.ADSLNEWPromo9MonthBOX').click(function() {

        hideAllPromos();

        $('.ADSLNEWPromo9Month').css('display', 'block');
        var top = $('.ADSLNEWPromo9Month').offset().top;
        slickADSLNEWPromo9MonthTurbo();
        $('html, body', window.parent.document).animate({
            scrollTop : top
        }, 'fast');

    });

    $('.ADSLNEWPromoBOX').click(function() {
        hideAllPromos();
        $('.ADSLNEWPromo').css('display', 'block');
        slickADSLNEWPromoTurbo();
        var top = $('.ADSLNEWPromo').offset().top;

        $('html, body', window.parent.document).animate({
            scrollTop : top
        }, 'fast');

    });

    $('.ADSLREDPromoBOX').click(function() {
        hideAllPromos();
        $('.ADSLREDPromo').css('display', 'block');
        slickADSLREDPromoTurbo();
        var top = $('.ADSLREDPromo').offset().top;

        $('html, body', window.parent.document).animate({
            scrollTop : top
        }, 'fast');

    });

    $('.ADSLREDTurboFullDetails').click(function() {

        $('.ADSLREDPromoFullDetailsContainer').css('display', 'block');

        $('.ADSLREDPromoCarouselContainer ').css('display', 'none');

        showREDTurboPromoFullDetails();
        hideREDUnlimitedPromoFullDetails();

    });

    $('.REDFullDetailsCloseButton').click(function() {
        $('.ADSLREDPromoFullDetailsContainer').css('display', 'none');

        $('.ADSLREDPromoCarouselContainer').css('display', 'block');

    });

    $('.ADSLREDUnlimitedFullDetails').click(function() {

        $('.ADSLREDPromoFullDetailsContainer').css('display', 'block');

        $('.ADSLREDPromoCarouselContainer').css('display', 'none');

        hideREDTurboPromoFullDetails();
        showREDUnlimitedPromoFullDetails();

    });

    $('.ADSLNewPromoTurboFullDetails').click(function() {

        $('.ADSLNEWPromoFullDetailsContainer').css('display', 'block');

        $('.ADSLNEWPromoCarouselContainer ').css('display', 'none');

        showNEWPromoTurboPromoFullDetails();
        hideNEWPromoUnlimitedPromoFullDetails();

    });

    $('.NEWPromoFullDetailsCloseButton').click(function() {
        $('.ADSLNEWPromoFullDetailsContainer').css('display', 'none');

        $('.ADSLNEWPromoCarouselContainer ').css('display', 'block');

    });

    $('.ADSLNewPromoUnlimitedFullDetails').click(function() {

        $('.ADSLNEWPromoFullDetailsContainer').css('display', 'block');

        $('.ADSLNEWPromoCarouselContainer').css('display', 'none');

        hideNEWPromoTurboPromoFullDetails();
        showNEWPromoUnlimitedPromoFullDetails();

    });

    $('.ADSLNewPromoTurboFullDetails').click(function() {

        $('.ADSLNEWPromoFullDetailsContainer').css('display', 'block');

        $('.ADSLNEWPromoCarouselContainer').css('display', 'none');

        showNEWPromoTurboPromoFullDetails();
        hideNEWPromoUnlimitedPromoFullDetails();

    });

    $('.ADSLNEW9MonthPromoTurboFullDetails').click(function() {

        $('.ADSLNEW9MonthPromoFullDetailsContainer').css('display', 'block');

        $('.ADSLNEW9MonthPromoCarouselContainer ').css('display', 'none');

        showNEW9MonthPromoTurboPromoFullDetails();
        hideNEW9MonthPromoUnlimitedPromoFullDetails();

    });

    $('.NEW9MonthPromoFullDetailsCloseButton').click(function() {
        $('.ADSLNEW9MonthPromoFullDetailsContainer').css('display', 'none');

        $('.ADSLNEW9MonthPromoCarouselContainer ').css('display', 'block');

    });

    $('.ADSLNEW9MonthPromoUnlimitedFullDetails').click(function() {

        $('.ADSLNEW9MonthPromoFullDetailsContainer').css('display', 'block');

        $('.ADSLNEW9MonthPromoCarouselContainer').css('display', 'none');

        hideNEW9MonthPromoTurboPromoFullDetails();
        showNEW9MonthPromoUnlimitedPromoFullDetails();

    });

});

function hideAllPromos() {
    $('.ADSLNEWPromo9Month').css('display', 'none');
    $('.ADSLREDPromo').css('display', 'none');
    $('.ADSLNEWPromo').css('display', 'none');

}

function hideREDUnlimitedPromoFullDetails() {
    $('.ADSLREDPromoFullDetailsUnlimited').css('display', 'none');
    $('.ADSLREDPromoFullDetailsTermsAndConditionsUnlimited').css('display', 'none');

}

function showREDUnlimitedPromoFullDetails() {
    $('.ADSLREDPromoFullDetailsUnlimited').css('display', 'block');
    $('.ADSLREDPromoFullDetailsTermsAndConditionsUnlimited').css('display', 'block');

}

function hideREDTurboPromoFullDetails() {
    $('.ADSLREDPromoFullDetailsTurbo').css('display', 'none');
    $('.ADSLREDPromoFullDetailsTermsAndConditionsTurbo').css('display', 'none');

}

function showREDTurboPromoFullDetails() {
    $('.ADSLREDPromoFullDetailsTurbo').css('display', 'block');
    $('.ADSLREDPromoFullDetailsTermsAndConditionsTurbo').css('display', 'block');

}

function hideNEWPromoTurboPromoFullDetails() {
    $('.ADSLNEWPromoFullDetailsTurbo').css('display', 'none');
    $('.ADSLNEWPromoFullDetailsTermsAndConditionsTurbo').css('display', 'none');

}

function showNEWPromoTurboPromoFullDetails() {
    $('.ADSLNEWPromoFullDetailsTurbo').css('display', 'block');
    $('.ADSLNEWPromoFullDetailsTermsAndConditionsTurbo').css('display', 'block');

}

function hideNEWPromoUnlimitedPromoFullDetails() {
    $('.ADSLNEWPromoFullDetailsUnlimited').css('display', 'none');
    $('.ADSLNEWPromoFullDetailsTermsAndConditionsUnlimited').css('display', 'none');

}

function showNEWPromoUnlimitedPromoFullDetails() {
    $('.ADSLNEWPromoFullDetailsUnlimited').css('display', 'block');
    $('.ADSLNEWPromoFullDetailsTermsAndConditionsUnlimited').css('display', 'block');

}

function hideNEW9MonthPromoTurboPromoFullDetails() {
    $('.ADSLNEW9MonthPromoFullDetailsTurbo').css('display', 'none');
    $('.ADSLNEW9MonthPromoFullDetailsTermsAndConditionsTurbo').css('display', 'none');

}

function showNEW9MonthPromoTurboPromoFullDetails() {
    $('.ADSLNEW9MonthPromoFullDetailsTurbo').css('display', 'block');
    $('.ADSLNEW9MonthPromoFullDetailsTermsAndConditionsTurbo').css('display', 'block');

}

function hideNEW9MonthPromoUnlimitedPromoFullDetails() {
    $('.ADSLNEW9MonthPromoFullDetailsUnlimited').css('display', 'none');
    $('.ADSLNEW9MonthPromoFullDetailsTermsAndConditionsUnlimited').css('display', 'none');

}

function showNEW9MonthPromoUnlimitedPromoFullDetails() {
    $('.ADSLNEW9MonthPromoFullDetailsUnlimited').css('display', 'block');
    $('.ADSLNEW9MonthPromoFullDetailsTermsAndConditionsUnlimited').css('display', 'block');

}

/** Added on 16-02-2015 ADSL AND VOICE **/
function addParamAndReload(pkgId, type) {
    window.top.location = 'http://www.vodafone.com.eg/vodafoneportalWeb/ar/P20602795991382526585241?pkgId=' + pkgId + '&type=' + type;
    //window.top.location = 'http://www.vodafone.com.eg/vodafoneportalWeb/ar/P23400639171398771278093?pkgId=' + pkgId + '&type=' + type;
}

/**Added for old Overlay 16-02-2015 - ADSL AND VOICE **/
function hideCheckAvailabiltyoverlay() {

    $('#check_availabilty').css('display', 'none');
}

/**Added for old Overlay 16-02-2015 - ADSL AND VOICE **/
function showCheckAvailabiltyoverlay(overlay) {

    var finalOverlay = eval(overlay);

    $(finalOverlay).fadeIn('fast');
}

/**Added for old Overlay 16-02-2015 - ADSL AND VOICE **/

