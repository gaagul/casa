import React,{useRef} from 'react'
import {Form, Button, Card, Container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Authentication from '../auth'
import {Link} from 'react-router-dom'



function Signin() {
  const emailRef =useRef()
  const passwordRef =useRef()
  const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        
        Authentication.signIn(emailRef.current.value,passwordRef.current.value,()=>{
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
            <h2 className='text-center mb-4'>Sign In</h2>
            <Form onSubmit={(e)=>handleSubmit(e)}>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Button className='w-100 mt-4' type="submit">Sign In</Button>
            </Form>  
        </Card.Body>
    </Card>
    <div className='w-100 text-center mt-2'>Don't have an account? <Link to="/signup">Sign Up</Link></div>
            </div>

    </Container>
    
    </>
  )
}

export default Signin