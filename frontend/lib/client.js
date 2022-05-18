import sanityClient from '@sanity/client'
import imageUrlBuuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'brlrk0jc',
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: 'true',
    token: process.env.SANITY_TOKEN
});

const builder = imageUrlBuuilder(client);

export const urlFor =(source)=> builder.image(source);