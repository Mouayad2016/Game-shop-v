import '../../components/Admin/Admin.css';
import AdminHeader from '../../components/Admin/AdminHeader'
import AdminDeleteProduct from '../../components/Admin/createProductForm/DeletePrdForm'


function DeleteProductPage() {
  return (
    <div className="App">
      <AdminHeader />
      <AdminDeleteProduct />
    </div>
  );
}
 
export default DeleteProductPage;