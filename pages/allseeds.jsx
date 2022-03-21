import Head from "next/head";
import Image from "next/image";
import CategoryFilters from "../components/categoryFilters";
import SearchBar from "../components/searchBar";

export default function AllSeeds() {
  return (
    <div>
      <CategoryFilters></CategoryFilters>
      <SearchBar></SearchBar>
    </div>
  );
}
