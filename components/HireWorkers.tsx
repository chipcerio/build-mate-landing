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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at semper elit, id
                condimentum leo. Aenean erat lorem, laoreet a nisi pharetra, dignissim pretium leo.
              </p>

              <p className='text-lg text-gray-700 leading-relaxed font-light'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at semper elit, id
                condimentum leo. Aenean erat lorem, laoreet a nisi pharetra, dignissim pretium leo.
                Praesent a arcu eget erat venenatis efficitur vitae vel ex. Fusce ac faucibus
                tellus. Praesent gravida, mauris porttitor hendrerit condimentum, nunc felis
                faucibus felis, ac tristique metus elit nec sem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
