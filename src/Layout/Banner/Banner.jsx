export default function Banner() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse  w-full">
        <div className="flex-1">
          <img
            src={"https://i.ibb.co.com/nNBMJfqf/download.jpg"}
            className="max-w-sm rounded-lg shadow-2xl  h-full"
          />
        </div>
        <div className=" w-full text-center ">
          <h1 className="text-5xl font-bold">
            Books to freshen up your bookshelf
          </h1>
          <button className="btn btn-active btn-success bg-[#23BE0A] text-white m-5">
            view the list
          </button>
        </div>
      </div>
    </div>
  );
}
