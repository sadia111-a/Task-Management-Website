import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useMyTask = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  console.log("User Email:", user?.email);
  const {
    refetch,
    data: task = [],
    isPending: isLoading,
  } = useQuery({
    queryKey: ["task", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/mytask?email=${user.email}`);
      return res.data;
    },
  });
  return [task, refetch, isLoading];
};

export default useMyTask;
