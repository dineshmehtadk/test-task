import React, { useEffect } from 'react';

import { Formik , Field, useFormik} from 'formik';
import "./User.css"

const User = () => {
  const formik = useFormik({
  initialValues:{
    name:'',
    email: '',
    password: '',
    mobile: '',
    age: '',
    sex: '',
  },
  onSubmit: values => {
    alert(JSON.stringify(values, null, 2));
  },

  
  })

 

  return (
    <div className="container">
    <h1>Anywhere in your app!</h1>

  
        <form onSubmit={formik.handleSubmit} >
          <h2>Personal Details</h2>
          <div className="personal_details">
            <div >
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="input_large"
            placeholder="Enter Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          <label>Mobile</label>
          <input
            type="number"
            name="mobile"
            placeholder="Enter Mobile"
            className="input_medium"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mobile}
          />

          </div>
          
          <div >
          <label>Date of Birth or Age</label>
          <input
            type="number"
            name="age"
            className="input_medium"
            placeholder="DD/MM/YYYY or Age in Years"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.age}
          />
          
        
          <label>Sex</label>
          
          <Field className="field" name="sex" as="select" placeholder="Enter Sex">
          <option value="" disabled selected>Enter Sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Field>
          {formik.errors.sex && formik.touched.sex && formik.errors.sex}
       
     
        
       
        <label>Govt Issued ID</label>
        <Field className="field" name="id" as="select" placeholder="ID Type">
          <option value="" disabled selected>Enter Sex</option>
            <option value="adhaar">Adhaar Card</option>
            <option value="voter">Voter Card</option>
          </Field>

          <input
            type="number"
            name="gov_id"
            placeholder="Enter Govt ID"
            className="input_medium"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mobile}
          />
      
     
        </div>
        </div>
        <h2>Contact Details</h2>
          <div className="contact_details">
            <div className="col1">
            <label>Guardian Details</label>
        <Field className="field" name="id" as="select" placeholder="ID Type">
          <option value="" disabled selected>Enter Sex</option>
            <option value="adhaar">Adhaar Card</option>
            <option value="voter">Voter Card</option>
          </Field>

          <input
            type="number"
            name="gov_id"
            placeholder="Enter Govt ID"
            className="input_small"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mobile}
          />
          
  
          </div>
          
          <div className="col2">
            <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            placeholder="Enter Email"
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && formik.errors.email}
          </div>
          <div>
          <label>Emergency Contact</label>
          <input
            type="number"
            name="age"
            className="input_small"
            placeholder="Enter Emergency No"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.age}
          />
          </div>
          
        </div>
        </div>

        <h2>Address Details</h2>
          <div className="contact_details">
            <div >
            <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="Enter Address"
            className="input_large"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mobile}
          />
          <label>Country</label>
          <Field className="field_medium" name="country" as="select" >
          <option value="" selected>India</option>

          </Field>
      

        
          </div>
          
          <div className="col2">
            <div>
            <label>State</label>
        <Field className="field_medium" name="state" as="select" placeholder="ID Type">
          <option value="" disabled selected>Enter State</option>
            <option value="adhaar">Uttarakhand</option>
            <option value="voter">Uttarpradesh</option>
          </Field>
          <label>Pincode</label>
        <Field className="field_medium" name="pincode" as="select" placeholder="ID Type">
          <option value="" disabled selected>Enter Pincode</option>
            <option value="adhaar">Uttarakhand</option>
            <option value="voter">Uttarpradesh</option>
          </Field>
         
          </div>
          <div>
          <label>City</label>
        <Field className="field_medium" name="city" as="select" placeholder="ID Type">
          <option value="" disabled selected>Enter city</option>
            <option value="adhaar">Uttarakhand</option>
            <option value="voter">Uttarpradesh</option>
          </Field>
         
          </div>
          
       
        
        </div>
        </div>

        <h2>Other Details </h2>
        <label>Occupation</label>
          <input
            type="text"
            name="address"
            placeholder="Enter Address"
            className="input_small"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mobile}
          />
                    <label>Religion</label>
        <Field className="field_medium" name="city" as="select" placeholder="ID Type">
          <option value="" disabled selected>Enter Religion</option>
            <option value="adhaar">Hindu</option>
            <option value="voter">Muslim</option>
            <option value="voter">Sikh</option>
          </Field>
          <label>Maritial Status</label>
        <Field className="field_medium" name="city" as="select" placeholder="ID Type">
          <option value="" disabled selected>Enter Maritial Status</option>
            <option value="adhaar">Married</option>
            <option value="voter">Unmarried</option>
          </Field>

          <label>Blood Group</label>
        <Field className="field" name="city" as="select" placeholder="ID Type">
          <option value="" disabled selected>Group</option>
            <option value="adhaar">A+</option>
            <option value="voter">A-</option>
          </Field>
          <label>Nationality</label>
        <Field className="field_medium" name="city" as="select" placeholder="ID Type">
          <option value="" selected>India</option>

          </Field>

          <div>

          <button>Cancel</button>
          {formik.errors.password && formik.touched.password && formik.errors.password}
          <button type="submit" disabled={formik.isSubmitting}>
            Submit
          </button>
        </div>
        </form>
      


  </div>
  )
}

export default User
