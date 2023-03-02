import '../../components/Admin/Admin.css';
import AdminHeader from '../../components/Admin/AdminHeader'
import AdminProductReview from '../../components/Admin/AdminProductReview'


function AdminProductReviewPage() {
  return (
    <div className="App">
      <AdminHeader />
      <AdminProductReview />
    </div>
  );
}

export default AdminProductReviewPage;