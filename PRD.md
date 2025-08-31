# PickAxe - Product Requirements Document

  

## 1. Executive Summary

  

### 1.1 Product Vision

PickAxe is a comprehensive marketplace platform that connects the general public with skilled workers, equipment rentals, raw materials suppliers, and business partners. The platform serves as a one-stop solution for service requests, equipment rentals, material procurement, and resource sharing.

  

### 1.2 Mission Statement

To democratize access to skilled services and resources by creating a trusted, efficient marketplace that benefits both service seekers and providers while maximizing utilization of underused business resources.

  

### 1.3 Success Metrics

- Monthly Active Users (MAU): 10K+ within 6 months

- Successful job completions: 80%+ completion rate

- User satisfaction: 4.5+ star average rating

- Partner engagement: 70%+ monthly active partners

- Revenue targets: Break-even within 12 months

  

## 2. Target Audience & User Personas

  

### 2.1 Primary Users

  

**Clients (Service Seekers)**

- Demographics: Homeowners, Condo owner, individuals aged 25-55

- Pain Points: Difficulty finding reliable skilled workers, transparent pricing, project tracking

- Goals: Quick service booking, quality assurance, fair pricing

  

**Skilled Workers (Service Providers)**

- Demographics: Independent contractors, craftsmen, technicians, skilled workers

- Pain Points: Finding consistent work, payment delays, lack of marketing reach

- Goals: Steady income, flexible scheduling, professional growth

  

**Partners (Businesses/Organizations)**

- Demographics: Construction companies, equipment rental businesses, material suppliers, small business owners

- Pain Points: Underutilized resources, inefficient resource management

- Goals: Additional revenue streams, better resource utilization

  

**Administrators (Internal Team)**

- Role: Platform management, quality control, customer support

- Goals: Efficient platform operations, user satisfaction, business growth

  

## 3. Platform Architecture

  

### 3.1 Application Ecosystem

- **Client Mobile App** (React Native/Expo)

- **Skilled Worker Mobile App** (React Native/Expo)

- **Partner Web Application** (Next.js)

- **Admin Web Application** (Next.js)

- **Backend API** (NestJS)

- **Database** (Supabase)

- **Payment Gateway** (Paymongo)

  

## 4. Feature Requirements

  

### 4.1 Client Mobile App Features

  

#### Core Features (P0 - Must Have)

- **User Registration & Authentication**

- Email/social media signup and login

- Profile management with verification

  

- **Service Search & Discovery**

- Search service providers with these criterias -  related skills type, location, availability, workers from Partners

- Workers from Partners are prioritised on recommended list 

- Recommended list are displayed one by one, then go to next item if Client isn't satisfied

- Service categories (plumbing, electrical, carpentry, etc.) are displayed
- Service provider information and ratings
  

- **Equipment Rental**

- Search equipments with these criterias - nearest location, availability, equipment from Partners

- Equipments from Partners are prioritised on recommended list

- Recommended list are displayed one by one, then go to next item if Client isn't satisfied

- Equipment categories (heavy equipments, or any unutilized equipments)
- Equipment information and ratings

- **Raw Material Purchasing**

- Search for any raw materials available on the app

- Raw materials from Partners within the area are prioritised on recommended list

- Supplier information and ratings

- **Booking & Job Management**

- Service, rent, purchase raw materials request creation upon search

- Job status tracking

  

#### Enhanced Features (P1 - Should Have)

- **Progress Tracking**

- Receive real-time updates from workers

- View uploaded photos/videos of work progress

- Timeline view of job milestones

  

- **Rating & Review System**

- Rate and review completed jobs

- View provider ratings and reviews

- Report inappropriate behavior

  

- **Payment Integration**

- Secure payment processing via Paymongo

- Multiple payment methods support

- Payment history and receipts

  

### 4.2 Skilled Worker Mobile App Features

  

#### Core Features (P0 - Must Have)

- **Worker Registration & Verification**

- Manage Profile with skills and certifications

- Document upload for verification

- Background check integration

- **Availability Management**

- Online/offline status toggle
  

- **Job Management**

- Receive and accept/decline job requests

- Job details and client information

#### Enhanced Features (P1 - Should Have)

- **Progress Reporting**

- Upload progress photos and videos

- Send status updates to clients


- **Communication Tools**

- Push notifications for updates

  

### 4.3 Partner Web Application Features

  

#### Core Features (P0 - Must Have)

- **Resource Management**

- Add/edit/remove skilled workers

- Equipment inventory management

- Raw material catalog management

  

- **Availability Control**

- Set resource availability schedules

- Pricing management for services/rentals

- Bulk operations for resource updates

  

- **Dashboard & Analytics**

- Revenue and utilization metrics

- Booking and request analytics

- Resource performance tracking

  

#### Enhanced Features (P1 - Should Have)

  

### 4.4 Admin Web Application Features

  

#### Core Features (P0 - Must Have)

- **User Management**

- View and manage all user accounts

- Verification and approval processes

- Account suspension/activation controls

  

- **Platform Operations**

- Monitor all transactions and jobs

- Handle disputes and complaints

- System configuration and settings

  

- **Content Management**

- Manage service categories

- Update platform policies

- Control featured listings

  

#### Enhanced Features (P1 - Should Have)

- **Analytics Dashboard**

- Platform usage statistics

- Revenue and growth metrics
  

- **Quality Control**

- Review flagged content and users

- Monitor service quality metrics

- Implement corrective actions

  

## 5. Technical Requirements

  

### 5.1 Performance Requirements

- App load time: < 3 seconds

- API response time: < 500ms for 95% of requests

- 99.9% uptime requirement

- Support for 10,000+ concurrent users

  

### 5.2 Security Requirements

- End-to-end encryption for sensitive data

- GDPR and data privacy compliance

- Secure payment processing (PCI DSS)

- Multi-factor authentication options

  

### 5.3 Integration Requirements

- **Payment Gateway**: Paymongo integration

- **Maps & Location**: react-native-geolocation-service

- **Push Notifications**: Expo Notifications

- **File Storage**: Supabase Storage

  

### 5.4 Technology Stack

```typescript

// Mobile Apps

- React Native (Expo SDK 50+)

- TypeScript

- Expo Router for navigation

- React Query for state management

- NativeBase/Tamagui for UI components

  

// Web Applications

- Next.js 14+ (App Router)

- TypeScript

- Tailwind CSS

- React Hook Form

- Recharts for analytics

  

// Backend

- NestJS with TypeScript

- Supabase (PostgreSQL)

- JWT authentication

- Cloudinary for media storage

  

// DevOps

- Docker containers

- GitHub Actions CI/CD

- Vercel deployment (web apps)

- EAS deployment (mobile apps)

```

  

## 6. User Experience & Design Guidelines

  

### 6.1 Design Principles

- **Simplicity**: Clean, intuitive interfaces

- **Accessibility**: WCAG 2.1 AA compliance

- **Consistency**: Unified design system across platforms

- **Trust**: Clear verification badges and security indicators

  

### 6.2 Key User Flows

1. **Client Booking Flow**: Search → Review Recommendation → Select → Book → Pay Convenience Fee → Track → Review

2. **Worker Job Flow**: Receive → Review Job Order → Accept → Execute → Update → Complete

3. **Partner Management Flow**: Login → Manage Resources → Monitor Performance

4. **Admin Operations Flow**: Monitor/Manage → Investigate → Take Action → Report

  

### 6.3 Mobile-First Approach

- Responsive design for all screen sizes

- Touch-friendly interaction elements

- Offline capability for critical features

- Progressive loading for better performance

  

## 7. Revenue Model

  

### 7.1 Commission Structure

- **Service Jobs**:  2-3.5% convenience fee 

- **Equipment Rentals**: 2-3.5% convenience fee 

- **Material Sales**: 5-8% commission from suppliers

- **Partner Subscriptions**:  2-3.5% convenience fee 

 
  

## 8. Development Timeline

  



  


  



  

## 9. Risk Assessment & Mitigation

  

### 9.1 Technical Risks

- **Risk**: Scalability challenges during rapid growth

- **Mitigation**: Cloud-native architecture with auto-scalinge

- **Risk**: Payment security vulnerabilities

- **Mitigation**: PCI DSS compliance and regular security audits

  

### 9.2 Business Risks

- **Risk**: Low initial adoption rates

- **Mitigation**: Targeted marketing and referral programs

  

- **Risk**: Quality control issues

- **Mitigation**: Robust verification and rating systems

  

### 9.3 Operational Risks

- **Risk**: Disputes between clients and workers

- **Mitigation**: Clear terms of service and mediation processes

  

## 10. Success Metrics & KPIs

  

### 10.1 User Engagement

- Daily/Monthly Active Users (DAU/MAU)

- Session duration and frequency

- Feature adoption rates

- User retention (30, 60, 90 days)

  

### 10.2 Business Metrics

- Gross Merchandise Value (GMV)

- Take rate (commission percentage)

- Customer Acquisition Cost (CAC)

- Lifetime Value (LTV)

  

### 10.3 Quality Metrics

- Job completion rates

- Average rating scores

- Response time to customer issues

- Platform reliability (uptime)

  

## 11. Compliance & Legal Considerations

  

### 11.1 Data Protection

- GDPR compliance for EU users

- Philippine Data Privacy Act compliance

- User consent management

- Right to data deletion

  

### 11.2 Labor Regulations

- Independent contractor classification

- Worker safety requirements

- Insurance and liability coverage

- Local licensing requirements

  

### 11.3 Business Compliance

- Business registration and permits

- Tax obligations and reporting

- Consumer protection laws

- Financial services regulations

  

---

  

**Document Version**: 1.0

**Last Updated**: August 2025

**Next Review**: September 2025



