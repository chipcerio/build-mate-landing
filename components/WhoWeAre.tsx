export default function WhoWeAre() {
  return (
    <section className="section-padding bg-wokka-light-yellow">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Heading */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Who we are & how we arrived here?
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
              <p className="text-lg text-gray-700 leading-relaxed">
                Started in 2013 by Shawn Lemon, The Digital Organizer partners with forward-thinking businesses to create streamlined, effective, and easy-to-use digital organization systems. It is our mission to empower people with the tools they need to supercharge their productivity so that they can get more of the right things done.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Shawn spent the early part of his career working as a Creative at Apple where he focused on training people how to use their products—whether it was a new computer or an app they had never used before. Throughout his nearly 7 years there, he began to see a pattern with his customers: day after day, in thousands of training sessions, people came with the same goals—to start fresh with a new device, learn how to use innovative software, and start creative projects. However, once people transferred their information onto their new Macs, their digital workspaces were a giant mess. Seeing a need in the market motivated Shawn to begin moonlighting to help people get their Macs organized, in sync, and backed up. After some success, word spread quickly and Shawn needed to quit his job with Apple in order to keep up with the demand. And The Digital Organizer was born.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 