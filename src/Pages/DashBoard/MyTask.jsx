import useMyTask from "../../hooks/useMyTask";

const MyTask = () => {
  const [tasks, refetch] = useMyTask();
  return (
    <div>
      <h2>{tasks.length}</h2>
    </div>
  );
};

export default MyTask;
