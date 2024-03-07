import { Field, Form, Formik, ErrorMessage } from 'formik';
import { Toaster } from 'react-hot-toast';
import { warning } from '../ErrorMessage/ErrorMessage';
import css from '../SearchBar/SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  const handleSubmit = (values, actions) => {
    if (values.query === '') {
      warning();
      return;
    }
    onSearch(values.query);
    actions.resetForm();
  };

  return (
    <header>
      <Formik onSubmit={handleSubmit} initialValues={{ query: '' }}>
        <Form className={css.form}>
          <div className={css.container}>
            <Field
              name="query"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              className={css.input}
            />
            <button type="submit" className={css.button}>
              Search
            </button>
          </div>
          <ErrorMessage
            type="text"
            name="query"
            component="p"
            className={css.error}
          />
        </Form>
      </Formik>
      <Toaster />
    </header>
  );
}

// import * as Yup from 'yup';

// const FormSchema = Yup.object().shape({
//   query: Yup.string()
//     .min(3, 'Too Short!')
//     .max(25, 'Too Long!')
//     .required('Required'),
// });

// validationSchema={FormSchema}
