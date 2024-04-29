export default async function Image({ chapter, imageName, link }) {
    const image = await require(link);
    return image;
}