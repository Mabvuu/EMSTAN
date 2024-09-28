<template>
    <div>
      <!-- Navigation -->
      <NavBar />
  
      <!-- Section 1: Welcome Image and Text -->
      <section class="hero relative h-[84vh]">
    <img src="@/assets/images/7.jpg" alt="Welcome Image" class="w-full h-full object-cover" />
    
    <!-- Black overlay -->
    <div class="absolute inset-0 bg-black opacity-50"></div>
    
    <div class="absolute inset-0 flex flex-col items-center justify-center text-[#f0f0f0] text-6xl  animate-fade-in">
      <h1>{{ animatedText }}<span class="text-[#78D23D] "> CareFarm</span></h1>
      <p class="text-2xl animate-fade-in md:text-xl sm:text-lg">{{ subtitle }}</p>
    </div>
  </section>


  
      <!-- Section 2: Picture Left, Text Right -->
      <section class="info flex flex-col md:flex-row my-10">
    <div class="info-img md:w-3/5 mb-4 md:mb-0">
        <img src="@/assets/images/9.jpg" alt="Info Image" class="w-full rounded-lg h-[60vh] object-cover" />
    </div>
    <div class="info-text md:w-2/5 md:pl-4"> <!-- Remove flex and center alignment -->
        <h2 class="text-[#78D23D] text-6xl mb-4">Who is welcome?</h2> <!-- Add margin-bottom to h2 -->
        <p class="text-lg md:text-xl">
            Our Aftercare and vocational training centre is ideal for persons with psychosocial disabilities including those with substance abuse disorders who want to regain independence and employment skills. They will only be accepted after Rehabilitation and have been cleared by the hospital or rehabilitation centre. We do not take clients who are Psychotic.
        </p>
    </div>
</section>


  
      <!-- Section 3: Brief Introduction -->
      <section class="brief-intro">
  <h2 class="text-[#78D23D] text-6xl mb-4 text-center">What we Offer</h2>
  <p class="mb-4 text-center">Individual and group therapy sessions with trained lived experience peer supporters and counselors</p>

  <div class="mb-6 text-center"> <!-- Added text-center for centering -->
    <h3 class="text-xl font-semibold mb-2">Life Skills Development</h3>
    <ul class="list-none pl-5">
      <li class="flex items-start mb-2">
        <i class="fas fa-arrow-right text-[#78D23D] mr-2"></i>
        Workshops: Participants attend workshops focused on life skills development, such as communication skills, stress management, time management, and conflict resolution.
      </li>
      <li class="flex items-start mb-2">
        <i class="fas fa-arrow-right text-[#78D23D] mr-2"></i>
        Vocational Training: Care farms often offer vocational training programs, equipping individuals with new skills and enhancing their employability once they complete the program.
      </li>
    </ul>
  </div>

  <div class="text-center"> <!-- Added text-center for centering -->
    <h3 class="text-xl font-semibold mb-2">Recreational Activities</h3>
    <ul class="list-none pl-5">
      <li class="flex items-start mb-2">
        <i class="fas fa-arrow-right text-[#78D23D] mr-2"></i>
        Physical Exercise: Engaging in physical activities like hiking, yoga, or sports helps improve overall well-being, reduce stress, and promote a healthy lifestyle.
      </li>
      <li class="flex items-start mb-2">
        <i class="fas fa-arrow-right text-[#78D23D] mr-2"></i>
        Art Therapy: Creative activities, such as painting, music therapy, or writing, can serve as expressive outlets for emotions and aid in self-discovery and healing.
      </li>
      <li class="flex items-start mb-2">
        <i class="fas fa-arrow-right text-[#78D23D] mr-2"></i>
        Mindfulness and Meditation: Guided mindfulness sessions or meditation practices can help individuals develop relaxation techniques, improve focus, and manage cravings.
      </li>
    </ul>
  </div>
</section>



  
      <!-- Section 4: Articles and Links -->
      <section class="articles py-12">
  <h2 class="text-4xl text-center font-semibold mb-8">Read Our Articles</h2>
  
  <div class="container mx-auto flex flex-wrap justify-center gap-6">
    <!-- Article 1 -->
    <div class="w-full sm:w-full md:w-1/3 bg-white shadow-md p-6 rounded-lg">
      <h3 class="text-3xl font-bold mb-4"> CARE FARMS, SOCIAL FARMS AND GREEN FARMS</h3>
      <p class="text-gray-700 mb-4"> Learn about care farms</p>
      <a href="/pdfs/1.pdf" target="_blank" class="text-black-600 underline text-xl ">Read</a>
    </div>
    
    <!-- Article 2 -->
    <div class="w-full sm:w-full md:w-1/3 bg-white shadow-md p-6 rounded-lg">
      <h3 class="text-3xl font-bold mb-4">ZIMBABWE MULTISECTORAL DRUG AND SUBSTANCE ABUSE PLAN</h3>
      <p class="text-gray-700 mb-4"> 2024-2030 Plan on drug and substance Abuse</p>
      <a href="/pdfs/2.pdf" target="_blank" class="text-black-600 underline text-xl">Read More</a>
    </div>
  </div>

  <!-- Read More Button -->
  <div class="text-center mt-8">
    <router-link to="/for-you" class="inline-block bg-[#78D23D] text-white py-2 px-4 rounded-lg hover:bg-[#66b12f] transition duration-300">
  Learn More
</router-link>

  </div>
</section>

<section class="mini-gallery py-12">
  <h2 class="text-4xl text-center mb-8">Our Gallery</h2>
  <div class="grid grid-cols-2 gap-0 max-w-4xl mx-auto">
    <img src="@/assets/images/8.jpg" alt="Description of image 1" class="rounded shadow-md" />
    <img src="@/assets/images/9.jpg" alt="Description of image 2" class="rounded shadow-md" />
    <img src="@/assets/images/10.jpg" alt="Description of image 3" class="rounded shadow-md" />
    <img src="@/assets/images/11.jpg" alt="Description of image 4" class="rounded shadow-md" />
  </div>
</section>


  
      <!-- Section 5: Contact Details -->
      <section class="contact-details text-center py-8">
  <p class="text-2xl">Contact us: info@emstan.com</p>
  <p class="py-4 text-xl">Phone: <a href="tel:+263772298286" class="phone-number">+263772298286</a></p>

  <router-link to="/contact" class="inline-block bg-[#78D23D] text-white py-4 px-4 rounded-lg text-3xl hover:bg-[#66b12f] transition duration-300">
  Get In Touch
</router-link>
</section>

  
      <!-- Footer -->
      <Footer />
    </div>
  </template>


<script>
  import NavBar from "../components/NavBar.vue";
  import Footer from "../components/FooterPage.vue";

  export default {
    name: "HomePage",
    components: {
      NavBar,
      Footer,
    },
    data() {
      return {
        animatedText: '',
        subtitle: '',
      };
    },
    mounted() {
      const text = 'Welcome to Emstan';
      this.animateText(text);
    },
    methods: {
      animateText(text) {
        const letters = text.split('');
        let index = 0;
        const interval = setInterval(() => {
          if (index < letters.length) {
            this.animatedText += letters[index];
            index++;
          } else {
            clearInterval(interval);
            // Fade in subtitle after h1 is complete
            setTimeout(() => {
              this.subtitle = 'Mental Health Support';
            }, 200); // Adjust timing here
          }
        }, 200); // Adjust speed of animation here
      },
    },
  };
</script>

  
  
  
  
  <style>
  /* Add styles for each section, use media queries to adjust layout on mobile */
  .hero {
    text-align: center;
  }
  .info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    .info {
      flex-direction: column;
    }
  }

  @keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-in-out;
}
@keyframes fadeInText {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.animate-fade-in-text {
  display: inline-block;
  animation: fadeInText 0.5s ease-in forwards;
}

.phone-number {
  color: #78D23D; /* Color for the phone number */
  text-decoration: underline; /* Underline to indicate it's a link */
}

.phone-number:hover {
  color: #66b12f; /* Darker shade on hover */
}


  </style>
  