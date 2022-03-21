// import Head from "next/head";
// import Image from "next/image";
import CategoryFilters from "../components/categoryFilters";
import SearchBar from "../components/searchBar";
import ConditionFilters from "../components/conditionFilters";
import PriceFilters from "../components/priceFilters";
import ProductDisplay from "../components/productDisplay";
import products from "../database/dummy-data";

export default function AllSeeds() {
  console.log(products);
  return (
    <div>
      <CategoryFilters></CategoryFilters>
      <SearchBar></SearchBar>
      <ConditionFilters></ConditionFilters>
      <PriceFilters></PriceFilters>
      <ProductDisplay></ProductDisplay>
    </div>
  );
}
