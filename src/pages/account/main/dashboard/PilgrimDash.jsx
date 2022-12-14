import React from 'react'
import { useNavigate } from 'react-router-dom';
import { questions, teachings } from '../../../../hooks/data';
import { useAuth } from '../../../../hooks/useAuth';
import useData from '../../../../hooks/useData';
import './dashboard.css'





const PilgrimDash = () => {
    const {  user } = useAuth();
    const { users, pilgrims, agents, dashAgents, dashPilgrims } = useData();
    const cuUser = users && users.find(u => u.id === user.uid)
    const isPilgrim = users && users.find(u => u.id === user.uid)?.typeOf === 'pilgrim'
    const isAgent = users && users.find(u => u.id === user.uid)?.typeOf === 'agent'
    const isAdmin = users && users.find(u => u.id === user.uid)?.typeOf === 'admin'
    const isMission = users && users.find(u => u.id === user.uid)?.typeOf === 'mission'
    const ageId = cuUser?.agentId
    const agent = agents && agents.find(p => p.id === ageId)
    const pilgrim = pilgrims && pilgrims.find(p => p.userId === user.uid)
    const navigate = useNavigate()
    

    const agentPilgrims = pilgrims && pilgrims?.filter(u => u.agent === agent?.id)
    const activeAgentPilgrims = agentPilgrims && agentPilgrims.filter(a => a?.agentId === ageId)

  return (
    <div className="agent_body">    
    <div className="acc_body">        
        <div className="acc_body_top">       
        {isPilgrim && 
        <>            
            <div className="acc_body_card">
            <small>Ibada Selected</small>
            <h2>{pilgrim? pilgrim.ibada : 'No application'}</h2>
            </div>
            <div className="acc_body_card">
            <small>Agent</small>
            <h2>{pilgrim? pilgrim.agentName : 'No application'}</h2>
            </div>
            <div className="acc_body_card">
            <small>Application Status</small>
            <h2>{pilgrim? pilgrim.status : 'No application'}</h2>
            </div>            
        </>
        }
        {/* {isAgent && 
            <div className="acc_body_card">
            <small>Applicants</small>
            <h2>{activeAgentPilgrims?.length}</h2>
            </div> 
        
        } */}
        { isMission && <>
            <div className="acc_body_card">
            <small>Applicants</small>
            <h2>{pilgrims?.length}</h2>
            </div>
            <div className="acc_body_card">
            <small>Agents</small>
            <h2>{agents.length}</h2>
            </div>
        
        </>
            
        
        }
                    
        
        </div>
        <div className="acc_body_middle">
        <div className="acc_body_middle_left">
            <h3 className='acc_sub_title'>Recent Topics</h3>
            <div className="acc_inner_items">
            {teachings && teachings.slice(0,2).map((item, index)=> (
                <div className="Inner_post_card">            
                    <h1 className='post_index'>01</h1>
                    <div className="post_card_inner">
                    <h2>{item.title}</h2>
                    <p className='pil_card_pg'>{item.body}</p>
                    <button  className='btn_index' onClick={()=> navigate(`/blogs/${item.id}`)}>Soma Zaidi</button>
                    </div>
                
                </div>
            ))}
            
        
            </div>
            <div className="view_all">
            <button className='btn_all'>View All</button>
            </div>
        
        </div>
        <div className="acc_middle_right">
            <h3 className='acc_sub_title'>Questions and Answers</h3>
            <div className="section_qna">
            {questions && questions.slice(0,4).map((item,index)=> (
                <div className="que_wrap_inner">
                <span className='que_span'>H</span>
                <h4 className='blog_qna_body' key={index} onClick={() => navigate(`/blogs/${item.id}`)}>{item.title}</h4>
            </div>
            ))}               

            </div>
            <div className="view_all">
            <button className='btn_all'>View All</button>
            </div>
        </div>
        
        </div>
    
    </div>
  </div>
  )
}

export default PilgrimDash
