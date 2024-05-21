// Example: Toggle a testimonial section on click
document.querySelector('.testimonials').addEventListener('click', function() {
    this.classList.toggle('active');
  });
  
  // Add more interactivity using JavaScript libraries like jQuery or frameworks like React
  
  document.querySelector('.testimonials').addEventListener('mouseover', function() {
    this.classList.add('active');
  });
  
  document.querySelector('.testimonials').addEventListener('mouseout', function() {
    this.classList.remove('active');
  });
  