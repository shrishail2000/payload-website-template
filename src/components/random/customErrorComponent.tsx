'use client';

import { useField } from "@payloadcms/ui";
import type { TextFieldErrorClientComponent } from "payload"

const CustomErrorComponent: TextFieldErrorClientComponent = (props) => {
    const { value, errorMessage } = useField({ path: props.path });

    if (!value?.startsWith('https://')) {
        return <p style={{ color: 'red' }}>{errorMessage}</p>
    }

    return null;
}

export { CustomErrorComponent };