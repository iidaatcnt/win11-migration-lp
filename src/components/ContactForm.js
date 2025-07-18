import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert, Card } from 'react-bootstrap';

function ContactForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [step, setStep] = useState(1); // 1:入力, 2:確認, 3:完了
  const [status, setStatus] = useState(null); // null, 'sending', 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    // ここでバリデーションを行うことも可能
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = async () => {
    setStatus('sending');

    // デモのため、実際のメール送信は行いません。
    // 送信先: info@cntsv.jp
    console.log('Form Data Submitted to info@cntsv.jp:', formData);

    setTimeout(() => {
      setStatus('success');
      setStep(3);
      // フォームデータをクリアする場合はここで
      // setFormData({ companyName: '', name: '', email: '', phone: '', message: '' });
    }, 1500);

    // 実際のメール送信処理の例（バックエンドが必要）
    /*
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, to: 'info@cntsv.jp' }),
      });

      if (response.ok) {
        setStatus('success');
        setStep(3);
      } else {
        setStatus('error');
        setStep(1); // エラー時は入力画面に戻すなど
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setStep(1);
    }
    */
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center mb-5">お問い合わせ</h2>

          {status === 'error' && <Alert variant="danger">送信中にエラーが発生しました。恐れ入りますが、再度お試しください。</Alert>}

          {step === 1 && (
            <Form onSubmit={handleNext} className="text-start p-4 border rounded shadow-sm bg-white">
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

              <Button variant="primary" type="submit" className="w-100">
                入力内容を確認する
              </Button>
            </Form>
          )}

          {step === 2 && (
            <Card className="text-start p-4 border rounded shadow-sm bg-white">
              <Card.Body>
                <Card.Title className="mb-4">入力内容のご確認</Card.Title>
                <p><strong>会社名:</strong> {formData.companyName}</p>
                <p><strong>ご担当者名:</strong> {formData.name}</p>
                <p><strong>メールアドレス:</strong> {formData.email}</p>
                <p><strong>電話番号:</strong> {formData.phone || '未入力'}</p>
                <p><strong>お問い合わせ内容:</strong></p>
                <Card.Text style={{ whiteSpace: 'pre-wrap' }}>{formData.message}</Card.Text>
                <Row className="mt-4">
                  <Col>
                    <Button variant="secondary" onClick={handleBack} className="w-100">
                      修正する
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="primary" onClick={handleSubmit} className="w-100" disabled={status === 'sending'}>
                      {status === 'sending' ? '送信中...' : 'この内容で送信する'}
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          )}

          {step === 3 && (
            <Card className="text-center p-5 border rounded shadow-sm bg-white">
              <Card.Body>
                <h3 className="text-success mb-4">お問い合わせありがとうございます！</h3>
                <p className="lead">内容を確認後、担当者よりご連絡させていただきます。</p>
                <p>今しばらくお待ちください。</p>
                <Button variant="primary" href="/">トップページに戻る</Button>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;