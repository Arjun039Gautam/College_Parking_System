import Faculty from "./user/Faculty.js"
import Student from "./user/Student.js"
import Cycle from "./vehicle/Cycle.js"
import Bike from "./vehicle/Bike.js"
import Car from "./vehicle/Car.js"
import Monthly from "./pass/Monthly.js"
import Yearly from "./pass/yearly.js"
import Daily from "./pass/daily.js"

document.addEventListener("DOMContentLoaded",(e) => {
    let name = document.getElementById("userName")
    let contact = document.getElementById("userContact")
    let role = document.getElementById("role")
    let userSaveBtn = document.getElementById("userSaveBtn")

    userSaveBtn.addEventListener('click', (e) => {
        let user = null
        e.preventDefault()
        if (name.value && contact.value && role.value) {
            user = role.value === "student" 
                        ? (new Student(name.value, contact.value)) 
                        : (new Faculty(name.value, contact.value))

            alert(`${user.name} successfully registered`)
            console.log(user)
            document.querySelector(".user").style.display = 'none'
        }else{
            alert("Please fill out the required fields")
        }
        let vehicleId = document.getElementById("vehicleId")
        let type = document.getElementById("type")
        let vehicleSaveBtn = document.getElementById("vehicleSaveBtn")

        vehicleSaveBtn.addEventListener('click', (e) => {
            let vehicle=null
            e.preventDefault()
            if(vehicleId.value && type.value) {
                switch(type.value){
                    case 'cycle':
                        vehicle = new Cycle(vehicleId.value, user)
                    break
                    case 'bike':
                        vehicle = new Bike(vehicleId.value, user)
                    break
                    case 'car':
                        vehicle = new Car(vehicleId.value, user)
                }
                alert(`successfully registered`)
            console.log(vehicle)
            document.querySelector(".vehicle").style.display = 'none'
        }else{
            alert("Please fill out the required fields")
        }

        const passChoice = document.querySelector('.passchoice')
        
        let dailyPass = new Daily(vehicle)
        const dailyPassBtn = document.createElement("Input")
        dailyPassBtn.setAttribute("type", 'button')
        dailyPassBtn.setAttribute("value", `Daily : ${dailyPass.price}`)
        dailyPassBtn.addEventListener('click', (e) => {
            passChoice.style.display = 'none'
            dailyPass.print()
        })
        passChoice.appendChild(dailyPassBtn)

        let monthlyPass = new Monthly(vehicle)
        const monthlyPassBtn = document.createElement("Input")
        monthlyPassBtn.setAttribute("type", "button")
        monthlyPassBtn.setAttribute("value", `Monthly : ${monthlyPass.price}`)
        monthlyPassBtn.addEventListener('click', (e) => {
            passChoice.style.display = 'none'
            monthlyPass.print()
        })
        passChoice.appendChild(monthlyPassBtn)

        
        let yearlyPass = new Yearly(vehicle)
        const yearlyPassBtn = document.createElement("Input")
        yearlyPassBtn.setAttribute("type", "button")
        yearlyPassBtn.setAttribute("value", `Yearly : ${yearlyPass.price}`)
        yearlyPassBtn.addEventListener('click', (e) => {
            passChoice.style.display = 'none'
         yearlyPass.print()
        })
        passChoice.appendChild(yearlyPassBtn)

        })
    })
})