import React from 'react';
import { Form, Button } from 'react-bootstrap';

class Pay extends React.Component{

    render(){

        return(


            <div className="container">       
                <div className="row">
                    <div className="mx-auto">
                        <Form inline className="my-3">
                            <h1>Total: $192.45</h1>
                            <div className="mx-auto">
                            <Button  className="my-1 mx-2" variant="outline-success">Cobrar</Button>
                            <Button  className="my-1 mx-2" variant="outline-success">Cancelar venta</Button>
                            </div>
                        </Form>   
                    </div>
                </div> 
            </div>
        );
    }
}

export default Pay;