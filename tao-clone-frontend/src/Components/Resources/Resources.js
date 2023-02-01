import React from 'react';
import "./resources.css";
import List from "./Item"

const Resources = () => {
  return (
    <>
    <div className='wrapper'>
      <section className='u4m-subpage-hero'>
        <div className='subpage-wrap'>
          <div className='sub'>
            <div className='subpage-img'>

           </div>
           <div className='subpage-right'>
            <h1 className='subpage-title'>
              Tao Resources
            </h1>
            <div className='subpage-content'>
              Videos, Tools, Whitepapers and Product Information from the industry's open assessment leader.
              </div>
              <div className='feature-wrap'>
                
                <div className='resource-card'>
<div class="resource-image" >
  <img src="https://www.taotesting.com/wp-content/webp-express/webp-images/uploads/2019/04/tao-abstract-bg3-sm.jpg.webp" alt=''/>
               </div>
               <div className='resource-content'>
                 <span className='resource-tag'>White Paper</span>
                 <h4 class="resource-header">Revolutionize Standardized Testing with Open-Source Software</h4>
                 <p class="resource-excerpt">According to the Auditor General of Pennsylvania, “between 2015 and 2021, Pennsylvania will have spent nearly $100 million,” on standardized tests. And EdWeek reported that standardized testing costs states...
                 </p>
                 <div className='button-primary'>Download Now<i class="fa-solid fa-circle-arrow-right"></i></div>
               </div>
                </div>

              </div>
           </div>
           
          </div>
        </div>
      </section>

    </div>
    </>
  )
 
  
}




const Resourcedown=()=>{
  
  return(
<>
<div class="wpb_wrapper">
<div class="wpb_raw_code wpb_content_element wpb_raw_html">
<div class="wpb_wrapper">
<div id="category-filter" class="full-width">
  
<div class="container">
  <div class="filter-wrap">
    <div class="filter">
      <div class="facetwp" data-name="mobile_search" data-type="search">
<span class="facetwp-input-wrap">

  <input type="text" class="facetwp-search"  placeholder="Enter Keywords" autocomplete="off"/>
  <i class="fa fa-search" aria-hidden="true"></i>
 
</span>

<span class="facetwp-input-wrap">
 
  <input type="text" class="facetwp-search"  placeholder="Select by category" autocomplete="off"/>
  <i class="fa-solid fa-circle-chevron-down"></i>
</span>

<span class="facetwp-input-wrap">
  
  <input type="text" class="facetwp-search"  placeholder="Select by type or solution " autocomplete="off"/>
  <i class="fa-solid fa-circle-chevron-down"></i>
</span>


        
      </div>
      
    </div>
    </div>
    </div>

    <div className='khub-sundor'>
    {List.map((item) => (
        <div >
           <div className='sundor' >
  <div className='card-image'>
<img className='sub-image' src={item.image} alt=''/>
  </div>
  <div className='card-hj'>
    <p className='first'>
    {item.item} <i class={item.icon}></i>
    </p>
    <p className='description'>{item.description}</p>
    <div className='icon'>
      
      <div className='download'>
      <i class={item.button1} aria-hidden="true"></i>
      </div> 

<div className='share'>
<i class={item.button2} aria-hidden="true"></i>
</div>
    </div>

  </div>

</div>
        </div>
      ))}
      </div>

    




</div>
</div>
</div></div>

</>


  )

}






export {Resourcedown};

export default Resources;