import React, { useState, useEffect } from 'react';
import './Admin.css';
import axios from "axios";

function Admin() {
  const [adminData, setAdminData] = useState([]);

  useEffect(() => {
    fetchAllAdminData();
  }, []);

  const fetchAllAdminData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/administrators/get");
      const adm = response.data.map((adm) => ({
        id: adm.id,
        username: adm.username,
        created_at: adm.created_at,
        updated_at: adm.updated_at,
      }));
      setAdminData(adm);
    } catch (r) {
      console.log(r);
    }
  };

  return (
    <div class="adminProducts">
      <h3>All admin</h3>
      <div class="container-fluid">
        <div class="table-responsive">
          <table class="table table-bordeless">
            <thead>
              <tr class="bg-light">
                <th width="5%">#</th>
                <th width="25%">Username</th>
                <th width="25%">Creation Date</th>
                <th width="25%">Last update</th>
              </tr>
            </thead>
            <tbody>
              {adminData.map((r) => (
                <tr>
                            <td>{r.id}</td>
                            <td>{r.username}</td>
                            <td>{r.created_at}</td>
                            <td>{r.updated_at}</td>
                        </tr>
                      ))}
          
                    
                    </tbody>
                </table>
                
            </div>
        </div>
      </div>
    );
};

    
export default Admin