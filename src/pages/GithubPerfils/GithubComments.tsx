import  { useState,useEffect } from 'react';
import {initializeApp} from 'firebase/app'
import {collection, getDocs, getFirestore, addDoc} from 'firebase/firestore'

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDA8p3e_N3Im50MDtOV56hL4OhWKN356vw",
  authDomain: "myport-4e9e2.firebaseapp.com",
  projectId: "myport-4e9e2",
});

function GithubComments() {

  const [name, setName] = useState<string>();
  const [msg,setMsg] = useState<string>();
  const [usr,setUsr] = useState([]);
  const db = getFirestore(firebaseApp);
  const useCollectionRef = collection(db,'usr');
  console.log(usr[1])
  async function handleClickDtb() {
    try {
      await addDoc(useCollectionRef, {
        name,
        msg
      });
      setUsr([...usr, { name, msg }]); 
      setName(''); 
      setMsg('');
    } catch (error) {
      console.error('Erro ao adicionar dados ao Firestore:', error);
    }
  }
  useEffect(()=>{
    const getUsr = async () =>{
      const data = await getDocs(useCollectionRef)
      setUsr(data.docs.map((doc)=> ({...doc.data(),id: doc.id})));
    };  
    getUsr();

  },[])
  const [userData, setUserData] = useState(null);

  useEffect(() => {
   
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/juniorgraca`);
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.error('Falha ao obter os dados do usuário');
        }
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }    
    };

    fetchUserData();
  }, []);
  
  const GitAdd = () =>{
  
   return(
   <div>
      <input type="text" placeholder='name' value={name} onChange={ (e) => setName(e.target.value)}/>
      <input type="text" placeholder='msg'  value={msg} onChange={(e) =>setMsg (e.target.value)} />
      <button onClick={handleClickDtb}>Criar</button>
      <ul>
      
     {usr.map((usr,)=>{
     
      return(
         <div key ={usr.id} >
         <li> foi {usr.name}</li>
        
         {userData && (
        <p>Valor da chave: {userData.name} {userData.id}</p>
      )} 
        </div>
       )  
     })}

      
     </ul>
     </div>
 )  
 }


  return (
    <>
{GitAdd()}

      
    </> 
  );
}

export default GithubComments;
