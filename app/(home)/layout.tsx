export default function HomeLayout({children}: {children: React.ReactNode}) {
    return (
        <>  
        <h1 className="text-xl font-bold">Admin Home Layout</h1>
        <div>{children}</div>
        </>
    );
 }