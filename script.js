const storyBtnEl = document.querySelectorAll('.story-btn');
// const storyEl = document.querySelectorAll('.story');


storyBtnEl.forEach((e) => {
    e.addEventListener('click', () => {
        console.log('Clicked');
        e.classList.toggle('change');
        e.nextElementSibling.classList.toggle('change');
    })
})