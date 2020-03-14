window.onload = () => {
    navigationHolder();
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