import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-deep text-white py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* 1. Brand Info & Vision */}
        <div className="space-y-4">
          <Image 
            src="/Pentacloud logo.png" 
            alt="Penta Logo" 
            width={140} 
            height={40} 
            className="brightness-0 invert" 
          />
          <div className="pt-2">
            <h3 className="text-xl md:text-2xl font-black text-white leading-tight">
              Digital Excellence <br />
              in Salesforce Starts Here
            </h3>
            <p className="text-brand-soft italic text-sm mt-2 font-medium">
              "Journey Towards Success"
            </p>
          </div>
        </div>

        {/* 2. Our Services */}
        <div className="md:pl-10">
          <h4 className="font-bold text-lg mb-4 text-white">Our Services</h4>
          <ul className="space-y-2 text-brand-soft text-sm">
            <li className="hover:text-white cursor-pointer transition-colors">Home</li>
            <li className="hover:text-white cursor-pointer transition-colors">About</li>
            <li className="hover:text-white cursor-pointer transition-colors">Services</li>
            <li className="hover:text-white cursor-pointer transition-colors">Blogs</li>
            <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
          </ul>
        </div>

        {/* 3. Our Contacts (Details from Image) */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-white">Our Contacts</h4>
          <div className="space-y-4 text-brand-soft text-sm">
            {/* Phone */}
            <div className="flex flex-col">
              <span className="font-bold text-white uppercase text-[10px] tracking-widest mb-1">Phone:</span>
              <p>+971545132807</p>
            </div>
            
            {/* Email */}
            <div className="flex flex-col">
              <span className="font-bold text-white uppercase text-[10px] tracking-widest mb-1">Email:</span>
              <p>contactus@pentacloudconsulting.com</p>
            </div>
            
            {/* Location */}
            <div className="flex flex-col">
              <span className="font-bold text-white uppercase text-[10px] tracking-widest mb-1">Location:</span>
              <p className="leading-relaxed">
                Jagan Arcade, 4th Floor, 1st main Road, Post, <br />
                Anandnagar, RT Nagar, <br />
                Bengaluru, Karnataka 560032
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Copyright */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-brand-sky">
        © 2026 PentaCloud Consulting. All rights reserved.
      </div>
    </footer>
  );
}