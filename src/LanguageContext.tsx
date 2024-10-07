import { createContext, FunctionComponent, ReactNode, useContext, useEffect, useState } from "react";

type Langs = "fr"|"en"|null;

interface LanguageType {
    currentLanguage:Langs;
    selectLanguage:(lang:Langs)=>void,
    openPopupLanguage:boolean;
    setOpenPopupLanguage:React.Dispatch<React.SetStateAction<boolean>>,
}

const LanguageContext = createContext<LanguageType|null>(null);

export const LanguageProvider:FunctionComponent<{children:ReactNode}> = ({children}) => {

    const [currentLanguage,setCurrentLanguage] = useState<Langs|null>(()=>{
        const storedData = localStorage.getItem('lang');
        return storedData ? JSON.parse(storedData) : "en";
    });
    const [openPopupLanguage,setOpenPopupLanguage] = useState(false);

    const selectLanguage = (lang:Langs) => {
        setCurrentLanguage(lang);
        localStorage.setItem('lang',JSON.stringify(lang))
        setOpenPopupLanguage(false);
    }
    useEffect(()=>{
        currentLanguage === null && setOpenPopupLanguage(true);
    },[currentLanguage])

    return (
        <LanguageContext.Provider value = {{currentLanguage,selectLanguage,openPopupLanguage,setOpenPopupLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("useUser must be used within a UserProvider");
    return context;
};