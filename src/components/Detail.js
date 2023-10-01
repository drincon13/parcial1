import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom/dist";
import Card from 'react-bootstrap/Card';
import { FormattedMessage } from 'react-intl'
import axios from "../back/index";


function Detail({  }) {

    const { id } = useParams();
    const [cafe, setCafe] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
        
              const cafeFetch = await axios.get(`/cafes/${id}`);
              setCafe(cafeFetch.data);
              localStorage.setItem("cafe", JSON.stringify(cafeFetch.data));
    
          } catch (error) {
            alert(
              "Error: El servidor no estÃ¡ corriendo y no se va a poder visualizar algunos datos!"
            );
          } 
        };
    
        fetchData();
      }, []);

    if (!cafe) {
        return <div> <FormattedMessage id= 'item no'></FormattedMessage> </div>;
    }

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Card style={{ width: '50%', height: '50%' }}>
                <div className="row no-gutters">
                    {/* Columna para la imagen */}
                    <div className="col-md-6">
                        <Card.Img src={cafe.foto} style = {{width: '100%', height: '100%'}}/>
                    </div>
                    {/* Columna para el contenido */}
                    <div className="col-md-6">
                        <Card.Body>
                            <Card.Title>{cafe.nombre}</Card.Title>
                            <Card.Text>
                                {cafe.fecha_cultivo}
                            </Card.Text>
                            <Card.Text>
                                {cafe.notas}
                            </Card.Text>
                            <Card.Text>
                                {cafe.altura}
                            </Card.Text>
                        </Card.Body>
                    </div>
                </div>
            </Card>
        </div>
    );
}


export default Detail;