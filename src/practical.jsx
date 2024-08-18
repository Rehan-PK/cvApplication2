// A section to add practical experience (company name, position title, main responsibilities of your jobs, date from and until when you worked for that company)

import { useState } from "react";

function Practical() {
    // practical object and its state
    const practicalExperience = {
        company: "",
        positionTitle: "",
        responsibilities: "",
        dateFrom: "",
        dateTo: ""
    }

    const [practical, setPractical] = useState(practicalExperience);

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
            <h2>Practical Experience</h2>

            {/* input section */}
            Company:
                <input 
                    type="text"
                    value={practical.company}
                    onChange={(e) => setPractical({...practical, company: e.target.value})}
                    disabled={editable}/>   <br />

            Position Title:
                <input 
                    type="text"
                    value={practical.positionTitle}
                    onChange={(e) => setPractical({...practical, positionTitle: e.target.value})}
                    disabled={editable}/>   <br />

            Responsibilities:
                <input 
                    type="text"
                    value={practical.responsibilities}
                    onChange={(e) => setPractical({...practical, responsibilities: e.target.value})}
                    disabled={editable}/>   <br />

            Date (from):
                <input 
                    type="text"
                    value={practical.dateFrom}
                    onChange={(e) => setPractical({...practical, dateFrom: e.target.value})}
                    disabled={editable}/>   <br />

            Date (to):
                <input 
                    type="text"
                    value={practical.dateTo}
                    onChange={(e) => setPractical({...practical, dateTo: e.target.value})}
                    disabled={editable}/>   <br />

            {/* output section */}
            <p style={{display: display}}> 
                Company: {practical.company}    <br />
                Position Title: {practical.positionTitle}     <br />
                Responsibilities: {practical.responsibilities}   <br />
                Date (from): {practical.dateFrom}   <br />
                Date (to): {practical.dateTo}   <br />
            </p>

            {/* BUTTONS */}
            <button onClick={makeEdit}>Edit</button>
            <button onClick={submit}>Submit</button>
        </section>
    )
}

export { Practical };