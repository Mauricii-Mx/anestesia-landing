const fs = require('fs');

let astroContent = fs.readFileSync('src/pages/index.astro', 'utf8');

// Replace the right column with a simple image container for the 3D render
const rightColumnStart = astroContent.indexOf('<!-- RIGHT COLUMN -->');
const rightColumnEnd = astroContent.indexOf('</section>', rightColumnStart);

const newRightColumn = `<!-- RIGHT COLUMN: 3D Render Placeholder -->
          <div class="relative w-full h-full flex justify-center items-center lg:justify-end mt-16 lg:mt-0 z-10 pointer-events-none">
            <!-- Glow effect behind the tablet -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#005BF5]/10 rounded-full blur-[100px] -z-10"></div>
            
            <!-- 3D Render Image (exceeds margins with scale) -->
            <img 
              src="/images/mockup-tablet-3d.png" 
              alt="Dashboard 3D Mockup" 
              class="anime-float-3d w-full max-w-[130%] lg:max-w-[140%] scale-110 object-contain drop-shadow-2xl relative z-20"
              style="margin-top: -2rem; margin-bottom: -2rem;"
            />
          </div>
        </div>
      `;

astroContent = astroContent.substring(0, rightColumnStart) + newRightColumn + astroContent.substring(rightColumnEnd);

// Replace the script with a simplified Anime.js for the 3D float
const scriptStart = astroContent.indexOf('<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs');
const scriptEnd = astroContent.indexOf('</script>', astroContent.indexOf('</script>', scriptStart) + 10) + 9;

const newScript = `<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
  <script>
    document.addEventListener("DOMContentLoaded", () => {
      // Floating Animation for the 3D Render
      anime({
        targets: '.anime-float-3d',
        translateY: [-15, 15],
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine',
        duration: 3000
      });
    });
  </script>`;

if (scriptStart !== -1) {
  astroContent = astroContent.substring(0, scriptStart) + newScript + astroContent.substring(scriptEnd);
} else {
  // If not found, inject before </Layout>
  astroContent = astroContent.replace('</Layout>', newScript + '\n</Layout>');
}

fs.writeFileSync('src/pages/index.astro', astroContent);
console.log('Right column updated to 3D image placeholder.');
