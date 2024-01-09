import React, { createContext, ReactNode, useContext, useState } from 'react';

interface HeaderProps {
  children: ReactNode;
}

interface HeaderColorContextProps {
  headerColor: string;
  setHeaderColor: (color: string) => void;
}

const HeaderColorContext = createContext<HeaderColorContextProps>({
  headerColor: "",
  setHeaderColor: () => { },
});

export const useHeaderColor = () => useContext(HeaderColorContext);

export const HeaderColorProvider: React.FC<HeaderProps> = ({ children }: HeaderProps) => {
  const [headerColor, setHeaderColor] = useState<string>('linear-background');

  return (
    <HeaderColorContext.Provider value={{ headerColor, setHeaderColor }}>
      {children}
    </HeaderColorContext.Provider>
  );
};