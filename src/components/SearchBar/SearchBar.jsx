import { Field, Form, Formik } from "formik";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  return (
    <Formik
      initialValues={{ topic: "" }}
      onSubmit={(values, actions) => {
        onSearch(values.topic);
        actions.resetForm();
      }}
    >
      <Form className={css.searchBarContainer}>
        <Field className={css.field} type="text" name="topic" />

        <button className={css.button} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
}
