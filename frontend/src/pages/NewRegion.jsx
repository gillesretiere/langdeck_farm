import {useState} from 'react'
import {useNavigate} from "react-router-dom";

import Layout from "../components/Layout"
import FormInput from '../components/FormInput';

let BASE_URL = "http://141.94.204.108:8000/languages"
const NewLanguage = () => {
  const emptyLanguage = {
    "language_uid":"",
    "language_iso2":"",
    "language_iso2_google":"",
    "language_wals_code":"",
    "language_name_fr":"",
    "language_name_en":"",
    "language_name_native":"",
  }
  const inputs = [
    {
        id:"language_uid",
        name:"language_uid",
        type:"text",
        placeholder:"UID",
        label:"UID"
    },
    {
      id:"language_iso2",
      name:"language_iso2",
      type:"text",
      placeholder:"Code ISO2",
      label:"Code ISO2"
    },    
    {
      id:"language_iso2_google",
      name:"language_iso2_google",
      type:"text",
      placeholder:"Code ISO2 Google",
      label:"Code ISO2 Google"
    },        
    {
      id:"language_wals_code",
      name:"language_wals_code",
      type:"text",
      placeholder:"WALS Code",
      label:"WALS Code"
    },
    {
      id:"language_name_fr",
      name:"language_name_fr",
      type:"text",
      placeholder:"Langue (fr)",
      label:"Langue (fr)"
    },    
    {
      id:"language_name_en",
      name:"language_name_en",
      type:"text",
      placeholder:"Langue (en)",
      label:"Langue (en)"
    },           
    {
      id:"language_name_native",
      name:"language_name_native",
      type:"text",
      placeholder:"Langue (native)",
      label:"Langue (native)"
    },       
  ]  

  const [newLanguage, setNewLanguage] = useState(emptyLanguage)
  const [error, setError] = useState([])

  const navigate = useNavigate();

  const handleSubmit = (e)=>{
      e.preventDefault()
      addLanguage(newLanguage)    
  }

  const onChange = (e) => { 
    setNewLanguage({...newLanguage, [e.target.name]: e.target.value})
  }

  const handleReset = (e) => {
    setNewLanguage(emptyLanguage)  
  }

  const addLanguage = async (newLanguage)=>{
        
    const response = await fetch(BASE_URL,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(newLanguage) 
        })

    const data = await response.json()
    

    if(!response.ok) {
        let errArray = data.detail.map(el=>{
            return `${el.loc[1]} -${el.msg}`
        })        
        setError(errArray)
    } else {
        
        setError([])
        navigate('/languages')
    }        
  }

  return (
    <Layout>
    <div>
        <h1 className="text-center text-lg my-2 font-mono font-semibold">Insert a New Language</h1>
    </div>
    <div className="text-center my-2">New language status: {JSON.stringify(newLanguage)}</div>
        {error && <ul className="flex flex-col mx-auto text-center">
        { error && error.map(
                (el, index)=>(                            
                        <li key={index} className="my-2 p-1 border-2 border-red-700 max-w-md mx-auto">{el}</li>
                    )
                )
        }       
        </ul>}           
    <div className="flex flex-row align-middle justify-center">
        <form onSubmit={handleSubmit}>
            {inputs.map((input) => (
                <FormInput 
                    key={input.id}
                    name={input.name}
                    {...input} 
                    value={newLanguage[input.name]}
                    onChange={onChange}
                    required />
            ))}
            
            <button type="submit" onClick={handleSubmit} className="bg-yellow-500 m-2 w-full text-white rounded-md  ">Insert</button>
            <button type="reset" onClick={handleReset} className="bg-black m-2 w-full text-white rounded-md ">Reset</button>
        </form>
    </div>
    </Layout>
  )
}
export default NewLanguage
