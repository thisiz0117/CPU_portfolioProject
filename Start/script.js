//   &-through {
//     transition: 0.6s cubic-bezier(0.77, 0, 0.175, 1); // ease-in-out-quartic;

//     &::before {
//       position: absolute;
//       content: "";
//       top: 0;
//       left: 0;
//       z-index: -1;
//       width: 100%;
//       height: 100%;
//       background: var(--btn-bg);
//       transform: scaleX(0);
//       transform-origin: right;
//       transition: transform 0.6s cubic-bezier(0.77, 0, 0.175, 1);
//     }

//     &:hover {
//       color: white;
//       background: transparent;

//       &::before {
//         transform: scaleX(1);
//         transform-origin: left;
//       }
//     }
//   }

$(document).ready(function() {
    // 처음엔 위쪽에 배치
    $('.contant-container').css('top', '60%');
    $('.contant-container').css('opacity', '0');
    // 0.2초 후 가운데로 이동
    $('.contant-container').delay(200).animate({
        opacity: 1,
        top: '50%'
    }, 600, 'easeOutExpo');

    $('#lee').click(function (e) { 
        e.preventDefault();
        location.href = 'lee.html';
        console.log('si');
    });
});