import '../../components/Admin/Admin.css';
import AdminHeader from '../../components/Admin/AdminHeader'
import AdminCreateProducts from '../../components/Admin/createProductForm/createPrdForm'


function AddProductsPage() {
  return (
    <div className="App">
      <AdminHeader />
      <AdminCreateProducts />
    </div>
  );
}

export default AddProductsPage;