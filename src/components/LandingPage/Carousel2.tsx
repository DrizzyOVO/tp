import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCarousel,
  MDBCarouselItem,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function CarouselBasicExample(): JSX.Element {
  return (
    <>
    <div className="pb-20" >
      <div className="md:ml-20 md:mr-20 sm:ml-10 sm:mr-10 pb-20 pt-20 rounded-3xl" style={{ backgroundColor: "#2d3e50" }}> 
      {/* style={{ backgroundColor: "#2d3e50" }} */}
      <TECarousel showControls showIndicators={false} ride="carousel">
      {/* ride="carousel" */}
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >

            {/* <div className="bg-red-500 w-full h-60 rounded-3xl">

            </div>

            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div> */}

            <MDBRow className="justify-content-center">
              <MDBCol md="8" lg="9" xl="8">
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                      className="rounded-circle shadow-2 ml-4"
                      alt="woman avatar"
                      width="90"
                      height="90"
                    />
                  </div>
                  <div className="flex-grow-1 ms-1 ps-1">
                    <figure className="">
                      <MDBTypography blockquote className="mb-4">
                        <p className="mr-16">
                          <MDBIcon
                            fas
                            icon="quote-left fa-lg text-warning me-2"
                          />
                          <span className="font-italic text-white">
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Pariatur sint nesciunt
                            ad itaque aperiam expedita officiis
                            incidunt minus facere, molestias quisquam
                            impedit inventore.
                          </span>
                        </p>
                      </MDBTypography>
                      <figcaption className="blockquote-footer mb-0 text-white mr-28 mt-4">
                        Miranda Smith 
                        {/* <cite title="Source Title">The Guardian</cite> */}
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </MDBCol>
            </MDBRow>



          </TECarouselItem>

          <TECarouselItem
            itemID={2}
            className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >

            {/* <div className="bg-red-500 w-full h-60 rounded-3xl">

            </div>

            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div> */}

            <MDBRow className="justify-content-center">
              <MDBCol md="8" lg="9" xl="8">
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                      className="rounded-circle ml-4 shadow-2"
                      alt="woman avatar"
                      width="90"
                      height="90"
                    />
                  </div>
                  <div className="flex-grow-1 ms-1 ps-1">
                    <figure>
                      <MDBTypography blockquote className="mb-4">
                        <p className="mr-16">
                          <MDBIcon
                            fas
                            icon="quote-left fa-lg text-warning me-2"
                          />
                          <span className="font-italic text-white">
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Pariatur sint nesciunt
                            ad itaque aperiam expedita officiis
                            incidunt minus facere, molestias quisquam
                            impedit inventore.
                          </span>
                        </p>
                      </MDBTypography>
                      <figcaption className="blockquote-footer mb-0 text-white mr-28 mt-4">
                        Miranda Smith 
                        {/* <cite title="Source Title">The Guardian</cite> */}
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </MDBCol>
            </MDBRow>

          </TECarouselItem>

          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >

            {/* <div className="bg-red-500 w-full h-60 rounded-3xl">

            </div>

            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div> */}

            <MDBRow className="justify-content-center">
              <MDBCol md="8" lg="9" xl="8">
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                      className="rounded-circle ml-4 shadow-2"
                      alt="woman avatar"
                      width="90"
                      height="90"
                    />
                  </div>
                  <div className="flex-grow-1 ms-1 ps-1">
                    <figure>
                      <MDBTypography blockquote className="mb-4">
                        <p className="mr-16">
                          <MDBIcon
                            fas
                            icon="quote-left fa-lg text-warning me-2"
                          />
                          <span className="font-italic text-white">
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Pariatur sint nesciunt
                            ad itaque aperiam expedita officiis
                            incidunt minus facere, molestias quisquam
                            impedit inventore.
                          </span>
                        </p>
                      </MDBTypography>
                      <figcaption className="blockquote-footer mb-0 text-white mr-28 mt-4">
                        Miranda Smith 
                        {/* <cite title="Source Title">The Guardian</cite> */}
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </MDBCol>
            </MDBRow>

          </TECarouselItem>
          
        </div>
      </TECarousel>
      </div>
    </div>

    <button className="px-4 py-2 text-white rounded-2xl" style={{ backgroundColor: "#2d3e50" }}>
      Read More
    </button>

    </>
  );
}




// import React from "react";
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCol,
//   MDBContainer,
//   MDBRow,
//   MDBCarousel,
//   MDBCarouselItem,
//   MDBTypography,
//   MDBIcon,
// } from "mdb-react-ui-kit";

// import { TECarousel, TECarouselItem } from "tw-elements-react";

// export default function QuoteCarosuel() {
//   return (

//     <section className="vh-100 gradient-custom"> 
//     <TECarousel showControls showIndicators ride="carousel">


//       <MDBContainer className="py-5 h-100">
//         <MDBRow className="justify-content-center align-items-center h-100">
//           <MDBCol xl="10">
//             <MDBCard>
//               <MDBCardBody className="py-5">
//                 <MDBCarousel showControls showIndicators dark>

//                     <TECarouselItem
//                         itemID={1}
//                         className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//                     >
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

//                     </TECarouselItem>

//                     <TECarouselItem
//                         itemID={1}
//                         className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//                     >
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

//                     </TECarouselItem>


//                     <TECarouselItem
//                         itemID={1}
//                         className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//                     >
 
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
//                     </TECarouselItem>

//                 </MDBCarousel>
//               </MDBCardBody>
//             </MDBCard>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>

//       </TECarousel>
//     </section>
//   );
// }

