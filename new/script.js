// Ev taskiniz ise, fake apiden istifade ederek productlarin sekillerini bir sliderde teqdim etmeyinizdir.
//  Nece sekil varsa hamsi sliderde eks olunmalidir  https://fakestoreapi.com/products

const slider = document.querySelector('.slider');

fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => {
    const slides = [];
    let currentSlideIndex = 0;

    data.forEach(photo => {
      const slide = document.createElement('div');
      slide.classList.add('slide');
      slide.innerHTML = `<img src="${photo.image}">`;
      slider.appendChild(slide);
      slides.push(slide);
    });

    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.style.display = 'block';
        } else {
          slide.style.display = 'none';
        }
      });
    }

    function showNextSlide() {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      showSlide(currentSlideIndex);
    }

    function showPreviousSlide() {
      currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
      showSlide(currentSlideIndex);
    }

    document.getElementById('prevBtn').addEventListener('click', showPreviousSlide);
    document.getElementById('nextBtn').addEventListener('click', showNextSlide);

    showSlide(currentSlideIndex);
  })
  .catch(error => console.error('error', error));
