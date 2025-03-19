'use client';

import { RichText } from "@payloadcms/richtext-lexical/react";
import { TextareaInput, useField } from "@payloadcms/ui"
import { TextFieldClientComponent } from "payload"

const AiSummaryField: TextFieldClientComponent = ({ path }) => {
    const { value, setValue, } = useField<string>({ path: path });

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log('Handle change for ai summary field')
        setValue(e.target.value);
    }

    const handleGenerateSummary = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Generating summary')
        const random = Math.floor(Math.random() * 100)
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${random}`);
        const data = await response.json();
        setValue(data.body);
    }

    return (<div className="field-type textarea" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <button className="btn btn--style-secondary btn--withoutPopup" style={{ paddingLeft: '10px', paddingRight: '10px', marginBottom: '0px', width: 'fit-content' }} onClick={handleGenerateSummary}>Generate Summary</button>
        {/* <textarea className="field" value={value} onChange={handleChange} placeholder="Enter summary here or generate one using the above button" /> */}
        <TextareaInput path={path} value={value} onChange={handleChange} placeholder="Enter summary here or generate one using the above button" />
    </div>)
}

export { AiSummaryField }