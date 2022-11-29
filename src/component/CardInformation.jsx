import React, { useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Data from "./Data";

function CardInformation(props) {
  const [data, setData] = useState(Data);

  

  return (
    <div className='container mt-3'>
      <div className='row d-flex justify-content-center align-items-center'>
        {
          data.map((props) => {
            return (
              <>
                <Card style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
                  <Card.Img variant="top" src={props.imgURL} style={{ height: "16rem" }} />
                  <Card.Body>
                    <Card.Text>{props.name}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      
                      <p>{props.price}</p>
                     
                    </ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <div className="button_div d-flex justify-content-right">
                      <Link to="/details">
                        <Button variant="dark" >Add to cart</Button>
                      </Link>
                    </div>

                  </Card.Body>
                </Card>
              </>
            )
          })
        }

      </div>
    </div>
  );
}

export default CardInformation;



