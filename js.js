'use strict';

const images = [
    { 'id': '1', 'url':'./img/chrono.jpg'},
    { 'id': '2', 'url':'./img/inuyasha.jpg'},
    { 'id': '3', 'url':'./img/tenchi.jpg'},
    { 'id': '4', 'url':'./img/tenjhotenge.jpg'},
    { 'id': '5', 'url':'./img/yuyuhakusho.jpg'},
    { 'id': '6', 'url':'./img/ippo.png'},
]


const container = document.querySelector('#itens');

const loadImages = ( images, container) => {
    images.forEach ( image => {
        container.innerHTML += `
        <div class='item'>
            <img src='${image.url}'
        </div> `
    })
}

loadImages( images, container);

let itens = document.querySelectorAll('.item');

const previous = () => {
    container.appendChild(itens[0]);
    itens = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = itens[itens.length - 1];
    container.insertBefore(lastItem, itens[0]);
    itens = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);