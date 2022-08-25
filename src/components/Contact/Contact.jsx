import { Box } from "@mui/system";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { FormWrapper, Title } from "./styles";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const success = () => toast("message sent");
  const error = () => toast("error");
  console.log(process.env.REACT_APP_FORMIK_USER_ID)
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#040348",
      }}
      id="contact"
    >
      <FormWrapper>
        <Title>Contact me</Title>
        <Formik
          initialValues={{ email: "", name: "", message: "" }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email addresss`")
              .required("Required"),
            message: Yup.string().required("Required"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            emailjs
              .send(
                process.env.REACT_APP_FORMIK_SERVICE_ID,
                process.env.REACT_APP_FORMIK_TEMPLATE_ID,
                values,
                process.env.REACT_APP_FORMIK_USER_ID
              )
              .then(
                (result) => {
                  success();
                  setSubmitting(false);
                  resetForm();
                },
                (result) => {
                  error();
                  setSubmitting(false);
                }
              );
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <MyTextInput
                label="Name"
                name="name"
                type="text"
                placeholder="Name"
              />
              <MyTextInput
                label="Email Address"
                name="email"
                type="email"
                placeholder="Enter email"
              />
              <MyTextArea
                label="Message"
                name="message"
                rows="6"
                placeholder="Enter your message"
              />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </FormWrapper>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Box>
  );
};

export default Contact;

const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea className="text-area" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyTextInput = ({ label, ...props }) => {
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
