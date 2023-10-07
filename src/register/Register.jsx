import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
            
            <div className="hero min-h-[400px] bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card flex-shrink-0   shadow-2xl bg-base-100">
      <form  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" placeholder="your name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">photo</span>
          </label>
          <input type="photo" placeholder="photo url" name="photo" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">register</button>
        </div>
      </form>
      <p>if you have alrady an account !<Link to='/login' className="text-green-500 font-bold"> login</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;