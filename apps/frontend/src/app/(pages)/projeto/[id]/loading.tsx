export default function LoadingProject() {
  return (
    <section 
      className="w-[50%] flex flex-col justify-center m-auto p-5 mt-30
      max-2xl:w-[60%] max-xl:w-[65%] max-lg:w-[70%] max-lg:mt-10 max-md:w-[80%] max-sm:w-[95%]"
    >
      <div className="w-[90%]  py-6 rounded-full skeleton"></div>
      <div className="w-full h-[400px] rounded-sm my-10 skeleton max-md:my-5 max-lg:h-[300px] max-md:h-[250px] max-sm:h-[200px]"></div>

      <div className="w-full py-24 mb-10 rounded-lg skeleton max-md:mb-5"></div>

      <div className="w-full m-auto flex justify-center gap-6 mb-10 max-md:mb-5 max-sm:flex-col">
        <div className="w-[50%] py-12 rounded-lg skeleton max-sm:w-full"></div>
        <div className="w-[50%] py-12 rounded-lg skeleton max-sm:w-full"></div>
      </div>

      <div className="w-full py-14 rounded-lg skeleton mb-10 max-md:mb-5"></div>

      <div className="w-full flex gap-5 mt-10 justify-center items-center max-md:my-5">
        <div className="w-32 p-7 rounded-full skeleton max-sm:p-4"></div>
        <div className="w-32 p-7 rounded-full skeleton max-sm:p-4"></div>
      </div>
    </section>
  )
}