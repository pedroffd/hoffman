'use client';
import { FAQItemList } from '../../mockedData';
import FAQ from '../components/faq';

const FAQPage = () => {
  return <FAQ faqs={FAQItemList} />;
};

export default FAQPage;
