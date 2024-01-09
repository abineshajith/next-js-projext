export default function DashboardLayout({ children }) {
    return (
        <section className="dashboard">
            <nav></nav>
            {children}
        </section>
    );
}