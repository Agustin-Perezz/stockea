function createHomeSearch() {
  let query = $state('');
  let activeCategory = $state<string | null>(null);

  return {
    get query() {
      return query;
    },
    set query(v: string) {
      query = v;
    },
    get activeCategory() {
      return activeCategory;
    },
    set activeCategory(v: string | null) {
      activeCategory = v;
    }
  };
}

export const homeSearch = createHomeSearch();
