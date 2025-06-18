// import GridShape from "@/components/common/GridShape";
// import ThemeTogglerTwo from "@/components/common/ThemeTogglerTwo";
import { ReactNode } from "react";
import logo from "../../../../public/favicon.png"
import SignInimg from "@/assets/signIn/Pharmacy Illustrations 1.webp"

type Props = {
  children: ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  // return (
  //   <div className="flex min-h-screen">
  //     <div className="w-1/2 bg-[#80C9D3] flex items-center justify-center">
  //       <img src={SignInimg} alt="Illustration" className="w-3/4" />
  //     </div>

  //     <div className="w-1/2 flex items-center justify-center relative px-4">
  //       <div className="w-full max-w-md">
  //         <div className="absolute  left-1/2 -translate-x-1/2">
  //           <img src={logo} alt="Logo" className="w-20 h-20" />
  //         </div>

  //         <div className="mt-20">{children}</div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
 <div
      className="min-h-screen flex items-center justify-center px-4 py-10 bg-cover bg-center"
      style={{ backgroundImage: "url('/Bg-Image.svg')" }}
    >
      <div className="flex w-full max-w-7xl h-[700px] md:h-[80vh] rounded-2xl overflow-hidden flex-col md:flex-row">
        
        <div className="w-full md:w-1/2 h-full flex items-center justify-center  rounded-2xl overflow-hidden bg-[#80C9D3]">
          <img
            src={SignInimg}
            alt="Illustration"
            className="h-full w-auto object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 h-full flex items-center justify-center p-6">
          <div className="w-full max-w-md">
            <div className="flex justify-center mb-6">
              <img src={logo} alt="Logo" className="w-16 h-16" />
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>

  );

  
  
  




  

  
  
};
export default AuthLayout;
