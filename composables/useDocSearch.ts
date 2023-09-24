export const useDocSearch = () => {
  const { $myDocSearch } = useNuxtApp();

  if (!$myDocSearch) {
    return {
      hasDocSearch: ref(false),
    };
  }

  return $myDocSearch;
};
