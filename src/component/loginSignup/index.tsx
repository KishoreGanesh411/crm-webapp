import "./style.css";
import { Card, Col, Row } from 'antd';
import { LoginSignupForm } from './loginSignup-form';
export const Login = () => {
  return (
    <Row className="login-page">
      <Col xs={24} sm={12}>
        <div className="image-display">
          <img src="assets/images/logo.png" alt="" />
          <h3>
            <b>IPK wealth</b>{' '}
          </h3>
          <div className="welcome-text">
            <p className="welcome-Content">
              Client management of IPK wealth.
            </p>
          </div>
        </div>
      </Col>
      <Col xs={24} sm={12}>
        <Card className="card-content-size" style={{ textAlign: 'center' }}>
          <h3>
            Client Management <b>IPK</b>{' '}
          </h3>
          <p>Email ID to login.</p>
          <LoginSignupForm />
        </Card>
      </Col>
    </Row>

  );
};
