import { ICard } from './components/ui/card-product-info';
import { FAQItem } from './app/components/faq';
import { TermsItem } from './app/components/terms';

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

export const TermstemList: TermsItem[] = [
  {
    title: 'Terms of Agreement',
    content: (
      <>
        <p className="font-light mb-4">
          (Last Reviewed on January 01, 2016) Welcome to the Medroster website,
          (the “Site”). The Site is a copyrighted work belonging to Medroster,
          Inc., a Delaware corporation (“Medroster”). Medroster grants you the
          right to use the Site and the features, content or applications
          offered in connection with the Site subject to the terms and
          conditions (“Terms”) set forth below.
        </p>
      </>
    ),
  },

  {
    title: 'PLEASE REVIEW THESE TERMS CAREFULLY BEFORE USING THE SITE',
    content: (
      <>
        <p className="font-light mb-4">
          THE TERMS OF THIS AGREEMENT (“AGREEMENT”) SETS FORTH THE LEGALLY
          BINDING TERMS FOR YOUR USE OF THE SITE. THIS AGREEMENT IS ACCEPTED BY
          YOUR ACCESSING, DOWNLOADING, AND/OR USE OF THE SITE. YOU MAY NOT USE
          THE SITE OR ACCEPT THE AGREEMENT IF (I) YOU ARE NOT OF LEGAL AGE TO
          FORM A BINDING CONTRACT, OR (II) YOU ARE PROHIBITED BY LAW FROM
          RECEIVING OR USING THE SITE. BY ACCESSING, DOWNLOADING, OR USING THE
          SITE, YOU REPRESENT AND WARRANT THAT YOU HAVE THE RIGHT, AUTHORITY,
          AND CAPACITY TO ENTER INTO THE AGREEMENT AND TO ABIDE BY ALL OF THE
          TERMS AND CONDITIONS SET FORTH HEREIN. IF YOU ACCESS, DOWNLOAD, OR USE
          THE SITE ON BEHALF OF A COMPANY, ENTITY, OR ORGANIZATION, YOU
          REPRESENT AND WARRANT THAT YOU ARE AN AUTHORIZED REPRESENTATIVE OF
          SUCH COMPANY, ENTITY, OR ORGANIZATION WITH THE AUTHORITY TO BIND IT TO
          THE AGREEMENT. IF YOU DO NOT AGREE WITH ALL PROVISIONS OF THIS
          AGREEMENT, PLEASE DO NOT ACCESS, DOWNLOAD, OR USE THE SITE.
        </p>
        <p className="font-light mb-4">
          By using the Site, you agree to comply with and to be bound by these
          Terms, and the terms set forth in Medroster’s Privacy Policy, the
          terms of which are incorporated into, and considered part of, this
          Agreement. Medroster’s Privacy Policy can be found at
          www.Medroster.com/privacypolicy.
        </p>
        <p className="font-light mb-4">
          We reserve the right to change these Terms at any time at our sole
          discretion. By using the Site after any such change, you agree to
          comply with and to be bound by these Terms as changed. Medroster
          reserves the right at any time and for any reason, with or without
          notice, to: (1) modify, suspend, interrupt or terminate operation of
          or access to the Site, or any portion thereof; and (2) modify or
          change the Site and the applicable terms and policies.
        </p>
      </>
    ),
  },

  {
    title: 'USE OF THE SITE',
    content: (
      <>
        <p className="font-light mb-4">
          Subject to the Terms, Medroster grants you a non-transferable,
          non-exclusive license to use, view, and access the Site solely for the
          purpose of using the Site as an applicant for employment, a current or
          potential customer, current or potential business partner, or current
          or potential investor in Medroster, and not to compete with Medroster.
        </p>
      </>
    ),
  },

  {
    title: ' WHAT YOU CANNOT DO THROUGH THE SITE',
    content: (
      <>
        <p className="font-light mb-4">
          In addition to other limitations set forth in these Terms, by using
          the Site, you agree not to: (1) use any data mining, robots, or
          similar data gathering and extraction methods in connection with the
          Site; (2) interfere with the operation of the Site or with any other
          person’s use of the Site; (3) impose an unreasonable burden on the
          Site or network; (4) breach, or attempt to breach, the security of the
          Site; (5) gain unauthorized access to the Site or any part thereof;
          (6) use the Site for any purpose that is beyond the scope of the
          Site’s expected use, illegal or prohibited by these Terms; (7) solicit
          any activity, unlawful or otherwise, that infringes Medroster’s rights
          or the rights of any other party; and (8) use the Site to transmit:
          spam, junk email, bulk email, promotions, or other solicitations,
          content that includes any advertising or marketing materials; content
          that may be deemed unlawful, threatening, harassing, racist, abusive,
          libelous, pornographic, vulgar, defamatory, obscene, indecent, or
          otherwise inappropriate, including any messages constituting or
          encouraging criminal conduct; content that violates or infringes on
          our legal rights or copyrights, or the legal rights or copyrights of
          others; or viruses, bugs, worms, or any other computer code that may
          harm a network, computer, server, hardware, software, or telephone
          equipment.
        </p>
      </>
    ),
  },

  {
    title: 'Medroster SERVICES SOFTWARE',
    content: (
      <>
        <p className="font-light mb-4">
          If you use, access or download any of Medroster’s software or
          services, you will be subject to the terms of Medroster’s End User
          Terms of Use License Agreement, the terms of which are incorporated
          into, and considered part of, this Agreement. Medroster’s End User
          Terms of Use License Agreement can be found at www.Medroster.com.
        </p>
      </>
    ),
  },

  {
    title: 'USER SAFETY USER AGE RESTRICTION',
    content: (
      <>
        <p className="font-light mb-4">
          Although Medroster cannot guarantee user safety, Medroster seeks to be
          responsive to your concerns. If you are aware of or have been the
          recipient of threatening, harassing, racist, abusive, libelous,
          pornographic, vulgar, defamatory, obscene, indecent, or otherwise
          inappropriate messages through the Site, then please send a brief
          description of your concerns to support@Medroster.com.
        </p>
        <p className="font-light mb-4">
          The Site shall not be used by any person under the age of 13, and by
          using the Site you are warranting that you are 13 years of age or
          older. Medroster also strongly recommends that children ages 13
          through 17 consult their parents or legal guardians before using the
          Site. If you believe a child under the age of 13 is using the Site,
          please send all pertinent information to support@Medroster.com.
        </p>
      </>
    ),
  },

  {
    title: 'ACCOUNT SECURITY',
    content: (
      <>
        <p className="font-light mb-4">
          If you open an account through the Site (including establishing a
          username and password), you agree to provide accurate and truthful
          information about yourself and to keep your account current. You are
          responsible for any activity that occurs under you account and you are
          entirely responsible for the security and secrecy of your account
          login information and for all activity that occurs on your account as
          a result of your failure to maintain the security or secrecy of your
          account login information. You agree to notify Medroster immediately
          of all unauthorized use of your account and if the security or secrecy
          of your account login information has been compromised. You may be
          held responsible for any losses incurred by Medroster or any other
          user of the Site that are in any way related to your failure to
          maintain the security of your account information.
        </p>
      </>
    ),
  },

  {
    title: 'INTELLECTUAL PROPERTY',
    content: (
      <>
        <p className="font-light mb-4">
          Unless otherwise stated, all intellectual property, materials, works,
          software, code and other functions used in conjunction with the Site,
          including, but not limited to, text, graphics, images, illustrations,
          designs, icons, photographs, video clips, and written and other
          materials that appear as part of the Site, as well as their selection
          and arrangement and “look and feel” (collectively, the “Content”) are
          protected by copyright, trademark, trade dress, patent, and/or other
          intellectual property laws, and any unauthorized use of the Content
          may violate such laws and these Terms. Except as expressly provided
          herein, Medroster does not grant any express or implied rights to use
          the Content. You agree not to copy, reproduce, republish, frame,
          download, transmit, modify, display, reverse engineer, create
          derivative works based on the Content or their selection and
          arrangement on the Site, sell, or participate in any sale of, rent,
          lease, loan, assign, distribute, license, sublicense, or exploit in
          any way, in whole or in part, any of the Content, the Site or any
          related software, except as expressly authorized herein. The Site may
          also make available materials, information and services provided by
          third parties, such as photographs, text, graphics, pictures, sound,
          video, information and software applications (collectively, the “Third
          Party Content”). The Third Party Content may be governed by separate
          license agreements that accompany such content. Third Party Content is
          not investigated, monitored or checked for accuracy, appropriateness,
          or completeness by us. Medroster offers no guarantees and assumes no
          responsibility or liability of any type with respect to the Third
          Party Content, including any liability resulting from incompatibility
          between the Third Party Content and the Content offered by Medroster.
          You agree that you will not hold Medroster responsible or liable with
          respect to the Third Party Content or seek to do so.
        </p>
        <p className="font-light mb-4">
          Further, we are not responsible for any third party websites accessed
          through the Site, and you should review the terms of use and policies
          of any website to which you navigate from the Site. If you decide to
          leave the Site and access third party websites or content, you do so
          at your own risk and you should be aware that our terms and policies
          no longer govern. To the extent the Site contains links to outside
          services and resources, you acknowledge that: (1) Medroster is not
          responsible for the content of any linked site or any link contained
          in a linked site, or any changes or updates to such sites; and (2)
          Medroster is not responsible for any other form of transmission
          received from any linked site. Medroster provides these links to you
          only as a convenience, and the inclusion of any link does not imply
          our approval or endorsement. Any issues or concerns regarding any such
          site should be directed to the owner or operator of that site.
        </p>
        <p className="font-light mb-4">
          “Medroster” and other Medroster graphics, logos, designs, page
          headers, button icons, scripts and Site names are trademarks in the
          United States and other countries. Our trademarks and trade dress, as
          well as third party trademarks, logos and Site marks contained on the
          Site, may not be used in connection with any product or Site in any
          manner that is likely to cause confusion and may not be copied,
          imitated, or used, in whole or in part, without the prior written
          permission of Medroster or such third party that may own the mark.
        </p>
      </>
    ),
  },

  {
    title: 'NOTICE OF COPYRIGHT INFRINGEMENT',
    content: (
      <>
        <p className="font-light mb-4">
          If you believe in good faith that information contained on the Site
          infringes your copyright, please provide us with written notification
          as set forth below. We will review all claims of copyright
          infringement received and remove content that we deem, in our sole
          discretion, to have been posted or distributed in violation of any
          such laws. To make a claim, please provide us with the following:
        </p>
        <ul className="list-disc font-light ml-10 my-3">
          <li>
            A clear description or identification of the copyrighted work that
            you claim was
          </li>
          <li>
            A clear description or identification of the material you claim
            infringes the
          </li>
          <li>
            Your contact information, preferably including an email address and
            telephone
          </li>
          <li>
            Include the following or similar statement: “I have a good faith
            belief that the
          </li>
          <li>
            The notice must be signed by the owner or the person authorized to
            act on its
          </li>
          <li>
            Medroster’s designated agent to receive and act on copyright
            violations infringed; copyrighted work and information reasonably
            sufficient to allow us to locate the material on the Site (e.g., a
            link to the material you claim is infringing); number; material that
            is claimed as copyright infringement is not authorized by the
            copyright owner, its agent, or the law.” that the information in the
            notification is accurate and I am the copyright owner, or am
            authorized to act on behalf of the owner, of an exclusive right that
            is allegedly infringed.” behalf. under the Digital Millennium
            Copyright Act (DMCA) may be contacted at: accounts@Medroster.com or
            Medroster, Attn: Copyright Claims, 604 arizona ave, Santa Monica,
            California 90401. We will review and address all notices that comply
            with the requirements set forth above. Please do not send any
            correspondence unrelated to claims of copyright infringement as they
            will not be responded to.
          </li>
        </ul>
        <p className="font-light mb-4">
          PLEASE NOTE THAT IF YOU KNOWINGLY MISREPRESENT THAT ONLINE CONTENT IS
          INFRINGING, YOU MAY BE SUBJECT TO SIGNIFICANT CIVIL PENALTIES, WHICH
          MAY INCLUDE MONETARY DAMAGES, COURT COSTS, AND ATTORNEYS’ FEES
          INCURRED BY US, BY ANY COPYRIGHT OWNER, OR BY ANY COPYRIGHT OWNER’S
          LICENSEE THAT IS INJURED AS A RESULT OF OUR RELYING UPON YOUR
          MISREPRESENTATION.
        </p>
        <p className="font-light mb-4">
          In accordance with the DMCA, Medroster has adopted a policy of
          terminating account holders who are deemed to be repeat copyright
          infringers.
        </p>
      </>
    ),
  },

  {
    title: 'APPLE, INC. APP STORE',
    content: (
      <>
        <p className="font-light mb-4">
          The Terms apply to your use of the Site and any iOS applications
          available via the Apple, Inc. (“Apple”) App Store (the “Application”),
          but the following additional terms also apply to the Application:
        </p>

        <ul className="list-disc font-light ml-10 my-3">
          <li>
            Both you and Medroster acknowledge that the Terms are concluded
            between you and Medroster only, and not with Apple, and that Apple
            is not responsible for the Application or any content therein;
          </li>

          <li>
            The Application is licensed to you on a limited, non-exclusive,
            non-transferrable, non-sublicensable basis, solely to be used in
            connection with the
          </li>

          <li>
            You will only use the Application in connection with an Apple device
            that you
          </li>

          <li>
            You acknowledge and agree that Apple has no obligation whatsoever to
            furnish
          </li>

          <li>
            In the event of any failure of the Application to conform to any
            applicable
          </li>

          <li>
            You acknowledge and agree that Medroster, and not Apple, is
            responsible
          </li>

          <li>
            You acknowledge and agree that, in the event of any third party
            claim that Services for your private, personal, non-commercial use,
            subject to all the terms and conditions of these Terms as they are
            applicable to the Services; own or control; any maintenance and
            support services with respect to the Application; warranty,
            including those implied by law, you may notify Apple of such
            failure; upon notification, Apple’s sole warranty obligation to you
            will be to refund to you the purchase price, if any, of the
            Application; for addressing any claims you or any third party may
            have in relation to the Application; the Application or your
            possession and use of the Application infringes that third party’s
            intellectual property rights, Medroster, and not Apple, will be
            responsible for the investigation, defense, settlement and discharge
            of any such infringement claim;
          </li>

          <li>
            You represent and warrant that you are not located in a country
            subject to a
          </li>

          <li>
            Both you and Medroster acknowledge and agree that, in your use of
            the
          </li>

          <li>
            Both you and Medroster acknowledge and agree that Apple and Apple’s
            U.S. Government embargo, or that has been designated by the U.S.
            Government as a “terrorist supporting” country, and that you are not
            listed on any U.S. Government list of prohibited or restricted
            parties; Application, you will comply with any applicable third
            party terms of agreement which may affect or be affected by such
            use; and subsidiaries are third party beneficiaries of these Terms,
            and that upon your acceptance of these Terms, Apple will have the
            right (and will be deemed to have accepted the right) to enforce
            these Terms against you as the third party beneficiary hereof.
          </li>
        </ul>
      </>
    ),
  },

  {
    title: 'INDEMNIFICATION',
    content: (
      <>
        <p className="font-light mb-4">
          You agree to defend, indemnify and hold harmless Medroster, its
          officers, shareholders, predecessors, successors in interest,
          directors, employees, agents, subsidiaries, affiliates, licensors and
          suppliers from and against any and all claims, charges, complaints,
          damages, losses, liabilities, costs and expenses (including attorneys’
          fees) due to, arising out of or relating in any way to your use of, or
          access to, the Site.
        </p>
      </>
    ),
  },

  {
    title: 'DISCLAIMER',
    content: (
      <>
        <p className="font-light mb-4">
          YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT, TO THE EXTENT PERMITTED BY
          APPLICABLE LAW, USE OF THE SITE IS AT YOUR SOLE RISK AND THAT THE
          ENTIRE RISK AS TO SATISFACTORY QUALITY, PERFORMANCE, ACCURACY AND
          EFFORT IS WITH YOU. TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SITE
          IS PROVIDED “AS IS” AND “AS AVAILABLE” WITH ALL FAULTS AND WITHOUT
          WARRANTY OF ANY KIND, AND WE HEREBY DISCLAIM ALL WARRANTIES AND
          CONDITIONS WITH RESPECT TO THE SITE, EITHER EXPRESS, IMPLIED OR
          STATUTORY, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
          AND/OR CONDITIONS OF MERCHANTABILITY, SATISFACTORY QUALITY, FITNESS
          FOR A PARTICULAR PURPOSE, ACCURACY, QUIET ENJOYMENT, AND
          NON-INFRINGEMENT OF THIRD PARTY RIGHTS. WE DO NOT WARRANT AGAINST
          INTERFERENCE WITH YOUR ENJOYMENT OF THE SITE, THAT THE FUNCTIONS
          CONTAINED IN OR PERFORMED BY THE SITE WILL MEET YOUR REQUIREMENTS,
          THAT THE OPERATION OF THE SITE WILL BE UNINTERRUPTED OR ERROR-FREE,
          THAT ANY UPDATE WILL CONTINUE TO BE MADE AVAILABLE, THAT DEFECTS IN
          THE SITE WILL BE CORRECTED, OR THAT THE SITE WILL BE COMPATIBLE OR
          WORK WITH ANY THIRD PARTY SOFTWARE, APPLICATIONS OR THIRD PARTY
          SERVICES. INSTALLATION OF THIS SITE MAY AFFECT THE USABILITY OF THIRD
          PARTY SOFTWARE, APPLICATIONS OR THIRD PARTY SERVICES. YOU FURTHER
          ACKNOWLEDGE THAT THE SITE IS NOT INTENDED OR SUITABLE FOR USE IN
          SITUATIONS OR ENVIRONMENTS WHERE THE FAILURE OR TIME DELAY OF, OR
          ERRORS OR INACCURACIES IN, THE CONTENT, DATA OR INFORMATION PROVIDED
          BY THE SITE COULD LEAD TO DEATH, PERSONAL INJURY, OR SEVERE PHYSICAL
          OR ENVIRONMENTAL DAMAGE. NO ORAL OR WRITTEN INFORMATION OR ADVICE
          GIVEN BY US OR AN APPROVED REPRESENTATIVE SHALL CREATE A WARRANTY.
          SHOULD THE SITE PROVE DEFECTIVE, YOU ASSUME THE ENTIRE COST OF ALL
          NECESSARY SERVICING, REPAIR OR CORRECTION, IF APPLICABLE. SOME
          JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES OR
          LIMITATIONS ON APPLICABLE STATUTORY RIGHTS OF A CONSUMER, SO THE ABOVE
          EXCLUSIONS AND LIMITATIONS MAY NOT APPLY TO YOU.
        </p>
      </>
    ),
  },

  {
    title: 'LIMITATION OF LIABILITY',
    content: (
      <>
        <p className="font-light mb-4">
          Except where prohibited by law, in no event will Medroster its
          officers, shareholders, predecessors, successors in interest,
          directors, employees, agents, subsidiaries, affiliates, licensors and
          suppliers be liable for any indirect, special, punitive, incidental,
          exemplary or consequential damages that result from: (1) the use of,
          or inability to use, the Site; (2) the performance of the Site; or (3)
          the conduct of other users of the Site, even if Medroster has been
          advised of the possibility of such damages. You assume total
          responsibility for your use of the Site. Your only remedy against
          Medroster for dissatisfaction with the Site is to stop using the Site.
          If, notwithstanding the terms herein, Medroster is found liable to you
          for any damage or loss which arises out of or is in any way connected
          with your use of the Site, Medroster’s liability shall in no event
          exceed $100 US Dollars. In addition to the foregoing limitations of
          liability, you agree that you will not join any claim against
          Medroster with the claim of any other person or entity in a lawsuit,
          arbitration or other proceeding; that no claim you have against
          Medroster shall be resolved on a classwide basis; and that you will
          not assert a claim in a representative capacity against Medroster on
          behalf of anyone else.
        </p>
      </>
    ),
  },

  {
    title: 'CONTROLLING LAW AND SEVERABILITY',
    content: (
      <>
        {' '}
        <p className="font-light mb-4">
          This Agreement shall be construed in accordance with the laws of the
          State of California, without regard to any conflict of law provisions.
          Any dispute arising under this Agreement shall be resolved exclusively
          by the state and/or federal courts of the State of California, County
          of Los Angeles and/or the Central District of California. If a court
          of competent jurisdiction finds any provision or portion of these
          terms and conditions unenforceable, the remainder shall continue in
          full force and effect.
        </p>
      </>
    ),
  },

  {
    title: 'ENTIRE AGREEMENT; MODIFICATIONS',
    content: (
      <>
        {' '}
        <p className="font-light mb-4">
          This Agreement constitutes the entire agreement between the parties
          with respect to the terms and conditions governing your use and access
          to the Site. This Agreement supersedes and cancels all previous
          written and previous or contemporaneous oral communications,
          proposals, representations, and agreements relating to the subject
          matter contained herein. This Agreement prevails over any pre-printed,
          conflicting or additional terms of any purchase order, ordering
          document, acknowledgement or confirmation or other document issued by
          you. This Agreement may be modified by a “click wrap” or “click
          accept” agreement that Medroster incorporates into or as a condition
          of downloading software. Except as expressly provided herein, this
          Agreement may be amended, or any term or condition set forth herein
          waived, only by a writing hand signed by both parties.
        </p>
      </>
    ),
  },

  {
    title: 'WAIVER',
    content: (
      <>
        <p className="font-light mb-4">
          The failure of either party to enforce any rights granted hereunder or
          to take action against the other party in the event of any breach
          hereunder shall not be deemed a waiver by that party as to subsequent
          enforcement of rights or subsequent actions in the event of future
          breaches.
        </p>
      </>
    ),
  },

  {
    title: 'NOTICE',
    content: (
      <>
        {' '}
        <p className="font-light mb-4">
          Any notice required or permitted to be given in accordance with this
          Agreement shall be in writing. Notices to Medroster shall be sent by
          personal delivery, registered or certified mail (return receipt
          requested, postage prepaid) or commercial express courier (with
          written verification of receipt) to: Medroster, Inc., 604 Arizona ave,
          Santa Monica California 90401, U.S.A., Attention: General Counsel. For
          contractual purposes, you consent to receive communications from
          Medroster electronically. Notices sent to you shall be sent by
          personal delivery, electronic mail, registered or certified mail
          (return receipt requested, postage prepaid) or commercial express
          courier (with written verification of receipt) to the address listed
          on your account. All notices will be deemed given: (i) when delivered
          personally; (ii) 24 hours after electronic mail is sent, unless
          Medroster is notified that the email address is invalid; (iii) five
          (5) days after having been sent by registered or certified mail, (or
          ten (10) days for international mail; or (iv) one (1) day after
          deposit with a commercial express courier specifying next day delivery
          (or two (2) days for international courier packages specifying 2-day
          delivery). Either party may change its address for receipt of notice
          by notice to the other party in accordance with this Section.
        </p>
      </>
    ),
  },

  {
    title: 'EQUITABLE RELIEF',
    content: (
      <>
        <p className="font-light mb-4">
          The parties agree that a material breach of this Agreement adversely
          affecting Medroster’s intellectual property rights in the Site may
          cause irreparable injury to Medroster for which monetary damages would
          not be an adequate remedy and Medroster shall be entitled to equitable
          relief (without a requirement to post a bond) in addition to any
          remedies it may have hereunder or at law.
        </p>
      </>
    ),
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
