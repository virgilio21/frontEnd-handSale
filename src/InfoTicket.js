import React from 'react';


class InfoTicket extends React.Component {

    
    render(){

        return(

         
            
            <div>

                

                <div className="container my-5">
                    <h1>Información de la venta</h1>
                    <div className="row my-4">
                        <div className="col">Nombre del vendedor:</div>
                        <div className="col">Telefono:</div>
                        <div className="col">Folio:</div>
                        <div className="col">IVA:</div>
                    </div>
                    <div className="row my-5">
                        <div className="col">Subtotal:</div>
                        <div className="col">Descuesto:</div>
                        <div className="col">Efectivo:</div>
                        <div className="col">Cambio:</div>
                    </div>
                </div>


            </div>
        );
    }
}

export default InfoTicket;