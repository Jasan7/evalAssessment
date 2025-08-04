import { useEffect, useRef } from "react";

const useDebouncedSearch = (searchTerm, coins, setFilteredCoins, searchCache) => {
  const debounceTimer = useRef(null);

  useEffect(() => {
    if (!coins.length) return;

    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(() => {
      const key = searchTerm.trim().toLowerCase();

      if (!key) {
        setFilteredCoins(coins);
        return;
      }

      if (searchCache.current[key]) {
        setFilteredCoins(searchCache.current[key]);
      } else {
        const filtered = coins.filter(
          (coin) =>
            coin.name.toLowerCase().includes(key) ||
            coin.symbol.toLowerCase().includes(key)
        );
        searchCache.current[key] = filtered;
        setFilteredCoins(filtered);
      }
    }, 300);

    return () => clearTimeout(debounceTimer.current);
  }, [searchTerm, coins, setFilteredCoins, searchCache]);
};

export default useDebouncedSearch;
