import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import styles from "./Form.module.css";
import Button from "../Button/Button";
const Form = () => {
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[a-zA-Z]+$/, "This field should be a string")
      .min(2, "The name is too short!")
      .max(50, "The name is too long!")
      .required("Required"),

    phoneNumber: yup
      .number()
      .min(10, "Phone number is too short !")
      .typeError("This text is not a number")
      .required("Required"),
  });
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          phoneNumber: "",
          drivingExperience: "",
        }}
        validateOnBlur
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm({
            values: {
              name: "",
              phoneNumber: "",
              drivingExperience: "",
            },
          });
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          isValid,
          handleSubmit,
          handleReset,
          handleBlur,
          dirty,
        }) => (
          <div
            className={styles.formContainer}
            onClick={(e) => e.stopPropagation()}
          >
            <form className={styles.form} action="">
              <div className={styles.field}>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Name"
                  name={"name"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />{" "}
                {touched.name && errors.name && (
                  <p className={styles.error}>{errors.name}</p>
                )}
              </div>

              <div className={styles.field}>
                <input
                  type="tel"
                  className={styles.input}
                  placeholder="Phone"
                  name={"phoneNumber"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phoneNumber}
                />
                {touched.phoneNumber && errors.phoneNumber && (
                  <p className={styles.error}>{errors.phoneNumber}</p>
                )}
              </div>
              <div className={styles.field}>
                <select
                  className={styles.input}
                  name={"drivingExperience"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.drivingExperience}
                >
                  <option value="" label="Class a driving experience">
                    Class a driving experience
                  </option>
                  <option value="cargo" label="cargo">
                    cargo
                  </option>
                  <option value="passenger" label="passenger">
                    passenger
                  </option>
                  >
                  <option value="other" label="other">
                    other
                  </option>
                </select>
              </div>
              <Button
                className={styles.button}
                disabled={!isValid && !dirty}
                onClick={handleSubmit}
              >
                Send
              </Button>
            </form>
          </div>
        )}
      </Formik>
    </>
  );
};
export default Form;
