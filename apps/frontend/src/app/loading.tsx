export default async function LoadingHome() {
  return (
    <>
      <section className="flex justify-center items-center w-full h-screen min-h-screen">
        <div className="w-full flex flex-col justify-center items-center gap-[1rem]">
          <div className="w-[60%] p-5 rounded-full skeleton max-sm:w-[90%] max-lg:p-4 max-sm:p-3"></div>

          <div className="flex flex-col gap-2 w-full mt-2">
            <div className="w-[50%] p-3 mx-auto rounded-full skeleton max-sm:w-[80%] max-lg:p-2 max-sm:p-1"></div>
            <div className="w-[50%] p-3 mx-auto rounded-full skeleton max-sm:w-[80%] max-lg:p-2 max-sm:p-1"></div>
          </div>

          <div className="flex justify-center items-center mt-3 gap-5 max-sm:gap-3 max-sm:w-[95%]">
            <div className="w-[50px] h-[50px] rounded-sm skeleton max-sm:w-[25px] max-sm:h-[25px]"></div>
            <div className="w-[50px] h-[50px] rounded-sm skeleton max-sm:w-[25px] max-sm:h-[25px]"></div>
            <div className="w-[50px] h-[50px] rounded-sm skeleton max-sm:w-[25px] max-sm:h-[25px]"></div>
            <div className="w-[50px] h-[50px] rounded-sm skeleton max-sm:w-[25px] max-sm:h-[25px]"></div>
            <div className="w-[50px] h-[50px] rounded-sm skeleton max-sm:w-[25px] max-sm:h-[25px]"></div>
            <div className="w-[50px] h-[50px] rounded-sm skeleton max-sm:w-[25px] max-sm:h-[25px]"></div>
            <div className="w-[50px] h-[50px] rounded-sm skeleton max-sm:w-[25px] max-sm:h-[25px]"></div>
            <div className="w-[50px] h-[50px] rounded-sm skeleton max-sm:w-[25px] max-sm:h-[25px]"></div>
            <div className="w-[50px] h-[50px] rounded-sm skeleton max-sm:w-[25px] max-sm:h-[25px]"></div>
          </div>

          <div className="flex gap-5 justify-start items-center mt-3">
            <div className="py-6 px-15 rounded-full skeleton max-sm:py-5 max-sm:px-12"></div>
            <div className="py-6 px-15 rounded-full skeleton max-sm:py-5 max-sm:px-12"></div>
          </div>
        </div>
      </section>

      <section className="my-20">
        <div className="m-auto w-[80%] h-[25px] rounded-full skeleton max-sm:w-[90%] max-sm:h-[20px]"></div>
      </section>

      <section className="min-h-screen">
        <div className="w-[80%] h-screen mx-auto rounded-lg skeleton max-sm:w-[90%]"></div>
      </section>

      <section className="my-20">
        <div className="m-auto w-[80%] h-[25px] rounded-full skeleton max-sm:w-[90%] max-sm:h-[20px]"></div>
      </section>

      <section className="mx-auto my-20 w-[80%] flex gap-10 max-sm:w-[90%] max-xl:flex-col">
        <div className="w-[70%] h-[302px] rounded-lg skeleton max-xl:w-full"></div>
        <div className="w-[30%] h-[302px] rounded-lg skeleton max-xl:w-full max-xl:h-52"></div>
      </section>
    </>
  );
}