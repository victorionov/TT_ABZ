import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';

import './Inputs.scss';

interface FormValues {
  name: string;
  email: string;
  phone: string;
}

const initialValues: FormValues = {
  name: '',
  email: '',
  phone: '',
};

const validationSchema = null;

const handleSubmit = (values: FormValues) => {
  console.log('Form values:', values);
};

export const Inputs = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className='input-container'>
        <div className='input-wrap'>
          <label htmlFor="name"></label>
          <Field className='signup-input' type="text" id="name" name="name" placeholder='Your name'/>
          <ErrorMessage name="name" component="div" />
        </div>

        <div className='input-wrap'>
          <label htmlFor="email"></label>
          <Field className='signup-input' type="email" id="email" name="email" placeholder='Email' />
          <ErrorMessage name="email" component="div" />
        </div>

        <div className='input-wrap'>
          <label htmlFor="phone"></label>
          <Field className='signup-input' type="tel" id="phone" name="phone" placeholder='Phone'/>
          <ErrorMessage name="phone" component="div" />
        </div>

        <p className='phone-example'>+38 (XXX) XXX - XX - XX</p>
      </Form>
    </Formik>
  );
};
