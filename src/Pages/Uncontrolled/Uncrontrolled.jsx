import { useRef } from "react";

export default function Uncrontrolled() {
  const emailRef = useRef("");
  const PassRef = useRef("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef?.current.value;
    const pass = emailRef?.current.value;
    const userInfo={
        email,
        pass
    }
    console.log(userInfo);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="hero bg-base-200 min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse w-full">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
            <div className="card-body ">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  ref={emailRef}
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                  required
                />
                <label className="label">Password</label>
                <input
                  ref={PassRef}
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                  required
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
