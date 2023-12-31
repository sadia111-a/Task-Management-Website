import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";

const AddTask = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  // const navigate = useNavigate();

  const onSubmit = (data) => {
    axiosPublic.post("/tasks", data).then((res) => {
      if (res.data.insertedId) {
        console.log("user added to the database");
        reset();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Task Created successfully ",
          showConfirmButton: false,
          timer: 1500,
        });
        // navigate("/");
      }
    });
    axiosPublic.post("/mytasks", data).then((res) => {
      if (res.data.insertedId) {
        console.log("user added to the database");
        reset();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Task added to my task ",
          showConfirmButton: false,
          timer: 1500,
        });
        // navigate("/");
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>TaskFlow | Add Task</title>
      </Helmet>
      <div>
        <h2 className="text-5xl mb-12 text-center font-bold text-black my-5">
          Create A New Task
        </h2>
        <div>
          <form className="w-3/4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-6">
              <div className="form-control w-full  my-6">
                <label className="label">
                  <span className="label-text">Name*</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                  required
                  className="input input-bordered w-full"
                />
              </div>
              {/* user email */}
              <div className="form-control w-full my-6">
                <label className="label">
                  <span className="label-text">User Email*</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  defaultValue={user?.email}
                  {...register("email", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            <div className="flex gap-6">
              {/* experience */}
              <div className="form-control w-full my-6">
                <label className="label">
                  <span className="label-text">Priority*</span>
                </label>
                <select
                  defaultValue="default"
                  {...register("priority", { required: true })}
                  className="select select-bordered w-full"
                >
                  <option disabled value="default">
                    Select an priority option
                  </option>
                  <option value="low">Low</option>
                  <option value="moderate">Moderate</option>
                  <option value="high">High</option>
                </select>
              </div>

              {/* title */}
              <div className="form-control w-full my-6">
                <label className="label">
                  <span className="label-text">Title*</span>
                </label>
                <input
                  type="text"
                  placeholder="title"
                  {...register("title", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="flex gap-6">
              {/* deadline */}
              <div className="form-control w-full my-6">
                <label className="label">
                  <span className="label-text">Deadline*</span>
                </label>
                <input
                  type="date"
                  placeholder="deadline"
                  {...register("deadline", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>
              {/* user image */}
              <div className="form-control w-full my-6">
                <label className="label">
                  <span className="label-text">User Image*</span>
                </label>
                <input
                  type="text"
                  placeholder="image"
                  defaultValue={user?.photoURL}
                  {...register("image", { required: true })}
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            {/* course details */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Task Description</span>
              </label>
              <textarea
                {...register("description")}
                className="textarea textarea-bordered h-24"
                placeholder="Details"
              ></textarea>
            </div>

            <div className="text-center mt-5 mb-5">
              <button className="btn bg-slate-700 text-white">
                Create Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
