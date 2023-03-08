import '../../components/Admin/Admin.css';
import AdminHeader from '../../components/Admin/AdminHeader'
import AdminDeleteCategory from '../../components/Admin/createCategoryForm/DeleteCatForm'


function DeleteCategoryPage() {
  return (
    <div className="App">
      <AdminHeader />
      <AdminDeleteCategory />
    </div>
  );
}
 
export default DeleteCategoryPage;