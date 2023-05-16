import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';

import './RadioForm.scss';

export const RadioForm = () => {
  const initialValues = {
    option: 'option1',
    file: null,
  };

  const validationSchema = null; // Add validation schema if needed

  const handleSubmit = (values: { option: string; file: File | null }) => {
    console.log('Selected option:', values.option);
    console.log('Uploaded file:', values.file);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      console.log('Uploaded file:', file);
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className="form-container">
        <h3 className='radio-title'>Select your position</h3>
        <div className="radio-group" role="group" aria-labelledby="radio-group-label">
          <label>
            <Field type="radio" name="option" value="option1" />
            Frontend developer
          </label>
          <label>
            <Field type="radio" name="option" value="option2" />
            Backend developer
          </label>
          <label>
            <Field type="radio" name="option" value="option3" />
            Designer
          </label>
          <label>
            <Field type="radio" name="option" value="option4" />
            QA
          </label>
        </div>
        <ErrorMessage className="error-message" name="option" component="div" />
        <div className="upload-container">
          <button className="upload-button" type="button">
            Upload
          </button>
          <label htmlFor="file-upload" className="file-label">
            <input className="file-input" id="file-upload" type="file" onChange={handleFileUpload} name="file" />
          </label>
          <span className="placeholder">Upload your photo</span>
        </div>
      </Form>
    </Formik>
  );
};

