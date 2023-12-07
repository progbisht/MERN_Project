import React from "react";

const Register = () => {
  return (
    <>
    <div className="container-box">
        <div className="wrapper">
        <form className="form-box">
            <h2>Registration</h2>
            <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">
                    Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="nameInput"
                />
                </div>
                <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">
                    Email address
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                />
                </div>
                <div className="mb-3">
                <label htmlFor="contactInput" className="form-label">
                    Contact
                </label>
                <input
                    type="number"
                    className="form-control"
                    id="contactInput"
                />
                </div>
                <div className="mb-3">
                <label htmlFor="passwordInput" className="form-label">
                    Password
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="passwordInput"
                />
                </div>
                <div className="mb-3">
                <label htmlFor="cpasswordInput" className="form-label">
                    Confirm Password
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="cpasswordInput"
                />
                </div>
                
                <button type="submit" className="btn btn-primary">
                Submit
                </button>
        </form>
        </div>
    </div>
        
    </>
  );
};

export default Register;
