import Container  from "react-bootstrap/Container";
import Row  from "react-bootstrap/Row";
import Col  from "react-bootstrap/Col";
import Form  from "react-bootstrap/Form";
import Button  from "react-bootstrap/Button";
import Card  from "react-bootstrap/Card";
import { useState } from "react";

const Register=()=>{

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [errors,setErrors]=useState<any>({});

    const login=(e:React.SyntheticEvent)=>{
        e.preventDefault();
        console.log(name,email,password);
    }

    return (
        <Container>
            <Row>
                <Col lg="5" md="10" sm="10" className="mx-auto">
                    <Card className="mt-5">
                        <Card.Body>
                            <h4>Crear Cuenta</h4> <hr />
                          <Form onSubmit={login}>  
                          <Form.Group className="mb-3" controlId="name">
                              <Form.Label>Nombre</Form.Label>
                              <Form.Control
                              value={name}
                              onChange={e=>setName(e.target.value)}
                              type="text" placeholder="eg. Jhon Doe"></Form.Control>
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="email">
                              <Form.Label>Correo Electronico</Form.Label>
                              <Form.Control 
                              value={email}
                              onChange={e=>setEmail(e.target.value)}
                              type="email" placeholder="eg. JhonDoe@gmail.com"></Form.Control>
                          </Form.Group>  

                          <Form.Group className="mb-3" controlId="password">
                              <Form.Label>Password</Form.Label>
                              <Form.Control
                              value={password}
                              onChange={e=>setPassword(e.target.value)}
                              type="password" placeholder="*****"></Form.Control>
                          </Form.Group>

                        <Button type="submit">Crear Cuenta</Button>

                        </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )

}

export default Register;