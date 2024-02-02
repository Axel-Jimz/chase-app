import React, { createContext, useContext, useState } from "react";

// Creamos el contexto
const UserContext = createContext();

// Definimos la función para generar un ID único
const generateUniqueId = () => {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substr(2, 5);
  return timestamp + randomStr;
};

// Creamos un componente proveedor que almacenará la información del cliente
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    id: generateUniqueId(),
  });

  const updateUser = (data) => {
    setUserData({ id: generateUniqueId(), data });
  };

  return (
    <UserContext.Provider value={{ userData, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Creamos un hook personalizado para acceder al contexto
export const useUser = () => {
  return useContext(UserContext);
};
