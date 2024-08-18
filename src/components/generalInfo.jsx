// A section to add general information like name, email and phone number.

import { useState } from "react";

function GeneralInfo() {
    // generalInfo object and its state
    const generalInfo = {
        name: "Rehan",
        email: "test",
        phone: "test"
    }
    
    const [info, setInfo] = useState(generalInfo);

    // for edit button
    const [editable, setEditable] = useState(true);

    function makeEdit() {
        setEditable(false);
        setDisplay("none");
    }

    // for submit button
    const [display, setDisplay] = useState("none");

    function submit() {
        setDisplay("block");
        setEditable(true);
    }
    
    return (
        <section>
            <h2>General Information</h2>

            {/* input section */}
            Name:   <input  
                        type="text" value={info.name}
                        onChange={(e) => setInfo({ ...info, name: e.target.value})} 
                        disabled={editable} />                      
                    <br />

            Email: <input   
                        type="text" value={info.email}
                        onChange={(e) => setInfo({ ...info, email: e.target.value})} 
                        disabled={editable} />                      
                    <br />

            Phone number: <input    
                            type="text" value={info.phone}
                            onChange={(e) => setInfo({ ...info, phone: e.target.value})} 
                            disabled={editable} />                      
                    <br />
            
            {/* output section */}
            <p style={{display:display}}> 
                Name: "{info.name}"    <br />
                Email: "{info.email}"   <br />
                Phone Number: "{info.phone}"    <br />
            </p>

            {/* BUTTONS */}
            <button onClick={makeEdit}>Edit</button>
            <button onClick={submit}>Submit</button>

        </section>
    )
}

export { GeneralInfo };