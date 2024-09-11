import Pass from "./Pass.js";

class Daily extends Pass{
    constructor(vehicle){
        super(vehicle)
        this.price = this.getPrice(vehicle.type)
        this.expiry = this.getExpiry()
    }
    getPrice(type){
        switch(type){
            case "cycle":
                return 10
            case "bike":
                return 20
            case "car":
                return 50
        }
    }
    getExpiry(){
        let currentDateTime = new Date()
        currentDateTime.setDate(currentDateTime.getDate() +1)
        return currentDateTime
    }
}
export default Daily