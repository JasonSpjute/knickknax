import { ProxyState } from "../AppState.js"
import KK from "../Models/KK.js"

class KKService {
    addKK(id) {
        let arr = ProxyState.kks.filter(kk => kk.id == id)
        let object = arr[0]
        object.cartQuantity++
        object.quantity--
        ProxyState.kks = ProxyState.kks
    }
    
    createKK(obj) {
        let newKK = new KK(obj)
        ProxyState.kks = [...ProxyState.kks, newKK]
    }
    cartTotal() {
        let total = 0
        ProxyState.kks.forEach(kk => total += kk.cartQuantity * kk.price)
        return total
    }
}

export const kkService = new KKService()