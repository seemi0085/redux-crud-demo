import { Formik, Form, Field, ErrorMessage } from "formik";
// import { useFormik ,Form} from "formik";
import { Fragment } from "react";
import { useEffect } from "react";
import *  as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router";
import { userRegister, getUser, updateUser } from "../Redux/Action/action";
import shortid from "shortid";
const Registration = () => {
    const history = useHistory();
    const { id } = useParams()
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.user.currentUsers)
    console.log("userinfo======", userInfo)
    const initialValues = Object.keys(userInfo).length > 0 ? userInfo : { name: '', email: '', password: '' };
    // const initialValues = userInfo !== "" && userInfo;
    console.log('initialValues', initialValues)
    const formInitialSchema =
        initialValues
    // name: '',
    // email: '',
    // password: ''

    console.log("formschema======", formInitialSchema)
    const formValidationschema = yup.object().shape({
        name: yup.string().required('name is required'),
        email: yup.string().required('email is required').email("please enter your email"),
        password: yup.string().required('password is required').min(6)
    })
    const handleFormSubmit = (value) => {
        console.log('values on button click====', value);
        if (userInfo && Object.keys(userInfo).length > 0) {
            dispatch(updateUser(value));
        } else {
            Object.assign(value, { id: shortid.generate() })
            dispatch(userRegister(value));
        }
        //redirect code
        history.push(`/home`)
    }
    useEffect(() => {
        if (id) {
            dispatch(getUser(id));
        }
    });
    // useEffect(() => {
    //     console.log('\n\n in useEffect userInfo -> ', userInfo)
    // }, [userInfo]);
    return (

        <Fragment>
            {/* <h1>{id}</h1> */}
            <div clas="container">
                <div classsNameName="col-md-12" >
                    <h1 className="text-center">Formik and yup form</h1>
                </div>
            </div>
            <Formik initialValues={formInitialSchema}
                validationSchema={formValidationschema}
                onSubmit={(value => handleFormSubmit(value))}>
                <Form  align="center" cellPadding="10" cellSpacing="5" border="3">
                    <Field type="text" name="name" placeholder="Enter your name" /><br/>
                    <ErrorMessage name="name" /><br/>
                    <Field type="text" name="email" placeholder="Email" /><br/>
                    <ErrorMessage name="email" /><br/>
                    <Field type="text" name="password" placeholder="password"/><br/>
                    <ErrorMessage name="password" /><br/>
                    <button type="submit">
                        Submit
                        {/* {id ? 'Edit' : 'Add'} */}

                        </button>
                </Form>

            </Formik>

        </Fragment>
    )
}

export default Registration;


// import { useFormik } from "formik";
// import {useDispatch} from 'react-redux'
// import {shortid} from 'shortid'
// import { userRegister,getUser } from "../Redux/Action/action";
// import {useParams, useHistory} from'react-router-dom'
// import {useEffect} from "react";



// function Registration() {
//     const history = useHistory();
//     const {id} = useParams()
//     const dispatch= useDispatch()
//     const formik = useFormik({
//         initialValues: {
//             name: "",
//             email: "",
//             password: ""
//         },
//         onSubmit: values => {
//             console.log('values on button click====', values);
//             Object.assign(values, { id: shortid.generate() });
//             dispatch(userRegister(values));
//             history.push(`/home`)
//         }
//     })
//     useEffect(() => {
//         if(id) {
//             dispatch(getUser(id));
//         }
//     });
//     // useEffect(() => {
//     //     console.log('\n\n in useEffect userInfo -> ', userInfo)
//     // }, [userInfo]);


//     return (
//         <div className="App">
//             <form>
//                 <label htmlFor="name">First Name</label>
//                 <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} /><br />
//                 <label htmlFor="email">email</label>
//                 <input type="text" id="email" name="email"onChange={formik.handleChange} value={formik.values.email} /><br />
//                 <label htmlFor="password">password</label>
//                 <input type="text" id="password" name="password" onChange={formik.handleChange} value={formik.values.password}/><br />
//                 <button type="submit" onChange={formik.handleChange}  >
//                     {/* {id ? 'Edit' : 'Add'} */}
//                     Submit
//                 </button>
//                 {/*<button type="submit" onClick={() => setSend(true)}>Edit</button>*/}
//             </form>
//         </div>
//     )
// }
// export default Registration;