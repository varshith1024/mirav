import React, { useState } from "react";
import { useForm } from "react-hook-form";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

const Volunteer = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [volunteerId, setVolunteerId] = useState(null);

  // ===========================
  // SUBMIT VOLUNTEER FORM
  // ===========================
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const res = await fetch(
        `${API_BASE_URL}/api/volunteer/submit-volunteer`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Server error");
      }

      setVolunteerId(result.volunteer_id);
      setSubmitMessage(
        "Thank you for volunteering! Your Virtual ID has been generated."
      );

    } catch (err) {
      console.error(err);
      setSubmitMessage("Error submitting volunteer form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ===========================
  // DOWNLOAD VIRTUAL ID PDF
  // ===========================
  const downloadIdCard = () => {
    if (!volunteerId) return;

    window.open(
      `${API_BASE_URL}/api/volunteer/id-card/${volunteerId}`,
      "_blank"
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">

        <h1 className="text-3xl font-bold text-center text-stone-600 mb-6">
          Volunteer Registration
        </h1>

        {/* MESSAGE */}
        {submitMessage && (
          <div
            className={`p-4 mb-6 rounded ${
              submitMessage.includes("Error")
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {submitMessage}
          </div>
        )}

        {/* SHOW VIRTUAL ID + DOWNLOAD */}
        {volunteerId && (
          <div className="mb-6 p-6 border rounded bg-gray-50 text-center">
            <p className="text-gray-700 font-medium">
              Your Volunteer ID
            </p>
            <p className="text-xl font-bold text-stone-600 mt-1">
              {volunteerId}
            </p>

            <button
              onClick={downloadIdCard}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
            >
              Download Virtual ID (PDF)
            </button>
          </div>
        )}

        {/* FORM (hide after success) */}
        {!volunteerId && (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

            {/* FULL NAME */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name *
              </label>
              <input
                {...register("fullName", { required: "Full name is required" })}
                className="w-full border px-3 py-2 rounded"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Email *
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Phone *
              </label>
              <input
                {...register("phone", {
                  required: "Phone is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter valid 10-digit number",
                  },
                })}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            {/* OCCUPATION */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Occupation
              </label>
              <input
                {...register("occupation")}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            {/* INTERESTS */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Areas of Interest *
              </label>
              {[
                "Field Work",
                "Teaching",
                "Medical Camp",
                "Event Management",
                "Admin Support",
              ].map((i) => (
                <label key={i} className="block text-sm">
                  <input
                    type="checkbox"
                    value={i}
                    {...register("interests", {
                      required: "Select at least one interest",
                    })}
                    className="mr-2"
                  />
                  {i}
                </label>
              ))}
            </div>

            {/* AVAILABILITY */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Availability *
              </label>
              <select
                {...register("availability", {
                  required: "Availability required",
                })}
                className="w-full border px-3 py-2 rounded"
              >
                <option value="">Select</option>
                <option value="Weekends">Weekends</option>
                <option value="Weekdays">Weekdays</option>
                <option value="Flexible">Flexible</option>
              </select>
            </div>

            {/* SKILLS */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Skills
              </label>
              <textarea
                {...register("skills")}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-stone-600 hover:bg-stone-700 text-white py-3 rounded-lg font-semibold"
            >
              {isSubmitting ? "Submitting..." : "Submit Volunteer Form"}
            </button>
          </form>
        )}

      </div>
    </div>
  );
};

export default Volunteer;
