import NextHead from "next/head";

export function Head({
  title = "Fybe",
  description = "Connect, share, and build own communities",
  children,
}) {
  return (
    <NextHead>
      <title>{title} | Fybe</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      {children}
    </NextHead>
  );
}
