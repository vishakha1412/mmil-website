 export function About() {
  return (
    <section className=" max-w-[1280px] mx-auto px-6 md:px-20 py-24">
      
      
      <div className="text-center mb-16">
        <h2 className="font-['DM_Sans'] text-[36px] font-medium tracking-normal text-white">
          <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
            ABOUT US
          </span>
        </h2>

        <p className="
          font-['Baloo_2'] 
          text-[28px] sm:text-[36px] md:text-[48px] 
          leading-[36px] sm:leading-[48px] md:leading-[57.6px] 
          font-semibold 
          tracking-[-0.026em] 
          text-[rgba(242,245,252,1)] 
          text-center 
          w-full px-4
        ">
          Who are we?
</p>
      </div>

     
      <div className="flex flex-col gap-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between rounded-xl shadow-lg p-8 hover:scale-105 transition gap-6">
         

          <div className="flex flex-col gap-4 max-w-lg text-center md:text-left">
            <h3
              className="
                font-['Baloo_2'] 
                text-[28px] sm:text-[32px] md:text-[40px] 
                leading-tight 
                font-semibold 
                text-[rgba(113,218,43,1)] 
                tracking-[-0.02em] 
                mb-2
              "
            >
            Our Mission
            </h3>

            <p
              className="
                font-['DM_Sans'] 
                text-[16px] sm:text-[18px] md:text-[20px] 
                font-normal 
                text-[rgba(242,245,252,0.7)] 
                leading-relaxed
              "
            >
              At PracAI, we’re on a mission to make Artificial Intelligence fun, 
accessible, and meaningful for kids aged 12 and up. We simplify 
complex AI concepts through interactive, playful learning 
experiences that spark curiosity, boost creativity, and build 
confidence. By blending imagination with education, we empower 
the next generation to understand and shape the future of 
technology.
            </p>
          </div>
           <img
            src="/assets/About.png"
            alt="Learning Paths"
            className="
              mx-auto 
              mb-[10px] 
              w-full max-w-[510px] min-w-[280px]   
              h-auto max-h-[400px]                 
              object-contain 
              rounded-lg 
              shadow-[0_4px_4px_rgba(0,0,0,0.25)]
            "
          />
        </div>
      </div>
      <img 
        src="/assets/bottom-grid.png"
        alt="Bottom Grid"
        className="w-full  mt-[-90px] opacity-90"
      />
       
    </section>
  );
}

