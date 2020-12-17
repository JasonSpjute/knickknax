import { ProxyState } from "../AppState.js"
import KK from "../Models/KK.js"

class KKService {
    constructor() {
        console.log("Service Made")
    }
    createKK(obj) {
        let newKK = new KK(obj)
        console.log(newKK)
        ProxyState.kks = [...ProxyState.kks, newKK]
    }
}

export const kkService = new KKService()