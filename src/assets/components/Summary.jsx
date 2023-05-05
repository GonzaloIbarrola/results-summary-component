import iconMemory from '../images/icon-memory.svg';
import iconReaction from '../images/icon-reaction.svg';
import iconVerbal from '../images/icon-verbal.svg';
import iconVisual from '../images/icon-visual.svg';

export default function Summary() {

  return(
    <section className='py-6 md:w-3/6 md:px-10 md:py-[38px]'>
      <div className="max-w-[315px] m-auto flex flex-col gap-6 md:gap-7">
        <h4 className='font-bold text-[18px] text-DarkNavy md:text-HeadingM'>Summary</h4>
        <div>
          <ul className='text- text-[16px]'>
            <li className='bg-Red/5'>
              <div className='inline-flex gap-3'><img src={iconReaction} alt="" /><span className='text-Red'>Reaction</span></div>
              <div>
                <p className='text-DarkNavy/50 leading-[20.85px] font-bold inline-flex gap-2'>
                  <span className='text-DarkNavy'>80</span>
                  /
                  <span>100</span>
                </p>
              </div>
            </li>
            <li className='bg-Yellow/5'>
              <div className='inline-flex gap-3'><img src={iconMemory} alt="" /><span className='text-Yellow'>Memory</span></div>
                <p className='text-DarkNavy/50 leading-[20.85px] font-bold inline-flex gap-2'>
                  <span className='text-DarkNavy'>92</span>
                  /
                  <span>100</span>
                </p>
            </li>
            <li className='bg-Green/5'>
              <div className='inline-flex gap-3'>
                <img src={iconVerbal} alt="" />
                <span className='text-Green'>Verbal</span></div>
              <div>
                <p className='text-DarkNavy/50 leading-[20.85px] font-bold inline-flex gap-2'>
                  <span className='text-DarkNavy'>61</span>
                  /
                  <span>100</span>
                </p>
              </div>
            </li>
            <li className='bg-Blue/5'>
              <div className='inline-flex gap-3'><img src={iconVisual} alt="" /><span className='text-Blue'>Visual</span></div>
              <div>
                <p className='text-DarkNavy/50 leading-[20.85px] font-bold inline-flex gap-2'>
                  <span className='text-DarkNavy'>73</span>
                  /
                  <span>100</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <button>Continue</button>
      </div>
    </section>
  )
}
