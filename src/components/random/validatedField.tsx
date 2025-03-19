import { type Field } from 'payload'

export const ValidatedField: Field = {
    type: 'text',
    name: 'canonical',
    admin: {
        components: {
            Field: {
                path: '/components/random/customTextField',
                exportName: 'CustomTextField',
            },
            // afterInput: {
            //     path: '/components/random/customErrorComponent',
            //     exportName: 'CustomErrorComponent',
            // }
        },
    },
    validate: (value) => {
        if (!value.startsWith("https://")) return "Canonical URL must start with https://";
        return true;
    },
}