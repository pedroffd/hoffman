'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

/* TODO:
LIST OF ITEMS WITH BULLET POINTS IN THE TERMS PAGE */
const TermsOfUse = () => {
  return (
    <div className="container max-w-6xl bg-muted">
      <h1 className="flex items-center justify-center align-middle text-4xl h-64 text-text-title">
        Terms of Service
      </h1>
      <div className="text-justify">
        <h2>Terms of Agreement</h2>
        <p>
          (Last Reviewed on January 01, 2016) Welcome to the Medroster website,
          (the “Site”). The Site is a copyrighted work belonging to Medroster,
          Inc., a Delaware corporation (“Medroster”). Medroster grants you the
          right to use the Site and the features, content or applications
          offered in connection with the Site subject to the terms and
          conditions (“Terms”) set forth below.
        </p>

        <h2>PLEASE REVIEW THESE TERMS CAREFULLY BEFORE USING THE SITE</h2>
        <p>
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
        <p>
          By using the Site, you agree to comply with and to be bound by these
          Terms, and the terms set forth in Medroster’s Privacy Policy, the
          terms of which are incorporated into, and considered part of, this
          Agreement. Medroster’s Privacy Policy can be found at
          www.Medroster.com/privacypolicy.
        </p>
        <p>
          We reserve the right to change these Terms at any time at our sole
          discretion. By using the Site after any such change, you agree to
          comply with and to be bound by these Terms as changed. Medroster
          reserves the right at any time and for any reason, with or without
          notice, to: (1) modify, suspend, interrupt or terminate operation of
          or access to the Site, or any portion thereof; and (2) modify or
          change the Site and the applicable terms and policies.
        </p>

        <h2>USE OF THE SITE</h2>
        <p>
          Subject to the Terms, Medroster grants you a non-transferable,
          non-exclusive license to use, view, and access the Site solely for the
          purpose of using the Site as an applicant for employment, a current or
          potential customer, current or potential business partner, or current
          or potential investor in Medroster, and not to compete with Medroster.
        </p>

        <h2>WHAT YOU CANNOT DO THROUGH THE SITE</h2>
        <p>
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

        <h2>Medroster SERVICES SOFTWARE</h2>
        <p>
          If you use, access or download any of Medroster’s software or
          services, you will be subject to the terms of Medroster’s End User
          Terms of Use License Agreement, the terms of which are incorporated
          into, and considered part of, this Agreement. Medroster’s End User
          Terms of Use License Agreement can be found at www.Medroster.com.
        </p>

        <h2>USER SAFETY USER AGE RESTRICTION</h2>
        <p>
          Although Medroster cannot guarantee user safety, Medroster seeks to be
          responsive to your concerns. If you are aware of or have been the
          recipient of threatening, harassing, racist, abusive, libelous,
          pornographic, vulgar, defamatory, obscene, indecent, or otherwise
          inappropriate messages through the Site, then please send a brief
          description of your concerns to support@Medroster.com.
        </p>
        <p>
          The Site shall not be used by any person under the age of 13, and by
          using the Site you are warranting that you are 13 years of age or
          older. Medroster also strongly recommends that children ages 13
          through 17 consult their parents or legal guardians before using the
          Site. If you believe a child under the age of 13 is using the Site,
          please send all pertinent information to support@Medroster.com.
        </p>

        <h2>ACCOUNT SECURITY</h2>
        <p>
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

        <h2>INTELLECTUAL PROPERTY</h2>
        <p>
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
        <p>
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
        <p>
          “Medroster” and other Medroster graphics, logos, designs, page
          headers, button icons, scripts and Site names are trademarks in the
          United States and other countries. Our trademarks and trade dress, as
          well as third party trademarks, logos and Site marks contained on the
          Site, may not be used in connection with any product or Site in any
          manner that is likely to cause confusion and may not be copied,
          imitated, or used, in whole or in part, without the prior written
          permission of Medroster or such third party that may own the mark.
        </p>

        <h2>NOTICE OF COPYRIGHT INFRINGEMENT</h2>
        <p>
          If you believe in good faith that information contained on the Site
          infringes your copyright, please provide us with written notification
          as set forth below. We will review all claims of copyright
          infringement received and remove content that we deem, in our sole
          discretion, to have been posted or distributed in violation of any
          such laws. To make a claim, please provide us with the following:
        </p>
        <p>
          PLEASE NOTE THAT IF YOU KNOWINGLY MISREPRESENT THAT ONLINE CONTENT IS
          INFRINGING, YOU MAY BE SUBJECT TO SIGNIFICANT CIVIL PENALTIES, WHICH
          MAY INCLUDE MONETARY DAMAGES, COURT COSTS, AND ATTORNEYS’ FEES
          INCURRED BY US, BY ANY COPYRIGHT OWNER, OR BY ANY COPYRIGHT OWNER’S
          LICENSEE THAT IS INJURED AS A RESULT OF OUR RELYING UPON YOUR
          MISREPRESENTATION.
        </p>
        <p>
          In accordance with the DMCA, Medroster has adopted a policy of
          terminating account holders who are deemed to be repeat copyright
          infringers.
        </p>

        <h2>APPLE, INC. APP STORE</h2>
        <p>
          The Terms apply to your use of the Site and any iOS applications
          available via the Apple, Inc. (“Apple”) App Store (the “Application”),
          but the following additional terms also apply to the Application:
        </p>
        <h2>INDEMNIFICATION</h2>
        <p>
          You agree to defend, indemnify and hold harmless Medroster, its
          officers, shareholders, predecessors, successors in interest,
          directors, employees, agents, subsidiaries, affiliates, licensors and
          suppliers from and against any and all claims, charges, complaints,
          damages, losses, liabilities, costs and expenses (including attorneys’
          fees) due to, arising out of or relating in any way to your use of, or
          access to, the Site.
        </p>
        <h2>DISCLAIMER</h2>
        <p>
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
        <h2>LIMITATION OF LIABILITY</h2>
        <p>
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
        <h2>CONTROLLING LAW AND SEVERABILITY</h2>
        <p>
          This Agreement shall be construed in accordance with the laws of the
          State of California, without regard to any conflict of law provisions.
          Any dispute arising under this Agreement shall be resolved exclusively
          by the state and/or federal courts of the State of California, County
          of Los Angeles and/or the Central District of California. If a court
          of competent jurisdiction finds any provision or portion of these
          terms and conditions unenforceable, the remainder shall continue in
          full force and effect.
        </p>
        <h2>ENTIRE AGREEMENT; MODIFICATIONS</h2>
        <p>
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
        <h2>WAIVER</h2>
        <p>
          The failure of either party to enforce any rights granted hereunder or
          to take action against the other party in the event of any breach
          hereunder shall not be deemed a waiver by that party as to subsequent
          enforcement of rights or subsequent actions in the event of future
          breaches.
        </p>
        <h2>NOTICE</h2>
        <p>
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
        <h2>EQUITABLE RELIEF</h2>
        <p>
          The parties agree that a material breach of this Agreement adversely
          affecting Medroster’s intellectual property rights in the Site may
          cause irreparable injury to Medroster for which monetary damages would
          not be an adequate remedy and Medroster shall be entitled to equitable
          relief (without a requirement to post a bond) in addition to any
          remedies it may have hereunder or at law.
        </p>
        <div className="flex flex-row items-center align-middle space-x-4 justify-center mt-24 mb-6">
          <p>How can we help you?</p>{' '}
          <Button className="text-white w-44 my-3" size="lg">
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
