import React from 'react'
import { Container,Row,Col} from 'react-bootstrap'

const Footer = () => {
  return (
    <footer 
    style={{
      width:"100%",
      position:"relative",
      button:0,
      display:"flex",
      justifyContent:"center",
    }}
    
    >
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; NotesManager</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;
