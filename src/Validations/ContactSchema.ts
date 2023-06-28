import * as yup from "yup"

const ContactSchema = yup.object({
    name: yup
        .string()
        .required("username cannot be empty")
        .min(6, "username must be at least 6 characters")
        .max(20, "username must be maximum 20 characters"),
    email: yup
        .string().email().required("email cannot be empty"),
    occupation: yup
        .string()
        .required("occupation cannot be empty"),
    work: yup
        .string()
        .required("occupation cannot be empty")
        .min(6, "field must be at least 6 characters")
        .max(20, "field must be maximum 20 characters"),
    Message: yup
        .string()
        .required("occupation cannot be empty")
})

export type ContactSchemaData = yup.InferType<typeof ContactSchema>
export default ContactSchema