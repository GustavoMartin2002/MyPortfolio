export default async function LoadingProjects() {
  return (
    <>
      <section className="flex justify-center items-center w-full h-screen min-h-screen">
        <div className="w-full flex flex-col justify-center items-center m-auto gap-[1rem]">
          <div className="w-[50%] p-5 rounded-full skeleton max-lg:p-4 max-sm:w-[80%]"></div>

          <div className="w-full mt-2">
            <div className="w-[40%] p-3 rounded-full skeleton mt-2 mx-auto max-lg:w-[90%] max-sm:p-2"></div>
            <div className="w-[40%] p-3 rounded-full skeleton mt-2 mx-auto max-lg:w-[90%] max-sm:p-2"></div>
          </div>
        </div>
      </section>

      <section>
        <div className="m-auto w-[80%] h-[25px] rounded-full skeleton max-sm:w-[90%] max-sm:h-[20px]"></div>
      </section>

      <section className="min-h-[80vh] flex justify-center items-center w-full h-full max-sm:min-h-[70vh]">
        <div className="rounded-md skeleton my-7 mx-auto w-[600px] h-[600px] max-sm:w-[90%] max-sm:h-[450px]"></div>
      </section>
    </>
  );
}