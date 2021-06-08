const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
]

const renderGoodsItem = (product) => {
    return `<div class="goods-item">
    <img class="pic" src="img/shuffle.png" alt="">
    <h3>${product.title}</h3>
    <p>${product.price}</p>
    <button class="buy-button" type="button">Купить</button>
    </div>`
}

// const renderGoodsList = list => {
//     let goodsList = list.map(item => renderGoodsItem(goods))

//   const goodsListDiv = document.querySelector('.goods-list')
//   goodsListDiv.innerHTML = goodsList

const rp = list => {
    document.querySelector('.goods-list').innerHTML = list.map(item => renderGoodsItem(item)).join(``)
}
const init = () => rp(goods);
window.onload = init




