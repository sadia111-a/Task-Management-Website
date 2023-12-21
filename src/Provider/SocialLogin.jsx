import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const navigate = useNavigate();
  const { googleLogin } = useContext(AuthContext);
  //   const axiosPublic = useAxiosPublic();

  const handleSocialLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        // const userInfo = {
        //   name: result.user?.displayName,
        //   email: result.user?.email,
        //   image: result.user?.photoUrl,
        // };
        // axiosPublic.post("/users", userInfo).then((res) => {
        //   console.log(res.data);
        // });
        Swal.fire({
          title: "Good job!",
          text: "You logged in successfully!",
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };
  return (
    <div>
      <div
        onClick={() => handleSocialLogin(googleLogin)}
        className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
      >
        <FcGoogle size={32} />
        <p>Continue with Google</p>
      </div>
    </div>
  );
};

export default SocialLogin;
