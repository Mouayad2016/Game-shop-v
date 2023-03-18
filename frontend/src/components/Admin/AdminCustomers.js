import React, { useState, useEffect } from 'react';
import './Admin.css';
import axios from "axios";

function AdminCustomers() {
  const [custData, setCustData] = useState([]);

  useEffect(() => {
    fetchAllCustData();
  }, []);

  const fetchAllCustData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/user/get");
      const c = response.data.map((c) => ({
        id: c.id,
        username: c.username,
        joined: c.date_joined,
        name: c.first_name,
        lname: c.last_name,
        email: c.email,
      }));
      setCustData(c);
    } catch (r) {
      console.log(r);
    }
  };

  return (
    <section>
    <div class="adminProducts">
      <h3>All customers</h3>
      <div class="container-fluid">
        <div class="table-responsive">
          <table class="table table-bordeless">
            <thead>
              <tr class="bg-light">
                <th width="5%">#</th>
                <th width="25%">Username</th>
                <th width="25%">Join us </th>
                <th width="25%">Fisrt Name</th>
                <th width="25%">Last Name</th>
                <th width="25%">Email </th>
              </tr>
            </thead>
            <tbody>
              {custData.map((r) => (
                <tr>
                            <td>{r.id}</td>
                            <td>{r.username}</td>
                            <td>{r.joined}</td>
                            <td>{r.name}</td>
                            <td>{r.lname}</td>
                            <td>{r.email}</td>
                        </tr>
                      ))}
          
                    
                    </tbody>
                </table>
                
            </div>
        </div>
      </div>
    </section>
    );
};

    
export default AdminCustomers