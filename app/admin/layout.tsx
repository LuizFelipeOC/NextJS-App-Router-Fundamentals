export default function  AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en">
      <body>
        <h1>Admin Layout</h1>
        {children}
      </body>
    </html>
  );
}