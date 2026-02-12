// import React from 'react';
// import fondoImagen from '../assets/fondo-chancay.jpg'; 

// function EnConstruccion() {
//   return (
//     <div 
//       className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-4 font-sans relative overflow-hidden"
//       style={{ backgroundImage: `url(${fondoImagen})` }}
//     >
//       <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>

//       <div className="relative z-10 w-full flex flex-col items-center">
        
//         {/* 1. LOGO - Un poco más compacto */}
//         <div className="mb-8 text-center drop-shadow-xl">
//           <div className="flex flex-col items-center">
//             <div className="flex items-center gap-2 bg-white/5 px-5 py-1.5 rounded-full backdrop-blur-md border border-white/10">
//               <span className="text-3xl md:text-5xl font-bold text-[#00b359] tracking-tight">
//                 CHANCAY
//               </span>
//               <div className="relative">
//                 <div className="absolute -top-4 left-0 w-full flex justify-center">
//                   <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] border-b-[#d35400]"></div>
//                 </div>
//                 <span className="text-3xl md:text-5xl font-bold text-white">101</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* 2. TUERCAS - Tamaño reducido */}
//         <div className="mb-10 relative">
//           <div className="text-6xl md:text-7xl text-white/90 animate-[spin_5s_linear_infinite] drop-shadow-lg">
//             ⚙️
//           </div>
//           <div className="absolute -bottom-1 -right-3 text-3xl md:text-4xl text-[#00b359] animate-[spin_4s_linear_infinite_reverse]">
//             ⚙️
//           </div>
//         </div>

//         {/* 4. TEXTO PRINCIPAL - Mucho más pequeño y estilizado */}
//         <div className="text-center space-y-3 bg-black/50 p-6 rounded-2xl backdrop-blur-sm border border-white/5 shadow-xl max-w-sm md:max-w-md">
//           <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">
//             PROYECTO EN <span className="text-[#00b359]">DESARROLLO</span>
//           </h2>
//           <div className="h-[2px] w-12 bg-[#d35400] mx-auto opacity-80"></div>
//           <p className="text-sm md:text-base text-gray-300 font-medium uppercase tracking-[0.3em]">
//             Estamos trabajando...
//           </p>
//         </div>

//       </div>

//       <style>{`
//         @keyframes spin {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//       `}</style>
      
//     </div>
//   );
// }

// export default EnConstruccion;


import React from 'react';

import fondoTL from '../assets/fondo-tl.jpg';
import fondoTR from '../assets/fondo-tr.jpg';
import fondoBL from '../assets/fondo-bl.jpg';
import fondoBR from '../assets/fondo-br.jpg';

function EnConstruccion() {
  return (
    <div className="min-h-screen relative overflow-hidden font-sans">

      {/* FONDO CON 4 IMÁGENES */}
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: `url(${fondoTL})` }}
        />
        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: `url(${fondoTR})` }}
        />
        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: `url(${fondoBL})` }}
        />
        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: `url(${fondoBR})` }}
        />
      </div>

      {/* OVERLAY OSCURO */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>

      {/* CONTENIDO */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center p-4">

        {/* 1. LOGO */}
        <div className="mb-8 text-center drop-shadow-xl">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 bg-white/5 px-5 py-1.5 rounded-full backdrop-blur-md border border-white/10">
              <span className="text-3xl md:text-5xl font-bold text-[#00b359] tracking-tight">
                CHANCAY
              </span>
              <div className="relative">
                <div className="absolute -top-4 left-0 w-full flex justify-center">
                  <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] border-b-[#d35400]"></div>
                </div>
                <span className="text-3xl md:text-5xl font-bold text-white">
                  101
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. TUERCAS */}
        <div className="mb-10 relative">
          <div className="text-6xl md:text-7xl text-white/90 animate-[spin_5s_linear_infinite] drop-shadow-lg">
            ⚙️
          </div>
          <div className="absolute -bottom-1 -right-3 text-3xl md:text-4xl text-[#00b359] animate-[spin_4s_linear_infinite_reverse]">
            ⚙️
          </div>
        </div>

        {/* 3. TEXTO */}
        <div className="text-center space-y-3 bg-black/50 p-6 rounded-2xl backdrop-blur-sm border border-white/5 shadow-xl max-w-sm md:max-w-md">
          <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">
            PROYECTO EN <span className="text-[#00b359]">DESARROLLO</span>
          </h2>
          <div className="h-[2px] w-12 bg-[#d35400] mx-auto opacity-80"></div>
          <p className="text-sm md:text-base text-gray-300 font-medium uppercase tracking-[0.3em]">
            Estamos trabajando...
          </p>
        </div>

      </div>

      {/* ANIMACIÓN */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

    </div>
  );
}

export default EnConstruccion;
