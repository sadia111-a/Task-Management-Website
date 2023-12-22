import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllTask = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: task = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["task"],
    queryFn: async () => {
      const res = await axiosPublic.get("/tasks");
      return res.data;
    },
  });

  return [task, loading, refetch];
};

export default useAllTask;
