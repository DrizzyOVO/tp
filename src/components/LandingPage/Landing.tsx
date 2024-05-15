import React from 'react'
import Appbar from '../Appbar'
import Carousel from './Carousel'
import Welcome from './Welcome'
import Ourservices from './Ourservices'
import Selfcourses from './Selfcourses'
import Custcourses from './Custcourses'
import Carousel2 from './Carousel2'
import { isNavOpen } from '../../store/selectors/nav'
import { navState } from '../../store/atoms/nav'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from './Footer'
import TreasuryConsultancy from './TreauryConsultancy'

const Landing = () => {

    const nav = useRecoilValue(isNavOpen); 
    const setNav = useSetRecoilState(navState); 

    return (

        <div onClick={()=>setNav({ isOpen: false })}>

            <div className='mt-20'>
                <Carousel />
            </div> 

            <div>
                <Welcome />
            </div>

            <div>
                <Ourservices />
            </div>

            <div>
                <Selfcourses />
            </div>

            <div>
                <Custcourses />
            </div>

            <div>
                <TreasuryConsultancy />
            </div>
            
            <div>
                <Carousel2 />
            </div>

            <div>
                <Footer />
            </div>

        </div>

    )
}

export default Landing


// import React from "react";
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCol,
//   MDBContainer,
//   MDBRow,
//   MDBCarousel,
// //   MDBCarouselInner,
//   MDBCarouselItem,
//   MDBTypography,
//   MDBIcon,
// } from "mdb-react-ui-kit";

// interface props {
//     MDBCarouselItem: typeof MDBCarouselItem
// }

// export default function QuoteCarosuel() {
//   return (
//     <section className="vh-100 gradient-custom">
//       <MDBContainer className="py-5 h-100">
//         <MDBRow className="justify-content-center align-items-center h-100">
//           <MDBCol xl="10">
//             <MDBCard>
//               <MDBCardBody className="py-5">
//                 <MDBCarousel showControls showIndicators dark>
//                   {/* <MDBCarouselInner> */}
//                     <MDBCarouselItem itemId={1}>
//                       <MDBRow className="justify-content-center">
//                         <MDBCol md="8" lg="9" xl="8">
//                           <div className="d-flex">
//                             <div className="flex-shrink-0">
//                               <img
//                                 src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
//                                 className="rounded-circle mb-4 mb-lg-0 shadow-2"
//                                 alt="woman avatar"
//                                 width="90"
//                                 height="90"
//                               />
//                             </div>
//                             <div className="flex-grow-1 ms-4 ps-3">
//                               <figure>
//                                 <MDBTypography blockquote className="mb-4">
//                                   <p>
//                                     <MDBIcon
//                                       fas
//                                       icon="quote-left fa-lg text-warning me-2"
//                                     />
//                                     <span className="font-italic">
//                                       Lorem ipsum dolor sit amet consectetur
//                                       adipisicing elit. Pariatur sint nesciunt
//                                       ad itaque aperiam expedita officiis
//                                       incidunt minus facere, molestias quisquam
//                                       impedit inventore.
//                                     </span>
//                                   </p>
//                                 </MDBTypography>
//                                 <figcaption className="blockquote-footer mb-0">
//                                   Miranda Smith in{" "}
//                                   <cite title="Source Title">The Guardian</cite>
//                                 </figcaption>
//                               </figure>
//                             </div>
//                           </div>
//                         </MDBCol>
//                       </MDBRow>
//                     </MDBCarouselItem>

//                     <MDBCarouselItem style={{ 


// backgroundSize: 'contain', // Ensure the background image contains the container
// }} 
//   className='rounded carousel-item-custom img-fluid'
//   itemId={2}
//   src='https://opengrit.com/images/SaaSPromotional'    
//   alt='...'>
//                       <MDBRow className="justify-content-center">
//                         <MDBCol md="8" lg="9" xl="8">
//                           <div className="d-flex">
//                             <div className="flex-shrink-0">
//                               <img
//                                 src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
//                                 className="rounded-circle mb-4 mb-lg-0 shadow-2"
//                                 alt="woman avatar"
//                                 width="90"
//                                 height="90"
//                               />
//                             </div>
//                             <div className="flex-grow-1 ms-4 ps-3">
//                               <figure>
//                                 <MDBTypography blockquote className="mb-4">
//                                   <p>
//                                     <MDBIcon
//                                       fas
//                                       icon="quote-left fa-lg text-warning me-2"
//                                     />
//                                     <span className="font-italic">
//                                       Sed ut perspiciatis unde omnis iste natus
//                                       error sit voluptatem accusantium
//                                       doloremque laudantium, totam rem aperiam,
//                                       eaque ipsa quae ab illo inventore
//                                       veritatis.
//                                     </span>
//                                   </p>
//                                 </MDBTypography>
//                                 <figcaption className="blockquote-footer mb-0">
//                                   Annie Hall{" "}
//                                   <cite title="Source Title">
//                                     New York Times
//                                   </cite>
//                                 </figcaption>
//                               </figure>
//                             </div>
//                           </div>
//                         </MDBCol>
//                       </MDBRow>
//                     </MDBCarouselItem>

//                     <MDBCarouselItem style={{ 


// backgroundSize: 'contain', // Ensure the background image contains the container
// }} 
//   className='rounded carousel-item-custom img-fluid'
//   itemId={3}
//   src='https://opengrit.com/images/SaaSPromotional'    
//   alt='...'>
//                       <MDBRow className="justify-content-center">
//                         <MDBCol md="8" lg="9" xl="8">
//                           <div className="d-flex">
//                             <div className="flex-shrink-0">
//                               <img
//                                 src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
//                                 className="rounded-circle mb-4 mb-lg-0 shadow-2"
//                                 alt="woman avatar"
//                                 width="90"
//                                 height="90"
//                               />
//                             </div>
//                             <div className="flex-grow-1 ms-4 ps-3">
//                               <figure>
//                                 <MDBTypography blockquote className="mb-4">
//                                   <p>
//                                     <MDBIcon
//                                       fas
//                                       icon="quote-left fa-lg text-warning me-2"
//                                     />
//                                     <span className="font-italic">
//                                       At vero eos et accusamus et iusto odio
//                                       dignissimos qui blanditiis praesentium
//                                       voluptatum deleniti atque corrupti quos
//                                       dolores et quas molestias excepturi sint
//                                       amet dolore.
//                                     </span>
//                                   </p>
//                                 </MDBTypography>
//                                 <figcaption className="blockquote-footer mb-0">
//                                   Jason More in{" "}
//                                   <cite title="Source Title">
//                                     Smash Magazine
//                                   </cite>
//                                 </figcaption>
//                               </figure>
//                             </div>
//                           </div>
//                         </MDBCol>
//                       </MDBRow>
//                     </MDBCarouselItem>
//                   {/* </MDBCarouselInner> */}
//                 </MDBCarousel>
//               </MDBCardBody>
//             </MDBCard>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     </section>
//   );
// }

