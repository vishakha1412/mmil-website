 import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "AJAY RATHI",
    rating: 4,
    text: "Very nice and understanding. Lorem ipsum lorem ipsum",
  },
  {
    name: "SHRESTH SHARMA",
    rating: 5,
    text: "It is amazing. It teaches us about AI and also makes our time fun.",
  },
  {
    name: "VIJAY RATHI",
    rating: 4,
    text: "Very nice and understanding. Lorem ipsum lorem ipsum",
  },
  {
    name: "SHRESTH SHARMA",
    rating: 5,
    text: "It is amazing. It teaches us about AI and also makes our time fun.",
  },
  {
    name: "VIJAY RATHI",
    rating: 5,
    text: "Very nice and understanding. Lorem ipsum lorem ipsum",
  },
];

const Testimonials= () => {
  return (
    <section className="relative w-full bg-[#0D0D12] py-24 overflow-hidden"
    style={{
      backgroundImage: "url('/assets/background-grid.png')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover"
    }}
    >
      
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-20">

        
        <div className="text-center mb-16">
          <h2 className="font-['DM_Sans'] text-[36px] font-medium tracking-normal text-white">
          <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
            REVIEWS
          </span>
        </h2>
          <h2 className="text-white text-3xl md:text-4xl font-semibold">
            What Our Learners have to say?
          </h2>
        </div>

        
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="min-w-[260px] h-[260px] rounded-[12px] p-6 
              bg-[rgba(15,28,31,1)] backdrop-blur-lg 
              border border-[rgba(255,255,255,0.08)] 
              flex flex-col justify-between"
            >
               
              <p className="text-yellow-400 text-3xl leading-none text-center">“</p>

              
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full border-2 border-gray-300 flex items-center justify-center mb-2">
                  <img src='/logo/review.png' alt="Reviewer" className="w-10 h-10 rounded-full object-cover" />
                </div>

                <p className="text-white text-sm tracking-wide mb-2">
                  {item.name}
                </p>

               
                <div className="flex gap-1 mb-2">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                    
                  ))}
                </div>
              </div>

               
              <p className="text-[rgba(242,245,252,0.7)] text-xs text-center leading-relaxed">
                {item.text}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
