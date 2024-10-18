import { createContext, useContext } from 'react';

import { FormContextType } from './Form.types';

const FormContext = createContext({} as FormContextType);
const useFormContext = () => useContext(FormContext);

export { FormContext, useFormContext };
export { FormProvider } from './Form.provider';
