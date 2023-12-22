import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const EditTask = () => {
  const { name, title, deadline, description, priority, _id } = useLoaderData();
  console.log("Loader Data:", useLoaderData());
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const onSubmit = (data) => {
    const updatedTaskData = {
      name: data.name,
      title: data.title,
      category: data.category,
      deadline: data.deadline,
      description: data.description,

      email: data.email,
    };

    axiosPublic.patch(`/mytasks/${_id}`, updatedTaskData).then((res) => {
      if (res.data.modifiedCount > 0) {
        reset();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Task updated successfully ",
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
        <title>TaskFlow | Edit Task</title>
      </Helmet>
      <div>
        <h2 className="text-5xl mb-12 text-center font-bold text-black my-5">
          Update Task
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
                  defaultValue={name}
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
                  defaultValue={priority}
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
                  defaultValue={title}
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
                  defaultValue={deadline}
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
                defaultValue={description}
              ></textarea>
            </div>

            <div className="text-center mt-5 mb-5">
              <button className="btn bg-slate-700 text-white">
                Update Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
