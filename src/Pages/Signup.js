import React,{useRef} from 'react'
import {Form, Button, Card, Container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Authentication from '../auth'
import{Link} from 'react-router-dom'



function Signup() {
  const emailRef =useRef()
  const passwordRef =useRef()
  const passwordConfirmRef = useRef() 
  const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        
        Authentication.signUp(emailRef.current.value,passwordRef.current.value,()=>{
        navigate("/") 
        })

    }

  return (
    <>
    <Container 
        className='d-flex align-items-center justify-content-center'
        style={{minHeight: "100vh"}}>
            <div className='w-100' style={{maxWidth: "400px"}}>
            <Card>
        <Card.Body>
            <h2 className='text-center mb-4'>Sign Up</h2>
            <Form onSubmit={(e)=>handleSubmit(e)}>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id="password-confirm">
                    <Form.Label>password Confirmation</Form.Label>
                    <Form.Control type="password" ref={passwordConfirmRef} required />
                </Form.Group>
                <Button className='w-100 mt-4' type="submit">Sign UP</Button>
            </Form>  
        </Card.Body>
    </Card>
    <div className='w-100 text-center mt-2'>Already have an account?  <Link to="/Signin">Sign In</Link></div>
            </div>

    </Container>
    
    </>
  )
}

export default Signup