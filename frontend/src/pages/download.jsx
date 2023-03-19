import React from "react";
import "./DownloadPage.css"; // Import your custom styles here
import HeaderHome from "../components/HeaderHome";
import Footer from "../components/Footer";
import { getData } from "../components/helper/axios";

function DownloadPage() {
  const downloadFile = async () => {
    const url = "http://localhost:8000/file/get"; // assuming the file URL is in a "url" property in the API response
    const link = document.createElement("a");
    link.href = url;
    link.download = "myfile.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <HeaderHome />
      <div className="download-page">
        <div className="header">
          <h1 className="title">Download you file</h1>
          <p className="description">
            Experience high-quality gaming with all of our games.
          </p>
        </div>
        <div className="download-buttons">
          <button onClick={downloadFile} className="file-download">
            <i className="fa fa-download"></i> Download File
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DownloadPage;
