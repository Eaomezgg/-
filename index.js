function opencart()
{
    $('#modalcart').css('display','flex')
}

function openproductdetail()
{
    $('#modaldesc').css('display','flex')
}

function closemodal(){
    $(".modal").css('display','none')
}



var product = [{
    id: 1,
    img:'https://plus.unsplash.com/premium_photo-1694540110932-0c03eaae840c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Matcha Green Tea',
    price: 60,
    temptype: '',
    type: 'CoffeeTea',
}, {
    id: 2,
    img:'https://plus.unsplash.com/premium_photo-1673545518947-ddf3240090b1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Latte',
    price: 50,
    temptype: '',
    type: 'CoffeeTea',
}, {
    id: 3,
    img:'https://plus.unsplash.com/premium_photo-1675667390417-d9d23160f4a6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Orang juice',
    price: 40,
    temptype: '',
    type: 'FruitSyrups',
}, {
    id: 4,
    img:'https://plus.unsplash.com/premium_photo-1695554950204-ef8551c70d83?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Blue Hawaii',
    price: 40,
    temptype: '',
    type: 'FruitSyrups',
}, {
    id: 5,
    img:'https://plus.unsplash.com/premium_photo-1664647903543-2ef213d1e754?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Milk',
    price: 45,
    temptype: '',
    type: 'MilkDairy',
}, {
    id: 6,
    img:'https://images.unsplash.com/photo-1686638745403-d21193f16b2f?q=80&w=1906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Pink Milk',
    price: 40,
    temptype: '',
    type: 'MilkDairy',
}];



$(document).ready(() => {
    let html = '';
    for (let i = 0; i < product.length; i++) {
        html += `
            <div onclick="openproductdetail(${product[i].id})" class="product-items ${product[i].type}" data-name="${product[i].name.toLowerCase()}" > 
                <img src="${product[i].img}" class="product-img" alt="">
                <div class="product-nameprice">
                    <div class="font-tea">${product[i].name}</div>
                    <div class="font-teaprice">${product[i].price} bath</div>
                </div>
            </div>`;
    }
    $("#product-list").html(html);

    $(".serch").on("input", function () {
        let searchText = $(this).val().toLowerCase();
        $(".product-items").each(function () {
            let productName = $(this).data("name");
            if (productName.includes(searchText)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});


function searchproduct(param)
{
    console.log(param)
    $(".product-items").css('display','none')

    if (true) {
        $("."+param).css('display','block')
    }

}
