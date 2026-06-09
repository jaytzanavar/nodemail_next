'use client'
import { useState } from "react";
import { Formik } from "formik";
import { sendMailForm } from "../../../lib/api";
import dynamic from "next/dynamic";

const DynamicButton = dynamic(() => import('../../components/Button/Button'), {
    loading: () => <p>Loading...</p>,
})

const inputClass = "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm transition-all duration-200 focus:border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700/20 hover:border-gray-400"
const labelClass = "mb-1.5 block text-sm font-medium text-gray-700"
const errorClass = "mt-1.5 text-xs text-red-500"

interface FormsProps {
    title: string
    name: string
    email: string
    phone: string
    subject: string
    message: string
    btn: string
    success: string
    error: string
    required: string
    invalidEmail: string
}

const Forms = ({ title, name, email, phone, subject, message, btn, success, error, required, invalidEmail }: FormsProps) => {

    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

    return (
        <div className="w-full bg-slate-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">

                <div className="flex flex-col items-center gap-4 mb-10">
                    <div className="h-1 w-16 rounded-full bg-gradient-to-r from-cyan-700 to-teal-600"></div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">{title}</h2>
                </div>

                <Formik
                    initialValues={{ name: '', email: '', phone: '', subject: '', message: '' }}
                    validate={values => {
                        const errors: any = {};
                        if (!values.name) {
                            errors.name = required;
                        }
                        if (!values.email) {
                            errors.email = required;
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = invalidEmail;
                        }
                        if (!values.subject) {
                            errors.subject = required;
                        }
                        if (!values.message) {
                            errors.message = required;
                        }
                        return errors;
                    }}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                        setStatus('idle')
                        try {
                            const res = await sendMailForm(values)
                            if (res.ok) {
                                setStatus('success')
                                resetForm()
                            } else {
                                setStatus('error')
                            }
                        } catch {
                            setStatus('error')
                        } finally {
                            setSubmitting(false)
                        }
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form className="rounded-2xl bg-white p-6 sm:p-10 shadow-xl ring-1 ring-gray-900/5" onSubmit={handleSubmit} noValidate>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-6">

                                <div>
                                    <label htmlFor="contact_name" className={labelClass}>{name} <span className="text-red-400">*</span></label>
                                    <input id="contact_name" name="name" type="text" autoComplete="name"
                                        value={values.name} onChange={handleChange} onBlur={handleBlur} className={inputClass} />
                                    {errors.name && touched.name && <p className={errorClass}>{errors.name}</p>}
                                </div>

                                <div>
                                    <label htmlFor="contact_email" className={labelClass}>{email} <span className="text-red-400">*</span></label>
                                    <input id="contact_email" name="email" type="email" autoComplete="email"
                                        value={values.email} onChange={handleChange} onBlur={handleBlur} className={inputClass} />
                                    {errors.email && touched.email && <p className={errorClass}>{errors.email}</p>}
                                </div>

                                <div>
                                    <label htmlFor="contact_phone" className={labelClass}>{phone}</label>
                                    <input id="contact_phone" name="phone" type="tel" autoComplete="tel"
                                        value={values.phone} onChange={handleChange} onBlur={handleBlur} className={inputClass} />
                                </div>

                                <div>
                                    <label htmlFor="contact_subject" className={labelClass}>{subject} <span className="text-red-400">*</span></label>
                                    <input id="contact_subject" name="subject" type="text"
                                        value={values.subject} onChange={handleChange} onBlur={handleBlur} className={inputClass} />
                                    {errors.subject && touched.subject && <p className={errorClass}>{errors.subject}</p>}
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="contact_message" className={labelClass}>{message} <span className="text-red-400">*</span></label>
                                    <textarea id="contact_message" name="message" rows={5}
                                        value={values.message} onChange={handleChange} onBlur={handleBlur} className={`${inputClass} resize-y`} />
                                    {errors.message && touched.message && <p className={errorClass}>{errors.message}</p>}
                                </div>

                            </div>

                            {status === 'success' &&
                                <p className="mt-6 rounded-lg border border-teal-200 bg-teal-50 px-4 py-3 text-sm text-teal-800">{success}</p>}
                            {status === 'error' &&
                                <p className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}

                            <div className="mt-8 flex justify-center">
                                <DynamicButton link={null} type="submit" size="xl"
                                    disabled={Object.keys(errors).length > 0 || isSubmitting}
                                    label={!isSubmitting
                                        ? <span>{btn}</span>
                                        : <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" role="status" aria-hidden="true"></span>} />
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Forms
