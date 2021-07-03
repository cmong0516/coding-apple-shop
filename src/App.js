/* eslint-disable-next-line */

import React, { useState } from 'react';
import {Navbar, Container, Nav, Button} from 'react-bootstrap'
import './App.css';
import Data from './data';

import {Link, Route, Switch} from 'react-router-dom';

function App() {

  let [shoes, shoes변경] = useState(Data);
  
  return (
    <div className="App">
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Mong Shop</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
        </Navbar>
  <br />

    <Route exact path="/">
    <div className="background">
      <h1>Hello, world</h1>
      <h1>Mong Shop</h1>
      <Button variant="info">Info</Button>
    </div>
    <div className="container">
    <div className="row">
      {
        shoes.map((a, i)=>{
          return(
            <Card shoes={shoes[i]} i={i} key={i}/>
          )
        })
      }
    </div>
  </div>
    </Route>
    <Route exact path="/detail">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
</div> 
    </Route>
    </div>
  );

  function Card(props){
    return (
      <div className="col-md-4">
        <img src={'https://codingapple1.github.io/shop/shoes'+(props.i+1)+'.jpg'} width="100%"/>
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.content} & {props.shoes.price}</p>
      </div>
    )
  }
}



export default App;
