const fs = require('fs');

let astroContent = fs.readFileSync('src/pages/index.astro', 'utf8');

const newHeaderAndHero = `  <header class="fixed top-0 w-full z-50 bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <a href="/" class="flex-shrink-0">
        <img src="/images/logo.svg" alt="Anestesia Digital Logo" class="h-10 w-auto" />
      </a>
      <div class="flex items-center justify-end gap-8 flex-1">
        <nav class="hidden md:flex items-center gap-8 font-['Montserrat'] font-normal text-[#000000]">
          <a href="#" class="hover:text-primary transition-colors">Sistema</a>
          <a href="#" class="hover:text-primary transition-colors">Planes</a>
          <a href="#" class="hover:text-primary transition-colors">Garantía por contrato</a>
        </nav>
        <a href="#contacto" class="bg-[#005BF5] text-white font-['Montserrat'] font-bold px-6 py-2.5 rounded-full hover:bg-primary transition-colors">
          Agendar Llamada
        </a>
      </div>
    </div>
  </header>
  <main class="w-full pt-20 bg-surface-container-lowest">
    <div class="flex flex-col w-full">
      <section class="relative w-full min-h-[700px] flex items-center pt-28 pb-20 bg-surface-container-lowest overflow-hidden">
        <div class="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <!-- LEFT COLUMN -->
          <div class="flex flex-col gap-6 relative z-20">
            <h1 class="font-headline-xl text-4xl md:text-5xl leading-tight font-extrabold text-[#39598f]">
              Haz rentable tu inversión en <span class="text-[#2760c2]">publicidad digital</span> para tu clínica estética
            </h1>
            <p class="font-body-lg text-lg text-on-surface-variant max-w-lg font-normal">
              Deja de gastar presupuesto en pauta que solo trae preguntones por WhatsApp. Creamos campañas exclusivas para atraer <strong class="font-bold">Más y mejores pacientes</strong> a tu clínica en México y Perú.
            </p>
            
            <div class="flex flex-wrap gap-4 mt-2">
              <button class="bg-[#005BF5] text-white px-8 py-3 rounded-full font-label-md font-bold hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                Solicitar plan de crecimiento
              </button>
              <button class="flex items-center gap-2 bg-transparent text-on-surface px-6 py-3 rounded-full font-label-md font-bold hover:bg-surface-variant/50 transition-colors duration-300">
                <span class="material-symbols-outlined">visibility</span>
                Ver Servicio y Paquetes
              </button>
            </div>

            <div class="mt-6 p-5 bg-surface-container-highest/30 rounded-xl border border-outline-variant/30 inline-block max-w-lg">
              <p class="text-on-surface-variant font-body-md text-sm">
                <strong class="font-bold text-[#39598f]">Garantía por Contrato:</strong> Garantía de Rendimiento: Si no alcanzamos el retorno acordado en el mes 2, reasumimos el 50% de nuestros honorarios.
              </p>
            </div>
          </div>

          <!-- RIGHT COLUMN -->
          <div class="relative w-full h-full flex justify-center items-center mt-12 lg:mt-0 z-10 perspective-1000">
            <!-- Floating Icons -->
            <div class="absolute -left-4 top-10 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center anime-float z-20" data-delay="0">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" class="w-6 h-6 object-contain" alt="Meta" />
            </div>
            <div class="absolute -right-6 top-1/3 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center anime-float z-20" data-delay="500">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png" class="w-6 h-6 object-contain" alt="Google Ads" />
            </div>
            <div class="absolute left-10 -bottom-6 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center anime-float z-20" data-delay="1000">
               <span class="material-symbols-outlined text-[#005BF5]">calendar_month</span>
            </div>

            <!-- Tablet Mockup -->
            <div class="relative w-full max-w-[540px] bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden flex flex-col z-10 bg-white">
              <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/50">
                <h3 class="font-bold text-[#39598f]">Resumen General</h3>
                <div class="flex items-center gap-3">
                  <span class="text-xs bg-white border border-gray-200 px-2 py-1 rounded-md text-gray-500">Últimos 30 días</span>
                  <span class="w-6 h-6 rounded-full bg-[#005BF5] text-white flex items-center justify-center text-[10px] font-bold">AD</span>
                </div>
              </div>
              
              <div class="p-6 flex flex-col gap-6 bg-white">
                <!-- Metrics -->
                <div class="grid grid-cols-3 gap-3">
                  <div class="p-3 border border-gray-100 rounded-xl">
                    <p class="text-[10px] text-gray-500 mb-1">Pacientes Captados</p>
                    <p class="text-xl font-bold text-gray-800"><span class="counter-pacientes">0</span></p>
                    <p class="text-[10px] text-green-500 font-medium mt-1">↑ 28.4% vs mes ant.</p>
                  </div>
                  <div class="p-3 border border-gray-100 rounded-xl">
                    <p class="text-[10px] text-gray-500 mb-1">Costo por Lead</p>
                    <p class="text-xl font-bold text-gray-800">$2.00 USD</p>
                    <p class="text-[10px] text-green-500 font-medium mt-1">↓ 14.7% de costo</p>
                  </div>
                  <div class="p-3 border border-gray-100 rounded-xl">
                    <p class="text-[10px] text-gray-500 mb-1">Retorno (ROI)</p>
                    <p class="text-xl font-bold text-gray-800"><span class="counter-roi">0</span>%</p>
                    <p class="text-[10px] text-green-500 font-medium mt-1">↑ 23.7% de retorno</p>
                  </div>
                </div>

                <!-- Charts -->
                <div class="grid grid-cols-2 gap-4">
                  <div class="border border-gray-100 rounded-xl p-3 h-32 flex flex-col relative overflow-hidden">
                    <p class="text-[10px] text-gray-500 mb-2">Leads vs Pacientes</p>
                    <svg viewBox="0 0 100 40" class="w-full h-full overflow-visible">
                      <path class="anim-line" d="M0,30 Q20,10 40,20 T70,10 T100,5" fill="none" stroke="#005BF5" stroke-width="2" stroke-linecap="round" stroke-dasharray="150" stroke-dashoffset="150" />
                      <path class="anim-line-secondary" d="M0,35 Q25,30 50,25 T100,20" fill="none" stroke="#39598f" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 2" />
                    </svg>
                  </div>
                  <div class="border border-gray-100 rounded-xl p-3 h-32 flex items-center justify-between">
                    <div class="relative w-16 h-16">
                      <svg viewBox="0 0 36 36" class="w-full h-full transform -rotate-90">
                        <path class="text-gray-100" stroke-width="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        <path class="text-[#005BF5] anim-donut" stroke-dasharray="52, 100" stroke-dashoffset="0" stroke-width="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        <path class="text-[#39598f] anim-donut" stroke-dasharray="32, 100" stroke-dashoffset="-52" stroke-width="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        <path class="text-[#2760c2] anim-donut" stroke-dasharray="16, 100" stroke-dashoffset="-84" stroke-width="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      </svg>
                      <div class="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-800">62%</div>
                    </div>
                    <div class="flex flex-col gap-1 text-[8px] text-gray-600">
                      <div class="flex items-center gap-1"><span class="w-2 h-2 bg-[#005BF5] rounded-full"></span>Meta 52%</div>
                      <div class="flex items-center gap-1"><span class="w-2 h-2 bg-[#39598f] rounded-full"></span>Google 32%</div>
                      <div class="flex items-center gap-1"><span class="w-2 h-2 bg-[#2760c2] rounded-full"></span>Web 16%</div>
                    </div>
                  </div>
                </div>

                <!-- Table -->
                <div class="border border-gray-100 rounded-xl overflow-hidden text-[9px]">
                  <table class="w-full text-left">
                    <thead class="bg-gray-50 text-gray-500">
                      <tr>
                        <th class="py-2 px-3 font-medium">Campaña</th>
                        <th class="py-2 px-3 font-medium">Canal</th>
                        <th class="py-2 px-3 font-medium">Leads</th>
                        <th class="py-2 px-3 font-medium">Pacientes</th>
                        <th class="py-2 px-3 font-medium">Conv.</th>
                        <th class="py-2 px-3 font-medium text-right">Revenue</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100 text-gray-700">
                      <tr>
                        <td class="py-2 px-3 font-medium">Convertidores</td>
                        <td class="py-2 px-3">Meta</td>
                        <td class="py-2 px-3">48</td>
                        <td class="py-2 px-3">12</td>
                        <td class="py-2 px-3 text-green-500">24.2%</td>
                        <td class="py-2 px-3 text-right font-bold">$46,750</td>
                      </tr>
                      <tr>
                        <td class="py-2 px-3 font-medium">Simplicity</td>
                        <td class="py-2 px-3">Google</td>
                        <td class="py-2 px-3">35</td>
                        <td class="py-2 px-3">8</td>
                        <td class="py-2 px-3 text-green-500">21.3%</td>
                        <td class="py-2 px-3 text-right font-bold">---</td>
                      </tr>
                      <tr>
                        <td class="py-2 px-3 font-medium">Aumento Mamario</td>
                        <td class="py-2 px-3">Meta</td>
                        <td class="py-2 px-3">24</td>
                        <td class="py-2 px-3">6</td>
                        <td class="py-2 px-3 text-green-500">18.7%</td>
                        <td class="py-2 px-3 text-right font-bold">---</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <!-- 3D Shelf -->
            <div class="absolute -bottom-6 w-[110%] h-8 bg-gray-200 rounded-[100%] shadow-[0_20px_40px_rgba(0,0,0,0.15)] -z-10 blur-[2px]"></div>
          </div>
        </div>
      </section>`;

// Replace <header ...> to </section> with new content
const headerStart = astroContent.indexOf('<header');
const sectionEnd = astroContent.indexOf('</section>') + 10;
let finalContent = astroContent.substring(0, headerStart) + newHeaderAndHero + astroContent.substring(sectionEnd);

// Inject animejs script before closing </Layout>
const scriptToInject = `
  <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
  <script>
    document.addEventListener("DOMContentLoaded", () => {
      // Counter Animation
      const counters = [
        { el: '.counter-pacientes', end: 123, isFloat: false },
        { el: '.counter-roi', end: 20.7, isFloat: true }
      ];
      
      counters.forEach(c => {
        const obj = { val: 0 };
        anime({
          targets: obj,
          val: c.end,
          round: c.isFloat ? 10 : 1,
          easing: 'easeOutExpo',
          duration: 3000,
          update: function() {
            const node = document.querySelector(c.el);
            if(node) node.innerHTML = c.isFloat ? (obj.val / 10).toFixed(1) : obj.val;
          }
        });
      });

      // SVG Line Animation
      anime({
        targets: '.anim-line',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 2000,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: true
      });

      // Floating Icons
      const floaters = document.querySelectorAll('.anime-float');
      floaters.forEach(el => {
        const delay = parseInt(el.getAttribute('data-delay') || '0');
        anime({
          targets: el,
          translateY: [-10, 10],
          direction: 'alternate',
          loop: true,
          easing: 'easeInOutQuad',
          duration: 2000,
          delay: delay
        });
      });
    });
  </script>
`;

finalContent = finalContent.replace('</Layout>', scriptToInject + '\n</Layout>');
fs.writeFileSync('src/pages/index.astro', finalContent);
console.log('Replaced correctly.');
