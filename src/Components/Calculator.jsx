import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

export const Calculator = () => {
    const [value, setValue] = useState("0")
    const clear = () => {
        setValue("0")
    }
    const clickFunction = (e) => {
        if (value === "0") {
            setValue(e.target.value)
        }
        
        // else if (value === ".") {
        //     setValue("0.")
        // } 
        else 
        {setValue(value+e.target.value)}
    }

    
    const CustomBotton = (props) => {
        
        return <Button value={props.name} onClick={props.function} className='w-100'>{props.name}</Button>
    }
  return (
    <Container className='w-50'>
        <Row className='mb-3'>
            <input type="text" value={value} />
        </Row>
        <Row className='mb-2'>
            <Col md={3}>
                <CustomBotton name="C" function={clear}/>
            </Col>
            <Col>
                <CustomBotton name="CE" />
            </Col>
            <Col>
                <CustomBotton name="%" />
            </Col>
            <Col>
                <CustomBotton name="/" function={(e) => clickFunction(e)} />
            </Col>
        </Row>
        <Row className='mb-2'>
            <Col>
                <CustomBotton name="7" function={(e) => clickFunction(e)} />
            </Col>
            <Col>
                <CustomBotton name="8" function={(e) => clickFunction(e)} />
            </Col>
            <Col>
                <CustomBotton name="9" function={(e) => clickFunction(e)} />
            </Col>
            <Col>
                <CustomBotton name="*" function={(e) => clickFunction(e)} />
            </Col>
        </Row>
        <Row className='mb-2'>
            <Col>
                <CustomBotton name="4" function={(e) => clickFunction(e)} />
            </Col>
            <Col>
                <CustomBotton name="5" function={(e) => clickFunction(e)} />
            </Col>
            <Col>
                <CustomBotton name="6" function={(e) => clickFunction(e)} />
            </Col>
            <Col>
                <CustomBotton name="-" function={(e) => clickFunction(e)} />
            </Col>
        </Row>
        <Row className='mb-2'>
            <Col>
                <CustomBotton name="1" function={(e) => clickFunction(e)} />
            </Col>
            <Col>
                <CustomBotton name="2" function={(e) => clickFunction(e)} />
            </Col>
            <Col>
                <CustomBotton name="3" function={(e) => clickFunction(e)} />
            </Col>
            <Col>
                <CustomBotton name="+" function={(e) => clickFunction(e)} />
            </Col>
        </Row>
        <Row className='mb-2'>
            <Col>
                <CustomBotton name="+/-" />
            </Col>
            <Col>
                <CustomBotton name="0" function={(e) => clickFunction(e)} />
            </Col>
            <Col>
                <CustomBotton name="." function={(e) => clickFunction(e)} />
            </Col>
            <Col>
                <CustomBotton name="=" />
            </Col>
        </Row>
    </Container>
    )
}
