import axios from "axios";
import { 
  addbankdetailsUrl, 
  addnumberofkidsperhourUrl, 
  addrateUrl, 
  getallbookUrl, 
  getallchildUrl, 
  getallrecordUrl, 
  getbankdetailsUrl, 
  getnofkidsperhourUrl, 
  getrateAll, 
  sendemailInvoice
} from "../endpoints/apiurl";

const token = localStorage.getItem('token');

export const addratefunc = async (data,setShowLoader) => {
  try {
    setShowLoader(true);
    const response = await axios.post(addrateUrl, data, {
      headers: {
        "authorization": `Bearer ${token}`
      }
    });
    return {
      success: true,
      message: response.data.message,
    };
  } catch (error) {
    return {
      success: false,
      message: (error.response && error.response.data && error.response.data.message) || "Rate add failed",
    };
  } finally {
    setShowLoader(false);
  }
};

export const getRateall = async () => {
  try {
    const response = await axios.post(getrateAll, null, {
      headers: {
        "authorization": `Bearer ${token}`
      }
    });
    return {
      success: true,
      message: response.data.message,
      data: response.data.data
    };
  } catch (error) {
    return {
      success: false,
      message: (error.response && error.response.data && error.response.data.message) || "Get rate failed",
    };
  }
};

export const addnumberofkid = async ( data,setShowLoader) => {
  try {
    setShowLoader(true);
    const response = await axios.post(addnumberofkidsperhourUrl, data, {
      headers: {
        "authorization": `Bearer ${token}`
      }
    });
    return {
      success: true,
      message: response.data.message,
    };
  } catch (error) {
    return {
      success: false,
      message: (error.response && error.response.data && error.response.data.message) || "Login failed",
    };
  } finally {
    setShowLoader(false);
  }
};

export const getnumberofkid = async () => {
  try {
    const response = await axios.post(getnofkidsperhourUrl, null, {
      headers: {
        "authorization": `Bearer ${token}`
      }
    });
    return {
      success: true,
      message: response.data.message,
      data: response.data.data
    };
  } catch (error) {
    return {
      success: false,
      message: (error.response && error.response.data && error.response.data.message) || "Login failed",
    };
  }
};

export const addbankdetails = async (data,setShowLoader) => {
  try {
    setShowLoader(true);
    const response = await axios.post(addbankdetailsUrl, data, {
      headers: {
        "authorization": `Bearer ${token}`
      }
    });
    return {
      success: true,
      message: response.data.message,
    };
  } catch (error) {
    return {
      success: false,
      message: (error.response && error.response.data && error.response.data.message) || "Login failed",
    };
  } finally {
    setShowLoader(false);
  }
};

export const getbankdetailsfunc = async () => {
  try {
    const response = await axios.post(getbankdetailsUrl, null, {
      headers: {
        "authorization": `Bearer ${token}`
      }
    });
    return {
      success: true,
      message: response.data.message,
      data: response.data.data
    };
  } catch (error) {
    return {
      success: false,
      message: (error.response && error.response.data && error.response.data.message) || "Login failed",
    };
  }
};

export const getAllbooking = async () => {
  try {
    const response = await axios.post(getallbookUrl, null, {
      headers: {
        "authorization": `Bearer ${token}`
      }
    });
    return {
      success: true,
      message: response.data.message,
      data: response.data.data
    };
  } catch (error) {
    return {
      success: false,
      message: (error.response && error.response.data && error.response.data.message) || "Login failed",
    };
  }
};

export const getAllchildrec = async () => {
  try {
    const response = await axios.post(getallchildUrl, null, {
      headers: {
        "authorization": `Bearer ${token}`
      }
    });
    return {
      success: true,
      message: response.data.message,
      data: response.data.data
    };
  } catch (error) {
    return {
      success: false,
      message: (error.response && error.response.data && error.response.data.message) || "Login failed",
    };
  }
};

export const getAllUser = async () => {
  try {
    const response = await axios.post(getallrecordUrl, null, {
      headers: {
        "authorization": `Bearer ${token}`
      }
    });
    return {
      success: true,
      message: response.data.message,
      data: response.data.data
    };
  } catch (error) {
    return {
      success: false,
      message: (error.response && error.response.data && error.response.data.message) || "Login failed",
    };
  }
};

export const sendemailfunc = async (data,setShowLoader) => {
  try {
    setShowLoader(true)
    const response = await axios.post(sendemailInvoice, data, {
      headers: {
        "authorization": `Bearer ${token}`
      }
    });
    return {
      success: true,
      message: response.data.message,
    };
  } catch (error) {
    return {
      success: false,
      message: (error.response && error.response.data && error.response.data.message) || "Login failed",
    };
  }finally{
    setShowLoader(false)
  }
};