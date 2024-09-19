import React from 'react'

function Carousel() {
  return (
    <div>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="https://slamfitnessstudio.in/wp-content/uploads/2023/04/slam-ban1.webp" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL_HSS/Rec_PC_hero_3000x1200ubersept._CB564442943_.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/GW-Hero-PC_BBAug23_Soft-toys_with-Apay_Lifestyle_2x._CB597740150_.jpg" class="d-block w-100" alt="..." />
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    </div>
  )
}

export default Carousel
