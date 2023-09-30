import React, { useState } from 'react';
import { Col, Row, Container, Card, Form } from 'react-bootstrap';
import { FormattedMessage, useIntl } from 'react-intl'

function LogIn() {
  const intl = useIntl();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    setEmailValid(emailRegex.test(email));
  };

  const validatePassword = (password) => {
    const regex = /^[A-Za-z\d@$!%?&]{8,}$/;
    setPasswordValid(regex.test(password));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();


    if (!emailValid || !passwordValid) {
      alert( intl.formatMessage({ id: "error auth" }));
      return;
    }
    else if (email == '' || password == '') {
      alert(intl.formatMessage({ id: "error auth" }));
      return;
    }
    else {
      console.log('Login clicked. Email:', email, 'Password:', password);
      window.open('./cafes', '_self')
    }

  };

  const handleCancel = (event) => {
    event.preventDefault();

    // Borrar los campos de correo electrónico y contraseña
    setEmail('');
    setPassword('');

    // Mostrar una alerta de que el inicio de sesión ha sido cancelado
    alert(intl.formatMessage({ id: "login cancelado" }));
  };

  return (
    <div>
      <Container fluid style={{ background: 'white' }}>
        <Row className='vh-100 d-flex justify-content-center align-items-center'>
          <Col md={8} lg={5} xs={12}>
            <Card className='shadow' style={{ borderRadius: '1rem', background: 'rgba(255, 255, 255, 0.7)' }}>
              <Card.Body>
                <div className='mb-3 mt-md-4'>
                  <div className='text-center'>
                    <h2 className='fw-bold mb-2 text-uppercase'>
                      <FormattedMessage id='login'></FormattedMessage>
                    </h2>
                  </div>
                  <div className='mb-3'>
                    <Form style={{ maxWidth: '80%' }} className='container'>
                      <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label className='text-center'>
                          <FormattedMessage id='user'></FormattedMessage></Form.Label>
                        <Form.Control
                          type='email'
                          placeholder={intl.formatMessage({ id: "enter email" })}
                          required
                          onChange={handleEmailChange}
                          isInvalid={!emailValid}
                          isValid={emailValid && email.length > 0}
                        />
                        <Form.Control.Feedback type='invalid'>
                        <FormattedMessage id= 'email valid'></FormattedMessage>
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Label><FormattedMessage id= 'password'></FormattedMessage></Form.Label>
                        <Form.Control
                          type='password'
                          placeholder={intl.formatMessage({ id: "password" })}
                          required
                          onChange={handlePasswordChange}
                          isInvalid={!passwordValid}
                          isValid={passwordValid && password.length > 0}
                        />
                        <Form.Control.Feedback type='invalid'>
                        <FormattedMessage id= 'password valid'></FormattedMessage>
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                        <p className='small mb-5'>
                          <a className='text-primary' href='#!'>
                          <FormattedMessage id= 'forgot'></FormattedMessage>
                          </a>
                        </p>
                      </Form.Group>
                      <div className='d-flex justify-content-between'>
                        <button className='btn btn-outline-dark btn-lg px-5' variant='primary' type='submit' style={{ '--bs-btn-bg': 'green' }} onClick={handleSubmit}>
                        <FormattedMessage id= 'ingresar'></FormattedMessage>
                        </button>
                        <button className='btn btn-outline-dark btn-lg px-5' variant='primary' type='button' style={{ '--bs-btn-bg': 'red' }} onClick={handleCancel}>
                        <FormattedMessage id= 'cancelar'></FormattedMessage>
                        </button>
                      </div>
                    </Form>

                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );


}

export default LogIn;