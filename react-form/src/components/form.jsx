import { useState } from "react"


function Form() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [phoneType, setPhoneType] = useState("")
    const [staff, setStaff] = useState("")
    const [bio, setBio] = useState("")
    const [signUp, setSignUp] = useState("")
    
    const [errors, setErrors] = useState([])

    const validates = () => {
        const errors = [];

        if (name.length === 0){
            errors.push("Name is required, can not be empty.");
        } 

        if (email.length === 0){
            errors.push("Email is required, Cannot be empty.")
        }

        if (!email.includes("@")) {
            errors.push("Email should be properly formatted.")
        }
        
        if (phoneNumber) {

            if (phoneNumber.length !== 10 || typeof phoneNumber === "number") {
                errors.push("Phone number is optional, if presented, it should be properly formatted.")
            }

            if (phoneType.value === "default") {
                errors.push("Bio should have a character limit of 280 characters.")
            }
        }

        if (bio.length > 280) {
            errors.push("Bio should have a character limit of 280 characters.")
        }
    }

    const showErrors = () => {
        if (!errors.length) {
            return null;
        } else {
            
            <ul> 
                {errors.map(error => <li>{error}</li>)}
            </ul>
        }
    }

    const handleChange = () => {
        console.log("handling change")
    }

    const handleSubmit = () => {
        console.log("handling submit")
    }

    return(
        <>

        {showErrors()}

        <form className="form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={handleChange("name")}/>
            div

            <input type="text" placeholder="Email" value={email} onChange={handleChange("email")}/>

            <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={handleChange("phone number")}/>

            <label>Phone Type: 
                <select name="phoneType" onChange={handleChange("phone type")}>
                    <option value="default" disabled="disabled" selected="selected"></option>
                    <option value="mobile">mobile</option>
                    <option value="home">home</option>
                    <option value="work">work</option>
                </select>
            </label>

            <label>Instructor
                <input type="radio" name="Staff" value="instructor" onChange={handleChange}/>
            </label>
            <label>Student
                <input type="radio" name="Staff" value="student" onChange={handleChange}/>
            </label> 

            <label>Bio: 
                <textarea name="Bio" rows="4" cols="50" onChange={handleChange("Bio")}></textarea>
            </label>

            <label>Email subscription sign up: 
                <label> Yes
                <input type="checkbox" value="Yes" onChange={handleChange}/>
                </label>
                <label> No
                <input type="checkbox" value="No" onChange={handleChange}/>
                </label>
            </label>

            <button>Submit</button>
        </form>
        </>
    )
}

export default Form