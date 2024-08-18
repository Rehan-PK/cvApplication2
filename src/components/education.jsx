// A section to add your educational experience (school name, title of study and date of study)

import { useState } from "react";

function Education() {
    // education object and its state
    const educationInfo = {
        school: "ABC",
        title: "study",
        date: "date"
    }

    const [education, setEducation] = useState(educationInfo)
    
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
            <h2>Educational Experience</h2>

            {/* input section */}
            School:
                <input 
                    type="text"
                    value={education.school}
                    onChange={(e) => setEducation({...education, school: e.target.value})}
                    disabled={editable}/>   <br />

            Title:
                <input 
                    type="text"
                    value={education.title}
                    onChange={(e) => setEducation({...education, title: e.target.value})}
                    disabled={editable}/>   <br />

            Date of study:
                <input 
                    type="text"
                    value={education.date}
                    onChange={(e) => setEducation({...education, date: e.target.value})}
                    disabled={editable}/>   <br />

            {/* output section */}
            <p style={{display: display}}> School name    <br />
                School: {education.school}     <br />
                Title of study: {education.title}   <br />
                Date of study: {education.date}   <br />
            </p>

            {/* BUTTONS */}
            <button onClick={makeEdit}>Edit</button>
            <button onClick={submit}>Submit</button>

        </section>
    )
}

export { Education };