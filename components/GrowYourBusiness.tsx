import Image from 'next/image';

export default function GrowYourBusiness() {
  return (
    <section className='section-padding bg-pickaxe-light-blue'>
      <div className='container-custom'>
        <div className='grid lg:grid-cols-2 gap-12 items-start'>
          {/* Left Column - Heading */}
          <div>
            <h2 className='text-4xl md:text-5xl font-light text-gray-900'>Grow your business</h2>
            <div className='mt-8'>
              <Image
                src='/images/undraw_finance_m6vw.svg'
                alt='Agreement illustration'
                width={300}
                height={260}
                className='w-full max-w-xs mx-auto'
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className='space-y-8'>
            {/* Main Content */}
            <div className='space-y-6'>
              <p className='text-lg text-gray-700 leading-relaxed font-light'>
                PickAxe empowers businesses and partners to unlock new revenue streams by maximizing the utilization of their existing resources. Manage your skilled workforce, equipment inventory, and raw materials through our comprehensive partner web application.
              </p>

              <p className='text-lg text-gray-700 leading-relaxed font-light'>
                Track performance analytics, monitor utilization rates, and set dynamic pricing for your resources. Our platform connects you with a broader customer base while providing detailed insights to help you optimize operations and grow your business efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
