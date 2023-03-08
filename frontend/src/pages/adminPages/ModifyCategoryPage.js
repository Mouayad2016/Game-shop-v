import '../../components/Admin/Admin.css';
import AdminHeader from '../../components/Admin/AdminHeader'
import AdminModifyCategory from '../../components/Admin/createCategoryForm/ModifyCatForm'


function ModifyCategoryPage() {
  return (
    <div className="App">
      <AdminHeader />
      <AdminModifyCategory />
    </div>
  );
}

export default ModifyCategoryPage;