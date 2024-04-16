'use client';
import { TermstemList } from '@/mockedData';
import Terms from '../components/terms';

const TermsOfUse = () => {
  return <Terms terms={TermstemList} />;
};

export default TermsOfUse;
