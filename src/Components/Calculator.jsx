import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

export const Calculator = () => {
    const [value, setValue] = useState("0")
    const CustomBotton = (props) => {
        const clickFunction = (e) => {
            if (value === "0") {
                setValue(e.target.value)
            }
            else {setValue(value+e.target.value)}
        }
        return <Button value={props.name} onClick={(e) => clickFunction(e)} className='w-100'>{props.name}</Button>
    }
  return (
    <Container className='w-50'>
        <Row className='mb-3'>
            <input type="text" value={value} />
        </Row>
        <Row className='mb-2'>
            <Col md={3}>
                <CustomBotton name="C" />
            </Col>
            <Col>
                <CustomBotton name="CE" />
            </Col>
            <Col>
                <CustomBotton name="%" />
            </Col>
            <Col>
                <CustomBotton name="/" />
            </Col>
        </Row>
        <Row className='mb-2'>
            <Col>
                <CustomBotton name="7" />
            </Col>
            <Col>
                <CustomBotton name="8" />
            </Col>
            <Col>
                <CustomBotton name="9" />
            </Col>
            <Col>
                <CustomBotton name="X" />
            </Col>
        </Row>
        <Row className='mb-2'>
            <Col>
                <CustomBotton name="4" />
            </Col>
            <Col>
                <CustomBotton name="5" />
            </Col>
            <Col>
                <CustomBotton name="6" />
            </Col>
            <Col>
                <CustomBotton name="-" />
            </Col>
        </Row>
        <Row className='mb-2'>
            <Col>
                <CustomBotton name="1" />
            </Col>
            <Col>
                <CustomBotton name="2" />
            </Col>
            <Col>
                <CustomBotton name="3" />
            </Col>
            <Col>
                <CustomBotton name="+" />
            </Col>
        </Row>
        <Row className='mb-2'>
            <Col>
                <CustomBotton name="+/-" />
            </Col>
            <Col>
                <CustomBotton name="0" />
            </Col>
            <Col>
                <CustomBotton name="." />
            </Col>
            <Col>
                <CustomBotton name="=" />
            </Col>
        </Row>
    </Container>
    )
}
