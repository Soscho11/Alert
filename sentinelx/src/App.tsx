import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Sidebar />

      <Header />

      <main className="ml-64 pt-16">
        <div className="p-6">
          <Dashboard />
        </div>
      </main>
    </div>
  );
}

export default App;