import  { useState,useEffect } from 'react';
import axios from 'axios';
import {initializeApp} from 'firebase/app'
import {collection, getDocs, getFirestore, addDoc} from 'firebase/firestore'

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDA8p3e_N3Im50MDtOV56hL4OhWKN356vw",
  authDomain: "myport-4e9e2.firebaseapp.com",
  projectId: "myport-4e9e2",
  // storageBucket: "myport-4e9e2.appspot.com",
  // messagingSenderId: "256196648389",
  // appId: "1:256196648389:web:817908d632a44ecaa17fac",
  // measurementId: "G-QRM2KM223Z"
});

function GithubComments() {

  const [name, setName] = useState<string>();
  const [msg,setMsg] = useState<string>();
  const [usr,setUsr] = useState([]);

  const db = getFirestore(firebaseApp);
  const useCollectionRef = collection(db,'usr');



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

  const [search, setSearch] = useState();
  
  const [userData, setUserData] = useState({
  name: 'Aguardando',
  avatarUrl: 'Aguardando',
  bio: 'Aguardando'
  });



   const handleSearch = async () => {
    try {
     const response = await axios.get(`https://api.github.com/users/${search}`);
   const { name, bio, avatar_url: avatarUrl } = response.data;
   setUserData({ name, bio, avatarUrl });
 } catch (error) {
    console.error('Erro ao buscar usuário:', error);
  }
 };

 const [indexItem, setIndexItem] =  useState<string | null>(null);

 console.log(indexItem)
  return (
    <>
    <div>
      <input type="text" placeholder='name' value={name} onChange={ (e) => setName(e.target.value)}/>
      <input type="text" placeholder='msg'  value={msg} onChange={(e) =>setMsg (e.target.value)} />
      <button onClick={handleClickDtb}>Criar</button>
      <ul>
    {usr.map((usr)=>{
      return(
        <div key ={usr.id}>
          <li>{usr.name}</li>
          <li>{usr.msg}</li>
        </div>
      )
    })}

      
      </ul>
    </div>
  
  
      
    </> 
  );
}

export default GithubComments;
