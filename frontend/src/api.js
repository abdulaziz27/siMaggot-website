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
    const { accessToken, refreshToken } = response.data;

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

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
    const accessToken = localStorage.getItem("accessToken");
    if(!accessToken){
      throw new Error ("access token not found");
    }

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    const response = await axios.post(apiUrl + logoutEndpoint, null, {
      headers: headers,
    });

    if (response.status === 200) {
      localStorage.removeItem("accessToken")
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

export const getUserProfile = async () => {
  const userEndpoint = "/user";
  
  try {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      throw new Error("Access token not found");
    }

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    const response = await axios.get(apiUrl + userEndpoint, {
      headers: headers,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUserProfile = async (updatedData) => {
  const userEndpoint = "/user";

  try {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      throw new Error("Access token not found");
    }

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    const response = await axios.put(apiUrl + userEndpoint, updatedData, {
      headers: headers,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllProducts = async () => {
  const productEndpoint = "/product";

  try {
    const response = await axios.get(apiUrl + productEndpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProductById = async (productId) => {
  const productEndpoint = `/product/${productId}`;

  try {
    const response = await axios.get(apiUrl + productEndpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCart = async () => {
  const cartEndpoint = "/cart";

  try {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      throw new Error("Access token not found");
    }

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    const response = await axios.get(apiUrl + cartEndpoint, {
      headers: headers,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
