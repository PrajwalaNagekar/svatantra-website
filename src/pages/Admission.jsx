import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { admission } from '../api/index'
import FullScreenLoader from '../components/loaders/FullScreenLoader'
import PopupModal from '../components/popupModal/PopupModal'


const Admission = () => {
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({ visible: false, type: '', message: '' });


  const formik = useFormik({
    initialValues: {
      studentName: '',
      dob: '',
      fatherName: '',
      fatherPhone: '',
      motherName: '',
      motherPhone: '',
      address: '',
    },
    validationSchema: Yup.object({
      studentName: Yup.string().required('Required'),
      dob: Yup.date().required('Required'),
      fatherName: Yup.string().required('Required'),
      fatherPhone: Yup.string().matches(/^\d{10}$/, 'Enter a valid 10-digit number').required('Required'),
      motherName: Yup.string().required('Required'),
      motherPhone: Yup.string().matches(/^\d{10}$/, 'Enter a valid 10-digit number').required('Required'),
      address: Yup.string().required('Required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const res = await admission(values);
        setPopup({ visible: true, type: 'success', message: 'Form submitted successfully!' });
        resetForm();
      } catch (error) {
        console.error(error);
        setPopup({ visible: true, type: 'error', message: 'Failed to submit the form' });
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-10" style={{ fontFamily: 'Nunito, sans-serif' }}>
      {loading && <FullScreenLoader />}
      {popup.visible && (
        <PopupModal
          type={popup.type}
          message={popup.message}
          onClose={() => setPopup({ visible: false, type: '', message: '' })}
        />
      )}
      <h2 className="text-4xl font-bold text-center text-black mb-10 underline decoration-pink-300">Admission Form</h2>

      <form onSubmit={formik.handleSubmit} className="space-y-8">

        {/* Parent Details Card */}
        <div className="bg-white p-6 rounded-3xl shadow-xl">
          <h3 className="text-xl font-semibold mb-6 text-pink-600">Parent Details</h3>

          {/* Father's Name & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2 font-semibold">Father's Name</label>
              <input
                type="text"
                name="fatherName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fatherName}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none bg-gray-100"
              />
              {formik.touched.fatherName && formik.errors.fatherName && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.fatherName}</p>
              )}
            </div>
            <div>
              <label className="block mb-2 font-semibold">Father's Phone</label>
              <input
                type="tel"
                name="fatherPhone"
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d{0,10}$/.test(value)) {
                    formik.setFieldValue("fatherPhone", value);
                  }
                }}
                onBlur={formik.handleBlur}
                value={formik.values.fatherPhone}
                maxLength={10}
                inputMode="numeric"
                pattern="[0-9]*"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none bg-gray-100"
              />

              {formik.touched.fatherPhone && formik.errors.fatherPhone && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.fatherPhone}</p>
              )}
            </div>
          </div>

          {/* Mother's Name & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2 font-semibold">Mother's Name</label>
              <input
                type="text"
                name="motherName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.motherName}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none bg-gray-100"
              />
              {formik.touched.motherName && formik.errors.motherName && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.motherName}</p>
              )}
            </div>
            <div>
              <label className="block mb-2 font-semibold">Mother's Phone</label>
              <input
                type="tel"
                name="motherPhone"
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d{0,10}$/.test(value)) {
                    formik.setFieldValue("motherPhone", value);
                  }
                }}
                onBlur={formik.handleBlur}
                value={formik.values.motherPhone}
                maxLength={10}
                inputMode="numeric"
                pattern="[0-9]*"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none bg-gray-100"
              />

              {formik.touched.motherPhone && formik.errors.motherPhone && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.motherPhone}</p>
              )}
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block mb-2 font-semibold">Residential Address</label>
            <textarea
              name="address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none resize-none bg-gray-100"
            />
            {formik.touched.address && formik.errors.address && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.address}</p>
            )}
          </div>
        </div>

        {/* Student Details Card */}
        <div className="bg-white p-6 rounded-3xl shadow-xl">
          <h3 className="text-xl font-semibold mb-6 text-pink-600">Student Details</h3>

          {/* Student Name & DOB */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-semibold">Student Name</label>
              <input
                type="text"
                name="studentName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.studentName}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none bg-gray-100"
              />
              {formik.touched.studentName && formik.errors.studentName && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.studentName}</p>
              )}
            </div>
            <div>
              <label className="block mb-2 font-semibold">Date of Birth</label>
              <input
                type="date"
                name="dob"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dob}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none bg-gray-100"
              />
              {formik.touched.dob && formik.errors.dob && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.dob}</p>
              )}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-full transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Admission;
