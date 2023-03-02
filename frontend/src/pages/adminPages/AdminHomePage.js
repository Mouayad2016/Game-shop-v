import '../../components/Admin/Admin.css';
import AdminHeader from '../../components/Admin/AdminHeader'
import AdminHome from '../../components/Admin/AdminHome'


function AdminHomePage() {
  return (
    <div className="App">
      <AdminHeader />
      <AdminHome />
    </div>
  );
}

export default AdminHomePage;