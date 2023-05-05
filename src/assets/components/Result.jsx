export default function Result() {

  return(
    <section className="w-full md:h-full h-[356px] rounded-b-[32px] md:rounded-[32px] gradient1 flex flex-col justify-center items-center md:w-[368px]">
      <div className="text-center flex flex-col justify-center gap-6 md:gap-[35px] max-w-[260px]">
        <span className="text-LightBlue md:text-HeadingM text-BodyBold">Your Result</span>
        <div className="w-[140px] h-[140px] md:w-[200px] md:h-[200px] flex flex-col justify-center items-center m-auto gradient2 rounded-full">
          <p className="text-LightBlue">
            <span className="text-White font-extrabold text-[56px] md:text-[72px] leading-[72px]">76</span>
            <br />
            <span className="opacity-[51.68%] md:text-[18px]">of 100</span></p>
        </div>
        <div className="inline-flex flex-col gap-2 md:gap-[14px]">
          <h3 className="text-White text-[24px] md:text-HeadingL leading-[31.27px]">Great</h3>
          <p className="text-LightBlue leading-[20.85px] md:text-[18px] md:leading-[23px]">Your performance exceed 65% of the people conducting the test here!</p>
        </div>
      </div>
    </section>
  )
}
