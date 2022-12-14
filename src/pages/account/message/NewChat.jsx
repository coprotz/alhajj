import React from 'react'
import { HiOutlineChatAlt } from "react-icons/hi";
import { useState } from 'react'
import { db, useAuth } from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import useData from '../../../hooks/useData';
import { addDoc, collection } from 'firebase/firestore';

const NewChat = ({s, name}) => {
    const { user } = useAuth();
    const { chats } = useData();
    const [open, setOpen] = useState(null)
    const [sending, setSending] = useState(null)
    const navigate = useNavigate();

    const userChats = chats && chats.filter(c =>c.members.includes(`${user.uid}`))
    console.log('userchats', userChats)
    const chatsRef = collection(db, 'chats')

    console.log('s', s)
    
    const handleNew = async(id, e) => {
        e.preventDefault();
        
        setSending(true)
    
        try {
          const oldChat = userChats && userChats.find(c => c.members.includes(`${id}`))

          if(oldChat){
            // console.log('old', oldChat)
           navigate(`/account/messages/${oldChat.id}`)       
          }
          else{
            const data = {
              members : [`${ user.uid}`, `${id}`]
            }
        
            const chat = await addDoc(chatsRef, data)
            if(chat){
              navigate(`/account/messages/${chat.id}`) 
            }
            // setCurrentRoom(chat)
            setSending(null)
            
          }     
        //   setSelected(null)
        //   setNewMsg(null)
        //   setNewChat(null)
          
        } catch (error) {
          console.log(error.message)
        }
      }
    

  return (
    
    <div className='new_chat_app'>
        <HiOutlineChatAlt className='appli_new_chat' onClick={() =>setOpen(s)}/>
        {open &&
        <div className="pop_new_chat">
            <span>Send message to <strong>{name}</strong>?</span>
            <div className="group_btns">
                <button onClick={(e) => handleNew(s, e)}>{sending? 'Sending...': 'OK'}</button>
                <button onClick={() => setOpen(null)}>CANCEL</button>
            </div>
        </div>
        
        }
    </div>
  )
}

export default NewChat
