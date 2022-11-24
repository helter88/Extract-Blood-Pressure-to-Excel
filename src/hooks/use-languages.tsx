import React, { useEffect, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'

const useLanguages = () => {
    const [languages, setLanguages]= useState(["English", "German", "Italian", "Polish"])
    const [language, setLanguage]= useLocalStorage('language', '')

    const selectDefaultLanguage = () => {
        switch (window.navigator.language){
            case "pl":
                return "Polish"
            case "de":
                return "German"
            case "it":
                return "Italian"
            default:
                return "English"
        }
    }

    useEffect(() => {
        if (language === ""){
            const selectedDefaultLang = selectDefaultLanguage();
            setLanguage(selectDefaultLanguage);
        }else{
            setLanguages((prev)=>
                prev?.filter((item:string)=> item!==language)
            )
        }
    },[language])
  return {language, languages, setLanguage}
}

export default useLanguages
