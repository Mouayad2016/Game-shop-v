import '../../components/Admin/Admin.css';
import AdminHeader from '../../components/Admin/AdminHeader'
import AdminLogin from '../../components/Admin/AdminLogin'


function AdminLoginPage() {
  return (
    <div className="App">
      <AdminHeader />
      <AdminLogin />
    </div>
  );
}

export default AdminLoginPage;