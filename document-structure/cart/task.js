const productControls = Array.from(document.querySelectorAll('.product__quantity-controls'));
const product = Array.from(document.querySelectorAll('.product'));
const cartProduct = document.querySelector('.cart__products');

const mainCard = document.createElement('div');
const cardIMG = document.createElement('img');
const productCount = document.createElement('div');

productControls.forEach((elem) => {
    elem.firstElementChild.addEventListener('click', (e) => {
        e.preventDefault();
        if(elem.children[1].textContent > 0) {
            elem.children[1].textContent -= 1;
        };
    });

    elem.lastElementChild.addEventListener('click', (e) => {
        e.preventDefault();
        elem.children[1].textContent++;
    });
});

product.forEach((e) => {
    
    const img = e.querySelector('img');
    const add = e.querySelector('.product__add');
    const count = e.querySelector('.product__quantity-value');
    add.addEventListener('click', () => {
        const list = Array.from(cartProduct.children)
        
        cartProduct.insertAdjacentElement('afterbegin', mainCard);
        mainCard.insertAdjacentElement('afterbegin', cardIMG);
        cardIMG.insertAdjacentElement('afterend', productCount);

        mainCard.classList.add('cart__product');
        cardIMG.classList.add('cart__product-image');
        productCount.classList.add('cart__product-count');

        mainCard.setAttribute('data-id', e.getAttribute('data-id'));
        cardIMG.setAttribute('src', img.getAttribute('src'));
        productCount.textContent = count.textContent;
        
        if(cartProduct.children.length > 0) {
            cartProduct.appendChild(mainCard.cloneNode(true));
            cartProduct.firstChild.remove();
            list.forEach((e) => {
                if(e.getAttribute('data-id') === mainCard.getAttribute('data-id')) {
                    e.children[1].textContent = Number(count.textContent) + Number(e.children[1].textContent);
                    cartProduct.lastChild.remove();
                }
                                    
            });
        };

    });
});
