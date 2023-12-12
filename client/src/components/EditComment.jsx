import {Modal, Button, Form} from 'react-bootstrap'
import { useFormik } from "formik"
import * as Yup from 'yup'
import {useComment} from "../context/CommentProvider"

const EditComment = ({showModal, handleClose, editComment, comment}) => {

    const {description, _id} = comment

    ///// Utilizamos Yup para validar los imputs ////////
    const validationSchema = Yup.object({
        description: Yup.string().required('Este campo es obligatorio'),
    })

    /////// Utilizamos Formik para la gestion de datos del formulario //////////
    const formik = useFormik({
        initialValues: {
            description: description,
        },

        validationSchema: validationSchema,

        onSubmit:async (values) => {
            console.log('Datos del formulario', JSON.stringify(values));

            await editComment(values, _id)
            console.log("values: ", values, _id);
            handleClose()
        },
    })

  /////// Creacion del modal ////////
  return (
        
    <Modal show={showModal} onHide={handleClose} >
        <Modal.Header closeButton>
            <Modal.Title>Editar Comentario</Modal.Title>
        </Modal.Header>

        <Modal.Body>

            {/* ///// Formulario //////////*/}
            <Form onSubmit={formik.handleSubmit} className='px-3'>

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
                
                <div className="text-end">
                    <Button className='px-5' variant='success' type='submit' > Editar </Button>
                </div>

            </Form>

        </Modal.Body>

    </Modal>
)
}

export default EditComment