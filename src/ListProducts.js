import React from 'react';
import { Table } from 'react-bootstrap';

class ListProducts extends React.Component {
    render() {
      return (
        
            <div className="container">
            <h1>Productos</h1>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Importe</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>321</td>
                        <td>Cheeto</td>
                        <td>3</td>
                        <td>7</td>
                        <td>28</td>
                        
                    </tr>

                    <tr>
                        <td>21</td>
                        <td>Sabrita</td>
                        <td>3</td>
                        <td>12</td>
                        <td>34</td>
                    </tr>
                    <tr>
                        <td>69</td>
                        <td>Barritas</td>
                        <td>4</td>
                        <td>10</td>
                        <td>40</td>
                        
                    </tr>
                    <tr>
                        <td>70</td>
                        <td>Gansito</td>
                        <td>2</td>
                        <td>7</td>
                        <td>14</td>
                    </tr>
                </tbody>
            </Table>

            </div>
      );
    }
  }


export default ListProducts;