 export const Course = () => {
  return (
    <section className="bg-[rgba(13,13,18,1)] px-6 md:px-20 py-24">
      
      
      <div className="text-center mb-16">
        <h2 className="font-['DM_Sans'] text-[36px] font-medium tracking-[-0.015em] leading-[43px]">
          <span className="bg-gradient-to-r from-[rgba(113,218,43,1)] to-[rgba(31,210,255,1)] text-transparent bg-clip-text">
            COURSES
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
          What we have to offer?
        </p>
      </div>
 <div className="flex flex-col gap-10">
        
       
        <div className="bg-[rgba(242,245,252,0.05)] rounded-xl shadow-lg p-8 flex flex-col lg:flex-row items-center md:items-start text-center lg:text-left md:text-left hover:scale-105 transition gap-8 ">
            <div className='max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center md:items-start text-center lg:text-left md:text-left gap-8'>
           <img
              src="/assets/course_1.png"
              alt="Artificial Intelligence"
              className="mx-auto mb-6 md:mb-0 w-full max-w-[570px]   md:h-[349px] object-contain rounded-lg"
  />


          <div className="flex flex-col gap-4 max-w-lg  ">
            <h3 className="font-['Baloo_2'] 
              text-[24px] sm:text-[28px] md:text-[36px] lg:text-[40px]  
              leading-[32px] sm:leading-[36px] md:leading-[43px] lg:leading-[48px]  
              font-semibold  
              text-[rgba(228,253,225,1)]  
              tracking-[-0.36px]  
              mb-4
            ">
              Artificial Intelligence
            </h3>
            <p className="font-['DM_Sans'] text-[16px] sm:text-[18px] md:text-[20px]  
              leading-[22px] sm:leading-[23px] md:leading-[24px]  
              font-normal  
              text-[rgba(168,218,220,0.7)]  
              mb-4
            ">
              Learn AI through fun, interactive sessions
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-[rgba(242,245,252,0.8)] font-['DM_Sans'] text-[16px] mb-6">
              <span>⏳ 4 Weeks</span>
              <span>📘 Beginner</span>
              <span>⭐ 4.8/5</span>
 </div>
            <button className="bg-[rgba(113,218,43,1)] text-black px-6 py-3 rounded-lg shadow-md hover:bg-green-500 transition font-semibold font-['DM_Sans']">
              View Course
            </button>
          </div>
          </div>
        </div>

       
        <div className="bg-[rgba(242,245,252,0.05)] rounded-xl shadow-lg p-8 flex flex-col lg:flex-row items-center md:items-start text-center lg:text-left hover:scale-105 transition gap-8">
             <div className='max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center md:items-start text-center lg:text-left md:text-left gap-8'>
          <img
            src="/assets/course_2.png"
            alt="Python World"
            className="mx-auto mb-6 md:mb-0 w-full max-w-[570px] object-contain rounded-lg"
          />
          <div className="flex flex-col gap-4 max-w-lg">
            <h3 className="font-['Baloo_2'] text-[28px] md:text-[36px] font-semibold text-[rgba(228,253,225,1)] mb-2 leading-[43px] tracking-[-0.36px]">
              Python World
            </h3>
            <p className="font-['DM_Sans'] text-[20px] text-[rgba(168,218,220,0.7)] mb-4 leading-[24px]">
              Learn Programming Through Games
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-[rgba(242,245,252,0.8)] font-['DM_Sans'] text-[16px] mb-6">
              <span>⏳ 6 Weeks</span>
              <span>📘 Beginner</span>
              <span>⭐ 0/5</span>
            </div>
            <button className="bg-gray-500 text-white px-6 py-3 rounded-lg shadow-md cursor-not-allowed font-semibold font-['DM_Sans']">
              Coming Soon
            </button>
 </div>
 </div>
        </div>

      </div>
    </section>
  )
}
