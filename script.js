window.onload = () => {
    navigationHolder();
    verticalPhoneHolder();
    horizontalPhoneHolder();
    slider();
    tagsHolder();
    portfolioItemHolder();
    submitButtonHolder();
}

const navigationHolder = () => {
    document.querySelector('.navigation').addEventListener('click', (event) => {
        if (event.target.classList.contains('nav-item')) {
            let itemList = document.querySelectorAll('.nav-item');
            removeActiveState(itemList);
            let targetItem = event.target;
            addActiveState(targetItem);
        }
    });
}

const removeActiveState = (itemList) => {
    itemList.forEach((item) => {
        item.classList.remove('active');
    })
}

const addActiveState = (targetItem) => {
    targetItem.classList.add('active');
}

const verticalPhoneHolder = () => {
    document.querySelector('.black-screen-vertical').addEventListener('click', () => {
        document.querySelector('.black-screen-vertical').classList.toggle('black-screen');
    });
    document.querySelector('.iphone-vertical').addEventListener('click', () => {
        document.querySelector('.black-screen-vertical').classList.toggle('black-screen');
    });
}

const horizontalPhoneHolder = () => {
    document.querySelector('.black-screen-horizontal').addEventListener('click', () => {
        document.querySelector('.black-screen-horizontal').classList.toggle('black-screen');
    });
    document.querySelector('.iphone-horizontal').addEventListener('click', () => {
        document.querySelector('.black-screen-horizontal').classList.toggle('black-screen');
    });    
}

const slider = () => {
    let prevArrow = document.querySelector('.left');
    let nextArrow = document.querySelector('.right');
    let firstSlide = document.querySelector('.first-content');
    let secondSlide = document.querySelector('.second-content');
    let sliderState = 'second';
    prevArrow.addEventListener('click', () => {
        sliderState = prevSlide(sliderState, firstSlide, secondSlide);
        if (sliderState == 'first'){
            document.querySelector('.slider').style.backgroundColor = "#f06c64";
            document.querySelector('.slider-line').style.backgroundColor = "#f06c64";
        } else {
            document.querySelector('.slider').style.backgroundColor = "#648BF0";
            document.querySelector('.slider-line').style.backgroundColor = "#648BF0";
        }
    })
    nextArrow.addEventListener('click', () => {
        sliderState = nextSlide(sliderState, firstSlide, secondSlide);
        if (sliderState == 'first'){
            document.querySelector('.slider').style.backgroundColor = "#f06c64";
            document.querySelector('.slider-line').style.backgroundColor = "#f06c64";
        } else {
            document.querySelector('.slider').style.backgroundColor = "#648BF0";
            document.querySelector('.slider-line').style.backgroundColor = "#648BF0";
        }
    });
}

const prevSlide = (sliderState, firstSlide, secondSlide) => {
    if (sliderState === 'first'){
        firstSlide.classList.remove('slide-to-left');
        firstSlide.classList.add('slide-to-right');
        secondSlide.classList.remove('slide-to-left');
        setTimeout(() => {
            firstSlide.classList.remove('slide-to-right');
            firstSlide.classList.add('slide-to-left');
            firstSlide.style.zIndex = -100;
            secondSlide.style.zIndex = 5;
        }, 200);    
        sliderState = 'second'; 
    }
    else {
        secondSlide.classList.remove('slide-to-left');
        secondSlide.classList.add('slide-to-right');
        firstSlide.classList.remove('slide-to-left')
        setTimeout(() => {
            secondSlide.classList.remove('slide-to-right');
            secondSlide.classList.add('slide-to-left');
            secondSlide.style.zIndex = -100;
            firstSlide.style.zIndex = 5;
        }, 200);    
        sliderState = 'first';
    }
    return sliderState;
}

const nextSlide = (sliderState, firstSlide, secondSlide) => {
    if (sliderState === 'first'){
        firstSlide.classList.remove('slide-to-right');
        firstSlide.classList.add('slide-to-left');
        secondSlide.classList.remove('slide-to-right');
        setTimeout(() => {
            firstSlide.classList.remove('slide-to-left');
            firstSlide.classList.add('slide-to-right');
            firstSlide.style.zIndex = -100;
            secondSlide.style.zIndex = 5;
        }, 200);    
        sliderState = 'second'; 
    }
    else {
        secondSlide.classList.remove('slide-to-right');
        secondSlide.classList.add('slide-to-left');
        firstSlide.classList.remove('slide-to-right')
        setTimeout(() => {
            secondSlide.classList.remove('slide-to-left');
            secondSlide.classList.add('slide-to-right');
            secondSlide.style.zIndex = -100;
            firstSlide.style.zIndex = 5;
        }, 200);    
        sliderState = 'first';
    }
    return sliderState;
}

const tagsHolder = () => {
    document.querySelector('.tags-container').addEventListener('click', (event) => {
        if (event.target.classList.contains('tag')){
            let tags = document.querySelectorAll('.tag');
            removeSelectedState(tags);
            addSelectedState(event.target);
            switchPortfolioItems();
        }
    });
}

const removeSelectedState = (tags) => {
    tags.forEach((item) => {
        item.classList.remove('tag-selected');
    })
}

const addSelectedState = (targetItem) => {
    targetItem.classList.add('tag-selected');
}

const switchPortfolioItems = () => {
    let portfolioItems = document.querySelectorAll('.list-item-portfolio');
    for (let i = 0 ; i < portfolioItems.length-4 ; i++){
        let swap = portfolioItems[i+4].innerHTML;
        portfolioItems[i+4].innerHTML = portfolioItems[i].innerHTML;
        portfolioItems[i].innerHTML = swap;
    }
}

const portfolioItemHolder = () => {
    document.querySelector('.portfolio-item-container').addEventListener('click', (event) => {
        if (event.target.classList.contains('portfolio-item')){
            let portfolioItemList = document.querySelectorAll('.portfolio-item');
            removePortfolioActiveState(portfolioItemList);
            addPortfolioActiveState(event.target);
        }
    });
}

const removePortfolioActiveState = (portfolioItemList) => {
    portfolioItemList.forEach((item) => {
        item.classList.remove('portfolio-item-active');
    });
}

const addPortfolioActiveState = (targetItem) => {
    targetItem.classList.add('portfolio-item-active');
};

const submitButtonHolder = () => {
    document.querySelector('.submit').addEventListener('click', (event) => {
        event.preventDefault();    
        showModalWindow();
    });
}

const showModalWindow = () => {
    if (!document.querySelector('#name').value){
        alert('Заполните поле Name');
    } else 
    if (!document.querySelector('#email').value){
        alert('Заполните поле Email');
    } else {
        let modalWindow = document.querySelector('.modal-window');
        modalWindow.style.display = 'flex';
        if (!document.querySelector('#subject').innerHTML){
            document.querySelector('.subject-paragraph').innerHTML = 'Тема: ';
            document.querySelector('.subject-paragraph').innerHTML += document.querySelector('#subject').value;
        } else {
            document.querySelector('.subject-paragraph').innerHTML = 'Без темы';
        }
        if (!document.querySelector('#description').innerHTML){
            document.querySelector('.description-paragraph').innerHTML = 'Описание: ';
            document.querySelector('.description-paragraph').innerHTML += document.querySelector('#description').value;
        } else {
            document.querySelector('.description-paragraph').innerHTML = 'Без описания';
        }
        clearForm();
        closeModalWindow();
    }
}

const closeModalWindow = () => {
    document.getElementById('closeModalWindowButton').addEventListener('click', () => {
        document.querySelector('.modal-window').style.display = 'none';
    });
}

const clearForm = () => {
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#subject').value = '';
    document.querySelector('#description').value = '';
}