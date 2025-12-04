import { createContext, useContext, useState } from "react";

const PostureContext = createContext(null);

export function PostureProvider({ children }) {
  const [userProfile, setUserProfile] = useState(null);
  const [selectedMovement, setSelectedMovement] = useState(null);
  const [movementAdvice, setMovementAdvice] = useState(null);
  const [productList, setProductList] = useState([]);

  const value = {
    userProfile,
    setUserProfile,
    selectedMovement,
    setSelectedMovement,
    movementAdvice,
    setMovementAdvice,
    productList,
    setProductList,
  };

  return (
    <PostureContext.Provider value={value}>
      {children}
    </PostureContext.Provider>
  );
}

export function usePosture() {
  const ctx = useContext(PostureContext);
  if (!ctx) {
    throw new Error("usePosture must be used within a PostureProvider");
  }
  return ctx;
}
