import React from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';

class SearchHandSale extends React.Component {
    render() {
      return (
        
    <div className="container">       
        <div className="row">
            <div className="mx-auto">
                <Form inline className="my-3">
                    <FormControl type="text" placeholder="Nombre del producto" className="mr-sm-2" />
                    <Button  className="mx-auto my-1" variant="outline-success">Buscar</Button>
                </Form>   
            </div>
        </div> 
    </div>
      
      );
    }
  }


export default SearchHandSale;