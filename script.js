let movies = [
    {
      name: "loki",
      des: "Loki is an American television series created by Michael Waldron for the streaming service Disney.",
      image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/07/Tom-Hiddleston-in-The-Loki-TV-Series.jpg",
    },
    {
      name: "falcon and the winter soldier",
      des: "Falcon and the Winter Soldier is an American television series created for the streaming platform Disney+.",
      image: "https://images.thedirect.com/media/article_full/Reviews.jpg",
    },
    {
      name: "WandaVision",
      des: "WandaVision is an American television series created for the streaming service Disney+",
      image: "https://wallpapers.com/images/hd/wandavision-tv-shows-poster-15h9wurxq8vu6zfx.jpg",
    },
  
    {
      name: "Raya and the Last Dragon",
      des: "Raya and the Last Dragon is an animated Disney film released in 2021.",
      image: "https://biculturalmama.com/wp-content/uploads/2021/05/Raya-and-the-Last-Dragon-image.jpg",
    },
  
    {
      name: "Luca",
      des: "Luca is a Disney-Pixar animated film released in 2021.",
      image: "https://theilluminerdi.com/wp-content/uploads/2021/06/luca-disney-pixar.png",
    },
  ];
  
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0; 
  
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
  
    
    let slide = document.createElement("div");
    let imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
  
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
  
    
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  
  setInterval(() => {
    createSlide();
  }, 3000);
  
 
  
  const videoCards = document.querySelectorAll(".video-card");
  
  videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let video = item.children[1];
      video.play();
    });
    item.addEventListener("mouseleave", () => {
      let video = item.children[1];
      video.pause();
    });
  });
  
  
  
  let cardContainers = document.querySelectorAll(".card-container");
  let preBtns = document.querySelectorAll(".pre-btn");
  let nxtBtns = document.querySelectorAll(".nxt-btn");
  
  
  function scrollLeft(container) {
    container.scrollLeft -= container.clientWidth;
  }
  

  function scrollRight(container) {
    container.scrollLeft += container.clientWidth;
  }
  
  
  preBtns.forEach((preBtn, index) => {
    preBtn.addEventListener("click", () => {
      scrollLeft(cardContainers[index]);
    });
  });
  
  nxtBtns.forEach((nxtBtn, index) => {
    nxtBtn.addEventListener("click", () => {
      scrollRight(cardContainers[index]);
    });
  });