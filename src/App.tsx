import DashboardContent from "./components/DashboardContent";
import Dashboardheader from "./components/Dashboardheader";
import Store from "./components/Store";
import StoreSideBarLink from "./components/StoreSideBarLink";
import StoreWallet from "./components/StoreWallet";

function App() {
  return (
    <>
      <main className='min-h-screen w-full flex'>
        <section className='fixed h-full flex-1  w-sidebar bg-navy-blue-50 py-4 flex flex-col'>
          <Store />
          <StoreSideBarLink />
          <StoreWallet />
        </section>
        <section className='flex-1 border-blue-50 w-custom ml-[14rem]'>
          <Dashboardheader />
          <DashboardContent />
        </section>
      </main>
    </>
  );
}

export default App;
