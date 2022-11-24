import React, { useEffect, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'

const useLanguages = () => {
    const [languages, setLanguages]= useState(["English", "German", "Italian", "Polish"])
    const [language, setLanguage]= useLocalStorage('language', '')

    useEffect(() => {
        if (language === ""){
            console.log("Language is empty")
        }
    },[])
  return language
}

export default useLanguages
