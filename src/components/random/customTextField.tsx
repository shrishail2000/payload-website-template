'use client';

import { TextField, useDocumentInfo, useField } from "@payloadcms/ui"
import { TextFieldClientComponent } from "payload"

const CustomTextField: TextFieldClientComponent = (props) => {
    const doc = useDocumentInfo();
    const field = useField({ path: props.path });

    let error = null;

    return (<div>
        <TextField {...props} />
    </div>)
}

export { CustomTextField }