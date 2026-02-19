 export function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center px-6 sm:px-8 md:px-16 py-20 bg-[rgba(13,13,18,1)] text-white w-full min-h-screen mx-auto justify-between max-w-[1380px]">
      
   
      <div className="w-full md:w-1/2 text-left space-y-6">
        <h2 className="font-bold text-[36px] sm:text-[48px] md:text-[64px] leading-tight md:leading-[76.8px] tracking-[-0.02em] font-[Baloo_2]">
          Step up in AI future with  
          <span className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text px-4 py-2 rounded-md">
            PracAI
          </span>
        </h2>
        <p className="text-[18px] sm:text-[20px] md:text-[24px] text-[rgba(242,245,252,0.7)] max-w-[628px] min-w-[280px] w-full font-['DM_Sans']">
          Embark on a magical journey through artificial intelligence.
        </p>

       
        <div className="flex flex-col sm:flex-row mt-8 max-w-[400px] gap-6 justify-start">
          <button className="bg-[rgba(31,210,255,1)] text-[rgba(13,13,18,1)] px-8 py-4 rounded-[8px] shadow-lg w-full sm:w-auto hover:bg-blue-500 transition font-semibold font-['DM_Sans']">
            Start Free Trial
          </button>
          <button className="bg-[rgba(113,218,43,1)] text-black px-8 py-4 rounded-[8px] shadow-lg w-full sm:w-auto hover:bg-green-500 transition font-semibold font-['DM_Sans']">
            Get Started
          </button>
        </div>
      </div>
 
      <div className="w-full md:w-1/2  md:mt-0 flex justify-center">
        <img
          src="/assets/hero-image.png"
          alt="Workspace"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-[20px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] object-cover max-md:mt-5"
        />
      </div>
    </section>
  );
}
