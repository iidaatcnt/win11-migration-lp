import React from 'react';
import { Navbar, Container, Nav, Button, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Win11移行サポート</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#services">サービス内容</Nav.Link>
              <Nav.Link href="#features">選ばれる理由</Nav.Link>
              <Nav.Link href="#cases">導入事例</Nav.Link>
              <Nav.Link href="#price">料金</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>
              <Button variant="primary" className="ms-3">無料相談・お見積もり</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section id="hero" className="hero-section text-center py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={7}>
              <h1 className="display-4 fw-bold mb-3">Windows 10サポート終了間近！<br/>中小企業のPC移行、丸ごと安心サポート。</h1>
              <p className="lead mb-4">データ移行から設定最適化まで、プロが迅速・丁寧に代行。業務停止リスクを最小限に。</p>
              <Button variant="primary" size="lg" className="me-3">無料相談・お見積もりはこちら</Button>
              <Button variant="outline-secondary" size="lg">資料ダウンロード</Button>
            </Col>
            <Col md={5}>
              {/* Placeholder for image */}
              <img src="https://via.placeholder.com/400x300?text=Windows+11+Migration" alt="Windows 11 Migration" className="img-fluid rounded shadow-lg" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Problem Section */}
      <section id="problem" className="problem-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Windows 10サポート終了、こんなお悩みありませんか？</h2>
          <Row className="text-center">
            <Col md={4} className="mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <i className="bi bi-shield-fill-exclamation fs-1 text-danger mb-3"></i>
                <h3 className="h5 mb-3">セキュリティリスクの増大</h3>
                <p>サポート終了後はセキュリティ更新が提供されず、ウイルス感染や情報漏洩のリスクが高まります。</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <i className="bi bi-person-x-fill fs-1 text-warning mb-3"></i>
                <h3 className="h5 mb-3">IT担当者不足・リソース不足</h3>
                <p>社内にIT担当者がいない、またはリソースが足りず、移行作業が進まない。</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <i className="bi bi-arrow-repeat fs-1 text-info mb-3"></i>
                <h3 className="h5 mb-3">業務停止への不安</h3>
                <p>移行作業中に業務が止まってしまうのではないか、データが消えてしまうのではないかと心配。</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Solution Section (Placeholder) */}
      <section id="solution" className="solution-section py-5">
        <Container>
          <h2 className="text-center mb-5">貴社サービスが提供する解決策</h2>
          <p className="text-center">ここに貴社サービスがどのように課題を解決するかを記述します。</p>
        </Container>
      </section>

      {/* Services Section (Placeholder) */}
      <section id="services" className="services-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">サービス内容</h2>
          <p className="text-center">ここに具体的なサービス内容を記述します。</p>
        </Container>
      </section>

      {/* Features Section (Placeholder) */}
      <section id="features" className="features-section py-5">
        <Container>
          <h2 className="text-center mb-5">貴社サービスが選ばれる理由</h2>
          <p className="text-center">ここに貴社サービスの強みを記述します。</p>
        </Container>
      </section>

      {/* Cases Section (Placeholder) */}
      <section id="cases" className="cases-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">導入事例・お客様の声</h2>
          <p className="text-center">ここに導入事例やお客様の声を記述します。</p>
        </Container>
      </section>

      {/* Price Section (Placeholder) */}
      <section id="price" className="price-section py-5">
        <Container>
          <h2 className="text-center mb-5">料金プラン</h2>
          <p className="text-center">ここに料金プランを記述します。</p>
        </Container>
      </section>

      {/* FAQ Section (Placeholder) */}
      <section id="faq" className="faq-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">よくある質問</h2>
          <p className="text-center">ここにFAQを記述します。</p>
        </Container>
      </section>

      {/* CTA Section (Placeholder) */}
      <section id="cta" className="cta-section py-5 text-center bg-primary text-white">
        <Container>
          <h2 className="mb-4">Windows 11へのスムーズな移行を、今すぐご相談ください！</h2>
          <Button variant="light" size="lg">無料相談・お見積もりはこちら</Button>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer py-4 bg-dark text-white-50 text-center">
        <Container>
          <p>&copy; 2025 Win11移行サポート. All Rights Reserved.</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;