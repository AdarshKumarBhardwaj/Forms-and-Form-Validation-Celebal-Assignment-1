// src/components/FormComponent.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FormComponent.css";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phoneNo: "",
    country: "",
    city: "",
    panNo: "",
    aadharNo: "",
  });

  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.firstName) {
      tempErrors.firstName = "First Name is required";
      isValid = false;
    }
    if (!formData.lastName) {
      tempErrors.lastName = "Last Name is required";
      isValid = false;
    }
    if (!formData.username) {
      tempErrors.username = "Username is required";
      isValid = false;
    }
    if (!formData.email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }
    if (!formData.password) {
      tempErrors.password = "Password is required";
      isValid = false;
    }
    if (!formData.phoneNo) {
      tempErrors.phoneNo = "Phone No. is required";
      isValid = false;
    }
    if (!formData.country) {
      tempErrors.country = "Country is required";
      isValid = false;
    }
    if (!formData.city) {
      tempErrors.city = "City is required";
      isValid = false;
    }
    if (!formData.panNo) {
      tempErrors.panNo = "Pan No. is required";
      isValid = false;
    }
    if (!formData.aadharNo) {
      tempErrors.aadharNo = "Aadhar No. is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/success", { state: { formData } });
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <span className="error">{errors.firstName}</span>
          )}
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type={passwordVisible ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? "Hide" : "Show"}
          </button>
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div>
          <label>Phone No.:</label>
          <input
            type="text"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
          />
          {errors.phoneNo && <span className="error">{errors.phoneNo}</span>}
        </div>
        <div>
          <label>Country:</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            {/* Add more options as needed */}
          </select>
          {errors.country && <span className="error">{errors.country}</span>}
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && <span className="error">{errors.city}</span>}
        </div>
        <div>
          <label>Pan No.:</label>
          <input
            type="text"
            name="panNo"
            value={formData.panNo}
            onChange={handleChange}
          />
          {errors.panNo && <span className="error">{errors.panNo}</span>}
        </div>
        <div>
          <label>Aadhar No.:</label>
          <input
            type="text"
            name="aadharNo"
            value={formData.aadharNo}
            onChange={handleChange}
          />
          {errors.aadharNo && <span className="error">{errors.aadharNo}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
