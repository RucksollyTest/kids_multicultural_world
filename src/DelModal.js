import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { delAction, kidsDetailsAction } from './Action'
import Loader2 from './Loader2'

const DelModal = (props) => {
    const dispatch= useDispatch()
    const delImg = useSelector(state => state.delImg)
    const {loading,error,success} = delImg
    
    const userLogin = useSelector(state=> state.userLogin)
    const {userInfo} = userLogin

    const [modalShow, setModalShow] = useState(false);
    const submitDelImg = ()=>{
        dispatch(delAction({
            id : props.ids,
            link : props.linkk
        }))
    }
    // useEffect(()=>{
    //     if(userInfo){
    //         dispatch(kidsDetailsAction(userInfo.id))
    //     }
    // },[])
    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div>
                <div className='del_img_mod'>
                    <div className='bgWhitee'>
                        <p className="center font_12 bold7 pt_1">
                            Delete {(props && props.Kind) ? props.Kind : "image"}?
                        </p>
                        {loading ? 
                            <button>
                                <Loader2 />
                            </button> 
                        : success ? 
                            <div className='center text-success bold6 font_12'>
                                Success!
                            </div>
                        :
                            <button onClick={submitDelImg}>
                                Delete
                            </button>
                        }
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default DelModal