import React from 'react'
import Section from './Section'
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

const Contact = () => {

  const handleSubmit = (values: {
      email: string;
      name: string;
      message: string;
  }, formikHelpers: FormikHelpers<{
      email: string;
      name: string;
      message: string;
  }>) => {
    
  };

  return (
    <Section id="contact" name="Contact" subtitle="Use this form to contact me immediately. 📭">
      <Formik
        initialValues={{
          email: "",
          name: "",
          message: ""
        }}
        validationSchema={Yup.object({
          email: Yup.string().email().required(),
          name: Yup.string().required(),
          message: Yup.string().required().min(5).max(500)
        })}
        onSubmit={handleSubmit}
      >
        <div className="md:w-3/4 w-full">
          <div className="flex w-full">
            <div className="w-1/2 pr-2">
              <label htmlFor="email" className="h-10 font-space text-stone-800 dark:text-white">Enter your email</label>
              <Field className="pretty-inp" type="text" name="email" placeholder="(ex: johndoe@gmail.com)"/>
              <div className="h-[1.25rem] my-2"><ErrorMessage className="error-msg" name="email" component="div"/></div>
            </div>
            <div className="w-1/2 pl-2">
              <label htmlFor="name" className="h-10 font-space text-stone-800 dark:text-white">Enter your name</label>
              <Field className="pretty-inp" type="text" name="name" placeholder="(ex: John)"/>
              <div className="h-[1.25rem] my-2"><ErrorMessage className="error-msg" name="name" component="div"/></div>
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="message" className="h-10 font-space text-stone-800 dark:text-white">Enter your message</label>
            <Field className="pretty-inp h-20 max-h-[8rem]" as="textarea" name="message" placeholder="(ex: Hey can you do turn my monolith into a serverless architecture?"/>
            <div className="h-[1.25rem] my-2"><ErrorMessage className="error-msg" name="message" component="div"/></div>
          </div>
          <div className="w-full">
            <button className="rounded-sm w-full h-12 transition bg-green-500 text-white font-space hover:bg-green-400 active:bg-green-400 focus:bg-green-400">Send Email</button>
          </div>
        </div>
      </Formik>
    </Section>
  )
}

export default Contact