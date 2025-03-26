"use client"
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import Image from 'next/image';
const ResetPassword = () => {
  const [userRole, setUserRole] = useState('doctor');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<any>('');

  const handleRoleChange = (e) => setUserRole(e.target.value);
  const handleOldPasswordChange = (e) => setOldPassword(e.target.value);
  const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
  
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center min-vh-50 bg-light mt-3">
      <Row className="w-100">
        <Col xs={12} sm={3} className="d-flex justify-content-center align-items-center">
        
        </Col>
        <Col xs={12} sm={3} className="d-flex justify-content-center align-items-center border border-2">
        <Image src="/register/register.jpg" width={300} height={200} alt="Register Image" />

        </Col>
        <Col xs={12} sm={3} className="d-flex justify-content-center align-items-center border border-2">
    
          <div style={{ width: '400px', height: '500px' }}>
            <h1 className="text-center mb-4">Reset Password</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="userRole" className="mb-3">
                <Form.Label>Select Role:</Form.Label>
                <Form.Control as="select" value={userRole} onChange={handleRoleChange}>
                  <option value="doctor">Doctor</option>
                  <option value="patient">Patient</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="oldPassword" className="mb-3">
                <Form.Label>Old Password:</Form.Label>
                <Form.Control
                  type="password"
                  value={oldPassword}
                  onChange={handleOldPasswordChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="newPassword" className="mb-3">
                <Form.Label>New Password:</Form.Label>
                <Form.Control
                  type="password"
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="confirmPassword" className="mb-3">
                <Form.Label>Confirm New Password:</Form.Label>
                <Form.Control
                  type="password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  required
                />
              </Form.Group>
              {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
              <Button variant="primary" type="submit" className="w-100 mt-3">
                Submit
              </Button>
            </Form>
          </div>
        </Col>
        <Col xs={12} sm={3} className="d-flex justify-content-center align-items-center">
          
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPassword;
