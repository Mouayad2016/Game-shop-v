import '../../components/Admin/Admin.css';
import AdminHeader from '../../components/Admin/AdminHeader'
import AdminCreateDiscount from '../../components/Admin/createDiscount/createDisForm'


function AddDiscountPage() {
  return (
    <div className="App">
      <AdminHeader />
      <AdminCreateDiscount />
    </div>
  );
}

export default AddDiscountPage;