import axios from "API/axios";

/**
 * Function to delete a message
 * @param {object} auth Context object coming from useAuth custom Hook
 * @param {Function} fetchFunction Coming from useFetchFunction custom hook
 * @param {object} dataObject The Data to be Sent in the POST request
 */
const deleteMessage = (fetchFunction, dataObject, auth) => {
  if (!auth || !auth.isLoggedIn() || !auth.getToken()) return;
    fetchFunction({
      axiosInstance: axios,
      method: "POST",
      url: "/api/message/del",
      requestConfig: {
        data: dataObject,
        headers: {
          "Content-Language": "en-US",
          Authorization: `Bearer ${auth.getToken()}`,
        },
      },
    });
};

export default deleteMessage;