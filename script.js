'use strict';

// ハンバーガーメニュー ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー//
{
    const open = document.getElementById('open');
    const overlaysp = document.querySelector('.overlaysp');
    const close = document.getElementById('hide')

    open.addEventListener('click',() => {
        overlaysp.classList.add('show');
        open.classList.add('hide');
    });

    close.addEventListener('click',() => {
        overlaysp.classList.remove('show');
        open.classList.remove('hide');
    });
}

// スライドショー　--------------------------------------------------------------------------------------------------------------------//

let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");

    if (n >= slides.length) {
        slideIndex = 0;
    }

    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}


// HP画面全体のスライドショー　---------------------------------------------------------------------------------------------------------//


document.addEventListener('DOMContentLoaded', function () {
    // ページが読み込まれたときにアニメーションを開始
    const textElement = document.querySelector('.animate-text');
    textElement.style.opacity = '1'; // アニメーションの開始前に透明度を設定

    // アニメーションの開始
    setTimeout(() => {
        textElement.style.animationPlayState = 'running';
    }, 500); // 適切な待機時間を設定
});


//　ルール説明のアニメーション　--------------------------------------------------------------------------------------------------------------------//

const scrollableDiv = document.querySelector('.rule-explanation');

scrollableDiv.addEventListener('wheel', (event) => {
    // マウスホイールの動きに合わせてスクロール
    scrollableDiv.scrollLeft += event.deltaY;
});

//---------------------------------------------------------------------------------------------------------------------//

