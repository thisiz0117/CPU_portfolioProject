$(document).ready(function() {
    // 처음엔 위쪽에 배치
    $('.contant-container').css('top', '60%');
    $('.contant-container').css('opacity', '0');
    // 0.2초 후 가운데로 이동
    $('.contant-container').delay(200).animate({
        opacity: 1,
        top: '50%'
    }, 600, 'easeOutExpo');
});