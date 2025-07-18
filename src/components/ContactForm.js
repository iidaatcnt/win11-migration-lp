import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

function ContactForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // In a real application, you would send this data to a backend server.
    // For this example, we'll just simulate a successful submission.
    console.log('Form Data Submitted:', formData);

    setTimeout(() => {
      setStatus('success');
      setFormData({
        companyName: '',
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 1500);

    // Example of how you might send data to a backend (uncomment and modify for real use):
    /*
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          companyName: '',
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
    */
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center mb-5">お問い合わせ</h2>
          {status === 'success' && <Alert variant="success">お問い合わせありがとうございます。内容を確認後、ご連絡いたします。</Alert>}
          {status === 'error' && <Alert variant="danger">送信中にエラーが発生しました。恐れ入りますが、再度お試しください。</Alert>}
          {status === 'sending' && <Alert variant="info">送信中...</Alert>}
          <Form onSubmit={handleSubmit} className="text-start p-4 border rounded shadow-sm bg-white">
            <Form.Group className="mb-3" controlId="formCompanyName">
              <Form.Label>会社名 <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                placeholder="貴社名"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>ご担当者名 <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                placeholder="お名前"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>メールアドレス <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="email"
                placeholder="your@example.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>電話番号</Form.Label>
              <Form.Control
                type="tel"
                placeholder="000-0000-0000"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>お問い合わせ内容 <span className="text-danger">*</span></Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="ご質問やご要望など、お気軽にご記入ください。"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? '送信中...' : '送信する'}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
