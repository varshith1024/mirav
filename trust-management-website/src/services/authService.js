import axios from "axios";

const API_BASE = "https://mirav-backend.onrender.com/api/auth";

// ✅ Register admin or hospital
export const registerAdminOrHospital = async (formData) => {
  try {
    const cleanData = {
      ...formData,
      email: formData.email.toLowerCase()
    };

    const res = await axios.post(
      `${API_BASE}/admin-register`,
      cleanData
    );

    return res.data;
  } catch (err) {
    if (err.response?.data) return err.response.data;
    return { error: "Server not reachable" };
  }
};

// ✅ ✅ LOGIN FUNCTION (you forgot this!)
export const loginUser = async (email, password) => {
  try {
    const res = await axios.post(
      `${API_BASE}/login`,
      { email, password }
    );
    return res.data;
  } catch (err) {
    if (err.response?.data) return err.response.data;
    return { error: "Server not reachable" };
  }
};
