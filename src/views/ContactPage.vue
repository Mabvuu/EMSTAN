<template>
    <div>
      <!-- Navigation -->
      <NavBar />
  
      <!-- Section 1: Contact Form -->
      <section class="contact-form py-12">
  <form class="max-w-lg mx-auto bg-white shadow-lg p-8 rounded-lg">
    <div class="mb-6">
      <label for="name" class="block text-[#78D23D] text-lg font-bold mb-2">Name:</label>
      <input type="text" id="name" name="name" class="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#78D23D]" placeholder="Your name" />
    </div>
    <div class="mb-6">
      <label for="email" class="block text-[#78D23D] text-lg font-bold mb-2">Email:</label>
      <input type="email" id="email" name="email" class="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#78D23D]" placeholder="Your email" />
    </div>
    <div class="mb-6">
      <label for="message" class="block text-[#78D23D] text-lg font-bold mb-2">Message:</label>
      <textarea id="message" name="message" class="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#78D23D]" rows="4" placeholder="Your message"></textarea>
    </div>
    <button type="submit" class="w-full bg-[#78D23D] text-white text-lg py-3 rounded-md hover:bg-[#66b12f] transition duration-300">Send</button>
  </form>
</section>

  
      <!-- Section 2: Social Media and Contact Info -->
      <section class="contact-info py-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto text-center">
  <div class="social-media mb-6">
    <h2 class="text-4xl font-bold text-[#78D23D] mb-4">Connect with Us</h2>
    <!-- Social media links/icons go here -->
  </div>

  <div class="contact-details mb-6">
    <p class="text-xl text-gray-700">
      <i class="fas fa-phone text-[#78D23D] mr-2"></i> 
      Phone: <a href="tel:+263772298286" class="text-gray-900 font-semibold hover:text-[#78D23D]">(+263) 772-298-286</a>
    </p>
    <p class="text-xl text-gray-700">
      <i class="fas fa-envelope text-[#78D23D] mr-2"></i> 
      Email: <a href="mailto:contact@emstan.com" class="text-gray-900 font-semibold hover:text-[#78D23D]">contact@emstan.com</a>
    </p>
  </div>
</section>

<section class="address py-6 bg-gray-100 rounded-lg shadow-lg max-w-4xl mx-auto text-center mt-8">
  <h2 class="text-4xl font-bold text-[#78D23D] mb-4">Our Address</h2>
  <p class="text-xl text-gray-700">123 Emstan Road, City, Country</p>
  <p class="text-lg text-gray-500">Directions: Take exit 12 from the main highway.</p>
</section>

  
      <!-- Section 4: Map -->
      <section class="map">
        <!-- Embed Google Maps iframe -->
        <iframe 
          src="https://www.google.com/maps/embed?pb=..." 
          width="600" 
          height="450" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy"></iframe>
      </section>
  
      <!-- Footer -->
      <Footer />
    </div>
  </template>
  
  <script>
  import NavBar from "../components/NavBar.vue";
  import Footer from "../components/FooterPage.vue";
  
  export default {
    name: "ContactPage",
    components: {
      NavBar,
      Footer,
    },
  };
  </script>
  
  <style>
  /* Style for the form and other sections */
  .contact-form {
    margin: 20px;
  }
  .map iframe {
    width: 100%;
    height: 400px;
  }
  </style>
  