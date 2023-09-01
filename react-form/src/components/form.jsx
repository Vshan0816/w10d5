import { useState, useEffect } from "react"
// tie useeffect to handlechange
// tracking name, email, phone number
// multiple variables in dependency array
// callback function
// in callback, we update state, that re-renders, it should re-render errors
// callback should be handleSubmit?

function Form() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [phoneType, setPhoneType] = useState("")
    const [staff, setStaff] = useState("")
    const [bio, setBio] = useState("")
    const [signUp, setSignUp] = useState("")
    
    const [errorMessages, setErrorMessages] = useState([])

    useEffect(async () => {
        // const updateError = async () => { 
        // handleSubmit()
        handleSubmit()
        // }
        // updateError()

    }, [name, email, phoneNumber])

    const validates = () => {
        console.log("validates")
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

        return errors
    }

    const showErrors = () => {
        if (!errorMessages.length) {
            return null;
        } else {
            return (
            <ul> 
                {errorMessages.map(error => <li>{error}</li>)}
            </ul>
            )
        }
    }

    const handleChange = (field) => {
        console.log("change")
        return (e) => {
            switch(field){
                case "name":
                    setName(e.target.value)
                    break;
                case "email":
                    setEmail(e.target.value)
                    break;
                case "phone number":
                    setPhoneNumber(e.target.value)
                    break;
                // case "phone type":
                //     setPhoneType(e.target.value)
                //     break; 
                // case "bio ":
                    // setBio(e.target.value)
                    // break;
                // case "name":
                //     setName(e.target.value)
                //     break;
                // case "name":
                //     setName(e.target.value)
                //     break;           
                default:
                    break;
            }
        }
        
    }

    const handleSubmit = (e) => {
        // e.preventDefault()
        console.log("submit")
    
            
        let errors = validates()

            if (errorMessages.length) {
                setErrorMessages(errors)
            } else {
                let user = {
                    name,
                    email,
                    phoneNumber
                }
                console.log(user)
                setErrorMessages([])
            }
            
        
    }

    return(
        <>

        {showErrors()}

        <form className="form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={handleChange("name")}/>
            

            <input type="text" placeholder="Email" value={email} onChange={handleChange("email")}/>

            <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={handleChange("phone number")}/>

            {/* <label>Phone Type: 
                <select name="phoneType" onChange={handleChange("phone type")}>
                    <option value="default" disabled="disabled" selected="selected"></option>
                    <option value="mobile">mobile</option>
                    <option value="home">home</option>
                    <option value="work">work</option>
                </select>
            </label> */}

            {/* <label>Instructor
                <input type="radio" name="Staff" value="instructor" onChange={handleChange}/>
            </label>
            <label>Student
                <input type="radio" name="Staff" value="student" onChange={handleChange}/>
            </label>  */}

            {/* <label>Bio: 
                <textarea name="Bio" rows="4" cols="50" onChange={handleChange("bio")}></textarea>
            </label> */}

            {/* <label>Email subscription sign up: 
                <label> Yes
                <input type="checkbox" value="Yes" onChange={handleChange}/>
                </label>
                <label> No
                <input type="checkbox" value="No" onChange={handleChange}/>
                </label>
            </label> */}

            <button>Submit</button>
        </form>
        </>
    )
}

export default Form