import Image from 'next/image'
import { Linkedin } from 'lucide-react'

interface TeamMember {
  name: string
  role?: string
  image: string
  hasLinkedIn?: boolean
}

const teamMembers: TeamMember[] = [
  { name: 'Jett Russo', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { name: 'Evan Bell', role: 'Head of Design', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', hasLinkedIn: true },
  { name: 'Kenia Fischer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { name: 'Miguel', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { name: 'Scott', image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { name: 'Sierra Joseph', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { name: 'Evelyn Hunter', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
  { name: 'Enzo Brigs', image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
]

export default function Team() {
  return (
    <section className="section-padding bg-wokka-orange">
      <div className="container-custom">
        <div className="text-center">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              We're here, there, everywhere
            </h2>
            <p className="text-white/80 text-sm">
              We're a team who previously helped millions of people across the internet.
            </p>
          </div>
          
          {/* Team Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="flex items-center justify-center space-x-1">
                  <h3 className="text-white font-medium text-sm">{member.name}</h3>
                  {member.hasLinkedIn && (
                    <Linkedin className="w-4 h-4 text-white" />
                  )}
                </div>
                {member.role && (
                  <p className="text-white/70 text-xs mt-1">{member.role}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 