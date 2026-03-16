import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../../firebase/firebase.init";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const providerGithub = new GithubAuthProvider();
  const handleLoginByGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("log out completed");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // 
  // 

  const handleGithubLogin = () => {
    signInWithPopup(auth, providerGithub)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(user);
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </div>
          {user ? (
            <button
              onClick={handleSignOut}
              className="btn btn-outline btn-accent"
            >
              <FcGoogle className="text-2xl" />
              Log Out
            </button>
          ) : (
            <>
              <button
                onClick={handleLoginByGoogle}
                className="btn btn-outline btn-accent"
              >
                <FcGoogle className="text-2xl" />
                Login with Google
              </button>
              <button
                onClick={handleGithubLogin}
                className="btn btn-outline btn-accent"
              >
                <FcGoogle className="text-2xl" />
                Login with Github
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
