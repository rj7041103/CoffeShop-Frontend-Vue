import * as yup from 'yup'

export const schemaInventory = yup.object().shape({
  name: yup.string().required('Name is required'),
  description: yup.string(),
  category: yup.string().required('Category is required'),
  presentation: yup.string().required('Presentation is required'),
  quantity: yup
    .number()
    .required('Quantity is required')
    .positive('Quantity must be positive'),
  cost: yup
    .number()
    .required('Cost is required')
    .positive('Cost must be positive'),
  image: yup.string().required('Image is required'),
})
