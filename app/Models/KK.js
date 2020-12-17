import { generateId } from "../Utils/GenerateId.js"

export default class KK {
    constructor({ name, image, price, description, quantity, id, cartQuantity }) {
        this.id = id || generateId()
        this.name = name
        this.image = image
        this.price = price
        this.description = description
        this.quantity = quantity
        this.cartQuantity = cartQuantity || 0
    }

    get Template() {
        return /*html*/`
        <div class="col-3 py-3" >
            <div class="card">
                <img class="card-img-top" src="${this.image}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <h6 class="card-subtitle" >$${this.price}</h6>
                    <p class="card-text">${this.description}</p>
                    <i class="card-text">Remaining: ${this.quantity}</i><br/>
                    <a href="#" class="btn btn-primary" onclick="app.kkController.addKK('${this.id}')">Add to Cart</a>
                </div>
            </div>
        </div>
        `
    }

    get CartTemplate() {
        return /*html*/`
            <div class="col-4 py-3">
                <div class="card">
                    <img class="card-img-top" src="${this.image}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${this.name}</h5>
                        <h6 class="card-subtitle" >$${this.price}</h6>
                        <p class="card-text">Quantity: ${this.cartQuantity}</p>
                    </div>
                </div>
            </div>
        `
    }
}