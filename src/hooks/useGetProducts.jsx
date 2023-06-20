import { collection, getDocs, getFirestore } from "firebase/firestore"
import appFirebase from "../firebase/config"
import { useEffect, useState } from "react"

const db = getFirestore(appFirebase)

export function useGetProducts() {
    const [ list, setList ] = useState([])
        
    useEffect(()=> {
        const getList = async()=>{
            try {
                const newList = await getDocs(collection(db, 'bebidas'))
                const docs = []
                newList.forEach((doc)=>{
                    docs.push({...doc.data(), id:doc.id})
                })
                setList(docs)
            } catch (error) {
                console.log(error)
            }
        }
        getList()
    },[])
    
    return{
        list
    }
}
