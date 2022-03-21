// import Head from "next/head";
// import Image from "next/image";
import CategoryFilters from "../components/categoryFilters";
import SearchBar from "../components/searchBar";
import ConditionFilters from "../components/conditionFilters";
import PriceFilters from "../components/priceFilters";

export default function AllSeeds() {
  return (
    <div>
      <CategoryFilters></CategoryFilters>
      <SearchBar></SearchBar>
      <ConditionFilters></ConditionFilters>
      <PriceFilters></PriceFilters>
    </div>
  );
}
