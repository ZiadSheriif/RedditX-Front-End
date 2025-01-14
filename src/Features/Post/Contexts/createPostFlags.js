import { createContext, useContext, useState } from "react";

export const createPostFlagsContext = createContext({});

/**
 * Context for flags of the post to be created
 * @param {React.Component} children Who can access this context
 * @returns {React.Component}
 */
const CreatePostFlagsProvider = ({ children }) => {
  // Context that is used to share flags of the post to be created
  const [createPostFlags, setCreatePostFlags] = useState({
    nsfw: false,
    spoiler: false,
  });

  return (
    <createPostFlagsContext.Provider
      value={{
        createPostFlags,
        setCreatePostFlags,
      }}
    >
      {children}
    </createPostFlagsContext.Provider>
  );
};
/**
 * Custom hook used to provide post flags context
 *
 * @returns {React.Context}
 */
const useCreatePostFlags = () => {
  return useContext(createPostFlagsContext);
};

export { CreatePostFlagsProvider, useCreatePostFlags };
