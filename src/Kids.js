import React, { useEffect, useState } from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Navbar from './Navbar'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import { kidsViewAction } from './Action'
import ProfileDisplayModal from './ProfileDisplayModal'

const Kids = () => {
    const dispatch= useDispatch()
    const kidsView = useSelector(state => state.kidsView)
    const {loading,error,kids} = kidsView
    const [modalShow, setModalShow] = useState(false);
    const [availId, setAvailId] = useState(-1);

    useEffect(()=>{
        dispatch(kidsViewAction())
    },[])
    return (
        <div className='myMensory'>
            <Navbar />
            {loading && <Loader />}
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 3, 900: 6}}
            >
                <Masonry>
                    {kids && kids.map(x=>(
                        <div className='kidsProfile pointer' 
                            key={x.id} 
                            onClick={() => {
                                setAvailId(x.id)
                                setModalShow(true)
                            }}
                        >
                            <img className='shadow-sm' src={`${process.env.REACT_APP_BASE_URL}${x.profile_photo}`} alt={x.name} />
                        </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
            <Footer />
            <ProfileDisplayModal
                ids= {availId}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}

export default Kids
        
