document.addEventListener('DOMContentLoaded', function () {
    let url = window.location.href;

    let res = url.split('id=');
    let id = res[1];
    console.log(id);

    const box = document.querySelector('.box2');

    function Market() {
        fetch(`https://strapi-store-server.onrender.com/api/products/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let product = data.data.attributes;

                    let cardlar = `
                <img class="id_img" src=${product.image} alt="">
                <div class="id_div">
                    <h1 class="id_title">${product.title}</h1>
                    <p class="id_title2">${product.company}</p>
                    <p class="id_price">$${product.price}</p>
                    <p class="id_text">${product.description}</p>
                    <button class="button">ADD TO BAG</button>
                </div>
                `;

                    box.innerHTML += cardlar
                    let cards = document.querySelectorAll('.div_1');

                    cards.length && cards.forEach(function (card) {
                        card.addEventListener('click', function () {
                            let id = this.getAttribute('data-id');
                            window.location.assign(`file:///C:/Users/hp/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/Product/pages/page.html?id=${id}`)
                        })
                    })


            })



    }
    Market();
});

