import Image from 'next/image';

export default function FindJobs() {
  return (
    <section className='section-padding bg-pickaxe-gray'>
      <div className='container-custom'>
        <div className='grid lg:grid-cols-2 gap-12 items-start'>
          {/* Left Column - Heading */}
          <div>
            <h2 className='text-4xl md:text-5xl font-light text-gray-900'>Find jobs</h2>
            <div className='mt-8'>
              <Image
                src='/images/undraw_people-search_xpq4.svg'
                alt='Agreement illustration'
                width={300}
                height={260}
                className='w-full max-w-xs mx-auto'
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className='space-y-6'>
            <p className='text-lg text-gray-700 leading-relaxed'>
              PickAxe empowers skilled workers with complete control over their schedule and career. Our mobile app puts job opportunities directly in your hands, allowing you to accept or decline requests based on your availability and preferences.
            </p>

            <p className='text-lg text-gray-700 leading-relaxed'>
              From plumbers and electricians to carpenters and technicians, skilled professionals can manage their online/offline status, receive real-time job notifications, and track their progress with clients. Build your reputation through our rating system and enjoy flexible scheduling that works around your life, not the other way around.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
