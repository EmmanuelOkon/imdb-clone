export const metadata = {
  title: "IMDb Clone",
  description: "A clone of IMDb, the Internet Movie Database.",
  keywords: ["imdb", "clone", "movie", "database", "react", "next", "tailwind"],
};

export default function Head() {
  return (
    <>
      <title>{metadata.title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords.join(", ")} />
    </>
  );
}
