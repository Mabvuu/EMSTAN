<template>
    <nav class="flex justify-between items-center bg-[#78D23D] p-4 text-black relative">
  <!-- Left: Logo -->
  <img src="@/assets/images/logo.jpg" alt="Emstan Logo" class="h-24 w-40" />

  <!-- Right: Menu Links (Desktop) -->
  <ul class="hidden md:flex space-x-8">
    <li><a href="#" class="text-white uppercase hover:text-black text-2xl font-playfair">For You</a></li>
    <li><a href="#" class="text-white uppercase hover:text-black text-2xl font-playfair">Get in Touch</a></li>
    <li class="flex space-x-4">
      <a href="#" class="hover:text-gray-300 text-xl">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="#" class="hover:text-gray-300 text-xl">
        <i class="fab fa-facebook"></i>
      </a>
      <a href="#" class="hover:text-gray-300 text-xl">
        <i class="fab fa-twitter"></i>
      </a>
    </li>
  </ul>

  <!-- Right: Mobile Menu Icon (Bars) -->
  <button class="md:hidden text-3xl text-white" @click="toggleMobileMenu">
    <i class="fas fa-bars"></i>
  </button>

  <!-- Mobile Menu Dropdown -->
  <ul v-if="isMobileMenuOpen" class="absolute right-0 top-0 bg-[#6BBF30] p-4 h-[50vh] space-y-4 w-full rounded-lg shadow-lg md:hidden z-50">
  <li class="flex justify-between items-center">
    <span class="text-white text-2xl font-playfair underline">Menu</span>
    <button @click="toggleMobileMenu" class="text-white text-2xl hover:text-gray-300">
      <i class="fas fa-times"></i> <!-- Close icon -->
    </button>
  </li>
  <li><a href="#" class="block text-white uppercase hover:text-black text-2xl font-playfair">For You</a></li>
  <li><a href="#" class="block text-white uppercase hover:text-black text-2xl font-playfair">Get in Touch</a></li>
  <li class="flex space-x-4"> <!-- Added flex and space-x-4 here -->
    <a href="#" class="hover:text-gray-300 text-xl">
      <i class="fab fa-instagram"></i>
    </a>
    <a href="#" class="hover:text-gray-300 text-xl">
      <i class="fab fa-facebook"></i>
    </a>
    <a href="#" class="hover:text-gray-300 text-xl">
      <i class="fab fa-twitter"></i>
    </a>
  </li>
</ul>

</nav>

  </template>
  
  <script>
  export default {
    data() {
      return {
        isMobileMenuOpen: false,
      };
    },
    methods: {
      toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Optional: Adjust icon sizes and spacing */
  nav {
    transition: background-color 0.3s ease;
  }
  </style>
  