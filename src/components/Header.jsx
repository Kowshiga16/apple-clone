import AppleHeroBanner from "../images/AppleHeroBanner.png" 
function Header(){
return(
    <>
    <section  className="bg-[#F5F5F7] py-10">
          <div>
        <h2 className="font-semibold text-sm text-center  ">Iphone</h2>
        <h1 className="text-center text-xl mt-2 ">Meet the Iphone 16 family</h1>
<div className="flex justify-center mt-5 gap-4">
 <button className="bg-blue-600 text-white p-2 border rounded-full  ">Learn more</button>
        <button className="border border-blue-600 rounded-full p-2 hover:bg-sky-100">Shop Iphone</button>
</div>
       <p className="text-center mt-5">Built for {""} <span  className="text-purple-500">Apple Intelligence.</span></p>
<div className="flex justify-center mt-5">
 <img src={AppleHeroBanner} alt="logo" className="w-50 h-80  "/>
</div>
      
    </div>
    </section>
  
    </>
)
}

export default Header