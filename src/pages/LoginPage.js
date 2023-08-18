import React from "react";
import axios from "axios";

import { Col, Container, Row, Form, Button } from "react-bootstrap";
import "../components/mypages/mypage.css";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigator = useNavigate()

  const login = React.useCallback(async (email = "tester1@test.com", passwd = "abcd1234!@") => {
    try {
      const { data: { response, success } } = await axios.post('http://43.202.59.248:8080/api/member/login', {
        email,
        passwd,
      })
      if (success) {
        const { accessToken, refreshToken } = response
        localStorage.setItem("accessToken", accessToken)
        localStorage.setItem("refreshToken", refreshToken)
        navigator('/')
      }
    } catch (e) {
      console.error(e)
    }
	}, [])

  return (
		<Container fluid>
			<Row className="mt-4">
				<Col>
					<h4>🧑‍💻 마이페이지</h4>
				</Col>
			</Row>
			<Row className="mt-2 myPage-wrapper">
        <h1> 로 구 인! </h1>
        <Form onSubmit={async (e) => {
          e.preventDefault()
          console.log(e.target.children["email"].value)
          console.log(e.target.children["passwd"].value)
          await login(
            e.target.children["email"].value,
            e.target.children["passwd"].value,
          )
        }}>
          <Form.Label htmlFor="email">email</Form.Label>
          <Form.Control
            type="email"
            id="email"
            aria-describedby="tester1@test.com"
          />
          <Form.Label htmlFor="password">password</Form.Label>
          <Form.Control
            type="password"
            id="passwd"
            aria-describedby="abcd1234!@"
          />
          <Button
            type="submit"
          >
            로그인
          </Button>
          <Button
            variant="light"
            onClick={() => {
              navigator("/signup")
            }}
          >
            회원가입
          </Button>

        </Form>
			</Row>
		</Container>
	);
}

export default LoginPage;
