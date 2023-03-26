import React from 'react'
import './Dashboard.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Logo from '../../assest/mediplus.png'
import { Link, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/fetch.hook'
import { useFormik } from 'formik'
import  { toast, Toaster } from 'react-hot-toast'
import { paymentVerify } from '../../helpers/validate'
import { paysavings } from '../../helpers/helper'

function Dashboard() {
  const navigate = useNavigate();

  const { apiData, isLoading, serverError } = useFetch()
  console.log('dashboard apidata', apiData?.email)

  const formik = useFormik({
    initialValues: {
      email: apiData?.email || '',
      amount: ''
    },
    validate: paymentVerify,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      let payPromise = paysavings(values)

      toast.promise(payPromise, {
        loading: "Please Wait...",
        //success: <b>Payment Successful</b>,
        error: <b>Payment is not Successful</b> 
      });

      payPromise.then(
        navigate('/dashboard')
      )
    }
  })

  if(isLoading) return <h1>isLoading</h1>
  if(serverError) return <h1>{serverError.message}</h1>

  return (
    <div className='dashboard'>
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className='top'>
        <div className='dashboard_nav'>
          <div className='logo'>
            <img src={Logo} alt='Logo' className='dashboard_img'/>
          </div>

          <div className='dashboard_link'>
            <Link to={'/profile'}>
              <AccountCircleIcon className='dashboard_links'/>
            </Link>
          </div>

        </div>
      </div>

      <div className='dashboard_container'>
        <div className='info'>
          <h2>Hello, {apiData?.username || 'username'} </h2>
          <h4>Accont Balance <span>0.00</span></h4>
        </div>

        <section>
          <h2>Save More today?</h2>

          <form onSubmit={formik.handleSubmit}>
            <label>Email:</label>
            <input {...formik.getFieldProps('email')} type='email'></input>
            <label>Amount:</label>
            <input {...formik.getFieldProps('amount')} type='text'></input>
            <button type='submit'>Pay</button>
          </form>
        </section>
      </div>
    </div>
  )
}

export default Dashboard