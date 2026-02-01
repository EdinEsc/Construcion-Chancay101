import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 font-sans">
      
      {/* 1. LOGO CHANCAY 101 */}
      <div className="mb-10 text-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <span className="text-4xl md:text-6xl font-bold text-[#00b359] tracking-tight">
              CHANCAY
            </span>
            <div className="relative">
              {/* Techo naranja del logo */}
              <div className="absolute -top-5 left-0 w-full flex justify-center">
                <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[15px] border-b-[#d35400]"></div>
              </div>
              <span className="text-4xl md:text-6xl font-bold text-[#333]">101</span>
            </div>
          </div>
        </div>
      </div>

   {/*  CASCO */}
      <div className="mb-8">
        <div className="text-8xl md:text-9xl animate-bounce drop-shadow-xl">
          👷‍♂️
        </div>
      </div>

      {/*  BARRA */}
      <div className="w-full max-w-lg bg-gray-200 h-10 rounded-xl border-4 border-gray-800 overflow-hidden shadow-xl mb-8 relative">
        <div 
          className="h-full bg-[#f1c40f] animate-[loading_2s_linear_infinite]" 
          style={{ 
            width: '100%', 
            backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent)',
            backgroundSize: '40px 40px'
          }}
        ></div>
        <span className="absolute inset-0 flex items-center justify-center font-black text-outline text-white drop-shadow-md">
          100%
        </span>
      </div>

    
      <div className="text-center space-y-2">
        <h2 className="text-4xl md:text-6xl font-black text-[#333] uppercase italic tracking-tighter">
          Sección en <span className="text-[#00b359]">CONSTRUCCIÓN</span>
        </h2>
        <p className="text-xl text-gray-500 font-bold uppercase tracking-[0.2em]">
          Estamos trabajando...
        </p>
      </div>

      {/* Animación  barra */}
      <style>{`
        @keyframes loading {
          0% { background-position: 0 0; }
          100% { background-position: 80px 0; }
        }
      `}</style>
      
    </div>
  );
}

export default App;