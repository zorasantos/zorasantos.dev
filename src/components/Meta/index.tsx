import Head from 'next/head';

type IMetaProps = {
  title: string;
  description: string;
}

export default function Meta({ title, description }: IMetaProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta
        name='keywords'
        content='react, blog, Zoranildo Santos, tutorial'
      />
    </Head>
  );
};