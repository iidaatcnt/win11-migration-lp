import React from 'react';
import { Navbar, Container, Nav, Button, Row, Col } from 'react-bootstrap';
import ContactForm from './components/ContactForm'; // ContactFormをインポート
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
              <Nav.Link href="#contact">お問い合わせ</Nav.Link> {/* お問い合わせリンクを追加 */}
              <Button variant="primary" className="ms-3" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>無料相談・お見積もり</Button>
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
              <Button variant="primary" size="lg" className="me-3" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>無料相談・お見積もりはこちら</Button>
              <Button variant="outline-secondary" size="lg" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>資料ダウンロード</Button>
            </Col>
            <Col md={5}>
              {/* Placeholder for image */}
              <img src="https://via.placeholder.com/500x350?text=Windows+11+Migration+Service" alt="Windows 11 Migration" className="img-fluid rounded shadow-lg" />
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

      {/* Solution Section */}
      <section id="solution" className="solution-section py-5">
        <Container>
          <h2 className="text-center mb-5">貴社サービスが提供する解決策</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <p className="lead text-center mb-4">Windows 10サポート終了の不安を解消し、貴社のビジネスを止めないための最適な移行プランをご提案します。</p>
            </Col>
          </Row>
          <Row className="text-center">
            <Col md={4} className="mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <i className="bi bi-check-circle-fill fs-1 text-success mb-3"></i>
                <h3 className="h5 mb-3">専門家による一貫サポート</h3>
                <p>PCの現状診断から移行計画、データ移行、設定、アフターサポートまで、全てプロにお任せください。</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <i className="bi bi-briefcase-fill fs-1 text-primary mb-3"></i>
                <h3 className="h5 mb-3">業務への影響を最小限に</h3>
                <p>貴社の業務スケジュールに合わせて、休日や夜間作業も対応可能。業務停止リスクを最小限に抑えます。</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <i className="bi bi-lightbulb-fill fs-1 text-warning mb-3"></i>
                <h3 className="h5 mb-3">最適な移行計画をご提案</h3>
                <p>貴社のPC環境や予算に合わせ、アップグレード、新規購入など最適な移行方法をご提案します。</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">サービス内容</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <p className="lead text-center mb-4">貴社の状況に合わせた柔軟なサービスを提供。Windows 11へのスムーズな移行をトータルでサポートします。</p>
            </Col>
          </Row>
          <Row className="text-center">
            <Col md={4} className="mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <i className="bi bi-pc-display fs-1 text-primary mb-3"></i>
                <h3 className="h5 mb-3">現状診断・移行計画策定</h3>
                <p>現在のPC環境を診断し、最適なWindows 11への移行計画を立案します。</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <i className="bi bi-arrow-up-circle fs-1 text-primary mb-3"></i>
                <h3 className="h5 mb-3">OSアップグレード/新規導入</h3>
                <p>既存PCのWindows 11へのアップグレード、または新規PCへのOS導入を代行します。</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <i className="bi bi-folder-fill fs-1 text-primary mb-3"></i>
                <h3 className="h5 mb-3">データ移行・設定</h3>
                <p>大切なデータや設定を安全にWindows 11環境へ移行し、業務アプリケーションの動作確認も行います。</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <i className="bi bi-printer-fill fs-1 text-primary mb-3"></i>
                <h3 className="h5 mb-3">周辺機器設定</h3>
                <p>プリンター、スキャナーなど、周辺機器の接続・設定をサポートします。</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <i className="bi bi-shield-lock-fill fs-1 text-primary mb-3"></i>
                <h3 className="h5 mb-3">セキュリティ設定</h3>
                <p>Windows 11のセキュリティ機能を最適に設定し、安全なPC環境を構築します。</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <i className="bi bi-headset fs-1 text-primary mb-3"></i>
                <h3 className="h5 mb-3">導入後のアフターサポート</h3>
                <p>移行後の疑問やトラブルにも、迅速に対応いたします。</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section py-5">
        <Container>
          <h2 className="text-center mb-5">貴社サービスが選ばれる理由</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <p className="lead text-center mb-4">中小企業のWindows 11移行を成功に導く、貴社ならではの強みをご紹介します。</p>
            </Col>
          </Row>
          <Row className="text-center">
            <Col md={4} className="mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <i className="bi bi-award-fill fs-1 text-success mb-3"></i>
                <h3 className="h5 mb-3">豊富な実績と専門知識</h3>
                <p>数多くの中小企業のPC移行を支援してきた実績と、Windows 11に関する深い専門知識があります。</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <i className="bi bi-speedometer2 fs-1 text-primary mb-3"></i>
                <h3 className="h5 mb-3">迅速かつ丁寧な対応</h3>
                <p>お客様の業務に支障が出ないよう、迅速かつ丁寧な作業を心がけています。</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <i className="bi bi-currency-dollar fs-1 text-warning mb-3"></i>
                <h3 className="h5 mb-3">コストパフォーマンス</h3>
                <p>自社で対応するよりも、専門家に任せることで結果的にコストと時間を節約できます。</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <i className="bi bi-people-fill fs-1 text-info mb-3"></i>
                <h3 className="h5 mb-3">中小企業に特化</h3>
                <p>中小企業特有のIT環境や予算、ニーズを深く理解し、最適なソリューションを提供します。</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <i className="bi bi-chat-dots-fill fs-1 text-secondary mb-3"></i>
                <h3 className="h5 mb-3">安心のサポート体制</h3>
                <p>移行後も安心して業務に集中できるよう、万全のサポート体制を整えています。</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Cases Section */}
      <section id="cases" className="cases-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">導入事例・お客様の声</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <p className="lead text-center mb-4">実際に貴社サービスをご利用いただいたお客様の声をご紹介します。</p>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <h4 className="mb-3">A社様 (製造業)</h4>
                <p>「Windows 10サポート終了が迫り、社内のPC移行に頭を悩ませていました。貴社に依頼したところ、業務を止めることなくスムーズに全PCの移行が完了。担当者の負担も大幅に軽減され、大変助かりました。」</p>
                <footer className="blockquote-footer">代表取締役 <cite title="Source Title">〇〇様</cite></footer>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <h4 className="mb-3">B社様 (サービス業)</h4>
                <p>「ITに詳しい社員がいないため、PCのアップグレードは不安でしたが、貴社が丁寧にサポートしてくださり、安心してWindows 11に移行できました。移行後のトラブルもなく、業務効率も向上しました。」</p>
                <footer className="blockquote-footer">総務部 <cite title="Source Title">△△様</cite></footer>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Price Section */}
      <section id="price" className="price-section py-5">
        <Container>
          <h2 className="text-center mb-5">料金プラン</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <p className="lead text-center mb-4">貴社のPC台数やご要望に合わせて、最適なプランをご提案します。まずはお気軽にお見積もりをご依頼ください。</p>
            </Col>
          </Row>
          <Row className="text-center">
            <Col md={4} className="mb-4">
              <div className="p-4 border rounded shadow-sm h-100 bg-light">
                <h3 className="h4 mb-3">基本プラン</h3>
                <p className="fs-2 fw-bold mb-3">個別見積もり</p>
                <ul className="list-unstyled text-start mb-4">
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>現状診断・移行計画策定</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>OSアップグレード/新規導入</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>データ移行・設定</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>周辺機器設定</li>
                </ul>
                <Button variant="primary">無料見積もりを依頼</Button>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="p-4 border rounded shadow-sm h-100 bg-light">
                <h3 className="h4 mb-3">オプションサービス</h3>
                <p className="fs-2 fw-bold mb-3">個別見積もり</p>
                <ul className="list-unstyled text-start mb-4">
                  <li><i className="bi bi-plus-circle-fill text-info me-2"></i>新規PC調達支援</li>
                  <li><i className="bi bi-plus-circle-fill text-info me-2"></i>旧PCからのデータ消去</li>
                  <li><i className="bi bi-plus-circle-fill text-info me-2"></i>クラウド移行支援</li>
                  <li><i className="bi bi-plus-circle-fill text-info me-2"></i>定期メンテナンス</li>
                </ul>
                <Button variant="outline-primary">詳細を見る</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">よくある質問</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      Q. 移行作業はどのくらいの期間がかかりますか？
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      A. PCの台数や現在の環境、移行内容によって異なりますが、事前に詳細なヒアリングを行い、最適なスケジュールをご提案します。業務への影響を最小限に抑えるため、休日や夜間作業も対応可能です。
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Q. データが消えてしまうことはありませんか？
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      A. 移行作業前には必ずデータのバックアップを行います。細心の注意を払い、安全にデータを移行いたしますのでご安心ください。
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Q. 移行後のサポートはありますか？
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      A. はい、移行後もご不明な点やトラブルが発生した際には、迅速に対応いたします。お気軽にお問い合わせください。
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section py-5">
        <ContactForm />
      </section>

      {/* CTA Section */}
      <section id="cta" className="cta-section py-5 text-center bg-primary text-white">
        <Container>
          <h2 className="mb-4">Windows 11へのスムーズな移行を、今すぐご相談ください！</h2>
          <Button variant="light" size="lg" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>無料相談・お見積もりはこちら</Button>
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
