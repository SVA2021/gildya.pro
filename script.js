'use strict';

//initial data
var products = [
    {productId: 1, productName: 'Товар 1', categoryId: 1},
    {productId: 2, productName: 'Товар 2', categoryId: 2},
    {productId: 3, productName: 'Товар 3', categoryId: 3},
    {productId: 4, productName: 'Товар 4', categoryId: 4},
    {productId: 5, productName: 'Товар 5', categoryId: 5},
    {productId: 6, productName: 'Товар 6', categoryId: 1},
    {productId: 7, productName: 'Товар 7', categoryId: 2},
    {productId: 8, productName: 'Товар 8', categoryId: 3},
    {productId: 9, productName: 'Товар 9', categoryId: 4},
    {productId: 10, productName: 'Товар 10', categoryId: 5},
    {productId: 11, productName: 'Товар 11', categoryId: 1},
    {productId: 12, productName: 'Товар 12', categoryId: 2},
    {productId: 13, productName: 'Товар 13', categoryId: 3},
    {productId: 14, productName: 'Товар 14', categoryId: 4},
    {productId: 15, productName: 'Товар 15', categoryId: 5},
    {productId: 16, productName: 'Товар 16', categoryId: 1},
    {productId: 17, productName: 'Товар 17', categoryId: 2},
    {productId: 18, productName: 'Товар 18', categoryId: 3},
    {productId: 19, productName: 'Товар 19', categoryId: 4},
    {productId: 20, productName: 'Товар 20', categoryId: 5},
    {productId: 21, productName: 'Товар 21', categoryId: 1},
    {productId: 22, productName: 'Товар 22', categoryId: 2},
    {productId: 23, productName: 'Товар 23', categoryId: 3},
    {productId: 24, productName: 'Товар 24', categoryId: 4},
    {productId: 25, productName: 'Товар 25', categoryId: 5}
];

var categories = [
    {categoryId: 1, categoryName: 'Футболки'},
    {categoryId: 2, categoryName: 'Майки'},
    {categoryId: 3, categoryName: 'Носки'},
    {categoryId: 4, categoryName: 'Джинсы'},
    {categoryId: 5, categoryName: 'Брюки'},
];

//find all needed wrappers
const container = document.getElementById('container');
const tabsWrapper = container.querySelector('.tab__wrapper');
const productsWrapper = container.querySelector('.product__wrapper');

//initial tabs loading
let activeCategoryId = 1;

categories.forEach((category) => tabsWrapper.insertAdjacentHTML('beforeend',
    `<button data-id="${category.categoryId}" class="${getClassNameForTab(category.categoryId)}">
    ${category.categoryName}
    </button>`
));

function getClassNameForTab(categoryId) {
    return categoryId === activeCategoryId ? 'tab tab__active' : 'tab';
}

const tabs = tabsWrapper.querySelectorAll('button');
tabs.forEach((tab) => tab.addEventListener(('click'), () => updateState(tab.dataset.id)));

//initial products loading
loadProducts(activeCategoryId);

function updateState(categoryId) {
    updateActiveTabsClass(categoryId);
    loadProducts(categoryId);
}

function updateActiveTabsClass(categoryId) {
    activeCategoryId = categoryId;
    tabs.forEach((tab) => {
        tab.classList.remove('tab__active');
        if (tab.dataset.id === categoryId) tab.classList.add('tab__active');
    })
}

function loadProducts(categoryId) {
    let filteredProducts = products.filter((product) => product.categoryId == categoryId);
    productsWrapper.innerHTML = null;
    filteredProducts.forEach((product) => productsWrapper.insertAdjacentHTML('beforeend',
        `<figure class="product">
        <img src="./tovar.jpg" alt="product" class="product__img">
        <figcaption class="product__caption">${product.productName}</figcaption>
    </figure>`
    ));
}