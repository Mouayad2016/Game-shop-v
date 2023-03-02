import '../../components/Admin/Admin.css';
import AdminHeader from '../../components/Admin/AdminHeader'
import AdminProducts from '../../components/Admin/AdminProducts'


function AdminProductsPage() {
  return (
    <div className="App">
      <AdminHeader />
      <AdminProducts />
    </div>
  );
}

export default AdminProductsPage;