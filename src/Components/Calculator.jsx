import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

export const Calculator = () => {
    const [value, setValue] = useState("")

    const clickFunction = (e) => {
        if (value === ".") {
            setValue("0.")
        } 
        else 
        {setValue(value+e.target.value)}
    }
    const equalFunction = () => {
        try {
            setValue(eval(value))
        } catch(error) {
            setValue("Error")
            }
        
    }
    const clearFunction = () => {
        try {
            if (value==="Error") {
                setValue("")
            }
            else {setValue(value.slice(0, -1))}
        } catch (error) {
            setValue("")
        }
    }
    const convertFunction = () => {
        if (!isNaN(value)) {
            if (value < 0) {
                setValue(Math.abs(value))
            }
            else if (value > 0) {
                setValue(-Math.abs(value))
            }
            else return value
        }
        else return value
    }
    const percentFunction = () => {
        try {
            setValue(eval(value) / 100)
        } catch(error) {
            setValue("Error")
            }
    }

    useEffect(() => {
      if (value.length > 1 && value.charAt(0) === "0" && value.charAt(1) !== ".") {
        setValue(value.slice(1))
      }
    
    }, [value])
    
    const CustomBotton = (props) => {
        return <Button value={props.name} variant={props.variant} onClick={props.function} className='w-100'>{props.name}</Button>
    }
  return (
    <Container className='w-50'>
        <Row className='mb-3'>
            <input type="text" className='form-control form-control-lg text-info' value={value} onChange={(e)=>setValue(e.target.value)}/>
        </Row>
        <Row className='mb-2'>
            <Col md={3} lg={6}>
                <CustomBotton name="C/CE" variant={"danger"} function={clearFunction}/>
            </Col>
            <Col>
                <CustomBotton name="%" function={percentFunction}/>
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
                <CustomBotton name="+/-" function={convertFunction}/>
            </Col>
            <Col>
                <CustomBotton name="0" function={(e) => clickFunction(e)} />
            </Col>
            <Col>
                <CustomBotton name="." function={(e) => clickFunction(e)} />
            </Col>
            <Col>
                <CustomBotton name="=" variant={"success"} function={equalFunction} />
            </Col>
        </Row>
    </Container>
    )
}
