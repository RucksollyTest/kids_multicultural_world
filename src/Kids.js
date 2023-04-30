import React from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Navbar from './Navbar'
import Footer from './Footer'

class Kids extends React.Component {
    
    render() {
        const kido = "hello"
        return (
            <div className='myMensory'>
                <Navbar />
                <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 2, 750: 4, 900: 6}}
                >
                    <Masonry>
                        <img src="/Images/c20a4a_e89814ef8a0e4f37b814a5f37fb4d8cf_mv2.webp" alt="" />
                        <img src="/Images/iimages.jpeg" alt="" />
                        <img src="/Images/imbg.jpeg" alt="" />
                        <img src="/Images/IMG_8509.jpg" alt="" />
                        <img src="/Images/loginImg.jpeg" alt="" />
                        <img src="/Images/WhatsApp Image 2023-02-26 at 00.44.10 (10).jpeg" alt="" />
                        <img src="/Images/WhatsApp Image 2023-02-26 at 00.44.07 (1).jpeg" alt="" />
                        <img src="/Images/WhatsApp Image 2023-02-26 at 00.44.07 (4).jpeg" alt="" />
                        <img src="/Images/loginImg.jpeg" alt="" />
                        <img src="/Images/WhatsApp Image 2023-02-26 at 00.44.10 (10).jpeg" alt="" />
                        <img src="/Images/WhatsApp Image 2023-02-26 at 00.44.07 (1).jpeg" alt="" />
                        <img src="/Images/WhatsApp Image 2023-02-26 at 00.44.07 (4).jpeg" alt="" />
                        <img src="/Images/IMG_8509.jpg" alt="" />
                        <img src="/Images/loginImg.jpeg" alt="" />
                        <img src="/Images/WhatsApp Image 2023-02-26 at 00.44.10 (10).jpeg" alt="" />
                        <img src="/Images/imbg.jpeg" alt="" />
                        <img src="/Images/IMG_8509.jpg" alt="" />
                        <img src="/Images/loginImg.jpeg" alt="" />
                        <img src="/Images/WhatsApp Image 2023-02-26 at 00.44.10 (10).jpeg" alt="" />
                        <img src="/Images/WhatsApp Image 2023-02-26 at 00.44.07 (1).jpeg" alt="" />
                        <img src="/Images/WhatsApp Image 2023-02-26 at 00.44.07 (4).jpeg" alt="" />
                        <img src="/Images/loginImg.jpeg" alt="" />
                        <img src="/Images/WhatsApp Image 2023-02-26 at 00.44.10 (10).jpeg" alt="" />
                        <img src="/Images/WhatsApp Image 2023-02-26 at 00.44.07 (1).jpeg" alt="" />
                    </Masonry>
                </ResponsiveMasonry>
                <Footer />
            </div>
        )
    }
}

export default Kids