import  SanityClient  from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client =  SanityClient({
  projectId: 'dxnjrmy7',
  dataset: 'production',
  apiVersion: '2023-08-05',
  useCdn: true,
  token: 'skTH9JjGwuamZl156nsREvvWni4Yc0RBLrwzQWmIdggnVbFrvPJwQOigElDDiuV92sVfQeXtNAjrTaTqarNHZ23IAo1h80FEL9twWfHsZdrJCjQmUaCoBGDQsWUAKeY3X7EqDVc8Kx4Jlg3Cxt746tYyZHsB5A1EsloVT83BmJxyXjfn1074',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
