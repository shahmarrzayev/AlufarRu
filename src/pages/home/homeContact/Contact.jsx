import React from "react";
import "./Contact.scss";
import { useFormik } from "formik";
// import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send(
          "service_b8anvyb", // EmailJS servis ID
          "template_h0fciza", // EmailJS şablon ID
          values,
          "Fl4KxiDhQ8MFqrTNL" // EmailJS public key
        )
        .then(
          () => {
            // Swal.fire({
            //   position: "top-end",
            //   icon: "success",
            //   title: "Success",
            //   showConfirmButton: false,
            //   timer: 1500,
            // });
            resetForm();
          },
          (error) => {
            window.alert("HATA");
            console.error("Email gönderme hatası:", error);
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Error",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        );
    },
  });
  return (
    <section id="contact">
      <div className="container-fluid container-xxl container-sm">
        <h2 className="contactHeader"> СВЯЖИТЕСЬ С НАМИ</h2>
        <form onSubmit={formik.handleSubmit} action="">
          <div className="borderedDivMini">
            <h4>Если у вас есть вопросы по нашей продукции, индивидуальном решении, поддержке или сотрудничестве, обратитесь к нам:</h4>
          </div>
          <div className="borderedDivMini">{/* .empty */}</div>
          <div className="borderedDivMini">
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
              placeholder="Телефон*"
            />
          </div>
          <div className="borderedDivMini">
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="Электронная почта*"
            />
          </div>
          <div className="borderedDivBig">
            <input
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              placeholder="Имя*"
            />
          </div>
          <div className="borderedDivBig">
            <input
              type="text"
              id="message"
              name="message"
              onChange={formik.handleChange}
              value={formik.values.message}
              placeholder="Сообщение*"
            />
          </div>
          <div className="formButton">
            <button type="submit"> отправить запрос</button>
            <div className="border"></div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
