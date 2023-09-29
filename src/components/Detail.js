import React from "react";
import { useParams } from "react-router-dom/dist";
import Card from 'react-bootstrap/Card';


function Detail({ cafesList }) {

    const { id } = useParams();
    const cafe = cafesList.find((cafe) => cafe.id === parseInt(id));

    if (!cafe) {
        return <div>Item no encontrado</div>;
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
                                {cafe.descripcion}
                            </Card.Text>
                        </Card.Body>
                    </div>
                </div>
            </Card>
        </div>
    );
}


export default Detail;