import React, { Fragment } from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import "./User.css"


const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};


const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


const resetHandle=(e)=>{
  e.preventDefault()


}


const User = (props) => {


  return (
    <Fragment>
    
      <Formik
        initialValues={{

          name: '',
          age: '',
          email: '',
          mobile:'',
          govID:'',
          acceptedTerms: false, // added for our checkbox
          sex: '', // added for our select
          idType: '', // added for our select
          relation: '', // added for our select
          guardianName:'',
          emergencyNo:'',
          address:'',
          state:'',
          city:'',
          pincode:'',
          occupation:'',
          religion:'',
          status:'',
          group:'',


        }}
        
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required("Name Field not be Empty")
            ,
          age: Yup.number()
            .min(18, 'Must be 18  or above')
            .required("Age Field not be Empty")
            ,
          email: Yup.string()
            .email('Invalid email address')
            ,
            
            
              mobile: Yup.string()
              .matches(phoneRegExp, 
                'Phone number is not valid')
                .max(10, 'Must be 10 digit'),
                

            govID: Yup.string()
            .matches(phoneRegExp, 
              'govt ID is not valid')
            ,


            guardianName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            ,

            emergencyNo: Yup.string()
            .matches(phoneRegExp, 
              'Emergency Number is not valid')
            ,

            address: Yup.string()
            .max(15, 'Must be 15 characters or less')
            ,

            pincode: Yup.string()
            .matches(phoneRegExp, 
              'Pincode is not valid')
            ,

            occupation: Yup.string()
            .max(15, 'Must be 15 characters or less')
            ,

            sex: Yup.string()
            .oneOf(
              ['male', 'female'],
              'Invalid sex '
            ).required("Sex Field not be Empty")
            ,

            idType: Yup.string()
            .oneOf(
              ['adhaar', 'voter'],
              'Invalid Id '
            )
            ,
            relation: Yup.string()
            .oneOf(
              ['father', 'mother'],
              'Invalid relation '
            )
            ,

            state: Yup.string()
            .oneOf(
              ['uttarakhand', 'uttarpradesh'],
              'Invalid State '
            )
            ,
            city: Yup.string()
            .oneOf(
              ['dehradun', 'nainital'],
              'Invalid City '
            )
            ,
            religion: Yup.string()
            .oneOf(
              ['hindu', 'muslim', 'sikh'],
              'Invalid Religion '
            )
            ,
            status: Yup.string()
            .oneOf(
              ['married', 'unmarried'],
              'Invalid Status '
            )
            ,
            group: Yup.string()
            .oneOf(
              ['a+', 'b+'],
              'Invalid Group '
            )
            ,
        })}
        onSubmit={(values, { setSubmitting, resetForm,}) => {
          
          
          setTimeout(() => {
            let dataToSubmit =  {
      
              address: values.address,
              age: values.age,
              city: values.city,
              email: values.email,
              emergencyNo: values.emergencyNo,
              govID: values.govID,
              group: values.group,
              guardianName: values.guardianName,
              idType: values.idType,
              mobile: values.mobile,
              name: values.name,
              occupation: values.occupation,
              pincode: values.pincode,
              relation: values.relation,
              religion: values.religion,
              sex: values.sex,
              state: values.state,
              status: values.status,
            };

            props.onAdd(dataToSubmit);

           
            resetForm();

            setSubmitting(true)
          }, 400);
         
        }}
      >
        <div className="container">
        <Form >
          <h2>Personal Details </h2>
          <div className="details">
            <div>
          
          
          <MyTextInput
            className="input_large required"
            required
            
            label="Name*"
            name="name"
            type="text"
            placeholder="Enter Name"
          />

          <MyTextInput
          className="input_medium"
            label="Mobile"
            name="mobile"
            type="tel"
            placeholder="Enter Mobile"
          />
        </div>
        <div>
      

          <MyTextInput
          className="input_medium"
            label="Date of Birth or Age*"
            name="age"
            type="number"
            placeholder="DD/MM/YYYY or Age in years"
          />

          <MySelect className="field" label="Sex*" name="sex">
            <option value="">Select Sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>

          </MySelect>

          <MySelect label="Govt Issued ID" name="idType">
            <option value="">ID Type</option>
            <option value="adhaar">Adhaar Card</option>
            <option value="voter">Voter Card</option>
        
          </MySelect>
          


          <MyTextInput
            className="input_medium"
            name="govID"
            type="number"
            placeholder="Enter Govt ID"
          />
          </div>
          </div>
         
     

          <h2>Contact Details </h2>
          <div className="details">
            <div>
          

          <MySelect label="Guardian Details" name="relation">
            <option value="">Enter Label</option>
            <option value="father">Father</option>
            <option value="mother">Mother</option>
            
        
          </MySelect>

          <MyTextInput
          className="input_small"
            label=""
            name="guardianName"
            type="text"
            placeholder="Enter GuardinName"
          />
          </div>
          <div>
        


          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="example@gmail.com"
          />

          <MyTextInput
            id="label_text"
          
            label="Emergency No"
            name="emergencyNo"
            type="number"
            placeholder="Enter Emergency No"
          />
          </div>
          </div>
      

          <h2>Address Details </h2>
          <div className="details">
            <div>
         
          <MyTextInput
            className="input_large"
            label="Address"
            name="address"
            type="text"
            placeholder="Enter Address"
          />
          
          <MyTextInput
            label="Country"
            name="country"
            type="text"
            value="India"
            readonly />
          
            </div>
            <div>

          <MySelect className="field_medium" label="State" name="state">
            <option value="">Enter State</option>
            <option value="uttarakhand">Uttarakand</option>
            <option value="uttarpradesh">Uttar Pradesh</option>
            </MySelect>


      
            <MySelect className="field_medium" label="City" name="city">
            <option value="">Enter city/town/village</option>
            <option value="dehradun">Dehradun</option>
            <option value="nainital">Nainital</option>
            </MySelect>

            <MyTextInput
            label="Pincode"
            name="pincode"
            type="number"
            placeholder="Enter Pincode"
          />
          </div>
          </div>

          
          <h2>Other Details </h2>

          <MyTextInput
            className="input_medium"
            label="Occupation"
            name="occupation"
            type="text"
            placeholder="Enter Occupation"
          />
          
          <MySelect className="field_medium" label="Relegion" name="religion">
            <option value="">Enter Religion</option>
            <option value="hindu">Hindu</option>
            <option value="muslim">Muslim</option>
            <option value="sikh">Sikh</option>
            <option value="marathi">Marathi</option>
            </MySelect>

            <MySelect className="field_medium" label="Maritial Status" name="status">
            <option value="">Enter Maritial Status</option>
            <option value="married">Married</option>
            <option value="unmarried">Unmarried</option>
            </MySelect>
            <MySelect label="Blood Group" name="group">
            <option value="">Group</option>
            <option value="a+">A+</option>
            <option value="b+">B+</option>
            </MySelect>
            

            <MyTextInput
            label="Nationality"
            name="nationality"
            type="text"
            value="India;"
            readonly
          />

          <div>

          <button type="reset" id="cancel">Cancel</button>
          

          <button id="success" type="submit">Submit</button>
          </div>
        </Form>
        </div>
     
      </Formik>
  



    </Fragment>
    
  );
};

export default User