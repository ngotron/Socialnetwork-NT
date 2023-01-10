import {useQuery, useQueryClient} from 'react-query';

// custom hook
export function useGlobalState(key, initialState) {
  const queryClient = useQueryClient();

  const {data} = useQuery(key, () => initialState, {
    initialData: initialState,
    staleTime: Infinity,
  });

  const setData = newState => {
    queryClient.setQueryData(key, newState);
  };

  return [data, setData];
}
