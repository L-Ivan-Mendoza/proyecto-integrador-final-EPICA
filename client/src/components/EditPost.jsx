import {Modal, Button, Form} from 'react-bootstrap'
import { useFormik } from "formik"
import * as Yup from 'yup'
import {usePost} from "../context/PostProvider"


const EditPost = ({showModal, handleClose, editPost, post}) => {

    const {title, description, imgURL} = post

    ///// Utilizamos Yup para validar los imputs ////////
    const validationSchema = Yup.object({
        title: Yup.string().required('Este campo es obligatorio'),
        description: Yup.string().required('Este campo es obligatorio'),
        imgURL: Yup.string().required('Este campo es obligatorio'),
    })

    /////// Utilizamos Formik para la gestion de datos del formulario //////////
    const formik = useFormik({
        initialValues: {
            title: title,
            description: description,
            imgURL: imgURL,
        },

        validationSchema: validationSchema,

        onSubmit:async (values) => {
            console.log('Datos del formulario', JSON.stringify(values));

            await editPost(values)
            handleClose()
        },
    })

  /////// Creacion del modal ////////
  return (
        
    <Modal show={showModal} onHide={handleClose} >
        <Modal.Header closeButton>
            <Modal.Title>Editar Post</Modal.Title>
        </Modal.Header>

        <Modal.Body>

            {/* ///// Formulario //////////*/}
            <Form onSubmit={formik.handleSubmit} className='px-3'>

            <div className="mb-3 mt-1">
                    <label htmlFor='title' className='form-label'> Título </label>
                    <input type="text" className='form-control' id='title' name='title' 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}/>

                    {formik.touched.title && formik.errors.title ? (
                        <div className="text-danger">{formik.errors.title}</div>
                    ): null}
                                    
                </div>
                <div className="mb-3 mt-1">
                    <label htmlFor='description' className='form-label'> Descripción </label>
                    <textarea className='form-control' id='description' name='description' 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                    rows={3}
                    cols={50}/>

                    {formik.touched.description && formik.errors.description ? (
                        <div className="text-danger">{formik.errors.description}</div>
                    ): null}
                                    
                </div>
                <div className="mb-3 mt-1">
                    <label htmlFor='imgURL' className='form-label'> Imágen </label>
                    <input type="text" className='form-control' id='imgURL' name='imgURL' 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.imgURL} placeholder='url-de-imagen.com'/>

                    {formik.touched.imgURL && formik.errors.imgURL ? (
                        <div className="text-danger">{formik.errors.imgURL}</div>
                    ): null}
                                    
                </div>
                <div className="text-end">
                    <Button className='px-5' variant='success' type='submit' > Editar </Button>
                </div>

            </Form>

        </Modal.Body>

    </Modal>
)
}

export default EditPost