import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
        <h2 className="text-center mb-4">Register</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter email" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input type="text" className="form-control" placeholder="Enter username" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter password" required />
          </div>
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary">Register</button>
            <Link to="/login" className="btn btn-outline-secondary">Back to Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
