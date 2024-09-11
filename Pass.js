class Pass{
    constructor(vehicle){
        this.vehicle = vehicle
    }

    print(){
        let passtobePrint = `
            <label for="">Name</label>
            <label for="">${this.vehicle.owner.name}</label>
            <label for="">Vehicle Id</label>
            <label for="">${this.vehicle.id}</label>
            <label for="">Expiry</label>
            <label for="">${this.expiry}</label>  
        `
        const pass = document.querySelector('.pass')
        pass.innerHTML = passtobePrint
    }
}
export default Pass