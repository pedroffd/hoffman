import { ICard } from './components/ui/card-product-info';
import { FAQItem } from './app/components/faq';

export const homepageCards: ICard[] = [
  {
    avatarFallback: 'Communication',
    avatarSize: 24,
    imageSrc: '/images/communication.png',
    cardTitle: 'Communication',
    cardDescription:
      'Currently, the medical community is behind the times when it comes to communication technology.',
  },
  {
    avatarFallback: 'Inter-office',
    avatarSize: 24,
    imageSrc: '/images/inter-office.png',
    cardTitle: 'Inter-office',
    cardDescription:
      'With Interoffice Messaging, you can communicate with physicians outside of your practice.',
  },
  {
    avatarFallback: 'Security',
    avatarSize: 24,
    imageSrc: '/images/security.png',
    cardTitle: 'Security',
    cardDescription:
      'Messages are encrypted and deleted after (amount of time) to comply with HIPAA standards.',
  },
  {
    avatarFallback: 'Native',
    avatarSize: 24,
    imageSrc: '/images/native.png',
    cardTitle: 'Native',
    cardDescription:
      'Eliminating the need for inefficient phone calls and emails. Your staff and patients will thank you.',
  },
];

export const FAQItemList: FAQItem[] = [
  {
    title: 'What is Medroster?',
    content: (
      <>
        <p className="font-light mb-4">
          Medroster is a HIPAA-secure communications platform for the medical
          community. Our purpose is to make communication between doctors, their
          staff and patients more safe and efficient by simulating how you
          communicate in real life. Medroster is cross-platform and works across
          desktop, iOS, Android, and tablet.
        </p>
      </>
    ),
  },

  {
    title: 'What is a "Place"?',
    content: (
      <>
        <p className="font-light mb-4">
          A "Place" is just another word we use to refer to any medical business
          or establishment.
        </p>
      </>
    ),
  },

  {
    title: 'What is a "Space"?',
    content: (
      <>
        <p className="font-light mb-4">
          A "Space" is what we call a department or subdivision within your
          Place. Like most businesses, yours is likely comprised of different
          offices. In our effort to streamline communications within your
          business, we allow users to virtually recreate the structure of their
          business to give users the ability to communicate with the right
          people every time. This also provides a layer of security by ensuring
          only the people who are meant to view communications are able to.
        </p>
      </>
    ),
  },

  {
    title: 'How can Medroster make my medical business more efficient?',
    content: (
      <>
        <p className="font-light mb-4">
          Currently, the medical community is behind the times when it comes to
          technology. Any business model that still relies on the FAX machine
          could sure use an update.
        </p>
        <p className="font-light mb-4">
          When you first log in to Medroster, you will be asked to create Spaces
          (or departments) for your business. After you add your staff, you can
          assign each staff user to the department they work in normally. This
          serves several functions:
        </p>
        <ul className="list-disc font-light ml-10 my-3">
          <li>
            All communications within each space are secure and cannot be seen
            by users without access (HIPAA).
          </li>
          <li>
            You can choose to communicate with an entire department rather than
            each person individually, saving valuable time.
          </li>
          <li>
            Patient users can directly communicate with the department/person
            they need rather than going through a receptionist - allowing your
            staff to avoid sorting through emails and time-consuming phone
            calls.
          </li>
        </ul>
      </>
    ),
  },

  {
    title: 'How much does Medroster cost to use?',
    content: (
      <>
        <p className="font-light mb-4">Medroster is currently free to use.</p>
      </>
    ),
  },

  {
    title: 'Is Medroster secure?',
    content: (
      <>
        <p className="font-light mb-4">
          Medroster communications are encrypted and are HIPAA compliant.
        </p>
      </>
    ),
  },

  {
    title: 'Can I use Medroster on my mobile phone?',
    content: (
      <>
        <p className="font-light mb-4">
          Medroster is accessible for all doctors, staff, and patients on
          mobile. Doctors and staff can access Medroster on every platform,
          while patients are only able to access Medroster through the
          application on Android or iOS. The Medroster application will be
          available for medical professionals soon.
        </p>
      </>
    ),
  },

  {
    title: 'Do I need to be a physician to sign up for Medroster?',
    content: (
      <>
        <p className="font-light mb-4">
          To sign up for Medroster, you must have an NPI number or be invited by
          a member with NPI number to ensure HIPAA compliance and security.
        </p>

        <p className="font-light mb-4">
          If you are a patient, your doctor will have to sign you up.
        </p>
      </>
    ),
  },

  {
    title: "Why can't I sign up?",
    content: (
      <>
        <p className="font-light mb-4">
          To comply with HIPAA standards, we must verify the identity of every
          user. If you are having an issue signing in, we will notify you of the
          issue shortly and attempt to resolve your case.
        </p>
      </>
    ),
  },
];
