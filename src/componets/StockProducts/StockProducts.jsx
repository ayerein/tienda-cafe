import { addDoc, getDocs, collection, getFirestore, doc, deleteDoc, updateDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import appFirebase from "../../firebase/config"

import AddProduct from "../AddProduct/AddProduct"

const db = getFirestore(appFirebase)

const StockProducts = () => {

    const initialValue = {
        add:"",
        cat: "",
        subcat:"",
        name:"",
        description:"",
        img:""
    }

    const [ val, setValue ] = useState(initialValue)

    const catchValues = (e)=>{
        const {name, value} = e.target
        setValue({...val, [name]:value})
    }

    const saveProduct = async(e)=>{
        e.preventDefault()
        try {
            await addDoc(collection(db,val.add),{
                ...val
            })
        } catch (error) {
            console.log(error)
        }
        setValue({...initialValue})
        alert('Se agrego correctamente al stock.')
    }

    return(
        <AddProduct 
        catchValues={catchValues}
        val={val}
        saveProduct={saveProduct}
        />
    )
}

export default StockProducts