import React from 'react';
import { Button, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const MyCart = (props) => {
    return (
        <div style={{width: "24%"}}>
            <Card style={{height: "430px"}}>
                <div>
                    <Card.Img style={{height:"200px"}} variant="top" src={props.courseinfo.img} />
                </div>
                <div style={{height: "170px"}}>
                    <Card.Body >
                        <Card.Title>{props.courseinfo.title}</Card.Title>
                            <p>From: {props.courseinfo.by}</p>
                        <Card.Text>               
                            <p>Price: ${props.courseinfo.price}</p>
                        </Card.Text>
                    </Card.Body>
                </div>
                <div>
                    <Button style={{marginBottom:"5px", marginLeft:"50%"}} onClick={()=> props.click(props.courseinfo)}>Enroll Now</Button>
                </div>
            </Card>
        </div>
    )
}

export default MyCart;