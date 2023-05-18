import Layout from "../components/Layout";
import Footer from "../components/Footer";

function Profile() {
  const token = localStorage.getItem("token");
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:p-20">
        <div className="lg:w-1/3">
          <img
            className="rounded-full object-cover w-[300px] h-[300px]"
            src={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
          />
        </div>
        <div className="lg:bg-[#FFCE07] p-10 shadow-lg rounded-3xl max-w-[100vw] lg:text-lg">
          <h1 className="text-2xl font-bold">Profile page</h1>
          <div className="flex gap-10 pt-5 pb-1">
            <p className="text-lg font-bold">Your token :</p>
            <h1>{token} </h1>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

export default Profile;
