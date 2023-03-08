import '../../components/Admin/Admin.css';
import AdminHeader from '../../components/Admin/AdminHeader'
import AdminCreateCategory from '../../components/Admin/createCategoryForm/createCatForm'


function AddCatPage() {
  return (
    <div className="App">
      <AdminHeader />
      <AdminCreateCategory />
    </div>
  );
}

export default AddCatPage;