import Head from "next/head";
import { FC, ReactNode } from "react";
import { Navbar } from "../ui";

interface Props {
  title: string;
  pageDescription: string;
  imageFullurl?: string;
  children: ReactNode;
}

export const ShopLayout: FC<Props> = ({
  children,
  title,
  pageDescription,
  imageFullurl,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        {imageFullurl && <meta name="og:image" content={imageFullurl} />}
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main
        style={{ margin: "80px auto", maxWidth: "1400", padding: "0px 30px" }}
      >
        {children}
      </main>
      <footer></footer>
    </>
  );
};
