import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

// export function useBlocks(pagination: TablePaginationConfig) {
//   const { data, error } = useSWR(
//     `http://44.239.40.223:8560/api/l2_blocks?page=${pagination.current}&per_page=${pagination.pageSize}`,
//     fetcher
//   );
//   return {
//     pagination: { ...pagination, total: data.total },
//     blocks: data.blocks,
//     total: data.total,
//     isLoading: !error && !data,
//     isError: error,
//   };
// }

export function useL1Tps() {
  const { data, error } = useSWR(
    `http://44.239.40.223:8560/api/l1_tps`,
    fetcher,
    { refreshInterval: 3000 }
  );
  return {
    l1Tps: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useL2Tps() {
  const { data, error } = useSWR(
    `http://44.239.40.223:8560/api/l2_tps`,
    fetcher,
    { refreshInterval: 3000 }
  );
  return {
    l2Tps: data,
    isLoading: !error && !data,
    isError: error,
  };
}
