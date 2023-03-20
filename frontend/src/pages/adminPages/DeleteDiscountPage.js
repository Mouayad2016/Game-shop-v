import '../../components/Admin/Admin.css';
import AdminHeader from '../../components/Admin/AdminHeader'
import AdminDeleteDiscount from '../../components/Admin/createDiscount/DeleteDisForm'


function DeleteDiscountPage() {
  return (
    <div className="App">
      <AdminHeader />
      <AdminDeleteDiscount />
    </div>
  );
}
 
export default DeleteDiscountPage;