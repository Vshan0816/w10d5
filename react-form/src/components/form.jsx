
// e.target where?
function form() {
    return(
        <>
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={handleChange("name")}/>
            <input type="text" placeholder="Email" value={email} onChange={handleChange("email")}/>
            <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={handleChange("phone number")}/>
            <select name="phoneType" onChange={handleChange("phone type")}>
                <option value="mobile">mobile</option>
                <option value="home">home</option>
                <option value="work">work</option>
                
            </select>
            <label>Instructor
                <input type="radio" name="Staff" value="instructor" onChange={handleChange}/>
            </label>
            <label>
                <input type="radio" name="Staff" value="student" onChange={handleChange}/>
            </label>
            <textarea name="Bio" rows="4" cols="50" onChange={handleChange("Bio")}></textarea>
            <input type="checkbox" value={name} onChange={handleChange}/>
            <button>Submit</button>

        </form>
        </>
    )
}