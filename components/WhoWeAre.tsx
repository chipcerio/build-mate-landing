export default function WhoWeAre() {
  return (
    <section className="section-padding bg-wokka-light-yellow">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Heading */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              Quisque eu fringilla orci
            </h2>
          </div>
          
          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Nested Section */}
            <div className="bg-wokka-yellow rounded-lg p-6">
              <p className="text-sm text-gray-700 mb-4">
                We're a team who previously helped millions of people across the internet.
              </p>
              <button className="btn-primary text-sm px-4 py-2">
                Connect us
              </button>
            </div>
            
            {/* Main Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at semper elit, id condimentum leo. Aenean erat lorem, laoreet a nisi pharetra, dignissim pretium leo. Praesent a arcu eget erat venenatis efficitur vitae vel ex. Fusce ac faucibus tellus. Praesent gravida, mauris porttitor hendrerit condimentum, nunc felis faucibus felis, ac tristique metus elit nec sem.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                Suspendisse rutrum ut libero at auctor. Nulla ut lectus augue. Quisque vitae dolor quis felis vestibulum tincidunt. Quisque eu fringilla orci. Ut venenatis lacus vitae orci blandit ullamcorper. Sed hendrerit nisl augue, a posuere enim hendrerit sed. Donec pellentesque sit amet risus a dictum. Vivamus dictum tortor quis leo gravida, non ullamcorper dolor tempor. Praesent a ultrices erat, quis luctus massa. Nam placerat nisl risus, sed blandit magna pharetra id. Pellentesque congue justo sed ex pretium, vitae ornare lorem hendrerit. Ut massa orci, porttitor vel justo a, malesuada interdum tellus. Morbi tellus odio, imperdiet vel arcu vel, hendrerit dapibus neque. Nam sit amet neque tellus. Aliquam ut ante ultrices, lobortis nulla ac, faucibus mi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 