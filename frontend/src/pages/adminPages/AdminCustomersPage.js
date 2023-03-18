import '../../components/Admin/Admin.css';
import AdminHeader from '../../components/Admin/AdminHeader'
import AdminCustomers from '../../components/Admin/AdminCustomers'


function CustomersPage() {
  return (
    <div className="App">
      <AdminHeader />
      <AdminCustomers />
    </div>
  );
}
 
export default CustomersPage;