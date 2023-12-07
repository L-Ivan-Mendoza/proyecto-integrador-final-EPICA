import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';

export function Login() {
  
  const { register, handleSubmit, formState: {errors},} = useForm()
  const {signin, isAuth, errors: loginErrors} = useAuth()
  
  const navigate = useNavigate()

    useEffect(() => {
      if(isAuth) navigate("/profile")
    }, [isAuth])

    const onSubmit = handleSubmit ((values) => {
        signin(values)
      })
  return (
    <div className="row align-items-center vh-100 px-5">
    <div className="container-fluid col-md-3 col-sm-6 bg-dark text-light border rounded-4 border-info">
        <h2 className='text-center my-4'>Iniciar Sesión</h2>
    <Form onSubmit={onSubmit}>

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
        {/* POR ALGUN MOTIVO NO ME RECONOCE LA FUNCION MAP POR LO QUE SE MANDA loginErrors COMPLETO */}
        {<div><p className='text-danger'>{loginErrors[0]}</p></div>}
        {/*loginErrors.map((err, i) => (
          <div key={i}><p className='text-danger'>{err}</p></div>
        ))*/}
        </Form.Text>
      </Form.Group>
      <div className="d-flex align-items-center justify-content-center my-4">
      <Button className='border-info' variant="primary" type='submit'>
        Ingresar
      </Button>
      </div>
      <div 
      className="container"><p className='fs-6'>
        ¿No tienes una cuenta?
      <Link className='text-decoration-none' to={"/register"}> Registrarse.</Link>
      </p>
      </div>
    </Form>
    </div>
    </div>
  );
}
