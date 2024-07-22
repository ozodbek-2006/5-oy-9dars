document.addEventListener('DOMContentLoaded', function () {

    const box = document.querySelector('.box')


    function Market() {

        fetch('https://strapi-store-server.onrender.com/api/products')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let res_arry = data.data;
                let res_arry2 = res_arry.attributes;
                console.log(res_arry);
                res_arry.forEach(info => {

                    let cardlar = `
                <div class="div_1" data-id="${info.id}">
                     <img class="img_product" src="${info.attributes.image}" alt="">
                     <h1 class="title">${info.attributes.title}"</h1>
                     <p class="text">$${info.attributes.price}"</p>
                </div>
                `;

                    box.innerHTML += cardlar
                    let cards = document.querySelectorAll('.div_1');

                    cards.length && cards.forEach(function (card) {
                        card.addEventListener('click', function () {
                            let id = this.getAttribute('data-id');
                            window.location.assign(`http://127.0.0.1:5500/pages/page.html?id=${id}`)
                        })
                    })

                });

            })



    }
    Market()
    
});
