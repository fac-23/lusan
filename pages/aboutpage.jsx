// import Head from "next/head";
// import Image from "next/image";
// import StyledButton from "../components/styled-components/StyledButton";
// import Layout from "../components/layout";
// import StyledLink from "../components/styled-components/StyledLink";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/fontawesome-svg-core";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      <h2>Our Values</h2>
      <FontAwesomeIcon icon={faSeedling} className="icon"></FontAwesomeIcon>
      <Link href={"/"}>
        <a>⏎ Back to home</a>
      </Link>
    </div>
  );
}
