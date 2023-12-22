import { Link } from "react-router-dom";
import useMyTask from "../../hooks/useMyTask";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const MyTask = () => {
  const [task, refetch] = useMyTask();
  const axiosPublic = useAxiosPublic();
  const handleDeleteItem = async (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosPublic.delete(`/mytasks/${item._id}`);
          console.log("Delete response:", res.data);

          if (res.data.deletedCount > 0) {
            // refetch to update the ui
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${item.title} has been deleted`,
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Failed to delete the task.",
            });
          }
        } catch (error) {
          console.error("Error deleting task:", error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "An error occurred while deleting the task.",
          });
        }
      }
    });
  };
  return (
    <div>
      <h2 className="text-4xl text-center font-sans font-semibold">
        My Added Task:{task.length}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-14">
        {task?.map((item) => (
          <div
            key={item._id}
            className="card lg:w-50 card-compact bg-base-100 shadow-xl"
          >
            <div className="card-body">
              <h2 className="card-title">Task Title:{item.title}</h2>
              <div className="flex">
                <p>Name:{item.name}</p>
                <p>Email:{item.email}</p>
              </div>
              <p>Deadline:{item.deadline}</p>
              <p>Description:{item.description}</p>
              <div className="card-actions justify-evenly flex">
                <Link to={`/dashboard/updateTask/${item._id}`}>
                  <button className="btn w-full border-0 text-white bg-blue-700 hover:bg-cyan-200 btn-primary">
                    Update
                  </button>
                </Link>

                <button
                  onClick={() => handleDeleteItem(item)}
                  className="btn border-0 text-white bg-blue-700 hover:bg-cyan-200 btn-primary"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTask;
