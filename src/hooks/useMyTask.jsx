import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useMyTask = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const {
    refetch,
    data: tasks = [],
    isPending: isLoading,
  } = useQuery({
    queryKey: ["tasks", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/tasks?email=${user.email}`);
      return res.data;
    },
  });
  return [tasks, refetch, isLoading];
};

export default useMyTask;
