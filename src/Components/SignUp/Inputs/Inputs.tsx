import { Formik, Field, Form, useFormikContext } from 'formik';
import { createUser } from '../../../api/users';
import { User } from '../../../@types/User';

import './Inputs.scss';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  position: string;
  photo: File | null;
}

const FileInput = () => {
  const { setFieldValue } = useFormikContext<FormValues>();
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files && event.currentTarget.files[0];
    setFieldValue('photo', file);
  };

  return (
    <>
      <input type="file" name="photo" id="photo-upload" onChange={handleFileChange} style={{ display: 'none' }} />
      <label htmlFor="photo-upload" className="upload-button">
        Upload
      </label>
    </>
  );
};

export const Inputs = () => {
  const initialValues: FormValues = {
    name: '',
    email: '',
    phone: '',
    position: 'frontend',
    photo: null,
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        const errors: Partial<FormValues> = {};

        if (!values.name && !values.email && !values.phone) {
          return errors;
        }
        if (!values.name) {
          errors.name = 'Required';
        }

        if (!values.email) {
          errors.email = 'Required';
        }

        if (!values.phone) {
          errors.phone = 'Required';
        }

        return errors;
      }}

      onSubmit={async (values) => {
        console.log(values);

        try {
          const user: User = {
            name: values.name,
            email: values.email,
            phone: values.phone,
            position: values.position,
            position_id: values.position === 'frontend' ? 1 : 2,
            registration_timestamp: Date.now(),
            photo: '',
          };

          const createdUser = await createUser(user);
          console.log('User created:', createdUser);
        } catch (error) {
          console.error('Error creating user:', error);
        }
      }}
    >
      {({ isValid, values }) => (
      <Form className="input-container">
        <Field 
          className="input signup-input" 
          id="name" 
          name="name" placeholder="Your name" />
        <Field 
          className="input signup-input" 
          id="email" 
          name="email" placeholder="Email" type="email" />
        <Field 
          className="input signup-input" 
          id="phone" 
          name="phone" placeholder="Phone" />
        <p className="phone-example">+38 (XXX) XXX - XX - XX</p>

        <div 
          className="radio-group" 
          role="group" 
          aria-labelledby="position">
          <label className="radio-title" htmlFor="position">
            Select your position
          </label>
          <label>
            <Field 
              type="radio" 
              name="position" 
              value="frontend" />
            Frontend developer
          </label>
          <label>
            <Field 
              type="radio" 
              name="position" 
              value="backend" />
            Backend developer
          </label>
          <label>
            <Field 
              type="radio" 
              name="position" 
              value="designer" />
            Designer
          </label>
          <label>
            <Field 
              type="radio" 
              name="position"
               value="qa" />
            QA
          </label>
        </div>

        <div className="upload-container">
          <FileInput />
          <span className="placeholder">
          <Field name="photo">
            {({ field }: { field: any }) => (field.value ? field.value.name : 'Upload your photo')}
          </Field>
          </span>
        </div>

        <button
          className='button-sign-up' 
          type="submit" 
          disabled={!isValid 
            || !values.position 
            || !(values.name 
            || values.email 
            || values.phone)}
          >
            Sign up
          </button>
      </Form>
      )}
    </Formik>
  );
};
