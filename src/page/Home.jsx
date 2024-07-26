import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="text-center sm:mt-9  m-8">
      <h1 className="text-red-500 sm:text-5xl text-sm font-semibold text-nowrap tracking-normal mb-4">we deal with all types of pizzas</h1>
      <CreateUser/>
    </div>
  );
}

export default Home;
