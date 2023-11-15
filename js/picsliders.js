document.addEventListener('DOMContentLoaded', function () {
    // Formula 1 Slider
    const sliderF1 = document.querySelector('.formula1 .slider');
    const prevBtnF1 = document.getElementById('prevBtnF1');
    const nextBtnF1 = document.getElementById('nextBtnF1');
    let currentIndexF1 = 0;

    function showSlideF1(index) {
        if (index < 0) {
            currentIndexF1 = sliderF1.children.length - 1;
        } else if (index >= sliderF1.children.length) {
            currentIndexF1 = 0;
        } else {
            currentIndexF1 = index;
        }

        // Hide all images in the slider
        for (let i = 0; i < sliderF1.children.length; i++) {
            sliderF1.children[i].style.visibility = 'hidden';
        }

        // Show the current image
        sliderF1.children[currentIndexF1].style.visibility = 'visible';

        const translateValue = -currentIndexF1 * 100 + '%';
        sliderF1.style.transform = 'translateX(' + translateValue + ')';
    }

    prevBtnF1.addEventListener('click', function () {
        showSlideF1(currentIndexF1 - 1);
    });

    nextBtnF1.addEventListener('click', function () {
        showSlideF1(currentIndexF1 + 1);
    });

    // NBA Slider
    const sliderNBA = document.querySelector('.nba .slider');
    const prevBtnNBA = document.getElementById('prevBtnNBA');
    const nextBtnNBA = document.getElementById('nextBtnNBA');
    let currentIndexNBA = 0;

    function showSlideNBA(index) {
        if (index < 0) {
            currentIndexNBA = sliderNBA.children.length - 1;
        } else if (index >= sliderNBA.children.length) {
            currentIndexNBA = 0;
        } else {
            currentIndexNBA = index;
        }

        // Hide all images in the slider
        for (let i = 0; i < sliderNBA.children.length; i++) {
            sliderNBA.children[i].style.visibility = 'hidden';
        }

        // Show the current image
        sliderNBA.children[currentIndexNBA].style.visibility = 'visible';

        const translateValue = -currentIndexNBA * 100 + '%';
        sliderNBA.style.transform = 'translateX(' + translateValue + ')';
    }

    prevBtnNBA.addEventListener('click', function () {
        showSlideNBA(currentIndexNBA - 1);
    });

    nextBtnNBA.addEventListener('click', function () {
        showSlideNBA(currentIndexNBA + 1);
    });

    // Initial setup to show the first slide
    showSlideF1(currentIndexF1);
    showSlideNBA(currentIndexNBA);
});
