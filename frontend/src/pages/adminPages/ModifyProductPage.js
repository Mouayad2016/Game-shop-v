import '../../components/Admin/Admin.css';
import AdminHeader from '../../components/Admin/AdminHeader'
import AdminModifyProducts from '../../components/Admin/createProductForm/ModifyPrdForm'


function ModifyProductsPage() {
  return (
    <div className="App">
      <AdminHeader />
      <AdminModifyProducts />
    </div>
  );
}

export default ModifyProductsPage;