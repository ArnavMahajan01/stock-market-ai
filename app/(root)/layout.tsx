import Header from "@/components/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen text-grey-400">
      {/* ADDING HEADER HERE BECAUSE WE WANT EVERY SINGLE PAGE INSIDE ROOT TO HAVE A HEADER */}
      <Header />
      {/* <div className="">{children}</div> */}
      <div className="container py-10">{children}</div>
    </main>
  );
};

export default Layout;
