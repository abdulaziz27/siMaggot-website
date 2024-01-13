import axios from "axios";

const apiUrl = "https://simaggot-backend-qt2kyfpzvq-et.a.run.app";

export const loginUser = async (email, password) => {
  const loginEndpoint = "/auth/login";
  const data = {
    email: email,
    password: password,
  };

  try {
    const response = await axios.post(apiUrl + loginEndpoint, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (username, email, password) => {
    const registerEndpoint = "/user";
    const data = {
      username: username,
      email: email,
      password: password,
    };
  
    try {
      const response = await axios.post(apiUrl + registerEndpoint, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

export const logoutUser = async () => {
  const logoutEndpoint = "/auth/logout";

  try {
    const response = await axios.post(apiUrl + logoutEndpoint);

    if (response.status === 200) {
      return { status: "Success", message: "Logout berhasil" };
    } else {
      throw new Error("Logout gagal");
    }
  } catch (error) {
    throw error;
  }
};

export const resetPassword = async (email) => {
	const resetPasswordEndpoint = "/auth/reset-password";

	try {
		const response = await axios.post(apiUrl + resetPasswordEndpoint, { email });
		return response.data;
	} catch (error) {
		throw error;
	}
};