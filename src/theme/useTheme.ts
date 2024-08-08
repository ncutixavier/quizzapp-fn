import { useContext } from 'react';
import { ThemeContext, ThemeContextType } from './ThemeContext';

const useTheme = () => useContext<ThemeContextType>(ThemeContext);

export default useTheme;
