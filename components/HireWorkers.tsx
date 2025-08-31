import Image from 'next/image';

export default function HireWorkers() {
  return (
    <section className='section-padding bg-pickaxe-light-blue'>
      <div className='container-custom'>
        <div className='grid lg:grid-cols-2 gap-12 items-start'>
          {/* Left Column - Heading */}
          <div>
            <h2 className='text-4xl md:text-5xl font-light text-gray-900'>Hire workers</h2>
            <div className='mt-8'>
              <Image
                src='/images/undraw_hire_hadq.svg'
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
                Finding reliable skilled workers has never been easier. PickAxe's client mobile app connects you with verified professionals in your area, from plumbers and electricians to carpenters and technicians, all at your fingertips.
              </p>

              <p className='text-lg text-gray-700 leading-relaxed font-light'>
                Search by skill type, location, and availability to find the perfect match for your project. Track your job progress in real-time, communicate directly with workers, and rate your experience to help build our trusted community of verified professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
