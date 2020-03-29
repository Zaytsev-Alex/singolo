window.onload = () => {
    navigationHolder();
    verticalPhoneHolder();
    horizontalPhoneHolder();
    slider();
    tagsHolder();
    portfolioItemHolder();
    submitButtonHolder();
    menuHolder();
}

const navigationHolder = () => {
    document.querySelector('.navigation').addEventListener('click', (event) => {
        if (event.target.classList.contains('nav-item')) {
            const itemList = document.querySelectorAll('.nav-item');
            removeActiveState(itemList);
            const targetItem = event.target;
            addActiveState(targetItem);
        }
    });
    document.addEventListener('scroll', scrollNavigationState);
}

const scrollNavigationState = () => {
    const itemList = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');
    const currentPosition = window.scrollY;
    sections.forEach((element) => {
        if (element.offsetTop - 300 <= currentPosition && (element.offsetHeight + element.offsetTop) > currentPosition) {
            itemList.forEach((a) => {
                a.classList.remove('active');
                if (element.getAttribute('id') === a.getAttribute('href').slice(1, -7)) {
                    a.classList.add('active');
                }
            });
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
    const prevArrow = document.querySelector('.left');
    const nextArrow = document.querySelector('.right');
    const firstSlide = document.querySelector('.first-content');
    const secondSlide = document.querySelector('.second-content');
    let sliderState = 'second';
    prevArrow.addEventListener('click', () => {
        next = 1;
        sliderState = prevSlide(sliderState, firstSlide, secondSlide);
    })
    nextArrow.addEventListener('click', () => {
        prev = 1;
        sliderState = nextSlide(sliderState, firstSlide, secondSlide);
    });
}

var timeOutSlider = 1;
var next = 0;
var prev = 0;

const prevSlide = (sliderState, firstSlide, secondSlide) => {
    if (!timeOutSlider)
        return;
    else
        corectionSlider(firstSlide, secondSlide);
    if (sliderState === 'first') {
        firstSlide.classList.remove('slide-to-left');
        firstSlide.classList.add('slide-to-right');
        secondSlide.classList.remove('slide-to-left');
        timeOutSlider = 0;
        setTimeout(() => {
            timeOutSlider = 1;
            firstSlide.classList.remove('slide-to-right');
            firstSlide.classList.add('slide-to-left');
            firstSlide.style.zIndex = -100;
            secondSlide.style.zIndex = 5;
        }, 200);
        sliderState = 'second';
    } else {
        secondSlide.classList.remove('slide-to-left');
        secondSlide.classList.add('slide-to-right');
        firstSlide.classList.remove('slide-to-left')
        timeOutSlider = 0;
        setTimeout(() => {
            timeOutSlider = 1;
            secondSlide.classList.remove('slide-to-right');
            secondSlide.classList.add('slide-to-left');
            secondSlide.style.zIndex = -100;
            firstSlide.style.zIndex = 5;
        }, 200);
        sliderState = 'first';
    }
    if (sliderState == 'first') {
        document.querySelector('.slider').style.backgroundColor = "#f06c64";
        document.querySelector('.slider-line').style.backgroundColor = "#f06c64";
    } else {
        document.querySelector('.slider').style.backgroundColor = "#648BF0";
        document.querySelector('.slider-line').style.backgroundColor = "#648BF0";
    }
    return sliderState;
}

const nextSlide = (sliderState, firstSlide, secondSlide) => {
    if (!timeOutSlider)
        return;
    else
        corectionSlider(firstSlide, secondSlide);
    if (sliderState === 'first') {
        firstSlide.classList.remove('slide-to-right');
        firstSlide.classList.add('slide-to-left');
        secondSlide.classList.remove('slide-to-right');
        timeOutSlider = 0;
        setTimeout(() => {
            timeOutSlider = 1;
            firstSlide.classList.remove('slide-to-left');
            firstSlide.classList.add('slide-to-right');
            firstSlide.style.zIndex = -100;
            secondSlide.style.zIndex = 5;
        }, 200);
        sliderState = 'second';
    } else {
        secondSlide.classList.remove('slide-to-right');
        secondSlide.classList.add('slide-to-left');
        firstSlide.classList.remove('slide-to-right')
        timeOutSlider = 0;
        setTimeout(() => {
            timeOutSlider = 1;
            secondSlide.classList.remove('slide-to-left');
            secondSlide.classList.add('slide-to-right');
            secondSlide.style.zIndex = -100;
            firstSlide.style.zIndex = 5;
        }, 200);
        sliderState = 'first';
    }
    if (sliderState == 'first') {
        document.querySelector('.slider').style.backgroundColor = "#f06c64";
        document.querySelector('.slider-line').style.backgroundColor = "#f06c64";
    } else {
        document.querySelector('.slider').style.backgroundColor = "#648BF0";
        document.querySelector('.slider-line').style.backgroundColor = "#648BF0";
    }
    return sliderState;
}

const corectionSlider = (firstSlide, secondSlide) => {
    if (prev === 1 && next === 1) {
        firstSlide.classList.remove('slide-to-right');
        firstSlide.classList.remove('slide-to-left');
        secondSlide.classList.remove('slide-to-right');
        firstSlide.classList.remove('slide-to-left');
        prev = 0;
        next = 0;
    }
}

const tagsHolder = () => {
    document.querySelector('.tags-container').addEventListener('click', (event) => {
        if (event.target.classList.contains('tag') && !event.target.classList.contains('tag-selected')) {
            const tags = document.querySelectorAll('.tag');
            removeSelectedState(tags);
            addSelectedState(event.target);
            shufflePortfolioItems();
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

const shufflePortfolioItems = () => {
    const portfolioItems = document.querySelectorAll('.list-item-portfolio');
    for (let i = 0; i < portfolioItems.length - 4; i++) {
        let swap = portfolioItems[i + 4].innerHTML;
        portfolioItems[i + 4].innerHTML = portfolioItems[i].innerHTML;
        portfolioItems[i].innerHTML = swap;
    }
}

const portfolioItemHolder = () => {
    document.querySelector('.portfolio-item-container').addEventListener('click', (event) => {
        if (event.target.classList.contains('portfolio-item')) {
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
        const regEx = /.+@\w+\.\w{1,8}$/;
        if (regEx.test(document.getElementById('email').value) && document.querySelector('#name').value) {
            showModalWindow();
        } else
            alert('Заполните форму корректно');
    });
}

const showModalWindow = () => {
    let modalWindow = document.querySelector('.modal-window');
    modalWindow.style.display = 'flex';
    if (document.querySelector('#subject').value) {
        document.querySelector('.subject-paragraph').innerHTML = 'Тема: ';
        document.querySelector('.subject-paragraph').innerHTML += document.querySelector('#subject').value;
    } else {
        document.querySelector('.subject-paragraph').innerHTML = 'Без темы';
    }
    if (document.querySelector('#description').value) {
        document.querySelector('.description-paragraph').innerHTML = 'Описание: ';
        document.querySelector('.description-paragraph').innerHTML += document.querySelector('#description').value;
    } else {
        document.querySelector('.description-paragraph').innerHTML = 'Без описания';
    }
    clearForm();
    closeModalWindow();
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

const menuHolder = () => {
    const burgerMenuButton = document.querySelector('.burger-menu');
    const navigationBar = document.querySelector('nav');
    const logo = document.querySelector('.logo');
    burgerMenuButton.addEventListener('click', () => {
        if (!navigationBar.classList.contains('navbar-open')) {
            showMenu(navigationBar, burgerMenuButton, logo);
        } else {
            hideMenu(navigationBar, burgerMenuButton, logo);
        }
    });

    document.querySelector('.navigation').addEventListener('click', (event) => {
        if (event.target.classList.contains('nav-item') && document.documentElement.clientWidth < 768) {
            hideMenu(navigationBar, burgerMenuButton, logo);
        }
    });

    document.addEventListener('click', (event) => {
        if (document.documentElement.clientWidth < 768
            && navigationBar.classList.contains('navbar-open')
            && event.target.tagName != 'NAV'
            && event.target.tagName != 'IMG') {
            hideMenu(navigationBar, burgerMenuButton, logo);
        }
    });
}

const showMenu = (navigationBar, burgerMenuButton, logo) => {
    burgerMenuButton.classList.add('burger-menu-rotate');
    logo.classList.add('logo-fixed');
    navigationBar.classList.add('navbar-open');
}

const hideMenu = (navigationBar, burgerMenuButton, logo) => {
    burgerMenuButton.classList.remove('burger-menu-rotate');
    navigationBar.classList.remove('navbar-open');
    logo.classList.remove('logo-fixed');
}