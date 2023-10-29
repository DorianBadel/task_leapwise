import React, { createContext, useContext, ReactNode } from "react";
import Alert from "../components/Alert";

type Alert = {
  icon: ReactNode;
  message: string;
};

interface AlertContextType {
  showAlert: (message: string, icon: ReactNode) => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
};

interface AlertProviderProps {
  children: ReactNode;
}

export const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
  const [alert, setAlert] = React.useState<Alert | null>(null);

  const showAlert = (message: string, icon: ReactNode) => {
    setAlert({ message, icon });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alert && (
        <Alert
          message={alert.message}
          icon={alert.icon}
          onClose={() => setAlert(null)}
        />
      )}
    </AlertContext.Provider>
  );
};
