export default function OurSolution() {
  return (
    <section id='solution' className='section-padding bg-pickaxe-light-blue'>
      <div className='container-custom'>
        <div className='grid lg:grid-cols-2 gap-12 items-start'>
          {/* Left Column - Heading */}
          <div>
            <h2 className='text-4xl md:text-5xl font-light text-gray-900'>Our solution</h2>
          </div>

          {/* Right Column - Content */}
          <div className='space-y-8'>
            {/* Nested Section */}
            <div className='bg-pickaxe-pale-blue rounded-lg p-6'>
              <p className='text-sm text-gray-700 mb-4'>
                We're a team who previously helped millions of people across the internet.
              </p>
              <button className='btn-primary text-sm px-4 py-2'>Connect us</button>
            </div>

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
