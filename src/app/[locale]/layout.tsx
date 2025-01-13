import "../globals.css";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{
    locale: string;
    slug: string[];
  }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/favicon/favicon-32x32.png`}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </head>
      <body >{children}</body>
    </html>
  );
}
