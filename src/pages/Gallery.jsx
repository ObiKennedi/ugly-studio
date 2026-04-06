import GallerySection from "../components/GallerySection"

export default function Gallery() {
    return (
        <main>
            <GallerySection display={12} folder="/Gallery" ext="jpg" />
        </main>
    )
}