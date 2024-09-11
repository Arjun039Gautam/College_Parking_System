import Pass from "./Pass.js"
class Yearly extends Pass{
    constructor(vehicle){
        super(vehicle)
        this.price = this.getPrice(vehicle.type)
        this.expiry = this.getExpiry()
    }
    getPrice(type){
        switch(type){
            case 'cycle':
                return 1000
            case 'bike':
                return 2000
            case 'car':
                return 5000
        }
    }
    getExpiry(){
        let currentDateTime = new Date()
        currentDateTime.setFullYear(currentDateTime.getFullYear() +1)
        return currentDateTime
    }
}
export default Yearly