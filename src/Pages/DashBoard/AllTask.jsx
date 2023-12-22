import useAllTask from "../../hooks/useAllTask";

const AllTask = () => {
  const [task, , refetch] = useAllTask();
  return (
    <div>
      <h2 className="text-2xl text-center font-serif font-semibold mb-4">
        All Tasks:{task.length}
      </h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Task Name</th>
                <th>Deadline</th>
                <th>Priority</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {task.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="w-[30px]">{item.title}</td>
                  <td>{item.deadline}</td>
                  <td>{item.priority}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllTask;
