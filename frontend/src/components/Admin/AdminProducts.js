import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

const AdminProducts = () => {
    return (
      <div class="adminProducts">
        <div class="container-fluid">
            <div class="table-responsive">
                <table class="table table-bordeless">
                    <thead>
                        <tr class="bg-light">
                            <th width="5%">#</th>
                            <th width="20%">Name</th>
                            <th width="10%">Stock</th>
                            <th width="65%">Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Call of Duty</td>
                            <td>20</td>
                            <td>Bonjour</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    );
};
    
export default AdminProducts