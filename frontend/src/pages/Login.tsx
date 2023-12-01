import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';

type FormValues = {
  email: string;
  password: string;
};

function Login() {
  
  const { register, handleSubmit, formState: {errors}} = useForm<FormValues>()
  const {signin, isAuth, errors: loginErrors} = useAuth()
  const navigate = useNavigate()

    useEffect(() => {
      if(isAuth) navigate("/profile")
    }, [isAuth, navigate])

    const onSubmit = handleSubmit (async (values) => {
        try {
          await signin(values)
          // redireccionar a profile
          //navigate('/profile')
        } catch (error) {
          console.error('Error durante el login:', error)
          console.log(errors)
        }
      })
  return (
    <div className="row align-items-center vh-100 px-5">
    <div className="container-fluid col-md-3 col-sm-6 bg-dark text-light border rounded-4 border-info">
        <h2 className='text-center my-4'>Iniciar Sesión</h2>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="ejemplo@mail.com" 
        {...register('email', { required: true })}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="" 
        {...register('password', { required: true })}/>
        <Form.Text className="text-light">
        {loginErrors.map((err, index) => (
          <div key={index}><p className='text-danger'>{err}</p></div>
          ))}
        </Form.Text>
      </Form.Group>
      <div className="d-flex align-items-center justify-content-center my-4">
      <Button className='border-info' variant="primary" onClick={onSubmit}>
        Ingresar
      </Button>
      </div>
      <div className="container"><p className='fs-6'>¿No tienes una cuenta?<Link className='text-decoration-none' to={"/register"}> Registrarse.</Link></p></div>
    </Form>
    </div>
    </div>
  );
}

export default Login;