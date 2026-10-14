import { createContext, useContext, useState, type ReactNode } from 'react';
type InquiryContextValue = { selected: string[]; toggle: (id: string) => void; clear: () => void };
const InquiryContext = createContext<InquiryContextValue>({ selected: [], toggle: () => {}, clear: () => {} });
export function InquiryProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<string[]>([]);
  function toggle(id: string) { setSelected(current => current.includes(id) ? current.filter(item => item !== id) : current.length < 50 ? [...current, id] : current); }
  return <InquiryContext.Provider value={{ selected, toggle, clear: () => setSelected([]) }}>{children}</InquiryContext.Provider>;
}
export const useInquiry = () => useContext(InquiryContext);