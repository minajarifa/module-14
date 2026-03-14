export default function Banner() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse  w-full">
        <img
          src={'https://i.ibb.co.com/nNBMJfqf/download.jpg'}
          className="max-w-sm rounded-lg shadow-2xl flex-1 h-full"
        />
        <div className=" w-full text-center border">
          <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
          <button className="btn btn-primary">view the list</button>
        </div>
      </div>
    </div>
  );
}
