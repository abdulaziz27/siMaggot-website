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

export const getAllProducts = async (isFavorite) => {
  const productEndpoint = "/product";
  try {
    const response = await axios.get(apiUrl + productEndpoint);
    if (response.data.status === "Success") {
      const allProductsFavorite = response.data.data;
      const allProducts = response.data;

      // If isFavorite is true, filter only favorite products
      if (isFavorite) {
        const favoriteProducts = allProductsFavorite.filter((product) => product.isFavorite === "true");
        return favoriteProducts;
      }

      return allProducts;
    } else {
      throw new Error("Error fetching products");
    }
  } catch (error) {
    throw new Error(error.message || "Error fetching products");
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

export const addProduct = async (formData) => {
  const productEndpoint = "/seller/products";

  try {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      throw new Error("Access token not found");
    }

    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "multipart/form-data",
    };

    const response = await axios.post(apiUrl + productEndpoint, formData, {
      headers,
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Server error:", error.response.data);
      throw new Error("Server error. Please try again later.");
    } else if (error.request) {
      console.error("No response from the server:", error.request);
      throw new Error("No response from the server. Please try again later.");
    } else {
      console.error("Request setup error:", error.message);
      throw new Error("Request setup error. Please try again later.");
    }
  }
};

export const getAuthenticateSeller = async () => {
  const userEndpoint = "/seller";
  
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

export const getSellerProducts = async (sellerId) => {
  const productEndpoint = `/seller/${sellerId}/products`;

  try {
    const response = await axios.get(apiUrl + productEndpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addProductToCart = async (productId, quantity) => {
  const cartEndpoint = "/cart/product";

  try {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      throw new Error("Access token not found");
    }

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    const data = {
      productId: productId,
      quantity: quantity,
    };

    const response = await axios.post(apiUrl + cartEndpoint, data, {
      headers: headers,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const editCartProduct = async (productId, quantity) => {
  const endpoint = `/cart/product/${productId}`;
  
  try {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      throw new Error("Access token not found");
    }

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    const data = {
      quantity,
    };

    const response = await axios.put(apiUrl + endpoint, data, {
      headers,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCartItem = async (productId) => {
  const endpoint = `/cart/product/${productId}`;

  try {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      throw new Error("Access token not found");
    }

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    const response = await axios.delete(apiUrl + endpoint, {
      headers,
    });

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error('Error deleting cart item:', error);
    throw error;
  }
};


export const getTransactionDetails = async (transactionId, accessToken) => {
  const endpoint = `/transaction/${transactionId}`;

  try {

    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      throw new Error("Access token not found");
    }

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    const response = await axios.get(apiUrl + endpoint, {
      headers: headers,
    });

    if (response.data.status === 'success') {
      return response.data.data.transaction;
    } else {
      throw new Error('Error fetching transaction details');
    }
  } catch (error) {
    throw new Error(error.message || 'Error fetching transaction details');
  }
};

export const getTransactions = async () => {
  const transactionEndpoint = "/transaction";

  try {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      throw new Error("Access token not found");
    }

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    const response = await axios.get(apiUrl + transactionEndpoint, {
      headers: headers,
    });

    if (response.data.status === 'success') {
      return response.data.data.transactions;
    } else {
      throw new Error('Error fetching transactions');
    }
  } catch (error) {
    throw new Error(error.message || 'Error fetching transactions');
  }
};

export const postTransaction = async (status, message, data) => {
  const transactionEndpoint = "/transaction";
  const transactionData = {
    status: status,
    message: message,
    data: data,
  };

  try {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      throw new Error("Access token not found");
    }

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    const response = await axios.post(apiUrl + transactionEndpoint, transactionData, {
      headers
    });

    return response.data;
  } catch (error) {
    throw error;
 }
};

export const updateProduct = async (productId, updatedData) => {
  const sellerEndpoint = `/seller/products/${productId}/`;

  try {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      throw new Error("Access token not found");
    }

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    const response = await axios.put(apiUrl + sellerEndpoint, updatedData, {
      headers: headers,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (productId) => {
  const sellerEndpoint = `/seller/products/${productId}/`;

  try {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      throw new Error("Access token not found");
    }

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    const response = await axios.delete(apiUrl + sellerEndpoint, {
      headers: headers,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
