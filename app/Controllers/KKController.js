import { ProxyState } from "../AppState.js"
import { kkService } from "../Services/KKService.js"

function _drawKKs() {
    let template = ""
    ProxyState.kks.forEach(function (kk) {
        template += kk.Template
    })
    document.getElementById("items").innerHTML = template
}

export default class CreateKK {

    constructor() {
        ProxyState.on("kks", _drawKKs)
        _drawKKs()


        kkService.createKK({
            name: "Corona Plush",
            price: 50,
            quantity: 20,
            description: "Not meant for snuggling; stay 6 feet away from plush",
            image: "https://bullybloggers.files.wordpress.com/2020/04/fig.-9.jpg?w=580"
        })
        kkService.createKK({
            name: "Graduating Corona Plush",
            price: 30,
            quantity: 30,
            description: "Happy Zoom Graduation!",
            image: "https://www.giantmicrobes.com/us/media/catalog/product/cache/2/small_image/9df78eab33525d08d6e5fb8d27136e95/g/r/grad-covid-pd.jpg"
        })
        kkService.createKK({
            name: "Hand Sanitizer",
            price: 100,
            quantity: 5,
            description: "Liquid of the gods",
            image: "https://www.kroger.com/product/images/xlarge/front/0007385209652"
        })
        kkService.createKK({
            name: "Toilet Paper",
            price: 200,
            quantity: 1,
            description: "Cloth of the gods",
            image: "https://m.media-amazon.com/images/I/518MhUlCV9L._AC_SS350_.jpg"
        })
        kkService.createKK({
            name: "Masks",
            price: 50,
            quantity: 10,
            description: "Cover of the gods",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-VfDpGSE0Ux-Rs_J2GsbxsLHfNm9dOHfnQxoe1cgwMsOyxVTGx3nI7g0N4ifNzWw27nPcfzAvd_TmTW7GAlcAlr7GElXDYEUPGw&usqp=CAU&ec=45750088"
        })
        kkService.createKK({
            name: "Car",
            price: 5,
            quantity: 100,
            description: "Vroom Vroom",
            image: "https://www.ikea.com/my/en/images/products/lillabo-toy-car-red__0175385_PE328763_S5.JPG"
        })
        kkService.createKK({
            name: "Snowglobe",
            price: 15,
            quantity: 10,
            description: "It snows",
            image: "https://www.womansworld.com/wp-content/uploads/2019/12/crystal-snowglobe.jpg?w=1024"
        })
        kkService.createKK({
            name: "Bobblehead",
            price: 15,
            quantity: 30,
            description: "It Fauci's",
            image: "https://cdn.cnn.com/cnnnext/dam/assets/200403150210-dr-fauci-bobblehead-full-169.jpg"
        })

    }
    newKK() {
        window.event.preventDefault()
        let form = window.event.target
        let obj = {
            name: form.name.value,
            price: form.price.value,
            quantity: form.quantity.value,
            description: form.description.value,
            image: form.image.value
        }
        kkService.createKK(obj)
    }
}