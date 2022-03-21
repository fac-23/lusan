import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import IntroLusan from "../components/introLusan";
import GridGallery from "../components/gridGallery";
import StyledButton from "../components/styled-components/StyledButton";

export default function Home() {
  return (
    <div>
      <IntroLusan></IntroLusan>
      <GridGallery></GridGallery>
      <StyledButton>Browse All</StyledButton>
    </div>
  );
}
