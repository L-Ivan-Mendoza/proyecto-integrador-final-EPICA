import { InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect } from 'react';
import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import NavBarPublic from '../components/NavBarPublic';

function Register() {

    const { register, handleSubmit, formState: {errors} } = useForm()
    const {signup, isAuth, errors: registerErrors} = useAuth()

    const navigate = useNavigate()

    useEffect(() => {
        if(isAuth) navigate("/profile")
      }, [isAuth])

    const onSubmit = handleSubmit (async (values) => {
        signup(values)
        // try {
        //   await signup(values)

        // } catch (error) {
        //   console.error('Error durante el registro:', error)
        //   console.log(errors)
        // }
      })
  return (
    <>

    <NavBarPublic/>

    <div className="row align-items-center vh-100 px-5">
    <div className="container-fluid my-5 col-md-3 col-sm-6 bg-dark text-light border rounded-4 border-info">
        <h2 className='text-center my-4'>Crear Cuenta</h2>
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Usuario</Form.Label>
        <Form.Control
          placeholder=""
          aria-label="Username"
          aria-describedby="basic-addon1"
          {...register('username', { required: true })}
          />
          {errors.username && (<p className='text-danger'>Completar campo de Usuario.</p>)}

        </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Imagen de avatar (URL)</Form.Label>
        <Form.Control type="text" placeholder="tu-imagen.com" 
        {...register('avatarURL', { required: true })}/>
      {errors.avatarURL && (<p className='text-danger'>Completar campo de avatar.</p>)}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="ejemplo@mail.com" 
        {...register('email', { required: true })}/>
        {errors.email && (<p className='text-danger'>Completar campo de Correo electrónico.</p>)}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="" 
        {...register('password', { required: true })}/>
        <Form.Text className="text-light">
        {errors.password && (<p className='text-danger'>Completar campo de Contraseña.</p>)}
        {registerErrors.map((err, index) => (
          <div key={index}><p className='text-danger'>{err}</p></div>
          ))}
        </Form.Text>
      </Form.Group>
      <div className="d-flex container-fluid my-4 justify-content-center">
      <Button className='border-info' variant="primary" type='submit' >
        Registrarse
      </Button>
      </div>
      <div className="container"><p className='fs-6'>¿Ya tienes una cuenta?<Link className='text-decoration-none' to={"/login"}> Ingresar.</Link></p></div>
      
    </Form>
    </div>
    </div>

    </>
  )
}

export default Register;